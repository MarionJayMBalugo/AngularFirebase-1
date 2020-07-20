import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EventsService } from "../Services/events.service";
import { Events } from "../Services/events";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  id:number
  sub:any
  data: Events
  eventForm: FormGroup;
    name;
    category;
    speaker;
    emcee;
    date;
    time;
    duration;
    address;
    building;
    room;
    participants:any;
    onlineUrl;
    description;


  constructor(private activeRoute:ActivatedRoute, private service:EventsService,  private fb: FormBuilder,) {
    this.createForm()
   }

  ngOnInit() {
    this.sub = this.activeRoute.params.subscribe(params=>{
    this.id = +params['id']
    this.service.getEvents().subscribe(res=>{
        res.map(data=>{
          if(data.id == this.id){
            this.data = data
            this.name = data.name;
            this.category = data.category;
            this.speaker = data.speaker;
            this.emcee = data.emcee;
            this.date = data.date;
            this.time = data.time;
            this.duration = data.duration;
            this.address = data.venue.address;
            this.building = data.venue.building;
            this.room = data.venue.room;
            this.participants = data.participants;
            this.onlineUrl = data.onlineUrl;
            this.description = data.description;
          }
          this.createForm()
          this.eventForm.value.name = this.data.name
          console.log(this.data);
        })
    })
  })

}

createForm(){
  this.eventForm = this.fb.group({
    name: [this.name, Validators.required ],
    category: [this.category, Validators.required ],
    speaker: [this.speaker, Validators.required ],
    emcee: [this.emcee, Validators.required ],
    date: [this.date, Validators.required ],
    time: [this.time, Validators.required ],
    duration:[this.duration, Validators.required ],
    venue: this.fb.group({
      address:[this.address, Validators.required ],
      building:[this.building, Validators.required ],
      room:[this.room, Validators.required ]
    }),
    participants: new FormControl([]),
    onlineUrl:[this.onlineUrl, Validators.required ],
    description:[this.description, Validators.required ]
  });
}

submitForm(data){

}

}
