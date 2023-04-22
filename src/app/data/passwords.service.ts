import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordsService {
  constructor(private _http: HttpClient ) {}
  
  addingData(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/passwords', data)
  }
  updatingData(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000//passwords/${id}`, data)
  }
  gettingData(): Observable<any>{
    return this._http.get('http://localhost:3000/passwords')
  }
  deleteData(id:number): Observable<any>{
    return this._http.delete(`http://localhost:3000/passwords/${id}`);
  }
}
