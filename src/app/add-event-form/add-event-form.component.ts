import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.scss']
})
export class AddEventFormComponent implements OnInit {
  @Output() event = new EventEmitter
  eventForm: FormGroup;
  private formSubmitAttempt: boolean;
  submitted = false

  get f() { return this.eventForm.controls; }

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
     this.eventForm = this.fb.group({
      name: ['', Validators.required ],
      category: ['', Validators.required ],
      speaker: ['', Validators.required ],
      emcee: ['', Validators.required ],
      date: ['', Validators.required ],
      time: ['', Validators.required ],
      duration:['', Validators.required ],
      venue: this.fb.group({
        address:['', Validators.required ],
        building:['', Validators.required ],
        room:['', Validators.required ]
      }),
      participants: new FormControl([]),
      onlineUrl:['', Validators.required ],
      description:['', Validators.required ]
    });
  }

   isFieldInvalid(field: string) {
    return (
      (!this.eventForm.get(field).valid && this.eventForm.get(field).touched) ||
      (this.eventForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  submitForm(data){
    this.submitted = true
      this.event.emit(data)
      console.log(data);
    this.formSubmitAttempt = true
    this.eventForm.reset()
  }

}
