import { Routes } from '@angular/router';

// App routes: each page is lazy-loaded to keep the initial bundle small.
export const routes: Routes = [
  {
    path: '',
    title: 'CrocHub',
    loadComponent: () => import('./features/home/home.page').then((module) => module.HomePage),
  },
  {
    path: 'cv',
    title: 'CrocHub — CV',
    loadComponent: () => import('./features/cv/cv.page').then((module) => module.CvPage),
  },
  {
    path: 'lab',
    title: 'CrocHub — Lab',
    loadComponent: () => import('./features/lab/lab.page').then((module) => module.LabPage),
  },
  { path: '**', redirectTo: '' },
];
