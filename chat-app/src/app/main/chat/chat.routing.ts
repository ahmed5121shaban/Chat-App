import { Routes } from '@angular/router';
import { EmptyMessageComponent } from './empty-message/empty-message.component';
import { MessageComponent } from './message/message.component';

export const ChatRoutes: Routes = [
    { path:'',component:EmptyMessageComponent },
    {path:'message/:id',component:MessageComponent},

];

