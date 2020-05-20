import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDogPage } from './modal-dog.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDogPageRoutingModule {}
