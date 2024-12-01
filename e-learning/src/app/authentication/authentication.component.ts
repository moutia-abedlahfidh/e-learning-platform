import { Component, ViewChild } from '@angular/core';
import { MyserviceService, User } from '../myservice.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

  constructor (private service : MyserviceService,public router : Router,private cookieService: CookieService) {}

  @ViewChild('controlEmail',{static : false})  controlEmail :any ;
  @ViewChild('controlPassword',{static : false})  controlPassword :any ;

  user = {
    email : '',
    password : ''
  }

  public toMap(data:any) : User {
    return {
      email : data['email'],
      password : data['password'],
      name : data['name'],
      id : data['id'],
      type : data['type'],
    };
  }

  public checkdata() {
    if (this.user.email == "" || this.user.password=='') 
    {
      if (this.user.email == "")
      {
        this.controlEmail.nativeElement.style.display = "block"
      }else{
        this.controlEmail.nativeElement.style.display = "none"
      }

      if (this.user.password == "")
        {
          this.controlPassword.nativeElement.style.display = "block"
        }else{
          this.controlPassword.nativeElement.style.display = "none"
        }
    }else {
      this.service.checkAccount(this.user).subscribe(
        (res)=>{
          if (res){
            this.service.user = this.toMap(res) ;
            this.cookieService.set("authenticated","true",7);
            this.router.navigate(['/panel']);
            return res ;
          }
          return false ;
        },
        err=>{
          return err ;
        }
      )
    }
  }

}
