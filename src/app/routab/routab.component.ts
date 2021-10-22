import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import {AuthService} from '../auth.service';

@Component({
  selector: 'app-routab',
  templateUrl: './routab.component.html',
  styleUrls: ['./routab.component.css']
})
export class RoutabComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
 onLoadServers(id:number){
     // this.router.navigate(['/servers',id,'edit'],{queryParams:{allowedit:id},fragment:'loading'});
 }

 onLogIn()
 {
   //this.authService.login();
 }

 onLogOut(){
   //this.authService.logout();
 }

}


// router.navigate method takes elements which configure the path as arguments