"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
alert('test');
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var ImagesFactory = (function () {
    function ImagesFactory() {
    }
    ImagesFactory.prototype.getUrls = function () {
        var url = 'http://www.reddit.com/r/perfectloops/top.json?sort=top&t=week';
        return fetch(url)
            .then(function (response) { return response.json(); })
            .then(function (json) { return json.data.children
            .map(function (a) { return a.data.url; })
            .filter(function (a) { return /\.(gif|jpg|png)$/.exec(a); }); });
    };
    ImagesFactory = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ImagesFactory);
    return ImagesFactory;
}());
var MyAppComponent = (function () {
    function MyAppComponent(images) {
        var _this = this;
        this.name = "world";
        this.img = "oo";
        images.getUrls().then(function (ar) { return _this.img = ar[0]; });
    }
    MyAppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [ImagesFactory],
            templateUrl: "src/hello.html"
        }), 
        __metadata('design:paramtypes', [ImagesFactory])
    ], MyAppComponent);
    return MyAppComponent;
}());
browser_1.bootstrap(MyAppComponent);
hr && hr.on('change', function (fileName) {
    if (fileName.indexOf('html') !== -1) {
        var newBody = document.createElement('body');
        newBody.appendChild(document.createElement('my-app'));
        document.body = newBody;
        browser_1.bootstrap(MyAppComponent);
    }
});
//# sourceMappingURL=app.js.map