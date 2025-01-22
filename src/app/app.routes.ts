import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent,
    pathMatch:'full'
  },
  // {
  //   path:'about/:id',
  //   component: AboutComponent,
  //   pathMatch:'full'
  // },
  // {
  //   path:'about',
  //   component:AboutComponent,
  //   pathMatch:'full'
  // }
  // {
  //   path:'about',
  //   loadComponent :() =>import('./components/about/about.component').then(c=>c.AboutComponent),
  // },
  // {
  //   path:'',
  //   loadComponent:() => import('./home/home.component').then(r=>r.HomeComponent)
  // },
  // {
  //   path:'about',
  //   loadComponent:() => import('./home/home.component').then(r=>r.HomeComponent)
  // },
  // {
  //   path:'about/:id',
  //   loadComponent: () => import('./components/about/about.component').then(r=>r.AboutComponent)
  // }
  {
    path:'about',
    loadComponent: () => import('./components/about/about.component').then(r=>r.AboutComponent)
  }
];
