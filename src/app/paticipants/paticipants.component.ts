import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Events, Participants  } from "../Services/events";
import { ActivatedRoute, Router } from "@angular/router";
import { EventsService } from '../Services/events.service';


@Component({
  selector: 'app-paticipants',
  templateUrl: './paticipants.component.html',
  styleUrls: ['./paticipants.component.scss']
})
export class PaticipantsComponent implements OnInit {
  @Input() event:Events;
  // @Output() id =new EventEmitter();
  // @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  colors = ""

  constructor(private activeRoute:ActivatedRoute, private service:EventsService, private route:Router) { }

  ngOnInit() {
    console.log(this.event);
    this.getRandomColor()
    console.log(this.activeRoute.snapshot.params['id']);
    this.service.getEvent(this.activeRoute.snapshot.params['id'])
      .then(event => this.event  = event as Events)
    
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.colors = color;
  }

  sendId(data:number){
    // this.id.emit(data)
  }

  addParticipants(participant: Participants) {
    this.event.participants.push(participant)
    this.service.updateEvent(this.event)
  }

  deleteParticipants(value){
    if(confirm("Are you sure You Want to Delete this Participant? ")){
      this.event.participants.splice(this.event.participants.indexOf(value))
      this.service.updateEvent(this.event)
    }else{
      alert("Participant were not Deleted!")
    }
   
  }

  // editEvent(data){
  //   this.edit.emit(data)
  // }

  deleteEvent(data){
    this.delete.emit(data)
  }

  viewEventList(){
    this.route.navigate(['/events'])
  }
}


