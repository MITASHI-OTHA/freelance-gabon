import { Component, OnInit } from '@angular/core';
declare var $, jQuery: any;
@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(window).trigger('resize').trigger('scroll');
  }

}
