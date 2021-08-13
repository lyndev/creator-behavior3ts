"use strict";
cc._RF.push(module, '2874bKBC7NCt5sH5Q+TnxV7', 'B3Failer');
// libs/b3/actions/B3Failer.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3Failer = void 0;
var Constants_1 = require("../Constants");
var B3Action_1 = require("../core/B3Action");
var B3Failer = /** @class */ (function (_super) {
    __extends(B3Failer, _super);
    function B3Failer(d) {
        return _super.call(this, d || { name: 'Failer' }) || this;
    }
    B3Failer.prototype.tick = function (tick) {
        return Constants_1.EnumStatus.FAILURE;
    };
    return B3Failer;
}(B3Action_1.B3Action));
exports.B3Failer = B3Failer;

cc._RF.pop();