import { Routes } from '@angular/router';
import { GroupComponent } from './group.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { GroupMessagesComponent } from './group-messages/group-messages.component';

export const GroupRoutes: Routes = [
  { path: '', component: ListGroupComponent },
  {path:'group-messages/:id',component:GroupMessagesComponent}
];
