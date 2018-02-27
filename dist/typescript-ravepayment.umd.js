(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.typescriptRavepayment = {})));
}(this, (function (exports) { 'use strict';

var RavePayment = /** @class */ (function () {
    function RavePayment(isProduction) {
        if (isProduction === void 0) { isProduction = false; }
        var _this = this;
        this.isProduction = isProduction;
        this.loadAPI = new Promise(function (resolve) {
            _this.loadScript(function () {
                resolve();
            });
        });
    }
    RavePayment.prototype.pay = function (raveOption) {
        this.loadAPI.then(function () {
            window.getpaidSetup(raveOption);
        });
    };
    RavePayment.prototype.loadScript = function (callback) {
        var script = document.createElement('script');
        script.src = (!this.isProduction) ? 'http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/flwpbf-inline.js'
            : 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js';
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState === 'loaded' || script.readyState === 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        }
        else {
            script.onload = function () {
                callback();
            };
        }
        document.body.appendChild(script);
    };
    return RavePayment;
}());
function Ravepay(isProduction) {
    if (isProduction === void 0) { isProduction = false; }
    return new RavePayment(isProduction);
}

exports.default = RavePayment;
exports.Ravepay = Ravepay;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=typescript-ravepayment.umd.js.map
