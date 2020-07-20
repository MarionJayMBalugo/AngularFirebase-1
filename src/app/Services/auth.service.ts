import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserAccount } from '../Services/events';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false)
  userAccount = new BehaviorSubject<UserAccount>({username:'', password:''})
  currentUserAcc = this.userAccount.asObservable();

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  constructor(private router:Router) { }

  updateCurrUser(useraccount:UserAccount){
    this.userAccount.next(useraccount)
  }

  login(user:UserAccount){
    if(user.username === 'Patrick' && user.password === 'Patrick'){
      this.loggedIn.next(true)
      this.router.navigate(['/events'])
    }
  }

  logout(){
    this.loggedIn.next(false)
    this.router.navigate(['/login'])
  }
}
