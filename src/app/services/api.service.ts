import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from '../../models/User/user.model';
import { UpdateUser } from '../../models/User/update-user.model';
import { CreateGroup } from '../../models/Group/createGroup.model';
import { Observable } from 'rxjs';
import { Group } from '../../models/Group/group.model';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.api;
  userId = 3;
  constructor(private httpClient: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}/users`);
  }

  getUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/users/${this.userId}`);
  }

  updateUser(userId: number, updateUser: UpdateUser) {
    return this.httpClient.put<UpdateUser>(`${this.url}/users/${userId}/update`, updateUser);
  }
  
  getGroup(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.url}/groups`);
  }

  postGroup(userId: number, grupo: CreateGroup): Observable<CreateGroup> {
    return this.httpClient.post<CreateGroup>(`${this.url}/groups/${userId}/create`, grupo);
  }

}
