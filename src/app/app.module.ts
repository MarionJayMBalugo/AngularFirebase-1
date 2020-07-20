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

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminComponent } from './admin/admin.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { AuthGuard } from './Services/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    PaticipantsComponent,
    ParticipantListComponent,
    FormComponent,
    AddEventFormComponent,
    AdminComponent,
    EditEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
    
    
  ],
  providers: [AngularFirestore, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
