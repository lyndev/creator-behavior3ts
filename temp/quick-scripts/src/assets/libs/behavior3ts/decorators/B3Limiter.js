"use strict";
cc._RF.push(module, 'fb050dGqEBD5ZMbluh2CuOe', 'B3Limiter');
// libs/b3/decorators/B3Limiter.ts

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
exports.B3Limiter = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
var B3Limiter = /** @class */ (function (_super) {
    __extends(B3Limiter, _super);
    function B3Limiter(d) {
        return _super.call(this, d) || this;
    }
    B3Limiter.prototype._parseProp = function (d) {
        if (!d.maxLoop) {
            throw 'maxLoop parameter in Limiter decorator is an obligatory parameter';
        }
        this.maxLoop = d.maxLoop || 1;
    };
    B3Limiter.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    B3Limiter.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        if (i < this.maxLoop) {
            var status = this.child.execute(tick);
            if (status == Constants_1.EnumStatus.SUCCESS || status == Constants_1.EnumStatus.FAILURE)
                tick.blackboard.set('i', i + 1, tick.tree.id, this.id);
            return status;
        }
        return Constants_1.EnumStatus.FAILURE;
    };
    return B3Limiter;
}(B3Decorator_1.B3Decorator));
exports.B3Limiter = B3Limiter;

cc._RF.pop();