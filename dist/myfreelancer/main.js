(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AuthService.ts":
/*!********************************!*\
  !*** ./src/app/AuthService.ts ***!
  \********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(service, route) {
        this.service = service;
        this.route = route;
        this.sujet = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AuthService.prototype.getUser = function () {
        var user = JSON.parse(this.service.getLocal().getItem('user')) || [];
        //console.log('getLocal ', this.service.getLocal().getItem('user'));
        if (user.length <= 0) {
            this.Auth = false;
            return false;
        }
        else {
            var data = [
                {
                    id: user[0].id,
                    nom: user[0].userName,
                    avatar: user[0].avatar,
                    specialite: user[0].specialite,
                    email: user[0].email,
                    skill: user[0].skill,
                    ville: user[0].ville
                }
            ];
            this.service.putInfosUser(data);
            this.Auth = true;
            return data;
        }
    };
    AuthService.prototype.connected = function () {
        return this.Auth = true;
    };
    AuthService.prototype.logout = function () {
        this.service.getLocal().removeItem('user');
        this.service.getLocal().removeItem('projets');
        var store = JSON.parse(localStorage.getItem('projets')) || [];
        if (store.length > 0) {
            localStorage.removeItem('projets');
        }
        this.Auth = false;
        this.route.navigate(['/']);
    };
    AuthService.prototype.getAuth = function () {
        return this.sujet.next(this.Auth);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_allprojets_service__WEBPACK_IMPORTED_MODULE_0__["AllprojetsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/GuardProfil.ts":
/*!********************************!*\
  !*** ./src/app/GuardProfil.ts ***!
  \********************************/
/*! exports provided: GuardProfil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardProfil", function() { return GuardProfil; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthService */ "./src/app/AuthService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuardProfil = /** @class */ (function () {
    function GuardProfil(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    GuardProfil.prototype.canActivate = function (route, state) {
        if (this.auth.Auth) {
            return true;
        }
        else {
            this.route.navigate(['/']);
        }
    };
    GuardProfil = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_AuthService__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GuardProfil);
    return GuardProfil;
}());



/***/ }),

/***/ "./src/app/accueil/accueil.component.css":
/*!***********************************************!*\
  !*** ./src/app/accueil/accueil.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: rgb(255, 255, 255) !important;\r\n}\r\n.col-price {\r\n    width: 80%;\r\n    margin: auto;\r\n    display: flex;\r\n    margin-top: 80px;\r\n\r\n}\r\n.price-formule {\r\n    height: auto;\r\n    flex: 1;\r\n    box-shadow: 0 0 25px rgba(0,0,0,0.1);\r\n    border-radius: 5px 5px;\r\n}\r\n.price-formule h4, .price-formule h3, .price-formule h2, .price-formule h1, .price-formule span{\r\n    font-family: 'Ubuntu-Light' !important;\r\n}\r\n.parallax-windows {\r\n    min-height: 100%;\r\n    background: transparent;\r\n}\r\n.col-feature {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    margin-top: 20px;\r\n}\r\n.col-feature ul {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n.col-feature ul li {\r\n    line-height: 5ex;\r\n}\r\n.col-btn-price {\r\n    text-align: center\r\n}\r\n.col-btn-price button {\r\n    width: 82%;\r\n    padding: 20px;\r\n}\r\n.head-price-middle {\r\n    background: rgb(61, 228, 38);\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 5px 5px 0px 0px;\r\n}\r\n.body-price {\r\n    padding-left: 6ex;\r\n    padding-top: 2ex;\r\n    padding: 30px;\r\n    display: -ms-grid;\r\n    display: grid\r\n}\r\n.price-numb {\r\n    background: rgb(227, 255, 233);\r\n    margin-top: 7ex;\r\n    text-align: center;\r\n    width: 80%;\r\n    margin: auto;\r\n    margin-top: 4ex;\r\n    padding: 3ex;\r\n    border-radius: 10px;\r\n}\r\n.price-numb strong {\r\n    font-size: 14pt;\r\n    color: rgb(17, 107, 4);\r\n}\r\n.head-price-middle h4 {\r\n    margin: 0 !important;\r\n    padding: 15px;\r\n}\r\n.profil-slide {\r\n    position: absolute;\r\n    right: -22em;\r\n    top: 0;\r\n    width: 300px;\r\n    z-index: 99;\r\n    background: #21409a;\r\n    ;\r\n    transition: all .2s\r\n}\r\n.col-user-img {\r\n    display: flex;\r\n    margin-top: 2ex\r\n}\r\n.min-user-img {\r\n    margin: auto;\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    border: 3px solid #FFC107;\r\n    background-size: cover\r\n}\r\n.parent-list {\r\n    background: #2343a0;\r\n    height: 100px;\r\n    border-top: 1px solid hsla(0, 0%, 100%, 0.06);\r\n    border-bottom: 1px solid #2b333c30;\r\n    cursor: pointer;\r\n}\r\n.parent-list:hover {\r\n    background: #193486;\r\n}\r\n.list-action {\r\n    padding: 3ex;\r\n    padding-left: 0;\r\n}\r\n.list-action i {\r\n    font-size: 30pt;\r\n    color: #d0d0d0;\r\n}\r\n.list-action span {\r\n    font-size: 20px;\r\n    margin-left: 3ex;\r\n    color: #b3b1b1;\r\n}\r\n.main-search__wrapper {\r\n    display: flex;\r\n    width: 100%;\r\n    padding: 7px;\r\n    background-color: #fff;\r\n    border-radius: 4px;\r\n}\r\n.main-search__item legend.label-w-picto,\r\n.main-search__item>label.label-w-picto {\r\n    padding-left: 40px;\r\n}\r\n.main-search__item legend.label-w-picto,\r\n.main-search__item>label.label-w-picto {\r\n    padding-left: 40px;\r\n}\r\n.main-search__item [class^=w-picto] {\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    transition-property: -webkit-transform;\r\n    transition-property: transform;\r\n    transition-property: transform, -webkit-transform;\r\n    transition-duration: 150ms;\r\n    transition-timing-function: ease-in-out;\r\n    will-change: transform;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: 100%;\r\n}\r\ndiv.awesomplete {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n.awesomplete {\r\n    width: 100%;\r\n}\r\n.rond {\r\n    height: 60px;\r\n    width: 60px;\r\n    border-radius: 100%;\r\n    border: 10px solid #ffffff;\r\n    display: flex;\r\n    background: #21409a;\r\n}\r\n@font-face {\r\n    font-family: \"OpenSans-Light\";\r\n    src: \"../webfonts/OpenSans-Light.ttf\"\r\n}\r\n.list-info>ul>li {\r\n    font-size: 13pt !important;\r\n    line-height: 26px;\r\n    font-family: OpenSans-Light, Arial, Helvetica, sans-serif;\r\n}\r\n.col-dark {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\nblockquote p {\r\n    font-family: 'roboto condensed'\r\n}\r\n.col-list-conseil {\r\n    text-align: center\r\n}\r\n.col-dark-img {\r\n    height: 380px;\r\n    background: url('Blog_freelance.png') center no-repeat;\r\n    background-size: cover\r\n}\r\n.col-list-conseil h2, h1 {\r\n    font-family: 'buenosaires-bold';\r\n }\r\n.col-list-conseil ul {\r\n    list-style: none;\r\n    display: flex;\r\n}\r\n.col-list-conseil ul li {\r\n    display: inline;\r\n    margin-right: 3ex;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    max-width: 300px\r\n}\r\n.testemony {\r\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA01pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM1QjY2QjRGOTYzQzExRTE4RjkzRThGNUY5MjlGNDJEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM1QjY2QjUwOTYzQzExRTE4RjkzRThGNUY5MjlGNDJEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzVCNjZCNEQ5NjNDMTFFMThGOTNFOEY1RjkyOUY0MkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzVCNjZCNEU5NjNDMTFFMThGOTNFOEY1RjkyOUY0MkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4t01EpAAAAHklEQVR42mJgYGBQY0AFhPhEKaKzplE/DLwmgAADAB2yBVkvWEStAAAAAElFTkSuQmCC');\r\n}\r\n.cbp-qtcontent img {\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.rond>div {\r\n    margin: auto;\r\n    text-align: center;\r\n    color: #fff\r\n}\r\n.list-info>p {\r\n    min-width: 300px;\r\n    width: 70%;\r\n    font-size: 15pt;\r\n    margin-top: 3ex;\r\n}\r\n.main-search__item input[type=text] {\r\n    height: 35px;\r\n    margin-bottom: 0;\r\n    padding: 5px 15px;\r\n    width: 88%;\r\n    height: 50px;\r\n    border: navajowhite;\r\n    outline: none;\r\n    font-size: 18px;\r\n    transition-property: opacity, -webkit-transform;\r\n    transition-property: transform, opacity;\r\n    transition-property: transform, opacity, -webkit-transform;\r\n    transition-duration: 150ms;\r\n    transition-timing-function: ease-in-out;\r\n    will-change: transform, opacity;\r\n}\r\n.main-search__item [class^=w-picto] input,\r\n.main-search__item [class^=w-picto] select {\r\n    padding-left: 40px;\r\n}\r\n.main-search__item [class^=w-picto] input {\r\n    -webkit-transform: translateY(0)!important;\r\n    transform: translateY(0)!important;\r\n}\r\nsearch__item>label {\r\n    padding: 5px 15px 0;\r\n    margin-bottom: 0!important;\r\n    color: #a6a6a6;\r\n    font-size: 16px;\r\n    -webkit-transform: translateY(15px);\r\n    transform: translateY(15px);\r\n    transition-property: font-size, color, -webkit-transform;\r\n    transition-property: transform, font-size, color;\r\n    transition-property: transform, font-size, color, -webkit-transform;\r\n    transition-duration: 150ms;\r\n    transition-timing-function: ease-in-out;\r\n    will-change: transform, font-size;\r\n}\r\n.main-search__item legend>span,\r\n.main-search__item>label>span {\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    max-width: 100%;\r\n}\r\n.main-search__item legend,\r\n.main-search__item>label {\r\n    padding: 5px 15px 0;\r\n    margin-bottom: 0!important;\r\n    color: #a6a6a6;\r\n    font-size: 16px;\r\n    -webkit-transform: translateY(15px);\r\n    transform: translateY(15px);\r\n    transition-property: font-size, color, -webkit-transform;\r\n    transition-property: transform, font-size, color;\r\n    transition-property: transform, font-size, color, -webkit-transform;\r\n    transition-duration: 150ms;\r\n    transition-timing-function: ease-in-out;\r\n    will-change: transform, font-size;\r\n}\r\n.main-search__item {\r\n    position: relative;\r\n    height: 60px;\r\n}\r\n.main-search__form {\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    color: #343a5e;\r\n    background-color: #fff;\r\n    border-radius: 2px 0 0 2px;\r\n}\r\n.window-opacity {\r\n    opacity: rgba(126, 5, 5, 0.815);\r\n    position: absolute;\r\n    z-index: 999;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 98;\r\n    background: #0a09098a;\r\n    display: none\r\n}\r\n.user-infos {\r\n    margin-top: 3ex;\r\n}"

/***/ }),

/***/ "./src/app/accueil/accueil.component.html":
/*!************************************************!*\
  !*** ./src/app/accueil/accueil.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide></app-slide>\n<div style=\"height: 600px;\">\n    <div class=\"parallax-windows\">\n        <div>\n            <app-entete></app-entete>\n        </div>\n        <div class=\"texte-intro\">\n            <h1 style=\"font-family: buenosaires-bold\">La premiere platforme de freelance au Gabon</h1>\n            <div>\n                <h2 class=\"type\"></h2>\n            </div>\n            <div class=\"action-button\">\n                <button class=\"ui large inverted basic button\" [disabled]=\"connected\" routerLink=\"login\">Je me connecte</button>\n                <button class=\"ui large button\" style=\"background-color: rgb(61, 228, 38);color: #fff\" [disabled]=\"connected\" routerLink=\"signin\">Je m'inscris</button>\n            </div>\n            <div style=\"display: flex\">\n                <div class=\"sub-flex\" style=\"margin: auto;width: 80%\">\n                    <div class=\"row\">\n                        <div class=\"large-12 column col-bar-recherche\" style=\"margin-top: 8ex\">\n                        <form (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\n                            <div class=\"main-search__wrapper\" style=\"width: 80%;margin: auto\">\n                                <div class=\"main-search__form\">\n                                    <fieldset class=\"main-search__item u-f3\" style=\"width:65%;border: none\">\n                                        <div class=\"ui search freelancer\">\n                                            <div class=\"ui icon input\" style=\"width: 100%\">\n                                            <input id=\"metier\" name=\"metier\" style=\"width: 100%\" class=\"prompt\" type=\"text\" placeholder=\"Rechercher un Freelancer (Ex: Android, Java)\" ngModel required>\n                                            </div>\n                                            <div class=\"results\"></div>\n                                        </div>\n                                    </fieldset>\n                                    <fieldset class=\"main-search__item u-f3\" style=\"width: 57%;border: none;border-left: 3px solid #150c116b;\">\n                                        <div class=\"ui search ville\">\n                                            <div class=\"ui icon input\" style=\"width: 100%\">\n                                                <input id=\"villes\" name=\"ville\" style=\"width: 100%\" class=\"prompt\" type=\"text\" placeholder=\"Rechercher dans quelle ville\" ngModel required>\n                                            </div>\n                                            <div class=\"results\"></div>\n                                        </div>\n                                    </fieldset>\n                                    <button class=\"huge ui button\" style=\"background-color: rgb(61, 228, 38);color: #fff\"> Rechercher </button>\n                                </div>\n                            </div>\n                        </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<div style=\"background: rgb(255, 255, 255)\">\n<div class=\"col-slider\" style=\"margin: 0;padding: 3ex;color: #fff;height: 400px;\">\n    <div class=\"slider\">\n        <div style=\"display: flex;\">\n            <div class=\"row\" style=\"margin: auto;margin-top: 5ex;margin-left: 3ex\">\n                <h1 style=\"margin: auto;margin-top: 0px;font-size: 28pt;margin-bottom: 2ex!important;\">\n                    Tu es Freelancer ?\n                </h1>\n                <div class=\"large-4 column list-info\" style=\"display: grid\">\n                    <div class=\"rond\">\n                        <div>\n                            1\n                        </div>\n                    </div>\n                    <div class=\"list-info\">\n                        <p>\n                            Inscris-toi et trouves sur le site 1 ou plusieurs projets que tu peux réaliser.\n                        </p>\n                    </div>\n                </div>\n                <div class=\"large-4 column list-info\" style=\"display: grid\">\n                    <div class=\"rond\">\n                        <div>\n                            2\n                        </div>\n                    </div>\n                    <div class=\"list-info\">\n                        <p>\n                            Envoie ton prix par jour ou par heure pour réaliser le projet. Tu es libre de travailler quant tu veux et où tu veux.\n                        </p>\n                    </div>\n                </div>\n                <div class=\"large-4 column list-info\" style=\"display: grid\">\n                    <div class=\"rond\">\n                        <div>\n                            3\n                        </div>\n                    </div>\n                    <div class=\"list-info\">\n                        <p>\n                            Prends un rendez-vous avec le recruteur en fin de mission pour recevoir ton paiement.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- slider2 -->\n        <div style=\"display: flex;\">\n            <div class=\"row\" style=\"margin: auto;margin-top: 5ex;margin-left: 3ex\">\n                <h1 style=\"margin: auto;margin-top: 0px;font-size: 28pt;margin-bottom: 2ex!important;\">\n                    Tu es Recruteur ?\n                </h1>\n                <div class=\"large-4 column list-info\" style=\"display: grid\">\n                    <div class=\"rond\">\n                        <div>\n                            1\n                        </div>\n                    </div>\n                    <div class=\"list-info\">\n                        <p>\n                            Contacte 3-4 freelances pour réaliser ton projet et reçois leur proposition commerciale.\n                        </p>\n                    </div>\n                </div>\n                <div class=\"large-4 column list-info\" style=\"display: grid\">\n                    <div class=\"rond\">\n                        <div>\n                            2\n                        </div>\n                    </div>\n                    <div class=\"list-info\">\n                        <p>\n                            Demarre la mission avec ton freelance favori et collabore sur Freelance GA en toute sécurité.\n                        </p>\n                    </div>\n                </div>\n                <div class=\"large-4 column list-info\" style=\"display: grid\">\n                    <div class=\"rond\">\n                        <div>\n                            3\n                        </div>\n                    </div>\n                    <div class=\"list-info\">\n                        <p>\n                            En fin de mission, prends contacte avec le Freelancer pour valider le projet.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <!-- fin -->\n        </div>\n    </div>\n</div>\n<section>\n    <app-projects></app-projects>\n</section>\n<div class=\"row\" style=\"padding-top: 10ex;padding-bottom: 10ex;\">\n    <div class=\"large-12 column\" style=\"text-align: center\">\n            <h1 style=\"position: relative\">\n                Devenir Premium\n                    <div class=\"floating ui red label\" style=\"left: auto;z-index: 1\">Bientôt</div>\n            </h1>\n    </div>\n    <div class=\"large-12 column\">\n            <div class=\"col-price\">\n                <div class=\"price-formule\">\n                        <div class=\"body-price\">\n                                <span style=\"font-size: 15pt;text-align: center;\">Formule Basic</span>\n                                <span style=\"margin-top: 2ex;color: #4e4e4e;\">\n                                    Aucun frais pour une inscription ou une tâche dans les resultats de recherche\n                                </span>\n                                <div class=\"price-numb\">\n                                   <strong> 5000 Fcfa/ Mois </strong>  \n                                </div>\n                                <div class=\"col-feature\">\n                                        <span style=\"font-size: 15pt\">Privilèges du Plan</span>\n                                    <ul>\n                                        <li>Aucun frais d'inscription</li>\n                                        <li>1 mois de visibilité</li>\n                                        <li>Souligné dans les recherches</li>\n                                    </ul>\n                                </div>\n                                <div class=\"col-btn-price\">\n                                        <button class=\"medium ui button\" disabled>\n                                               Choisir cette formule\n                                        </button>\n                                </div>\n                            </div>\n                </div>\n                <div class=\"price-formule\" style=\"margin-top: -48px;box-shadow: none;\">\n                        <div class=\"head-price-middle\">\n                          <h4>Recommander</h4>\n                        </div>\n                        <div class=\"body-price\">\n                            <span style=\"font-size: 15pt;text-align: center;\">Formule standar</span>\n                            <span style=\"margin-top: 2ex;color: #4e4e4e;\">\n                                Aucun frais pour une inscription ou une tâche dans les resultats de recherche\n                            </span>\n                            <div class=\"price-numb\">\n                               <strong> 10 000 Fcfa/ Mois </strong>  \n                            </div>\n                            <div class=\"col-feature\">\n                                    <span style=\"font-size: 15pt\">Privilèges du Plan</span>\n                                <ul>\n                                    <li>Aucun frais d'inscription</li>\n                                    <li>3 mois de visibilité</li>\n                                    <li>Souligné dans les recherches</li>\n                                </ul>\n                            </div>\n                            <div class=\"col-btn-price\">\n                                    <button class=\"medium ui button\" disabled>\n                                           Choisir cette formule\n                                    </button>\n                            </div>\n                        </div>\n                </div>\n                <div class=\"price-formule\">\n                        <div class=\"body-price\">\n                                <span style=\"font-size: 15pt;text-align: center\">Formule Super</span>\n                                <span style=\"margin-top: 2ex;color: #4e4e4e;\">\n                                    Aucun frais pour une inscription ou une tâche dans les resultats de recherche\n                                </span>\n                                <div class=\"price-numb\">\n                                   <strong> 15 000 Fcfa/ Mois </strong>  \n                                </div>\n                                <div class=\"col-feature\">\n                                        <span style=\"font-size: 15pt\">Privilèges du Plan</span>\n                                    <ul>\n                                        <li>Aucun frais d'inscription</li>\n                                        <li>6 mois de visibilité</li>\n                                        <li>Souligné dans les recherches</li>\n                                    </ul>\n                                </div>\n                                <div class=\"col-btn-price\">\n                                        <button class=\"medium ui button\" disabled>\n                                               Choisir cette formule\n                                        </button>\n                                </div>\n                            </div>\n                </div>\n            </div>\n    </div>\n    \n   \n</div>\n<!-- Temoignages \n<div class=\"testemony\">\n    <h3 style=\"font-size: 23pt;color: #595973;margin-left: 17ex;margin-top: 0;padding-top: 3ex;\">Témoignage des Gabonais</h3>\n    <div id=\"cbp-qtrotator\" class=\"cbp-qtrotator\">\n        <div class=\"cbp-qtcontent\">\n            <img src=\"../avatars/09-25-59pmblob.png\" alt=\"img01\" />\n            <blockquote>\n                <p style=\"font-size: 14pt;\">Vraiment c’est ce type de site qui manquait au Gabon , c’est un grand gain pour les tous Gabonais.</p>\n                <footer>Témoignage de Mike</footer>\n            </blockquote>\n        </div>\n        <div class=\"cbp-qtcontent\">\n            <img src=\"../avatars/IMG.jpg\" alt=\"img02\" />\n            <blockquote>\n                <p style=\"font-size: 14pt;\">Freelance Gabon est vraiment un plateforme très utile, une bonne initiative . Bon courage.</p>\n                <footer>Témoignage de Sephora</footer>\n            </blockquote>\n        </div>\n        <div class=\"cbp-qtcontent\">\n            <img src=\"../avatars/ham.jpg\" alt=\"img03\" />\n            <blockquote>\n                <p style=\"font-size: 14pt;\">Ce genre de site ne peux que pousser le Gabon à une grande ouverture sur les moyens technologique web ainsi que l’adoption du concept freelance avec une bonne adaptation au marché Gabonais.</p>\n                <footer>Témoignage de Branham</footer>\n            </blockquote>\n        </div>\n    </div>\n</div>\nfin -->\n<div class=\"col-dark\">\n    <div class=\"col-dark-img cloud\">\n        <div style=\"padding: 5ex\">\n            <h1 style=\"font-size: 26pt;color: #fff;font-family: Roboto Condensed\">Télecharger l'Application Android</h1>\n            <p style=\"    font-size: 14pt;\n            line-height: 37px;\n            width: 45%;\n            color: #fff;\">\n                Freelance GA existe aussi au format Android. Télécharger Freelance Gapp sur votre smartphone et soyez informés des derniers jobs en Freelance où que vous soyez.\n            </p>\n            <button class=\"big ui button\" style=\"position: absolute;\n            z-index: 99;background-color: rgb(61, 228, 38);\"> <a href=\"assets/FreelanceGa-debug.apk\" style=\"color: #fff \">Télécharger l'application</a>  </button>\n        </div>\n    </div>\n      <!-- <div style=\"position: absolute;right: 10em; bottom: 50px;z-index: 100;\">\n        <img src=\"assets/135801bfa04d12c.png\" alt=\"\" width=\"300\">\n    </div> --> \n</div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/accueil/accueil.component.ts":
/*!**********************************************!*\
  !*** ./src/app/accueil/accueil.component.ts ***!
  \**********************************************/
/*! exports provided: AccueilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilComponent", function() { return AccueilComponent; });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AuthService */ "./src/app/AuthService.ts");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccueilComponent = /** @class */ (function () {
    function AccueilComponent(routes, Auth, service) {
        this.routes = routes;
        this.Auth = Auth;
        this.service = service;
    }
    AccueilComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*  $('.cloud').jQlouds({
           minClouds: 3,
           maxWidth: 90, // max image's width
           maxHeight: 48, // amx image's height
           wind: true
         }); */
        var size = $(window).width();
        var sizes = document.documentElement.clientWidth;
        if (size <= 320 || sizes <= 320) {
        }
        this.service.searchCompetence().then(function (response) {
            _this.competences = response;
            $('.freelancer')
                .search({
                source: _this.competences
            });
        });
        this.service.searchVille().then(function (response) {
            _this.ville = response;
            $('.ville')
                .search({
                source: _this.ville
            });
        });
        this.serchInit();
        //console.log('connected ? ', this.connected);
        var typed = new Typed('.type', {
            strings: ['Un point de rencontre entre freelancers et recruteurs', 'Trouvez de nouveaux projets', 'Trouvez des freelancers', 'Travaillez librement', 'Gagnez de l\'argent rapidement'],
            typeSpeed: 100,
            loop: true
        });
        jQuery(window).trigger('resize').trigger('scroll');
        $('.parallax-windows').parallax({ imageSrc: '../../assets/beard-blur-casual-462680.jpg', overScrollFix: true });
        $('.parallax-windows').css('height', $(window).height + 'px');
        this.getAuths();
        $('.slider').slick({
            // normal options...
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            // the magic
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        infinite: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        dots: true
                    }
                }, {
                    breakpoint: 300,
                    settings: 'unslick' // destroys slick
                }]
        });
        /* slider testemony */
        $(function () {
            /*
            - how to call the plugin:
            $( selector ).cbpQTRotator( [options] );
            - options:
            {
              // default transition speed (ms)
              speed : 700,
              // default transition easing
              easing : 'ease',
              // rotator interval (ms)
              interval : 8000
            }
            - destroy:
            $( selector ).cbpQTRotator( 'destroy' );
            */
            $('#cbp-qtrotator').cbpQTRotator();
        });
        /* fin */
    };
    AccueilComponent.prototype.serchInit = function () {
        $('.search')
            .search('is empty', 'resultat introuvable');
    };
    AccueilComponent.prototype.onSubmit = function (form) {
        var metier = form.value.metier;
        var e = $('#metier').val();
        var q = this.competences.find(function (res) {
            return res.title === e;
        });
        if (q === undefined) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Erreur', 'le metier de Freelancer que vous cherchez n\ est pas repertorié ', 'error');
            return false;
        }
        var ville = form.value.ville;
        var v = $('#villes').val();
        //console.log('metier ', e, 'ville', v);
        if (metier.length <= 0 || ville.length <= 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Oops...', 'Vous n\'avez pas remplis tous les champs', 'error');
            return;
        }
        this.routes.navigate(['recherche', 'query', e, v]);
    };
    AccueilComponent.prototype.getAuths = function () {
        var _this = this;
        this.Auth.sujet.subscribe(function (res) {
            _this.connected = res;
        });
        this.Auth.getAuth();
    };
    AccueilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accueil',
            template: __webpack_require__(/*! ./accueil.component.html */ "./src/app/accueil/accueil.component.html"),
            styles: [__webpack_require__(/*! ./accueil.component.css */ "./src/app/accueil/accueil.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_0__["slideInDownAnimation"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _AuthService__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _allprojets_service__WEBPACK_IMPORTED_MODULE_4__["AllprojetsService"]])
    ], AccueilComponent);
    return AccueilComponent;
}());



/***/ }),

/***/ "./src/app/accueil/models/Users.ts":
/*!*****************************************!*\
  !*** ./src/app/accueil/models/Users.ts ***!
  \*****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(nom, email, password, status) {
        this.nom = nom;
        this.email = email;
        this.password = password;
        this.status = status;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/all-freelancers/all-freelancers.component.css":
/*!***************************************************************!*\
  !*** ./src/app/all-freelancers/all-freelancers.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parallax-windows {\r\n    background: url('adult-blur-boy-428f361.jpg') center no-repeat;\r\n    background-size: 100%;\r\n}\r\n\r\n.col-search {\r\n    margin-right: 15ex;\r\n    margin-left: 15ex;\r\n    background: #fff;\r\n    padding-bottom: 5ex;\r\n    padding-top: 20px;\r\n    border-radius: 5px;\r\n    margin-bottom: 5ex;\r\n}\r\n\r\n.footer-card {\r\n    padding: 1ex;\r\n    background: #6666660a;\r\n    text-align: center;\r\n}\r\n\r\n.range-slider {\r\n    margin: 60px 0 0 0%;\r\n}\r\n\r\n.range-slider {\r\n    width: 100%;\r\n}\r\n\r\n.range-slider__range {\r\n    -webkit-appearance: none;\r\n    width: calc(100% - (73px));\r\n    height: 10px;\r\n    border-radius: 5px;\r\n    background: #d7dcdf;\r\n    outline: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.range-slider__range::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n    background: rgb(61, 228, 38);\r\n    cursor: pointer;\r\n    transition: background 0.15s ease-in-out;\r\n}\r\n\r\n.range-slider__range::-webkit-slider-thumb:hover {\r\n    background: #1abc9c;\r\n}\r\n\r\n.range-slider__range:active::-webkit-slider-thumb {\r\n    background: #1abc9c;\r\n}\r\n\r\n.range-slider__range::-moz-range-thumb {\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    background: #2c3e50;\r\n    cursor: pointer;\r\n    transition: background 0.15s ease-in-out;\r\n}\r\n\r\n.range-slider__range::-moz-range-thumb:hover {\r\n    background: #1abc9c;\r\n}\r\n\r\n.range-slider__range:active::-moz-range-thumb {\r\n    background: #1abc9c;\r\n}\r\n\r\n.range-slider__range:focus::-webkit-slider-thumb {\r\n    box-shadow: 0 0 0 3px #fff, 0 0 0 6px #1abc9c;\r\n}\r\n\r\n.range-slider__value {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 60px;\r\n    color: #fff;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    background: rgb(61, 228, 38);\r\n    padding: 5px 10px;\r\n    margin-left: 8px;\r\n}\r\n\r\n.range-slider__value:after {\r\n    position: absolute;\r\n    top: 8px;\r\n    left: -7px;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 7px solid transparent;\r\n    border-right: 7px solid rgb(61, 228, 38);\r\n    border-bottom: 7px solid transparent;\r\n    content: \"\";\r\n}\r\n\r\n::-moz-range-track {\r\n    background: #d7dcdf;\r\n    border: 0;\r\n}\r\n\r\ninput::-moz-focus-inner,\r\ninput::-moz-focus-outer {\r\n    border: 0;\r\n}\r\n\r\n/* pagination css */\r\n\r\n.pagination-wrapper {\r\n    text-align: center;\r\n}\r\n\r\n.pagination {\r\n    display: inline-block;\r\n    height: 70px;\r\n    margin-top: 70px;\r\n    padding: 0 25px;\r\n    border-radius: 35px;\r\n    background-color: #eee;\r\n}\r\n\r\n@media only screen and (max-width: 1199px) {\r\n    .pagination {\r\n        height: 50px;\r\n        margin-top: 50px;\r\n        padding: 0 10px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\n.page-numbers {\r\n    display: block;\r\n    padding: 0 25px;\r\n    float: left;\r\n    transition: 400ms ease;\r\n    color: #595959;\r\n    font-size: 20px;\r\n    letter-spacing: 0.1em;\r\n    line-height: 70px;\r\n    cursor: pointer\r\n}\r\n\r\n.ui.cards {\r\n    margin: 0 !important;\r\n    flex-wrap: nowrap;\r\n    height: 466px;\r\n}\r\n\r\n.column:last-child:not(:first-child), .columns:last-child:not(:first-child) {\r\n    float: left !important;\r\n}\r\n\r\n.ui.selection.dropdown.visible,\r\n.ui.selection.dropdown.active {\r\n    z-index: 15 !important;\r\n}\r\n\r\n/* .ui.cards>.card,\r\n.ui.card {\r\n    box-shadow: none !important\r\n} */\r\n\r\n.pagination-wrapper {\r\n    bottom: -88px;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n}\r\n\r\n.page-numbers:hover,\r\n.page-numbers.current {\r\n    background-color: #86c023;\r\n    color: #fff;\r\n}\r\n\r\n.page-numbers.prev:hover,\r\n.page-numbers.next:hover {\r\n    background-color: transparent;\r\n    color: #86c023;\r\n}\r\n\r\n@media only screen and (max-width: 1199px) {\r\n    .page-numbers {\r\n        padding: 0 15px;\r\n        font-size: 16px;\r\n        line-height: 50px;\r\n    }\r\n}\r\n\r\n@media(min-width: 1600px) {\r\n    .col-all-free {\r\n        width: 90% !important\r\n    }\r\n}\r\n\r\n@media(min-width: 1500px) {\r\n    .col-all-free {\r\n        width: 90% !important\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 120px) and (max-width: 1024px) {\r\n    .page-numbers {\r\n        padding: 0 14px;\r\n        display: none;\r\n    }\r\n    .page-numbers:nth-of-type(2) {\r\n        position: relative;\r\n        padding-right: 50px;\r\n    }\r\n    .page-numbers:nth-of-type(2)::after {\r\n        content: '...';\r\n        position: absolute;\r\n        font-size: 25px;\r\n        top: 0;\r\n        left: 45px;\r\n    }\r\n    .page-numbers:nth-child(-n+3),\r\n    .page-numbers:nth-last-child(-n+3) {\r\n        display: block;\r\n    }\r\n    .page-numbers:nth-last-child(-n+4) {\r\n        padding-right: 14px;\r\n    }\r\n    .page-numbers:nth-last-child(-n+4)::after {\r\n        content: none;\r\n    }\r\n}\r\n\r\n/*  */"

/***/ }),

