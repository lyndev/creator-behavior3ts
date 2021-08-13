"use strict";
cc._RF.push(module, '093cf0Zi9lB27MsxoZ4m1u3', 'B3Runner');
// libs/b3/actions/B3Runner.ts

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
exports.B3Runner = void 0;
var Constants_1 = require("../Constants");
var B3Action_1 = require("../core/B3Action");
var B3Runner = /** @class */ (function (_super) {
    __extends(B3Runner, _super);
    function B3Runner(d) {
        return _super.call(this, d || { name: 'Runner' }) || this;
    }
    B3Runner.prototype.tick = function (tick) {
        return Constants_1.EnumStatus.RUNNING;
    };
    return B3Runner;
}(B3Action_1.B3Action));
exports.B3Runner = B3Runner;

cc._RF.pop();