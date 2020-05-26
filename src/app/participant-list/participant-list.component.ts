import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from "../Services/events.service";


@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent implements OnInit {
  showModal = false
  @Output() isHideList = new EventEmitter();
  @Output() participants = new EventEmitter();
  @Input() event:any;
  events: any;
  partForm: FormGroup;
  private formSubmitAttempt: boolean;
  submitted = false

  get f() { return this.partForm.controls; }

  constructor(private fb: FormBuilder,
    private eventService:EventsService) { }

  ngOnInit() {
    this.partForm = this.fb.group({
      fullName: ['', Validators.required ],
      position: ['', Validators.required ],
      company: ['', Validators.required ]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.partForm.get(field).valid && this.partForm.get(field).touched) ||
      (this.partForm.get(field).untouched && this.formSubmitAttempt)
    );
  }


  submitForm(data){
      this.submitted = true;
      if (this.partForm.valid){
        this.participants.emit(data)
      }
      this.formSubmitAttempt = true;
      this.resetForm()
  }

  resetForm(){
    this.partForm.reset()
  }

  return(){
      console.log("back")
      this.isHideList.emit()
  }

  getEvent(data){
      this.events.map(event =>{
          if (event.id===data.id){
            event.push(data)
          }
      })
  }

}
