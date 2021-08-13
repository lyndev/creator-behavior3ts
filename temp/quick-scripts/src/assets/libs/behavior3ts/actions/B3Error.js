"use strict";
cc._RF.push(module, 'a2b70MOcE1Gnpt1cjemZ2px', 'B3Error');
// libs/b3/actions/B3Error.ts

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
exports.B3Error = void 0;
var B3Action_1 = require("../core/B3Action");
var Constants_1 = require("../Constants");
var B3Error = /** @class */ (function (_super) {
    __extends(B3Error, _super);
    function B3Error(d) {
        return _super.call(this, d || { name: "Error" }) || this;
    }
    B3Error.prototype.tick = function (tick) {
        return Constants_1.EnumStatus.ERROR;
    };
    return B3Error;
}(B3Action_1.B3Action));
exports.B3Error = B3Error;

cc._RF.pop();