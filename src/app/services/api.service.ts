import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Signup } from '../../models/User/signup.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.api;
  constructor(private httpClient: HttpClient) { }


  getUsers(){
    return this.httpClient.get<Signup[]>(`${this.url}/users`);
  }

  updateUser(userId: number, updateUser: UpdateUser) {
    return this.httpClient.put<UpdateUser>(`${this.url}/users/${userId}/update`, updateUser);
  }



}
