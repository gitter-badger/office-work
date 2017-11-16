import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ow-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;
  @Input() items: any;

  constructor() { }

  ngOnInit() {
  }

}