/***/ "./src/app/all-freelancers/all-freelancers.component.html":
/*!****************************************************************!*\
  !*** ./src/app/all-freelancers/all-freelancers.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide></app-slide>\n<div style=\"position: relative;height: 400px;\">\n    <div class=\"parallax-windows\">\n        <div>\n            <app-entete></app-entete>\n        </div>\n        <div style=\"text-align: center;margin-top: 14ex;\">\n            <h1 style=\"font-family: buenosaires-bold;color: #fff;font-size: 48px;\">Trouvez Le Freelancer pour votre projet</h1>\n        </div>\n\n        <div style=\"position: absolute;left: 0;right: 0;bottom: 0\">\n            <div class=\"row col-search\">\n                <div class=\"large-3 column\">\n                    <div class=\"ui form\">\n                        <div class=\"field\">\n                            <label>Villes</label>\n                            <select class=\"ui search ville dropdown\" style=\"z-index: 20\" (change)=\"myalert($event)\">\n                                <option *ngFor=\"let v of villes\" [value]=\"v.Ville\"> {{v.Ville}} </option>\n                              </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"large-3 column\">\n                    <div class=\"ui form\">\n                        <div class=\"field\">\n                            <label>Categorie</label>\n                            <select class=\"ui search categorie dropdown\">\n                                <option value=\"\">Sélectionner une categorie</option>\n                                <option *ngFor=\"let cat of categorie\" class=\"item\" [value]=\"\">{{cat.categorie}}</option>\n                              </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"large-3 column\">\n                    <div class=\"field\">\n                        <label> <b>Prix</b> </label>\n                        <div class=\"range-slider\" style=\"margin: 0\">\n                            <input class=\"range-slider__range\" type=\"range\" value=\"500\" min=\"0\" max=\"10000\" step=\"50\">\n                            <span class=\"range-slider__value\">0</span>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"large-3 column\">\n                    <div class=\"field\">\n                        <div style=\"margin-top: -4px\"> <b>Mot clé</b></div>\n                        <div>\n                            <div class=\"ui search\">\n                                <div class=\"ui icon input\">\n                                    <input class=\"prompt\" type=\"text\" placeholder=\"Taper un mot clé\">\n                                    <i class=\"search icon\"></i>\n                                </div>\n                                <div class=\"results\"></div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div style=\"background: rgb(255, 255, 255)\">\n<div class=\"row col-all-free\" style=\"width: 78%;padding-top: 5ex;position: relative;\">\n        <div class=\"large-12 column\">\n                <ul class=\"list-push-freelancers\">\n                        <li class=\"active\" (click)=\"All()\"> <span>Tous les Freelances </span> </li>\n                        <li (click)=\"byRec()\"> <span>Freelancers recents </span> </li>\n                        <li (click)=\"byExp()\"> <span>Les + experimentés</span> </li>\n                        <li (click)=\"byQualif()\"> <span>Les + qualifiés</span></li>\n                        <li (click)=\"byBoost()\"> <span>Les + Boostés</span></li>\n                    </ul>\n        </div>\n    <div class=\"large-3 column\" *ngFor=\"let f of pagedItems; let last = last\" style=\"margin-top:3ex;\">\n        <span>{{last ? dimmers(): ''}}</span>\n        <div class=\"ui special cards\">\n            <div class=\"card\" style=\"box-shadow: 0 2px 12px rgba(0, 0, 0, .12)\">\n                <div class=\"blurring dimmable image\" style=\"background-color: #ffffff\">\n                    <div class=\"ui dimmer\">\n                        <div class=\"content\">\n                            <div class=\"center\">\n                                <div class=\"ui inverted button\" (click)=\"seen(f.id, f.nom)\">Voir sa fiche</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"label-dispo\" style=\"z-index:9;filter: none;\">\n                        <a class=\"ui label myh\" [attr.data-content]=\"getStatusText(f.dispo, f.nom).texte\">\n                            <a class=\"ui empty circular label\" [ngClass]=\"{'green': f.dispo, 'red': !f.dispo}\"></a>\n                            {{getStatusText(f.dispo, f.nom).status}}\n                        </a>\n                    </div>\n                    <img [ngStyle]=\"{'background': 'url('+ f.photo +') center no-repeat', 'background-size': 'cover', 'height': '298px'}\">\n                </div>\n                <div>\n                    <div class=\"content\" style=\"flex-grow: 0;padding-left: 7px;\">\n                        <a class=\"header\" style=\"color: #000\">  {{f.nom}}</a>\n                        <div class=\"meta\">\n                            <i class=\"fas fa-star\" style=\"color: rgb(66, 133, 244)\" *ngFor=\"let i of range(f.evaluation)\"></i>\n                        </div>\n                    </div>\n                    <div>\n                        <a class=\"ui label\" *ngFor=\"let skill of f.expsp\" style=\"padding:5px;float: left;margin: 2px;margin-left: 9px;\">\n                                {{skill}}\n                        </a>\n                    </div>    \n                </div>\n                \n                <div class=\"row\" style=\"margin: 0;margin: 0;position: absolute;left: 0;right: 0;bottom: 0;\">\n                    <div class=\"large-6 column footer-card\">\n                        <p [innerHTML]=\"getMetier(f.metier)\"></p>\n                    </div>\n                    <div class=\"large-6 column footer-card\" style=\"border-left: 2px solid #6666660a;\">\n                        {{f.prix}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div style=\"position: relative;\">\n    <div class=\"pagination-wrapper\" *ngIf=\"pager.pages && pager.pages.length\">\n        <div class=\"pagination\">\n            <a class=\"prev page-numbers\" [ngClass]=\"{disabled:pager.currentPage === 1}\" (click)=\"setPage(1, occurence)\" href=\"javascript:;\">Premiere page</a>\n            <a class=\"page-numbers\" href=\"javascript:;\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{current:pager.currentPage === page}\" (click)=\"setPage(page, occurence)\"> {{page}} </a>\n            <a class=\"page-numbers\" [ngClass]=\"{next:pager.currentPage === pager.totalPages}\" (click)=\"setPage(pager.totalPages, occurence)\">Dernière page</a>\n        </div>\n    </div>  \n</div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/all-freelancers/all-freelancers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/all-freelancers/all-freelancers.component.ts ***!
  \**************************************************************/
/*! exports provided: AllFreelancersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllFreelancersComponent", function() { return AllFreelancersComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pages.service */ "./src/app/pages.service.ts");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllFreelancersComponent = /** @class */ (function () {
    function AllFreelancersComponent(service, pages, route) {
        this.service = service;
        this.pages = pages;
        this.route = route;
        this.sujet = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.occurence = 12;
        this.search = [
            {
                ville: '',
                categorie: '',
                prix: '',
                key: ''
            }
        ];
        this.range = function (value) { var a = []; for (var i = 0; i < value; ++i) {
            a.push(i + 1);
        } return a; };
    }
    AllFreelancersComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('.list-push-freelancers li').on('click', function () {
            $('.list-push-freelancers li').removeClass('active');
            $(this).addClass('active');
        });
        this.service.getCategorie().then(function (res) {
            _this.categorie = res;
        });
        this.service.getKeyword().then(function (response) {
            _this.competences = response;
            $('.ui.search')
                .search({
                source: _this.competences
            });
        });
        jQuery(window).trigger('resize').trigger('scroll');
        // $('.parallax-windows').parallax({imageSrc: '../../assets/adult-blur-boy-428f361.jpg', overScrollFix: true});
        $('.parallax-windows').css('height', '100%');
        $('.ville').dropdown({
            onChange: function (text, value) {
                var tab = [];
                _this.search.ville = value;
                for (var _i = 0, _a = _this.pagedItems; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (i.ville === _this.search.ville || i.categorie === _this.search.categorie) {
                        tab.push(i);
                    }
                }
                if (tab.length > 0) {
                    _this.free = tab;
                    _this.setPage(1, 12);
                }
            }
        });
        $('.categorie').dropdown({
            onChange: function (text, value) {
                var tab = [];
                _this.search.categorie = value;
                for (var _i = 0, _a = _this.pagedItems; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (i.ville === _this.search.ville || i.categorie === _this.search.categorie) {
                        tab.push(i);
                    }
                }
                if (tab.length > 0) {
                    _this.free = tab;
                    _this.setPage(1, 12);
                }
            }
        });
        this.sliders();
        var user = this.service.Freelancers;
        if (user === undefined) {
            this.service.getFreelancer().then(function (f) {
                _this.free = f;
                _this.setPage(1, _this.occurence);
            });
        }
        else {
            this.free = user;
            this.setPage(1, this.occurence);
        }
        this.getVille();
    };
    AllFreelancersComponent.prototype.sliders = function () {
        var rangeSlider = function () {
            var slider = $('.range-slider');
            var range = $('.range-slider__range');
            var value = $('.range-slider__value');
            slider.each(function () {
                value.each(function () {
                    value = $(this).prev().attr('value');
                    $(this).html(value);
                });
                range.on('input', function () {
                    $(this).next(value).html(this.value);
                    $('.range-slider__value').html(this.value);
                });
            });
        };
        rangeSlider();
    };
    AllFreelancersComponent.prototype.getVille = function () {
        var _this = this;
        this.service.getVille().then(function (v) {
            _this.villes = v;
        });
    };
    AllFreelancersComponent.prototype.myalert = function () {
        //console.log('texte ', $('.text').val());
    };
    AllFreelancersComponent.prototype.All = function () {
        var _this = this;
        $('.col-all-free')
            .removeClass('fadeIn')
            .addClass('animated fadeOut');
        setTimeout(function () {
            $('.col-all-free')
                .removeClass('fadeOut')
                .addClass('animated fadeIn');
            _this.pagedItems = _this.free.slice(0, 12);
        }, 1000);
        this.pager = this.pages.getPager(this.free.length, 1, 12);
    };
    AllFreelancersComponent.prototype.byRec = function () {
        var _this = this;
        $('.col-all-free')
            .removeClass('fadeIn')
            .addClass('animated fadeOut');
        setTimeout(function () {
            $('.col-all-free')
                .removeClass('fadeOut')
                .addClass('animated fadeIn');
            _this.pagedItems = _this.free.slice(0, 4);
        }, 1000);
        this.pager = this.pages.getPager(this.pagedItems.length, 1, 12);
    };
    AllFreelancersComponent.prototype.byQualif = function () {
        var _this = this;
        $('.col-all-free')
            .removeClass('fadeIn')
            .addClass('animated fadeOut');
        setTimeout(function () {
            $('.col-all-free')
                .removeClass('fadeOut')
                .addClass('animated fadeIn');
            _this.pagedItems = _this.free.filter(function (f) { return parseInt(f.expsp.length) >= 4; }).slice(0, 12);
        }, 1000);
        this.pager = this.pages.getPager(this.pagedItems.length, 1, 12);
    };
    AllFreelancersComponent.prototype.byExp = function () {
        var _this = this;
        $('.col-all-free')
            .removeClass('fadeIn')
            .addClass('animated fadeOut');
        setTimeout(function () {
            $('.col-all-free')
                .removeClass('fadeOut')
                .addClass('animated fadeIn');
            _this.pagedItems = _this.free.filter(function (f) { return parseInt(f.experience) >= 5; }).slice(0, 12);
            _this.pager = _this.pages.getPager(_this.pagedItems.length, 1, 12);
        }, 1000);
    };
    AllFreelancersComponent.prototype.byBoost = function () {
        var _this = this;
        $('.col-all-free')
            .removeClass('fadeIn')
            .addClass('animated fadeOut');
        setTimeout(function () {
            $('.col-all-free')
                .removeClass('fadeOut')
                .addClass('animated fadeIn');
            _this.pagedItems = _this.free.filter(function (f) { return parseInt(f.evaluation) >= 3; }).slice(0, 12);
        }, 1000);
        this.pager = this.pages.getPager(this.pagedItems.length, 1, 12);
    };
    AllFreelancersComponent.prototype.getStatusText = function (sts, name) {
        if (sts) {
            return {
                status: 'Disponible',
                texte: name + ' a confirmé dans les 7 derniers jour être disponible à temps plein'
            };
        }
        else {
            return {
                status: 'Indisponible',
                texte: name + ' n\'a pas confirmé être disponible'
            };
        }
    };
    AllFreelancersComponent.prototype.popup = function () {
        if (this.pop) {
            $('.myh').popup();
            this.pop = false;
        }
    };
    AllFreelancersComponent.prototype.dimmers = function () {
        if (this.dimmer) {
            $('.special.cards .image').dimmer({
                on: 'hover'
            });
            this.dimmer = false;
        }
    };
    AllFreelancersComponent.prototype.setPage = function (page, d) {
        this.pager = this.pages.getPager(this.free.length, page, d);
        this.pagedItems = this.free.slice(this.pager.startIndex, this.pager.endIndex + 1);
        //console.log('pages items ', this.pagedItems , 'pager ', this.pager);
        this.dimmer = true;
        this.pop = true;
        window.scrollTo(0, 0);
    };
    AllFreelancersComponent.prototype.paginate = function () {
        this.sujet.next(this.pagedItems);
    };
    AllFreelancersComponent.prototype.controlName = function (nom) {
        if (nom.length >= 15) {
            return nom.substr(0, 12) + '...';
        }
        else {
            return nom;
        }
    };
    AllFreelancersComponent.prototype.seen = function (UserID, UserNom) {
        this.route.navigate(['/', UserID, UserNom]);
    };
    AllFreelancersComponent.prototype.getMetier = function (txt) {
        if (txt.length >= 10) {
            txt = txt.substr(0, 8) + '...';
        }
        return txt;
    };
    AllFreelancersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-all-freelancers',
            template: __webpack_require__(/*! ./all-freelancers.component.html */ "./src/app/all-freelancers/all-freelancers.component.html"),
            styles: [__webpack_require__(/*! ./all-freelancers.component.css */ "./src/app/all-freelancers/all-freelancers.component.css")]
        }),
        __metadata("design:paramtypes", [_allprojets_service__WEBPACK_IMPORTED_MODULE_2__["AllprojetsService"], _pages_service__WEBPACK_IMPORTED_MODULE_1__["PagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AllFreelancersComponent);
    return AllFreelancersComponent;
}());



/***/ }),

/***/ "./src/app/allprojets.service.ts":
/*!***************************************!*\
  !*** ./src/app/allprojets.service.ts ***!
  \***************************************/
/*! exports provided: AllprojetsService, InfosUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllprojetsService", function() { return AllprojetsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosUser", function() { return InfosUser; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllprojetsService = /** @class */ (function () {
    function AllprojetsService(http, route) {
        this.http = http;
        this.route = route;
        this.Info = [{
                avatar: null,
                nom: null,
                email: null,
                id: null,
                skill: null,
                specialite: null
            }];
        this.subjet = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subject2 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.infosUser = [{
                avatar: null,
                nom: null,
                email: null,
                id: null,
                skill: null,
                specialite: null,
                percent: null,
                ville: null
            }];
        this.link = 'http://localhost/php-challenge/src/avatars/';
        this.Url = 'http://localhost/php-challenge/projets.php';
        this.Url2 = 'http://localhost/php-challenge/getfre.php';
        this.Url3 = 'http://localhost/php-challenge/getRec.php';
        this.Url4 = 'http://localhost/php-challenge/getFree.php';
        this.Url5 = 'http://localhost/php-challenge/create.php';
        this.Url6 = 'http://localhost/php-challenge/profil1.php';
        this.Url7 = 'http://localhost/php-challenge/login.php';
        this.Url8 = 'http://localhost/php-challenge/skill.php';
        this.Url9 = 'http://localhost/php-challenge/update-avatars.php';
        this.Url10 = 'http://localhost/php-challenge/update-profil.php';
        this.Url11 = 'http://localhost/php-challenge/getPostule.php';
        this.Url12 = 'http://localhost/php-challenge/setDevis.php';
        this.Url13 = 'assets/villes.json';
        this.Url14 = 'http://localhost/php-challenge/postRec1.php';
        this.Url15 = 'http://localhost/php-challenge/postProjet.php';
        this.Url16 = 'http://localhost/php-challenge/getMyProjet.php';
        this.Url17 = 'http://localhost/php-challenge/TerminerProjet.php';
        this.Url18 = 'http://localhost/php-challenge/AbandProjet.php';
        this.Url19 = 'http://localhost/php-challenge/suppProjet.php';
        this.Url20 = 'http://localhost/php-challenge/setNotif.php';
        this.Url21 = 'http://localhost/php-challenge/boot.php';
        this.Url22 = 'http://localhost/php-challenge/vueTuto.php';
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.Blobheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'ContentType': 'false', 'processData': 'false' });
        this.error = false;
    }
    AllprojetsService.prototype.setnotif = function (devis) {
        var _this = this;
        var req = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url20, devis, { headers: _this.header })
                .toPromise()
                .then(function (rep) {
                resolve(rep);
            });
        });
        return req;
    };
    AllprojetsService.prototype.boots = function (idRec, idFree) {
        var _this = this;
        var req = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url21, { idFree: idFree, idRec: idRec }, { headers: _this.header })
                .toPromise()
                .then(function (rep) {
                resolve(rep);
            });
        });
        return req;
    };
    AllprojetsService.prototype.setDevis = function (devis) {
        var _this = this;
        var req = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url12, devis, { headers: _this.header })
                .toPromise()
                .then(function (rep) {
                resolve(rep);
            });
        });
        return req;
    };
    AllprojetsService.prototype.vueTuto = function (data) {
        var _this = this;
        console.log('dataaa ', data);
        var req = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url22, data, { headers: _this.header })
                .toPromise()
                .then(function (rep) {
                resolve(rep);
            });
        });
        return req;
    };
    AllprojetsService.prototype.Terminerproj = function (id, etat) {
        var _this = this;
        var req = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url17, { id: id, etat: etat }, { headers: _this.header })
                .toPromise()
                .then(function (rep) {
                resolve(rep);
            });
        });
        return req;
    };
    AllprojetsService.prototype.suppproj = function (id) {
        var _this = this;
        var req = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url19, { id: id }, { headers: _this.header })
                .toPromise()
                .then(function (rep) {
                resolve(rep);
            });
        });
        return req;
    };
    AllprojetsService.prototype.getMyproj = function (id) {
        var _this = this;
        var req = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url16, { id: id }, { headers: _this.header })
                .toPromise()
                .then(function (rep) {
                resolve(rep);
            });
        });
        return req;
    };
    AllprojetsService.prototype.postRec1 = function (forms) {
        var _this = this;
        var req = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url14, forms, { headers: _this.header })
                .toPromise()
                .then(function (rep) {
                resolve(rep);
            });
        });
        return req;
    };
    AllprojetsService.prototype.saveForm2 = function (profiler) {
        var _this = this;
        var req = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url10, profiler, { headers: _this.header })
                .toPromise()
                .then(function (rep) {
                var lb = rep.percent;
                var ks = JSON.parse(sessionStorage.getItem('user'));
                ks[0].percent = lb;
                sessionStorage.setItem('user', JSON.stringify(ks));
                resolve(rep);
            });
        });
        return req;
    };
    AllprojetsService.prototype.getProjectPostule = function (id) {
        var _this = this;
        var get = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url11, id, { headers: _this.header })
                .toPromise()
                .then(function (rep) {
                resolve(rep);
            });
        });
        return get;
    };
    AllprojetsService.prototype.setLdBar = function () {
        var req = JSON.parse(sessionStorage.getItem('user'));
        var perc = req[0].percent;
        var percent = perc === null ? 0 : perc;
        var head = null;
        var message = null;
        var color = null;
        switch (true) {
            case percent >= 30 && percent < 100:
                head = 'Il te reste des infos à saisir';
                message = 'Si tu veux être visible sur le site, tu dois completer ton profil à 100%';
                color = '#ffff0047';
                break;
            case percent >= 100:
                head = 'Tu es visible sur le site';
                message = 'Ton profil est rempli';
                color = '#cbffa5';
                break;
            default:
                head = 'Tu n\'es pas encore visible';
                message = 'Si tu veux être visible sur le site, tu dois completer ton profil à 100%';
                color = '#f5e4e2';
        }
        return {
            percent: percent,
            head: head,
            message: message,
            color: color
        };
    };
    AllprojetsService.prototype.saveForm1 = function (users) {
        var _this = this;
        var req = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url6, users, { headers: _this.header })
                .toPromise()
                .then(function (rep) {
                //console.log('reponse formulaire 1', rep);
                _this.infosUser[0] = rep;
                resolve(rep);
            });
        });
        return req;
    };
    AllprojetsService.prototype.getCategorie = function () {
        var _this = this;
        var file = new Promise(function (resolve, reject) {
            _this.http.get('assets/categorie.json')
                .toPromise()
                .then(function (res) {
                resolve(res);
            });
        });
        return file;
    };
    AllprojetsService.prototype.getCompetence = function () {
        var _this = this;
        var file = new Promise(function (resolve, reject) {
            _this.http.get('assets/file.json')
                .toPromise()
                .then(function (res) {
                resolve(res);
            });
        });
        return file;
    };
    AllprojetsService.prototype.getKeyword = function () {
        var _this = this;
        var file = new Promise(function (resolve, reject) {
            _this.http.get('assets/keywords.json')
                .toPromise()
                .then(function (res) {
                resolve(res);
            });
        });
        return file;
    };
    AllprojetsService.prototype.searchCompetence = function () {
        var _this = this;
        var file = new Promise(function (resolve, reject) {
            _this.http.get('assets/searchCompetence.json')
                .toPromise()
                .then(function (res) {
                resolve(res);
            });
        });
        return file;
    };
    AllprojetsService.prototype.updateAvatar = function (email, avatars, status) {
        var _this = this;
        var skl = new Promise(function (resolve, rej) {
            _this.http.post(_this.Url9, { email: email, avatar: avatars, status: status }, { headers: _this.header })
                .toPromise()
                .then(function (response) {
                resolve(response);
            });
        });
        return skl;
    };
    AllprojetsService.prototype.skill = function (email) {
        var _this = this;
        var skl = new Promise(function (resolve, rej) {
            _this.http.post(_this.Url8, { email: email }, { headers: _this.header })
                .toPromise()
                .then(function (response) {
                resolve(response);
            });
        });
        return skl;
    };
    AllprojetsService.prototype.login = function (user) {
        var _this = this;
        var users = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url7, user, { headers: _this.header })
                .toPromise()
                .then(function (response) {
                resolve(response);
            }, function (error) {
                reject('une erreur est arrivée' + error);
            });
        });
        return users;
    };
    AllprojetsService.prototype.putInfosUser = function (data) {
        this.infosUser = data;
    };
    AllprojetsService.prototype.getInfosUser = function () {
        this.subjet.next(this.infosUser);
    };
    AllprojetsService.prototype.getProjets = function () {
        var _this = this;
        var rek = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url, { headers: _this.header })
                .toPromise()
                .then(function (rep) {
                _this.Mesprojets = rep;
                resolve(_this.Mesprojets);
            }, function (error) {
                reject('erreur fatale ' + error);
            });
        });
        return rek;
    };
    AllprojetsService.prototype.createUser = function (formulaire) {
        var _this = this;
        var requete = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url5, formulaire, { headers: _this.header })
                .toPromise()
                .then(function (res) {
                //console.log('response', res);
                resolve(res);
            }, function (error) {
                //console.log('erreur', error);
            });
        });
        return requete;
    };
    /* Envoie de l'image de profil format Blob */
    AllprojetsService.prototype.sendBlob = function (data) {
        var _this = this;
        var urlBlob = 'http://localhost/php-challenge/postImage.php';
        var sending = new Promise(function (resolve, reject) {
            _this.http.post(urlBlob, data, { headers: _this.Blobheader })
                .toPromise()
                .then(function (response) {
                _this.blob = response;
                _this.infosUser[0].avatar = _this.link + response.name;
                resolve(_this.blob);
            }, function (error) {
                //console.log('impossible d\'envoyer l\'image', error);
                _this.error = true;
            });
        });
        return sending;
    };
    /* fin */
    /* subscribtion à l'evenement */
    AllprojetsService.prototype.getBlob = function () {
        this.subject2.next(this.blob);
    };
    /* fin */
    /* Subscription 0 lerreur */
    AllprojetsService.prototype.Geterror = function () {
        return this.subjet.next(this.error);
    };
    /* fin */
    AllprojetsService.prototype.getOneProjet = function (id) {
        var projects = JSON.parse(sessionStorage.getItem('projets')) || [];
        var pj = projects.length <= 0 ? undefined : projects;
        var a = typeof (this.Mesprojets);
        if (typeof (pj) === 'undefined' || pj === undefined) {
            this.route.navigate(['/']);
            return;
        }
        else {
            this.Mesprojets = pj;
        }
        var oneProjet = this.Mesprojets.find(function (proj) {
            return proj.id === id;
        });
        return oneProjet;
    };
    AllprojetsService.prototype.getImage = function () {
        var _this = this;
        var q = new Promise(function (resolve, reject) {
            _this.http.get('assets/images.json', { headers: _this.header })
                .toPromise()
                .then(function (data) {
                resolve(data);
            }, function (error) {
                //console.log('impossible de recuperer les images en cache', error);
            });
        });
        return q;
    };
    AllprojetsService.prototype.getDevisFree = function (id) {
        var _this = this;
        var q = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url4, { id: id }, { headers: _this.header })
                .toPromise()
                .then(function (data) {
                _this.devis = data;
                resolve(_this.devis);
            }, function (error) {
                //console.log('une erreur s\'est produit :() ', error);
            });
        });
        this.subjet.next(q);
        return q;
    };
    AllprojetsService.prototype.getVille = function () {
        var _this = this;
        var reqVille = new Promise(function (resolve, reject) {
            _this.http.get(_this.Url13, { headers: _this.header })
                .toPromise()
                .then(function (response) {
                resolve(response);
            }, function (error) {
                reject('impossible de recuperer les villes ' + error);
            });
        });
        return reqVille;
    };
    AllprojetsService.prototype.searchVille = function () {
        var _this = this;
        var reqVille = new Promise(function (resolve, reject) {
            _this.http.get('assets/searchVille.json', { headers: _this.header })
                .toPromise()
                .then(function (response) {
                resolve(response);
            }, function (error) {
                reject('impossible de recuperer les villes ' + error);
            });
        });
        return reqVille;
    };
    AllprojetsService.prototype.getLocal = function () {
        var store = JSON.parse(sessionStorage.getItem('user')) || [];
        if (store.length > 0) {
            this.stores = sessionStorage;
        }
        else {
            this.stores = localStorage;
        }
        return this.stores;
    };
    AllprojetsService.prototype.sendForm2 = function (form2) {
        var _this = this;
        var reqEp = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url15, form2, { headers: _this.header })
                .toPromise()
                .then(function (response) {
                resolve(response);
            }, function (error) {
                reject('il a eu un ptit problème 0 _ o' + error);
            });
        });
        return reqEp;
    };
    AllprojetsService.prototype.getCurrentRec = function (id) {
        var _this = this;
        var reqEp = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url3, { id: id }, { headers: _this.header })
                .toPromise()
                .then(function (response) {
                _this.Recruteur = response;
                resolve(_this.Recruteur);
            }, function (error) {
                // console.log('il a eu un ptit problème 0 _ o', error);
            });
        });
        return reqEp;
    };
    AllprojetsService.prototype.getFreelancer = function () {
        var _this = this;
        var free = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url2, { headers: _this.header })
                .toPromise()
                .then(function (frees) {
                _this.Freelancers = frees;
                // console.log('les gens ', frees);
                resolve(_this.Freelancers);
            }, function (error) {
                reject('impossible de recuperer les gens LoL ' + error);
            });
        });
        return free;
    };
    AllprojetsService.prototype.subcription = function () {
        this.subjet.next(this.Mesprojets);
    };
    AllprojetsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AllprojetsService);
    return AllprojetsService;
}());

var InfosUser = /** @class */ (function () {
    function InfosUser(avatar, email, id, nom, skill, specialite, ville) {
        this.avatar = avatar;
        this.email = email;
        this.id = id;
        this.nom = nom;
        this.skill = skill;
        this.specialite = specialite;
        this.ville = ville;
    }
    return InfosUser;
}());



