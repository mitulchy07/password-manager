import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordsService {
  constructor(private _http: HttpClient ) {}
  
  addingData(data: any): Observable<any>{
    return this._http.post('https://password-manager-git-main-mitulchy07.vercel.app//passwords', data)
  }
  updatingData(id: number, data: any): Observable<any>{
    return this._http.put(`https://password-manager-git-main-mitulchy07.vercel.app//passwords/${id}`, data)
  }
  gettingData(): Observable<any>{
    return this._http.get('https://password-manager-git-main-mitulchy07.vercel.app//passwords')
  }
  deleteData(id:number): Observable<any>{
    return this._http.delete(`https://password-manager-git-main-mitulchy07.vercel.app//passwords/${id}`);
  }
}
