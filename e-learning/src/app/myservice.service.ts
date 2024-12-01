import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http : HttpClient,private cookieService: CookieService) { }

  public isAuthenticated = false ;

  user : User ={
    id : 0,
    name :'',
    email : '',
    password : '',
    type : ''
  }

  isLoggedIn(): boolean {
    if (this.cookieService.get("authenticated") == "true") {
      return true;
    }
    return false; 
  }
  private server = 'http://localhost:8080/'
  private server1 = 'http://localhost:8090/'

  Addaccout(data:any) {
    return this.http.post(this.server + 'teacher/saveData',data);
  }

  checkAccount(data:any)
  {
    return this.http.post(this.server+'teacher/checkAccount',data);
  }

  getCoursesById(idTeacher: number) {
    return this.http.get(this.server1 + 'code/getCourses/' + idTeacher );
  }

  addCourse(data:any) {
    return this.http.post(this.server1+'code/savecourse', data);
  }
  addfile(file : File)
  {
    const formData: FormData = new FormData();
    formData.append('file',file,file.name);
    return this.http.post(this.server1+'code/uploadfile',formData).subscribe(
      response => {
          
      },
      error => {
          
      }
  );
  }
}
