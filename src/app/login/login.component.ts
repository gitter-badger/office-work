import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Auth0Service } from '../auth/auth0.service';

@Component({
  selector: 'ow-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {

  user_id: string;
  password: string;
  loginInfo: FormGroup;

  constructor(
    private auth0Service: Auth0Service
  ) {
  }

  ngOnInit() {
  }

  onClick() {
    console.log('onClick', this.user_id, this.password);
    this.auth0Service.login();
  }

  onClear() {
    this.user_id = undefined;
    this.password = undefined;
  }

}
