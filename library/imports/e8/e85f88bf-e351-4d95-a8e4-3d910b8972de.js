"use strict";
cc._RF.push(module, 'e85f8i/41FNlajkPZELiXLe', 'B3MemPriority');
// libs/b3/composites/B3MemPriority.ts

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
exports.B3MemPriority = void 0;
var Constants_1 = require("../Constants");
var B3Composite_1 = require("../core/B3Composite");
var B3MemPriority = /** @class */ (function (_super) {
    __extends(B3MemPriority, _super);
    function B3MemPriority(d) {
        var _this = this;
        d.name = "MemPriority";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3MemPriority.prototype.open = function (tick) {
        tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
    };
    B3MemPriority.prototype.tick = function (tick) {
        var child = tick.blackboard.get('runningChild', tick.tree.id, this.id);
        for (var i = child; i < this.children.length; i++) {
            var status = this.children[i].execute(tick);
            if (status !== Constants_1.EnumStatus.FAILURE) {
                if (status === Constants_1.EnumStatus.RUNNING) {
                    tick.blackboard.set('runningChild', i, tick.tree.id, this.id);
                }
                return status;
            }
        }
        return Constants_1.EnumStatus.FAILURE;
    };
    return B3MemPriority;
}(B3Composite_1.B3Composite));
exports.B3MemPriority = B3MemPriority;

cc._RF.pop();