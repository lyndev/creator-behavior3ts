"use strict";
cc._RF.push(module, 'c87c8i/SD1IHbeldhw8UcFP', 'B3RepeatUntilSuccess');
// libs/b3/decorators/B3RepeatUntilSuccess.ts

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
exports.B3RepeatUntilSuccess = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
//重复n次，或者直到遇到不是失败的状态为止
var B3RepeatUntilSuccess = /** @class */ (function (_super) {
    __extends(B3RepeatUntilSuccess, _super);
    function B3RepeatUntilSuccess(d) {
        return _super.call(this, d) || this;
    }
    B3RepeatUntilSuccess.prototype._parseProp = function (d) {
        this.maxLoop = d.maxLoop || -1;
    };
    B3RepeatUntilSuccess.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    B3RepeatUntilSuccess.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = Constants_1.EnumStatus.ERROR;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            status = this.child.execute(tick);
            if (status == Constants_1.EnumStatus.FAILURE) {
                i++;
            }
            else {
                break;
            }
        }
        i = tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return B3RepeatUntilSuccess;
}(B3Decorator_1.B3Decorator));
exports.B3RepeatUntilSuccess = B3RepeatUntilSuccess;

cc._RF.pop();