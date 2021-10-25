import { Component, OnInit, Pipe } from '@angular/core';
import { ApiService } from './api.service';
import { IUser } from './user';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Router } from '@angular/router';
@Pipe({
  name: 'paginate', 
  pure: false,
})
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users$: Observable<IUser[]>;
  filteredUsers$: Observable<IUser[]>;
  searchValue: string;
  p: number;

  constructor(private api: ApiService, private router: Router) {}
  ngOnInit() {
    this.users$ = this.api.getUsers();
    this.filteredUsers$ = this.users$;
  }
  showHide(user: IUser) {
    // for each user we can add a property of show and use this as
    // a boolean flag to turn each one on/off for a list of any size
    user.show = !user.show;
  }
  deleteUSer() {
    // global list
    this.users$ = this.api.deleteUser(this.searchValue);
    // results to show
    this.filteredUsers$ = this.users$;
  }
  addUSer() {
    this.p = 1;
    this.users$ = this.api.addUser(this.searchValue);
    this.filteredUsers$ = this.api.showOneUSer();
  }
  routab() {
    console.log('en route');
    console.log(this.p);
    this.router.navigate(['/routab']);
  }
  home() {
    console.log('en home');

    this.router.navigate(['/']);
  }

  search(value: string) {
    this.searchValue = value;
    if (value) {
      this.filteredUsers$ = this.users$.pipe(
        // the stream is of a single item that is of type array
        // map(user => user.name) would not work because it is not // a stream of items inside the array
        map((users: IUser[]) => {
          // inside the map we use the native Array.prototype.filter() method to filter down the results by name
          return users.filter(
            (user: IUser) =>
              user.name.toLowerCase().indexOf(value.toLowerCase()) > -1
          );
        })
      );
    } else {
      // reload the full data set
      this.filteredUsers$ = this.users$;
    }
  }
}
