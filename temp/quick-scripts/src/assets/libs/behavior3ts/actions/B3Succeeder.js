"use strict";
cc._RF.push(module, '9f771pBFQhDj5a8bjL+CU3q', 'B3Succeeder');
// libs/b3/actions/B3Succeeder.ts

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
exports.B3Succeeder = void 0;
var Constants_1 = require("../Constants");
var B3Action_1 = require("../core/B3Action");
var B3Succeeder = /** @class */ (function (_super) {
    __extends(B3Succeeder, _super);
    function B3Succeeder(d) {
        return _super.call(this, d || { name: 'Succeeder' }) || this;
    }
    B3Succeeder.prototype.tick = function (tick) {
        return Constants_1.EnumStatus.SUCCESS;
    };
    return B3Succeeder;
}(B3Action_1.B3Action));
exports.B3Succeeder = B3Succeeder;

cc._RF.pop();