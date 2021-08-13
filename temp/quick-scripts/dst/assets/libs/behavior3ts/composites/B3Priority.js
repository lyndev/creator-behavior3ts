
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/composites/B3Priority.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6436xPKBtIsoNOThmQn2sX', 'B3Priority');
// libs/b3/composites/B3Priority.ts

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
exports.B3Priority = void 0;
var Constants_1 = require("../Constants");
var B3Composite_1 = require("../core/B3Composite");
var B3Priority = /** @class */ (function (_super) {
    __extends(B3Priority, _super);
    function B3Priority(d) {
        var _this = this;
        d.name = "Priority";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3Priority.prototype.tick = function (tick) {
        for (var i = 0; i < this.children.length; i++) {
            var status = this.children[i].execute(tick);
            if (status !== Constants_1.EnumStatus.FAILURE) {
                return status;
            }
        }
        return Constants_1.EnumStatus.FAILURE;
    };
    return B3Priority;
}(B3Composite_1.B3Composite));
exports.B3Priority = B3Priority;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvbXBvc2l0ZXMvQjNQcmlvcml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLG1EQUFrRDtBQUlsRDtJQUFnQyw4QkFBVztJQUN2QyxvQkFBWSxDQUFtQjtRQUEvQixpQkFHQztRQUZHLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7O0lBQ2IsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVDLElBQUksTUFBTSxLQUFLLHNCQUFVLENBQUMsT0FBTyxFQUFFO2dCQUMvQixPQUFPLE1BQU0sQ0FBQzthQUNqQjtTQUNKO1FBRUQsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxDQWpCK0IseUJBQVcsR0FpQjFDO0FBakJZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bVN0YXR1cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQ29tcG9zaXRlIH0gZnJvbSBcIi4uL2NvcmUvQjNDb21wb3NpdGVcIjtcbmltcG9ydCB7IElCM0NvbXBvc2l0ZVByb3AgfSBmcm9tIFwiLi4vY29yZS9CM0lOb2RlUHJvcGVydGllc1wiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4uL2NvcmUvQjNUaWNrXCI7XG5cbmV4cG9ydCBjbGFzcyBCM1ByaW9yaXR5IGV4dGVuZHMgQjNDb21wb3NpdGUge1xuICAgIGNvbnN0cnVjdG9yKGQ6IElCM0NvbXBvc2l0ZVByb3ApIHtcbiAgICAgICAgZC5uYW1lID0gXCJQcmlvcml0eVwiO1xuICAgICAgICBzdXBlcihkKTtcbiAgICB9XG5cbiAgICB0aWNrKHRpY2s6IEIzVGljaykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSB0aGlzLmNoaWxkcmVuW2ldLmV4ZWN1dGUodGljayk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgIT09IEVudW1TdGF0dXMuRkFJTFVSRSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5GQUlMVVJFO1xuICAgIH1cbn0iXX0=