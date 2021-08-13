"use strict";
cc._RF.push(module, 'd3385QdwsJKuIoTU4b0DLl0', 'TargetCondition');
// script/behavior/CustomCondtion/TargetCondition.ts

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
var Constants_1 = require("../../../libs/behavior3ts/Constants");
var B3Condition_1 = require("../../../libs/behavior3ts/core/B3Condition");
var TargetCondition = /** @class */ (function (_super) {
    __extends(TargetCondition, _super);
    function TargetCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetCondition.prototype.tick = function (tick) {
        if (this.target == tick.blackboard.get("target")) {
            return Constants_1.EnumStatus.SUCCESS;
        }
        Constants_1.EnumStatus.FAILURE;
    };
    return TargetCondition;
}(B3Condition_1.B3Condition));
exports.default = TargetCondition;

cc._RF.pop();