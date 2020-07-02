import { Component, OnInit, OnDestroy } from '@angular/core';
import { Events, Participants } from "../Services/events";
import { EventsService } from "../Services/events.service";
import { Subscription } from "rxjs";
import { log } from 'util';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit,OnDestroy {
  events:Events[];
  event:Events
  isShowList = true;
  getEventSubscription:Subscription;
  constructor(
    private eventService:EventsService
  ) { }

  ngOnInit() {
      this.getEventSubscription = this.eventService.getEvents().subscribe(res=>{
          this.events = res
      })
  }
  ngOnDestroy(){
    this.getEventSubscription.unsubscribe();
  }



  getID(data:number){
    this.events.map(event=>{
      if(event.id === data){
        this.event = event
        this.isShowList = false
      }
    })
      
  }

  addParticipants(participant:Participants){
    this.events.map(res=>{
      if(res.id === this.event.id){
        res.participants.push(participant)
        this.eventService.updateEvent(res)
      }
    })
    
  }

  addEvent(event:Events){
    this.eventService.addEvent(event)
    console.log(event)
  }

  backtToList(){
    this.isShowList = true;
  }

  // editEvent(data){
  //     console.log(data); 
  // }

  deleteEvent(data){
    const id = this.events.indexOf(data)
    console.log(id);
    if(confirm("Are You Sure You Want to Delete this Event?")){
      this.eventService.deleteEvent(id)
    }
    else{
      alert("Delete is Cancelled")
    }
    // this.events.splice(data.id)
  }

  deleteParticipants(value){
    const index = this.event.participants.indexOf(value)
    if(confirm("Are You Sure You Want to Delete this Participant?")){
      this.event.participants.splice(index)
      this.eventService.updateEvent(this.event)
    }else{
      alert("Delete is Cancelled")
    }
    
  }
}

