(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Mm4":
/*!********************************************************!*\
  !*** ./src/app/welloperator/welloperator.component.ts ***!
  \********************************************************/
/*! exports provided: WelloperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelloperatorComponent", function() { return WelloperatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/footer/footer.component */ "aF9I");






class WelloperatorComponent {
    constructor() {
        this.sideBarOpen = true;
    }
    ngOnInit() {
    }
    sideBarToggler() {
        this.sideBarOpen = !this.sideBarOpen;
    }
}
WelloperatorComponent.ɵfac = function WelloperatorComponent_Factory(t) { return new (t || WelloperatorComponent)(); };
WelloperatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelloperatorComponent, selectors: [["app-welloperator"]], decls: 18, vars: 1, consts: [[3, "toggleSideBarForMe"], ["mode", "side", 3, "opened"], ["routerLink", "wo-dashboard", "routerLinkActive", "active"], ["routerLink", "create-well", "routerLinkActive", "active"], ["routerLink", "my-wells", "routerLinkActive", "active"], ["routerLink", "propose-wells", "routerLinkActive", "active"]], template: function WelloperatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSideBarForMe", function WelloperatorComponent_Template_app_header_toggleSideBarForMe_0_listener() { return ctx.sideBarToggler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create Well");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My Wells");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Propose Wells");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.sideBarOpen);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsbG9wZXJhdG9yL3dlbGxvcGVyYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7QUFFSjs7QUFDRTtFQUNFLFlBQUE7QUFFSjs7QUFDRTtFQUNFLGFBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3dlbGxvcGVyYXRvci93ZWxsb3BlcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgbWF0LWRyYXdlciB7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWRyYXdlci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelloperatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welloperator',
                templateUrl: './welloperator.component.html',
                styleUrls: ['./welloperator.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\Blockchain Team\uicerc\src\main.ts */"zUnb");


/***/ }),

/***/ "0/d9":
/*!**********************************************!*\
  !*** ./src/app/modules/dashboard.service.ts ***!
  \**********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DashboardService {
    constructor() { }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BAfr":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");






class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 31, vars: 0, consts: [["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/"], ["matSubheader", ""], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/posts"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/wellstars"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/inbox"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/connect"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "UIC Projects Evaluation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "WellSTAR Database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "chat_bubble");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "In-app Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contact Supports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListSubheaderCssMatStyler"]], styles: [".host[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n.host[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%] {\n  text-align: middle;\n  padding: 0px 20px 20px 20px;\n}\n.host[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  object-fit: cover;\n  border-radius: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvc3Qge1xyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAucHJvZmlsZS1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "M95H":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _shared_widgets_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/widgets/card/card.component */ "SHZb");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _shared_widgets_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/widgets/table/table.component */ "b1OT");







class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 15, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "20px", 1, "stat-cards"], ["fxFlex", "30"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "20px"], ["fxFlex", "100"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to Smart Injection!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-widget-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-widget-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-widget-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-widget-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _shared_widgets_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _shared_widgets_table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "aZ8m");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "aF9I");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "BAfr");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widgets/card/card.component */ "SHZb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _widgets_table_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widgets/table/table.component */ "b1OT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _widgets_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./widgets/stepper/stepper.component */ "oRXo");




















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
        _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"],
        _widgets_table_table_component__WEBPACK_IMPORTED_MODULE_15__["TableComponent"],
        _widgets_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_18__["StepperComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
        _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"],
        _widgets_table_table_component__WEBPACK_IMPORTED_MODULE_15__["TableComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                    _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"],
                    _widgets_table_table_component__WEBPACK_IMPORTED_MODULE_15__["TableComponent"],
                    _widgets_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_18__["StepperComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"]
                ],
                exports: [
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                    _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"],
                    _widgets_table_table_component__WEBPACK_IMPORTED_MODULE_15__["TableComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Q0eg":
/*!*****************************************************!*\
  !*** ./src/app/welloperator/welloperator.module.ts ***!
  \*****************************************************/
/*! exports provided: WelloperatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelloperatorModule", function() { return WelloperatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/default/default.module */ "mBqM");
/* harmony import */ var _wo_dashboard_wo_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wo-dashboard/wo-dashboard.component */ "T/rv");
/* harmony import */ var _create_well_create_well_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-well/create-well.component */ "pRuL");
/* harmony import */ var _my_wells_my_wells_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-wells/my-wells.component */ "S7iG");
/* harmony import */ var _propose_wells_propose_wells_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./propose-wells/propose-wells.component */ "mOCl");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "+0xr");


















