"use strict";
cc._RF.push(module, '4d13fMEQvBARLJWoblZe4yK', 'B3MaxTime');
// libs/b3/decorators/B3MaxTime.ts

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
exports.B3MaxTime = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
var B3MaxTime = /** @class */ (function (_super) {
    __extends(B3MaxTime, _super);
    function B3MaxTime(d) {
        return _super.call(this, d) || this;
    }
    B3MaxTime.prototype._parseProp = function (d) {
        if (!d.maxTime) {
            throw 'maxTime parameter in MaxTime decorator is an obligatory parameter';
        }
        this.maxTime = d.maxTime || 0;
    };
    B3MaxTime.prototype.open = function (tick) {
        var startTime = (new Date()).getTime();
        tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
    };
    B3MaxTime.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var currTime = (new Date()).getTime();
        var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
        var status = this.child.execute(tick);
        if (currTime - startTime > this.maxTime) {
            return Constants_1.EnumStatus.FAILURE;
        }
        return status;
    };
    return B3MaxTime;
}(B3Decorator_1.B3Decorator));
exports.B3MaxTime = B3MaxTime;

cc._RF.pop();