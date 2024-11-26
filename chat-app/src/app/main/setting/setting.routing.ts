import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

export const SettingRoutes: Routes = [
  { path:'edit-profile',component:EditProfileComponent },
];

