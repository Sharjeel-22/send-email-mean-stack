import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
interface EmailData {
  recipients:string;
  subject:string;
  message:string;
}
@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  BASE_URL = "https://localhost:3000";

  constructor(private http:HttpClient) { }

  sendEamil(data:any):Observable<EmailData> {
    return this.http.post<EmailData>(`${this.BASE_URL}/send-email`,data);
  }
}