/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInDownAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInDownAnimation", function() { return slideInDownAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// Component transition animations
var slideInDownAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(100%)'
        }))
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet #o=\"outlet\"></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthService */ "./src/app/AuthService.ts");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allprojets.service */ "./src/app/allprojets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(routes, Auth, service) {
        this.routes = routes;
        this.Auth = Auth;
        this.service = service;
        this.title = 'app';
        this.default = 'http://localhost/php-challenge/myfreelancer/src/avatars/default.png';
        demo.init();
        $(window).on('load', function () {
            demo.spinner.setComplete();
        });
        routes.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                NProgress.start();
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                NProgress.done();
                window.scrollTo(0, 0);
                $('#Tuto').modal('hide');
                $('body').css('overflow', 'auto');
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                NProgress.remove();
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.service.getImage().then((img: any) => {
        //     for (const i of img) {
        //      // console.log('images ', img[i] , ' i ', i);
        //       const image = i.image;
        //       this.cached(image);
        //   }
        // });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _AuthService__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _allprojets_service__WEBPACK_IMPORTED_MODULE_3__["AllprojetsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.service */ "./src/app/pages.service.ts");
/* harmony import */ var _GuardProfil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuardProfil */ "./src/app/GuardProfil.ts");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accueil/accueil.component */ "./src/app/accueil/accueil.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _oneprojet_oneprojet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oneprojet/oneprojet.component */ "./src/app/oneprojet/oneprojet.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _recruteurs_recruteurs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./recruteurs/recruteurs.component */ "./src/app/recruteurs/recruteurs.component.ts");
/* harmony import */ var _assets_services_myservices__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/services/myservices */ "./src/assets/services/myservices.ts");
/* harmony import */ var _entete_entete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./entete/entete.component */ "./src/app/entete/entete.component.ts");
/* harmony import */ var _profil_free_profil_free_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profil-free/profil-free.component */ "./src/app/profil-free/profil-free.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _profil_detail_profil_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profil-detail/profil-detail.component */ "./src/app/profil-detail/profil-detail.component.ts");
/* harmony import */ var _projet_detail_projet_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projet-detail/projet-detail.component */ "./src/app/projet-detail/projet-detail.component.ts");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guard.service */ "./src/app/guard.service.ts");
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AuthService */ "./src/app/AuthService.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profil_user_profil_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./profil-user/profil-user.component */ "./src/app/profil-user/profil-user.component.ts");
/* harmony import */ var primeng_datatable__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/datatable */ "./node_modules/primeng/datatable.js");
/* harmony import */ var primeng_datatable__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_datatable__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _popup_windown_popup_windown_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./popup-windown/popup-windown.component */ "./src/app/popup-windown/popup-windown.component.ts");
/* harmony import */ var _slide_slide_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./slide/slide.component */ "./src/app/slide/slide.component.ts");
/* harmony import */ var _one_freelancer_one_freelancer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./one-freelancer/one-freelancer.component */ "./src/app/one-freelancer/one-freelancer.component.ts");
/* harmony import */ var _modal_devis_modal_devis_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modal-devis/modal-devis.component */ "./src/app/modal-devis/modal-devis.component.ts");
/* harmony import */ var _profil_recruteur_profil_recruteur_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./profil-recruteur/profil-recruteur.component */ "./src/app/profil-recruteur/profil-recruteur.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _all_freelancers_all_freelancers_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./all-freelancers/all-freelancers.component */ "./src/app/all-freelancers/all-freelancers.component.ts");
/* harmony import */ var _condition_condition_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./condition/condition.component */ "./src/app/condition/condition.component.ts");
/* harmony import */ var _recherche_recherche_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./recherche/recherche.component */ "./src/app/recherche/recherche.component.ts");
/* harmony import */ var _apropos_apropos_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./apropos/apropos.component */ "./src/app/apropos/apropos.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var appRoute = [
    { path: ':id/:titre/:key', component: _oneprojet_oneprojet_component__WEBPACK_IMPORTED_MODULE_11__["OneprojetComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], canActivate: [_guard_service__WEBPACK_IMPORTED_MODULE_20__["GuardService"]] },
    { path: 'signin', canActivate: [_guard_service__WEBPACK_IMPORTED_MODULE_20__["GuardService"]], component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"] },
    { path: ':id/:nom', component: _one_freelancer_one_freelancer_component__WEBPACK_IMPORTED_MODULE_28__["OneFreelancerComponent"] },
    { path: 'profilRec', component: _profil_recruteur_profil_recruteur_component__WEBPACK_IMPORTED_MODULE_30__["ProfilRecruteurComponent"] },
    { path: 'tous les freelancers', component: _all_freelancers_all_freelancers_component__WEBPACK_IMPORTED_MODULE_32__["AllFreelancersComponent"] },
    { path: 'condition d\'utilisation', component: _condition_condition_component__WEBPACK_IMPORTED_MODULE_33__["ConditionComponent"] },
    { path: 'recherche/query/:title/:town', component: _recherche_recherche_component__WEBPACK_IMPORTED_MODULE_34__["RechercheComponent"] },
    { path: 'a propos', component: _apropos_apropos_component__WEBPACK_IMPORTED_MODULE_35__["AproposComponent"] },
    { path: 'profilFree', component: _profil_free_profil_free_component__WEBPACK_IMPORTED_MODULE_16__["ProfilFreeComponent"], canActivate: [_GuardProfil__WEBPACK_IMPORTED_MODULE_1__["GuardProfil"]], children: [
            {
                path: 'details compte', component: _details_details_component__WEBPACK_IMPORTED_MODULE_17__["DetailsComponent"], outlet: 'aux'
            },
            {
                path: 'details du profil', component: _profil_detail_profil_detail_component__WEBPACK_IMPORTED_MODULE_18__["ProfilDetailComponent"], outlet: 'aux'
            },
            {
                path: 'details du projet', component: _projet_detail_projet_detail_component__WEBPACK_IMPORTED_MODULE_19__["ProjetDetailComponent"], outlet: 'aux'
            }
        ]
    },
    { path: '', component: _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_9__["AccueilComponent"] },
    { path: 'noFound', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"] },
    { path: '**', redirectTo: 'noFound', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_9__["AccueilComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
                _oneprojet_oneprojet_component__WEBPACK_IMPORTED_MODULE_11__["OneprojetComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"],
                _recruteurs_recruteurs_component__WEBPACK_IMPORTED_MODULE_13__["RecruteursComponent"],
                _entete_entete_component__WEBPACK_IMPORTED_MODULE_15__["EnteteComponent"],
                _profil_free_profil_free_component__WEBPACK_IMPORTED_MODULE_16__["ProfilFreeComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_17__["DetailsComponent"],
                _profil_detail_profil_detail_component__WEBPACK_IMPORTED_MODULE_18__["ProfilDetailComponent"],
                _projet_detail_projet_detail_component__WEBPACK_IMPORTED_MODULE_19__["ProjetDetailComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
                _profil_user_profil_user_component__WEBPACK_IMPORTED_MODULE_24__["ProfilUserComponent"],
                _popup_windown_popup_windown_component__WEBPACK_IMPORTED_MODULE_26__["PopupWindownComponent"],
                _slide_slide_component__WEBPACK_IMPORTED_MODULE_27__["SlideComponent"],
                _one_freelancer_one_freelancer_component__WEBPACK_IMPORTED_MODULE_28__["OneFreelancerComponent"],
                _modal_devis_modal_devis_component__WEBPACK_IMPORTED_MODULE_29__["ModalDevisComponent"],
                _profil_recruteur_profil_recruteur_component__WEBPACK_IMPORTED_MODULE_30__["ProfilRecruteurComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_31__["FooterComponent"],
                _all_freelancers_all_freelancers_component__WEBPACK_IMPORTED_MODULE_32__["AllFreelancersComponent"],
                _condition_condition_component__WEBPACK_IMPORTED_MODULE_33__["ConditionComponent"],
                _recherche_recherche_component__WEBPACK_IMPORTED_MODULE_34__["RechercheComponent"],
                _apropos_apropos_component__WEBPACK_IMPORTED_MODULE_35__["AproposComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_36__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                /*  RouterModule.forRoot(appRoute,
                   { enableTracing: true }), */
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoute, { useHash: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                primeng_datatable__WEBPACK_IMPORTED_MODULE_25__["DataTableModule"]
            ],
            providers: [_allprojets_service__WEBPACK_IMPORTED_MODULE_2__["AllprojetsService"], _assets_services_myservices__WEBPACK_IMPORTED_MODULE_14__["Myservices"], _guard_service__WEBPACK_IMPORTED_MODULE_20__["GuardService"], _AuthService__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _GuardProfil__WEBPACK_IMPORTED_MODULE_1__["GuardProfil"], _pages_service__WEBPACK_IMPORTED_MODULE_0__["PagerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/apropos/apropos.component.css":
/*!***********************************************!*\
  !*** ./src/app/apropos/apropos.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-off {\r\n    background: #666;\r\n    padding-bottom: 11px;\r\n}\r\n\r\n.segment p {\r\n    line-height: 27px !important;\r\n    font-size: 11pt !important;\r\n}"

/***/ }),

/***/ "./src/app/apropos/apropos.component.html":
/*!************************************************!*\
  !*** ./src/app/apropos/apropos.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-off\">\n    <app-entete></app-entete>\n</div>\n<app-slide></app-slide>\n\n<section style=\"padding: 5ex\">\n    <h1 style=\"font-family: roboto condensed\">A propos</h1>\n    <div class=\"ui vertical segment\">\n        <h3>Qu'est-ce-que Freelance Gabon ?</h3>\n        <p>\n            <b>Freelance Gabon </b> est une plateforme qui permet: <br>\n            <b>premièrement</b> aux jeunes gabonais qui ont des compétences dans diversses matières à proposer leurs services à n'importe qui en fixant leur propre tarif (en Fcfa par heure ou par jour). Par exemple si vous êtes expert comptable ou vous\n            donnez des cours de musique, vous pouvez offrir vos services à quelqu'un qui va vous payer 5000 par heure ou par jour. <br>\n\n            <b>Deuxièmement</b> Freelance Gabon permet aux recruteurs qui ont des projets à réaliser au plus bref delai de venir trouver le bon profil et une main d'oeuvre pas chère sur la plateforme. Par exemple, vous voulez réaliser une App Android\n            ou Ios à un prix raisonnable, Freelance Gabon est là pour vous.\n        </p>\n    </div>\n    <div class=\"ui vertical segment\">\n        <h3>Qui s'occupe du site</h3>\n        <p>\n            Je m'occupe tout seule du site pour le moment. Vous pouvez consulter mon portofolio à l'adresse ci joint <i class=\"fas fa-hand-point-right\" style=\"font-size: 18px;\"></i> <a href=\"http://mitashi-otha.com\" target=\"blank\">ici</a>.\n        </p>\n    </div>\n    <div class=\"ui vertical segment\">\n        <h3>Comment est réalisé le site ?</h3>\n        <p>\n            Le site est developpé entierement avec <a href=\"https://angular.io/\" target=\"blank\"><b>Angular 6</b></a>. Il est à cette date en version <b>Beta</b>.\n        </p>\n    </div>\n    <div class=\"ui vertical segment\">\n        <h3>Qui peut s'inscrire sur le site</h3>\n        <p>\n            Tout le monde qui a une competence à faire valoir.\n        </p>\n    </div>\n</section>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/apropos/apropos.component.ts":
/*!**********************************************!*\
  !*** ./src/app/apropos/apropos.component.ts ***!
  \**********************************************/
/*! exports provided: AproposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AproposComponent", function() { return AproposComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AproposComponent = /** @class */ (function () {
    function AproposComponent() {
    }
    AproposComponent.prototype.ngOnInit = function () {
        jQuery(window).trigger('resize').trigger('scroll');
    };
    AproposComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apropos',
            template: __webpack_require__(/*! ./apropos.component.html */ "./src/app/apropos/apropos.component.html"),
            styles: [__webpack_require__(/*! ./apropos.component.css */ "./src/app/apropos/apropos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AproposComponent);
    return AproposComponent;
}());



/***/ }),

/***/ "./src/app/condition/condition.component.css":
/*!***************************************************!*\
  !*** ./src/app/condition/condition.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parallax-windows2 {\r\n    min-height: 100%;\r\n    background: transparent;\r\n}\r\n.col-off {\r\n    background: #666;\r\n    padding-bottom: 11px;\r\n}\r\n.item {\r\n    margin-top: 3ex;\r\n    font-size: 12pt !important;\r\n    line-height: 2.142857em !important;\r\n}"

/***/ }),

/***/ "./src/app/condition/condition.component.html":
/*!****************************************************!*\
  !*** ./src/app/condition/condition.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-off\">\n  <app-entete></app-entete>\n</div>\n<app-slide></app-slide>\n<section style=\"margin-top: 10ex\">\n  <div class=\"row\">\n    <div class=\"large-12 column\">\n        <div class=\"ui icon message\">\n            <i class=\"fas fa-user-lock\" style=\"font-size: 48px;\"></i>\n            <div class=\"content\" style=\"margin-left: 3ex\">\n              <div class=\"header\">\n                  Conditions d’utilisation pour les freelancers et recructeurs\n              </div>\n              <p>Lire attentivement les règles en dessous.</p>\n            </div>\n          </div>\n    </div>\n    <div class=\"large-12 column\" style=\"margin-top: 5ex\">\n        <div style=\"font-size: 13pt;line-height: 27px;background: #66666669;color: #fff;padding: 14px;\">\n            <p style=\"font-size: 13pt;line-height: 27px;\">\n                Les présentes Conditions Générales d’Utilisation déterminent les règles d’inscription et accès au site  <b>Freelance Gabon</b> . En naviguant sur ce site, vous reconnaissez, en votre qualité d’utilisateur, en connaître les termes, les accepter sans réserve et vous y conformer.\n            </p>\n        </div>\n        <div class=\"ui padded segment\" style=\"margin-top: 0;\">\n            <div class=\"ui list\">\n                <div class=\"item\">\n                  > Lors de l’inscription du compte freelancer , ce dernier ne pourra être actif et visible sur la plateforme du site qu’ après le remplissage des champs  du profil ( titre professionnel , prix/heure , competence , categories , … ) .cela aidera le freelancer a avoir un profil intéressant et presentable pour avoir plus de chance d être sélectionné par les recruteurs\n                </div>\n                <div class=\"item\">\n                 > Lors de l’inscription , mettez un email que vous utilisez souvent car toute communication passe par Email . Cela concerne les recruteurs et les freelancers\n                </div>\n                <div class=\"item\">\n                 > Duran l’envoi du devis par le freelancer , ce dernier dois completer les  4 champs du devis pour qu’il soit  dans les normes.\n                </div>\n                <div class=\"item\">\n                 > Lors de l’inscription du compte recruteur , ce dernier devrais completer les details se son projet (titre projet , budget , competences ,catégorie , … ) pour passer a l’étape validation qui sera achevé par <b>Freelance GA</b> .\n                </div>\n                <div class=\"item\">\n                  > Il est préférable de poster votre logo ou photo sur votre profil  ( freelancer ou recruteur ) pour donner plus de poids a votre profil.\n                </div>\n                <div class=\"item\">\n                 > La communication et la rencontre entre le Freelancer et le recruteur ne concerne nullement <b>Freelance GA</b>. Nous nous desengageons de toute activité en dehors de la plateforme.\n                </div>\n                <div class=\"item\">\n                  > Vous n’avez pas le droit de mettre vos  info contacts ( tél , email , site ,… ) sur votre profil, messages ou commentaires, cela concerne les recruteurs et freelancers. Tout compte suspect sera suspendu ..\n                </div>\n                <div class=\"item\">\n                  > Les freelances n’ont pas le droit de publier leur profile  et services en postant un projet. Dans ce cas le compte Freelancer sera suspendu.\n                </div>\n                <div class=\"item\">\n                 > Tout profil ( freelancer ou recruteur ) qui touche au sujet sexuel, rencontre amoureuse, secte religieuse sera supprimé.\n                </div>\n              </div>\n          </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/condition/condition.component.ts":
/*!**************************************************!*\
  !*** ./src/app/condition/condition.component.ts ***!
  \**************************************************/
/*! exports provided: ConditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionComponent", function() { return ConditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConditionComponent = /** @class */ (function () {
    function ConditionComponent() {
    }
    ConditionComponent.prototype.ngOnInit = function () {
        jQuery(window).trigger('resize').trigger('scroll');
    };
    ConditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-condition',
            template: __webpack_require__(/*! ./condition.component.html */ "./src/app/condition/condition.component.html"),
            styles: [__webpack_require__(/*! ./condition.component.css */ "./src/app/condition/condition.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConditionComponent);
    return ConditionComponent;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageCrop {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 99;\r\n    background: #00000031\r\n}\r\n\r\n.xx {\r\n    display: none;\r\n}\r\n\r\n.ui.form >.fields:first-of-type {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    width: 100%;\r\n}\r\n\r\n#setPhoto {\r\n    margin: auto !important;\r\n    width: 300px;\r\n    height: 300px;\r\n    background: #fff0;\r\n    position: absolute;\r\n}\r\n\r\n.ui.dimmer {\r\n    background-color: rgba(0, 0, 0, 0.43) !important;\r\n}\r\n\r\n.cropper-container {\r\n    width: auto !important\r\n}\r\n\r\n.cropper-modal {\r\n    background-color: #0000 !important;\r\n}"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n<div class=\"succes--\">\n    <div class=\"ui positive message\">\n        <i class=\"close icon\"></i>\n        <div class=\"header\"> {{headInfos}} </div>\n        <p> {{footerInfos}} </p>\n    </div>\n</div>\n\n<div class=\"row\" style=\"margin:0\">\n    <div class=\"large-4 column col-info-warn\">\n        <!-- profil user component -->\n        <app-profil-user  [message]=\"message\" [head]=\"head\" [color]=\"color\"></app-profil-user>\n    </div>\n    <div class=\"large-8 column\">\n        <div class=\"ui yellow message\" style=\"margin-top: 14px;\" *ngIf=\"emptyville\"> <i class=\"info circle icon\"></i> Attention! N'oublis pas d'ajouter ta ville en dessous du formulaire. Ta ville est obligatoire pour être visible sur le site.</div>\n        <form [formGroup]=\"myfrom\" (ngSubmit)=\"savedcompte()\">\n            <div class=\"ui form\" style=\"line-height:5ex\">\n                <div class=\"fields\">\n                    <div class=\"field\">\n                        <label>Ton nom</label>\n                        <input type=\"text\" placeholder=\"Ton nom\" [value]=\"noms\" formControlName=\"nom\">\n                    </div>\n                    <div class=\"field\">\n                        <label>Ta ville</label>\n                        <select class=\"ui fluid dropdown\" formControlName=\"ville\">\n                                <option value=\"\">Sélectionner une ville</option>\n                            <option *ngFor=\"let v of villes\" [value]=\"v.Ville\"> {{v.Ville}} </option>\n                        </select>\n                    </div>\n                    <div class=\"field\" [ngClass]=\"{'error': wrong}\">\n                        <label>Ton email</label>\n                        <input type=\"text\" placeholder=\"Donnes ton email\" [value]=\"emails\" formControlName=\"email\">\n                        <div *ngIf=\"wrong\" class=\"ui pointing red basic label\"> Cet email existe dèjà </div>\n                    </div>\n                    <input type=\"hidden\" formControlName=\"photo\">\n                </div>\n                <button class=\"ui blue button\" [disabled]=\"myfrom.invalid || BtnDisabled\">Enregistrer les changements</button>\n            </div>\n        </form>\n    </div>\n</div>\n<!-- popup image -->\n<app-popup-windown></app-popup-windown>\n<!-- fin -->\n\n</section>\n<!-- fenetre modale -->\n<div class=\"ui modal\" id=\"modal\">\n    <i class=\"close icon\"></i>\n    <div class=\"header\">\n        {{variable}}\n    </div>\n    <div class=\"actions\">\n        <div class=\"ui black deny button\">\n            Non, je veux changer\n        </div>\n        <div class=\"ui positive right labeled icon button garder setName\">\n            Oui, je garde\n            <i class=\"checkmark icon\"></i>\n        </div>\n    </div>\n</div>\n<!-- fin -->"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent, Response */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profil_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profil.model */ "./src/app/profil.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(allprojet, zone, fb, router) {
        this.allprojet = allprojet;
        this.zone = zone;
        this.fb = fb;
        this.router = router;
        this.ville = 'Inconnu';
        this.globals = this;
        this.wrong = false;
        this.buildForm();
    }
    DetailsComponent.prototype.buildForm = function () {
        this.myfrom = this.fb.group({
            nom: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)],
            ville: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: [this.emails, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            photo: [null]
        });
    };
    DetailsComponent.prototype.savedcompte = function () {
        var _this = this;
        var form1 = this.myfrom.value;
        //console.log('forrrme ', form1);
        if (form1.email === null && form1.nom === null) {
            this.variable = 'Vous n\'avez pas changez votre nom et votre email, voulez-vous les garder ?';
            $('#modal').modal('show');
            var dimmer = $('.ui.dimmer').is(':hidden') ? true : false;
            $('.setName').click(function () {
                var getName = JSON.parse(_this.allprojet.getLocal().getItem('user'));
                var names = getName[0].userName;
                var email = getName[0].email;
                _this.myfrom.get('nom').setValue(names);
                _this.myfrom.get('email').setValue(email);
                form1 = _this.myfrom.value;
                _this.validForm1(form1);
            });
        }
        else if (form1.nom === null && form1.email !== null) {
            $('#modal').modal('show');
            $('.ui.modal').modal('show');
            this.variable = 'Vous n\'avez pas changez votre nom, voulez-vous le garder ?';
            $('.setName').click(function () {
                var getName = JSON.parse(_this.allprojet.getLocal().getItem('user'));
                var names = getName[0].userName;
                _this.myfrom.get('nom').setValue(names);
                form1 = _this.myfrom.value;
                _this.validForm1(form1);
            });
        }
        else if (form1.email === null) {
            this.variable = 'Vous n\'avez pas changez votre email, voulez-vous le garder ?';
            $('#modal').modal('show');
            $('.setName').click(function () {
                var getName = JSON.parse(_this.allprojet.getLocal().getItem('user'));
                var email = getName[0].email;
                _this.myfrom.get('email').setValue(email);
                form1 = _this.myfrom.value;
                _this.validForm1(form1);
            });
        }
        else {
            this.validForm1(form1);
        }
    };
    DetailsComponent.prototype.validForm1 = function (form1) {
        var _this = this;
        this.BtnDisabled = true;
        var get = JSON.parse(this.allprojet.getLocal().getItem('user'));
        var getPhoto = get[0].avatar;
        var last_email = get[0].email;
        var formProfil = new _profil_model__WEBPACK_IMPORTED_MODULE_4__["Profil"](form1.nom, form1.email, form1.ville, getPhoto, last_email);
        this.allprojet.saveForm1(formProfil).then(function (res) {
            if (res.rep === false) {
                _this.BtnDisabled = false;
                _this.wrong = true;
            }
            else {
                _this.BtnDisabled = false;
                _this.headInfos = 'Vos changements ont été effectué avec succès !';
                _this.footerInfos = 'Vous avez changé les détails de votre compte !';
                var maj = JSON.parse(_this.allprojet.getLocal().getItem('user'));
                var perc = maj[0].percent = res.percent;
                _this.allprojet.getLocal().setItem('user', JSON.stringify(maj));
                var req = _this.allprojet.setLdBar();
                var t = req.percent;
                _this.head = req.head;
                _this.message = req.message;
                _this.color = req.color;
                $('#bar').progress({
                    percent: t
                });
                $.amaran({
                    'message': 'Tu as modifié tes infos',
                    'position': 'bottom right',
                    'duration': 10000
                });
                _this.Setinput();
                _this.wrong = false;
                var str = JSON.parse(_this.allprojet.getLocal().getItem('user'));
                str[0].email = form1.email;
                str[0].userName = form1.nom;
                str[0].ville = form1.ville;
                _this.allprojet.getLocal().setItem('user', JSON.stringify(str));
                $('.succes--').fadeIn().fadeOut(10000);
                $('.prf').click();
            }
        });
    };
    DetailsComponent.prototype.Setinput = function () {
        var inf = this.allprojet.infosUser;
        this.noms = inf[0].nom;
        this.avatars = inf[0].avatar;
        this.emails = inf[0].email;
        this.emptyville = inf[0].ville ? false : true;
        console.log('ville ', inf[0].ville);
    };
    DetailsComponent.prototype.ngOnInit = function () {
        this.Setinput();
        $('.message .close')
            .on('click', function () {
            $(this)
                .closest('.message')
                .transition('fade');
        });
        $('.fluid.dropdown').dropdown();
        $('.btn-change-photo').on('click', function () {
            $('.photo').click();
        });
        this.getVille();
    };
    DetailsComponent.prototype.getVille = function () {
        var _this = this;
        this.allprojet.getVille().then(function (v) {
            _this.villes = v;
        });
    };
    DetailsComponent.prototype.subVal = function (text) {
        var val = text.substring(0, 4);
        return val;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsComponent.prototype, "t", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsComponent.prototype, "head", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsComponent.prototype, "message", void 0);
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_allprojets_service__WEBPACK_IMPORTED_MODULE_1__["AllprojetsService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());

var Response = /** @class */ (function () {
    function Response(rep) {
        this.rep = rep;
    }
    return Response;
}());



/***/ }),

/***/ "./src/app/entete/entete.component.css":
/*!*********************************************!*\
  !*** ./src/app/entete/entete.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 68px;\r\n    width: 300px;\r\n    background: deepskyblue;\r\n    color: #fff;\r\n    padding-bottom: 1ex\r\n}\r\n\r\n.popup p {\r\n    padding: 3ex;\r\n    font-size: 11pt;\r\n    padding-bottom: 0px\r\n}\r\n\r\n.styleUser {\r\n    top: 1ex;\r\n}\r\n\r\n.hamburger {\r\n    float: right;\r\n    display: none;\r\n    margin-right: 3ex;\r\n}\r\n\r\n.hamburger-inner,\r\n.hamburger-inner::before,\r\n.hamburger-inner::after {\r\n    background-color: #fff\r\n}\r\n\r\n.popup p:before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: -10px;\r\n    right: 50px;\r\n    width: 0;\r\n    height: 0;\r\n    border-bottom: 10px solid deepskyblue;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n}\r\n\r\n.ui.mini.images .image,\r\n.ui.mini.images img,\r\n.ui.mini.images svg,\r\n.ui.mini.image {\r\n    width: 35px !important;\r\n    height: 35px !important;\r\n}\r\n\r\n*:focus {\r\n    outline: none !important;\r\n    border: 0 !important;\r\n}\r\n\r\n.nav-top-left {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/entete/entete.component.html":
/*!**********************************************!*\
  !*** ./src/app/entete/entete.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: relative;\">\n    <div class=\"hamburger hamburger--spin js-hamburger h3 nav-mobil js-left\" tabindex=\"0\" aria-label=\"Menu\" role=\"button\" aria-controls=\"navigation\" href=\"#left\" data-button-options='{\"wrapText\":false}'>\n        <div class=\"hamburger-box\">\n            <div class=\"hamburger-inner\"></div>\n        </div>\n    </div>\n    <div id=\"tete\">\n        <div routerLink=\"/\" style=\"cursor: pointer;\">\n            <svg _ngcontent-c2=\"\" xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"Calque_1\" style=\"enable-background:new 0 0 115 311;width: 165px;height: 54px;\" version=\"1.1\" viewBox=\"-100 100 1254 55\" x=\"100px\" xmlns=\"http://www.w3.org/2000/svg\"\n                y=\"100px\"><path _ngcontent-c2=\"\" class=\"st0\" d=\"M326,311H94c-6.6,0-12-5.4-12-12V49c0-6.6,5.4-12,12-12h232c6.6,0,12,5.4,12,12v250\n    C338,305.6,332.6,311,326,311z\" id=\"XMLID_4_\"></path><path _ngcontent-c2=\"\" class=\"st1\" d=\"M284,292H52c-6.6,0-12-5.4-12-12V30c0-6.6,5.4-12,12-12h232c6.6,0,12,5.4,12,12v250\n    C296,286.6,290.6,292,284,292z\" id=\"XMLID_3_\"></path><path _ngcontent-c2=\"\" class=\"st2\" d=\"M244,274H12c-6.6,0-12-5.4-12-12V12C0,5.4,5.4,0,12,0h232c6.6,0,12,5.4,12,12v250\n    C256,268.6,250.6,274,244,274z\" id=\"XMLID_1_\"></path><text _ngcontent-c2=\"\" class=\"st3 st4\" id=\"XMLID_43_\" transform=\"matrix(1 0 0 1 351 224)\">freelance GA</text></svg>\n        </div>\n        <div class=\"nav-top-left\">\n            <ul>\n                <li routerLink=\"/\">\n                    Accueil\n                </li>\n                <li class=\"scrollFree\">\n                    Freelancers\n                </li>\n                <li class=\"scrollProject\">\n                    Tous les projets\n                </li>\n            </ul>\n        </div>\n        <div class=\"nav-top-right\" [ngClass]=\"{'styleUser': Auth}\" style=\"cursor: pointer;\">\n            <ul>\n                <li class=\"propos\">\n                    A propos\n                </li>\n                <li *ngIf='!Auth' routerLink=\"condition d'utilisation\">\n                    Condition d'utilisation\n                </li>\n                <li *ngIf='Auth'>\n                    <div class=\"ui horizontal list\" style=\"cursor: pointer;\" (click)=\"slideProfil()\">\n                        <div class=\"item\">\n                            <img class=\"ui mini circular image\" src=\"{{avatar}}\">\n                            <div class=\"content\">\n                                <div class=\"ui sub header\" style=\"color: #fff\"> {{controlName(userName)}}</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"popup\" *ngIf=\"tuto\">\n                        <p>\n                            Clic sur cette image pour afficher ton menus\n                        </p>\n                        <div style=\"text-align: center\">\n                            <button class=\"mini ui button\" (click)=\"changeSkill()\"> Ne plus me rappler </button>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<aside class=\".js-offcanvas\" id=\"left\" role=\"complementary\">\n\n</aside>\n<div class=\"ui modal\" id=\"condition\">\n    <i class=\"close icon\"></i>\n    <div class=\"header\">\n        Profile Picture\n    </div>\n    <div class=\"image content\">\n        <div class=\"ui medium image\">\n            <img src=\"/images/avatar/large/chris.jpg\">\n        </div>\n        <div class=\"description\">\n            <div class=\"ui header\">We've auto-chosen a profile image for you.</div>\n            <p>We've grabbed the following image from the <a href=\"https://www.gravatar.com\" target=\"_blank\">gravatar</a> image associated with your registered e-mail address.</p>\n            <p>Is it okay to use this photo?</p>\n        </div>\n    </div>\n    <div class=\"actions\">\n        <div class=\"ui black deny button\">\n            Nope\n        </div>\n        <div class=\"ui positive right labeled icon button\">\n            Yep, that's me\n            <i class=\"checkmark icon\"></i>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/entete/entete.component.ts":
/*!********************************************!*\
  !*** ./src/app/entete/entete.component.ts ***!
  \********************************************/
/*! exports provided: EnteteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnteteComponent", function() { return EnteteComponent; });
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AuthService */ "./src/app/AuthService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnteteComponent = /** @class */ (function () {
    function EnteteComponent(allprjet, Auths, route) {
        this.allprjet = allprjet;
        this.Auths = Auths;
        this.route = route;
        this.avatar = 'default.png';
        this.tuto = false;
        this.link = 'http://localhost/php-challenge/src/avatars/';
    }
    EnteteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        var header = $('#tete');
        header.before(header.clone().addClass('clone'));
        $(window).scroll(function () {
            var scroll = $(this).scrollTop();
            if (scroll > 100) {
                $('.clone').slideDown();
            }
            else {
                $('.clone').slideUp();
            }
        });
        $('.hamburger').on('click', function () {
            $(this).toggleClass('is-active');
            if ($(this).hasClass('is-active')) {
                $('body').css('overflow', 'hidden');
            }
        });
        $('body').on('click', function () {
            var arr = $('.hamburger').attr('aria-expanded');
            if (arr === 'false') {
                $('body').css('overflow', 'scroll');
            }
        });
        $('.propos').on('click', function () {
            _this.route.navigate(['a propos']);
        });
        $('.scrollProject').on('click', function () {
            _this.route.navigate(['/']);
            var hauteur = $('.viewProject').offset().top;
            $('html,body').animate({ scrollTop: hauteur }, 1000);
        });
        $('.scrollFree').click(function () {
            _this.route.navigate(['/']);
            var hauteur = $('.scrollUsers').offset().top;
            $('html,body').animate({ scrollTop: hauteur }, 1000);
        });
    };
    EnteteComponent.prototype.regleOpen = function () {
        $('#condition').modal('show');
    };
    EnteteComponent.prototype.controlName = function (nom) {
        if (nom.length >= 15) {
            return nom.substr(0, 12) + '...';
        }
        else {
            return nom;
        }
    };
    EnteteComponent.prototype.getUser = function () {
        var _this = this;
        var use = this.Auths.getUser();
        //console.log('usssseee ', use);
        if (use !== false) {
            this.avatar = use[0].avatar;
            this.userName = use[0].nom;
            this.specialite = use[0].specialite;
            this.email = use[0].email;
            var skill = use[0].skill;
            if (skill === null) {
                setTimeout(function () {
                    _this.tuto = true;
                }, 3000);
            }
        }
        this.listenAuth();
    };
    EnteteComponent.prototype.listenAuth = function () {
        var _this = this;
        this.Auths.sujet.subscribe(function (rep) {
            _this.Auth = rep;
        });
        this.Auths.getAuth();
    };
    EnteteComponent.prototype.changeSkill = function () {
        this.tuto = false;
        var js = JSON.parse(this.allprjet.getLocal().getItem('user'));
        js[0].skill = true;
        var email = js[0].email;
        this.allprjet.getLocal().setItem('user', JSON.stringify(js));
        this.allprjet.skill(email).then(function (res) {
            //console.log('etat de skill ', res);
        });
    };
    EnteteComponent.prototype.slideProfil = function () {
        $('.window-opacity').fadeIn();
        $('.profil-slide').css({ 'right': 0 });
        $('body').toggleClass('scrollToggle');
    };
    EnteteComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], EnteteComponent.prototype, "avatar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], EnteteComponent.prototype, "userName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], EnteteComponent.prototype, "Auth", void 0);
    EnteteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entete',
            template: __webpack_require__(/*! ./entete.component.html */ "./src/app/entete/entete.component.html"),
            styles: [__webpack_require__(/*! ./entete.component.css */ "./src/app/entete/entete.component.css")]
        }),
        __metadata("design:paramtypes", [_allprojets_service__WEBPACK_IMPORTED_MODULE_0__["AllprojetsService"], _AuthService__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EnteteComponent);
    return EnteteComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            console.log('pipe ', it);
            return it.titre.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".xvx a {\r\n    display: block;\r\n    float: left;\r\n    font-size: 13px;\r\n    margin: 0 7px 7px 0 !important;\r\n}\r\n\r\n.footer {\r\n    background-image: linear-gradient(60deg, #061c2e 0, #041625 50%, #02121f 50%, #082033 100%);\r\n}\r\n\r\n.column ul {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\n.form input {\r\n    width: 60% !important;\r\n}\r\n\r\n.form p,\r\nlabel {\r\n    color: #fff\r\n}\r\n\r\n.column h3 {\r\n    color: #fff\r\n}\r\n\r\n.column ul li {\r\n    color: rgba(158, 158, 158, 0.7098039215686275);\r\n    padding-left: 0;\r\n    line-height: 42px;\r\n    font-size: 11pt;\r\n}\r\n\r\n.column ul li:hover {\r\n    color: #fff !important;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"row\">\n        <div class=\"large-3 column\">\n            <h3>Liens</h3>\n            <ul>\n                <li>A propos de Freelance GA</li>\n                <li>Me connecter</li>\n                <li>Voir Tous les Freelancers</li>\n                <li>Voir Tous les Projets</li>\n            </ul>\n        </div>\n        <div class=\"large-3 column\">\n            <h3>Populaire</h3>\n            <ul>\n                <li>Developpeur Android /Ios</li>\n                <li>Data scientist</li>\n                <li>Marketing Digital</li>\n                <li>Infographistes</li>\n                <li>Agent de communication</li>\n                <li>Redacteur Web</li>\n                <li>Chef de projet digital</li>\n            </ul>\n        </div>\n        <div class=\"large-3 column\">\n            <h3>Tags</h3>\n            <div class=\"row xvx\">\n                <a href=\"#\" class=\"ui grey label appmobile\">Graphiste</a>\n                <a href=\"#\" class=\"ui grey label appmobile\">Web Designer</a>\n                <a href=\"#\" class=\"ui grey label appmobile\">Developpeur java</a>\n                <a href=\"#\" class=\"ui grey label appmobile\">Photographe</a>\n                <a href=\"#\" class=\"ui grey label\">Consultant SEO</a>\n                <a href=\"#\" class=\"ui grey label appmobile\">Developpeur React</a>\n                <a href=\"#\" class=\"ui grey label appmobile\"> Developpeur WordPress </a>\n                <a href=\"#\" class=\"ui grey label appmobile\"> Traducteur </a>\n                <a href=\"#\" class=\"ui grey label appmobile\">Chef de projet Digital</a>\n                <a href=\"#\" class=\"ui grey label webs\">Réalisateur</a>\n                <a href=\"#\" class=\"ui grey label webs\">Creation de site internet</a>\n                <a href=\"#\" class=\"ui grey label\">Start up</a>\n                <a href=\"#\" class=\"ui grey label\">Opensource</a>\n                <a href=\"#\" class=\"ui grey label\">Responsive</a>\n                <a href=\"#\" class=\"ui grey label\">Qualité</a>\n            </div>\n        </div>\n        <div class=\"large-3 column\">\n            <h3>New Letter</h3>\n            <p style=\"color: #767676;\">Restez informé des nouveatés du site Web</p>\n            <div style=\"display: grid;margin-top: 3ex\">\n                <form class=\"newletter\">\n                    <div class=\"ui form\">\n                        <div class=\"fields\" style=\"display: grid;\">\n                            <div class=\"field\">\n                                <label style=\"color: #767676;\">Email</label>\n                                <input id=\"newemail\" type=\"text\" placeholder=\"Votre email\" name=\"email\">\n                            </div>\n                            <br>\n                            <div class=\"field\">\n                                <label style=\"color: #767676;\">Combien font 10 + 8 ?</label>\n                                <input id=\"reponse\" type=\"text\" placeholder=\"Votre réponse\" name=\"reponse\">\n                            </div>\n                        </div>\n                        <button class=\"positive ui button\" style=\"background-color: #3de426;\">Je m'inscris</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/guard.service.ts":
/*!**********************************!*\
  !*** ./src/app/guard.service.ts ***!
  \**********************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthService */ "./src/app/AuthService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuardService = /** @class */ (function () {
    function GuardService(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    GuardService.prototype.ngOnInit = function () {
    };
    GuardService.prototype.canActivate = function (route, state) {
        if (this.auth.Auth) {
            this.route.navigate(['/']);
            NProgress.remove();
            return false;
        }
        else {
            return true;
        }
    };
    GuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_AuthService__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-div-form {\r\n    padding-left: 0 !important;\r\n}\r\nbody {\r\n    background: #9e9e9e33 !important;\r\n    display: none\r\n}\r\n.col-form {\r\n    width: 500px;\r\n    background: #fff;\r\n    height: 435px;\r\n}\r\n.col-form h3 {\r\n    margin-top: 0 !important;\r\n    padding: 2ex !important;\r\n}\r\n.lat-back {\r\n    background: url('fashion-man-mobile-phone-212289.jpg') center no-repeat;\r\n    background-size: cover;\r\n    height: 435px;\r\n}\r\n.col-hd {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    text-align: center;\r\n    color: #000;\r\n}\r\nbody {\r\n    height: auto !important;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section style=\"margin-top:7ex\">\n    <div class=\"row\" style=\"margin:auto;width:70%\">\n        <div class=\"large-5 column lat-back\" style=\"padding: 0\">\n\n        </div>\n        <div class=\"large-7 column col-div-form\">\n            <div class=\"col-form\">\n                <div class=\"row col-hd\">\n                    <div class=\"large-12 column\">\n                        <h3>Tu as dèjà un compte? connectes-toi</h3>\n                    </div>\n                </div>\n                <div style=\"width:80%;margin:auto;margin-top:5ex;\">\n                    <form [formGroup]=\"myform\" (ngSubmit)=\"submit()\" class=\"ui form\">\n                        <div class=\"fields\" style=\"display:grid;line-height:6ex\">\n                            <div class=\"field\" style=\"padding-left:0\" [ngClass]=\"{'error': error}\">\n                                <label>Quel est ton émail ?</label>\n                                <input type=\"email\" placeholder=\"Tape ton émail\" formControlName='email'>\n                            </div>\n                            <div class=\"field\" style=\"padding-left:0\" [ngClass]=\"{'error': error}\">\n                                <label>Quel est ton mot de passe ?</label>\n                                <input type=\"password\" placeholder=\"Tape ton mot de passe\" formControlName='password'>\n                            </div>\n                            <div class=\"field\">\n                                <div class=\"ui checkbox\">\n                                    <input type=\"checkbox\" tabindex=\"0\" class=\"hidden\">\n                                    <label (click)=\"check()\">Je reste connecté</label>\n                                </div>\n                            </div>\n                            <div style=\"padding-top: 3ex;\">\n                                <button class=\"ui green button\" [disabled]=\"myform.invalid || disabled\">Je me connecte</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent, Loger, Freelancer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loger", function() { return Loger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Freelancer", function() { return Freelancer; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _set_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../set-session.service */ "./src/app/set-session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, service, session, route) {
        this.fb = fb;
        this.service = service;
        this.session = session;
        this.route = route;
        this.accepte = false;
        this.error = false;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.myform = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    };
    LoginComponent.prototype.check = function () {
        if ($('.checkbox').hasClass('checked')) {
            this.accepte = true;
        }
        else {
            this.accepte = false;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        jQuery(window).trigger('resize').trigger('scroll');
        $('.ui.checkbox')
            .checkbox();
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        var form = this.myform.value;
        this.disabled = true;
        if ($('.checkbox').hasClass('checked')) {
            this.session.putLocal();
        }
        else {
            this.session.removeLocal();
        }
        this.accepte = true;
        var person = new Loger(form.email, form.password);
        this.service.login(person).then(function (pers) {
            if (pers.status === false) {
                $.amaran({
                    content: {
                        bgcolor: '#ff4133',
                        color: '#fff',
                        message: 'Désolé votre email ou mot de passe est incorrecte !',
                    },
                    theme: 'colorful',
                    position: 'top right',
                    delay: 5500
                });
                _this.error = true;
                _this.disabled = false;
                return;
            }
            _this.session.setSession(pers);
            $.amaran({
                'message': 'Tu es connecté !',
                'position': 'top right',
                'duration': 10000
            });
            _this.disabled = false;
            setTimeout(function () {
                _this.route.navigate(['/']);
            }, 3000);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _allprojets_service__WEBPACK_IMPORTED_MODULE_3__["AllprojetsService"], _set_session_service__WEBPACK_IMPORTED_MODULE_4__["SetSessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());

var Loger = /** @class */ (function () {
    function Loger(email, password) {
        this.email = email;
        this.password = password;
    }
    return Loger;
}());

var Freelancer = /** @class */ (function () {
    function Freelancer(id, nom, avatar, status, email, specialite, inscription, skill) {
        this.id = id;
        this.nom = nom;
        this.avatar = avatar;
        this.status = status;
        this.email = email;
        this.specialite = specialite;
        this.inscription = inscription;
        this.skill = skill;
    }
    return Freelancer;
}());



/***/ }),

/***/ "./src/app/modal-devis/modal-devis.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modal-devis/modal-devis.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#modalDevis {\r\n    width: 40%;\r\n    padding: 3ex;\r\n}"

/***/ }),

/***/ "./src/app/modal-devis/modal-devis.component.html":
/*!********************************************************!*\
  !*** ./src/app/modal-devis/modal-devis.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui modal\" id=\"modalDevis\">\n    <i class=\"close icon\"></i>\n    <div class=\"row\">\n        <div class=\"large-12 column\">\n            <h2 style=\"margin:0;margin-bottom: 2ex;\">Ton Devis</h2>\n            <div class=\"ui red message\" *ngIf=\"warn\"> {{message}} </div>\n            <form (ngSubmit)=\"onSubmit(form)\" class=\"ui form\" style=\"display: grid\" #form=\"ngForm\">\n                <div class=\"field\">\n                    <label>Ton prix</label>\n                    <input type=\"number\" name=\"prix\" placeholder=\"Quel est ton prix pour realiser ce projet ?\" min=\"1\" ngModel required>\n                </div>\n                <div style=\"display: inline-flex;\">\n                    <div class=\"field\">\n                        <label>Durée de réalisation</label>\n                        <input type=\"number\" name=\"duree\" placeholder=\"En combien de temps ?\" min=\"1\" ngModel required>\n                    </div>\n                    <div class=\"field\" style=\"margin-left: 3ex\">\n                        <label>Donne le temps</label>\n                        <select name=\"temps\" required ngModel>\n                        <option value=\"jour\">En jour</option>\n                        <option value=\"heure\">En heure</option>\n                        <option value=\"semaine\">En semaine</option>\n                      </select>\n                    </div>\n                </div>\n                <div class=\"field\">\n                    <label>Note</label>\n                    <textarea name=\"note\" ngModel required></textarea>\n                </div>\n                <button class=\"ui green button\" [disabled]='form.invalid || inactive' style=\"width: 30%\">Envoyer mon devis</button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modal-devis/modal-devis.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modal-devis/modal-devis.component.ts ***!
  \******************************************************/
/*! exports provided: ModalDevisComponent, Devis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDevisComponent", function() { return ModalDevisComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Devis", function() { return Devis; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../allprojets.service */ "./src/app/allprojets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalDevisComponent = /** @class */ (function () {
    function ModalDevisComponent(service) {
        this.service = service;
    }
    ModalDevisComponent.prototype.ngOnInit = function () {
    };
    ModalDevisComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.inactive = true;
        //console.log('les données ', form.value, 'idProj ', this.idProj);
        var idUser = JSON.parse(this.service.getLocal().getItem('user'))[0].id;
        var devis = new Devis(form.value.prix, form.value.duree + ' ' + form.value.temps, form.value.note, this.idProj, idUser);
        this.service.setDevis(devis).then(function (response) {
            _this.inactive = false;
            if (response.res === false) {
                _this.warn = true;
                _this.message = 'Désolé, tu as dèjà envoyé un devis pour ce projet !';
            }
            else {
                _this.warn = false;
                _this.message = '';
                setTimeout(function () {
                    $('#modalDevis').modal('hide');
                }, 1000);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalDevisComponent.prototype, "idProj", void 0);
    ModalDevisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-devis',
            template: __webpack_require__(/*! ./modal-devis.component.html */ "./src/app/modal-devis/modal-devis.component.html"),
            styles: [__webpack_require__(/*! ./modal-devis.component.css */ "./src/app/modal-devis/modal-devis.component.css")]
        }),
        __metadata("design:paramtypes", [_allprojets_service__WEBPACK_IMPORTED_MODULE_1__["AllprojetsService"]])
    ], ModalDevisComponent);
    return ModalDevisComponent;
}());

var Devis = /** @class */ (function () {
    function Devis(prix, temps, note, idP, idUser) {
        this.prix = prix;
        this.temps = temps;
        this.note = note;
        this.idP = idP;
        this.idUser = idUser;
    }
    return Devis;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>La page n'existe pas !</h1>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/one-freelancer/one-freelancer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/one-freelancer/one-freelancer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-head {\r\n    background: rgba(102, 102, 102, 0.164)\r\n}\r\nbody {\r\n    \r\n    background: #9e9e9e33;\r\n}\r\n.col-profil {\r\n    background-image: linear-gradient(60deg, #03A9F4 0, #03A9F4 50%, #2196F3 50%, #2196F3 100%);\r\n    display: flex;\r\n    padding: 0 !important;\r\n    margin: 0px !important;\r\n    height: 425px;\r\n    position: relative;\r\n}\r\n.fa, .fab, .fal, .far, .fas {\r\n    line-height: inherit !important; \r\n}\r\n.side-left-share {\r\n    background: #fff;\r\n    padding: 3ex;\r\n    text-align: center;\r\n    color: #666;\r\n    margin-top: 1ex\r\n}\r\n.side-left-share h2 {\r\n    margin: 0;\r\n    font-size: 20px\r\n}\r\n.side-left-second {\r\n    margin-top: 3ex\r\n}\r\n.side-right h2 {\r\n    margin: 0\r\n}\r\n.col-categorie {\r\n    padding: 1ex;\r\n    text-align: left;\r\n    font-size: 13pt;\r\n    font-weight: bold;\r\n    background: #fff;\r\n}\r\n.skill-list {\r\n    position: relative;\r\n    list-style-type: none;\r\n    display: inline-block;\r\n    margin: -4px;\r\n    padding: 0;\r\n    font-size: 0;\r\n}\r\n.skill-list li:not(.skill) {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n.side-left-second .rounded-div {\r\n    display: inline-flex;\r\n    background-color: white;\r\n}\r\n.skill.dark,\r\n.skill.dark:active,\r\n.skill.dark:focus,\r\n.skill.dark:hover,\r\n.skill.dark:visited {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    outline: 0;\r\n}\r\n.side-left-second span {\r\n    margin-left: 1ex;\r\n    font-size: 15pt;\r\n    color: #6669\r\n}\r\n.skill.big {\r\n    padding: 10px 20px;\r\n}\r\n.skill.dark {\r\n    background-color: #343a5e;\r\n}\r\n.skill.rounded {\r\n    border-radius: 50px;\r\n}\r\n.skill {\r\n    display: inline-block;\r\n    font-family: OpenSans-light, Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    margin: 4px;\r\n}\r\n.side-left-second .rounded-div i {\r\n    color: #2196f3;\r\n    font-size: 17pt\r\n}\r\n.side-left-share ul {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0%;\r\n    display: inline-flex;\r\n}\r\n.side-left-share .rounded-div {\r\n    background-color: #b4b4b4ab;\r\n}\r\n.side-left-share .rounded-div:hover {\r\n    background-color: #646262ab;\r\n    cursor: pointer;\r\n}\r\n.side-left-share ul li {\r\n    display: inline;\r\n    margin: 3ex\r\n}\r\n.indicator-div {\r\n    background: black;\r\n    color: #fff;\r\n    width: 50%;\r\n    margin: auto;\r\n    padding: 1ex;\r\n    border-radius: 16px;\r\n}\r\n.txt-sub-btn {\r\n    text-align: center;\r\n    margin-top: 2ex;\r\n    padding-left: 3ex;\r\n    padding-right: 3ex;\r\n}\r\n.list-desc {\r\n    display: inline-flex;\r\n    margin-bottom: 20px;\r\n}\r\n.list-desc i {\r\n    font-size: 11pt\r\n}\r\n.rounded-div {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 100%;\r\n    background-color: darkblue;\r\n    display: flex;\r\n}\r\n.col-head {\r\n    padding-bottom: 20px;\r\n}\r\n.grid-align {\r\n    margin: 0 !important;\r\n    border: 1px solid rgba(102, 102, 102, 0.384);\r\n    border-radius: 10px;\r\n}\r\n.grid-align>div.column {\r\n    padding-top: 6px;\r\n    padding-bottom: 20px;\r\n    border-right: 1px solid rgba(102, 102, 102, 0.384);\r\n    height: 75px;\r\n}\r\n.hd-item-int {\r\n    color: #4c4444;\r\n}\r\n.grid-align h2 {\r\n    margin: 0 !important;\r\n}\r\n.grid-align>div.column>div {\r\n    display: -ms-grid;\r\n    display: grid;\r\n}\r\n.rounded-div i {\r\n    margin: auto;\r\n    color: #fff\r\n}\r\n.list-desc h3 {\r\n    margin: 0;\r\n    padding-left: 1ex;\r\n    font-weight: normal;\r\n    font-size: 15px !important;\r\n}\r\n.backDark {\r\n    background: #6666661c !important\r\n}\r\n.line-description {\r\n    line-height: 24px;\r\n    font-size: 11pt !important;\r\n    margin-top: 2ex;\r\n }\r\n.inconnu {\r\n    width: 40%\r\n}\r\n.grid__item button {\r\n    padding: 8px;\r\n    border: 1px solid deepskyblue;\r\n    padding-left: 9px;\r\n    border-radius: 4px;\r\n}\r\n.grid__item button .fa-star {\r\n    font-size: 15px;\r\n    margin: 0;\r\n    margin-right: 3px;\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n            transform: scale3d(1, 1, 1);\r\n    padding: 0;\r\n    color: deeppink;\r\n}\r\n.col-hd-profil {\r\n    width: 70%;\r\n    background: #fff;\r\n    margin: auto;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    position: absolute;\r\n}\r\n.panel-projet h3:hover {\r\n    color: rgb(21, 84, 105);\r\n}\r\n.panel-projet h3 {\r\n    outline: none;\r\n    color: rgb(29, 103, 128);\r\n    cursor: pointer;\r\n}\r\n.img-profil {\r\n    height: 350px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n/* Icons button */\r\n.icobutton {\r\n    font-size: 3em;\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #c0c1c3;\r\n    border: 0;\r\n    background: none;\r\n    overflow: visible;\r\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n.icobutton .fa {\r\n    display: block;\r\n    padding: 0 0.1em;\r\n}\r\n.icobutton__text {\r\n    font-size: 0.75em;\r\n    position: absolute;\r\n    top: 100%;\r\n    left: -50%;\r\n    width: 200%;\r\n    text-align: center;\r\n    line-height: 1.5;\r\n    color: #a6a6a6;\r\n}\r\n.icobutton__text--side {\r\n    top: 0;\r\n    left: 100%;\r\n    width: 100%;\r\n    width: auto;\r\n    padding: 0 0 0 0.25em;\r\n}\r\n/* fix for mo.js */\r\n.icobutton svg {\r\n    left: 0;\r\n}\r\n.icobutton:hover,\r\n.icobutton:focus {\r\n    outline: none;\r\n}\r\n/* Unicorn */\r\n.icobutton--unicorn svg {\r\n    fill: #c0c1c3;\r\n}"

/***/ }),

/***/ "./src/app/one-freelancer/one-freelancer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/one-freelancer/one-freelancer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide>\n</app-slide>\n<div class=\"col-head\">\n    <app-entete></app-entete>\n</div>\n<section style=\"margin-top: 1em\">\n    <div class=\"row\">\n        <div class=\"large-12 column col-profil\">\n            <div class=\"col-hd-profil\">\n                <div class=\"image-profil\">\n                    <div class=\"row\" style=\"margin: 0\">\n                        <div class=\"large-4 column img-profil\" *ngIf=\"user.photo\" [ngStyle]=\"{'background-image': 'url(' + user.photo + ')', 'background-size': '100%'}\">\n\n                        </div>\n                        <div class=\"large-8 column\">\n                            <div class=\"row\">\n                                <div class=\"large-8 column\">\n                                    <h1> {{user.nom}} </h1>\n                                    <br>\n                                    <div style=\"text-align: center;display: grid\">\n                                        <div class=\"list-desc\">\n                                            <i class=\"fas fa-rocket\"></i>\n                                            <h3 style=\"font-size: 15px\"> {{user.metier}} </h3>\n                                        </div>\n                                       \n                                        <div class=\"list-desc\">\n                                            <i class=\"fas fa-map-marker-alt\"></i>\n                                            <h3 style=\"font-size: 15px\"> {{user.ville}} </h3>\n                                        </div>\n                                      \n                                        <div class=\"list-desc\">\n                                            <i class=\"fas fa-star\" style=\"color: deepskyblue\" *ngFor=\"let i of range(user.evaluation)\"></i> <span style=\"color: #6666667a\"> (Evaluation)</span>\n                                        </div>\n                                       \n                                        <div class=\"list-desc\">\n                                            \n                                        </div>\n                                      \n                                        <div class=\"row grid-align\" style=\"border-radius: 5px\">\n                                            <div class=\"large-3 column\" style=\"border-radius: 5px 0px 0px 5px\">\n                                                <div>\n                                                    <span class=\"hd-item-int\">Tarif indicatif</span>\n                                                    <span>\n                                                     <h2 style=\"font-size: 10pt;color: #311f1f\">{{user.prix}}</h2>\n                                                  </span>\n                                                </div>\n                                            </div>\n                                            <div class=\"large-3 column\">\n                                                <div>\n                                                    <span class=\"hd-item-int\">Experience</span>\n                                                    <span>\n                                                      <h2 style=\"font-size: 13pt\"> {{user.experience}} ans</h2>  \n                                                  </span>\n                                                </div>\n                                            </div>\n                                            <div class=\"large-3 column\" style=\"padding-left: 0;padding-right: 0;\">\n                                                <div>\n                                                    <span class=\"hd-item-int\">Taux de réponse</span>\n                                                    <span>\n                                                        <h2 style=\"font-size: 13pt\">_</h2> \n                                                  </span>\n                                                </div>\n                                            </div>\n                                            <div class=\"large-3 column\" style=\"border-right: 0;padding-left: 0;padding-right: 0;\">\n                                                <div>\n                                                    <span class=\"hd-item-int\">Temps de réponse</span>\n                                                    <span>\n                                                   <h2 style=\"font-size: 13pt\">_</h2>\n                                                  </span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"large-4 column\">\n                                    <div class=\"row\" style=\"line-height: 4ex\">\n                                        <div class=\"large-12 column\" style=\"margin-top: 2ex;text-align: center\">\n                                            <button class=\"positive ui button\" [disabled]=\"disabel\" (click)=\"popup()\"> <i class=\"far fa-handshake\" style=\"font-size: 19px;\"></i>  Proposer un projet </button>\n                                            <div class=\"txt-sub-btn\">\n                                                La mission ne démarrera que si vous acceptez le devis de {{user.nom}} .\n                                            </div>\n                                        </div>\n                                        <div class=\"large-12 column\" style=\"text-align: center\">\n                                            <ol class=\"grid\" style=\"list-style: none;padding: 0;\">\n                                                <li class=\"grid__item\">\n                                                    <button class=\"icobutton icobutton--thumbs-up\" (click)=\"boot()\" style=\"display: inline-flex;cursor: pointer;\">\n                                                        <span class=\"fas fa-star span\" style=\"font-size: 15px\"></span>\n                                                    <div style=\"font-size: 13pt;\">Booster ce Freelancer</div>\n                                                    </button>\n                                                </li>\n                                            </ol>\n                                        </div>\n                                        <div class=\"large-12 column\" style=\"margin-top: 2ex;text-align: center\">\n                                            <span> {{user.evaluation}} personne a Boosté ce profil </span>\n                                        </div>\n                                        <div class=\"large-12 column\" style=\"margin-top: 2ex;text-align: center\">\n                                            <div class=\"label-dispo\" style=\"position: initial\">\n                                                <a class=\"ui label myh\" [attr.data-content]=\"getStatusText(user.dispo, user.nom).texte\">\n                                                    <a class=\"ui empty circular label\" [ngClass]=\"{'green': user.dispo, 'red': !user.dispo}\"></a> {{getStatusText(user.dispo, user.nom).status}}\n                                                </a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row bottom-col\" style=\"width: 70%\">\n        <div class=\"large-4 column\">\n            <div class=\"row\">\n                <div class=\"large-12 column side-left-share\">\n                    <h2>Partager son profil</h2>\n                    <ul>\n                        <li (click)=\"shareFB(user.photo, user.nom, user.metier, user.id)\">\n                            <div class=\"rounded-div\"><i class=\"fab fa-facebook\"></i></div>\n                        </li>\n                        <li (click)=\"shareTweet(user.nom, user.metier)\">\n                            <div class=\"rounded-div\"><i class=\"fab fa-twitter\"></i></div>\n                        </li>\n                        <li (click)=\"shareGoogle(user.nom, user.metier, user.id)\">\n                            <div class=\"rounded-div\"><i class=\"fas fa-envelope\"></i></div>\n                        </li>\n                    </ul>\n                </div>\n                <br>\n                <div class=\"large-12 column side-left-second\">\n                    <div class=\"rounded-div\"><i class=\"fas fa-wrench\"></i></div> <span>Compétences</span>\n                    <div style=\"margin-top: 2ex\">\n                        <ul class=\"skill-list\">\n                            <li *ngFor=\"let skill of user.expsp\">\n                                <a class=\"skill rounded dark big\"> {{skill}} </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"large-12 column side-left-second\">\n                    <div class=\"rounded-div\"><i class=\"fas fa-star\"></i></div> <span>Categorie</span>\n                    <div style=\"margin-top: 2ex;text-align: center\">\n                        <div class=\"col-categorie\">\n                            {{user.categorie}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"large-8 column side-right\" style=\"margin-top: 1ex;padding-right: 0;\">\n            <div style=\"background: #fff;padding: 18px\">\n                <h2> {{user.nom}} en un mot </h2>\n                <p class=\"line-description\" [innerHTML]=\"user.propos\"></p>\n            </div>\n\n        </div>\n    </div>\n</section>\n<div class=\"ui modal\" id=\"col-prop\">\n    <i class=\"close icon\"></i>\n    <div class=\"header\">\n        Selectionner un projet\n    </div>\n    <div class=\"ui red message\" *ngIf=\"error\" style=\"width: 50%;margin-left: 3ex;\"> {{err}} </div>\n    <div class=\"image content\" *ngIf=\"nul\">\n        <h2>Vous n'avez aucun projet crée. Rendez-vous dans votre profil utilisateur et créez un nouveau projet</h2>\n    </div>\n    <div *ngIf=\"!nul\">\n        <div class=\"panel-projet\" style=\"padding: 2ex\" *ngFor=\"let P of allProjets; let i = index\" [ngClass]=\"{'backDark' : i%2 ==0}\">\n            <h3 (click)=\"viewProject(P.projetID,P.titre, i)\">\n                {{P.titre}}\n            </h3>\n            <button class=\"mini ui green button\" (click)=\"propose(idRec,P.projetID, idFree)\">Proposer ce projet à {{nom}} </button>\n        </div>\n    </div>\n</div>\n\n<!-- Modal user inconnu -->\n<div class=\"ui modal inconnu\" id=\"inconnu\">\n    <i class=\"close icon\"></i>\n    <div class=\"row\" style=\"margin:0;padding: 0\">\n        <div class=\"large-4 column\" style=\"overflow: hidden;margin:0;padding: 0\">\n            <img src=\"../avatars/Freelance-Gabon-fille-pc.jpg\" alt=\"\" style=\"width: 300px;\">\n        </div>\n        <div class=\"large-8 column\" style=\"margin:0;padding: 0\">\n            <h2 style=\"text-align: center;font-family: roboto condensed\">Connectes-toi pour Booster les Freelancers !</h2>\n            <div class=\"ui yellow message\" style=\"margin: 0;margin-left: 30px;margin-right: 30px;\">Seuls les recruteurs peuvent <b>Booster</b> un Freelancer .</div>\n            <form (ngSubmit)=\"onSubmit(form)\" class=\"ui form\" style=\"padding: 6ex;padding-top: 20px;\" #form=\"ngForm\">\n                <div class=\"field\" [ngClass]=\"{'error': noExist}\">\n                    <label>Ton email</label>\n                    <input type=\"email\" name=\"email\" placeholder=\"Entre ton email\" ngModel required>\n                </div>\n                <div class=\"field\" [ngClass]=\"{'error': noExist}\">\n                    <label>Ton mot de passe</label>\n                    <input type=\"password\" name=\"password\" placeholder=\"Ton mot de passe\" ngModel required>\n                </div>\n                <div class=\"field\">\n                    <div class=\"ui checkbox\">\n                        <input type=\"checkbox\" tabindex=\"0\" class=\"hidden\">\n                        <label>Rester connecter</label>\n                    </div>\n                </div>\n                <button class=\"ui button\" [disabled]=\"form.invalid || disable\" type=\"submit\">Valider</button>\n                <div class=\"field\" style=\"margin-top: 33px\" routerLink=\"../../signin\" (click)=\"create()\">\n                    <div class=\"ui breadcrumb\">\n                        <a class=\"section\">Créer un compte</a>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>\n<!-- fin -->"

/***/ }),

