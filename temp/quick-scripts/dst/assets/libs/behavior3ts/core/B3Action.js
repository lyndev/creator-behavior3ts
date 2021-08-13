
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3Action.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2JlaGF2aW9yM3RzL2NvcmUvQjNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUE0QztBQUM1QywyQ0FBMEM7QUFHMUM7SUFBdUMsNEJBQVU7SUFDN0Msa0JBQVksQ0FBYztRQUExQixpQkFHQztRQUZHLENBQUMsQ0FBQyxRQUFRLEdBQUcsd0JBQVksQ0FBQyxNQUFNLENBQUM7UUFDakMsUUFBQSxrQkFBTSxDQUFDLENBQUMsU0FBQzs7SUFDYixDQUFDO0lBQ0wsZUFBQztBQUFELENBTEEsQUFLQyxDQUxzQyx1QkFBVSxHQUtoRDtBQUxxQiw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1DYXRlZ29yeSB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQmFzZU5vZGUgfSBmcm9tIFwiLi9CM0Jhc2VOb2RlXCI7XG5pbXBvcnQgeyBJQjNOb2RlUHJvcCB9IGZyb20gXCIuL0IzSU5vZGVQcm9wZXJ0aWVzXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCM0FjdGlvbiBleHRlbmRzIEIzQmFzZU5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGQ6IElCM05vZGVQcm9wKSB7XG4gICAgICAgIGQuY2F0ZWdvcnkgPSBFbnVtQ2F0ZWdvcnkuQUNUSU9OO1xuICAgICAgICBzdXBlcihkKTtcbiAgICB9XG59Il19