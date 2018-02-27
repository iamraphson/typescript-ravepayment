"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    RavePayment.prototype.pay = function (raveOption) {
        this.loadAPI.then(function () {
            window.getpaidSetup(raveOption);
        });
    };
    return RavePayment;
}());
exports.default = RavePayment;
function Ravepay(isProduction) {
    if (isProduction === void 0) { isProduction = false; }
    return new RavePayment(isProduction);
}
exports.Ravepay = Ravepay;
//# sourceMappingURL=typescript-ravepayment.js.map