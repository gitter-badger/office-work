import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ow-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class InputNumberComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
  @Input() value: string;
  @Output() output = new EventEmitter();
  @Input() required: boolean;
  @Input() disabled = false;
  @Input() placeholder: string;

  flg = true;
  constructor() { }

  ngOnInit() {
  }

  onOutput(value): void {
    this.output.emit(value);
  }

  onClick(flg: boolean) {
    console.log('onClick', flg);
    this.flg = flg;
  }
}

