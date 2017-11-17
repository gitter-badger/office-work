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
  items = [{
    key: 0,
    value: '北海道'
  }, {
    key: 1,
    value: '東京'
  }, {
    key: 2,
    value: '神戸'
  }];

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
