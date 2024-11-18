import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  /* {path:'chat',component:ChatComponent},
  {path:'profile',component:ProfileComponent}, */
];

export const MainRoutes = RouterModule.forChild(routes);
