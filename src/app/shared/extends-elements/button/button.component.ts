import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ow-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent implements OnInit {

  @Input() label;
  @Input() disabled;

  @Output()
  private clickEvent = new EventEmitter();
  onClick($event): void {
    this.clickEvent.emit($event);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
