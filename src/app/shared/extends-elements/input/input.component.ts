import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ow-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class InputComponent implements OnInit {

  @Input() label;
  @Input() type;
  
  @Input() value;
  @Output() outputEvent = new EventEmitter();
  @Input() required;
  @Input() placeholder;

  constructor() { }

  ngOnInit() {
  }
  
  onOutputEvent(value): void {
    console.log('value', value);
    this.outputEvent.emit(value);
  }
}
