import { Component, OnInit } from '@angular/core';
import { AuthService } from "./Services/auth.service";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularFirebase';
  isLoggedIn: Observable<boolean>
  
  constructor(private auth:AuthService, private router:Router){
    
  }
  ngOnInit(){
    this.isLoggedIn = this.auth.loggedIn
  }

  logout(){
    this.auth.updateCurrUser({
      username:'',
      password:''
    })
    this.auth.loggedIn.next(false)
    this.router.navigate(['/'])
  }
}
