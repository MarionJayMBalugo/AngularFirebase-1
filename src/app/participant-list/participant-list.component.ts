import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent implements OnInit {
  showModal = false;
  @Output() isHideList = new EventEmitter();
  @Input() event:any;
  events: any;
  constructor() { }

  ngOnInit() {
  }

  open() {
    if(0){
      // Dont open the modal
      this.showModal = false;
    } else {
       // Open the modal
       this.showModal = true;
    }

  }

  return(){
      console.log("back")
      this.isHideList.emit()
  }

  getEvent(data){
      this.events.map(event =>{
          if(event.id===data.id){
            event.push(data)
          }
      })
  }

}
