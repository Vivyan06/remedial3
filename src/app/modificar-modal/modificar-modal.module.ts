import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarModalPageRoutingModule } from './modificar-modal-routing.module';

import { ModificarModalPage } from './modificar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarModalPageRoutingModule
  ],
  declarations: [ModificarModalPage]
})
export class ModificarModalPageModule {}
