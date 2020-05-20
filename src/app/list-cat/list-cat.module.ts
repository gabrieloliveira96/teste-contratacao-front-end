import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCatPageRoutingModule } from './list-cat-routing.module';

import { ListCatPage } from './list-cat.page';

import { ModalCatPage } from '../modal-cat/modal-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCatPageRoutingModule
  ],
  declarations: [ListCatPage,ModalCatPage],
  entryComponents: [ModalCatPage],
})
export class ListCatPageModule {}
