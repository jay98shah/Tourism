import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isUser:boolean;
  
  name:string;
  constructor(private route:Router) { }

  ngOnInit() {
    this.name=localStorage.getItem("user");
    console.log(this.name);
    if(this.name!=null)
    {
      console.log("helo");
      this.isUser=true;
    }
    
    else
      this.isUser=false;
  }
  Login()
  {
   
    this.route.navigate(['/login']);
  }
  SignOut()
  {
    this.isUser=false;
    localStorage.clear();
    this.route.navigate(['/home']);
  }
  register()
  {
    this.route.navigate(['/register']);
  }
 /* onSubmit(data)
  {
    //console.log(data.value)
    localStorage.setItem("quiz","banking")
    this.route.navigate(['/bank'])
  }
  onSubmit1()
  {
    localStorage.setItem("quiz","programming")
    this.route.navigate(['/quiz'])
  }*/
  
}
