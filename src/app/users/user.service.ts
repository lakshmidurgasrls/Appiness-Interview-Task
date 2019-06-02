import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  USER_API="assets/userInfo.json";

  constructor(private http:HttpClient) { }

  getUserDetails(){   
    return this.http.get(this.USER_API);
  } 

}