/***/ "./src/app/one-freelancer/one-freelancer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/one-freelancer/one-freelancer.component.ts ***!
  \************************************************************/
/*! exports provided: OneFreelancerComponent, Notif, Loger, Freelancers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneFreelancerComponent", function() { return OneFreelancerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notif", function() { return Notif; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loger", function() { return Loger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Freelancers", function() { return Freelancers; });
/* harmony import */ var _set_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../set-session.service */ "./src/app/set-session.service.ts");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OneFreelancerComponent = /** @class */ (function () {
    function OneFreelancerComponent(services, routeActivate, route, session) {
        this.services = services;
        this.routeActivate = routeActivate;
        this.route = route;
        this.session = session;
        this.range = function (value) { var a = []; for (var i = 0; i < value; ++i) {
            a.push(i + 1);
        } return a; };
    }
    OneFreelancerComponent.prototype.ngOnInit = function () {
        var _this = this;
        jQuery(window).trigger('resize').trigger('scroll');
        this.initFacebook();
        $('.ui.checkbox').checkbox();
        var id = this.routeActivate.snapshot.params['id'];
        var nom = this.routeActivate.snapshot.params['nom'];
        var f = this.services.Freelancers;
        if (f === undefined) {
            this.services.getFreelancer().then(function (rep) {
                _this.Freelanceurs = rep;
                _this.getFree(id);
                document.title = 'Decouvrer le Freelancer ' + rep[0].nom + ' sur Freelance Gabon | Premiere plateform de Freelance au Gabon';
            });
        }
        else {
            this.Freelanceurs = f;
            this.getFree(id);
        }
        var status = JSON.parse(this.services.getLocal().getItem('user')) || [];
        if (status.length >= 1) {
            status = status[0].status;
            if (status !== 'Recruteur') {
                this.disabel = true;
                return;
            }
            else {
                this.getMyprojet();
                this.disabel = false;
            }
        }
        else {
            this.disabel = true;
        }
    };
    OneFreelancerComponent.prototype.initFacebook = function () {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1006362419543885',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.11'
            });
        };
        (function (d, s, id) {
            var fjs = d.getElementsByTagName(s)[0];
            var js = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };
    OneFreelancerComponent.prototype.shareFB = function (photo, nom, metier, id) {
        // Dynamically gather and set the FB share data.
        var FBDesc = nom + ' est ' + metier + ' . Decouvrez ce ses talents dans Freelance Gabon';
        var FBTitle = 'Decouvre les services  de ' + nom + ' sur Freelance Gabon';
        var FBLink = 'http://localhost/php-challenge';
        var FBPic = photo;
        // Open FB share popup
        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.shares',
            action_properties: JSON.stringify({
                object: {
                    'og:url': FBLink,
                    'og:title': FBTitle,
                    'og:description': FBDesc,
                    'og:image': FBPic
                }
            })
        }, function (response) {
        });
    };
    OneFreelancerComponent.prototype.shareTweet = function (nom, talent) {
        var text = 'Découvre les services que offre ' + nom + ' sur Freelance Gabon . Regarde ses talents sur http://localhost/php-challenge';
        var url = 'https://twitter.com/intent/tweet?text=' + text;
        var title = 'Partager sur Tweeter';
        var top = window.screentop || window.screenY;
        var left = window.screenLeft || window.screenX;
        var width = window.innerWidth || document.documentElement.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight;
        var popup_width = 640;
        var popup_height = 340;
        var popup_left = left + width / 2 - popup_width / 2;
        var popup_top = top + height / 2 - popup_height / 2;
        window.open(url, title, 'scrollbar=yes,width=' + popup_width + ',height=' + popup_height + ',top=' + popup_top + ',left=' + popup_left);
    };
    OneFreelancerComponent.prototype.shareGoogle = function (nom, talent, id) {
        var text = 'Découvre les services que offre ' + nom + ' sur Freelance Gabon . Regarde ses talents sur http://localhost/php-challenge';
        var uri = 'http://localhost/php-challenge/' + id + '/' + nom;
        var url = 'https://plus.google.com/share?url=' + uri;
        var title = 'Partager sur Google';
        var top = window.screentop || window.screenY;
        var left = window.screenLeft || window.screenX;
        var width = window.innerWidth || document.documentElement.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight;
        var popup_width = 640;
        var popup_height = 340;
        var popup_left = left + width / 2 - popup_width / 2;
        var popup_top = top + height / 2 - popup_height / 2;
        window.open(url, title, 'scrollbar=yes,width=' + popup_width + ',height=' + popup_height + ',top=' + popup_top + ',left=' + popup_left);
    };
    OneFreelancerComponent.prototype.viewProject = function (projetID, titres, i) {
        this.route.navigate(['/', projetID, titres, i]);
        $('#col-prop').modal('hide');
    };
    OneFreelancerComponent.prototype.getFree = function (id) {
        var fre = this.Freelanceurs.find(function (free) {
            return free.id === id;
        });
        //console.log('notre type ', fre);
        if (typeof (fre) === 'undefined') {
            this.route.navigate(['/']);
            return;
        }
        this.user = fre;
        this.nom = fre.nom;
        this.idFree = fre.id;
    };
    OneFreelancerComponent.prototype.popup = function () {
        $('#col-prop').modal('show');
        this.error = false;
    };
    OneFreelancerComponent.prototype.getMyprojet = function () {
        var _this = this;
        var id = JSON.parse(this.services.getLocal().getItem('user'))[0].id;
        this.idRec = id;
        this.services.getMyproj(id).then(function (rep) {
            _this.allProjets = rep.length > 0 ? rep : false;
            if (_this.allProjets === false) {
                _this.nul = true;
            }
            else {
                _this.nul = false;
            }
            _this.shouldDoIt = true;
            //console.log('all proj ', rep);
        });
    };
    OneFreelancerComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.disable = true;
        //console.log('form ', form.value);
        if ($('.checkbox').hasClass('checked')) {
            this.session.putLocal();
        }
        else {
            this.session.removeLocal();
        }
        var person = new Loger(form.value.email, form.value.password);
        this.services.login(person).then(function (pers) {
            if (pers.status === false) {
                $.amaran({
                    content: {
                        bgcolor: '#ff4133',
                        color: '#fff',
                        message: 'Désolé votre email ou mot de passe est incorrecte !',
                    },
                    theme: 'colorful',
                    position: 'top right',
                    delay: 5500
                });
                _this.noExist = true;
                return;
            }
            _this.session.setSession(pers);
            $.amaran({
                'message': 'Tu es connecté !',
                'position': 'top right',
                'duration': 10000
            });
            _this.noExist = false;
            setTimeout(function () {
                _this.route.navigate(['/']);
            }, 3000);
        });
    };
    OneFreelancerComponent.prototype.getStatusText = function (sts, name) {
        if (sts) {
            return {
                status: 'Disponible',
                texte: name + ' a confirmé dans les 7 derniers jour être disponible à temps plein'
            };
        }
        else {
            return {
                status: 'Indisponible',
                texte: name + ' n\'a pas confirmé être disponible'
            };
        }
    };
    OneFreelancerComponent.prototype.create = function () {
        $('#inconnu').modal('hide');
    };
    OneFreelancerComponent.prototype.boot = function () {
        var _this = this;
        var q = JSON.parse(this.services.getLocal().getItem('user')) || [];
        if (q.length <= 0) {
            $('#inconnu').modal('show');
        }
        else {
            this.services.boots(this.idRec, this.idFree).then(function (response) {
                if (response.res === 'down') {
                    _this.user.evaluation = parseInt(_this.user.evaluation, 0) - 1;
                    //console.log('freee ', this.user.evaluation);
                }
                else {
                    console.log('freee ', _this.user.evaluation);
                    _this.user.evaluation = parseInt(_this.user.evaluation, 0) + 1;
                }
            });
        }
        var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
        var el = document.querySelector('.icobutton');
        var elSpan = el.querySelector('.span');
        var timeline = new mojs.Timeline();
        var tween1 = new mojs.Burst({
            parent: el,
            duration: 1500,
            shape: 'circle',
            fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
            opacity: 0.6,
            childOptions: { radius: { 20: 0 } },
            radius: { 40: 120 },
            count: 6,
            isSwirl: true,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }), tween2 = new mojs.Transit({
            parent: el,
            duration: 750,
            type: 'circle',
            radius: { 0: 50 },
            fill: 'transparent',
            stroke: '#988ADE',
            strokeWidth: { 15: 0 },
            opacity: 0.6,
            easing: mojs.easing.bezier(0, 1, 0.5, 1)
        }), tween3 = new mojs.Tween({
            duration: 900,
            onUpdate: function (progress) {
                var scaleProgress = scaleCurve(progress);
                elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
            }
        }), moburst5 = new mojs.Burst({
            parent: el,
            count: 12,
            left: '30%', top: '-100%',
            radius: { 0: 60 },
            children: {
                fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
                duration: 1400,
                delay: 400,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
        });
        // add tweens to timeline:
        timeline.add(tween1, tween2, tween3, moburst5);
        timeline.play();
        // when clicking the button start the timeline/animation:
        el.addEventListener('mousedown', function () {
            timeline.replay();
        });
    };
    OneFreelancerComponent.prototype.propose = function (idRec, projetID, idFree) {
        var _this = this;
        var obj = new Notif(idRec, projetID, idFree);
        this.services.setnotif(obj).then(function (resp) {
            if (resp.res === false) {
                $.amaran({
                    content: {
                        bgcolor: '#ff4133',
                        color: '#fff',
                        message: 'Projet non soumis !',
                    },
                    theme: 'colorful',
                    position: 'top right',
                    delay: 5500
                });
                _this.error = true;
                _this.err = 'Vous avez dèjà proposé ce projet à ce Freelancer';
            }
            else {
                _this.error = false;
                $('#col-prop').modal('hide');
            }
        });
    };
    OneFreelancerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-one-freelancer',
            template: __webpack_require__(/*! ./one-freelancer.component.html */ "./src/app/one-freelancer/one-freelancer.component.html"),
            styles: [__webpack_require__(/*! ./one-freelancer.component.css */ "./src/app/one-freelancer/one-freelancer.component.css")]
        }),
        __metadata("design:paramtypes", [_allprojets_service__WEBPACK_IMPORTED_MODULE_1__["AllprojetsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _set_session_service__WEBPACK_IMPORTED_MODULE_0__["SetSessionService"]])
    ], OneFreelancerComponent);
    return OneFreelancerComponent;
}());

var Notif = /** @class */ (function () {
    function Notif(auteur, id, Freelancer) {
        this.auteur = auteur;
        this.id = id;
        this.Freelancer = Freelancer;
    }
    return Notif;
}());

var Loger = /** @class */ (function () {
    function Loger(email, password) {
        this.email = email;
        this.password = password;
    }
    return Loger;
}());

var Freelancers = /** @class */ (function () {
    function Freelancers(id, nom, avatar, status, email, specialite, inscription, skill) {
        this.id = id;
        this.nom = nom;
        this.avatar = avatar;
        this.status = status;
        this.email = email;
        this.specialite = specialite;
        this.inscription = inscription;
        this.skill = skill;
    }
    return Freelancers;
}());



/***/ }),

/***/ "./src/app/oneprojet/oneprojet.component.css":
/*!***************************************************!*\
  !*** ./src/app/oneprojet/oneprojet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".st3 {\r\n    font-family: 'RobotoSlab-Regular';\r\n    fill: #080404;\r\n}\r\n\r\n.nav-top-right ul li {\r\n    color: #1b0e0e;\r\n}\r\n\r\n.col-proj {\r\n    width: 100%;\r\n}\r\n\r\nbody {\r\n    \r\n    background: #9e9e9e33;\r\n}\r\n\r\n.col-proj-child {\r\n    margin: auto;\r\n}\r\n\r\n.col-sub-info {\r\n    width: 100%;\r\n    display: inline-flex\r\n}\r\n\r\n.col-info-child {\r\n    width: 20%;\r\n    background: #fff;\r\n    padding: 3ex;\r\n    border: 1px solid #66666612;\r\n    display: inline-flex\r\n}\r\n\r\ntr td {\r\n    padding: 3ex !important\r\n}\r\n\r\nth {\r\n    border: none !important\r\n}\r\n\r\n.col-detail {\r\n    padding: 3ex;\r\n    padding-top: 0px;\r\n    background: #fff;\r\n}\r\n\r\n.col-info-child font {\r\n    font-size: 16pt;\r\n    padding-right: 10px;\r\n    color: darkblue;\r\n}\r\n\r\n.side {\r\n    background: #fff;\r\n    padding: 3ex\r\n}\r\n\r\n.col-free-req {\r\n    margin-top: 5ex\r\n}\r\n\r\n.free-info {\r\n    display: inline-flex;\r\n}\r\n\r\n.free-name {\r\n    font-size: 12pt;\r\n    font-weight: bold;\r\n}\r\n\r\n.hd- {\r\n    font-size: 12pt;\r\n    padding-top: 27px !important;\r\n}\r\n\r\n.col-head {\r\n    background: darkgray;\r\n}\r\n\r\n.info-rec span {\r\n    font-size: 13pt;\r\n    line-height: 28px;\r\n    margin-left: 23px\r\n}\r\n\r\n.side-info-employe {\r\n    display: inline-flex;\r\n}\r\n\r\n.info-name-empl {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    margin-left: 2ex\r\n}\r\n\r\n#modalDevis {\r\n    width: 40%;\r\n    padding: 3ex;\r\n}\r\n\r\n.info-plus {\r\n    padding: 3ex;\r\n    border: 1px solid #66666614;\r\n    border-top: none;\r\n    display: inline-flex;\r\n    color: #666\r\n}\r\n\r\n.span-title {\r\n    margin: 0;\r\n    padding: 0;\r\n    line-height: 80px;\r\n    padding-left: 11px;\r\n    font-size: 12pt;\r\n}\r\n\r\n.info-plus i {\r\n    font-size: 22pt;\r\n}\r\n\r\n.info-plus div {\r\n    font-size: 13pt;\r\n    line-height: 28px;\r\n    margin-left: 12px;\r\n}\r\n\r\n.td-employ {\r\n    padding-left: 0 !important;\r\n    padding-right: 0 !important;\r\n}\r\n\r\n.st0 {\r\n    fill: #21409A;\r\n}\r\n\r\n.st1 {\r\n    fill: #FFF200;\r\n}\r\n\r\n.st2 {\r\n    fill: #00A14B;\r\n}\r\n\r\n.col-head {\r\n    padding-bottom: 3ex;\r\n}"

/***/ }),

