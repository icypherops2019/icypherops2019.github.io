webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactPage = /** @class */ (function () {
    function ContactPage() {
        this.chargers = [
            {
                "latitude": 75.162729,
                "longitude": 32.012078,
                "Dealer": "Hindustan Petroleum Corporation Ltd. - Raja Filling Station",
                "Address": "Dera Baba Nanak Road  Kalanour  Gurdaspur  Punjab   - myLPG.eu",
                "wall": 0,
                "j-1772": 3,
                "CHAdeMO": 3,
                "Tesla(roadster)": 0,
                "NEMA 14-50": 3,
                "Tesla": 1,
                "Type-2": 3,
                "Type-3": 1,
                "wall(BS1361)": 0,
                "Wall(euro)": 2,
                "Commando": 3,
                "wall(AU/NZ)": 2,
                "Caravan Mains": 0,
                "CCS/SAE": 0,
                "THREEPhase": 0
            },
            {
                "latitude": 74.895569,
                "longitude": 31.642572,
                "Dealer": "Indian Oil Corporation Ltd. - Kanwar Filling Station",
                "Address": "Batala Road  Amritsar-143001   - myLPG.eu",
                "wall": 0,
                "j-1772": 0,
                "CHAdeMO": 1,
                "Tesla(roadster)": 1,
                "NEMA 14-50": 3,
                "Tesla": 3,
                "Type-2": 1,
                "Type-3": 4,
                "wall(BS1361)": 4,
                "Wall(euro)": 1,
                "Commando": 3,
                "wall(AU/NZ)": 2,
                "Caravan Mains": 0,
                "CCS/SAE": 2,
                "THREEPhase": 2
            },
            {
                "latitude": 75.839524,
                "longitude": 31.498763,
                "Dealer": "Reliance Industries Ltd. - Reliance Industries Ltd. (ril)",
                "Address": "Nh-70 near Ms-32 vill Chak Gujran tehsil Hoshiarpur distt-hoshiarpur   - myLPG.eu",
                "wall": 4,
                "j-1772": 3,
                "CHAdeMO": 2,
                "Tesla(roadster)": 0,
                "NEMA 14-50": 4,
                "Tesla": 1,
                "Type-2": 2,
                "Type-3": 2,
                "wall(BS1361)": 3,
                "Wall(euro)": 0,
                "Commando": 4,
                "wall(AU/NZ)": 0,
                "Caravan Mains": 3,
                "CCS/SAE": 0,
                "THREEPhase": 2
            },
            {
                "latitude": 75.538349,
                "longitude": 31.337183,
                "Dealer": "Hindustan Petroleum Corporation Ltd. - Sas hp Gohira",
                "Address": "Jallandhar Nakodar Road  Gohira  Jallandhar  Punjab   - myLPG.eu",
                "wall": 2,
                "j-1772": 0,
                "CHAdeMO": 4,
                "Tesla(roadster)": 4,
                "NEMA 14-50": 0,
                "Tesla": 1,
                "Type-2": 1,
                "Type-3": 1,
                "wall(BS1361)": 0,
                "Wall(euro)": 0,
                "Commando": 4,
                "wall(AU/NZ)": 2,
                "Caravan Mains": 0,
                "CCS/SAE": 1,
                "THREEPhase": 4
            },
            {
                "latitude": 75.569544,
                "longitude": 31.322422,
                "Dealer": "Indian Oil Corporation Ltd. - Amar Highways",
                "Address": "G.t.road  (ludhiana-jalandar)  Plot No. 225/5  Pin-144 010   - myLPG.eu",
                "wall": 4,
                "j-1772": 2,
                "CHAdeMO": 2,
                "Tesla(roadster)": 0,
                "NEMA 14-50": 2,
                "Tesla": 1,
                "Type-2": 3,
                "Type-3": 3,
                "wall(BS1361)": 3,
                "Wall(euro)": 1,
                "Commando": 4,
                "wall(AU/NZ)": 0,
                "Caravan Mains": 0,
                "CCS/SAE": 1,
                "THREEPhase": 2
            },
            {
                "latitude": 75.863883,
                "longitude": 30.901249,
                "Dealer": "Hindustan Petroleum Corporation Ltd. - Pathak Power Point",
                "Address": "m Mundiya Kalan  Ludhiana   - myLPG.eu",
                "wall": 2,
                "j-1772": 4,
                "CHAdeMO": 4,
                "Tesla(roadster)": 3,
                "NEMA 14-50": 0,
                "Tesla": 1,
                "Type-2": 0,
                "Type-3": 3,
                "wall(BS1361)": 3,
                "Wall(euro)": 2,
                "Commando": 2,
                "wall(AU/NZ)": 1,
                "Caravan Mains": 3,
                "CCS/SAE": 3,
                "THREEPhase": 3
            },
            {
                "latitude": 75.795373,
                "longitude": 30.889484,
                "Dealer": "Indian Oil Corporation Ltd. - Laxmi S/stn.",
                "Address": "Ferozepur Road  Ludhiana   - myLPG.eu",
                "wall": 1,
                "j-1772": 2,
                "CHAdeMO": 2,
                "Tesla(roadster)": 2,
                "NEMA 14-50": 4,
                "Tesla": 4,
                "Type-2": 3,
                "Type-3": 3,
                "wall(BS1361)": 2,
                "Wall(euro)": 3,
                "Commando": 1,
                "wall(AU/NZ)": 2,
                "Caravan Mains": 1,
                "CCS/SAE": 2,
                "THREEPhase": 1
            },
            {
                "latitude": 76.765385,
                "longitude": 30.728953,
                "Dealer": "Bharat Petroleum Corporation Ltd. - Eem Pee Motors",
                "Address": "Sector- 22   Chandigarh   - myLPG.eu",
                "wall": 4,
                "j-1772": 2,
                "CHAdeMO": 0,
                "Tesla(roadster)": 1,
                "NEMA 14-50": 2,
                "Tesla": 1,
                "Type-2": 0,
                "Type-3": 0,
                "wall(BS1361)": 4,
                "Wall(euro)": 4,
                "Commando": 1,
                "wall(AU/NZ)": 1,
                "Caravan Mains": 1,
                "CCS/SAE": 3,
                "THREEPhase": 2
            },
            {
                "latitude": 76.77089,
                "longitude": 30.724168,
                "Dealer": "Indian Oil Corporation Ltd. - M/s.allied S/stn.",
                "Address": "Sector 34-b  Chandigarh   - myLPG.eu",
                "wall": 1,
                "j-1772": 3,
                "CHAdeMO": 2,
                "Tesla(roadster)": 1,
                "NEMA 14-50": 4,
                "Tesla": 0,
                "Type-2": 0,
                "Type-3": 2,
                "wall(BS1361)": 1,
                "Wall(euro)": 3,
                "Commando": 0,
                "wall(AU/NZ)": 2,
                "Caravan Mains": 4,
                "CCS/SAE": 4,
                "THREEPhase": 4
            },
            {
                "latitude": 76.748925,
                "longitude": 30.709685,
                "Dealer": "Indian Oil Petrol Pump + CNG Station",
                "Address": "Sector 44C 160047 Chandigarh - myLPG.eu",
                "wall": 3,
                "j-1772": 2,
                "CHAdeMO": 0,
                "Tesla(roadster)": 3,
                "NEMA 14-50": 4,
                "Tesla": 3,
                "Type-2": 4,
                "Type-3": 0,
                "wall(BS1361)": 1,
                "Wall(euro)": 1,
                "Commando": 2,
                "wall(AU/NZ)": 4,
                "Caravan Mains": 1,
                "CCS/SAE": 2,
                "THREEPhase": 3
            },
            {
                "latitude": 76.403392,
                "longitude": 30.562832,
                "Dealer": "Indian Oil Corporation Ltd. - Hemkunt Service Station",
                "Address": "Sirhind Road   - myLPG.eu",
                "wall": 3,
                "j-1772": 3,
                "CHAdeMO": 1,
                "Tesla(roadster)": 4,
                "NEMA 14-50": 3,
                "Tesla": 1,
                "Type-2": 2,
                "Type-3": 1,
                "wall(BS1361)": 0,
                "Wall(euro)": 0,
                "Commando": 2,
                "wall(AU/NZ)": 0,
                "Caravan Mains": 2,
                "CCS/SAE": 3,
                "THREEPhase": 1
            },
            {
                "latitude": 78.003912,
                "longitude": 30.332848,
                "Dealer": "Indian Oil Corporation Ltd. - Ashirwad Filling Station",
                "Address": "Ballupur  Chakrata Road  Dehradun- 248 001   - myLPG.eu",
                "wall": 4,
                "j-1772": 3,
                "CHAdeMO": 3,
                "Tesla(roadster)": 3,
                "NEMA 14-50": 4,
                "Tesla": 0,
                "Type-2": 1,
                "Type-3": 4,
                "wall(BS1361)": 4,
                "Wall(euro)": 2,
                "Commando": 4,
                "wall(AU/NZ)": 1,
                "Caravan Mains": 4,
                "CCS/SAE": 0,
                "THREEPhase": 1
            },
            {
                "latitude": 77.301108,
                "longitude": 30.290986,
                "Dealer": "Vanaz Engineers Ltd. - Maa Sharada Auto LPG Pump.",
                "Address": "at Post Parsada  Raipur-bilaspur Road  Bilaspur.   - myLPG.eu",
                "wall": 4,
                "j-1772": 0,
                "CHAdeMO": 0,
                "Tesla(roadster)": 0,
                "NEMA 14-50": 0,
                "Tesla": 3,
                "Type-2": 2,
                "Type-3": 3,
                "wall(BS1361)": 0,
                "Wall(euro)": 0,
                "Commando": 2,
                "wall(AU/NZ)": 0,
                "Caravan Mains": 3,
                "CCS/SAE": 2,
                "THREEPhase": 2
            },
            {
                "latitude": 78.149354,
                "longitude": 30.166599,
                "Dealer": "Indian Oil Corporation Ltd. - Shaheed Chandrawat",
                "Address": "Majri Mafi  Dehradun   - myLPG.eu",
                "wall": 4,
                "j-1772": 4,
                "CHAdeMO": 0,
                "Tesla(roadster)": 4,
                "NEMA 14-50": 0,
                "Tesla": 2,
                "Type-2": 3,
                "Type-3": 0,
                "wall(BS1361)": 1,
                "Wall(euro)": 2,
                "Commando": 3,
                "wall(AU/NZ)": 2,
                "Caravan Mains": 4,
                "CCS/SAE": 1,
                "THREEPhase": 3
            },
            {
                "latitude": 78.784643,
                "longitude": 30.132249,
                "Dealer": "Aegis Logistics Ltd. - Mansha Agency",
                "Address": "Plot No. 53  Panvel Co-op. Industrial Estate Ltd.  Old Bombay- Pune Road  Tal. Panvel  Dist. Raigad-410 206   - myLPG.eu",
                "wall": 1,
                "j-1772": 0,
                "CHAdeMO": 0,
                "Tesla(roadster)": 2,
                "NEMA 14-50": 3,
                "Tesla": 3,
                "Type-2": 0,
                "Type-3": 0,
                "wall(BS1361)": 1,
                "Wall(euro)": 3,
                "Commando": 1,
                "wall(AU/NZ)": 2,
                "Caravan Mains": 3,
                "CCS/SAE": 4,
                "THREEPhase": 3
            },
            {
                "latitude": 77.55274,
                "longitude": 29.962583,
                "Dealer": "Indian Oil Corporation Ltd. - Deepshikha Service Station",
                "Address": "3/1328/66  Civil Lines  Bajoria Marg (pin 247001)   - myLPG.eu",
                "wall": 1,
                "j-1772": 0,
                "CHAdeMO": 0,
                "Tesla(roadster)": 0,
                "NEMA 14-50": 4,
                "Tesla": 4,
                "Type-2": 1,
                "Type-3": 4,
                "wall(BS1361)": 3,
                "Wall(euro)": 3,
                "Commando": 4,
                "wall(AU/NZ)": 4,
                "Caravan Mains": 0,
                "CCS/SAE": 3,
                "THREEPhase": 1
            },
            {
                "latitude": 78.005393,
                "longitude": 29.945663,
                "Dealer": "Indian Oil Corporation Ltd. - Amol Filling Station",
                "Address": "Chutmalpur-dehradun Rd  Amanat Garh  Distt Hardwar   - myLPG.eu",
                "wall": 2,
                "j-1772": 1,
                "CHAdeMO": 0,
                "Tesla(roadster)": 1,
                "NEMA 14-50": 1,
                "Tesla": 3,
                "Type-2": 1,
                "Type-3": 2,
                "wall(BS1361)": 1,
                "Wall(euro)": 0,
                "Commando": 4,
                "wall(AU/NZ)": 2,
                "Caravan Mains": 2,
                "CCS/SAE": 3,
                "THREEPhase": 0
            },
            {
                "latitude": 78.163819,
                "longitude": 29.945155,
                "Dealer": "Indian Oil Corporation Ltd. - Aastha Filling Station",
                "Address": "Shatranshah  Roorkee Road  Hardwar   - myLPG.eu",
                "wall": 2,
                "j-1772": 1,
                "CHAdeMO": 4,
                "Tesla(roadster)": 2,
                "NEMA 14-50": 2,
                "Tesla": 1,
                "Type-2": 1,
                "Type-3": 2,
                "wall(BS1361)": 3,
                "Wall(euro)": 1,
                "Commando": 4,
                "wall(AU/NZ)": 1,
                "Caravan Mains": 4,
                "CCS/SAE": 3,
                "THREEPhase": 0
            }
        ];
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      charger Info\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n   <ion-card  *ngFor="let charger of chargers">\n\n    <ion-card-header>\n\n    </ion-card-header>\n\n\n\n    <ion-list>\n\n      <button ion-item>\n\n        <ion-icon name="bus"  item-start></ion-icon>\n\n        {{charger.Dealer}}\n\n        <p> Price: {{charger.oneWay}} INR</p>\n\n      </button>\n\n      <br>\n\n      <br>\n\n      <b><p>Address: {{charger.Address}}</p></b>\n\n    </ion-list>\n\n  </ion-card>\n\n  <button ion-button (click)="payment()">Route</button> \n\n</ion-content>'/*ion-inline-end:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the QrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QrPage = /** @class */ (function () {
    function QrPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QrPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QrPage');
    };
    QrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qr',template:/*ion-inline-start:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\pages\qr\qr.html"*/'<!--\n\n  Generated template for the QrPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title><ion-icon name="add"></ion-icon> Vendor</ion-title>\n\n    \n\n  \n\n  </ion-navbar>\n\n  \n\n  \n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form >\n\n    <ion-item>\n\n      <ion-label>Todo</ion-label>\n\n      <ion-input type="text"  name="title"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Description</ion-label>\n\n      <ion-textarea  name="description"></ion-textarea>\n\n    </ion-item>\n\n    <button ion-button type="submit" block>Add Todo</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\pages\qr\qr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], QrPage);
    return QrPage;
}());

