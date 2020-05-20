import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'list-dog',
    loadChildren: () => import('./list-dog/list-dog.module').then( m => m.ListDogPageModule)
  },
  {
    path: 'list-dog/:id',
    loadChildren: () => import('./list-dog/list-dog.module').then( m => m.ListDogPageModule)
  },
  {
    path: 'list-cat',
    loadChildren: () => import('./list-cat/list-cat.module').then( m => m.ListCatPageModule)
  },
  {
    path: 'list-cat/:id',
    loadChildren: () => import('./list-cat/list-cat.module').then( m => m.ListCatPageModule)
  },

 
  {
    path: 'modal-cat/:id',
    loadChildren: () => import('./modal-cat/modal-cat.module').then( m => m.ModalCatPageModule)
  },
  {
    path: 'modal-dog/:id',
    loadChildren: () => import('./modal-dog/modal-dog.module').then( m => m.ModalDogPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
