"use strict";
cc._RF.push(module, 'a9972bidrxCdrH5oLLMn+UN', 'B3Inverter');
// libs/b3/decorators/B3Inverter.ts

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
exports.B3Inverter = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
var B3Inverter = /** @class */ (function (_super) {
    __extends(B3Inverter, _super);
    function B3Inverter(d) {
        var _this = this;
        d.name = "Inverter";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3Inverter.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var status = this.child.execute(tick);
        if (status == Constants_1.EnumStatus.SUCCESS) {
            status = Constants_1.EnumStatus.FAILURE;
        }
        else if (status == Constants_1.EnumStatus.FAILURE) {
            status = Constants_1.EnumStatus.SUCCESS;
        }
        return status;
    };
    return B3Inverter;
}(B3Decorator_1.B3Decorator));
exports.B3Inverter = B3Inverter;

cc._RF.pop();