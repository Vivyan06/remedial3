import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarModalPageRoutingModule } from './eliminar-modal-routing.module';

import { EliminarModalPage } from './eliminar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarModalPageRoutingModule
  ],
  declarations: [EliminarModalPage]
})
export class EliminarModalPageModule {}
