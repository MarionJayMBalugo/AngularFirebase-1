import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paticipants',
  templateUrl: './paticipants.component.html',
  styleUrls: ['./paticipants.component.scss']
})
export class PaticipantsComponent implements OnInit {
  @Input() event:any;
  @Output() id =new EventEmitter();
  colors = ""

  constructor() { }

  ngOnInit() {
    console.log(this.event)
    this.getRandomColor()
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
    alert("click")
    this.id.emit(data)
  }
}