class WelloperatorModule {
}
WelloperatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WelloperatorModule });
WelloperatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WelloperatorModule_Factory(t) { return new (t || WelloperatorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_2__["DefaultModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelloperatorModule, { declarations: [_wo_dashboard_wo_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["WoDashboardComponent"],
        _create_well_create_well_component__WEBPACK_IMPORTED_MODULE_4__["CreateWellComponent"],
        _my_wells_my_wells_component__WEBPACK_IMPORTED_MODULE_5__["MyWellsComponent"],
        _propose_wells_propose_wells_component__WEBPACK_IMPORTED_MODULE_6__["ProposeWellsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_2__["DefaultModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelloperatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _wo_dashboard_wo_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["WoDashboardComponent"],
                    _create_well_create_well_component__WEBPACK_IMPORTED_MODULE_4__["CreateWellComponent"],
                    _my_wells_my_wells_component__WEBPACK_IMPORTED_MODULE_5__["MyWellsComponent"],
                    _propose_wells_propose_wells_component__WEBPACK_IMPORTED_MODULE_6__["ProposeWellsComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_2__["DefaultModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "S7iG":
/*!*************************************************************!*\
  !*** ./src/app/welloperator/my-wells/my-wells.component.ts ***!
  \*************************************************************/
/*! exports provided: MyWellsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWellsComponent", function() { return MyWellsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MyWellsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyWellsComponent.ɵfac = function MyWellsComponent_Factory(t) { return new (t || MyWellsComponent)(); };
MyWellsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyWellsComponent, selectors: [["app-my-wells"]], decls: 2, vars: 0, template: function MyWellsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-wells works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGxvcGVyYXRvci9teS13ZWxscy9teS13ZWxscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyWellsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-wells',
                templateUrl: './my-wells.component.html',
                styleUrls: ['./my-wells.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SHZb":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.ts ***!
  \*******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-widget-card"]], decls: 2, vars: 0, template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "card works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'dashboard';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "T/rv":
/*!*********************************************************************!*\
  !*** ./src/app/welloperator/wo-dashboard/wo-dashboard.component.ts ***!
  \*********************************************************************/
/*! exports provided: WoDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoDashboardComponent", function() { return WoDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class WoDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
WoDashboardComponent.ɵfac = function WoDashboardComponent_Factory(t) { return new (t || WoDashboardComponent)(); };
WoDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WoDashboardComponent, selectors: [["app-wo-dashboard"]], decls: 4, vars: 0, template: function WoDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "wo-dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " hello there dashboard!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGxvcGVyYXRvci93by1kYXNoYm9hcmQvd28tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WoDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wo-dashboard',
                templateUrl: './wo-dashboard.component.html',
                styleUrls: ['./wo-dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/default/default.module */ "mBqM");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _welloperator_welloperator_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welloperator/welloperator.module */ "Q0eg");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_5__["DefaultModule"],
            _welloperator_welloperator_module__WEBPACK_IMPORTED_MODULE_7__["WelloperatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_5__["DefaultModule"],
        _welloperator_welloperator_module__WEBPACK_IMPORTED_MODULE_7__["WelloperatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_5__["DefaultModule"],
                    _welloperator_welloperator_module__WEBPACK_IMPORTED_MODULE_7__["WelloperatorModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A9 All right reserved to V.V. - 2020\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]], styles: ["footer[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");







class HeaderComponent {
    constructor() {
        this.toggleSideBarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    toggleSideBar() {
        this.toggleSideBarForMe.emit();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { toggleSideBarForMe: "toggleSideBarForMe" }, decls: 31, vars: 1, consts: [["color", "primary"], ["mat-icon-button", "", 3, "click"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "flex-end"], ["fxLayout", "row", "fxLayoutGap", "20px"], ["mat-icon-button", ""], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.toggleSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Smart Injection LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "person_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "mail_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: ["ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, { toggleSideBarForMe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "awxO":
/*!**************************************************!*\
  !*** ./src/app/modules/posts/posts.component.ts ***!
  \**************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PostsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 4, vars: 0, template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UIC Project Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Working on displaying list of pending projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-posts',
                templateUrl: './posts.component.html',
                styleUrls: ['./posts.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "b1OT":
/*!*********************************************************!*\
  !*** ./src/app/shared/widgets/table/table.component.ts ***!
  \*********************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");






function TableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " UIC Project No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.position, " ");
} }
function TableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lease ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.name, " ");
} }
function TableComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Owner ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.weight, " ");
} }
function TableComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Approval Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.symbol, " ");
} }
function TableComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
function TableComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
const _c0 = function () { return [5, 10, 20]; };
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
class TableComponent {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-widget-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 19, vars: 5, consts: [[1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UIC Projects Lookup Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableComponent_th_5_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableComponent_td_6_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableComponent_th_8_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableComponent_td_9_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableComponent_th_11_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableComponent_td_12_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableComponent_th_14_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableComponent_td_15_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableComponent_tr_16_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TableComponent_tr_17_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-paginator", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3dpZGdldHMvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvd2lkZ2V0cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss']
            }]
    }], function () { return []; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "mBqM":
/*!***************************************************!*\
  !*** ./src/app/layouts/default/default.module.ts ***!
  \***************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.component */ "xS3V");
/* harmony import */ var src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/dashboard/dashboard.component */ "M95H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/posts/posts.component */ "awxO");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/dashboard.service */ "0/d9");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var src_app_welloperator_welloperator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/welloperator/welloperator.component */ "/Mm4");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");


















class DefaultModule {
}
DefaultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DefaultModule });
DefaultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DefaultModule_Factory(t) { return new (t || DefaultModule)(); }, providers: [
        src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_13__["DashboardService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DefaultModule, { declarations: [_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
        src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"],
        src_app_welloperator_welloperator_component__WEBPACK_IMPORTED_MODULE_15__["WelloperatorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
                    src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                    src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"],
                    src_app_welloperator_welloperator_component__WEBPACK_IMPORTED_MODULE_15__["WelloperatorComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"]
                ],
                providers: [
                    src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_13__["DashboardService"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "mOCl":
/*!***********************************************************************!*\
  !*** ./src/app/welloperator/propose-wells/propose-wells.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProposeWellsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposeWellsComponent", function() { return ProposeWellsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProposeWellsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProposeWellsComponent.ɵfac = function ProposeWellsComponent_Factory(t) { return new (t || ProposeWellsComponent)(); };
ProposeWellsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProposeWellsComponent, selectors: [["app-propose-wells"]], decls: 2, vars: 0, template: function ProposeWellsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "propose-wells works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGxvcGVyYXRvci9wcm9wb3NlLXdlbGxzL3Byb3Bvc2Utd2VsbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProposeWellsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-propose-wells',
                templateUrl: './propose-wells.component.html',
                styleUrls: ['./propose-wells.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oRXo":
/*!*************************************************************!*\
  !*** ./src/app/shared/widgets/stepper/stepper.component.ts ***!
  \*************************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StepperComponent {
    constructor() { }
    ngOnInit() {
    }
}
StepperComponent.ɵfac = function StepperComponent_Factory(t) { return new (t || StepperComponent)(); };
StepperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepperComponent, selectors: [["app-stepper"]], decls: 2, vars: 0, template: function StepperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "stepper works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stepper',
                templateUrl: './stepper.component.html',
                styleUrls: ['./stepper.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pRuL":
/*!*******************************************************************!*\
  !*** ./src/app/welloperator/create-well/create-well.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateWellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWellComponent", function() { return CreateWellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




class CreateWellComponent {
    // createWellForm = this.fb.group({
    //   wellName: ['', Validators.required],
    //   lease: [''],
    //   wellType: ['']
    // });
    // private fb: FormBuilder
    constructor() { }
    ngOnInit() {
    }
}
CreateWellComponent.ɵfac = function CreateWellComponent_Factory(t) { return new (t || CreateWellComponent)(); };
CreateWellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateWellComponent, selectors: [["app-create-well"]], decls: 40, vars: 0, consts: [[2, "padding", "1.0em 1.5em 1.0em 1.5em"], ["type", "text", "id", "wellName", "name", "wellName"], ["type", "text", "id", "lease", "name", "lease"], ["fullWidth", "", "name", "wellType", "id", "wellType"], ["value", "I"], ["value", "M"], ["value", "R"], ["value", "X"], ["fullWidth", "", "name", "locationType", "id", "wellType"], ["value", "none"], ["value", "NAD27"]], template: function CreateWellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Create Well ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Full Well Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lease");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Well Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "I - Non-Hazardous Industrial Disposal Well ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "M - Non-Hazardous Municipal Disposal Well ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "R - Radioactive Waste Disposal Well ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "X - Other Class I Wells (not included) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Well Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "NAD27");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".card[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 0.1em;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsbG9wZXJhdG9yL2NyZWF0ZS13ZWxsL2NyZWF0ZS13ZWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3dlbGxvcGVyYXRvci9jcmVhdGUtd2VsbC9jcmVhdGUtd2VsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuMWVtO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateWellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-well',
                templateUrl: './create-well.component.html',
                styleUrls: ['./create-well.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/default/default.component */ "xS3V");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "M95H");
/* harmony import */ var _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/posts/posts.component */ "awxO");
/* harmony import */ var _welloperator_create_well_create_well_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welloperator/create-well/create-well.component */ "pRuL");
/* harmony import */ var _welloperator_my_wells_my_wells_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welloperator/my-wells/my-wells.component */ "S7iG");
/* harmony import */ var _welloperator_propose_wells_propose_wells_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welloperator/propose-wells/propose-wells.component */ "mOCl");
/* harmony import */ var _welloperator_welloperator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welloperator/welloperator.component */ "/Mm4");
/* harmony import */ var _welloperator_wo_dashboard_wo_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welloperator/wo-dashboard/wo-dashboard.component */ "T/rv");













const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'regulator', component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
        children: [
            { path: 'regulator', component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'uic', component: _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"] }
        ]
    },
    { path: 'welloperator', component: _welloperator_welloperator_component__WEBPACK_IMPORTED_MODULE_9__["WelloperatorComponent"],
        children: [
            { path: '', component: _welloperator_wo_dashboard_wo_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["WoDashboardComponent"] },
            { path: 'wo-dashboard', component: _welloperator_wo_dashboard_wo_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["WoDashboardComponent"] },
            { path: 'create-well', component: _welloperator_create_well_create_well_component__WEBPACK_IMPORTED_MODULE_6__["CreateWellComponent"] },
            { path: 'my-wells', component: _welloperator_my_wells_my_wells_component__WEBPACK_IMPORTED_MODULE_7__["MyWellsComponent"] },
            { path: 'propose-wells', component: _welloperator_propose_wells_propose_wells_component__WEBPACK_IMPORTED_MODULE_8__["ProposeWellsComponent"] }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 3, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xS3V":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/sidebar/sidebar.component */ "BAfr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ "aF9I");







class DefaultComponent {
    constructor() {
        this.sideBarOpen = true;
    }
    ngOnInit() { }
    sideBarToggler() {
        this.sideBarOpen = !this.sideBarOpen;
    }
}
DefaultComponent.ɵfac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(); };
DefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultComponent, selectors: [["app-default"]], decls: 7, vars: 1, consts: [[3, "toggleSideBarForMe"], ["mode", "side", 3, "opened"]], template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSideBarForMe", function DefaultComponent_Template_app_header_toggleSideBarForMe_0_listener() { return ctx.sideBarToggler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.sideBarOpen);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbm1hdC1kcmF3ZXIge1xyXG4gIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubWF0LWRyYXdlci1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-default',
                templateUrl: './default.component.html',
                styleUrls: ['./default.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map