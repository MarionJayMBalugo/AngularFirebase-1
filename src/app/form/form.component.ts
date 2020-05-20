import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from "../Services/events.service";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() event: any;
  partForm: FormGroup;
  private formSubmitAttempt: boolean;
  submitted = false

  get f() { return this.partForm.controls; }

  constructor(
    private fb: FormBuilder,
    private eventService:EventsService
  ) { }

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
        this.eventService.addParticipants(data)
      }
      this.formSubmitAttempt = true;
      this.resetForm()
  }

  resetForm(){
    this.partForm.reset()
  }

}
