import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDogPageRoutingModule } from './modal-dog-routing.module';

import { ModalDogPage } from './modal-dog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDogPageRoutingModule
  ],
  declarations: [ModalDogPage],
  exports: [ModalDogPage]
  
})
export class ModalDogPageModule {}
