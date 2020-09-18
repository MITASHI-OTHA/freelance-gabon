import { Component, OnInit, Input } from '@angular/core';
import { AllprojetsService } from '../allprojets.service';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
declare var $, ldBar: any;
@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {
  avatars: string;
  link = 'http://localhost/php-challenge/file/';
  @Input() message: string;
  @Input() head: string;
  @Input() color: string;
  @Input() Recru: any;
  loading: boolean;
  pic = true;
  constructor(private allprojet: AllprojetsService, private routes: Router) { }

  ngOnInit() {
    this.allprojet.subjet.subscribe(res => {
      //console.log('les infos', res);
      if (res === false) {
      }
    });
    const inf = this.allprojet.infosUser;
    this.avatars = inf[0].avatar;
    this.allprojet.getInfosUser();
    this.allprojet.subjet.subscribe();
    this.allprojet.Geterror();
    this.getPercent();
  }
  getPercent() {
    const req = this.allprojet.setLdBar();
    //console.log('res ', req);
    const t = req.percent;
    this.head = req.head;
    this.message = req.message;
    this.color = req.color;
    $('#bar').progress({
      percent: t
    });
  }
  onChange($event: { srcElement: { files: any[]; }; }) {
    $('.xx').css({'display': 'flex', 'background-color': 'rgba(0, 0, 0, 0.33)', 'z-index': '999', 'position': 'absolute', 'left': '0', 'right': '0', 'top': 0, 'bottom': 0});
    $(document).click(function() {
      $('.xx').css('display', 'none');
      $('#picture').attr('src', '');
    });
    $('#setPhoto').click(function(e) {
      e.stopPropagation();
    });
    $('.xx').css('height', $(document).height() + 'px');
    $(window).resize(function() {
        $('.xx').css('height', $(document).height() + 'px');
    });
    const file = $event.srcElement.files[0];
    const image =  document.getElementById('picture');
    const pic = $('#picture');
    const url = window.URL.createObjectURL(file);
    $('#picture').attr('src', url);
    pic.cropper('destroy');
  const cropper = pic.cropper({
        ready: function () {
          $(this).cropper('getCroppedCanvas').toBlob(function (blob) {
          });
        }
      });
      $('.select').on('click', () => {
        this.pic = false;
        this.loading = true;
        setTimeout(() => {
          $('.xx').css('display', 'none');
          $('#picture').attr('src', '');
        }, 1000);
        $(this).addClass('disabled');
        pic.cropper('getCroppedCanvas').toBlob((blob: string | Blob) => {
          const formdata = new FormData();
          formdata.append('croppedImage', blob);
          this.allprojet.sendBlob(formdata).then((response: any) => {
          const err = this.allprojet.Geterror();
            // if (err) {
            //   alert('erreur');
            //   return;
            // }
            const data = response;
            $('.select').removeClass('disabled');
             this.avatars = this.link + data.name;
             const obj = JSON.parse(this.allprojet.getLocal().getItem('user'));
             obj[0].avatar = this.link + data.name;
             this.allprojet.getLocal().setItem('user', JSON.stringify(obj));
             const email = obj[0].email;
             const status = obj[0].status;
             this.allprojet.updateAvatar(email, data.name, status).then(rep => {
               //console.log('MAJ avatas ', rep);
               setTimeout(() => {
                this.pic = true;
                this.loading = false;
               }, 1000);
             });
          });
        });
    });
  }
}
