import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'login',
  moduleId: module.id,
  templateUrl: 'login.component.html',
  providers : [LoginService],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {
   user = {
     username:"",
     password:""
   };
   constructor(public loginService: LoginService, public router: Router) {
  }

   checkLogin(){
     console.log(this.user);
     var username = this.user.username;
     var password = this.user.password;
     var key = btoa(btoa(username) + '!!' + btoa(password));
      if(this.user.username =="utsav" && this.user.password =='1234'){
       let redirect = '/user';
       document.cookie = "sessionID=" + key; 
        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
     }
   }

}

interface User{
  username: string;
  password: string;
}