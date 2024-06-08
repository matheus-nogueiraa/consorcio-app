import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../../models/User/user.model';
import { UpdateUser } from '../../models/User/update-user.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.api;
  constructor(private httpClient: HttpClient) { }


  getUsers(){
    return this.httpClient.get<User[]>(`${this.url}/users`);
  }

  updateUser(userId: number, updateUser: UpdateUser) {
    return this.httpClient.put<UpdateUser>(`${this.url}/users/${userId}/update`, updateUser);
  }



}
