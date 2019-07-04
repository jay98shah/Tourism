import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//pas
//repas
  constructor(private route:Router,private AuthService:AuthService) { }

  ngOnInit() {

  }
  onSubmit(username:string,password:string,emailId:string,mobile:string){
    //this.enrollService.insertParticipant(name,username).subscribe((data:any)=>{
      //console.log(data);
      var user={
        username,
        password,
        emailId,
        mobile,
      }
      console.log("HELLO")
      console.log(user)
      this.AuthService.registerUser(user).subscribe(data=>{
        console.log(data)
        if(data)
        {
          localStorage.setItem("user",user.username);
          this.route.navigate(['/login']);
        }
          else
          this.route.navigate(['/register'])
      })
      
    
  }

}
