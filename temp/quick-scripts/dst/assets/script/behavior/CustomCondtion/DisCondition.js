
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/behavior/CustomCondtion/DisCondition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89872JvBMRCsJFpPK/pO9Ds', 'DisCondition');
// script/behavior/CustomCondtion/DisCondition.ts

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
var DisCondition = /** @class */ (function (_super) {
    __extends(DisCondition, _super);
    function DisCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisCondition.prototype.tick = function (tick) {
        var myPos = tick.blackboard.get("mypos");
        var targetPos = tick.blackboard.get("targetpos");
        var dis = myPos.sub(targetPos).mag();
        if (dis < this.dis) {
            return Constants_1.EnumStatus.SUCCESS;
        }
        return Constants_1.EnumStatus.FAILURE;
    };
    DisCondition.prototype._parseProp = function (d) {
        this.dis = d.dis;
    };
    DisCondition.prototype.setTarget = function (v) {
        this.target = v;
    };
    DisCondition.prototype.getTarget = function () {
        return this.target;
    };
    return DisCondition;
}(B3Condition_1.B3Condition));
exports.default = DisCondition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYmVoYXZpb3IvQ3VzdG9tQ29uZHRpb24vRGlzQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFpRTtBQUNqRSwwRUFBeUU7QUFFekU7SUFBMEMsZ0NBQVc7SUFBckQ7O0lBeUJBLENBQUM7SUFyQkcsMkJBQUksR0FBSixVQUFLLElBQWlCO1FBQ2xCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBWSxDQUFBO1FBQ25ELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBWSxDQUFBO1FBQzNELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDcEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNoQixPQUFPLHNCQUFVLENBQUMsT0FBTyxDQUFBO1NBQzVCO1FBQ0QsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQTtJQUM3QixDQUFDO0lBRVMsaUNBQVUsR0FBcEIsVUFBcUIsQ0FBTTtRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUE7SUFDcEIsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxDQUFDO1FBQ1AsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDbkIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0F6QkEsQUF5QkMsQ0F6QnlDLHlCQUFXLEdBeUJwRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9saWJzL2JlaGF2aW9yM3RzL0NvbnN0YW50cyc7XG5pbXBvcnQgeyBCM0NvbmRpdGlvbiB9IGZyb20gJy4uLy4uLy4uL2xpYnMvYmVoYXZpb3IzdHMvY29yZS9CM0NvbmRpdGlvbic7XG5pbXBvcnQgeyBCM1RpY2sgfSBmcm9tICcuLi8uLi8uLi9saWJzL2JlaGF2aW9yM3RzL2NvcmUvQjNUaWNrJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc0NvbmRpdGlvbiBleHRlbmRzIEIzQ29uZGl0aW9uIHtcbiAgICB0YXJnZXQ7XG4gICAgZGlzO1xuXG4gICAgdGljayh0aWNrOiBCM1RpY2s8YW55Pik6IEVudW1TdGF0dXMge1xuICAgICAgICBsZXQgbXlQb3MgPSB0aWNrLmJsYWNrYm9hcmQuZ2V0KFwibXlwb3NcIikgYXMgY2MuVmVjM1xuICAgICAgICBsZXQgdGFyZ2V0UG9zID0gdGljay5ibGFja2JvYXJkLmdldChcInRhcmdldHBvc1wiKSBhcyBjYy5WZWMzXG4gICAgICAgIGxldCBkaXMgPSBteVBvcy5zdWIodGFyZ2V0UG9zKS5tYWcoKVxuICAgICAgICBpZiAoZGlzIDwgdGhpcy5kaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBFbnVtU3RhdHVzLlNVQ0NFU1NcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5GQUlMVVJFXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9wYXJzZVByb3AoZDogYW55KSB7XG4gICAgICAgIHRoaXMuZGlzID0gZC5kaXNcbiAgICB9XG5cbiAgICBzZXRUYXJnZXQodikge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHZcbiAgICB9XG5cbiAgICBnZXRUYXJnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldFxuICAgIH1cbn0iXX0=