/***/ "./src/app/oneprojet/oneprojet.component.html":
/*!****************************************************!*\
  !*** ./src/app/oneprojet/oneprojet.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide [default]=\"avatar\"></app-slide>\n<div class=\"col-head\">\n    <app-entete [avatar]=\"avatar\" [Auth]=\"Auth\" [userName]=\"name\"></app-entete>\n</div>\n<section>\n    <!-- modal  connexion-->\n    <div class=\"ui modal\" id=\"popup\" style=\"width:40%;\">\n        <div class=\"row\">\n            <div class=\"large-7 column col-right-connect\" id=\"col-right-connect\" style=\"padding: 0;\">\n                <div class=\"col-form\">\n                    <form (ngSubmit)=\"onSubmit(forms)\" #forms=\"ngForm\">\n                        <div class=\"ui form\" style=\"padding: 13px\">\n                            <h2 style=\"margin: 0;text-align: center;margin-bottom: 12px;\">Connectes-toi</h2>\n                            <div class=\"ui yellow message\" style=\"margin: 0\">Seuls les Freelancers peuvent faire un devis .</div>\n                            <div class=\"fields\" style=\"display:grid;line-height: 6ex;margin: 0;\">\n                                <div class=\"field\" style=\"padding: 0\" [ngClass]=\"{'error': error}\">\n                                    <label>Quel est ton émail</label>\n                                    <input name=\"email\" type=\"email\" placeholder=\"Ton émail\" style=\"width: 80%\" ngModel required>\n                                </div>\n                                <div class=\"field\" style=\"padding: 0\" [ngClass]=\"{'error': error}\">\n                                    <label>Quel est ton mot de passe ?</label>\n                                    <input type=\"password\" name=\"password\" placeholder=\"Ton mot de passe\" style=\"width: 80%\" ngModel required>\n                                </div>\n                                <div class=\"field\">\n                                    <div class=\"ui checkbox\">\n                                        <input type=\"checkbox\" tabindex=\"0\" class=\"hidden\">\n                                        <label>Rester connecter</label>\n                                    </div>\n                                </div>\n                                <button class=\"ui green button\" [disabled]=\"forms.invalid\" style=\"width: 40%;\">Connexion</button>\n                                <div id=\"click\" class=\"field\" style=\"margin-top: 7px\">\n                                    <div class=\"ui breadcrumb\">\n                                        <a class=\"section\">Créer un compte</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"large-5 column girl-background\" style=\"overflow: hidden;padding: 0;\">\n                <img class=\"img-right\" src=\"../assets/Freelance-Gabon-femme-bureau-connect.jpg\" style=\"height:300px;height: 418px\" alt=\"\">\n            </div>\n        </div>\n    </div>\n    <!-- fin -->\n    <!-- modal devis -->\n    <!-- <app-modal-devis [idProj]=\"iDRoute\"></app-modal-devis> -->\n    <div class=\"ui modal\" id=\"modalDevis\">\n        <i class=\"close icon\"></i>\n        <div class=\"row\">\n            <div class=\"large-12 column\">\n                <h2 style=\"margin:0;margin-bottom: 2ex;\">Ton Devis</h2>\n                <div class=\"ui red message\" *ngIf=\"warn\"> {{message}} </div>\n                <form (ngSubmit)=\"onSubmits(form)\" class=\"ui form\" style=\"display: grid\" #form=\"ngForm\">\n                    <div class=\"field\">\n                        <label>Ton prix</label>\n                        <input type=\"number\" name=\"prix\" placeholder=\"Quel est ton prix pour realiser ce projet ?\" min=\"1\" ngModel required>\n                    </div>\n                    <div style=\"display: inline-flex;\">\n                        <div class=\"field\">\n                            <label>Durée de réalisation</label>\n                            <input type=\"number\" name=\"duree\" placeholder=\"En combien de temps ?\" min=\"1\" ngModel required>\n                        </div>\n                        <div class=\"field\" style=\"margin-left: 3ex\">\n                            <label>Donne le temps</label>\n                            <select name=\"temps\" required ngModel>\n                                <option value=\"jour\">En jour</option>\n                                <option value=\"heure\">En heure</option>\n                                <option value=\"semaine\">En semaine</option>\n                              </select>\n                        </div>\n                    </div>\n                    <div class=\"field\">\n                        <label>Note</label>\n                        <textarea name=\"note\" ngModel required></textarea>\n                    </div>\n                    <button class=\"ui green button\" [disabled]='form.invalid || inactive' style=\"width: 30%\">Envoyer mon devis</button>\n                </form>\n            </div>\n        </div>\n    </div>\n    <!-- fin -->\n    <div class=\"col-proj\">\n        <div class=\"col-proj-child\">\n            <div class=\"row\" style=\"display: flex\">\n                <div class=\"large-12 column\" style=\"width: 80%;margin: auto\">\n                    <table class=\"ui basic table\" style=\"border:none;margin-bottom:0\">\n                        <thead>\n                            <tr>\n                                <th>Titre du projet</th>\n                                <th>Par</th>\n                                <th>Date de publication</th>\n                                <th>Budget</th>\n                                <th></th>\n                            </tr>\n                        </thead>\n                        <tbody style=\"background: #fff\">\n                            <tr>\n                                <td style=\"display: inline-flex\">\n                                    <svg version=\"1.1\" id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"300 265.9 338 311\" style=\"enable-background:new 300 265.9 338 311;width: 40px;height: 80px;\" xml:space=\"preserve\">\n                                            <path id=\"XMLID_4_\" class=\"st0\" d=\"M626,576.9H394c-6.6,0-12-5.4-12-12v-250c0-6.6,5.4-12,12-12h232c6.6,0,12,5.4,12,12v250\n                                            C638,571.5,632.6,576.9,626,576.9z\"/>\n                                            <path id=\"XMLID_3_\" class=\"st1\" d=\"M584,557.9H352c-6.6,0-12-5.4-12-12v-250c0-6.6,5.4-12,12-12h232c6.6,0,12,5.4,12,12v250\n                                            C596,552.5,590.6,557.9,584,557.9z\"/>\n                                            <path id=\"XMLID_1_\" class=\"st2\" d=\"M544,539.9H312c-6.6,0-12-5.4-12-12v-250c0-6.6,5.4-12,12-12h232c6.6,0,12,5.4,12,12v250\n                                            C556,534.5,550.6,539.9,544,539.9z\"/>\n                                        </svg>\n                                    <span class=\"span-title\">{{titre}}</span>\n\n\n                                </td>\n                                <td>{{auteur}}</td>\n                                <td>{{dates}}</td>\n                                <td>{{budget}}</td>\n                                <td><button class=\"positive ui button\" [disabled]=\"disabel\" (click)=\"Getdevis()\">Faire un Devis </button></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <div class=\"col-sub-info\">\n                        <div class=\"col-info-child\">\n                            <font>0</font> <span>Commentaires</span>\n                        </div>\n                        <div class=\"col-info-child\">\n                            <font>1</font> <span>Devis</span>\n                        </div>\n                        <div class=\"col-info-child\">\n                            <font>{{budget}} Fcfa</font>\n                            <span>Moyenne de devis</span>\n                        </div>\n                        <div class=\"col-info-child\">\n                            <font>ouvert</font> <span> {{relatif}} </span>\n                        </div>\n                        <div class=\"col-info-child\">\n                            <i class=\"fab fa-facebook-f\" style=\"font-size: 18px;\"></i> <span style=\"margin-left: 7px\">Partager</span>\n                        </div>\n                    </div>\n                    <div class=\"col-detail\">\n                        <div class=\"row\">\n                            <div class=\"large-8 column\">\n                                <h3>Description du projet</h3>\n                                <p [innerHTML]=\"description\">\n                                </p>\n                            </div>\n                            <div class=\"large-4 column\">\n                                <h3>Competences requises</h3>\n                                <a class=\"ui yellow label\" *ngFor=\"let cpt of competences\"> {{cpt}} </a>\n                                <h3>Categorie</h3>\n                                <a class=\"ui tag label\">{{categorie}}</a>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-free-req\">\n                        <div class=\"row\">\n                            <div class=\"large-7 column\">\n                                <div class=\"side\">\n                                    <table class=\"ui very basic table\">\n                                        <thead class=\"th-free\">\n                                            <tr>\n                                                <th class=\"\" style=\"width: 159px\">Devis de freelancers ({{devis}}) </th>\n                                                <th class=\"center aligned\">Reputation</th>\n                                                <th class=\"center aligned\">status du devis</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let free of devisFree\">\n                                                <td class=\"free-info\" style=\"display: grid;text-align: center;cursor: pointer;outline: none\" [routerLink]=\"['/', free.FreeID, free.FreeNom]\">\n                                                    <div class=\"ui tiny images\">\n                                                        <img class=\"ui image\" src=\"{{free.FreePhoto}}\">\n                                                    </div>\n                                                    <div>\n                                                        <div class=\"free-name\">{{free.FreeNom}}</div>\n                                                    </div>\n                                                </td>\n                                                <td class=\"center aligned\">\n                                                    <i class=\"fas fa-star\" *ngFor=\"let start of range(free.evaluation)\"></i>\n                                                </td>\n                                                <td class=\"center aligned\">{{free.status}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n\n                            </div>\n                            <div class=\"large-5 column\">\n                                <div style=\"background: #fff\">\n                                    <table class=\"ui very basic table\">\n                                        <thead class=\"th-free\">\n                                            <tr>\n                                                <th class=\"center aligned hd-\">A propos de l'employeur</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody *ngFor=\"let rec of recruteur\" class=\"info-rec\">\n                                            <tr>\n                                                <td class=\"td-employ\" style=\"padding-left: 0 !important;\n                                                padding-right: 0 !important;\">\n                                                    <div class=\"side-info-employe\" style=\"margin-left:6ex\">\n                                                        <svg version=\"1.1\" id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"300 265.9 338 311\" style=\"enable-background:new 300 265.9 338 311;width: 40px;height: 80px;\" xml:space=\"preserve\">\n                                                    <path id=\"XMLID_4_\" class=\"st0\" d=\"M626,576.9H394c-6.6,0-12-5.4-12-12v-250c0-6.6,5.4-12,12-12h232c6.6,0,12,5.4,12,12v250\n                                                    C638,571.5,632.6,576.9,626,576.9z\"/>\n                                                    <path id=\"XMLID_3_\" class=\"st1\" d=\"M584,557.9H352c-6.6,0-12-5.4-12-12v-250c0-6.6,5.4-12,12-12h232c6.6,0,12,5.4,12,12v250\n                                                    C596,552.5,590.6,557.9,584,557.9z\"/>\n                                                    <path id=\"XMLID_1_\" class=\"st2\" d=\"M544,539.9H312c-6.6,0-12-5.4-12-12v-250c0-6.6,5.4-12,12-12h232c6.6,0,12,5.4,12,12v250\n                                                    C556,534.5,550.6,539.9,544,539.9z\"/>\n                                                    </svg>\n                                                        <div class=\"info-name-empl\">\n                                                            <h3 style=\"margin-bottom: 0px\">{{rec.nom}}</h3>\n                                                            <span style=\"font-size:10pt;color: #666;line-height: 0px;margin-left: 0px\">\n                                                                Membre depuis {{rec.inscription}}\n                                                            </span>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"\" style=\"display: grid\">\n                                                        <div class=\"info-plus\">\n                                                            <i class=\"fas fa-map-marker-alt\"></i>\n                                                            <div> Ville </div> <span> {{rec.ville}} </span>\n                                                        </div>\n                                                        <div class=\"info-plus\">\n                                                            <i class=\"fas fa-money-bill-alt\"></i>\n                                                            <div> Depense total </div>\n                                                        </div>\n                                                        <div class=\"info-plus\">\n                                                            <i class=\"fas fa-briefcase\"></i>\n                                                            <div> Projet posté </div> <span> {{rec.projets}} </span>\n                                                        </div>\n                                                        <div class=\"info-plus\">\n                                                            <i class=\"fas fa-handshake\"></i>\n                                                            <div>Embauche </div>\n                                                        </div>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/oneprojet/oneprojet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/oneprojet/oneprojet.component.ts ***!
  \**************************************************/
/*! exports provided: OneprojetComponent, Loger, Devis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneprojetComponent", function() { return OneprojetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loger", function() { return Loger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Devis", function() { return Devis; });
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AuthService */ "./src/app/AuthService.ts");
/* harmony import */ var _set_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../set-session.service */ "./src/app/set-session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OneprojetComponent = /** @class */ (function () {
    function OneprojetComponent(allprojets, routeActivate, router, Auths, session) {
        this.allprojets = allprojets;
        this.routeActivate = routeActivate;
        this.router = router;
        this.Auths = Auths;
        this.session = session;
        this.unconnected = true;
        this.link = 'http://localhost/php-challenge/src/avatars/';
        this.range = function (value) { var a = []; for (var i = 0; i < value; ++i) {
            a.push(i + 1);
        } return a; };
    }
    OneprojetComponent.prototype.ngOnInit = function () {
        var _this = this;
        jQuery(window).trigger('resize').trigger('scroll');
        $('.ui.checkbox').checkbox();
        //console.log('route info ', this.routeActivate.snapshot);
        var id = this.routeActivate.snapshot.params['id'];
        this.iDRoute = id;
        this.idProj = id;
        var key = this.routeActivate.snapshot.params['key'];
        var storage = JSON.parse(sessionStorage.getItem('projets')) || [];
        var FindID = typeof (storage[key]);
        //console.log('FIND ', FindID);
        var user = JSON.parse(this.allprojets.getLocal().getItem('user')) || [];
        if (user.length >= 0) {
            this.unconnected = false;
        }
        if (FindID === 'undefined') {
            this.router.navigate(['/']);
            return;
        }
        var req = this.allprojets.getOneProjet(id);
        this.allprojets.subjet.subscribe(function (res) {
            //console.log('voila', res);
        });
        //console.log('notre req', req);
        this.titre = req.titre;
        this.auteur = req.auteur;
        this.dates = req.dates;
        this.budget = req.budget;
        this.type = req.titre;
        this.categorie = req.categorie;
        this.devis = req.devis;
        this.description = req.description;
        this.relatif = req.relatif;
        this.competences = req.competences;
        this.allprojets.getCurrentRec(id).then(function (val) {
            //console.log('notre recruteur ', val);
            _this.recruteur = val;
        });
        this.devisFreeAll(id);
        this.disables();
        //console.log('bloblbo ', $('.col-right-connect').height());
        $('#click').on('click', function () {
            _this.router.navigate(['/', 'signin']);
            $('#popup').modal('hide');
        });
    };
    OneprojetComponent.prototype.devisFreeAll = function (id) {
        var _this = this;
        this.allprojets.getDevisFree(id).then(function (rx) {
            _this.devisFree = rx;
            //console.log('devis free ', rx);
        });
    };
    OneprojetComponent.prototype.create = function () {
        $('#popup').modal('hide');
    };
    OneprojetComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var user = new Loger(form.value.email, form.value.password);
        this.allprojets.login(user).then(function (rep) {
            if (rep.status === false) {
                _this.error = true;
                return;
            }
            else {
                _this.error = false;
                _this.session.setSession(rep);
                _this.avatar = rep[0].avatar;
                _this.name = rep[0].userName;
                _this.Auth = _this.Auths.connected();
                $('#popup').modal('hide');
            }
        });
    };
    OneprojetComponent.prototype.disables = function () {
        var status = JSON.parse(this.allprojets.getLocal().getItem('user')) || [];
        if (status.length >= 1) {
            var use = status[0].status;
            if (use !== 'free') {
                this.disabel = true;
            }
        }
    };
    OneprojetComponent.prototype.Getdevis = function () {
        var user = this.Auths.Auth;
        if (user === false) {
            var pop = $('#popup').modal('show');
        }
        else {
            var status_1 = JSON.parse(this.allprojets.getLocal().getItem('user'))[0].status;
            if (status_1 !== 'free') {
                return;
            }
            $('#modalDevis').modal('show');
        }
    };
    OneprojetComponent.prototype.onSubmits = function (form) {
        var _this = this;
        this.inactive = true;
        //console.log('les données ', form.value, 'idProj ', this.idProj);
        var idUser = JSON.parse(this.allprojets.getLocal().getItem('user'))[0].id;
        var devis = new Devis(form.value.prix, form.value.duree + ' ' + form.value.temps, form.value.note, this.idProj, idUser);
        this.allprojets.setDevis(devis).then(function (response) {
            _this.inactive = false;
            if (response.res === false) {
                _this.warn = true;
                _this.message = 'Désolé, tu as dèjà envoyé un devis pour ce projet !';
            }
            else {
                _this.warn = false;
                _this.message = '';
                setTimeout(function () {
                    $('#modalDevis').modal('hide');
                    _this.devisFreeAll(_this.idProj);
                }, 1000);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], OneprojetComponent.prototype, "avatar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], OneprojetComponent.prototype, "Auth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], OneprojetComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], OneprojetComponent.prototype, "devisFree", void 0);
    OneprojetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oneprojet',
            template: __webpack_require__(/*! ./oneprojet.component.html */ "./src/app/oneprojet/oneprojet.component.html"),
            styles: [__webpack_require__(/*! ./oneprojet.component.css */ "./src/app/oneprojet/oneprojet.component.css")]
        }),
        __metadata("design:paramtypes", [_allprojets_service__WEBPACK_IMPORTED_MODULE_0__["AllprojetsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _AuthService__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _set_session_service__WEBPACK_IMPORTED_MODULE_4__["SetSessionService"]])
    ], OneprojetComponent);
    return OneprojetComponent;
}());

var Loger = /** @class */ (function () {
    function Loger(email, password) {
        this.email = email;
        this.password = password;
    }
    return Loger;
}());

var Devis = /** @class */ (function () {
    function Devis(prix, temps, note, idP, idUser) {
        this.prix = prix;
        this.temps = temps;
        this.note = note;
        this.idP = idP;
        this.idUser = idUser;
    }
    return Devis;
}());



/***/ }),

/***/ "./src/app/pages.service.ts":
/*!**********************************!*\
  !*** ./src/app/pages.service.ts ***!
  \**********************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 6; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 6) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 6;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/popup-windown/popup-windown.component.css":
/*!***********************************************************!*\
  !*** ./src/app/popup-windown/popup-windown.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageCrop {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 99;\r\n    background: #00000031\r\n}\r\n\r\n.xx {\r\n    display: none;\r\n}\r\n\r\n#setPhoto {\r\n    margin: auto !important;\r\n    width: 300px;\r\n    height: 300px;\r\n    background: #fff0;\r\n    margin-top: 10ex !important;\r\n}\r\n\r\n.cropper-container {\r\n    width: auto !important\r\n}\r\n\r\n.cropper-modal {\r\n    background-color: #0000 !important;\r\n}"

/***/ }),

/***/ "./src/app/popup-windown/popup-windown.component.html":
/*!************************************************************!*\
  !*** ./src/app/popup-windown/popup-windown.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"xx\">\n    <div id=\"setPhoto\">\n        <div style=\"position: relative;\">\n            <img style=\"width: 100%;height: 300px\" name=\"picture\" id=\"picture\" src=\"\">\n            <div style=\"text-align: center\">\n                <button class=\"ui green button select\">Valider cette image</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/popup-windown/popup-windown.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/popup-windown/popup-windown.component.ts ***!
  \**********************************************************/
/*! exports provided: PopupWindownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupWindownComponent", function() { return PopupWindownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupWindownComponent = /** @class */ (function () {
    function PopupWindownComponent() {
    }
    PopupWindownComponent.prototype.ngOnInit = function () {
    };
    PopupWindownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup-windown',
            template: __webpack_require__(/*! ./popup-windown.component.html */ "./src/app/popup-windown/popup-windown.component.html"),
            styles: [__webpack_require__(/*! ./popup-windown.component.css */ "./src/app/popup-windown/popup-windown.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopupWindownComponent);
    return PopupWindownComponent;
}());



/***/ }),

/***/ "./src/app/profil-detail/profil-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/profil-detail/profil-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".field {\r\n    width: 70% !important;\r\n}\r\n\r\n.dropdown.item {\r\n    background: #6666662e !important;\r\n    border-radius: 0px 5px 5px 0;\r\n    width: 127px;\r\n    text-align: center;\r\n    display: -ms-grid;\r\n    display: grid;\r\n}"

/***/ }),

/***/ "./src/app/profil-detail/profil-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/profil-detail/profil-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"succes--\">\n    <div class=\"ui positive message\">\n        <i class=\"close icon\"></i>\n        <div class=\"header\"> {{headInfos}} </div>\n        <p> {{footerInfos}} </p>\n    </div>\n</div>\n<div class=\"row\" style=\"margin:0;background: #f8f8f9;\">\n    <div class=\"large-4 column col-info-warn\">\n        <!-- profil user component -->\n        <app-profil-user [message]=\"message\" [head]=\"head\" [color]=\"color\"></app-profil-user>\n    </div>\n    <div class=\"large-8 column\" style=\"background: #ffffff;padding-bottom:1ex;padding-top: 3ex\">\n        <form class=\"ui form\" (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\n            <div class=\"row\">\n                <div class=\"large-12 column\">\n                    <div class=\"fields\">\n                        <div class=\"field\">\n                            <label>Ton Titre professionnel</label>\n                            <input type=\"text\" name=\"titre\" placeholder=\"Quel est ton titre professionnel ?\" ngModel required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"large-12 column\">\n                    <div class=\"fields\">\n                        <div class=\"field\">\n                            <label>Ton prix par heure ou jour</label>\n                            <!-- <div style=\"display: inline-flex\">\n                                <input style=\"border-radius: 0px\" type=\"number\" min=\"1\" max=\"9999\" placeholder=\"Par exemple: 5000Fcfa\" name=\"prix\" ngModel required>\n                                <div class=\"ui dropdown item\">\n                                    <font> par {{price}} </font> <i class=\"dropdown icon\"></i>\n                                    <div class=\"menu\">\n                                        <a class=\"item\" (click)=\"prices($event)\">jour</a>\n                                        <a class=\"item\" (click)=\"prices($event)\">heure</a>\n                                    </div>\n                                </div>\n                            </div> -->\n                            <!--  -->\n                            <div class=\"ui right labeled input\" style=\"width: 70%\">\n                                <input type=\"number\" min=\"1\" max=\"9999\" placeholder=\"Par exemple: 5000Fcfa\" name=\"prix\" ngModel required>\n                                <div class=\"ui dropdown label\">\n                                  <div class=\"text unite\">Jour</div>\n                                  <i class=\"dropdown icon\"></i>\n                                  <div class=\"menu\">\n                                    <div class=\"item\">Heure</div>\n                                    <div class=\"item\">Semaine</div>\n                                    <div class=\"item\">Mois</div>\n                                    <div class=\"item\">Jour</div>\n                                  </div>\n                                </div>\n                              </div>\n\n                            <!--  -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"large-12 column\">\n                    <div class=\"field\">\n                        <label>Quelles sont tes competences (4 maxi)?</label>\n                        <div class=\"ui fluid multiple search selection dropdown\">\n                            <input #max type=\"hidden\" name=\"maxCount\" [ngModel]=\"max.value\" required>\n                            <i class=\"dropdown icon\"></i>\n                            <div class=\"default text\">Rien du tout</div>\n                            <div class=\"menu\">\n                                <div *ngFor=\"let competences of competence\" class=\"item\" [attr.data-value]=\"competences.competence\" [attr.data-text]=\"competences.competence\"> {{competences.competence}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"large-12 column\" style=\"margin-top: 11px\">\n                    <div class=\"field\">\n                        <label>Categorie</label>\n                        <div class=\"ui selection dropdown\">\n                            <input #cat type=\"hidden\" name=\"categorie\" [ngModel]=\"cat.value\" required>\n                            <i class=\"dropdown icon\"></i>\n                            <div class=\"default text\">Rien du tout</div>\n                            <div class=\"menu\">\n                                <div *ngFor=\"let cat of categorie\" class=\"item\" [attr.data-value]=\"cat.id\">{{cat.categorie}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"large-12 column\" style=\"margin-top: 11px\">\n                    <b> <label>A propos de toi</label> </b>\n                    <div style=\"margin-top:5px\">\n                        <div id=\"editor\">\n                        </div>\n                        <div class=\"ui pointing red basic label\" *ngIf=\"apropos\"> Dis quelques chose à propos de toi </div>\n                    </div>\n                </div>\n                <div class=\"large-12 column\" style=\"margin-top: 1em\">\n                    <div class=\"fields\">\n                        <div class=\"field\">\n                            <label>Ton experience</label>\n                            <input type=\"number\" min=\"0\" placeholder=\"Combien d'année d'experience as-tu ?\" style=\"width: 70%\" name=\"experience\" ngModel required>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <button class=\"ui green button\" [disabled]=\"form.invalid\">Enregistrer les changements</button>\n            </div>\n        </form>\n    </div>\n</div>\n\n<!-- popup image -->\n<app-popup-windown></app-popup-windown>\n<!-- fin -->"

/***/ }),

/***/ "./src/app/profil-detail/profil-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profil-detail/profil-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfilDetailComponent, Profiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilDetailComponent", function() { return ProfilDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return Profiler; });
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilDetailComponent = /** @class */ (function () {
    function ProfilDetailComponent(service) {
        this.service = service;
        this.price = 'heure';
    }
    ProfilDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('.ui.selection, .dropdown.item');
        $('.ui.dropdown').dropdown()
            .dropdown({
            maxSelections: 4
        });
        this.service.getCompetence().then(function (response) {
            _this.competence = response;
        });
        this.service.getCategorie().then(function (res) {
            _this.categorie = res;
        });
        var options = {
            placeholder: 'Dis ce que tu peux offrir à tes clients.',
            theme: 'snow'
        };
        this.quill = new Quill('#editor', options);
        $('.btn-change-photo').on('click', function () {
            $('.photo').click();
        });
    };
    ProfilDetailComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var texte = $('.ql-editor');
        var textes = texte[0].innerHTML;
        var word = texte[0].innerText;
        if (word.length <= 1) {
            this.apropos = true;
            return;
        }
        this.apropos = false;
        var editor_content = this.quill.container.innerHTML;
        var email = JSON.parse(this.service.getLocal().getItem('user'))[0].email;
        var profil = new Profiler(form.value.titre, form.value.prix + ' Fcfa /' + $('.unite').html(), form.value.maxCount, form.value.categorie, form.value.experience, textes, email);
        this.service.saveForm2(profil).then(function (rep) {
            if (rep.percent) {
                /* Je fais le traitement de la barre de prog pour la mettre à jour */
                _this.headInfos = 'Mis-à-jour reussi';
                _this.footerInfos = 'Vos informations ont été mis-à-jour !';
                $.amaran({
                    'message': 'Tu as modifié tes infos',
                    'position': 'bottom right',
                    'duration': 10000
                });
                $('.succes--').fadeIn().fadeOut(10000);
                //console.log('yess on est là ', rep);
                var maj = JSON.parse(_this.service.getLocal().getItem('user'));
                var perc = maj[0].percent = rep.percent;
                _this.service.getLocal().setItem('user', JSON.stringify(maj));
                var req = _this.service.setLdBar();
                var t = req.percent;
                _this.head = req.head;
                _this.message = req.message;
                _this.color = req.color;
                $('#bar').progress({
                    percent: t
                });
            }
        });
    };
    ProfilDetailComponent.prototype.prices = function (elm) {
        //console.log('click ', elm.srcElement.innerHTML);
        this.price = elm.srcElement.innerHTML;
    };
    ProfilDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profil-detail',
            template: __webpack_require__(/*! ./profil-detail.component.html */ "./src/app/profil-detail/profil-detail.component.html"),
            styles: [__webpack_require__(/*! ./profil-detail.component.css */ "./src/app/profil-detail/profil-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_allprojets_service__WEBPACK_IMPORTED_MODULE_0__["AllprojetsService"]])
    ], ProfilDetailComponent);
    return ProfilDetailComponent;
}());

var Profiler = /** @class */ (function () {
    function Profiler(titre, prix, competence, categorie, experience, texte, email) {
        this.titre = titre;
        this.prix = prix;
        this.competence = competence;
        this.categorie = categorie;
        this.experience = experience;
        this.texte = texte;
        this.email = email;
    }
    return Profiler;
}());



/***/ }),

/***/ "./src/app/profil-free/profil-free.component.css":
/*!*******************************************************!*\
  !*** ./src/app/profil-free/profil-free.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-actions-user {\r\n    display: flex;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0\r\n}\r\nbody {\r\n    \r\n    background: #9e9e9e33;\r\n}\r\n*:focus {\r\n    outline: none !important;\r\n    border: 0 !important;\r\n}\r\n.div-close {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 37px;\r\n    padding: 1ex;\r\n    display: flex;\r\n    z-index: 2000;\r\n    cursor: pointer;\r\n}\r\n.viewTuto {\r\n    background-color: #3de426 !important;\r\n    border-bottom: 4px solid #229c22;\r\n}\r\n.viewTuto :hover {\r\n    background: #25a816 !important;\r\n}\r\n.col-instruction div {\r\n    text-align: center\r\n}\r\n.div-close span {\r\n    display: flex;\r\n    margin: auto;\r\n    margin-right: 20px;\r\n    font-size: 15px;\r\n    color: white\r\n}\r\n.div-close i {\r\n    color: white !important;\r\n    font-size: 26px;\r\n }\r\n#monH {\r\n    margin-top: -6ex !important;\r\n    margin-left: 4ex !important;\r\n    font-size: 25pt;\r\n}\r\n.col-disp {\r\n    font-size: 16pt;\r\n    text-align: center;\r\n}\r\n.bkHeader {\r\n    background: #9E9E9E !important;\r\n    height: 77px;\r\n}\r\n.pane-right .row div:first-of-type {\r\n    background-color: #fff\r\n}\r\n.sub-list-actions-user {\r\n    margin: auto;\r\n    width: 90%;\r\n    background: #fefefe;\r\n}\r\n.col-img-scope {\r\n    background: url('black.jpg') center no-repeat !important;\r\n    background-size: 37% !important\r\n}\r\n.ui.bulleted.list div {\r\n    text-align: left !important;\r\n    line-height: 5ex;\r\n}\r\n.items-user {\r\n    padding: 1ex !important;\r\n    text-align: center;\r\n    opacity: 0.3;\r\n}\r\n.activate {\r\n    border-bottom: 2px solid #196d0f !important;\r\n    background: hsla(0, 0%, 85%, 0.34);\r\n    opacity: 0.9;\r\n}\r\n.last-action {\r\n    padding: 3ex;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n#texte-hole {\r\n    color: #fff;\r\n    text-align: center;\r\n    margin-top: -8em;\r\n    width: 300px;\r\n    margin-left: -7ex;\r\n}\r\n#texte-hole p {\r\n    text-align: center;\r\n    color: #fff;\r\n    font-size: 13pt\r\n}\r\n#Tuto {\r\n    width: 200px !important;\r\n    height: 200px !important;;\r\n    border-radius: 50% !important;\r\n    border: 1px solid #fff;\r\n    box-shadow: rgba(0, 0, 0, 0.64) 0px 0px 0px 100vmax;\r\n    pointer-events: none;\r\n    background: transparent;\r\n    top: 16em;\r\n    transition: all .2s;\r\n    position: fixed;\r\n    left: 149px;\r\n}\r\n.last-action span {\r\n    font-size: 15pt\r\n}\r\n.middle-item {\r\n    border-left: 2px solid#66666617;\r\n    border-right: 2px solid #66666617;\r\n}\r\n.items-use {\r\n    display: inline-flex;\r\n}\r\n.items-use h3 {\r\n    margin: 13px !important;\r\n}\r\n.transition,\r\ninput[type=radio]:after,\r\ninput[type=checkbox][type=radio]:after,\r\ninput[type=checkbox]:after {\r\n    transition: all 0.25s cubic-bezier(0.75, 0.01, 0.48, 2);\r\n}\r\n.bgTransition,\r\ninput[type=radio]:before,\r\ninput[type=checkbox][type=radio]:before,\r\ninput[type=checkbox]:before {\r\n    transition: all 0.25s ease-in-out;\r\n}\r\ninput[type=radio],\r\ninput[type=checkbox] {\r\n    position: relative;\r\n}\r\ninput[type=radio]:before,\r\ninput[type=radio]:after,\r\ninput[type=checkbox]:before,\r\ninput[type=checkbox]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n}\r\ninput[type=radio]:before,\r\ninput[type=checkbox]:before {\r\n    height: 100%;\r\n}\r\ninput[type=radio][type=radio],\r\ninput[type=checkbox][type=radio] {\r\n    border-radius: 30px;\r\n}\r\ninput[type=radio][type=radio]:before,\r\ninput[type=checkbox][type=radio]:before {\r\n    width: 100%;\r\n    border-radius: 30px;\r\n    background-color: #2c3f52;\r\n    box-shadow: 0 0 0 1px #2c3f52;\r\n}\r\ninput[type=radio][type=radio]:after,\r\ninput[type=checkbox][type=radio]:after {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 30px;\r\n    background-color: #15202a;\r\n    -webkit-transform: scale(0, 0);\r\n    transform: scale(0, 0);\r\n}\r\ninput[type=radio][type=radio]:checked:after,\r\ninput[type=checkbox][type=radio]:checked:after {\r\n    -webkit-transform: scale(0.75, 0.75);\r\n    transform: scale(0.75, 0.75);\r\n}\r\ninput[type=radio][type=radio]:checked:before,\r\ninput[type=checkbox][type=radio]:checked:before {\r\n    background-color: #85ff7a;\r\n    box-shadow: 0 0 0 1px #85ff7a;\r\n}\r\ninput[type=radio][type=checkbox]:before,\r\ninput[type=checkbox][type=checkbox]:before {\r\n    width: 200%;\r\n    background-color: #2c3f52;\r\n    box-shadow: 0 0 0 1px #2c3f52;\r\n    -webkit-transform: translate(-25%, 0);\r\n    transform: translate(-25%, 0);\r\n    border-radius: 30px;\r\n}\r\ninput[type=radio][type=checkbox]:after,\r\ninput[type=checkbox][type=checkbox]:after {\r\n    width: 80%;\r\n    height: 80%;\r\n    margin-top: 10%;\r\n    margin-left: 10%;\r\n    background-color: #15202a;\r\n    border-radius: 30px;\r\n    -webkit-transform: translate(60%, 0);\r\n    transform: translate(60%, 0);\r\n}\r\ninput[type=radio][type=checkbox]:checked:after,\r\ninput[type=checkbox][type=checkbox]:checked:after {\r\n    -webkit-transform: translate(-60%, 0);\r\n    transform: translate(-60%, 0);\r\n}\r\ninput[type=radio][type=checkbox]:checked:before,\r\ninput[type=checkbox][type=checkbox]:checked:before {\r\n    background-color: #85ff7a;\r\n    box-shadow: 0 0 0 1px #85ff7a;\r\n}\r\n* {\r\n    -webkit-tap-highlight-color: transparent;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n.input {\r\n    display: block;\r\n    margin: 36px;\r\n}\r\ninput[type=radio],\r\ninput[type=checkbox] {\r\n    cursor: pointer;\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n.radio,\r\n.check {\r\n    position: absolute;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    top: 50%;\r\n    left: 50%;\r\n}\r\n.radio {\r\n    margin-left: -36px;\r\n}\r\n.check {\r\n    margin-left: 36px;\r\n}"

/***/ }),

