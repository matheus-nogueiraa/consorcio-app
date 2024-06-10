import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../../models/User/user.model';
import { UpdateUser } from '../../models/User/update-user.model';
import { Observable } from 'rxjs';
import { UpdateLogin } from '../../models/User/update-login.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.api;
  constructor(private httpClient: HttpClient) { }
  userId = 2;

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}/users`);
  }

  // Método para obter um usuário específico
  getUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/users/${this.userId}`);
  }

  updateUser(updateUser: UpdateUser) {
    return this.httpClient.put<UpdateUser>(`${this.url}/users/${this.userId}/update`, updateUser);
  }

  updateLogin(updateLogin: UpdateLogin) {
    return this.httpClient.put<UpdateUser>(`${this.url}/users/${this.userId}/updatelogin`, updateLogin);
  }
}
