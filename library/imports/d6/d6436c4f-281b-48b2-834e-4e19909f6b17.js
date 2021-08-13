"use strict";
cc._RF.push(module, 'd6436xPKBtIsoNOThmQn2sX', 'B3Priority');
// libs/b3/composites/B3Priority.ts

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
exports.B3Priority = void 0;
var Constants_1 = require("../Constants");
var B3Composite_1 = require("../core/B3Composite");
var B3Priority = /** @class */ (function (_super) {
    __extends(B3Priority, _super);
    function B3Priority(d) {
        var _this = this;
        d.name = "Priority";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3Priority.prototype.tick = function (tick) {
        for (var i = 0; i < this.children.length; i++) {
            var status = this.children[i].execute(tick);
            if (status !== Constants_1.EnumStatus.FAILURE) {
                return status;
            }
        }
        return Constants_1.EnumStatus.FAILURE;
    };
    return B3Priority;
}(B3Composite_1.B3Composite));
exports.B3Priority = B3Priority;

cc._RF.pop();