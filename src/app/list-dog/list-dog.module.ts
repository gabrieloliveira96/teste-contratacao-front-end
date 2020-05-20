import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDogPageRoutingModule } from './list-dog-routing.module';

import { ListDogPage } from './list-dog.page';
import { ModalDogPage } from '../modal-dog/modal-dog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDogPageRoutingModule
  ],
  declarations: [ListDogPage,ModalDogPage],
  entryComponents: [ModalDogPage],
})
export class ListDogPageModule {}
