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
  showOneUSer() {
    let locals = localStorage.getItem('testJSON');

    let userv: [any] = JSON.parse(localStorage.getItem('testJSON'));
    let usert = <any>userv;
    console.log([usert[usert.length - 1]]);
    usert = [usert[usert.length - 1]];
    const myObservable = new Observable<any>((observer) => {
      observer.next(usert);
    });
    return myObservable;
  }
  storageObservable: any = new Observable<any>((observer) => {
    observer.next(null);
  });

  // retrieve
  // storageObservable.subscribe();
  /*
  // store
  const myObservable = new Observable<any>((observer) => {
      observer.next(usert);
    });
  */

  addUser(name: string): Observable<any> {
    let locals = localStorage.getItem('testJSON');

    let userv: [any] = JSON.parse(localStorage.getItem('testJSON'));
    let usert = <any>userv;
    const usernew = <any>userv[0];
    usernew.name = name;
    usert.push(usernew);
    //if()
    console.log(usert.splice(0, 1));

    console.log(usert.length - 1);

    localStorage.setItem('testJSON', JSON.stringify(usert));

    const myObservable = new Observable<any>((observer) => {
      observer.next(usert);
    });

    return myObservable;
  }

  deleteUser(name: string): Observable<any> {
    let locals = localStorage.getItem('testJSON');
    let userv: [any] = JSON.parse(localStorage.getItem('testJSON'));
    let usert = <any>userv;
    let i: number;
    for (let a in usert) {
    
      if (usert.length != 0) {
        if (usert[a].name == name) {
          usert.splice(a, 1);
          console.log(
            'name ' + usert[a].name + ' position ' + a + usert.length
          );
        }
        console.log(a);
      }
      console.log("------");
      console.log(usert);
      console.log("======");
    }

    console.log(usert.length - 1);
    localStorage.setItem('testJSON', JSON.stringify(usert));
    const myObservable = new Observable<any>((observer) => {
      observer.next(usert);
    });
    return myObservable;
  }
}
