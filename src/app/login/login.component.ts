import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
   constructor(private route:Router,private AuthService:AuthService) { }
 
   ngOnInit() {
     sessionStorage.setItem("key","false");
  }

   public hello(email:string,password:string){
  let  regexp = new RegExp('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
    console.log(email)
    if(regexp.test(email) && password!="")
    {
        // this.router.navigateByUrl("/home");
      
      var user={
        email,
        password
      }
      //localStorage.setItem("user_email",email)
      this.AuthService.loginUser(user).subscribe(data=>{
        console.log(data)
        if(data!=null)
        {
          sessionStorage.setItem("key","true");
          this.route.navigate(['/home']);
        }
          else
          this.route.navigate(['/login'])
      })
    }
      
  }

}

