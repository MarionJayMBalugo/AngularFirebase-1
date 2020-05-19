import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paticipants',
  templateUrl: './paticipants.component.html',
  styleUrls: ['./paticipants.component.scss']
})
export class PaticipantsComponent implements OnInit {
  @Input() event:any;
  @Output() id =new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.event)
  }

  sendId(data:any){
    alert("click")
    this.id.emit(data)
  }
}