/***/ "./src/app/profil-free/profil-free.component.html":
/*!********************************************************!*\
  !*** ./src/app/profil-free/profil-free.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide></app-slide>\n<div class=\"bkHeader\">\n    <app-entete></app-entete>\n</div>\n<div class=\"row\" style=\"margin-top:12em\">\n    <h1 id=\"monH\">Mes informations</h1>\n    <div class=\"ui info message\" style='width:60%;margin-left: 9ex;'>\n        <i class=\"close icon\"></i>\n        <div class=\"header\">Edite ton profil</div>\n        <p>\n            Edite ton profil en parcourant chaque onglet en dessous. Ajoute ta ville, ta photo de profil, ce que tu sais faire, et dis à <b>quel prix par heure tu facture tes services</b>.\n        </p>\n    </div>\n    <div class=\"large-8 column\">\n        <div class=\"list-actions-user\">\n            <div class=\"sub-list-actions-user\">\n                <div class=\"row\" style=\"margin: 0;border-bottom: 2px solid #66666617;\">\n                    <!-- le outlet renvois à quelle Outlet je veux utiliser, ensuite vers quelle route aller, regarde dans app Module les children de la route tu veras le outlet associé. En dessous de cette page j'ai ajouté un router-outlet avec un attribut name qui se rattache aux enfants -->\n                    <div class=\"large-4 column items-user activate\" [routerLink]=\"[{outlets: { aux: ['details compte'] } }]\">\n                        <div class=\"items-use\">\n                            <i class=\"fas fa-list-alt\" style=\"font-size: 48px;\"></i>\n                            <h3>Detail du compte</h3>\n                        </div>\n                    </div>\n                    <div class=\"large-4 column middle-item items-user prf\" [routerLink]=\"[{outlets: { aux: ['details du profil'] } }]\">\n                        <div class=\"items-use\">\n                            <i class=\"fas fa-user-tie\" style=\"font-size: 48px;\"></i>\n                            <h3>Detail du profil</h3>\n                        </div>\n                    </div>\n                    <div class=\"large-4 column items-user\" [routerLink]=\"[{outlets: { aux: ['details du projet'] } }]\">\n                        <div class=\"items-use\">\n                            <i class=\"fas fa-file-signature\" style=\"font-size: 48px;\"></i>\n                            <h3>Detail de tes projets</h3>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"large-12 column\">\n                        <router-outlet name=\"aux\"></router-outlet>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"large-4 column\" style=\"padding-right: 1.9375rem;\">\n        <div class=\"pane-right\">\n            <div class=\"row\">\n                <div class=\"large-12 column\">\n                    <h2 style=\"text-align: center;padding-bottom: 2ex;\">Es-tu disponible pour travailler ?</h2>\n                    <div style=\"position: relative;text-align: center\">\n                        <div class=\"check ok\" style=\"position: relative;margin-left: 0\">\n                            <span><input type=\"checkbox\" name=\"checkbox\" [checked]=\"positives\"></span>\n                        </div>\n                    </div>\n                    <div class=\"ui small message\" style=\"width: 90%;margin:auto\">\n                        Selectionne le bouton vert pour afficher un status <b>' Disponible '</b> sur ta fiche permettant aux clients potentiels et aux employeurs de communiquer avec toi.\n                    </div>\n                    <div class=\"last-action\" style=\"border-bottom: 1px solid rgba(102, 102, 102, 0.14);\">\n                        <span>Changer de mot de passe</span>\n                    </div>\n                    <div class=\"last-action\">\n                        <span>Je veux me deconnecter</span>\n                    </div>\n                </div>\n                <div class=\"large-12 column col-instruction\" style=\"margin-top: 3ex;background: #fff;padding: 3ex;    padding-left: 0;\n                padding-right: 0;\">\n                    <h2 style=\"margin: 0;text-align: center;margin-bottom: 13px;\">Tu n'es toujours pas visible sur le site ? </h2>\n                  \n                    <div style=\"padding-left: 5ex\">\n                         <h3>Verifies que tu as saisis les informations suivantes</h3>\n                        <div class=\"ui bulleted list\">\n                                <div class=\"item\"> Selectionne ta ville dans l'onglet <b>Détail du compte</b> </div>\n                                <div class=\"item\"> Saisis tous les infos qui te sont demandés dans l'onget <b>Détail du Profil</b> </div>\n                                <div class=\"item\">  Assurez-vous d'avoir cliquer sur le bouton <b>Enregistrer les changements </b> </div>\n                        </div>\n                        <div>\n                                <button class=\"waves-effect waves-button waves-float\" style=\"background-color: rgb(61, 228, 38);color: #fff\" (click)=\"tutoriel()\">Voir le tutoriel</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div style=\"margin-top: 3ex\">\n    <app-footer></app-footer>\n</div>\n<!-- Tuto modale -->\n        <div class=\"div-close\" *ngIf=\"modals\"  (click)=\"closer()\">\n            <span>Fermer cette fenetre</span> <i class=\"fas fa-times\" style=\"font-size: 48px;\"></i>\n        </div>\n<div class=\"ui modal Tuto\" id=\"Tuto\" >\n        <div id=\"texte-hole\">\n            <p style=\"margin-bottom: 0;\">\n               {{instruction}}\n            </p>\n            <i class=\"fas fa-angle-double-down\" style=\"font-size: 36pt\"></i>\n        </div>\n    </div>\n    <!-- fin -->"

/***/ }),

/***/ "./src/app/profil-free/profil-free.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profil-free/profil-free.component.ts ***!
  \******************************************************/
/*! exports provided: ProfilFreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilFreeComponent", function() { return ProfilFreeComponent; });
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilFreeComponent = /** @class */ (function () {
    function ProfilFreeComponent(component, routes, route, service) {
        this.component = component;
        this.routes = routes;
        this.route = route;
        this.service = service;
        this.propriety = [
            {
                time: 1000,
                texte: 'Click sur cet onglet pour saisir les détails de ton compte',
                left: '10%'
            },
            {
                time: 5000,
                texte: 'Click sur cet onglet pour saisir les détails de ton profil',
                left: '30%'
            },
            {
                time: 15000,
                texte: 'Click sur cet onglet pour voir les projets auxquelles tu as postulés',
                left: '45%'
            }
        ];
    }
    ProfilFreeComponent.prototype.tutoriel = function () {
        var _this = this;
        setTimeout(function () {
            _this.modals = true;
            window.scrollTo(0, 0);
            $('#Tuto')
                .modal('setting', 'closable', false)
                .modal('behavior name', 'refresh')
                .modal('show');
            $('body').css('overflow', 'hidden');
            window.scrollTo(0, 0);
        }, 3000);
        this.x = setInterval(function () {
            clearInterval(_this.x);
            _this.tutoriel();
        }, 20000);
        var _loop_1 = function (prop) {
            setTimeout(function () {
                $('.Tuto').css('left', prop.left);
                _this.instruction = prop.texte;
            }, prop.time);
        };
        for (var _i = 0, _a = this.propriety; _i < _a.length; _i++) {
            var prop = _a[_i];
            _loop_1(prop);
        }
    };
    ProfilFreeComponent.prototype.closer = function () {
        var _this = this;
        $('.Tuto').modal('hide');
        this.modals = false;
        $('body').css('overflow', 'auto');
        clearInterval(this.x);
        var id = JSON.parse(this.service.getLocal().getItem('user'))[0].id;
        this.service.vueTuto({ 'id': id }).then(function (el) {
            var user = JSON.parse(_this.service.getLocal().getItem('user'));
            user[0].tuto = 1;
            sessionStorage.setItem("user", JSON.stringify(user));
        });
    };
    ProfilFreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tuto = JSON.parse(this.service.getLocal().getItem('user'))[0].tuto;
        typeof tuto === 'object' ? tuto = 0 : tuto = tuto;
        console.log('tuto ', tuto);
        if (parseInt(tuto) <= 0) {
            // this.tutoriel()
        }
        var p = this.propriety;
        $('.ui.dimmer').css('background-color', 'rgba(0, 0, 0, 0.62)');
        jQuery(window).trigger('resize').trigger('scroll');
        var disp = JSON.parse(this.service.getLocal().getItem('user'));
        var q = disp[0].dispo ? disp[0].dispo : false;
        this.positives = q;
        //console.log('positives ', q);
        if (!disp[0].dispo) {
            this.service.getLocal().setItem('user', JSON.stringify(disp));
        }
        $('.ui.checkbox')
            .checkbox();
        $('.items-user').on('click', function () {
            $('.items-user').each(function () {
                $(this).removeClass('activate');
            });
            $(this).addClass('activate');
        });
        $('.check').on('click', function () {
            var email = JSON.parse(_this.service.getLocal().getItem('user'))[0].email;
            //console.log('pos ', this.positives);
            if (_this.positives === false) {
                _this.positives = true;
                var user = JSON.parse(_this.service.getLocal().getItem('user'));
                $('.check').removeClass('ok');
                user[0].dispo = true;
                _this.service.getLocal().setItem('user', JSON.stringify(user));
                $.ajax({
                    type: 'POST',
                    url: 'http://localhost/php-challenge/dispo.php',
                    data: { email: email, dispo: 1 }
                });
            }
            else {
                _this.positives = false;
                $('.check').addClass('ok');
                $('.check').removeClass('ok');
                var users = JSON.parse(_this.service.getLocal().getItem('user'));
                users[0].dispo = false;
                //console.log('user ', users);
                _this.service.getLocal().setItem('user', JSON.stringify(users));
                $.ajax({
                    type: 'POST',
                    url: 'http://localhost/php-challenge/dispo.php',
                    data: { email: email, dispo: 0 }
                });
            }
        });
    };
    ProfilFreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profil-free',
            template: __webpack_require__(/*! ./profil-free.component.html */ "./src/app/profil-free/profil-free.component.html"),
            styles: [__webpack_require__(/*! ./profil-free.component.css */ "./src/app/profil-free/profil-free.component.css")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _allprojets_service__WEBPACK_IMPORTED_MODULE_0__["AllprojetsService"]])
    ], ProfilFreeComponent);
    return ProfilFreeComponent;
}());



/***/ }),

/***/ "./src/app/profil-recruteur/profil-recruteur.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/profil-recruteur/profil-recruteur.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#monH {\r\n    margin-top: -6ex !important;\r\n    margin-left: 4ex !important;\r\n    font-size: 25pt;\r\n}\r\n\r\n.profil-image {\r\n    height: 200px;\r\n    width: 200px;\r\n}\r\n\r\n.infos-user {\r\n    color: #666;\r\n    padding: 2ex !important;\r\n    background: #e8e8ec !important;\r\n    margin-top: 7px !important;\r\n}\r\n\r\nbody {\r\n    \r\n    background: #9e9e9e33;\r\n}\r\n\r\n.col-load {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    text-align: center;\r\n    text-align: center;\r\n    background: #6666660f;\r\n    padding: 9px;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.imageCrop {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 99;\r\n    background: #00000031\r\n}\r\n\r\n.xx {\r\n    display: none;\r\n}\r\n\r\n.ui.form>.fields:first-of-type {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    width: 100%;\r\n}\r\n\r\n#setPhoto {\r\n    margin: auto !important;\r\n    width: 300px;\r\n    height: 300px;\r\n    background: #fff0;\r\n}\r\n\r\n.cropper-container {\r\n    width: auto !important\r\n}\r\n\r\n.cropper-modal {\r\n    background-color: #0000 !important;\r\n}\r\n\r\n.list-actions-user {\r\n    display: flex;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0\r\n}\r\n\r\n#monH {\r\n    margin-top: -6ex !important;\r\n    margin-left: 4ex !important;\r\n    font-size: 25pt;\r\n}\r\n\r\n.col-disp {\r\n    font-size: 16pt;\r\n    text-align: center;\r\n}\r\n\r\n.bkHeader {\r\n    background: #9E9E9E !important;\r\n    height: 77px;\r\n}\r\n\r\n.sub-list-actions-user {\r\n    margin: auto;\r\n    width: 90%;\r\n    background: #fefefe;\r\n}\r\n\r\n.pane-right {\r\n    background: #fff\r\n}\r\n\r\n.items-user {\r\n    padding: 1ex !important;\r\n    text-align: center;\r\n    opacity: 0.2;\r\n}\r\n\r\n.backDark {\r\n    background: rgba(102, 102, 102, 0.0392156862745098)\r\n}\r\n\r\n.right-col {\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n}\r\n\r\n.inline-hd span {\r\n    font-size: 12pt;\r\n    padding-right: 11px;\r\n}\r\n\r\n.right-col i {\r\n    font-size: 30px;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.right-col span {\r\n    font-size: 18px;\r\n    margin-left: 7px;\r\n    color: #666;\r\n}\r\n\r\n.liste-projet {\r\n    position: relative;\r\n    padding: 39px;\r\n    padding-top: 7px;\r\n    padding-bottom: 15px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.activate {\r\n    border-bottom: 2px solid #196d0f !important;\r\n    background: hsla(0, 0%, 85%, 0.34);\r\n    opacity: 0.9;\r\n}\r\n\r\n.descript {\r\n    padding-right: 4ex;\r\n    text-align: justify;\r\n    margin-top: 2ex;\r\n}\r\n\r\n.last-action {\r\n    padding: 3ex;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.last-action span {\r\n    font-size: 15pt\r\n}\r\n\r\n.middle-item {\r\n    border-left: 2px solid#66666617;\r\n    border-right: 2px solid #66666617;\r\n}\r\n\r\n.items-use {\r\n    display: inline-flex;\r\n}\r\n\r\n.items-use h3 {\r\n    margin: 13px !important;\r\n}\r\n\r\n.transition,\r\ninput[type=radio]:after,\r\ninput[type=checkbox][type=radio]:after,\r\ninput[type=checkbox]:after {\r\n    transition: all 0.25s cubic-bezier(0.75, 0.01, 0.48, 2);\r\n}\r\n\r\n.bgTransition,\r\ninput[type=radio]:before,\r\ninput[type=checkbox][type=radio]:before,\r\ninput[type=checkbox]:before {\r\n    transition: all 0.25s ease-in-out;\r\n}\r\n\r\ninput[type=radio],\r\ninput[type=checkbox] {\r\n    position: relative;\r\n}\r\n\r\ninput[type=radio]:before,\r\ninput[type=radio]:after,\r\ninput[type=checkbox]:before,\r\ninput[type=checkbox]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n}\r\n\r\ninput[type=radio]:before,\r\ninput[type=checkbox]:before {\r\n    height: 100%;\r\n}\r\n\r\ninput[type=radio][type=radio],\r\ninput[type=checkbox][type=radio] {\r\n    border-radius: 30px;\r\n}\r\n\r\ninput[type=radio][type=radio]:before,\r\ninput[type=checkbox][type=radio]:before {\r\n    width: 100%;\r\n    border-radius: 30px;\r\n    background-color: #2c3f52;\r\n    box-shadow: 0 0 0 1px #2c3f52;\r\n}\r\n\r\ninput[type=radio][type=radio]:after,\r\ninput[type=checkbox][type=radio]:after {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 30px;\r\n    background-color: #15202a;\r\n    -webkit-transform: scale(0, 0);\r\n    transform: scale(0, 0);\r\n}\r\n\r\ninput[type=radio][type=radio]:checked:after,\r\ninput[type=checkbox][type=radio]:checked:after {\r\n    -webkit-transform: scale(0.75, 0.75);\r\n    transform: scale(0.75, 0.75);\r\n}\r\n\r\ninput[type=radio][type=radio]:checked:before,\r\ninput[type=checkbox][type=radio]:checked:before {\r\n    background-color: #85ff7a;\r\n    box-shadow: 0 0 0 1px #85ff7a;\r\n}\r\n\r\ninput[type=radio][type=checkbox]:before,\r\ninput[type=checkbox][type=checkbox]:before {\r\n    width: 200%;\r\n    background-color: #2c3f52;\r\n    box-shadow: 0 0 0 1px #2c3f52;\r\n    -webkit-transform: translate(-25%, 0);\r\n    transform: translate(-25%, 0);\r\n    border-radius: 30px;\r\n}\r\n\r\ninput[type=radio][type=checkbox]:after,\r\ninput[type=checkbox][type=checkbox]:after {\r\n    width: 80%;\r\n    height: 80%;\r\n    margin-top: 10%;\r\n    margin-left: 10%;\r\n    background-color: #15202a;\r\n    border-radius: 30px;\r\n    -webkit-transform: translate(60%, 0);\r\n    transform: translate(60%, 0);\r\n}\r\n\r\ninput[type=radio][type=checkbox]:checked:after,\r\ninput[type=checkbox][type=checkbox]:checked:after {\r\n    -webkit-transform: translate(-60%, 0);\r\n    transform: translate(-60%, 0);\r\n}\r\n\r\ninput[type=radio][type=checkbox]:checked:before,\r\ninput[type=checkbox][type=checkbox]:checked:before {\r\n    background-color: #85ff7a;\r\n    box-shadow: 0 0 0 1px #85ff7a;\r\n}\r\n\r\n* {\r\n    -webkit-tap-highlight-color: transparent;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.input {\r\n    display: block;\r\n    margin: 36px;\r\n}\r\n\r\ninput[type=radio],\r\ninput[type=checkbox] {\r\n    cursor: pointer;\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n.radio,\r\n.check {\r\n    position: absolute;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    top: 50%;\r\n    left: 50%;\r\n}\r\n\r\n.radio {\r\n    margin-left: -36px;\r\n}\r\n\r\n.check {\r\n    margin-left: 36px;\r\n}\r\n\r\n/* Style the tab */\r\n\r\n.tab {\r\n    overflow: hidden;\r\n    border: 1px solid #ccc;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n/* Style the buttons inside the tab */\r\n\r\n.tab button {\r\n    background-color: inherit;\r\n    float: left;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 14px 16px;\r\n    transition: 0.3s;\r\n    font-size: 17px;\r\n}\r\n\r\n/* Change background color of buttons on hover */\r\n\r\n.tab button:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n/* Create an active/current tablink class */\r\n\r\n.tab button.active {\r\n    background-color: #ccc;\r\n}\r\n\r\n/* Style the tab content */\r\n\r\n.tabcontent {\r\n    display: none;\r\n    padding: 1ex;\r\n    border-top: none;\r\n}"

/***/ }),

/***/ "./src/app/profil-recruteur/profil-recruteur.component.html":
/*!******************************************************************!*\
  !*** ./src/app/profil-recruteur/profil-recruteur.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide></app-slide>\n<div class=\"bkHeader\">\n    <app-entete></app-entete>\n</div>\n<div class=\"row\">\n    <div class=\"large-12 column\" style=\"margin-top: 12em\">\n        <h1 id=\"monH\">Mes informations</h1>\n        <div class=\"ui info message\" style='width:60%;margin-left: 9ex;'>\n            <i class=\"close icon\"></i>\n            <div class=\"header\">Editez votre profil</div>\n            <p>\n                <b>Editez votre profil en parcourant chaque onglet en dessous</b>. Ajoutez votre ville et votre photo de profil (facultatif). Publiez une offre de projet en precisant le prix et le delai pour réaliser la mission.\n            </p>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row\" style=\"margin:0;margin-left: 5em;margin-top: 4ex\">\n    <div class=\"large-8 column\">\n        <div class=\"list-actions-user\">\n            <div class=\"sub-list-actions-user\" style=\"width: 100%\">\n                <div class=\"row\" style=\"margin: 0;border-bottom: 2px solid #66666617;\">\n                    <div class=\"large-4 column items-user activate\" (click)=\"openTab($event, 'London')\">\n                        <div class=\"items-use\">\n                            <i class=\"fas fa-list-alt\" style=\"font-size: 48px;\"></i>\n                            <h3>Detail du compte</h3>\n                        </div>\n                    </div>\n                    <div class=\"large-4 column middle-item items-user\" (click)=\"openTab($event, 'Paris')\">\n                        <div class=\"items-use\">\n                            <i class=\"fas fa-edit\" style=\"font-size: 48px;\"></i>\n                            <h3>Publier un projet</h3>\n                        </div>\n                    </div>\n                    <div class=\"large-4 column items-user\" (click)=\"openTab($event, 'Tokyo')\">\n                        <div class=\"items-use\">\n                            <i class=\"fas fa-file-signature\" style=\"font-size: 48px;\"></i>\n                            <h3>Detail de vos projets</h3>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\" style=\"margin: 0\">\n                    <div class=\"large-4 column col-info-warn\">\n                        <app-profil-user [Recru]=\"rec\"></app-profil-user>\n                    </div>\n                    <div class=\"large-8 column\">\n                        <div id=\"London\" class=\"tabcontent\" style=\"display: block;\">\n                            <form (ngSubmit)=\"onSubmit(form)\" class=\"ui form\" style=\"display: grid;\" #form=\"ngForm\">\n                                <div class=\"field\">\n                                    <label>Votre nom</label>\n                                    <input type=\"text\" name=\"nom\" placeholder=\"Ton nom\" [ngModel]=\"noms\" required>\n                                </div>\n                                <div class=\"field\">\n                                    <label>Votre email</label>\n                                    <input type=\"email\" name=\"email\" placeholder=\"Ton émail\" [ngModel]=\"emails\" required>\n                                </div>\n                                <div class=\"field\">\n                                    <label>Votre ville</label>\n                                    <select name=\"ville\" ngModel required>\n                                        <option value=\"\">Quel est ta ville ?</option>\n                                        <option *ngFor=\"let ville of villes\" [value]=\"ville.Ville\">{{ville.Ville}}</option>\n                                      </select>\n                                </div>\n                                <button class=\"ui green button\" type=\"submit\" [disabled]=\"form.invalid || desactivate\" style=\"width: 20%\">Mettre à jour</button>\n                            </form>\n                        </div>\n\n                        <div id=\"Paris\" class=\"tabcontent\">\n                            <h2 style=\"margin-top:0\">Renseignez et publier votre projet</h2> <br>\n                            <div class=\"ui message\" *ngIf=\"error || success\" [ngClass]=\"{'red': error, 'green': success}\">{{message}}</div>\n                            <div class=\"row\">\n                                <div class=\"large-12 column\">\n                                    <form (ngSubmit)=\"sendProjet(form2)\" class=\"ui form\" style=\"display: grid\" #form2=\"ngForm\">\n                                        <div class=\"field\">\n                                            <label>Titre du projet</label>\n                                            <input type=\"text\" name=\"titre\" placeholder=\"Saisissez le titre\" ngModel required>\n                                        </div>\n                                        <div class=\"field\">\n                                            <label>Budget</label>\n                                            <input type=\"number\" name=\"budget\" placeholder=\"Votre prix\" min=\"1\" ngModel required>\n                                        </div>\n                                        <div class=\"field\">\n                                            <label>Compétences Réquises</label>\n                                            <div class=\"ui fluid multiple search selection dropdown\">\n                                                <input #compt type=\"hidden\" name=\"receipt\" [ngModel]=\"compt.value\" required>\n                                                <i class=\"dropdown icon\"></i>\n                                                <div class=\"default text\">Aucune compétence</div>\n                                                <div class=\"menu\">\n                                                    <div class=\"item\" *ngFor=\"let c of competence\" [attr.data-value]=\"c.competence\" [attr.data-text]=\"c.competence\"> {{c.competence}} </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"field\">\n                                            <label>Catégorie</label>\n                                            <select name=\"categories\" ngModel required>\n                                                  <option value=\"\">Aucune</option>\n                                                  <option *ngFor=\"let cat of categorie; let i = index\" [value]=\"i\">{{cat.categorie}}</option>\n                                                </select>\n                                        </div>\n                                        <div class=\"field\">\n                                            <label>Type de projet</label>\n                                            <select name=\"type\" ngModel required>\n                                                      <option value=\"\">Aucune</option>\n                                                      <option value=\"à distance\">à distance</option>\n                                                      <option value=\"Sur place\">sur place</option>\n                                                    </select>\n                                        </div>\n                                        <div class=\"field\">\n                                            <div [hidden]=\"shows== false\">\n                                                <div data-preset=\"energy\" id=\"ldbar\" class=\"ldBar label-center\" data-value=\"0\"></div>\n                                            </div>\n                                            <label>Pièce jointe</label>\n                                            <input #val type=\"file\" name=\"attachement\" [hidden]=\"true\" (change)=\"fileEvent($event)\" id=\"attachement\" [ngModel]=\"val.value\">\n                                            <i class=\"fas fa-paperclip attachement\" style=\"font-size: 48px;cursor: pointer;\"></i>\n                                            <div class=\"ui left pointing basic label\" [ngClass]=\"{'red': notif.color == 'red', 'green': notif.color == 'green' }\" *ngIf=\"notif.res == true\" style=\"position: absolute\">{{notif.message}}</div>\n                                        </div>\n                                        <div class=\"field\">\n                                            <label>Décrivez votre projet en détail</label>\n                                            <div style=\"margin-top:5px\">\n                                                <div id=\"editor\">\n                                                </div>\n                                                <div class=\"ui pointing red basic label\" *ngIf=\"apropos\"> Decrivez-votre projet en détail ! </div>\n                                            </div>\n                                        </div>\n                                        <button class=\"ui button\" type=\"submit\" [disabled]=\"form2.invalid || desactivated\" style=\"width: 30%\">Publier</button>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div id=\"Tokyo\" class=\"tabcontent\">\n                            <div *ngIf=\"!allProjets\">\n                                <h1>\n                                    Vous n'avez encore publié aucun projet\n                                </h1>\n                            </div>\n                            <div *ngIf=\"allProjets\">\n                                <h2>Vos projets</h2>\n                                <div class=\"row\">\n                                    <div class=\"large-12 column liste-projet\" *ngFor=\"let proj of allProjets; let last = last; let i = index\" [attr.ready]=\"last ? false: true\" [ngStyle]=\"{'background-color': getColors(proj.etat)}\">\n                                        <span>{{last ? myAlert(): ''}}</span>\n                                        <div class=\"ui text menu\" style=\"position: absolute;right: 0;\">\n                                            <div class=\"item\">\n                                                <div class=\"ui right dropdown item\">Plus <i class=\"dropdown icon\"></i>\n                                                    <div class=\"menu\">\n                                                        <div class=\"item\" *ngIf=\"proj.etat == 0\" (click)=\"terminer(proj.projetID, 1, proj.etat)\">Ce projet est accompli </div>\n                                                        <div class=\"item\" *ngIf=\"proj.etat == 1\" (click)=\"terminer(proj.projetID, 0, proj.etat)\">Projet non accompli</div>\n                                                        <div class=\"item\" *ngIf=\"proj.etat == 2\" (click)=\"terminer(proj.projetID, 0, 1)\">Retablir ce projet</div>\n                                                        <div class=\"item\" *ngIf=\"proj.etat == 1 || proj.etat == 0\" (click)=\"terminer(proj.projetID, 2, 2)\">Abandonner ce projet</div>\n                                                        <div class=\"item\" (click)=\"supprimer(proj.projetID)\">Supprimer ce projet</div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"inline-hd\" style=\"display: inline-flex;color:rgba(102, 102, 102, 0.7019607843137254);\">\n                                            <span style=\"margin: 0;font-weight: bold;\"> {{proj.titre}} </span>\n                                            <span>\n                                             | <div class=\"ui tiny label\"> {{proj.categories}} </div>\n                                          </span>\n                                            <span>\n                                             | <i class=\"fas fa-coins\"></i> {{proj.budget}}\n                                            </span>\n                                            <span> \n                        |  <i class=\"fas\" [ngClass]=\"{'fa-door-open': proj.etat == 0, 'fa-door-closed': proj.etat == 1, 'fa-window-close': proj.etat == 2}\"  style=\"font-size: 19px;\"></i>\n                                               <a class=\"ui left pointing basic label\" *ngIf=\"proj.etat == 0\">Projet ouvert</a>\n                                               <a class=\"ui left pointing basic label\" *ngIf=\"proj.etat == 1\">Projet fermé</a>\n                                               <a class=\"ui left pointing basic label\" *ngIf=\"proj.etat == 2\">Projet abandonné</a>\n                                            </span>\n                                        </div>\n\n                                        <p [innerHTML]=\"proj.description\" class=\"descript\">\n                                        </p>\n                                        <div style=\"padding-bottom: 8px;opacity: 0.5\">\n                                            <i class=\"fas fa-clock\" style=\"font-size: 18px;\"></i> <span> Publié {{proj.relative}} </span>\n                                        </div>\n                                        <div (click)=\"seen(proj.projetID, proj.titre ,i)\">\n                                            <a class=\"ui blue label\">consulter le projet</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"large-4 column\" style=\"background: #fff;padding: 3ex\">\n        <div class=\"row\">\n            <div class=\"large-12 column right-col\">\n                <i class=\"fas fa-key\"></i>\n                <span> \n                        Changer mon mot de passe\n                </span>\n            </div>\n            <div class=\"large-12 column right-col\" style=\"display: inline-flex;margin-top: 8ex;\">\n                <i class=\"fas fa-power-off\"></i>\n                <span> \n                       Je me deconnecte\n                    </span>\n            </div>\n        </div>\n    </div>\n</div>\n<!--modal 1  -->\n<div class=\"ui basic modal\" id=\"confirmation\">\n    <div class=\"ui icon header\">\n        {{header}}\n    </div>\n    <div class=\"content\">\n        <p>{{contexte}}</p>\n    </div>\n    <div class=\"actions\">\n        <div class=\"ui red basic cancel inverted button\">\n            <i class=\"remove icon\"></i> Non\n        </div>\n        <div class=\"ui green ok inverted button\" (click)=\"yes()\">\n            <i class=\"checkmark icon\"></i> Oui\n        </div>\n    </div>\n</div>\n\n\n<!--  -->\n<!-- fenetre modale -->\n<div class=\"ui modal\" id=\"modal\">\n    <i class=\"close icon\"></i>\n    <div class=\"header\">\n        {{variable}}\n    </div>\n    <div class=\"actions\">\n        <div class=\"ui black deny button\">\n            Non, je veux changer\n        </div>\n        <div class=\"ui positive right labeled icon button garder setName\">\n            Oui, je garde\n            <i class=\"checkmark icon\"></i>\n        </div>\n    </div>\n</div>\n<!-- fin -->\n<!-- popup image -->\n<app-popup-windown></app-popup-windown>\n<!-- fin -->"

/***/ }),

/***/ "./src/app/profil-recruteur/profil-recruteur.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/profil-recruteur/profil-recruteur.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfilRecruteurComponent, Form1, Form2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilRecruteurComponent", function() { return ProfilRecruteurComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form1", function() { return Form1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form2", function() { return Form2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilRecruteurComponent = /** @class */ (function () {
    function ProfilRecruteurComponent(service, routes) {
        this.service = service;
        this.routes = routes;
        this.rec = true;
        this.url = 'http://localhost/php-challenge/sendFile.php';
        this.notif = { res: false, message: '', color: '' };
        this.shows = false;
        this.tada = true;
        this.colors = [
            {
                id: 0,
                color: '#fff',
            },
            {
                id: 1,
                color: 'rgb(238, 255, 228)',
            },
            {
                id: 2,
                color: '#ffbdb8',
            }
        ];
    }
    ProfilRecruteurComponent.prototype.myAlert = function () {
        if (this.shouldDoIt) {
            $('.dropdown.item')
                .dropdown();
            this.shouldDoIt = false;
        }
    };
    ProfilRecruteurComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('.fluid.dropdown, .dropdown.item')
            .dropdown();
        $('select.dropdown')
            .dropdown();
        $('.btn-change-photo').on('click', function () {
            $('.photo').click();
        });
        jQuery(window).trigger('resize').trigger('scroll');
        $('.items-user').on('click', function () {
            $('.items-user').each(function () {
                $(this).removeClass('activate');
            });
            $(this).addClass('activate');
        });
        this.getVilles();
        $('.attachement').on('click', function () {
            $('#attachement').click();
        });
        var options = {
            placeholder: 'écrivez ici',
            theme: 'snow'
        };
        this.quill = new Quill('#editor', options);
        this.service.getCompetence().then(function (response) {
            _this.competence = response;
        });
        this.service.getCategorie().then(function (res) {
            _this.categorie = res;
        });
        this.bar1 = new ldBar('#ldbar');
        this.getMyprojet();
    };
    ProfilRecruteurComponent.prototype.seen = function (projetID, titres, i) {
        this.routes.navigate(['/', projetID, titres, i]);
    };
    ProfilRecruteurComponent.prototype.getMyprojet = function () {
        var _this = this;
        var id = JSON.parse(this.service.getLocal().getItem('user'))[0].id;
        this.service.getMyproj(id).then(function (rep) {
            _this.allProjets = rep.length > 0 ? rep : false;
            _this.shouldDoIt = true;
            //console.log('all proj ', rep);
        });
    };
    ProfilRecruteurComponent.prototype.terminer = function (id, etat, state) {
        $('#confirmation').modal('show');
        state = parseInt(state, 0);
        if (state === 0) {
            this.header = 'Fermer ce projet ?';
            this.contexte = 'Si vous fermez ce projet vous ne recevrez plus de devis';
        }
        else if (state === 1) {
            this.header = 'Réouvrir ce projet ?';
            this.contexte = 'Êtes-vous certain de réouvrir ce projet ?';
        }
        else {
            this.header = 'Abandonner ce projet ?';
            this.contexte = 'Êtes-vous certain d\'abandonner ce projet ?';
        }
        this.sendID = id;
        this.sendEtat = etat;
    };
    ProfilRecruteurComponent.prototype.yes = function () {
        var _this = this;
        var id = this.sendID;
        var etat = this.sendEtat;
        this.service.Terminerproj(id, etat).then(function (res) {
            _this.getMyprojet();
            _this.shouldDoIt = true;
        });
    };
    ProfilRecruteurComponent.prototype.getColors = function (sts) {
        var id = parseInt(sts, 0);
        var clored = this.colors.find(function (x) {
            return x.id === id;
        });
        if (typeof (id) === undefined || typeof (id) === 'undefined') {
            return '#fff';
        }
        else {
            return clored.color;
        }
    };
    ProfilRecruteurComponent.prototype.supprimer = function (id) {
        var _this = this;
        this.service.suppproj(id).then(function (res) {
            _this.getMyprojet();
        });
    };
    ProfilRecruteurComponent.prototype.fileEvent = function ($event) {
        var _this = this;
        //console.log('event ', $event);
        this.desactivated = true;
        this.shows = true;
        var files = $event.srcElement.files[0];
        this.file = files;
        var formdata = new FormData();
        formdata.append('fichier', this.file);
        $.ajax({
            type: 'POST',
            url: this.url,
            contentType: false,
            processData: false,
            data: formdata,
            xhr: function () {
                var xhr = $.ajaxSettings.xhr();
                var lb = _this.bar1;
                xhr.upload.onprogress = function (e) {
                    var percent = Math.round(e.loaded * 100 / e.total);
                    var bar = percent * 400 / 100;
                    var opp = percent * 0.9 / 100;
                    var loaded = Math.round((e.loaded / e.total) * 100);
                    lb.set(loaded);
                };
                return xhr;
            },
            success: function (res) {
                _this.desactivated = false;
                _this.notif.res = true;
                _this.notif.message = 'Votre fichier est prêt pour l\'envoie';
                _this.notif.color = 'green';
                setTimeout(function () {
                    _this.success = false;
                }, 10000);
                var fichier = JSON.parse(res);
                _this.filename = fichier.name;
                _this.desactivated = false;
            },
            error: function () {
                _this.desactivated = false;
                _this.notif.res = true;
                _this.notif.color = 'red';
                _this.notif.message = 'Votre fichier n\'a pas pu être importé !';
                _this.desactivated = false;
            }
        });
    };
    ProfilRecruteurComponent.prototype.getVilles = function () {
        var _this = this;
        this.service.getVille().then(function (v) {
            _this.villes = v;
            //console.log('villes ', v);
        });
        this.emails = JSON.parse(this.service.getLocal().getItem('user'))[0].email;
        this.noms = JSON.parse(this.service.getLocal().getItem('user'))[0].userName;
    };
    ProfilRecruteurComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.desactivate = true;
        //console.log('les valeurs ', form.value);
        var id = JSON.parse(this.service.getLocal().getItem('user'))[0].id;
        var forms = new Form1(form.value.nom, form.value.email, form.value.ville, id);
        this.service.postRec1(forms).then(function (res) {
            _this.desactivate = false;
            $.amaran({
                'message': 'Profil mis-à-jour !',
                'position': 'bottom right',
                'duration': 10000
            });
        });
    };
    ProfilRecruteurComponent.prototype.sendProjet = function (form2) {
        var _this = this;
        this.desactivated = true;
        var texte = $('.ql-editor');
        var textes = texte[0].innerHTML;
        var word = texte[0].innerText;
        if (word.length <= 1) {
            this.apropos = true;
            this.desactivated = false;
            return;
        }
        this.apropos = false;
        var editor_content = this.quill.container.innerHTML;
        var texte2 = $('.ql-editor');
        var textes2 = texte[0].innerHTML;
        var id = JSON.parse(this.service.getLocal().getItem('user'))[0].id;
        //console.log('envoie des données ', form2.value , 'files ', this.file);
        var projet = new Form2(id, form2.value.titre, form2.value.budget, form2.value.receipt, form2.value.categories, textes2, form2.value.type, form2.value.attachement ? this.filename : null);
        this.service.sendForm2(projet).then(function (response) {
            _this.success = true;
            _this.message = 'Vous avez publié un nouveau projet';
            _this.shows = false;
            setTimeout(function () {
                _this.success = false;
            }, 10000);
            $.amaran({
                'message': 'Votre sujet a été publié sur le site ! <i class="far fa-hand-peace" style="font-size: 18px;"></i>',
                'position': 'top right',
                'duration': 10000
            });
        });
    };
    ProfilRecruteurComponent.prototype.openTab = function (evt, cityName) {
        var i;
        var tabcontent;
        var tablinks;
        tabcontent = document.getElementsByClassName('tabcontent');
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none';
        }
        tablinks = document.getElementsByClassName('tablinks');
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '');
        }
        document.getElementById(cityName).style.display = 'block';
        evt.currentTarget.className += ' active';
    };
    ProfilRecruteurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profil-recruteur',
            template: __webpack_require__(/*! ./profil-recruteur.component.html */ "./src/app/profil-recruteur/profil-recruteur.component.html"),
            styles: [__webpack_require__(/*! ./profil-recruteur.component.css */ "./src/app/profil-recruteur/profil-recruteur.component.css")]
        }),
        __metadata("design:paramtypes", [_allprojets_service__WEBPACK_IMPORTED_MODULE_1__["AllprojetsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfilRecruteurComponent);
    return ProfilRecruteurComponent;
}());

var Form1 = /** @class */ (function () {
    function Form1(nom, email, ville, id) {
        this.nom = nom;
        this.email = email;
        this.ville = ville;
        this.id = id;
    }
    return Form1;
}());

var Form2 = /** @class */ (function () {
    function Form2(id, titre, prix, competence, categorie, description, type, file) {
        this.id = id;
        this.titre = titre;
        this.prix = prix;
        this.competence = competence;
        this.categorie = categorie;
        this.description = description;
        this.type = type;
        this.file = file;
    }
    return Form2;
}());



/***/ }),

