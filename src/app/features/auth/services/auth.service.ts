import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { map, Observable } from 'rxjs';
import { User } from '../../../core/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private REGISTER_ENDPOINT = environment.API_URL + "/api/auth/register";
  private LOGIN_ENDPOINT = environment.API_URL + "/api/auth/login";
  private http = inject(HttpClient);

  constructor() { }


  public registerUser(user: User): Observable<any>{

    const formData = new FormData();

    formData.append("username", user.username);
    
    if (user.password !== undefined) formData.append("password", user.password);
    if (user.profilePhoto instanceof File) formData.append("imageFile", user.profilePhoto, user.profilePhoto.name);

    return this.http.post(this.REGISTER_ENDPOINT, formData);
  }


  public loginUser(username: string, password: string): Observable<any> {
    const body = { username, password }
    return this.http.post(this.LOGIN_ENDPOINT, body);
  }

}
