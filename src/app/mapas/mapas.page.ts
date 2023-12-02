import { Component } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage {
  mapas = [
    {
      titulo: 'Estacion espacial de Herta',
      descripcion: 'Descripción del Mapa 1',
      imagen: 'url_de_la_imagen_1.jpg'
    },
    {
      titulo: 'Mapa 2',
      descripcion: 'Descripción del Mapa 2',
      imagen: 'url_de_la_imagen_2.jpg'
    },
    {
      titulo: 'Mapa 3',
      descripcion: 'Descripción del Mapa 3',
      imagen: 'url_de_la_imagen_3.jpg'
    }
  ];

  constructor() {}

  verMapa(mapa: any) {
    console.log('Mostrar mapa:', mapa);
    // Aquí podrías implementar la lógica para mostrar el mapa seleccionado
    // Podrías abrir un modal, navegar a otra página o realizar alguna acción según tu aplicación
  }
}