/***/ "./src/app/profil-user/profil-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/profil-user/profil-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profil-image {\r\n    height: 200px;\r\n    width: 200px;\r\n}\r\n\r\n.infos-user {\r\n    color: #666;\r\n    padding: 2ex !important;\r\n    background: #e8e8ec !important;\r\n    margin-top: 7px !important;\r\n}\r\n\r\n.col-load {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    text-align: center;\r\n    text-align: center;\r\n    background: #6666660f;\r\n    padding: 9px;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.invisible {\r\n    display: none !important\r\n}\r\n\r\n.spinner div {\r\n    width: 20px;\r\n    height: 20px;\r\n    position: absolute;\r\n    left: -20px;\r\n    top: 40px;\r\n    background-color: #333;\r\n    border-radius: 50%;\r\n    -webkit-animation: move 4s infinite cubic-bezier(.2, .64, .81, .23);\r\n            animation: move 4s infinite cubic-bezier(.2, .64, .81, .23);\r\n}\r\n\r\n.loading {\r\n    position: relative;\r\n    overflow-x: hidden;\r\n    height: 200px;\r\n    background: #66666624;\r\n    width: 100%\r\n}\r\n\r\n.spinner div:nth-child(2) {\r\n    -webkit-animation-delay: 150ms;\r\n            animation-delay: 150ms;\r\n}\r\n\r\n.spinner div:nth-child(3) {\r\n    -webkit-animation-delay: 300ms;\r\n            animation-delay: 300ms;\r\n}\r\n\r\n.spinner div:nth-child(4) {\r\n    -webkit-animation-delay: 450ms;\r\n            animation-delay: 450ms;\r\n}\r\n\r\n@-webkit-keyframes move {\r\n    0% {\r\n        left: 0%;\r\n    }\r\n    75% {\r\n        left: 100%;\r\n    }\r\n    100% {\r\n        left: 100%;\r\n    }\r\n}\r\n\r\n@keyframes move {\r\n    0% {\r\n        left: 0%;\r\n    }\r\n    75% {\r\n        left: 100%;\r\n    }\r\n    100% {\r\n        left: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/profil-user/profil-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/profil-user/profil-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: grid\">\n    <div style=\"text-align: center;display: flex\" *ngIf=\"pic\">\n        <div class=\"profil-image\" style=\"margin: auto\" [ngStyle]=\"{'background-image': 'url(' + avatars + ')', 'background-size': 'cover'}\">\n\n        </div>\n    </div>\n    <div class=\"loading\" *ngIf=\"loading\">\n        <div class=\"spinner\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n    </div>\n    <input style=\"display: none\" class=\"photo\" type=\"file\" name=\"image\" (change)=\"onChange($event)\">\n    <div style=\"text-align: center\">\n        <button class=\"ui mini blue button btn-change-photo\" [disabled]=\"loading\" style=\"margin-top: 1ex;\n      width: 35%\">Changer ma photo</button>\n    </div>\n    <div [hidden]=\"Recru\">\n        <div class=\"label\" style=\"text-align: center;padding: 1ex;\n        margin-top: 8px;background: #9e9e9e14;\">Complete ton profil</div>\n        <div class=\"col-load\">\n            <div class=\"ui indicating progress\" id=\"bar\">\n                <div class=\"bar\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"ui icon message\" style=\"border-top: 1px solid#6666;border-radius: 0px;box-shadow: none;margin-top: 24px;margin: 0;\" [ngStyle]=\"{'background': color}\" [ngClass]=\"{'invisible': Recru}\">\n    <i class=\"inbox icon\"></i>\n    <div class=\"content\">\n        <div class=\"header\"> {{head}} </div>\n        <p> {{message}} </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profil-user/profil-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profil-user/profil-user.component.ts ***!
  \******************************************************/
/*! exports provided: ProfilUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilUserComponent", function() { return ProfilUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilUserComponent = /** @class */ (function () {
    function ProfilUserComponent(allprojet, routes) {
        this.allprojet = allprojet;
        this.routes = routes;
        this.link = 'http://localhost/php-challenge/src/avatars/';
        this.pic = true;
    }
    ProfilUserComponent.prototype.ngOnInit = function () {
        this.allprojet.subjet.subscribe(function (res) {
            //console.log('les infos', res);
            if (res === false) {
            }
        });
        var inf = this.allprojet.infosUser;
        this.avatars = inf[0].avatar;
        this.allprojet.getInfosUser();
        this.allprojet.subjet.subscribe();
        this.allprojet.Geterror();
        this.getPercent();
    };
    ProfilUserComponent.prototype.getPercent = function () {
        var req = this.allprojet.setLdBar();
        //console.log('res ', req);
        var t = req.percent;
        this.head = req.head;
        this.message = req.message;
        this.color = req.color;
        $('#bar').progress({
            percent: t
        });
    };
    ProfilUserComponent.prototype.onChange = function ($event) {
        var _this = this;
        $('.xx').css({ 'display': 'flex', 'background-color': 'rgba(0, 0, 0, 0.33)', 'z-index': '999', 'position': 'absolute', 'left': '0', 'right': '0', 'top': 0, 'bottom': 0 });
        $(document).click(function () {
            $('.xx').css('display', 'none');
            $('#picture').attr('src', '');
        });
        $('#setPhoto').click(function (e) {
            e.stopPropagation();
        });
        $('.xx').css('height', $(document).height() + 'px');
        $(window).resize(function () {
            $('.xx').css('height', $(document).height() + 'px');
        });
        var file = $event.srcElement.files[0];
        var image = document.getElementById('picture');
        var pic = $('#picture');
        var url = window.URL.createObjectURL(file);
        $('#picture').attr('src', url);
        pic.cropper('destroy');
        var cropper = pic.cropper({
            ready: function () {
                $(this).cropper('getCroppedCanvas').toBlob(function (blob) {
                });
            }
        });
        $('.select').on('click', function () {
            _this.pic = false;
            _this.loading = true;
            setTimeout(function () {
                $('.xx').css('display', 'none');
                $('#picture').attr('src', '');
            }, 1000);
            $(_this).addClass('disabled');
            pic.cropper('getCroppedCanvas').toBlob(function (blob) {
                var formdata = new FormData();
                formdata.append('croppedImage', blob);
                _this.allprojet.sendBlob(formdata).then(function (response) {
                    var err = _this.allprojet.Geterror();
                    if (err) {
                        alert('erreur');
                        return;
                    }
                    var data = response;
                    $('.select').removeClass('disabled');
                    _this.avatars = _this.link + data.name;
                    var obj = JSON.parse(_this.allprojet.getLocal().getItem('user'));
                    obj[0].avatar = _this.link + data.name;
                    _this.allprojet.getLocal().setItem('user', JSON.stringify(obj));
                    var email = obj[0].email;
                    var status = obj[0].status;
                    _this.allprojet.updateAvatar(email, data.name, status).then(function (rep) {
                        //console.log('MAJ avatas ', rep);
                        setTimeout(function () {
                            _this.pic = true;
                            _this.loading = false;
                        }, 1000);
                    });
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfilUserComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfilUserComponent.prototype, "head", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfilUserComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfilUserComponent.prototype, "Recru", void 0);
    ProfilUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profil-user',
            template: __webpack_require__(/*! ./profil-user.component.html */ "./src/app/profil-user/profil-user.component.html"),
            styles: [__webpack_require__(/*! ./profil-user.component.css */ "./src/app/profil-user/profil-user.component.css")]
        }),
        __metadata("design:paramtypes", [_allprojets_service__WEBPACK_IMPORTED_MODULE_1__["AllprojetsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfilUserComponent);
    return ProfilUserComponent;
}());



/***/ }),

/***/ "./src/app/profil.model.ts":
/*!*********************************!*\
  !*** ./src/app/profil.model.ts ***!
  \*********************************/
/*! exports provided: Profil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profil", function() { return Profil; });
var Profil = /** @class */ (function () {
    function Profil(nom, email, ville, photo, first_Email) {
        this.nom = nom;
        this.email = email;
        this.ville = ville;
        this.photo = photo;
        this.first_Email = first_Email;
    }
    return Profil;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sect-proj {\r\n    width: 100%;\r\n    display: flex;\r\n    margin-top: 1em;\r\n}\r\n.col-model {\r\n    list-style: none;\r\n    margin: 0px !important;\r\n    float: right\r\n}\r\n.col-model li {\r\n   display: inline;\r\n   font-size: 20px;\r\n   padding: 8px;\r\n   cursor: pointer;\r\n}\r\n.col-model li.active {\r\n   background: #909fcc;\r\n   border-radius: 20px;\r\n   box-shadow: -3px 2px 8px 0px #010401;\r\n}\r\n.col-model li:hover {\r\n }\r\n.col-model li i {\r\n    color: #314a5f;\r\n }\r\n.col-model li:nth-of-type(1) {\r\n    margin-right: 10px\r\n }\r\nh2 {\r\n    font-size: 26pt;\r\n    color: #343a5e;\r\n    font-weight: bold;\r\n}\r\n.list-metier ul {\r\n    list-style: none !important;\r\n}\r\n.list-metier ul li {\r\n    line-height: 4ex;\r\n    font-size: 13pt;\r\n    color: #646475;\r\n}\r\n.scrollUsers {\r\n    display: flex;\r\n    background: #cccccc1c;\r\n    padding-bottom: 7ex;\r\n    margin-top: 7ex;\r\n}\r\n.footer-card {\r\n    padding: 1ex;\r\n    background: #6666660a;\r\n    text-align: center;\r\n}\r\n.footer-col-card {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0;\r\n    bottom: 0;\r\n    clear: both;\r\n}\r\n[hidden] {\r\n    display: none\r\n}\r\n.tab-project {\r\n    width: 90%;\r\n    margin: auto;\r\n}\r\n.col-free-append {\r\n    margin: auto;\r\n    width: 70%;\r\n    margin-top: 8ex;\r\n}\r\n@media(min-width: 1600px) {\r\n    .col-free-append {\r\n        width: 80% !important\r\n    }\r\n    .tab-project {\r\n        width: 80% !important;\r\n    }\r\n}\r\n@media(min-width: 1500px) {\r\n    .col-free-append {\r\n        width: 80% !important\r\n    }\r\n    .tab-project {\r\n        width: 80% !important;\r\n    }\r\n}\r\n@media(min-width: 1147px) {\r\n    .col-free-append {\r\n        width: 90%\r\n    }\r\n}\r\n.ui-widget-content span {\r\n    display: none !important;\r\n}\r\n@media (min-width: 1400px) {\r\n    .col-free-append {\r\n        width: 80%;\r\n    }\r\n    .tab-project {\r\n        width: 80%;\r\n    }\r\n}\r\n.haut {\r\n    margin-top: 8em\r\n}\r\n@media (min-width: 1500px) {\r\n    .col-free-append {\r\n        width: 90%;\r\n    }\r\n    .tab-project {\r\n        width: 90%;\r\n    }\r\n}\r\n.view-next-arrow {\r\n    display: flex;\r\n    cursor: pointer;\r\n}\r\n.view-next-arrow p {\r\n    font-size: 17px;\r\n    padding-right: 8px;\r\n    color: #34d21e;\r\n    margin: 0;\r\n    /* padding: 0; */\r\n    margin-top: 17px;\r\n}\r\n.view-next-arrow i {\r\n    font-size: 28px;\r\n    color: #3de426;\r\n    margin-top: 15px;\r\n}\r\n.col-liste {\r\n    height: 400px;\r\n}\r\n.job-listing-footer ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.job-listing-footer ul li {\r\n    display: inline-block;\r\n    margin-right: 9px;\r\n}\r\n.job-listing-footer ul li i {\r\n    margin-right: 3px;\r\n    color: #777;\r\n}\r\n.job-list-detail {\r\n    flex: 1;\r\n    display: flex\r\n}\r\n.show {\r\n    display: none\r\n}\r\n.view-job-btn {\r\n    position: relative;\r\n    display: inline-block;\r\n    transition: all 0.3s;\r\n}\r\n.job-list {\r\n    padding: 30px 35px;\r\n    display: flex;\r\n}\r\n.job-listing-footer {\r\n    background-color: transparent;\r\n    padding: 0;\r\n    margin-top: 3px;\r\n    border-radius: 0 0 4px 4px;\r\n    position: relative;\r\n}\r\n.gray {\r\n    background: rgb(235, 235, 235)\r\n}\r\n.job-listing-company-logo {\r\n    max-width: 50px;\r\n    margin-right: 30px;\r\n    top: 0;\r\n    flex: 1;\r\n    position: relative;\r\n}\r\n.job-listing-title {\r\n    margin: 0 !important;\r\n    font-size: 17px;\r\n    line-height: 28px; \r\n}\r\n.job-listing-description {\r\n    flex: 1;\r\n    padding-top: 3px;\r\n}\r\n.sub-list {\r\n    padding-left: 0;\r\n    padding-right: 0\r\n}\r\n.column:last-child:not(:first-child),\r\n.columns:last-child:not(:first-child) {\r\n    float: left !important;\r\n}\r\n.tab-tab-project {\r\n  \r\n}\r\n.tab-list-proj.ui.table thead th {\r\n    background: rgb(33, 64, 154) !important;\r\n    color: #fff\r\n}\r\n.page-- a:hover {\r\n    text-decoration: underline\r\n}\r\n.tab-list-proj.ui.table tbody tr td:first-of-type {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    line-height: 24px;\r\n}\r\n.tab-list-proj.ui.table tbody tr td h3 {\r\n    padding-top: 0 !important;\r\n    margin-top: 0;\r\n    font-weight: 1000;\r\n    color: darkblue;\r\n    margin-bottom: 0;\r\n}\r\n.time-pub {\r\n    display: inline-flex;\r\n    opacity: 0.5;\r\n}\r\n.time-pub i {\r\n    line-height: 25px;\r\n    padding-right: 1ex;\r\n}\r\n.budget h4 {\r\n    color: darkblue;\r\n}\r\n@media(max-width: 1506px) {\r\n    .ui.cards>.card .meta *, .ui.card .meta * {\r\n        font-size: 7pt !important; \r\n    }\r\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'sect-proj': true}\" class=\"viewProject\">\n    <div [ngClass]=\"{'tab-project': true}\">\n        <h3 style=\"font-size: 23pt;color: #595973\">Les derniers jobs en freelance</h3>\n        <div class=\"row\">\n            <div class=\"large-8 medium-8 small-12 column\" style=\"padding-left:0;margin-bottom: 12px;\">\n                <div class=\"ui icon input\" style=\"width: 50%;\">\n                    <input type=\"text\" placeholder=\"Rechercher un projet...\" [(ngModel)]=\"searchText\">\n                    <i class=\"inverted circular search link icon\" style=\"background-color: rgb(33, 64, 154) !important\"></i>\n                </div>   \n            </div>\n            <div class=\"large-4 medium-4 column\" style=\"margin-top: 11px;\">\n                <ul class=\"col-model\">\n                    <li [ngClass]=\"{'active': gride}\" (click)=\"gride = true\">\n                        <i class=\"fas fa-th-large\"></i>\n                        <span>\n                            Grille\n                        </span>\n                    </li>\n                    <li (click)=\"liste()\" [ngClass]=\" {'active': !gride}\">\n                        <i class=\"fas fa-th-list\"></i>\n                        <span>Liste</span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"tab-tab-project\"  [ngClass]=\" {'show': !gride} \">\n            <table class=\"ui blue table tab-list-proj\" style=\"margin-bottom:0;padding-bottom:0;border-bottom:none;border-radius: 0px;    border-top: 0.2em solid #ebebeb\">\n                <thead>\n                    <tr>\n                        <th>Missinon en Freelance</th>\n                        <th class=\"center aligned\">Type de mission</th>\n                        <th class=\"center aligned\">Categorie(s)</th>\n                        <th class=\"center aligned\">Devis</th>\n                        <th class=\"center aligned\">Budget</th>\n                    </tr>\n                </thead>\n                <div *ngIf=\"fakeDimmer\">\n                    <img class=\"ui wireframe image\" src=\"../assets/paragraph.png\" style=\"width: 100%;opacity: 0.2;\">\n                    <img class=\"ui wireframe image\" src=\"../assets/paragraph.png\" style=\"width: 100%;opacity: 0.2;margin-top: 3ex;padding-bottom: 3ex;\">\n                </div>\n                <tbody *ngIf=\"!fakeDimmer\">\n                    <tr *ngFor=\"let projet of pagedItems | filter: searchText; let i = index;\">\n                        <!-- Mission -->\n                        <td [ngStyle]=\"{background: getRibon(projet.etat).back}\">\n                            <div *ngIf=\"projet.etat !== '0'\" class=\"ui ribbon label\" [ngStyle]=\"{background: getRibon(projet.etat).couleur}\" style=\"width: 55%\" [innerHTML]=\"getRibon(projet.etat).texte\"></div>\n                            <h3 [routerLink]=\"[projet.id, projet.titre, i]\" style=\"cursor: pointer;outline:none\"> {{projet.titre}} </h3>\n                            <div class=\"time-pub\">\n                                <i class=\"far fa-clock\"></i>\n                                <span>{{projet.relatif}}</span>\n                            </div>\n\n                        </td>\n                        <!-- Type de projet -->\n                        <td class=\"center aligned\" [ngStyle]=\"{background: getRibon(projet.etat).back}\">\n                            <span>{{projet.type}}</span>\n                        </td>\n                        <!-- Categorie -->\n                        <td class=\"center aligned\" [ngStyle]=\"{background: getRibon(projet.etat).back}\">\n                            <span>\n                            <span> <a class=\"ui label\" [ngStyle]=\"{'background-color':projet.couleur, 'border-color': projet.couleur, 'color': '#fff'}\" >{{projet.categorie}}</a></span>\n                            </span>\n                        </td>\n                        <!-- Nombre de devis -->\n                        <td class=\"center aligned\" [ngStyle]=\"{background: getRibon(projet.etat).back}\">\n                            <span>\n                              <span>{{projet.devis}}</span>\n                            </span>\n                        </td>\n                        <!-- Budget par heure -->\n                        <td class=\"center aligned budget\" [ngStyle]=\"{background: getRibon(projet.etat).back}\">\n                            <span>\n                              <h4>{{projet.budget}} Fcfa/jour</h4>\n                            </span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <div *ngIf=\"pager.pages && pager.pages.length\" class=\"ui borderless menu\" style=\"margin-top:0;border-top:none;border-radius: 0px\">\n                <a class=\"item\" [ngClass]=\"{disabled:pager.currentPage === 1}\" (click)=\"setPage(1)\">Premiere page</a>\n                <a class=\"item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" (click)=\"setPage(page)\">{{page}}</a>\n                <a class=\"item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" (click)=\"setPage(pager.totalPages)\">Derniere page</a>\n            </div>\n        </div>\n        <!-- liste -->\n        <div class=\"row\" [ngClass]=\" {'show': gride} \" >\n            <div class=\"large-12 column sub-list\">\n                <div class=\"col-liste\">\n                    <div class=\"row\" style=\"margin: 0;background-color: #fff;border-radius: 4px;box-shadow: 0 2px 12px rgba(0,0,0,0.12);\">\n                        \n                        <div *ngFor=\"let projet of pagedItems; let i = index\" [id]=\"i%2\" class=\"large-12 column sub-list\" [ngClass]=\"{'gray': i%2 === 0}\">\n                            <div class=\"job-list\">\n                                <div class=\"job-list-detail\">\n                                    <div class=\"job-listing-company-logo\">\n                                        <i class=\"fas fa-briefcase\" style=\"font-size: 40px;\"></i>\n                                    </div>\n                                    <div class=\"job-listing-description\">\n                                        <h3 class=\"job-listing-title\">\n                                            {{projet.titre}}\n                                        </h3>\n                                        <div class=\"job-listing-footer\">\n                                            <ul>\n                                                <li>\n                                                    <i class=\"fas fa-user-tie\"></i>\n                                                    {{projet.auteur}}\n                                                </li>\n                                                <li>\n                                                    <i class=\"fas fa-map-marker-alt\"></i>\n                                                    {{projet.type}}\n                                                </li>\n                                                <li>\n                                                    <i class=\"fas fa-money-bill-alt\"></i>\n                                                    {{projet.budget}} Fcfa/jour\n                                                </li>\n                                                <li>\n                                                    <i class=\"fas fa-clock\"></i>\n                                                    {{projet.relatif}}\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                        <button class=\"medium ui button view-job-btn\" style=\"background-color: #3de426;color: #fff\" [routerLink]=\"[projet.id, projet.titre, i]\"> Consulter </button>\n\n                            </div>\n                        </div>\n                     \n                    </div>\n                </div>\n            </div>\n            <div class=\"large-12 column page--\" style=\"margin-top: 2ex\">\n                <div *ngIf=\"pager.pages && pager.pages.length\" style=\"margin-top:0;border-top:none;border-radius: 0px;cursor: pointer;\">\n                    <a class=\"item\" [ngClass]=\"{disabled:pager.currentPage === 1}\" (click)=\"setPage(1)\"><i class=\"fas fa-angle-double-left\" style=\"font-size: 24px;\"></i></a>\n                    <a class=\"item\" style=\"margin-right: 3ex;font-size: 14pt;margin-left: 3ex\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" (click)=\"setPage(page)\">{{page}}</a>\n\n                    <a class=\"item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" (click)=\"setPage(pager.totalPages)\"><i class=\"fas fa-angle-double-right\" style=\"font-size: 24px\"></i></a>\n                </div>\n            </div>\n        </div>\n        <!-- fin -->\n    </div>\n</div>\n\n<div style=\"display: flex;\" class=\"scrollUsers\">\n    <div class=\"col-free-append\" [ngClass]=\"{'haut':fakeDimmer}\" >\n        <h3 style=\"font-size: 23pt;color: #595973;margin-bottom: .75em;margin-top: 0;    padding-bottom: 0 !important;\n        margin-bottom: 0;\"> {{Titles}} </h3>\n        <div style=\"display: flex\">\n            <ul class=\"list-push-freelancers\">\n                <li class=\"active\" (click)=\"byRec()\"> <span>Freelancers recents </span> </li>\n                <li (click)=\"byExp()\"> <span>Les + experimentés</span> </li>\n                <li (click)=\"byQualif()\"> <span>Les + qualifiés</span></li>\n                <li (click)=\"byBoost()\"> <span>Les + Boostés</span></li>\n                <!-- <li> <span>Les recommandés</span></li>\n                <li> <span>Les commentés</span></li> -->\n            </ul>\n            <div class=\"view-next-arrow\" [routerLink]=\"['tous les freelancers']\">\n                <p>Voir tous les freelancers</p>\n                <i class=\"fas fa-arrow-right\" style=\"font-size: 28px;\"></i>\n            </div>  \n        </div>\n       \n        <div class=\"row col-slice-free\">\n            <div *ngFor=\"let user of itemFree; let lats = last\" class=\"large-3 medium-12 small-12 column\" style=\"margin-top: 2em !important;position: relative;\">\n                {{lats? popup() : ''}}\n                <div class=\"ui link cards\" style=\"margin: 0px !important;\" [routerLink]=\"[user.id, user.nom]\">\n                    <div class=\"label-dispo\">\n                        <a class=\"ui label myh\" [attr.data-content]=\"getStatusText(user.dispo, user.nom).texte\">\n                            <a class=\"ui empty circular label\" [ngClass]=\"{'green': user.dispo, 'red': !user.dispo}\"></a> {{getStatusText(user.dispo, user.nom).status}}\n                        </a>\n                    </div>\n                    <div class=\"card\" style=\"margin:auto;height: 427px;box-shadow: 0 0 25px rgba(0,0,0,0.1);\">\n                        <div class=\"image\" [ngStyle]=\"{'background': 'url(' + user.photo + ') center no-repeat', 'background-size': 'cover', 'height': '280px'}\">\n                            <!-- <img src='avatars/{{user.photo}}'> -->\n                        </div>\n                        <div class=\"content\" style=\"padding-bottom: 0;position: relative;padding: 0\">\n                            <div class=\"col-pad\" style=\"padding: 14px;\">\n                                <div class=\"header\">{{controlName(user.nom)}}</div>\n                                    <div class=\"meta\">\n                                        <div class=\"extra\">Évaluation:\n                                            <i class=\"fas fa-star\" style=\"color: rgb(66, 133, 244)\" *ngFor=\"let i of range(user.evaluation)\"></i>\n                                        </div>\n                                        <div>\n                                            <a class=\"ui label\" *ngFor=\"let skill of user.expsp\" style=\"padding:5px;float: left;margin: 2px;background-color:rgba(0, 0, 0, 0.4) !important;color: #fff\">\n                                                    {{skill}}\n                                            </a>\n                                        </div>\n                                    </div>    \n                            </div>\n                            <div class=\"row footer-col-card\">\n                                <div class=\"large-6 column footer-card\">\n                                    <p [innerHTML]=\"getMetier(user.metier)\"></p>\n                                </div>\n                                <div class=\"large-6 column footer-card\" style=\"  border-left: 1px solid #6666660a\">\n                                    {{user.prix}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"large-12 column\" style=\"text-align: center;margin-top: 5ex\">\n                <button class=\"medium ui button\" style=\"background-color: #3de426;color: #fff\" [routerLink]=\"['tous les freelancers']\" [hidden]=\"!btnAll\"> Voir Tous les Freelancers </button>\n            </div> -->\n        </div>\n        <!-- <div class=\"row\" style=\"margin-top: 5ex\">\n            <div class=\"large-12 column\">\n                <h3 style=\"font-size: 23pt;color: #595973\">Les catégories de métiers</h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"large-4 column list-metier\">\n                    <ul style=\"padding-left: 15px\">\n                        <li>Développeurs & data scientists</li>\n                        <li>Administrateurs systèmes & DBA</li>\n                        <li>Marketing & analytics</li>\n                    </ul>\n                </div>\n                <div class=\"large-4 column list-metier\">\n                    <ul>\n                        <li>Chefs de projet & coachs agile</li>\n                        <li>Business & stratégie</li>\n                        <li>Motion designers & réalisateurs</li>\n                    </ul>\n                </div>\n                <div class=\"large-4 column list-metier\">\n                    <ul>\n                        <li>\n                            Rédacteurs & community managers</li>\n                        <li>Graphistes, designers & photographes</li>\n                    </ul>\n                </div>\n            </div>\n        </div> -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pages.service */ "./src/app/pages.service.ts");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projets, pages) {
        this.projets = projets;
        this.pages = pages;
        this.pager = {};
        this.pop = true;
        this.fakeDimmer = true;
        this.gride = true;
        this.Titles = "Freelancers recents";
        this.myObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
        this.ObjectRibon = [
            {
                id: 0,
                color: '#fff',
                background: '#fff',
                texte: ''
            },
            {
                id: 1,
                color: '#bdffbe',
                background: '#08ff1214',
                texte: 'Cette mission est cloturé'
            },
            {
                id: 2,
                color: '#ffbfa8',
                background: '#fff5f5',
                texte: 'Cette mission n\'est plus valable'
            }
        ];
        this.brrr = true;
        this.lengths = function (x) {
            var t = Object.keys(x).length;
            var tab = [];
            for (var i = 0; i < t; i++) {
                var comp = x[i];
                var lg = x[i].length;
                if (lg >= 15) {
                    comp = x[i].toString().substr(0, 6) + '...';
                }
                tab.push(comp);
            }
            return tab;
        };
        this.range = function (value) { var a = []; for (var i = 0; i < value; ++i) {
            a.push(i + 1);
        } return a; };
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('.list-push-freelancers li').on('click', function () {
            $('.list-push-freelancers li').removeClass('active');
            $(this).addClass('active');
        });
        this.projets.getProjets().then(function (rep) {
            _this.allprojets = rep;
            _this.setPage(1);
            _this.fakeDimmer = false;
            sessionStorage.setItem('projets', JSON.stringify(_this.allprojets));
        });
        this.projets.getFreelancer().then(function (res) {
            _this.freelancer = res;
            _this.pageFree = _this.pages.getPager(_this.freelancer.length, 1, 4);
            _this.itemFree = _this.freelancer.slice(_this.pageFree.startIndex, _this.pageFree.endIndex + 1);
            console.log('all freelancers ', _this.freelancer, 'Math ceil ', Math.ceil(_this.freelancer.length / 4), "startIndex ", _this.pageFree.startIndex, "endIndex ", _this.pageFree.endIndex);
            console.log('filtre ', _this.freelancer.filter(function (f) { return parseInt(f.experience) >= 5; }));
            res.length >= 4 ? _this.btnAll = true : _this.btnAll = false;
            _this.pop = true;
        });
    };
    ProjectsComponent.prototype.byRec = function () {
        var _this = this;
        this.Titles = "Freelancers recents";
        $('.col-slice-free')
            .removeClass('fadeIn')
            .addClass('animated fadeOut');
        setTimeout(function () {
            $('.col-slice-free')
                .removeClass('fadeOut')
                .addClass('animated fadeIn');
            _this.itemFree = _this.freelancer.slice(0, 4);
        }, 1000);
    };
    ProjectsComponent.prototype.byQualif = function () {
        var _this = this;
        this.Titles = "Les plus qualifiés";
        $('.col-slice-free')
            .removeClass('fadeIn')
            .addClass('animated fadeOut');
        setTimeout(function () {
            $('.col-slice-free')
                .removeClass('fadeOut')
                .addClass('animated fadeIn');
            _this.itemFree = _this.freelancer.filter(function (f) { return parseInt(f.expsp.length) >= 4; }).slice(0, 4);
        }, 1000);
    };
    ProjectsComponent.prototype.byExp = function () {
        var _this = this;
        this.Titles = "Les plus experimentés";
        $('.col-slice-free')
            .removeClass('fadeIn')
            .addClass('animated fadeOut');
        setTimeout(function () {
            $('.col-slice-free')
                .removeClass('fadeOut')
                .addClass('animated fadeIn');
            _this.itemFree = _this.freelancer.filter(function (f) { return parseInt(f.experience) >= 5; }).slice(0, 4);
        }, 1000);
    };
    ProjectsComponent.prototype.byBoost = function () {
        var _this = this;
        this.Titles = "Les plus Boostés";
        $('.col-slice-free')
            .removeClass('fadeIn')
            .addClass('animated fadeOut');
        setTimeout(function () {
            $('.col-slice-free')
                .removeClass('fadeOut')
                .addClass('animated fadeIn');
            _this.itemFree = _this.freelancer.filter(function (f) { return parseInt(f.evaluation) >= 3; }).slice(0, 4);
        }, 1000);
    };
    ProjectsComponent.prototype.getMetier = function (txt) {
        if (txt.length >= 10) {
            txt = txt.substr(0, 8) + '...';
        }
        return txt;
    };
    ProjectsComponent.prototype.liste = function () {
        this.gride = false;
    };
    ProjectsComponent.prototype.getStatusText = function (sts, name) {
        if (sts) {
            return {
                status: 'Disponible',
                texte: name + ' a confirmé dans les 7 derniers jour être disponible à temps plein'
            };
        }
        else {
            return {
                status: 'Indisponible',
                texte: name + ' n\'a pas confirmé être disponible'
            };
        }
    };
    ProjectsComponent.prototype.popup = function () {
        if (this.pop) {
            $('.myh').popup();
            this.pop = false;
        }
    };
    ProjectsComponent.prototype.getRibon = function (etat) {
        etat = parseInt(etat, 0);
        var rib = this.ObjectRibon.find(function (obj) {
            return obj.id === etat;
        });
        return {
            couleur: rib.color,
            back: rib.background,
            texte: rib.texte
        };
    };
    ProjectsComponent.prototype.controlName = function (nom) {
        if (nom.length >= 15) {
            return nom.substr(0, 12) + '...';
        }
        else {
            return nom;
        }
    };
    ProjectsComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pages.getPager(this.allprojets.length, page);
        // get current page of items
        this.pagedItems = this.allprojets.slice(this.pager.startIndex, this.pager.endIndex + 1);
        //console.log('pages items ', this.pagedItems , 'pager ', this.pager);
    };
    ProjectsComponent.prototype.getOneProjet = function (id) {
        var ms = this.projets.getOneProjet(id);
        //console.log('voila', ms);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectsComponent.prototype, "metier", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String)
    ], ProjectsComponent.prototype, "appareilName", void 0);
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_allprojets_service__WEBPACK_IMPORTED_MODULE_1__["AllprojetsService"], _pages_service__WEBPACK_IMPORTED_MODULE_0__["PagerService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/projet-detail/projet-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/projet-detail/projet-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-projet {\r\n    background: #66666612;\r\n    padding: 1ex;\r\n    margin-top: 1ex;\r\n    border-radius: 8px;\r\n    margin-bottom: 1ex;\r\n}\r\n\r\n.item-projet h2 {\r\n    margin: 0 !important\r\n}\r\n\r\n.empt {\r\n    display: flex\r\n}\r\n\r\n.empt h1 {\r\n    margin: auto !important;\r\n    text-align: center\r\n}"

/***/ }),

/***/ "./src/app/projet-detail/projet-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/projet-detail/projet-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"succes--\">\n    <div class=\"ui positive message\">\n        <i class=\"close icon\"></i>\n        <div class=\"header\"> {{headInfos}} </div>\n        <p> {{footerInfos}} </p>\n    </div>\n</div>\n<div class=\"row\" style=\"margin:0;background: #f8f8f9;\">\n    <div class=\"large-4 column col-info-warn\">\n        <!-- profil user component -->\n        <app-profil-user></app-profil-user>\n    </div>\n    <div class=\"large-8 column\" style=\"background: #ffffff\">\n        <div *ngIf=\"empty\">\n            <section class=\"empt\">\n                <h1> {{msg}} </h1>\n            </section>\n\n        </div>\n        <div *ngIf=\"!empty\">\n            <div *ngFor=\"let proj of projets\" class=\"item-projet\">\n                <h2>{{proj.titre}}</h2>\n                <p>\n                    {{proj.description}}\n                </p>\n                <div>\n                    <h3> Demandé {{proj.temps}} </h3>\n                    <a class=\"item\">\n                        <div class=\"ui yellow horizontal label\"> {{proj.categorie}} </div>\n                    </a>\n                    <a class=\"item\">\n                        <div class=\"ui red horizontal label\"> {{proj.etat}} </div>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<!-- popup image -->\n<app-popup-windown></app-popup-windown>\n<!-- fin -->"

/***/ }),

/***/ "./src/app/projet-detail/projet-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/projet-detail/projet-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjetDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetDetailComponent", function() { return ProjetDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../allprojets.service */ "./src/app/allprojets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjetDetailComponent = /** @class */ (function () {
    function ProjetDetailComponent(service) {
        this.service = service;
    }
    ProjetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            $('.empt').css({ 'height': $('.col-info-warn').height() + 'px', 'display': 'flex' });
        }, 3000);
        //console.log('height ', $('.col-info-warn').height());
        var getEmail = JSON.parse(this.service.getLocal().getItem('user'));
        var getEmails = getEmail[0].email;
        var getId = getEmail[0].id;
        var tab = [{
                id: getId,
                email: getEmails
            }];
        this.service.getProjectPostule(tab).then(function (rep) {
            //console.log('rep details ', rep);
            if (rep.response === false) {
                _this.empty = true;
                _this.msg = 'Tu n\'as pas encore proposer de devis';
            }
            else {
                _this.empty = false;
                _this.projets = rep;
            }
        });
    };
    ProjetDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projet-detail',
            template: __webpack_require__(/*! ./projet-detail.component.html */ "./src/app/projet-detail/projet-detail.component.html"),
            styles: [__webpack_require__(/*! ./projet-detail.component.css */ "./src/app/projet-detail/projet-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_allprojets_service__WEBPACK_IMPORTED_MODULE_1__["AllprojetsService"]])
    ], ProjetDetailComponent);
    return ProjetDetailComponent;
}());



