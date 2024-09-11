import { Component, ViewChild } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

  constructor (private service : MyserviceService,public router : Router) {}

  @ViewChild('controlEmail',{static : false})  controlEmail :any ;
  @ViewChild('controlPassword',{static : false})  controlPassword :any ;

  user = {
    email : '',
    password : ''
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
        res=>{
          if (res){
            this.router.navigate(['/panel']);
          }
        },
        err=>{
          return err ;
        }
      )
    }
  }

}
