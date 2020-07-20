import {Injectable} from '@angular/core'
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../Services/auth.service";

@Injectable({
    providedIn: 'root'
})

export class EventsRouterActivator implements CanActivate {
    constructor(private router:Router, private auth:AuthService){
    }

    canActivate(){
        let isloggedIn: boolean;
        if(this.auth.userAccount.value.username === '' && this.auth.userAccount.value.password === ''){
            isloggedIn = false;
            this.auth.loggedIn.next(false)
            this.router.navigate(['/login']);
        }else{
            isloggedIn = true
            this.auth.loggedIn.next(true)
        }
        return isloggedIn;
    }
}