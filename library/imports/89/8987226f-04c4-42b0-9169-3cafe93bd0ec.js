"use strict";
cc._RF.push(module, '89872JvBMRCsJFpPK/pO9Ds', 'DisCondition');
// script/behavior/CustomCondtion/DisCondition.ts

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
var DisCondition = /** @class */ (function (_super) {
    __extends(DisCondition, _super);
    function DisCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisCondition.prototype.tick = function (tick) {
        var myPos = tick.blackboard.get("mypos");
        var targetPos = tick.blackboard.get("targetpos");
        var dis = myPos.sub(targetPos).mag();
        if (dis < this.dis) {
            return Constants_1.EnumStatus.SUCCESS;
        }
        return Constants_1.EnumStatus.FAILURE;
    };
    DisCondition.prototype._parseProp = function (d) {
        this.dis = d.dis;
    };
    DisCondition.prototype.setTarget = function (v) {
        this.target = v;
    };
    DisCondition.prototype.getTarget = function () {
        return this.target;
    };
    return DisCondition;
}(B3Condition_1.B3Condition));
exports.default = DisCondition;

cc._RF.pop();