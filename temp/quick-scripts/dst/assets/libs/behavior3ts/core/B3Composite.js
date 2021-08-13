
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3Composite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvcmUvQjNDb21wb3NpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUE0QztBQUM1QywyQ0FBMEM7QUFHdEM7SUFBMEMsK0JBQVU7SUFFaEQscUJBQVksQ0FBbUI7UUFBL0IsaUJBSUM7UUFIRyxDQUFDLENBQUMsUUFBUSxHQUFHLHdCQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3BDLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7UUFDVCxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7SUFDdkIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FQQSxBQU9DLENBUHlDLHVCQUFVLEdBT25EO0FBUHFCLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bUNhdGVnb3J5IH0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQjNCYXNlTm9kZSB9IGZyb20gXCIuL0IzQmFzZU5vZGVcIjtcbmltcG9ydCB7IElCM0NvbXBvc2l0ZVByb3AgfSBmcm9tIFwiLi9CM0lOb2RlUHJvcGVydGllc1wiO1xuXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEIzQ29tcG9zaXRlIGV4dGVuZHMgQjNCYXNlTm9kZSB7XG4gICAgICAgIGNoaWxkcmVuOiBCM0Jhc2VOb2RlW107XG4gICAgICAgIGNvbnN0cnVjdG9yKGQ6IElCM0NvbXBvc2l0ZVByb3ApIHtcbiAgICAgICAgICAgIGQuY2F0ZWdvcnkgPSBFbnVtQ2F0ZWdvcnkuQ09NUE9TSVRFO1xuICAgICAgICAgICAgc3VwZXIoZCk7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIH1cbiAgICB9Il19