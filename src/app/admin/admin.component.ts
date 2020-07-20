import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { UserAccount } from "../Services/events";
import { AuthService } from "../Services/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  loginForm: FormGroup;
  private formSubmitAttempt: boolean;
  submitted = false
  colors = ""

  currentUser: UserAccount = {
    username:'Patrick',
    password:'Patrick'
  }

  get f() { return this.loginForm.controls; }


  constructor( private fb: FormBuilder, private router: Router, private auth:AuthService) { }

  ngOnInit() {
    this.auth.currentUserAcc.subscribe(res=>{
      console.log(res);
    })
    this.loginForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ],
    });
    this.getRandomColor()
  }

  isFieldInvalid(field: string) {
    return (
      (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  login(value:UserAccount){
    this.submitted = true;
    if(this.currentUser.username === value.username && this.currentUser.password === value.password){
      this.auth.updateCurrUser(value)
      this.router.navigate(['/events'])
      // console.log(value);
      // this.auth.login(value)  
    }
   
    
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.colors = color;
  }
}
