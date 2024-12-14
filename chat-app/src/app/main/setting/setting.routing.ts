import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

export const SettingRoutes: Routes = [
  { path:'',component:ProfileDetailComponent },
  { path:'edit-profile',component:EditProfileComponent },
];

