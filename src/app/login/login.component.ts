import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ow-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {

  user_id: string;
  password: string;
  num: number;
  loginInfo: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    console.log('onClick', this.user_id, this.password, this.num);
  }

  onClear() {
    this.user_id = undefined;
    this.password = undefined;
  }

}
