import { Component } from '@angular/core';
import { PostService } from '../../services/userDetail/post.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'user',
  moduleId: module.id,
  templateUrl: 'user.component.html',
  providers : [PostService]
})
export class UserComponent  { 
  post: Post[];

  constructor(private postService : PostService, public router: Router){
      var x = document.cookie.split(';');
      var i = 0;
      var cookieValue;
      for( ; i<x.length; i++){
        if(x[i].split('=')[0]==="sessionID"){
          cookieValue = x[i].split('=')[1];
          break;
        }
      }
      if(cookieValue==undefined){
        this.router.navigate(['login']);
      }else{
        var credentials = atob(cookieValue).split("!!");
        if(atob(credentials[0]) === "utsav" && atob(credentials[1]) === "1234"){
            this.postService.getPost().subscribe(post => {
            this.post = post;
          })
        }else{
          this.router.navigate(['login']);
        }
      }
     
  }
}

interface address{
  street: string;
  city: string;
  state: string;
  zip: number;
}
interface Post{
  id: number;
  name: string;
  username: string;
  email: string;
  address: address;
}