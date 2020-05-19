import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from "./events/events.component";
import { PaticipantsComponent } from "./paticipants/paticipants.component";


const routes: Routes = [
  {path:'', component:EventsComponent},
  {path:'particpants/:id', component:PaticipantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
