import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http : HttpClient,private cookieService: CookieService) { }

  public isAuthenticated = false ;

  isLoggedIn(): boolean {
    if (this.cookieService.get("authenticated") == "true") {
      return true;
    }
    return false; 
  }

  private url = 'http://localhost:8090/'

  Addaccout(data:any) {
    return this.http.post(this.url + 'teacher/saveData',data);
  }

  checkAccount(data:any)
  {
    return this.http.post(this.url+'teacher/checkAccount',data);
  }
}
