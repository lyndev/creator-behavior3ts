"use strict";
cc._RF.push(module, '5ac85cJdoFGS4ZCDfFiw/sB', 'B3RepeatUntilFailure');
// libs/b3/decorators/B3RepeatUntilFailure.ts

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
exports.B3RepeatUntilFailure = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
//重复n次，或者直到遇到不是成功的状态为止
var B3RepeatUntilFailure = /** @class */ (function (_super) {
    __extends(B3RepeatUntilFailure, _super);
    function B3RepeatUntilFailure(d) {
        return _super.call(this, d) || this;
    }
    B3RepeatUntilFailure.prototype._parseProp = function (d) {
        this.maxLoop = this.maxLoop || -1;
    };
    B3RepeatUntilFailure.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    B3RepeatUntilFailure.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = Constants_1.EnumStatus.ERROR;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            status = this.child.execute(tick);
            if (status == Constants_1.EnumStatus.SUCCESS) {
                i++;
            }
            else {
                break;
            }
        }
        i = tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return B3RepeatUntilFailure;
}(B3Decorator_1.B3Decorator));
exports.B3RepeatUntilFailure = B3RepeatUntilFailure;

cc._RF.pop();