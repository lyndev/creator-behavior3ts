"use strict";
cc._RF.push(module, 'a39d73cw7xFR6SYcjWWcbVq', 'B3Sequence');
// libs/b3/composites/B3Sequence.ts

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
exports.B3Sequence = void 0;
var Constants_1 = require("../Constants");
var B3Composite_1 = require("../core/B3Composite");
var B3Sequence = /** @class */ (function (_super) {
    __extends(B3Sequence, _super);
    function B3Sequence(d) {
        var _this = this;
        d.name = "Sequence";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3Sequence.prototype.tick = function (tick) {
        for (var i = 0; i < this.children.length; i++) {
            var status = this.children[i].execute(tick);
            if (status !== Constants_1.EnumStatus.SUCCESS) {
                return status;
            }
        }
        return Constants_1.EnumStatus.SUCCESS;
    };
    return B3Sequence;
}(B3Composite_1.B3Composite));
exports.B3Sequence = B3Sequence;

cc._RF.pop();