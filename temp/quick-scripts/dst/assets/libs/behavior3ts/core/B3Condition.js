
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3Condition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da5e9QBm8dLK6Sc1Z1LMwb3', 'B3Condition');
// libs/behavior3ts/core/B3Condition.ts

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
exports.B3Condition = void 0;
var Constants_1 = require("../Constants");
var B3BaseNode_1 = require("./B3BaseNode");
var B3Condition = /** @class */ (function (_super) {
    __extends(B3Condition, _super);
    function B3Condition(d) {
        var _this = this;
        d.category = Constants_1.EnumCategory.CONDITION;
        _this = _super.call(this, d) || this;
        return _this;
    }
    return B3Condition;
}(B3BaseNode_1.B3BaseNode));
exports.B3Condition = B3Condition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2JlaGF2aW9yM3RzL2NvcmUvQjNDb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUE0QztBQUM1QywyQ0FBMEM7QUFHdEM7SUFBMEMsK0JBQVU7SUFDaEQscUJBQVksQ0FBYztRQUExQixpQkFHQztRQUZHLENBQUMsQ0FBQyxRQUFRLEdBQUcsd0JBQVksQ0FBQyxTQUFTLENBQUM7UUFDcEMsUUFBQSxrQkFBTSxDQUFDLENBQUMsU0FBQzs7SUFDYixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMeUMsdUJBQVUsR0FLbkQ7QUFMcUIsa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnVtQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCM0Jhc2VOb2RlIH0gZnJvbSBcIi4vQjNCYXNlTm9kZVwiO1xuaW1wb3J0IHsgSUIzTm9kZVByb3AgfSBmcm9tIFwiLi9CM0lOb2RlUHJvcGVydGllc1wiO1xuXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEIzQ29uZGl0aW9uIGV4dGVuZHMgQjNCYXNlTm9kZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGQ6IElCM05vZGVQcm9wKSB7XG4gICAgICAgICAgICBkLmNhdGVnb3J5ID0gRW51bUNhdGVnb3J5LkNPTkRJVElPTjtcbiAgICAgICAgICAgIHN1cGVyKGQpO1xuICAgICAgICB9XG4gICAgfSJdfQ==