import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from "./events/events.component";
import { PaticipantsComponent } from "./paticipants/paticipants.component";
import { AdminComponent } from "./admin/admin.component";
import { EditEventComponent } from "./edit-event/edit-event.component";
import { AuthGuard } from "./Services/auth.guard";
import {EventsRouterActivator} from './events/event-router-activator.service'
import { ParticipantListComponent } from "./participant-list/participant-list.component";


const routes: Routes = [
 
  {path: 'login', component:AdminComponent},
  {path:'events', component:EventsComponent, canActivate:[EventsRouterActivator]},
  // {path:'events', component:EventsComponent,pathMatch:'full'},
  {path:'event-details/:id', component:PaticipantsComponent, canActivate:[EventsRouterActivator]},
  {path:'participants/:id', component:PaticipantsComponent,canActivate:[EventsRouterActivator]},
  {path:'editevent/:id', component:EditEventComponent},
  {path:'**', redirectTo:'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
