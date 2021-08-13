
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3Decorator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvcmUvQjNEZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUE0QztBQUM1QywyQ0FBMEM7QUFHdEM7SUFBMEMsK0JBQVU7SUFFaEQscUJBQVksQ0FBbUI7UUFBL0IsaUJBSUM7UUFIRyxDQUFDLENBQUMsUUFBUSxHQUFHLHdCQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3BDLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7UUFDVCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7O0lBQ3pCLENBQUM7SUFDTCxrQkFBQztBQUFELENBUEEsQUFPQyxDQVB5Qyx1QkFBVSxHQU9uRDtBQVBxQixrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1DYXRlZ29yeSB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQmFzZU5vZGUgfSBmcm9tIFwiLi9CM0Jhc2VOb2RlXCI7XG5pbXBvcnQgeyBJQjNEZWNvcmF0b3JQcm9wIH0gZnJvbSBcIi4vQjNJTm9kZVByb3BlcnRpZXNcIjtcblxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCM0RlY29yYXRvciBleHRlbmRzIEIzQmFzZU5vZGUge1xuICAgICAgICBjaGlsZDogQjNCYXNlTm9kZTtcbiAgICAgICAgY29uc3RydWN0b3IoZDogSUIzRGVjb3JhdG9yUHJvcCkge1xuICAgICAgICAgICAgZC5jYXRlZ29yeSA9IEVudW1DYXRlZ29yeS5ERUNPUkFUT1I7XG4gICAgICAgICAgICBzdXBlcihkKTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGQgPSBkLmNoaWxkO1xuICAgICAgICB9XG4gICAgfSJdfQ==