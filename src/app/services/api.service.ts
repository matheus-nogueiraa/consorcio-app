import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../../models/User/signup.model';
import { CreateGroup } from '../../models/Create-Group/createGroup.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.api;
  constructor(private httpClient: HttpClient) { }


  getUsers(){
    return this.httpClient.get<User[]>(`${this.url}/users`);
  }

  setGroup(groupData: CreateGroup): Observable<CreateGroup> {
    return this.httpClient.post<CreateGroup>(`${this.url}/create-group`, groupData);
  }
}
