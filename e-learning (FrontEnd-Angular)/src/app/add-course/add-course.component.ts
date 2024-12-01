import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  constructor(private service:MyserviceService){}
  inputElement : any ;
  fileToUpload: any  ;
  data = {
    idteacher : 0,
    code : '' ,
    name_course : '',
    logo_course : ''
  }
  ngOnInit() : void {
    this.inputElement = document.getElementById('generate') as HTMLInputElement;
    this.data.idteacher = this.service.user.id ;
  }

  onFileSelected(event : Event) : void {
    const input = event.target as HTMLInputElement;
    if ( input.files && input.files.length > 0) {
      this.fileToUpload = input.files[0] ;
      this.data.logo_course = "C:/Users/MSI/Desktop/e-learning platform/backend/files" + input.files[0].name ;
    }
  }
  
  generateCode() : void {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code : string = "";
    let number1 = Math.floor(Math.random() * 10);
    let letter1 = letters[Math.floor(Math.random() * 27)];
    let number2 = Math.floor(Math.random() * 10);
    let letter2 = letters[Math.floor(Math.random() * 27)];
    let number3 = Math.floor(Math.random() * 10);
    let letter3 = letters[Math.floor(Math.random() * 27)];
    code = `#${letter1}${number1}${letter2}${number2}${letter3}${number3}` ;
    this.data.code = code ;
    this.inputElement.value = code;
  }

  async addCourse() : Promise<void> { 
    await this.service.addfile(this.fileToUpload);
    await this.service.addCourse(this.data).subscribe(
      sub=>{
        this.data.name_course = '' ;
        this.data.logo_course = '' ;
        this.data.code = '' ;
        this.inputElement.value = '';
        this.fileToUpload = File ;
        return sub ;
      },
      err=>{
        console.log(err);
        return err ;
      }
    );
  }
}
