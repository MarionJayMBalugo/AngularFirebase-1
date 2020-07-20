import { Injectable } from '@angular/core';
import { Events, Participants } from "./events";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { query } from '@angular/animations';

@Injectable({
  providedIn:'root'
})
export class EventsService {
  event:Events
  events:Observable<Events[]>
  private eventDoc:AngularFirestoreDocument<Events>
  private eventCollection: AngularFirestoreCollection<Events>
  fEvent:Observable<Events[]>

  constructor(
    private firestore: AngularFirestore) { 
    this.eventCollection = firestore.collection<Events>('events', ref => ref.orderBy('id','asc'));
    this.events = this.eventCollection.snapshotChanges().pipe(
      map(action=>action.map(a=>{
        const data = a.payload.doc.data() as Events
        const id = a.payload.doc.id
        return {id, ...data}
      }))
    )
  }

  getEvents(){
    return this.events
  }

  updateEvent(event:Events){
    this.eventCollection.ref.where('id','==', event.id).get()
      .then(res=>{
        res.forEach(doc =>{
          this.eventDoc = this.firestore.doc<Events>('events/' + doc.id)
          this.eventDoc.update(event);
        })
      })
  }
  
  deleteEvent(data){
    this.eventCollection.ref.where('id','==', data.id).get()
      .then(res=>{
        res.forEach(doc =>{
          this.eventDoc = this.firestore.doc<Events>('events/' + doc.id)
          this.eventDoc.delete();
        })
      })
  }

  addEvent(event:Events){
    this.eventCollection.ref.get().then(res=>{
      console.log(res.size);
      event.id = res.size;
      return this.eventCollection.add(event)
    })
  }

  async getEvent(id:number): Promise<Events> {
    let event: Events;
    await this.eventCollection.ref.where('id', '==', Number(id)).get()
      .then(querySnapshot =>{
        querySnapshot.forEach(doc =>{
          event = doc.data() as Events
        })
      })
      return event
  }

 


  
}
