import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ow-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {

  user_id: string;
  password: string

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    console.log('onClick', this.user_id, this.password);
  }
}
