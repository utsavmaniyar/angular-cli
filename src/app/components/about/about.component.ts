import { Component } from '@angular/core';
@Component({
  selector: 'about',
  moduleId: module.id,
  templateUrl: 'about.component.html',
})
export class AboutComponent  { 
  name:string;
  email: string;
  role: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor(){
    this.name = 'Utsav';
    this.email = 'utsavmaniyar@gmail.com';
    this.role = 'Angular JS Developer';
    this.hobbies = ['music', 'movies', 'cricket'];
    this.address = {
      street: '41 main st',
      city:'Phoenix',
      state: 'AZ', 
      zip: 85254
    }
    this.showHobbies=false;

  }
  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
}
  addHobby(hobby){
    this.hobbies.push(hobby);
  }
  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }
}

interface address{
  street: string;
  city: string;
  state: string;
  zip: number;
}
  
