import { Component, ViewChild } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor (private  service:MyserviceService,private router: Router) {} 
  @ViewChild('controlName', { static: false }) controleName: any ;
  @ViewChild('controlEmail', {static : false}) controlEmail : any ;
  @ViewChild('controlPassword') controlePassword : any ;
  @ViewChild('controlType') controlType : any ;
  @ViewChild('repeatPassword') repeatPassword : any ;


  user = {
    name : '',
    email : '',
    password : '',
    confirmPassword : '',
    type : ''
  };

  public addData(data: any) {
    if(data.name == "" || data.email == "" || data.password == "" || data.type == ""){
      if (data.name == "")
        {   
          this.controleName.nativeElement.style.display = "block" ;
        }else {
          this.controleName.nativeElement.style.display = "none" ;
        }
        if (data.email==""){
          this.controlEmail.nativeElement.style.display = "block" ;
        }else{
          this.controlEmail.nativeElement.style.display = "none" ;
        }
        if (data.password == ""){
          this.controlePassword.nativeElement.style.display = "block" ;
        }else{
          this.controlePassword.nativeElement.style.display = "none" ;
        }
        if (data.type == ""){
          this.controlType.nativeElement.style.display = "block" ;
        }else{
          this.controlType.nativeElement.style.display = "none" ;
        }
    }else {
      if (data.password != data.confirmPassword)
      { 
        this.repeatPassword.nativeElement.style.display = "block" ;
      }else{
        this.repeatPassword.nativeElement.style.display = "none";
        this.service.Addaccout(data).subscribe(
          response => {
            this.router.navigate(['/signin']);
          },
          error => {
            console.error("Error adding account:", error);
          }
        );
      }
    }
  }

}
