import { Component, OnInit, OnDestroy } from "@angular/core";
import { Events, Participants } from "../Services/events";
import { EventsService } from "../Services/events.service";
import { AuthService } from "../Services/auth.service";
import { Subscription } from "rxjs";
import { log } from "util";
import { Router } from '@angular/router';

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"]
})
export class EventsComponent implements OnInit, OnDestroy {
  events: Events[];
  event: Events;
  isShowList = true;
  getEventSubscription: Subscription;
  colors = ""
  constructor(private eventService: EventsService, private auth:AuthService, private router:Router) {}

  ngOnInit() {
    this.getRandomColor()
    this.getEventSubscription = this.eventService.getEvents().subscribe(res => {
      this.events = res;
    });

    this.auth.currentUserAcc.subscribe(user=>{
      console.log(user);
    })
  }
  ngOnDestroy() {
    this.getEventSubscription.unsubscribe();
  }

  getID(data: number) {
    this.events.map(event => {
      if (event.id === data) {
        this.event = event;
        this.isShowList = false;
      }
    });
  }

  addEvent(event: Events) {
    this.eventService.addEvent(event);
    console.log(event);
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.colors = color;
  }
  // logout(){
  //   this.auth.updateCurrUser({
  //     username:'',
  //     password:''
  //   })
  //   this.router.navigate(['/'])
  // }

  // editEvent(data){
  //     console.log(data);
  // }
  viewEvent(event:Events){
    console.log(event);
    this.router.navigate(['/event-details', event.id])
    
  }

  deleteEvent(data) {
    const id = this.events.indexOf(data);
    console.log(id);
    if (confirm("Are You Sure You Want to Delete this Event?")) {
      this.eventService.deleteEvent(data);
    } else {
      alert("Delete is Cancelled");
    }
  }
}
