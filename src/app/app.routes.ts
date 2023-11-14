import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) }
];
