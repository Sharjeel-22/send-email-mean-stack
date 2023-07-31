import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  BASE_URL = "https://localhost:3000";

  constructor(private http:HttpClient) { }

  sendEamil(data:any):Observable<any> {
    return this.http.post(`${this.BASE_URL}/send-email`,data);
  }
}
