// eliminar-modal.page.ts
import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-eliminar-modal',
  templateUrl: './eliminar-modal.page.html',
  styleUrls: ['./eliminar-modal.page.scss'],
})
export class EliminarModalPage {
  personajeId: any;

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private apiService: ApiService
  ) {
    this.personajeId = this.navParams.get('personajeId');
  }

  confirmarEliminacion() {
    this.apiService.eliminarPersonaje(this.personajeId).subscribe(() => {
      this.modalCtrl.dismiss({ eliminado: true });
    }, (error) => {
      console.error(error);
      // Manejar el error de eliminación si es necesario
    });
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}
