import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarModalPage } from './modificar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarModalPageRoutingModule {}
