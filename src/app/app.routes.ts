import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'workations' },
  {
    path: 'workations',
    loadComponent: () => import('./workations/workations.page').then(m => m.WorkationsPage),
  },
];
