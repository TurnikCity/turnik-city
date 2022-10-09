import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages.module';
import {
  HomePageComponent,
  UIPageComponent,
  FavoritesPageComponent,
  PlaygroundPageComponent,
  PagesComponent,
} from './index';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'playground',
        component: PlaygroundPageComponent,
      },
      {
        path: 'liked',
        component: FavoritesPageComponent,
      },
      {
        path: 'ui',
        component: UIPageComponent,
      },
    ],
  },
];

export const PagesRouting: ModuleWithProviders<PagesModule> = RouterModule.forChild(routes);