/***/ }),

/***/ "./src/app/recherche/recherche.component.css":
/*!***************************************************!*\
  !*** ./src/app/recherche/recherche.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-off {\r\n    padding-bottom: 1ex\r\n}\r\n\r\n.parallax-windows {\r\n    min-height: 100%;\r\n    background: transparent;\r\n}\r\n\r\n.card {\r\n    width: 90% !important;\r\n}\r\n\r\n.head {\r\n    background: #66666657\r\n}\r\n\r\n.text-intro {\r\n    text-align: center;\r\n    color: #fff;\r\n    margin-top: 5ex\r\n}\r\n\r\n.list-button ul {\r\n    list-style: none;\r\n}\r\n\r\n.list-button li {\r\n    display: inline !important;\r\n}\r\n\r\n.massive.ui.button {\r\n    font-size: 1.71428571rem;\r\n    background: transparent !important;\r\n    border: 1px solid #fff !important;\r\n    border-radius: 38px !important;\r\n    color: #fff !important;\r\n}\r\n\r\n.slick-prev {\r\n    left: 0 !important;\r\n}"

/***/ }),

/***/ "./src/app/recherche/recherche.component.html":
/*!****************************************************!*\
  !*** ./src/app/recherche/recherche.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slide></app-slide>\n<div style=\"height: 600px;\">\n    <div class=\"parallax-windows\">\n        <div class=\"head\">\n            <app-entete></app-entete>\n        </div>\n        <div class=\"text-intro\">\n            <h1 style=\"font-family: buenosaires-bold;font-size: 45pt;\">{{call}} freelances</h1>\n            <h2>Travaillez votre projet avec les meuilleure freelanceurs Gabonais</h2>\n            <ul class=\"list-button\">\n                <li>\n                    <button class=\"massive ui button\">\n                      Freelance dispos\n                    </button>\n                </li>\n                <li>\n                    <button class=\"massive ui button\">\n                      Tarifs\n                    </button>\n                </li>\n                <li>\n                    <button class=\"massive ui button\">\n                      Les plus notés\n                    </button>\n                </li>\n            </ul>\n        </div>\n        <div style=\"width: 100%;text-align: center;\">\n            <img src=\"../assets/stars.svg\" alt=\"\">\n            <p style=\"font-size: 25pt;color: #fff;font-family: roboto condensed;\"> {{count}} Résultats trouvés pour votre recherche</p>\n        </div>\n    </div>\n</div>\n<div class=\"ui negative  icon message\" style=\"margin-left: 3ex;width: 70%;\" *ngIf=\"!result\">\n    <i class=\"fas fa-exclamation\" style=\"font-size: 48px;\"></i>\n    <div class=\"content\" style=\"margin-left: 1ex\">\n        <div class=\"header\">\n            <p> {{texte}} </p>\n        </div>\n    </div>\n</div>\n<section style=\"display: flex;margin-top: 5em\" *ngIf=\"result\">\n    <div style=\"margin: auto;width: 70%\">\n        <h2>Tous les Freelancers <b> {{call}}</b> </h2>\n        <div class=\"slider silde1\">\n            <div class=\"ui special cards image\" *ngFor=\"let f of users; let last = last\">\n                {{last ? initSlick() : ''}} {{last ? dimmers() : ''}}\n                <div class=\"card\">\n                    <div class=\"blurring dimmable image\">\n                        <div class=\"ui dimmer\">\n                            <div class=\"content\">\n                                <div class=\"center\">\n                                    <div class=\"ui inverted button\" (click)=\"seen(f.id, f.nom)\">Voir sa fiche</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"label-dispo\" style=\"z-index:9;filter: none;\">\n                            <a class=\"ui label myh\" [attr.data-content]=\"getStatusText(f.dispo, f.nom).texte\">\n                                <a class=\"ui empty circular label\" [ngClass]=\"{'green': f.dispo, 'red': !f.dispo}\"></a>\n                                {{getStatusText(f.dispo, f.nom).status}}\n                            </a>\n                        </div>\n                        <img [ngStyle]=\"{'background': 'url('+ f.photo +') center no-repeat', 'background-size': 'cover', 'height': '298px'}\">\n                    </div>\n                    <div class=\"content\" style=\"flex-grow: 0\">\n                        <a class=\"header\"> {{f.nom}}</a>\n                        <div class=\"meta\">\n                            <i class=\"fas fa-star\" style=\"color: rgb(66, 133, 244)\" *ngFor=\"let i of range(f.evaluation)\"></i>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"margin: 0;margin: 0;left: 0;right: 0;bottom: 0;\">\n                        <div class=\"large-6 column footer-card\" style=\"border-right: 2px solid #f1f1f1; padding: 5px;\">\n                            <p [innerHTML]=\"getMetier(f.metier)\"></p>\n                        </div>\n                        <div class=\"large-6 column footer-card\" style=\"padding: 5px\">\n                            {{f.prix}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section style=\"display: flex;margin-top: 5em\" *ngIf=\"result\">\n    <div style=\"margin: auto;width: 70%\">\n        <h2>Les Freelancers <b> {{call}} les mieux notés</b> <i class=\"fas fa-star\" style=\"font-size: 27px;color: rgb(66, 133, 244);\"></i> </h2>\n        <div class=\"slider silde2\">\n            <div class=\"ui special cards image\" *ngFor=\"let q of Notest; let der = last\">\n                {{der ? initSlick2() : ''}} {{der ? dimmers() : ''}}\n                <div class=\"card\">\n                    <div class=\"blurring dimmable image\">\n                        <div class=\"ui dimmer\">\n                            <div class=\"content\">\n                                <div class=\"center\">\n                                    <div class=\"ui inverted button\" (click)=\"seen(q.id, q.nom)\">Voir sa fiche</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"label-dispo\" style=\"z-index:9;filter: none;\">\n                            <a class=\"ui label myh\" [attr.data-content]=\"getStatusText(q.dispo, q.nom).texte\">\n                                <a class=\"ui empty circular label\" [ngClass]=\"{'green': q.dispo, 'red': !q.dispo}\"></a>\n                                {{getStatusText(q.dispo, q.nom).status}}\n                            </a>\n                        </div>\n                        <img [ngStyle]=\"{'background': 'url('+ q.photo +') center no-repeat', 'background-size': 'cover', 'height': '298px'}\">\n                    </div>\n                    <div class=\"content\" style=\"flex-grow: 0\">\n                        <a class=\"header\"> {{q.nom}}</a>\n                        <div class=\"meta\">\n                            <i class=\"fas fa-star\" style=\"color: rgb(66, 133, 244)\" *ngFor=\"let i of range(q.evaluation)\"></i>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"margin: 0;margin: 0;left: 0;right: 0;bottom: 0;\">\n                        <div class=\"large-6 column footer-card\" style=\"border-right: 2px solid #f1f1f1;padding: 5px\">\n                            <p [innerHTML]=\"getMetier(q.metier)\"></p>\n                        </div>\n                        <div class=\"large-6 column footer-card\" style=\"padding: 5px\">\n                            {{q.prix}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/recherche/recherche.component.ts":
/*!**************************************************!*\
  !*** ./src/app/recherche/recherche.component.ts ***!
  \**************************************************/
/*! exports provided: RechercheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechercheComponent", function() { return RechercheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../allprojets.service */ "./src/app/allprojets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RechercheComponent = /** @class */ (function () {
    function RechercheComponent(routeActivate, service, route) {
        this.routeActivate = routeActivate;
        this.service = service;
        this.route = route;
        this.dimmer = true;
        this.oh = true;
        this.oh2 = true;
        this.range = function (value) { var a = []; for (var i = 0; i < value; ++i) {
            a.push(i + 1);
        } return a; };
    }
    RechercheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.count = 0;
        this.texte = 'Aucun Freelancer trouvé pour votre recherche !';
        jQuery(window).trigger('resize').trigger('scroll');
        var title = this.routeActivate.snapshot.params['title'];
        this.call = title;
        var ville = this.routeActivate.snapshot.params['town'];
        //console.log('id ', title , 'ville ', ville);
        $('.parallax-windows').parallax({ imageSrc: '../../assets/freelance-Gabon-girl.jpg', overScrollFix: true });
        $('.parallax-windows').css('height', $(window).height + 'px');
        var user = this.service.Freelancers;
        //console.log('les user ', typeof(user));
        var tab = [];
        if (typeof user === 'undefined') {
            this.service.getFreelancer().then(function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].categorie === title) {
                        tab.push(data[i]);
                    }
                }
                if (tab.length <= 0) {
                    _this.result = false;
                }
                else {
                    _this.result = true;
                    _this.users = tab;
                    _this.Notest = tab;
                    _this.count = tab.length;
                }
                //console.log('tab ', tab , 'taille ', tab.length);
            });
        }
        else {
            var $q = this.service.Freelancers;
            for (var i = 0; i < $q.length; i++) {
                if ($q[i].categorie === title) {
                    tab.push($q[i]);
                }
            }
            if (tab.length <= 0) {
                this.result = false;
            }
            else {
                this.result = true;
                this.users = tab;
                this.Notest = tab;
                this.count = tab.length;
            }
        }
        this.service.searchCompetence().then(function (response) {
            var maker = response.find(function (rep) {
                return rep.title === _this.call;
            });
            if (maker === undefined) {
                _this.route.navigate(['/']);
                return;
            }
        });
    };
    RechercheComponent.prototype.dimmers = function () {
        if (this.dimmer) {
            $('.special.cards .image').dimmer({
                on: 'hover'
            });
            this.dimmer = false;
        }
    };
    RechercheComponent.prototype.seen = function (UserID, UserNom) {
        this.route.navigate(['/', UserID, UserNom]);
    };
    RechercheComponent.prototype.getMetier = function (txt) {
        if (txt.length >= 10) {
            txt = txt.substr(0, 8) + '...';
        }
        return txt;
    };
    RechercheComponent.prototype.getStatusText = function (sts, name) {
        if (sts) {
            return {
                status: 'Disponible',
                texte: name + ' a confirmé dans les 7 derniers jour être disponible à temps plein'
            };
        }
        else {
            return {
                status: 'Indisponible',
                texte: name + ' n\'a pas confirmé être disponible'
            };
        }
    };
    RechercheComponent.prototype.initSlick = function () {
        if (this.oh) {
            $('.silde1').slick({
                centerMode: false,
                centerPadding: '60px',
                slidesToShow: 4,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: true,
                            centerMode: false,
                            centerPadding: '10px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: true,
                            centerMode: false,
                            centerPadding: '100px',
                            slidesToShow: 4
                        }
                    }
                ]
            });
            this.oh = false;
        }
    };
    RechercheComponent.prototype.initSlick2 = function () {
        if (this.oh2) {
            $('.silde2').slick({
                centerMode: false,
                centerPadding: '60px',
                slidesToShow: 4,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: true,
                            centerMode: false,
                            centerPadding: '10px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: true,
                            centerMode: true,
                            centerPadding: '100px',
                            slidesToShow: 4
                        }
                    }
                ]
            });
            this.oh2 = false;
        }
    };
    RechercheComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recherche',
            template: __webpack_require__(/*! ./recherche.component.html */ "./src/app/recherche/recherche.component.html"),
            styles: [__webpack_require__(/*! ./recherche.component.css */ "./src/app/recherche/recherche.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _allprojets_service__WEBPACK_IMPORTED_MODULE_2__["AllprojetsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RechercheComponent);
    return RechercheComponent;
}());



/***/ }),

/***/ "./src/app/recruteurs/recruteurs.component.css":
/*!*****************************************************!*\
  !*** ./src/app/recruteurs/recruteurs.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr td {\r\n    padding: 3ex !important\r\n}\r\n\r\nth {\r\n    border: none !important\r\n}\r\n\r\n.free-info {\r\n    display: inline-flex;\r\n}\r\n\r\n.free-name {\r\n    line-height: 88px;\r\n    font-size: 12pt;\r\n    font-weight: bold;\r\n}\r\n\r\n.side-info-employe {\r\n    display: inline-flex;\r\n}\r\n\r\n.info-name-empl {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    margin-left: 2ex\r\n}\r\n\r\n.info-plus {\r\n    padding: 3ex;\r\n    border: 1px solid #66666614;\r\n    border-top: none;\r\n    display: inline-flex\r\n}\r\n\r\n.span-title {\r\n    margin: 0;\r\n    padding: 0;\r\n    line-height: 80px;\r\n    padding-left: 11px;\r\n    font-size: 12pt;\r\n}\r\n\r\n.info-plus i {\r\n    font-size: 22pt;\r\n}\r\n\r\n.info-plus div {\r\n    font-size: 13pt;\r\n    line-height: 28px;\r\n    margin-left: 12px;\r\n}\r\n\r\n.td-employ {\r\n    padding-left: 0 !important;\r\n    padding-right: 0 !important;\r\n}\r\n\r\n.st0 {\r\n    fill: #21409A;\r\n}\r\n\r\n.st1 {\r\n    fill: #FFF200;\r\n}\r\n\r\n.st2 {\r\n    fill: #00A14B;\r\n}"

/***/ }),

/***/ "./src/app/recruteurs/recruteurs.component.html":
/*!******************************************************!*\
  !*** ./src/app/recruteurs/recruteurs.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"ui very basic table\">\n    <thead class=\"th-free\">\n        <tr>\n            <th class=\"center aligned\">A propos de l'employeur</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td class=\"td-employ\" style=\"padding-left: 0 !important;\n            padding-right: 0 !important;\">\n                <div class=\"side-info-employe\" style=\"margin-left:6ex\">\n                    <svg version=\"1.1\" id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"300 265.9 338 311\" style=\"enable-background:new 300 265.9 338 311;width: 40px;height: 80px;\" xml:space=\"preserve\">\n                <path id=\"XMLID_4_\" class=\"st0\" d=\"M626,576.9H394c-6.6,0-12-5.4-12-12v-250c0-6.6,5.4-12,12-12h232c6.6,0,12,5.4,12,12v250\n                C638,571.5,632.6,576.9,626,576.9z\"/>\n                <path id=\"XMLID_3_\" class=\"st1\" d=\"M584,557.9H352c-6.6,0-12-5.4-12-12v-250c0-6.6,5.4-12,12-12h232c6.6,0,12,5.4,12,12v250\n                C596,552.5,590.6,557.9,584,557.9z\"/>\n                <path id=\"XMLID_1_\" class=\"st2\" d=\"M544,539.9H312c-6.6,0-12-5.4-12-12v-250c0-6.6,5.4-12,12-12h232c6.6,0,12,5.4,12,12v250\n                C556,534.5,550.6,539.9,544,539.9z\"/>\n                </svg>\n                    <div class=\"info-name-empl\">\n                        <h3>Zouir</h3>\n                        <span>\n                            Membre depuis juillet 30 2018\n                        </span>\n                    </div>\n                </div>\n                <div class=\"\" style=\"display: grid\">\n                    <div class=\"info-plus\">\n                        <i class=\"fas fa-map-marker-alt\"></i>\n                        <div> Ville </div>\n                    </div>\n                    <div class=\"info-plus\">\n                        <i class=\"fas fa-money-bill-alt\"></i>\n                        <div> Depense total </div>\n                    </div>\n                    <div class=\"info-plus\">\n                        <i class=\"fas fa-briefcase\"></i>\n                        <div> Projet posté </div>\n                    </div>\n                    <div class=\"info-plus\">\n                        <i class=\"fas fa-handshake\"></i>\n                        <div>Embauche </div>\n                    </div>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/recruteurs/recruteurs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/recruteurs/recruteurs.component.ts ***!
  \****************************************************/
/*! exports provided: RecruteursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruteursComponent", function() { return RecruteursComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecruteursComponent = /** @class */ (function () {
    function RecruteursComponent() {
    }
    RecruteursComponent.prototype.ngOnInit = function () {
    };
    RecruteursComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recruteurs',
            template: __webpack_require__(/*! ./recruteurs.component.html */ "./src/app/recruteurs/recruteurs.component.html"),
            styles: [__webpack_require__(/*! ./recruteurs.component.css */ "./src/app/recruteurs/recruteurs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecruteursComponent);
    return RecruteursComponent;
}());



/***/ }),

/***/ "./src/app/set-session.service.ts":
/*!****************************************!*\
  !*** ./src/app/set-session.service.ts ***!
  \****************************************/
/*! exports provided: SetSessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSessionService", function() { return SetSessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SetSessionService = /** @class */ (function () {
    function SetSessionService() {
        this.local = sessionStorage;
    }
    SetSessionService.prototype.setSession = function (data) {
        this.local.setItem('user', JSON.stringify(data));
    };
    SetSessionService.prototype.putLocal = function () {
        this.local = localStorage;
    };
    SetSessionService.prototype.removeLocal = function () {
        this.local = sessionStorage;
    };
    SetSessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SetSessionService);
    return SetSessionService;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: #9e9e9e33 !important;\r\n}\r\n.col-form {\r\n    width: 100%;\r\n    display: flex\r\n}\r\n.col-form-child {\r\n    margin: auto;\r\n    width: 60%;\r\n    background: #fff;\r\n    height: 600px;\r\n}\r\n.head-bk {\r\n    background: #6666667a;\r\n    padding-bottom: 5px\r\n}\r\n.side-left {\r\n    height: 600px;\r\n    background: url('side-bg-smlr.jpg') center no-repeat;\r\n    background-size: cover\r\n}\r\n.errorName {\r\n    display: -ms-grid !important;\r\n    display: grid !important\r\n}\r\n[hidden] {\r\n    display: none !important\r\n}\r\n.txt-hd {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    text-align: center;\r\n    margin-top: 3em;\r\n}\r\n.txt-hd img {\r\n    width: 60px;\r\n    margin: auto\r\n}\r\n.txt-hd h2 {\r\n    margin-top: 7px\r\n}\r\n.field-formulaire .ui.big.form {\r\n    margin: auto;\r\n    width: 52%;\r\n}\r\n.field-formulaire .field {\r\n    width: 100%;\r\n}\r\n.field-formulaire {\r\n    text-align: center;\r\n    display: flex;\r\n    margin-top: 1em;\r\n}\r\n.txt-hd h3 {\r\n    margin-top: 0;\r\n    padding-left: 71px;\r\n    font-size: 11pt;\r\n    padding-right: 61px;\r\n    color: #666;\r\n}"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section style=\"margin-top: 3em\">\n    <div class=\"col-form\">\n        <div class=\"col-form-child\">\n            <div class=\"row\">\n                <div class=\"large-5 column side-left\">\n\n                </div>\n                <div class=\"large-7 column side-right\">\n                    <div class=\"txt-hd\">\n                        <img src=\"../../assets/logo.svg\" alt=\"\">\n                        <h2> {{FirstTexte}} </h2>\n                        <h3>{{FirstSecond}}</h3>\n                    </div>\n                    <form [formGroup]=\"myForm\" (ngSubmit)='onSubmit()'>\n                        <div class=\"field-formulaire\">\n                            <div class=\"ui big form\">\n                                <div class=\"fields\">\n                                    <div class=\"field\">\n                                        <input #box placeholder=\"Ton nom au complet\" type=\"text\" formControlName=\"nom\" maxlength=\"20\">\n                                        <!--  <div [hidden]=\"box.value\">erreur !</div> -->\n                                    </div>\n                                </div>\n                                <div class=\"fields\" [ngClass]=\"{'errorName': errorNameExist}\">\n                                    <div class=\"field\" [ngClass]=\"{'ui input error': errorNameExist==true, 'errorName': errorNameExist}\">\n                                        <input #email placeholder=\"Ton email\" type=\"email\" formControlName='email' (blur)='checkname(email.value)'>\n                                    </div>\n                                    <div class=\"ui pointing red basic label\" *ngIf=\"errorNameExist\">Cet email existe dèjà !</div>\n                                </div>\n                                <div class=\"fields\">\n                                    <div class=\"field\">\n                                        <input placeholder=\"Ton mot de passe\" type=\"password\" formControlName='password'>\n                                    </div>\n                                </div>\n                                <div class=\"field\">\n                                    <div class=\"ui selection dropdown\">\n                                        <input type=\"hidden\" id=\"specialite\" class=\"specialite\" formControlName='status'>\n                                        <i class=\"dropdown icon\"></i>\n                                        <div class=\"default text\">Inscris en tant que...</div>\n                                        <div class=\"menu\">\n                                            <div class=\"item\" data-value=\"Freelancer\">Freelancer</div>\n                                            <div class=\"item\" data-value=\"Recruteur\">Recruteur</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <button class=\"ui green button\" [disabled]=\"myForm.invalid || disabledBtn\"> Je m'inscris </button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _assets_services_myservices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/services/myservices */ "./src/assets/services/myservices.ts");
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _accueil_models_Users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../accueil/models/Users */ "./src/app/accueil/models/Users.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _set_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../set-session.service */ "./src/app/set-session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninComponent = /** @class */ (function () {
    function SigninComponent(fbuilder, services, service, route, session) {
        this.fbuilder = fbuilder;
        this.services = services;
        this.service = service;
        this.route = route;
        this.session = session;
        this.FirstTexte = 'Inscris-toi en 30 secondes !';
        this.FirstSecond = 'Et deccroche pleins de contrats !';
        this.value = '';
        this.secondes = 5;
        this.errorNameExist = false;
        this.disabledBtn = false;
        this.avatar = 'http://localhost/php-challenge/src/avatars/default.png';
        this.createform();
    }
    SigninComponent.prototype.createform = function () {
        this.myForm = this.fbuilder.group({
            nom: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    SigninComponent.prototype.clearTime = function (element) {
        clearInterval(element);
        this.secondes = 5;
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var timeout = setInterval(function () {
            if (_this.secondes > 0) {
                _this.secondes--;
            }
            else {
                _this.clearTime(timeout);
            }
        }, 1000);
        var formValue = this.myForm.value;
        this.disabledBtn = true;
        if (this.myForm.status === 'INVALID' || this.errorNameExist === true) {
            this.disabledBtn = false;
            return;
        }
        var New_User = new _accueil_models_Users__WEBPACK_IMPORTED_MODULE_4__["User"](formValue.nom, formValue.email, formValue.password, formValue.status);
        this.services.createUser(New_User).then(function (response) {
            if (response.res === true) {
                $.amaran({
                    'message': 'Bravo! Tu es inscris',
                    'position': 'top right',
                    'duration': 10000
                });
                var user = [
                    {
                        'id': response.id,
                        'userName': formValue.nom,
                        'email': formValue.email,
                        'status': formValue.status,
                        'avatar': _this.avatar,
                        'specialite': 'Aucune specialité',
                        'skill': null,
                        'tuto': null,
                        'ville': null
                    }
                ];
                setTimeout(function () {
                    _this.route.navigate(['/']);
                }, 3000);
                _this.session.setSession(user);
            }
        });
    };
    SigninComponent.prototype.checkname = function (value) {
        var _this = this;
        this.service.checkUser(value).then(function (rep) {
            if (rep.res === true) {
                _this.errorNameExist = true;
            }
            else {
                _this.errorNameExist = false;
            }
        });
    };
    SigninComponent.prototype.onkeyup = function ($event) {
        //console.log('key up', $event.target.value);
    };
    SigninComponent.prototype.update = function (value) { this.value = value; };
    SigninComponent.prototype.ngOnInit = function () {
        jQuery(window).trigger('resize').trigger('scroll');
        $('.selection.dropdown')
            .dropdown();
        var specialiteControl = this.myForm.get('status');
        $('.item').click(function () {
            var val = $(this).attr('data-value');
            console.log(val);
            if (val === 'Recruteur') {
                this.FirstTexte = 'Inscris-toi Recruteur';
                this.FirstSecond = 'Et decouvre ton freelancer !';
            }
            specialiteControl.setValue(val);
            $('.specialite').val(val);
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _allprojets_service__WEBPACK_IMPORTED_MODULE_1__["AllprojetsService"], _assets_services_myservices__WEBPACK_IMPORTED_MODULE_0__["Myservices"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _set_session_service__WEBPACK_IMPORTED_MODULE_6__["SetSessionService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/slide/slide.component.css":
/*!*******************************************!*\
  !*** ./src/app/slide/slide.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profil-slide {\r\n    position: absolute;\r\n    right: -22em;\r\n    top: 0;\r\n    width: 300px;\r\n    z-index: 99;\r\n    background: #21409a;\r\n    ;\r\n    transition: all .2s\r\n}\r\n\r\n.col-user-img {\r\n    display: flex;\r\n    margin-top: 2ex\r\n}\r\n\r\n.min-user-img {\r\n    margin: auto;\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    border: 3px solid #FFC107;\r\n    background-size: cover !important\r\n}\r\n\r\n.parent-list {\r\n    background: #2343a0;\r\n    height: 100px;\r\n    border-top: 1px solid hsla(0, 0%, 100%, 0.06);\r\n    border-bottom: 1px solid #2b333c30;\r\n    cursor: pointer;\r\n}\r\n\r\n.parent-list:hover {\r\n    background: #193486;\r\n}\r\n\r\n.list-action {\r\n    padding: 3ex;\r\n    padding-left: 0;\r\n}\r\n\r\n.list-action i {\r\n    font-size: 30pt;\r\n    color: #d0d0d0;\r\n}\r\n\r\n.list-action span {\r\n    font-size: 20px;\r\n    margin-left: 3ex;\r\n    color: #b3b1b1;\r\n}\r\n\r\n.window-opacity {\r\n    opacity: rgba(126, 5, 5, 0.815);\r\n    position: absolute;\r\n    z-index: 999;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 98;\r\n    background: #0a09098a;\r\n    display: none\r\n}\r\n\r\n.user-infos {\r\n    margin-top: 3ex;\r\n}"

/***/ }),

/***/ "./src/app/slide/slide.component.html":
/*!********************************************!*\
  !*** ./src/app/slide/slide.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profil-slide\">\n    <div class=\"row\">\n        <div class=\"large-12 column col-user-img\">\n            <div class=\"min-user-img\" [ngStyle]=\"{'background': 'url('+ default +')'}\" style=\"background-size: cover !important\">\n\n            </div>\n        </div>\n    </div>\n    <div class=\"row user-infos\">\n        <div class=\"large-12 column parent-list freee\" (click)=\"slideReturn()\">\n            <div class=\"list-action\">\n                <i class=\"fas fa-user-tie\"></i> <span>Mon profil</span>\n            </div>\n        </div>\n        <div class=\"large-12 column parent-list\" (click)=\"notificate()\">\n            <div class=\"list-action\">\n                <i class=\"fas fa-bell\"></i> <span>Notifications</span>\n            </div>\n        </div>\n        <div class=\"large-12 column parent-list\" (click)=\"logout()\">\n            <div class=\"list-action\">\n                <i class=\"fas fa-power-off\"></i> <span>Me deconnecter</span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"window-opacity\" (click)=\"slideReturn()\">\n\n</div>"

/***/ }),

/***/ "./src/app/slide/slide.component.ts":
/*!******************************************!*\
  !*** ./src/app/slide/slide.component.ts ***!
  \******************************************/
/*! exports provided: SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _allprojets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../allprojets.service */ "./src/app/allprojets.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AuthService */ "./src/app/AuthService.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SlideComponent = /** @class */ (function () {
    function SlideComponent(routes, Auth, service) {
        this.routes = routes;
        this.Auth = Auth;
        this.service = service;
        this.default = 'http://localhost/php-challenge/src/avatars/default.png';
    }
    SlideComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('.profil-slide').css('height', $(window).height() + 'px');
        $(window).resize(function () {
            $('.profil-slide').css('height', $(window).height() + 'px');
            $('.window-opacity').css({ 'height': $(window).height() + 'px', 'width': $(window).width() + 'px' });
        });
        $('.window-opacity').css({ 'height': $(window).height() + 'px', 'width': $(window).width() + 'px' });
        $('.freee').on('click', function () {
            var store = _this.service.getLocal();
            var $q = JSON.parse(store.getItem('user'))[0].status;
            if ($q === 'free' || $q === 'Freelancer') {
                _this.routes.navigate(['profilFree', { outlets: { 'aux': ['details compte'] } }]);
            }
            else if ($q === 'Recruteur') {
                _this.routes.navigate(['profilRec']);
            }
        });
        this.getProfil();
    };
    SlideComponent.prototype.notificate = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Tu n\'as pas de nouvelle notification ',
            width: 600,
            padding: 3,
            background: '#fff url(../../avatars/sample_iphone_7_dribbble_1x.jpg)',
            backdrop: "rgba(0,0,123,0.4)\n        url('../../avatars/sample_iphone_7_dribbble_1x.jpg')\n        center left\n        no-repeat "
        });
    };
    SlideComponent.prototype.getProfil = function () {
        var use = this.Auth.getUser();
        if (use !== false) {
            this.default = use[0].avatar;
            console.log('avatar ', this.default);
        }
    };
    SlideComponent.prototype.logout = function () {
        $('.profil-slide').css('right', '-22em');
        this.Auth.logout();
        $('.window-opacity').fadeOut();
        $('body').toggleClass('scrollToggle');
    };
    SlideComponent.prototype.slideReturn = function () {
        $('.profil-slide').css('right', '-22em');
        $('.window-opacity').fadeOut();
        $('body').toggleClass('scrollToggle');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "default", void 0);
    SlideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slide',
            template: __webpack_require__(/*! ./slide.component.html */ "./src/app/slide/slide.component.html"),
            styles: [__webpack_require__(/*! ./slide.component.css */ "./src/app/slide/slide.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _AuthService__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _allprojets_service__WEBPACK_IMPORTED_MODULE_0__["AllprojetsService"]])
    ], SlideComponent);
    return SlideComponent;
}());



/***/ }),

/***/ "./src/assets/services/myservices.ts":
/*!*******************************************!*\
  !*** ./src/assets/services/myservices.ts ***!
  \*******************************************/
/*! exports provided: Myservices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Myservices", function() { return Myservices; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Myservices = /** @class */ (function () {
    function Myservices(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.Url = 'http://localhost/php-challenge/checkUser.php';
    }
    Myservices.prototype.checkUser = function (userName) {
        var _this = this;
        var users = new Promise(function (resolve, reject) {
            _this.http.post(_this.Url, userName, { headers: _this.headers })
                .toPromise()
                .then(function (res) {
                //console.log('res', res);
                _this.name = res;
                resolve(_this.name);
            }, function (error) {
                //console.log('une erreur s\'est produit', error);
            });
        });
        return users;
    };
    Myservices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], Myservices);
    return Myservices;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\myfreelancer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map