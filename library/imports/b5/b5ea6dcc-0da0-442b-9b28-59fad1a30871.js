"use strict";
cc._RF.push(module, 'b5ea63MDaBEK5soWfrRowhx', 'B3Composite');
// libs/b3/core/B3Composite.ts

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
exports.B3Composite = void 0;
var Constants_1 = require("../Constants");
var B3BaseNode_1 = require("./B3BaseNode");
var B3Composite = /** @class */ (function (_super) {
    __extends(B3Composite, _super);
    function B3Composite(d) {
        var _this = this;
        d.category = Constants_1.EnumCategory.COMPOSITE;
        _this = _super.call(this, d) || this;
        _this.children = [];
        return _this;
    }
    return B3Composite;
}(B3BaseNode_1.B3BaseNode));
exports.B3Composite = B3Composite;

cc._RF.pop();