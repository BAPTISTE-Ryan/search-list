import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './user';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class ApiService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `https://jsonplaceholder.typicode.com/users`;
  }

  getUsers(): Observable<any> {
    var obs = new Observable((obs) => {
      this.http.get(this.url).subscribe((user) => {
        localStorage.setItem('testJSON', JSON.stringify(user));
        obs.next(user);
        obs.complete();
      });
    });

    return obs;
  }

  addUser(name: string): Observable<any> {
    let locals = localStorage.getItem('testJSON');

    let userv: [any] = JSON.parse(localStorage.getItem('testJSON'));

    const usert = <any>userv;

    const usernew = <any>userv[0];

    usernew.name = name;

    usert.push(usernew);

    console.log(usert);
    localStorage.setItem('testJSON', JSON.stringify(usert));
    const myObservable = new Observable<any>((observer) => {
      observer.next(usert);
    });

    /*
    myObservable.subscribe({
      next: (value) => value,
    });*/

    return myObservable;
  }
}
