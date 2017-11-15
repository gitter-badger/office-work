import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  group,
  transition
} from '@angular/animations';

@Component({
  selector: 'ow-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    trigger('collapse', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('50ms ease-out'))
    ])
  ]
})
export class ButtonComponent implements OnInit {

  @Input() label;
  @Input() disabled;
  collapse;

  @Output()
  private clickEvent = new EventEmitter();
  onClick($event): void {
    this.toggleCollapse();
    this.clickEvent.emit($event);
  }
  
  constructor() { }

  ngOnInit() {
  }

  toggleCollapse() {
    this.collapse = this.collapse === 'active' ? 'inactive' : 'active';
    setTimeout(() => {
      this.collapse = 'inactive';
    }, 200)
  }


}
