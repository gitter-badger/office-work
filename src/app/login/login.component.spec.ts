import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ow-input',
  template: ``
})
export class InputWapperComponent implements OnInit {
  @Input() type;
  @Input() label;
  @Input() value;
  @Input() required;
  @Input() placeholder;
  @Output() output = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'ow-button',
  template: ``
})
export class ButtonWapperComponent implements OnInit {
  @Input() label;
  @Output() clickEvent = new EventEmitter();
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'ow-input-number',
  template: ``
})
export class InputNumberWapperComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
  @Input() value: string;
  @Output() output = new EventEmitter();
  @Input() required: boolean;
  @Input() disabled = false;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'ow-select',
  template: ``
})
export class SelectWapperComponent implements OnInit {

  @Input() label: string;
  @Input() items: Select;
  @Input() required: boolean;

  constructor() { }

  ngOnInit() { }
}

export class Select {
  key: string;
  value: string;
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        LoginComponent,
        InputWapperComponent,
        ButtonWapperComponent,
        InputNumberWapperComponent,
        SelectWapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
