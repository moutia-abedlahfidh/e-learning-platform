import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http : HttpClient) { }

  private url = 'http://localhost:8090/'

  Addaccout(data:any) {
    return this.http.post(this.url + 'teacher/saveData',data);
  }

  checkAccount(data:any)
  {
    return this.http.post(this.url+'teacher/checkAccount',data);
  }
}
