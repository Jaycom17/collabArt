import { Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { WorkPlacePageComponent } from './pages/work-place-page/work-place-page.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'work-place',
    component: WorkPlacePageComponent,
  },
  {
    path: 'create-project',
    component: CreateProjectComponent,
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];
