import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDogPage } from './list-dog.page';

const routes: Routes = [
  {
    path: '',
    component: ListDogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDogPageRoutingModule {}
