import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCatPageRoutingModule } from './modal-cat-routing.module';

import { ModalCatPage } from './modal-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCatPageRoutingModule
  ],
  declarations: [ModalCatPage],
  exports: [ModalCatPage],
})
export class ModalCatPageModule {}
