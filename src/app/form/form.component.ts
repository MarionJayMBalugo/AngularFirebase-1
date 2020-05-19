import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() event: any;
  partForm: FormGroup;
  private formSubmitAttempt: boolean;
  submitted = false;

  get f() { return this.partForm.controls; }

  constructor(
    private fb: FormBuilder,
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
      if(this.partForm.valid){
        console.log(data)
        this.event.participants.push(data)
        // this.event.map(events=>{
        //   if(events.id === data.id){
        //     events.participants.push(data)
        //   }
        // })
      }
      this.formSubmitAttempt = true; 
      this.resetForm()
      // console.log(this.event)
  }

  resetForm(){
    this.partForm.reset()
  }

}
