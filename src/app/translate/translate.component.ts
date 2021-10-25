import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {AuthService} from '../auth.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('inside translate 01');
  }
  onLoadServers(id: number) {
    console.log('inside translate onload servers 01');
    // this.router.navigate(['/servers',id,'edit'],{queryParams:{allowedit:id},fragment:'loading'});
  }

  onLogIn() {
    console.log('inside translate login 01');
    //this.authService.login();
  }

  onLogOut() {
    console.log('inside translate logout  01');
    //this.authService.logout();
  }
}

// router.navigate method takes elements which configure the path as arguments
