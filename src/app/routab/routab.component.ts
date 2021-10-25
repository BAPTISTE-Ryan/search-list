import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {AuthService} from '../auth.service';

@Component({
  selector: 'app-routab',
  templateUrl: './routab.component.html',
  styleUrls: ['./routab.component.css'],
})
export class RoutabComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('inside 01');
  }
  onLoadServers(id: number) {
    console.log('inside onload servers 01');
    // this.router.navigate(['/servers',id,'edit'],{queryParams:{allowedit:id},fragment:'loading'});
  }

  onLogIn() {
    console.log('inside login 01');
    //this.authService.login();
  }

  onLogOut() {
    console.log('inside logout  01');
    //this.authService.logout();
  }
}

// router.navigate method takes elements which configure the path as arguments
