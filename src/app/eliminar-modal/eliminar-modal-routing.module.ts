import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarModalPage } from './eliminar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarModalPageRoutingModule {}
