import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCatPage } from './list-cat.page';

const routes: Routes = [
  {
    path: '',
    component: ListCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCatPageRoutingModule {}
