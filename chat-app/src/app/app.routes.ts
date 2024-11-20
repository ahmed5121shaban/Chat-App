import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: '',
    component:MainComponent,
    loadChildren: ()=> import('./main/main.routing').then(m=>m.MainRoutes),
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
];
