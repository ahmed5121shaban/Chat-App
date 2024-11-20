import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';

export const MainRoutes: Routes = [
  {
    path: '',
    component:ChatComponent,
    loadChildren: () => import('./chat/chat.routing').then(m => m.ChatRoutes)
  },
  {
    path: 'profile',
    component:ProfileComponent,
    loadChildren: () => import('./profile/profile.routing').then(m => m.ProfileRoutes)
  },
  {
    path: 'setting',
    component:SettingComponent,
    loadChildren: () => import('./setting/setting.routing').then(m => m.SettingRoutes)
  },

];

