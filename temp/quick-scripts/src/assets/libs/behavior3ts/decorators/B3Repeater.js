"use strict";
cc._RF.push(module, 'bf16bZrEi5JSYHzgGI2XFk7', 'B3Repeater');
// libs/b3/decorators/B3Repeater.ts

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
exports.B3Repeater = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
//重复n次，或者直到遇到不是失败或者成功的状态为止
var B3Repeater = /** @class */ (function (_super) {
    __extends(B3Repeater, _super);
    function B3Repeater(d) {
        return _super.call(this, d) || this;
    }
    B3Repeater.prototype._parseProp = function (d) {
        this.maxLoop = d.maxLoop || -1;
    };
    B3Repeater.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    B3Repeater.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = Constants_1.EnumStatus.SUCCESS;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            status = this.child.execute(tick);
            if (status == Constants_1.EnumStatus.SUCCESS || status == Constants_1.EnumStatus.FAILURE) {
                i++;
            }
            else {
                break;
            }
        }
        tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return B3Repeater;
}(B3Decorator_1.B3Decorator));
exports.B3Repeater = B3Repeater;

cc._RF.pop();