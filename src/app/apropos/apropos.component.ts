import { Component, OnInit } from '@angular/core';
declare var $, jQuery: any;
@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(window).trigger('resize').trigger('scroll');
  }

}
