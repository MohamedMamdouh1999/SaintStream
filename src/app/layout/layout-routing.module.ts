import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'movies', loadComponent: () => import('./../pages/movies/movies.component').then(c => c.MoviesComponent) },
    { path: 'tv-series', loadComponent: () => import('./../pages/series/series.component').then(c => c.SeriesComponent) },
    { path: 'auth', loadChildren: () => import('./../modules/auth/auth.module').then(m => m.AuthModule) },
    { path: '', redirectTo: 'movies', pathMatch: 'full' }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
