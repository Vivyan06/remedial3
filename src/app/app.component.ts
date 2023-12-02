import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Historia', url: '/historia', icon: 'mail' },
    { title: 'Personajes', url: '/personajes', icon: 'paper-plane' },
    { title: 'mapas', url: '/mapas', icon: 'heart' },
    { title: 'Regresar', url: '/presentacion', icon: 'archive' },
 
  ];
  public labels = [];
  constructor() {}
}
