import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NavController, ModalController } from '@ionic/angular';
import { ModificarModalPage } from '../modificar-modal/modificar-modal.page'; // Importa el modal de modificación
import { EliminarModalPage } from '../eliminar-modal/eliminar-modal.page'; // Importa el modal de eliminación

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  personajes: any[] = []; // Inicializa la propiedad

  constructor(
    private apiService: ApiService,
    private navController: NavController,
    private modalController: ModalController // Inyecta el ModalController
  ) {}

  ngOnInit() {
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    this.apiService.getPersonajes().subscribe((data: any[]) => {
      this.personajes = data;
    });
  }

  async modificar(personaje: any) {
    const modal = await this.modalController.create({
      component: ModificarModalPage,
      componentProps: {
        personaje: personaje, // Pasa el personaje al modal de modificación
      },
    });
    await modal.present();

    // Escuchar el cierre del modal para actualizar la lista después de modificar
    const { data } = await modal.onDidDismiss();
    if (data && data.modificado) {
      this.cargarPersonajes();
    }
  }

  async eliminar(personaje: any) {
    const modal = await this.modalController.create({
      component: EliminarModalPage,
      componentProps: {
        personajeId: personaje._id, // Pasa solo el ID del personaje al modal de eliminación
      },
    });
    // Resto del código...
  
    await modal.present();

    // Escuchar el cierre del modal para actualizar la lista después de eliminar
    const { data } = await modal.onDidDismiss();
    if (data && data.eliminado) {
      this.cargarPersonajes();
    }
  }
}
