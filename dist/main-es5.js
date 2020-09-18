(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/namindu/Desktop/AStoryFronEnd/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3TnI":
    /*!**************************************************************!*\
      !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
      \**************************************************************/

    /*! exports provided: AuthLayoutComponent */

    /***/
    function TnI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () {
        return AuthLayoutComponent;
      });
      /* harmony import */


      var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./auth-layout.component.html */
      "WSaj");
      /* harmony import */


      var _auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth-layout.component.scss */
      "FkQd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AuthLayoutComponent = /*#__PURE__*/function () {
        function AuthLayoutComponent(router) {
          _classCallCheck(this, AuthLayoutComponent);

          this.router = router;
          this.test = new Date();
          this.isCollapsed = true;
        }

        _createClass(AuthLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var html = document.getElementsByTagName("html")[0];
            html.classList.add("auth-layout");
            var body = document.getElementsByTagName("body")[0];
            body.classList.add("bg-default");
            this.router.events.subscribe(function (event) {
              _this.isCollapsed = true;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var html = document.getElementsByTagName("html")[0];
            html.classList.remove("auth-layout");
            var body = document.getElementsByTagName("body")[0];
            body.classList.remove("bg-default");
          }
        }]);

        return AuthLayoutComponent;
      }();

      AuthLayoutComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AuthLayoutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-auth-layout',
        template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AuthLayoutComponent);
      /***/
    },

    /***/
    "AK6u":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AK6u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Sidenav -->\n<app-sidebar></app-sidebar>\n<div class=\"main-content\">\n  <!-- Top navbar -->\n  <app-navbar></app-navbar>\n  <!-- Pages -->\n  <router-outlet></router-outlet>\n\n  <app-footer></app-footer>\n\n</div>";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiBaseUrl: 'https://astory.azurewebsites.net'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BY73":
    /*!*******************************************!*\
      !*** ./src/app/Api/auther-api.service.ts ***!
      \*******************************************/

    /*! exports provided: AutherApiService */

    /***/
    function BY73(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutherApiService", function () {
        return AutherApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _api_wrapper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api-wrapper.service */
      "lbQx");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AutherApiService = /*#__PURE__*/function () {
        function AutherApiService(_http, wrapperHttp) {
          _classCallCheck(this, AutherApiService);

          this._http = _http;
          this.wrapperHttp = wrapperHttp;
        }

        _createClass(AutherApiService, [{
          key: "addUserToDataBase",
          value: function addUserToDataBase(user) {
            return this._http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl, "/api/auther/AddAuther"), user);
          }
        }, {
          key: "editAuther",
          value: function editAuther(user) {
            return this._http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl, "/api/auther/EditAuther"), user);
          }
        }]);

        return AutherApiService;
      }();

      AutherApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _api_wrapper_service__WEBPACK_IMPORTED_MODULE_3__["ApiWrapperService"]
        }];
      };

      AutherApiService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _api_wrapper_service__WEBPACK_IMPORTED_MODULE_3__["ApiWrapperService"]])], AutherApiService);
      /***/
    },

    /***/
    "F5kq":
    /*!**************************************!*\
      !*** ./src/Services/Auth.service.ts ***!
      \**************************************/

    /*! exports provided: AuthService */

    /***/
    function F5kq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase/auth */
      "6nsN");
      /* harmony import */


      var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/database */
      "Zs65");
      /* harmony import */


      var src_app_Api_auther_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Api/auther-api.service */
      "BY73");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AuthService = /*#__PURE__*/function () {
        // tslint:disable-next-line:no-shadowed-variable
        function AuthService(autherApi, router) {
          _classCallCheck(this, AuthService);

          this.autherApi = autherApi;
          this.router = router;
          this.isLoading = false;
          var firebaseConfig = {
            apiKey: 'AIzaSyAL55WRYmO6qmtJFmNMsXaj0i8xNmS8vNg',
            authDomain: 'astoryauthentication.firebaseapp.com',
            databaseURL: 'https://astoryauthentication.firebaseio.com',
            projectId: 'astoryauthentication',
            storageBucket: 'astoryauthentication.appspot.com',
            messagingSenderId: '455029444246',
            appId: '1:455029444246:web:e2511268b70f0079c17cb7',
            measurementId: 'G-4N10QD6P4F'
          }; // Initialize Firebase

          firebase_app__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](firebaseConfig); // Firebase.analytics();
        }

        _createClass(AuthService, [{
          key: "userSignIn",
          value: function userSignIn() {
            var _this2 = this;

            this.isLoading = true;
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider(); // open google signin window

            firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithPopup(provider).then(function (result) {
              // The signed-in user info.
              var user = result.user;
              _this2.isLoading = true;
              result.user.getIdTokenResult().then(function (t) {
                _this2.token = t.token;
              });
              var userLocal = {
                address: '',
                firstName: user.displayName.split(' ')[0],
                lastName: user.displayName.split(' ')[1],
                phoneNumber: user.phoneNumber,
                profilePictureUrl: user.photoURL,
                email: user.email,
                autherId: undefined
              };

              _this2.autherApi.addUserToDataBase(userLocal).subscribe(function (users) {
                _this2.isLoading = true;

                _this2.saveSignInUserToLocalStore(users, _this2.token, user.refreshToken);
              });
            })["catch"](function (error) {
              _this2.isLoading = false;
              var errorCode = error.code;
              console.log('errorCode', errorCode);
              var errorMessage = error.message;
              console.log('errorMessage', errorMessage);
              var email = error.email;
              console.log('email', email);
              var credential = error.credential;
              console.log('credential', credential);
            });
          }
        }, {
          key: "saveSignInUserToLocalStore",
          value: function saveSignInUserToLocalStore(user, accessToken, refreshToken) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            this.isLoading = false;
            this.router.navigate(['/dashboard']);
          }
        }, {
          key: "isSignedInUser",
          value: function isSignedInUser() {
            if (localStorage.getItem('user') !== null && localStorage.getItem('token') !== null && localStorage.getItem('refreshToken')) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.router.navigate(['/login']);
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: src_app_Api_auther_api_service__WEBPACK_IMPORTED_MODULE_4__["AutherApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      AuthService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [src_app_Api_auther_api_service__WEBPACK_IMPORTED_MODULE_4__["AutherApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], AuthService);
      /***/
    },

    /***/
    "FkQd":
    /*!****************************************************************!*\
      !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function FkQd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "KKA+":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KKA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-vertical navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\">\n  <div class=\"container-fluid\">\n    <!-- Toggler -->\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\n      aria-controls=\"sidenav-collapse-main\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Brand -->\n    <a class=\"navbar-brand pt-0\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n      <img src=\"./assets/img/brand/red.png\" class=\"navbar-brand-img\" alt=\"...\">\n    </a>\n    <!-- User -->\n    <ul class=\"nav align-items-center d-md-none\">\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link nav-link-icon\" role=\"button\" ngbDropdownToggle>\n          <i class=\"ni ni-bell-55\"></i>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link\" role=\"button\" ngbDropdownToggle>\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img alt=\"Image placeholder\" [src]=\"user.profilePictureUrl\">\n            </span>\n          </div>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-settings-gear-65\"></i>\n            <span>Settings</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            <span>Activity</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-support-16\"></i>\n            <span>Support</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"javascript:void(0)\" (click)=\"logout()\" class=\"dropdown-item\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n      <!-- Collapse header -->\n      <div class=\"navbar-collapse-header d-md-none\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n              <img src=\"./assets/img/brand/blue.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-4 mb-3 d-md-none\">\n        <div class=\"input-group input-group-rounded input-group-merge\">\n          <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\"\n            aria-label=\"Search\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <span class=\"fa fa-search\"></span>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- Navigation -->\n      <ul class=\"navbar-nav\">\n        <li *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n          <a routerLinkActive=\"active\" [routerLink]=\"[menuItem.path]\" class=\"nav-link\">\n            <i class=\"ni {{menuItem.icon}}\"></i>\n            {{menuItem.title}}\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>";
      /***/
    },

    /***/
    "LmEr":
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function LmEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "WwN9");
      /* harmony import */


      var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./footer.component.scss */
      "yZN6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.test = new Date();
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], FooterComponent);
      /***/
    },

    /***/
    "Ls9r":
    /*!*********************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function Ls9r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "P6kD":
    /*!****************************************************************!*\
      !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
      \****************************************************************/

    /*! exports provided: AdminLayoutComponent */

    /***/
    function P6kD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
        return AdminLayoutComponent;
      });
      /* harmony import */


      var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "AK6u");
      /* harmony import */


      var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-layout.component.scss */
      "vtrx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent() {
          _classCallCheck(this, AdminLayoutComponent);
        }

        _createClass(AdminLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminLayoutComponent;
      }();

      AdminLayoutComponent.ctorParameters = function () {
        return [];
      };

      AdminLayoutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-admin-layout',
        template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], AdminLayoutComponent);
      /***/
    },

    /***/
    "S6iF":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function S6iF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n  <div class=\"container-fluid\">\n    <!-- Brand -->\n    <a class=\"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block\" routerLinkActive=\"active\"\n      [routerLink]=\"['/dashboard']\">{{getTitle()}}</a>\n    <!-- Form -->\n    <div class=\" navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n      <div class=\"form-group mb-0\">\n        <div class=\"input-group input-group-alternative\">\n          <button class=\"btn btn-icon btn-2 btn-primary\" (click)=\"navigateToCreatePost()\" type=\"button\">\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-fat-add\"></i></span>\n            Creat A Story\n          </button>\n        </div>\n\n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"form-group mb-0\">\n        <div class=\"input-group input-group-alternative\">\n          <button class=\"btn btn-icon btn-2 btn-success\" (click)=\"navigateToCreateEpisode()\" type=\"button\">\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-fat-add\"></i></span>\n            Add Episode\n          </button>\n        </div>\n\n      </div>\n    </div>\n    <!-- User -->\n    <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link pr-0\" role=\"button\" ngbDropdownToggle>\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img alt=\"Image placeholder\" [src]=\"user.profilePictureUrl\">\n            </span>\n            <div class=\"media-body ml-2 d-none d-lg-block\">\n              <span class=\"mb-0 text-sm  font-weight-bold\">{{user.firstName}} {{user.lastName}}</span>\n            </div>\n          </div>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-settings-gear-65\"></i>\n            <span>Settings</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            <span>Activity</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-support-16\"></i>\n            <span>Support</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"javascript:void(0)\" (click)=\"logout()\" class=\"dropdown-item\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'argon-dashboard-angular';
      };

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "WSaj":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WSaj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }} <a href=\"#\" class=\"font-weight-bold ml-1\" target=\"_blank\">A Story App</a>\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\" target=\"_blank\">A Story App</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\" target=\"_blank\">About Us</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\" target=\"_blank\">More Details</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\" target=\"_blank\"></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>";
      /***/
    },

    /***/
    "WwN9":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function WwN9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"footer\">\n  <div class=\"row align-items-center justify-content-xl-between\">\n    <div class=\"col-xl-6\">\n      <div class=\"copyright text-center text-xl-left text-muted\">\n        &copy; {{ test | date: \"yyyy\" }} <a href=\"#\" class=\"font-weight-bold ml-1\" target=\"_blank\">A Story Pvt(ltd)</a>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n      <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n        <li class=\"nav-item\">\n          <a href=\"#\" class=\"nav-link\" target=\"_blank\">A Story</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"#\" class=\"nav-link\" target=\"_blank\">About Us</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>";
      /***/
    },

    /***/
    "XWvF":
    /*!***********************************************!*\
      !*** ./src/app/AuthGurd/auth-gurd.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthGurdService */

    /***/
    function XWvF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGurdService", function () {
        return AuthGurdService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/Services/Auth.service */
      "F5kq");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AuthGurdService = /*#__PURE__*/function () {
        function AuthGurdService(router, authService) {
          _classCallCheck(this, AuthGurdService);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGurdService, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "canActivate",
          value: function canActivate() {
            if (this.authService.isSignedInUser()) {
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        }]);

        return AuthGurdService;
      }();

      AuthGurdService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      AuthGurdService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'any'
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], AuthGurdService);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");
      /* harmony import */


      var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./layouts/auth-layout/auth-layout.component */
      "3TnI");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/components.module */
      "j1ZV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _Api_token_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./Api/token.interceptor */
      "mg30");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _Api_token_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");
      /* harmony import */


      var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layouts/auth-layout/auth-layout.component */
      "3TnI");
      /* harmony import */


      var _AuthGurd_auth_gurd_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./AuthGurd/auth-gurd.service */
      "XWvF");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [_AuthGurd_auth_gurd_service__WEBPACK_IMPORTED_MODULE_6__["AuthGurdService"]]
      }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
          path: '',
          loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
          canActivate: [_AuthGurd_auth_gurd_service__WEBPACK_IMPORTED_MODULE_6__["AuthGurdService"]]
        }]
      }, {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
        children: [{
          path: '',
          loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
        }]
      }, {
        path: '**',
        redirectTo: 'dashboard',
        canActivate: [_AuthGurd_auth_gurd_service__WEBPACK_IMPORTED_MODULE_6__["AuthGurdService"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
          useHash: true
        })],
        exports: []
      })], AppRoutingModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports, __webpack_require__) {
      var map = {
        "./layouts/admin-layout/admin-layout.module": ["IqXj", "layouts-admin-layout-admin-layout-module"],
        "./layouts/auth-layout/auth-layout.module": ["PTPi", "layouts-auth-layout-auth-layout-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "crnd";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "hrlM":
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function hrlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "S6iF");
      /* harmony import */


      var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navbar.component.scss */
      "Ls9r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../sidebar/sidebar.component */
      "zBoC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/Services/Auth.service */
      "F5kq");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(location, element, router, authService) {
          _classCallCheck(this, NavbarComponent);

          this.element = element;
          this.authService = authService;
          this.location = location;
          this.router = router;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) {
              return listTitle;
            });
            this.user = JSON.parse(localStorage.getItem('user'));
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            var titlee = this.location.prepareExternalUrl(this.location.path());

            if (titlee.charAt(0) === '#') {
              titlee = titlee.slice(1);
            }

            for (var item = 0; item < this.listTitles.length; item++) {
              if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
              }
            }

            return 'Dashboard';
          }
        }, {
          key: "navigateToCreatePost",
          value: function navigateToCreatePost() {
            this.router.navigateByUrl('/create-story');
          }
        }, {
          key: "navigateToCreateEpisode",
          value: function navigateToCreateEpisode() {
            this.router.navigateByUrl('/add-episode');
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      };

      NavbarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], NavbarComponent);
      /***/
    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "zBoC");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer/footer.component */
      "LmEr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]],
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
        exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "jcT0":
    /*!***********************************************************!*\
      !*** ./src/app/components/sidebar/sidebar.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function jcT0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "lbQx":
    /*!********************************************!*\
      !*** ./src/app/Api/api-wrapper.service.ts ***!
      \********************************************/

    /*! exports provided: ApiWrapperService */

    /***/
    function lbQx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiWrapperService", function () {
        return ApiWrapperService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ApiWrapperService = /*#__PURE__*/function () {
        function ApiWrapperService(http, router) {
          _classCallCheck(this, ApiWrapperService);

          this.http = http;
          this.router = router;
        }

        _createClass(ApiWrapperService, [{
          key: "getAccesstokenByRefreshToken",
          value: function getAccesstokenByRefreshToken() {
            var formData = new FormData();
            formData.append('grant_type', 'refresh_token');
            formData.append('refresh_token', localStorage.getItem('refreshToken'));
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl, "/api/authentication/token"), formData);
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.router.navigate(['/login']);
          }
        }]);

        return ApiWrapperService;
      }();

      ApiWrapperService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      ApiWrapperService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ApiWrapperService);
      /***/
    },

    /***/
    "mg30":
    /*!******************************************!*\
      !*** ./src/app/Api/token.interceptor.ts ***!
      \******************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function mg30(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "41Ph");
      /* harmony import */


      var _api_wrapper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api-wrapper.service */
      "lbQx");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "9YHx");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! sweetalert2/dist/sweetalert2.js */
      "PdH4");
      /* harmony import */


      var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(authWrap, http) {
          _classCallCheck(this, TokenInterceptor);

          this.authWrap = authWrap;
          this.http = http;
          this.isRefreshing = false;
          this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this3 = this;

            if (localStorage.getItem('token')) {
              request = this.AddToken(request, localStorage.getItem('token'));
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (errors) {
              if (errors instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && errors.status === 401) {
                return _this3.handle401Error(request, next);
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errors);
              }
            }));
          }
        }, {
          key: "handle401Error",
          value: function handle401Error(request, next) {
            var _this4 = this;

            if (!this.isRefreshing) {
              this.isRefreshing = true;
              this.refreshTokenSubject.next(null);
              return this.authWrap.getAccesstokenByRefreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (token) {
                _this4.isRefreshing = false;

                _this4.refreshTokenSubject.next(token.id_token);

                localStorage.setItem('token', token.id_token);
                localStorage.setItem('refreshToken', token.refresh_token);
                return next.handle(_this4.AddToken(request, token.id_token));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (errors) {
                _this4.authWrap.logout();

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errors);
              }));
            } else {
              return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (token) {
                return (token === null || token === void 0 ? void 0 : token.id_token) !== null && (token === null || token === void 0 ? void 0 : token.refresh_token) !== null;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (token) {
                return next.handle(_this4.AddToken(request, token.id_token));
              }));
            }
          }
        }, {
          key: "AddToken",
          value: function AddToken(request, token) {
            return request.clone({
              setHeaders: {
                'Authorization': "Bearer ".concat(token)
              }
            });
          }
        }, {
          key: "requetRefreshToken",
          value: function requetRefreshToken() {
            var _this5 = this;

            this.authWrap.getAccesstokenByRefreshToken().subscribe(function (token) {
              localStorage.setItem('token', token.id_token);
              localStorage.setItem('refreshToken', token.refresh_token);

              _this5.tokenSubject.next(token);
            }, function (errors) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Session Expired', 'We are redirecting you to signin Page, Please Signin.', 'error');

              _this5.authWrap.logout();
            });
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ctorParameters = function () {
        return [{
          type: _api_wrapper_service__WEBPACK_IMPORTED_MODULE_3__["ApiWrapperService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      TokenInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_api_wrapper_service__WEBPACK_IMPORTED_MODULE_3__["ApiWrapperService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], TokenInterceptor);
      /***/
    },

    /***/
    "vtrx":
    /*!******************************************************************!*\
      !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function vtrx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "yZN6":
    /*!*********************************************************!*\
      !*** ./src/app/components/footer/footer.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function yZN6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "zBoC":
    /*!*********************************************************!*\
      !*** ./src/app/components/sidebar/sidebar.component.ts ***!
      \*********************************************************/

    /*! exports provided: ROUTES, SidebarComponent */

    /***/
    function zBoC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "KKA+");
      /* harmony import */


      var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sidebar.component.scss */
      "jcT0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/Services/Auth.service */
      "F5kq");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ROUTES = [{
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'ni-tv-2 text-primary',
        "class": ''
      }, {
        path: '/icons',
        title: 'Stats',
        icon: 'ni-chart-bar-32 text-blue',
        "class": ''
      }, {
        path: '/create-story',
        title: 'Create A Story',
        icon: 'ni-books text-orange',
        "class": ''
      }, {
        path: '/user-profile',
        title: 'User profile',
        icon: 'ni-single-02 text-yellow',
        "class": ''
      }, {
        path: '/tables',
        title: 'My Stories',
        icon: 'ni-bullet-list-67 text-red',
        "class": ''
      }];

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(router, authService) {
          _classCallCheck(this, SidebarComponent);

          this.router = router;
          this.authService = authService;
          this.isCollapsed = true;
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.menuItems = ROUTES.filter(function (menuItem) {
              return menuItem;
            });
            this.router.events.subscribe(function (event) {
              _this6.isCollapsed = true;
            });
            this.user = JSON.parse(localStorage.getItem('user'));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      SidebarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sidebar',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_Services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], SidebarComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /*!
      
      =========================================================
      * Argon Dashboard Angular - v1.1.0
      =========================================================
      
      * Product Page: https://www.creative-tim.com/product/argon-dashboard-angular
      * Copyright 2019 Creative Tim (https://www.creative-tim.com)
      * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md)
      
      * Coded by Creative Tim
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map