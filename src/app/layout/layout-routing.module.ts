import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'home', loadComponent: () => import('./../pages/home/home.component').then(c => c.HomeComponent) },
    { path: 'tv-series', loadComponent: () => import('./../pages/series/series.component').then(c => c.SeriesComponent) },
    { path: 'auth', loadChildren: () => import('./../modules/auth/auth.module').then(m => m.AuthModule) },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
