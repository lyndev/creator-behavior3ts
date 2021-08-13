
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/composites/B3MemPriority.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e85f8i/41FNlajkPZELiXLe', 'B3MemPriority');
// libs/b3/composites/B3MemPriority.ts

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
exports.B3MemPriority = void 0;
var Constants_1 = require("../Constants");
var B3Composite_1 = require("../core/B3Composite");
var B3MemPriority = /** @class */ (function (_super) {
    __extends(B3MemPriority, _super);
    function B3MemPriority(d) {
        var _this = this;
        d.name = "MemPriority";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3MemPriority.prototype.open = function (tick) {
        tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
    };
    B3MemPriority.prototype.tick = function (tick) {
        var child = tick.blackboard.get('runningChild', tick.tree.id, this.id);
        for (var i = child; i < this.children.length; i++) {
            var status = this.children[i].execute(tick);
            if (status !== Constants_1.EnumStatus.FAILURE) {
                if (status === Constants_1.EnumStatus.RUNNING) {
                    tick.blackboard.set('runningChild', i, tick.tree.id, this.id);
                }
                return status;
            }
        }
        return Constants_1.EnumStatus.FAILURE;
    };
    return B3MemPriority;
}(B3Composite_1.B3Composite));
exports.B3MemPriority = B3MemPriority;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvbXBvc2l0ZXMvQjNNZW1Qcmlvcml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLG1EQUFrRDtBQUlsRDtJQUFtQyxpQ0FBVztJQUM1Qyx1QkFBWSxDQUFtQjtRQUEvQixpQkFHQztRQUZDLENBQUMsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQ3ZCLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7O0lBQ1gsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RSxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFNUMsSUFBSSxNQUFNLEtBQUssc0JBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pDLElBQUksTUFBTSxLQUFLLHNCQUFVLENBQUMsT0FBTyxFQUFFO29CQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDL0Q7Z0JBRUQsT0FBTyxNQUFNLENBQUM7YUFDZjtTQUNGO1FBRUQsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQTFCQSxBQTBCQyxDQTFCa0MseUJBQVcsR0EwQjdDO0FBMUJZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bVN0YXR1cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQ29tcG9zaXRlIH0gZnJvbSBcIi4uL2NvcmUvQjNDb21wb3NpdGVcIjtcbmltcG9ydCB7IElCM0NvbXBvc2l0ZVByb3AgfSBmcm9tIFwiLi4vY29yZS9CM0lOb2RlUHJvcGVydGllc1wiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4uL2NvcmUvQjNUaWNrXCI7XG5cbmV4cG9ydCBjbGFzcyBCM01lbVByaW9yaXR5IGV4dGVuZHMgQjNDb21wb3NpdGUge1xuICBjb25zdHJ1Y3RvcihkOiBJQjNDb21wb3NpdGVQcm9wKSB7XG4gICAgZC5uYW1lID0gXCJNZW1Qcmlvcml0eVwiO1xuICAgIHN1cGVyKGQpO1xuICB9XG5cbiAgb3Blbih0aWNrOiBCM1RpY2spIHtcbiAgICB0aWNrLmJsYWNrYm9hcmQuc2V0KCdydW5uaW5nQ2hpbGQnLCAwLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICB9XG5cbiAgdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICB2YXIgY2hpbGQgPSB0aWNrLmJsYWNrYm9hcmQuZ2V0KCdydW5uaW5nQ2hpbGQnLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICAgIGZvciAodmFyIGkgPSBjaGlsZDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzdGF0dXMgPSB0aGlzLmNoaWxkcmVuW2ldLmV4ZWN1dGUodGljayk7XG5cbiAgICAgIGlmIChzdGF0dXMgIT09IEVudW1TdGF0dXMuRkFJTFVSRSkge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBFbnVtU3RhdHVzLlJVTk5JTkcpIHtcbiAgICAgICAgICB0aWNrLmJsYWNrYm9hcmQuc2V0KCdydW5uaW5nQ2hpbGQnLCBpLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRW51bVN0YXR1cy5GQUlMVVJFO1xuICB9XG59Il19