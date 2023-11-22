import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'movies', loadComponent: () => import('./../pages/movies/movies.component').then(c => c.MoviesComponent) },
    { path: 'movie/:id', loadComponent: () => import('./../pages/movie/movie.component').then(c => c.MovieComponent) },
    { path: 'tv-series', loadComponent: () => import('./../pages/series/series.component').then(c => c.SeriesComponent) },
    { path: '', redirectTo: 'movies', pathMatch: 'full' }
  ]},
  { path: 'auth', loadChildren: () => import('./../modules/auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
