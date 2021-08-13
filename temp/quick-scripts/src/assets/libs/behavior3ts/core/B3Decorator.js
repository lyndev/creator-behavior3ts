"use strict";
cc._RF.push(module, 'eaa24ax83JCvozuBvRpp7zm', 'B3Decorator');
// libs/b3/core/B3Decorator.ts

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
exports.B3Decorator = void 0;
var Constants_1 = require("../Constants");
var B3BaseNode_1 = require("./B3BaseNode");
var B3Decorator = /** @class */ (function (_super) {
    __extends(B3Decorator, _super);
    function B3Decorator(d) {
        var _this = this;
        d.category = Constants_1.EnumCategory.DECORATOR;
        _this = _super.call(this, d) || this;
        _this.child = d.child;
        return _this;
    }
    return B3Decorator;
}(B3BaseNode_1.B3BaseNode));
exports.B3Decorator = B3Decorator;

cc._RF.pop();