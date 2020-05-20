import { Component, OnInit } from '@angular/core';
import { Events } from "../Services/events";
import { EventsService } from "../Services/events.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events:Events[];
  event:Events
  isShowList = true;
  constructor(
    private eventService:EventsService
  ) { }

  ngOnInit() {
      this.events = this.eventService.getEvents()
  }

  alerts(){
    alert("click")
  }

  getID(data:any){
      this.event = this.eventService.getID(data)
      this.isShowList = false
  }

  addEvent(event:any){
    this.eventService.addEvent(event)
    console.log(event)
  }

  backtToList(){
    this.isShowList = true;
  }
}

