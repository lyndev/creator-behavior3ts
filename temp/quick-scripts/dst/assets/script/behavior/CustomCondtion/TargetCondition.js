
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/behavior/CustomCondtion/TargetCondition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3385QdwsJKuIoTU4b0DLl0', 'TargetCondition');
// script/behavior/CustomCondtion/TargetCondition.ts

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
var Constants_1 = require("../../../libs/behavior3ts/Constants");
var B3Condition_1 = require("../../../libs/behavior3ts/core/B3Condition");
var TargetCondition = /** @class */ (function (_super) {
    __extends(TargetCondition, _super);
    function TargetCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetCondition.prototype.tick = function (tick) {
        if (this.target == tick.blackboard.get("target")) {
            return Constants_1.EnumStatus.SUCCESS;
        }
        Constants_1.EnumStatus.FAILURE;
    };
    return TargetCondition;
}(B3Condition_1.B3Condition));
exports.default = TargetCondition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYmVoYXZpb3IvQ3VzdG9tQ29uZHRpb24vVGFyZ2V0Q29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFpRTtBQUNqRSwwRUFBeUU7QUFFekU7SUFBNkMsbUNBQVc7SUFBeEQ7O0lBUUEsQ0FBQztJQU5HLDhCQUFJLEdBQUosVUFBSyxJQUFpQjtRQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDOUMsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQTtTQUM1QjtRQUNELHNCQUFVLENBQUMsT0FBTyxDQUFBO0lBQ3RCLENBQUM7SUFDTCxzQkFBQztBQUFELENBUkEsQUFRQyxDQVI0Qyx5QkFBVyxHQVF2RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9saWJzL2JlaGF2aW9yM3RzL0NvbnN0YW50cyc7XG5pbXBvcnQgeyBCM0NvbmRpdGlvbiB9IGZyb20gJy4uLy4uLy4uL2xpYnMvYmVoYXZpb3IzdHMvY29yZS9CM0NvbmRpdGlvbic7XG5pbXBvcnQgeyBCM1RpY2sgfSBmcm9tICcuLi8uLi8uLi9saWJzL2JlaGF2aW9yM3RzL2NvcmUvQjNUaWNrJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldENvbmRpdGlvbiBleHRlbmRzIEIzQ29uZGl0aW9uIHtcbiAgICB0YXJnZXRcbiAgICB0aWNrKHRpY2s6IEIzVGljazxhbnk+KTogRW51bVN0YXR1cyB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCA9PSB0aWNrLmJsYWNrYm9hcmQuZ2V0KFwidGFyZ2V0XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5TVUNDRVNTXG4gICAgICAgIH1cbiAgICAgICAgRW51bVN0YXR1cy5GQUlMVVJFXG4gICAgfVxufSJdfQ==