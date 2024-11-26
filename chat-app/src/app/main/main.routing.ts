import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { SettingComponent } from './setting/setting.component';
import { GroupComponent } from './group/group.component';

export const MainRoutes: Routes = [
  {
    path: '',
    component:ChatComponent,
    loadChildren: () => import('./chat/chat.routing').then(m => m.ChatRoutes)
  },
  {
    path: 'setting',
    component:SettingComponent,
    loadChildren: () => import('./setting/setting.routing').then(m => m.SettingRoutes)
  },
  {
    path: 'group',
    component:GroupComponent,
    loadChildren: () => import('./group/group.routing').then(m => m.GroupRoutes)
  },

];

