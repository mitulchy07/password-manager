import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordsService {
  constructor(private _http: HttpClient ) {}
  
  addingData(data: any): Observable<any>{
    return this._http.post('/passwords', data)
  }
  updatingData(id: number, data: any): Observable<any>{
    return this._http.put(`/passwords/${id}`, data)
  }
  gettingData(): Observable<any>{
    return this._http.get('/passwords')
  }
  deleteData(id:number): Observable<any>{
    return this._http.delete(`/passwords/${id}`);
  }
}
