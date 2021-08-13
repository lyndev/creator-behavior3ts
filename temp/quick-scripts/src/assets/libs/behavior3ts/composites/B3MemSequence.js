"use strict";
cc._RF.push(module, '53589IaR/hLm7hcpnZCspDU', 'B3MemSequence');
// libs/behavior3ts/composites/B3MemSequence.ts

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
exports.B3MemSequence = void 0;
var Constants_1 = require("../Constants");
var B3Composite_1 = require("../core/B3Composite");
var B3MemSequence = /** @class */ (function (_super) {
    __extends(B3MemSequence, _super);
    function B3MemSequence(d) {
        var _this = this;
        d.name = "MemSequence";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3MemSequence.prototype.open = function (tick) {
        tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
    };
    B3MemSequence.prototype.tick = function (tick) {
        var child = tick.blackboard.get('runningChild', tick.tree.id, this.id);
        for (var i = child; i < this.children.length; i++) {
            var status = this.children[i].execute(tick);
            if (status !== Constants_1.EnumStatus.SUCCESS) {
                if (status === Constants_1.EnumStatus.RUNNING) {
                    tick.blackboard.set('runningChild', i, tick.tree.id, this.id);
                }
                return status;
            }
        }
        return Constants_1.EnumStatus.SUCCESS;
    };
    return B3MemSequence;
}(B3Composite_1.B3Composite));
exports.B3MemSequence = B3MemSequence;

cc._RF.pop();