import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from './model/result';

@Injectable({
  providedIn: 'root'
})
export class FooBarQuixService {
  constructor(private httpCLient: HttpClient) { }

  public convertNumber(value: number): Observable<Result> {
    console.log('sss')
    return this.httpCLient.get<Result>(`http://localhost:8080/foo-bar-quix/${value}`);
  }

}
