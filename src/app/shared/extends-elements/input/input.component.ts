import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ow-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
  @Input() value: string;
  @Output() output = new EventEmitter();
  @Input() required: boolean;
  @Input() disabled = false;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {
  }

  onOutput(value): void {
    this.output.emit(value);
  }
}
