import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree{
  //       return this.auth.isLoggedIn
  //         .pipe(
  //             take(1),
  //             map((isLoggedIn:boolean)=>{
  //               if(!isLoggedIn){
  //                 this.router.navigate(['/login'])
  //                 return false
  //               }
  //               return true
  //             })
  //         )
  // }
  canActivate() {
    let isloggedIn: boolean;
    if (
      this.auth.userAccount.value.username === "" &&
      this.auth.userAccount.value.password === ""
    ) {
      isloggedIn = false;
      this.router.navigate(["/login"]);
    } else {
      isloggedIn = true;
    }
    return isloggedIn;
  }
}
