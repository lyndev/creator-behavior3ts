
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/composites/B3Sequence.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a39d73cw7xFR6SYcjWWcbVq', 'B3Sequence');
// libs/b3/composites/B3Sequence.ts

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
exports.B3Sequence = void 0;
var Constants_1 = require("../Constants");
var B3Composite_1 = require("../core/B3Composite");
var B3Sequence = /** @class */ (function (_super) {
    __extends(B3Sequence, _super);
    function B3Sequence(d) {
        var _this = this;
        d.name = "Sequence";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3Sequence.prototype.tick = function (tick) {
        for (var i = 0; i < this.children.length; i++) {
            var status = this.children[i].execute(tick);
            if (status !== Constants_1.EnumStatus.SUCCESS) {
                return status;
            }
        }
        return Constants_1.EnumStatus.SUCCESS;
    };
    return B3Sequence;
}(B3Composite_1.B3Composite));
exports.B3Sequence = B3Sequence;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvbXBvc2l0ZXMvQjNTZXF1ZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLG1EQUFrRDtBQUk5QztJQUFnQyw4QkFBVztJQUN2QyxvQkFBWSxDQUFtQjtRQUEvQixpQkFHQztRQUZHLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7O0lBQ2IsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVDLElBQUksTUFBTSxLQUFLLHNCQUFVLENBQUMsT0FBTyxFQUFFO2dCQUMvQixPQUFPLE1BQU0sQ0FBQzthQUNqQjtTQUNKO1FBRUQsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxDQWpCK0IseUJBQVcsR0FpQjFDO0FBakJZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bVN0YXR1cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQ29tcG9zaXRlIH0gZnJvbSBcIi4uL2NvcmUvQjNDb21wb3NpdGVcIjtcbmltcG9ydCB7IElCM0NvbXBvc2l0ZVByb3AgfSBmcm9tIFwiLi4vY29yZS9CM0lOb2RlUHJvcGVydGllc1wiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4uL2NvcmUvQjNUaWNrXCI7XG5cbiAgICBleHBvcnQgY2xhc3MgQjNTZXF1ZW5jZSBleHRlbmRzIEIzQ29tcG9zaXRlIHtcbiAgICAgICAgY29uc3RydWN0b3IoZDogSUIzQ29tcG9zaXRlUHJvcCkge1xuICAgICAgICAgICAgZC5uYW1lID0gXCJTZXF1ZW5jZVwiO1xuICAgICAgICAgICAgc3VwZXIoZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aWNrKHRpY2s6IEIzVGljaykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuY2hpbGRyZW5baV0uZXhlY3V0ZSh0aWNrKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgIT09IEVudW1TdGF0dXMuU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIEVudW1TdGF0dXMuU1VDQ0VTUztcbiAgICAgICAgfVxuICAgIH0iXX0=