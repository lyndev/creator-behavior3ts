
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/decorators/B3RepeatUntilFailure.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ac85cJdoFGS4ZCDfFiw/sB', 'B3RepeatUntilFailure');
// libs/b3/decorators/B3RepeatUntilFailure.ts

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
exports.B3RepeatUntilFailure = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
//重复n次，或者直到遇到不是成功的状态为止
var B3RepeatUntilFailure = /** @class */ (function (_super) {
    __extends(B3RepeatUntilFailure, _super);
    function B3RepeatUntilFailure(d) {
        return _super.call(this, d) || this;
    }
    B3RepeatUntilFailure.prototype._parseProp = function (d) {
        this.maxLoop = this.maxLoop || -1;
    };
    B3RepeatUntilFailure.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    B3RepeatUntilFailure.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = Constants_1.EnumStatus.ERROR;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            status = this.child.execute(tick);
            if (status == Constants_1.EnumStatus.SUCCESS) {
                i++;
            }
            else {
                break;
            }
        }
        i = tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return B3RepeatUntilFailure;
}(B3Decorator_1.B3Decorator));
exports.B3RepeatUntilFailure = B3RepeatUntilFailure;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvQjNSZXBlYXRVbnRpbEZhaWx1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUEwQztBQUMxQyxtREFBa0Q7QUFJbEQsc0JBQXNCO0FBQ3RCO0lBQTBDLHdDQUFXO0lBRWpELDhCQUFZLENBQWtCO2VBQzFCLGtCQUFNLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFUyx5Q0FBVSxHQUFwQixVQUFxQixDQUFNO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsbUNBQUksR0FBSixVQUFLLElBQUk7UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBR0QsbUNBQUksR0FBSixVQUFLLElBQVk7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLE9BQU8sc0JBQVUsQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksTUFBTSxHQUFHLHNCQUFVLENBQUMsS0FBSyxDQUFDO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDekMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxDLElBQUksTUFBTSxJQUFJLHNCQUFVLENBQUMsT0FBTyxFQUFFO2dCQUM5QixDQUFDLEVBQUUsQ0FBQzthQUNQO2lCQUFNO2dCQUNILE1BQU07YUFDVDtTQUNKO1FBRUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCwyQkFBQztBQUFELENBcENBLEFBb0NDLENBcEN5Qyx5QkFBVyxHQW9DcEQ7QUFwQ1ksb0RBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bVN0YXR1cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzRGVjb3JhdG9yIH0gZnJvbSBcIi4uL2NvcmUvQjNEZWNvcmF0b3JcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuLi9jb3JlL0IzVGlja1wiO1xuaW1wb3J0IHsgSUIzUmVwZWF0ZXJQcm9wIH0gZnJvbSBcIi4vQjNSZXBlYXRlclwiO1xuXG4vL+mHjeWkjW7mrKHvvIzmiJbogIXnm7TliLDpgYfliLDkuI3mmK/miJDlip/nmoTnirbmgIHkuLrmraJcbmV4cG9ydCBjbGFzcyBCM1JlcGVhdFVudGlsRmFpbHVyZSBleHRlbmRzIEIzRGVjb3JhdG9yIHtcbiAgICBtYXhMb29wOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoZDogSUIzUmVwZWF0ZXJQcm9wKSB7XG4gICAgICAgIHN1cGVyKGQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcGFyc2VQcm9wKGQ6IGFueSkge1xuICAgICAgICB0aGlzLm1heExvb3AgPSB0aGlzLm1heExvb3AgfHwgLTE7XG4gICAgfVxuXG4gICAgb3Blbih0aWNrKSB7XG4gICAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ2knLCAwLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICAgIH1cblxuXG4gICAgdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5FUlJPUjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpID0gdGljay5ibGFja2JvYXJkLmdldCgnaScsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG4gICAgICAgIHZhciBzdGF0dXMgPSBFbnVtU3RhdHVzLkVSUk9SO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLm1heExvb3AgPCAwIHx8IGkgPCB0aGlzLm1heExvb3ApIHtcbiAgICAgICAgICAgIHN0YXR1cyA9IHRoaXMuY2hpbGQuZXhlY3V0ZSh0aWNrKTtcblxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBFbnVtU3RhdHVzLlNVQ0NFU1MpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaSA9IHRpY2suYmxhY2tib2FyZC5zZXQoJ2knLCBpLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH1cbn0iXX0=