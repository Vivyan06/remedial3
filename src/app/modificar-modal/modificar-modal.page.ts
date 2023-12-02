import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modificar-modal',
  templateUrl: './modificar-modal.page.html',
  styleUrls: ['./modificar-modal.page.scss'],
})
export class ModificarModalPage {
  personaje: any; // Objeto del personaje a modificar

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private apiService: ApiService
  ) {
    // Verificamos si se pasa el ID del personaje y lo almacenamos
    const personajeId = this.navParams.get('personajeId');
    if (personajeId) {
      this.apiService.getPersonajeById(personajeId).subscribe((data: any) => {
        this.personaje = data;
      });
    }
  }

  guardarCambios() {
    if (this.personaje) {
      this.apiService.actualizarPersonaje(this.personaje._id, this.personaje)
        .subscribe(() => {
          this.modalCtrl.dismiss({ actualizado: true });
        }, (error) => {
          console.error(error);
          // Manejar el error al guardar los cambios
        });
    }
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}
