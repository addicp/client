import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any = {
    first_name: null,
    id: null,
    gold: null,
  }
  user$ = new BehaviorSubject<any>({
    first_name: null,
    id: null,
    gold: null,
  })
  baseURL: string = 'http://localhost:8000/users'
  constructor(private http: HttpClient) { }
  createUser(userData: object): Observable<any> {
    return this.http.post<object>(`${this.baseURL}/create/`, userData);
  }

  loginUser(loginData: object): Observable<any> {
    return this.http.post<object>(`${this.baseURL}/login/`, loginData);
  }

  logout() {
    localStorage.clear();

  }
}
