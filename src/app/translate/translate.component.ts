import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import {AuthService} from '../auth.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent implements OnInit {
  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {
    translateService.addLangs(['en']);
    translateService.addLangs(['fr']);
    translateService.setDefaultLang('en');
  }
  name = 'Angular';
  minutes = 0;
  gender = 'female';
  fly = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  male() {
    this.gender = 'male';
  }
  female() {
    this.gender = 'female';
  }
  other() {
    this.gender = 'other';
  }

  ngOnInit() {
    console.log('inside translate 01');
  }
  onLoadServers(id: number) {
    console.log('inside translate onload servers 01');
    // this.router.navigate(['/servers',id,'edit'],{queryParams:{allowedit:id},fragment:'loading'});
  }

  switchLanguage(language: string) {
    console.log(language);
    this.translateService.use(language);
  }

  onLogIn() {
    console.log('inside translate login 01');
    //this.authService.login();
  }

  onLogOut() {
    console.log('inside translate logout  01');
    //this.authService.logout();
  }
  websiteList: any = ['FrLang', 'EnLang', 'DeLang'];

  form = new FormGroup({ website: new FormControl('', Validators.required) });
  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
  }
  /////////////////////////////////////////////////////////////////////////////

  changeWebsite(e) {
    const foo = {
      results: [
        {
          tag: 'FrLang',
          name: 'fr',
        },
        {
          tag: 'EnLang',
          name: 'en',
        },
        {
          tag: 'DeLang',
          name: 'de',
        },
      ],
    };
    console.log(e.target.value);
    let er = e.target.value;
    let ae = foo.results.find((item) => item.tag == er);
    console.log('==');
    console.log('ae' + ae.name);

    
    console.log('==');
    this.translateService.use(ae.name);
  }
}

// router.navigate method takes elements which configure the path as arguments
