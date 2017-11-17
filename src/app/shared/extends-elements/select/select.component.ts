import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Select } from './select';

@Component({
  selector: 'ow-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SelectComponent implements OnInit {

  @Input() label: string;
  @Input() items: Select;
  selectedItem: Select;

  constructor() { }

  ngOnInit() {
    this.selectedItem = new Select();
  }

}
