import { MenuController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage {

  constructor(private menu: MenuController) { }

  // En el ciclo de vida 'ionViewWillEnter', desactiva el menú para esta página
  ionViewWillEnter() {
    this.menu.enable(false);
  }

  // Asegúrate de reactivar el menú cuando salgas de esta página (ionViewWillLeave)
  ionViewWillLeave() {
    this.menu.enable(true);
  }
}