//# sourceMappingURL=qr.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__qr_qr__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__qr_qr__["a" /* QrPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Navigate" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="info" tabIcon="car"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="info" tabIcon="body"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_app__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, storage, as, nav) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.as = as;
        this.nav = nav;
    }
    AboutPage.prototype.submit = function () {
        var _this = this;
        localStorage.setItem('finalpt', this.finalpt);
        localStorage.setItem('startpt', this.startpt);
        this.data = {
            "from": {
                "address": "delhi , india"
            },
            "to": {
                "address": "punjab, india"
            },
            "waypoints": [],
            "vehicleType": "2AxlesAuto",
            "fuelPrice": "3.00",
            "fuelPriceCurrency": "INR",
            "fuelEfficiency": {
                "city": 24,
                "hwy": 30,
                "units": "mpg"
            }
        };
        this.as.getData(this.data).subscribe(function (res) {
            _this.result = res;
            localStorage.setItem('chargers', JSON.stringify(_this.result['routes'][0]['chargers']));
            console.log(_this.result['routes'][0]['chargers']);
            console.log(_this.result);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */]);
        }, function (err) {
            _this.error = "Someting Went Wrong";
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Direction\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Starting Point</ion-label>\n\n    <ion-input type="text"   [(ngModel)]="startpt"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Choose Destination</ion-label>\n\n    <ion-input type="text"   [(ngModel)]="finalpt"></ion-input>\n\n  </ion-item>\n\n<br>\n\n<br>\n\n  <button ion-button  color="secondary" (click)="submit()" block>Submit</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_app_app__["a" /* AppProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppProvider = /** @class */ (function () {
    function AppProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.serveUrl = "https://dev.chargerguru.com/beta00/calc/gmaps";
    }
    AppProvider.prototype.getData = function (data) {
        this.data = {
            "from": {
                "address": localStorage.getItem('startpt')
            },
            "to": {
                "address": localStorage.getItem('finalpt')
            },
            "waypoints": [],
            "vehicleType": "2AxlesAuto",
            "fuelPrice": "3.00",
            "fuelPriceCurrency": "INR",
            "fuelEfficiency": {
                "city": 24,
                "hwy": 30,
                "units": "mpg"
            }
        };
        return this.http.post(this.serveUrl, this.data, { headers: { 'x-api-key': 'VIOKBvXJB734l1qfl78uGauzX0epsrl65IxolBuC' } });
    };
    AppProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AppProvider);
    return AppProvider;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_routing_machine__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_routing_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet_routing_machine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_geosearch__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_geosearch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet_geosearch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, http, cdr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.cdr = cdr;
        this.selected_station = 0;
        this.stations = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
        //setup leaflet map
        this.loadmap();
    };
    HomePage.prototype.loadmap = function () {
        var _this = this;
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map");
        console.log(this.map);
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(this.map);
        var myCustomColour = '#583470';
        var markerHtmlStyles = "\n      background-color: " + myCustomColour + ";\n      width: 3rem;\n      height: 3rem;\n      display: block;\n      left: -1.5rem;\n      top: -1.5rem;\n      position: relative;\n      border-radius: 3rem 3rem 0;\n      transform: rotate(45deg);\n      border: 1px solid #FFFFFF";
        var icon = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.divIcon({
            className: "my-custom-pin",
            iconAnchor: [0, 24],
            labelAnchor: [-6, 0],
            popupAnchor: [0, -36],
            html: "<span style=\"" + markerHtmlStyles + "\" />"
        });
        /*this.map.locate({
          setView: true,
          maxZoom: 10
        }).on('locationfound', (e) => {
          let markerGroup = leaflet.featureGroup();
          let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {})
          markerGroup.addLayer(marker);
          this.map.addLayer(markerGroup);
          console.log(e)
        }).on('locationerror', (err) => {
          alert(err.message);
        })*/
        this.map.locate({
            setView: true,
            maxZoom: 10
        }).on('locationfound', function (e) {
        }).on('click', function (e) {
            var long_var = document.getElementById("long_var")['value'], lat_var = document.getElementById("lat_var")['value'];
            _this.http.get('https://evcypher.herokuapp.com/ev/near_points?lat=' + e.latlng.lat + '&long=' + e.latlng.lng + '&lat_var=' + lat_var + '&long_var=' + long_var).subscribe(function (data) {
                markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
                var _loop_1 = function (x) {
                    data[x].data = JSON.parse(data[x].data);
                    var marker_1 = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([data[x].lat, data[x].long], { 'icon': icon }).on('mouseover', function (e) {
                        var ele = document.getElementById("info");
                        _this.selected_station = data[x];
                        ele.style.top = e.originalEvent.screenY + "px";
                        ele.style.left = e.originalEvent.screenX + "px";
                        _this.refresh();
                    }).on('mouseout', function (e) {
                        var ele = document.getElementById("info");
                        ele.style.top = "-500px";
                    });
                    markerGroup.addLayer(marker_1);
                    _this.map.addLayer(markerGroup);
                };
                for (var x in data) {
                    _loop_1(x);
                }
            });
            console.log([e.latlng.lat, e.latlng.lng]);
            var markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
            var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([e.latlng.lat, e.latlng.lng]).on('click', function (e) { console.log(e); });
            markerGroup.addLayer(marker);
            _this.map.addLayer(markerGroup);
        });
        var provider = new __WEBPACK_IMPORTED_MODULE_4_leaflet_geosearch__["OpenStreetMapProvider"]();
        var searchControl = new __WEBPACK_IMPORTED_MODULE_4_leaflet_geosearch__["GeoSearchControl"]({
            provider: provider,
        });
        this.map.addControl(searchControl);
    };
    HomePage.prototype.refresh = function () {
        this.cdr.detectChanges();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapContainer", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\pages\home\home.html"*/'<!--\n\n  Generated template for the Map page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<div id="info" style="padding:5px;position: absolute; z-index: 100;top:-100px; left:0;min-width: 150px; min-height: 100px; background-color: white;">\n\n  <p>Dealer : {{selected_station.dealer}}</p>\n\n  <p> : {{selected_station.dealer}}</p>\n\n  <table *ngIf="selected_station.data!=null">\n\n      <tr><th>Type</th><th>Total</th><th>Occupied</th></tr>\n\n      <tr><td>Wall</td><td>{{selected_station.data?.wall}}</td><td>{{selected_station.data[\'wall-a\']}}</td></tr>\n\n      <tr><td>CHAdeMO</td><td>{{selected_station.data[\'CHAdeMO\']}}</td><td>{{selected_station.data[\'CHAdeMO-a\']}}</td></tr>\n\n      <tr><td>Tesla(roadster)</td><td>{{selected_station.data[\'Tesla(roadster)\']}}</td><td>{{selected_station.data[\'Tesla(roadster)-a\']}}</td></tr>\n\n      <tr><td>NEMA 14-50</td><td>{{selected_station.data[\'NEMA 14-50\']}}</td><td>{{selected_station.data[\'NEMA 14-50-a\']}}</td></tr>\n\n      <tr><td>Tesla</td><td>{{selected_station.data[\'Tesla\']}}</td><td>{{selected_station.data[\'Tesla-a\']}}</td></tr>\n\n      <tr><td>Type-2</td><td>{{selected_station.data[\'Type-2\']}}</td><td>{{selected_station.data[\'Type-2-a\']}}</td></tr>\n\n      <tr><td>Type-3</td><td>{{selected_station.data[\'Type-3\']}}</td><td>{{selected_station.data[\'Type-3-a\']}}</td></tr>\n\n  </table>\n\n</div>\n\n<div style="position: fixed; top:50px; left:50px; z-index: 99;">\n\n  <input type="number" id="lat_var" value="0.0710858315348375">\n\n  <input type="number" id="long_var" value="0.06729125976561079">\n\n</div>\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Map</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div id="map" style="width:100%; height:100%;"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_card_card__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_qr_qr__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_app_app__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_qr_qr__["a" /* QrPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_qr_qr__["a" /* QrPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__["a" /* Stripe */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_app_app__["a" /* AppProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__qr_qr__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardPage = /** @class */ (function () {
    function CardPage(navCtrl, navParams, stripe, http, nav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stripe = stripe;
        this.http = http;
        this.nav = nav;
        this.cardinfo = {
            number: '',
            expMonth: '',
            expYear: '',
            cvc: ''
        };
    }
    CardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardPage');
    };
    CardPage.prototype.pay = function () {
        var _this = this;
        this.stripe.setPublishableKey("pk_test_N8Ew0gMnDu3OTYzNMVoUPdIO");
        this.stripe.createCardToken(this.cardinfo).then(function (token) {
            var data = 'stripetoken=' + token + '&amount=50';
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Conent-Type', 'application/x-www-form-urlencoded');
            _this.http.post('http://localhost:8100/processpay', data, { headers: headers }).subscribe(function (res) {
                if (res.json().success)
                    alert('transaction Successfull!!');
            });
        });
    };
    CardPage.prototype.payDone = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__qr_qr__["a" /* QrPage */]);
    };
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card',template:/*ion-inline-start:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\pages\card\card.html"*/'<!--\n\n  Generated template for the CardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>card</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <!-- <ion-input [(ngModel)]="cardinfo.number" placeholder="card number"></ion-input>\n\n  <ion-input [(ngModel)]="cardinfo.expMonth" placeholder="expiry month"></ion-input>\n\n  <ion-input [(ngModel)]="cardinfo.expYear" placeholder="expiry year"></ion-input>\n\n  <ion-input [(ngModel)]="cardinfo.cvc" placeholder="cvc"></ion-input>\n\n  <button ion-button (click)="pay()"> Pay Now </button> -->\n\n\n\n  <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Card Number</ion-label>\n\n        <ion-input type="text" ></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label floating>Card Holder\'s Name</ion-label>\n\n          <ion-input type="text" ></ion-input>\n\n        </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Exp. Date</ion-label>\n\n        <ion-input type="text" ></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>cvv</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Pin</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n    \n\n      <ion-item>\n\n        <ion-label>Save Card</ion-label>\n\n        <ion-checkbox color="dark" checked="false">Save Card</ion-checkbox>\n\n      </ion-item>\n\n    \n\n        <button ion-button (click)="payDone()" padding>Pay</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Govind Singh\Documents\WORK-INTERN\New folder\EVCMS\ev\src\pages\card\card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map