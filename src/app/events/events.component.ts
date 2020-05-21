import { Component, OnInit, OnDestroy } from '@angular/core';
import { Events } from "../Services/events";
import { EventsService } from "../Services/events.service";
import { Subscription } from "rxjs";

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

  alerts(){
    alert("click")
  }

  getID(data:number){
    this.events.map(event=>{
      if(event.id === data){
        this.event = event
        this.isShowList = false
      }
    })
      // this.event = this.eventService.getID(data)
      
  }

  addEvent(event:Events){
    this.eventService.addEvent(event)
    console.log(event)
  }

  backtToList(){
    this.isShowList = true;
  }
}

