import { Component, OnInit } from '@angular/core';
import { Router, Routes, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { AuthService } from './AuthService';
import { AllprojetsService } from './allprojets.service';
declare var $, window, demo ,NProgress: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  default = 'http://localhost/php-challenge/myfreelancer/src/avatars/default.png';
  constructor(private routes: Router, private Auth: AuthService, private service: AllprojetsService) {
    
     demo.init()
    $(window).on('load', function() {
      demo.spinner.setComplete();
    })
    routes.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        NProgress.start();
      }
      if (event instanceof NavigationEnd) {
        NProgress.done();
        window.scrollTo(0, 0);
        $('#Tuto').modal('hide')
        $('body').css('overflow', 'auto')
      }
      if (event instanceof NavigationError) {
        NProgress.remove();
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }
  ngOnInit() {
    // this.service.getImage().then((img: any) => {
    //     for (const i of img) {
    //      // console.log('images ', img[i] , ' i ', i);
    //       const image = i.image;
    //       this.cached(image);
    //   }
    // });
  }

  // cached(images) {
  //     $.preload([images], {
  //         onRequest: function(e) {
  //             //console.log('requete de webserve ', e.image);
  //         },
  //         onFinish: function(data) {
  //             //console.log('image', data.image, 'preloader');
  //         }
  //     });
  // }
}
