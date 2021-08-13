"use strict";
cc._RF.push(module, 'd9122ZsbIVMVo01pCrrQpa7', 'B3Wait');
// libs/b3/actions/B3Wait.ts

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
exports.B3Wait = void 0;
var Constants_1 = require("../Constants");
var B3Action_1 = require("../core/B3Action");
var B3Wait = /** @class */ (function (_super) {
    __extends(B3Wait, _super);
    function B3Wait(d) {
        return _super.call(this, d) || this;
    }
    B3Wait.prototype._parseProp = function (d) {
        this.endTime = d.milliseconds || 0;
    };
    B3Wait.prototype.open = function (tick) {
        var startTime = (new Date()).getTime();
        tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
    };
    B3Wait.prototype.tick = function (tick) {
        var currTime = (new Date()).getTime();
        var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
        if (currTime - startTime > this.endTime) {
            return Constants_1.EnumStatus.SUCCESS;
        }
        return Constants_1.EnumStatus.RUNNING;
    };
    return B3Wait;
}(B3Action_1.B3Action));
exports.B3Wait = B3Wait;

cc._RF.pop();