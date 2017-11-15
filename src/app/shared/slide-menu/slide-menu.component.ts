import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'ow-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    trigger('collapse', [
      transition('closed => open', animate('300ms ease-in')),
      transition('open => closed', animate('100ms ease-out')),
      state('open', style({
        width: '300px'
      })),
      state('closed', style({
        width: '0px'
      }))
    ]),
    trigger('collapseButton', [
      state('open', style({
        backgroundColor: '#dddddd'
      })),
      state('closed', style({
        backgroundColor: '#ffffff'
      }))
    ])
  ]
})
export class SlideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'ia';
  collapse: string = 'closed';
  toggleCollapse() {
    this.collapse = this.collapse === 'open' ? 'closed' : 'open';
  }

}
