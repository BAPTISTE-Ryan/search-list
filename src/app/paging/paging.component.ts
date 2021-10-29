import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {AuthService} from '../auth.service';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css'],
})
export class PagingComponent implements OnInit {
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
