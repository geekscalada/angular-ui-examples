import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page';
import { NavbarComponent } from './pages/navbar-component';

export const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: 'divcentrator',
    component: NavbarComponent,
  },
];
