"use strict";
cc._RF.push(module, 'd1c1cCmPu1Me4asyZFrhWEL', 'B3Action');
// libs/behavior3ts/core/B3Action.ts

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
exports.B3Action = void 0;
var Constants_1 = require("../Constants");
var B3BaseNode_1 = require("./B3BaseNode");
var B3Action = /** @class */ (function (_super) {
    __extends(B3Action, _super);
    function B3Action(d) {
        var _this = this;
        d.category = Constants_1.EnumCategory.ACTION;
        _this = _super.call(this, d) || this;
        return _this;
    }
    return B3Action;
}(B3BaseNode_1.B3BaseNode));
exports.B3Action = B3Action;

cc._RF.pop();