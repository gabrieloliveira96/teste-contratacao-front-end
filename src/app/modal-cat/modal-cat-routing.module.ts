import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCatPage } from './modal-cat.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCatPageRoutingModule {}
