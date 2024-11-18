import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { ChatComponent } from './main/chat/chat.component';
import { ProfileComponent } from './main/profile/profile.component';
import { SettingComponent } from './main/setting/setting.component';

export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'main',component:MainComponent,children:[
    {path:'chat',component:ChatComponent},
    {path:'profile',component:ProfileComponent},
    {path:'setting',component:SettingComponent}
  ]}
];
