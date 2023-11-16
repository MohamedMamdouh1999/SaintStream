import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'log-in', loadComponent: () => import('./components/log-in/log-in.component').then(c => c.LogInComponent) },
  { path: 'sign-up', loadComponent: () => import('./components/sign-up/sign-up.component').then(c => c.SignUpComponent) },
  { path: '', redirectTo: 'log-in', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
