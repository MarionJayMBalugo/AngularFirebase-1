import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { PaticipantsComponent } from './paticipants/paticipants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { FormComponent } from './form/form.component';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    PaticipantsComponent,
    ParticipantListComponent,
    FormComponent,
    AddEventFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
