
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/decorators/B3RepeatUntilSuccess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c87c8i/SD1IHbeldhw8UcFP', 'B3RepeatUntilSuccess');
// libs/b3/decorators/B3RepeatUntilSuccess.ts

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
exports.B3RepeatUntilSuccess = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
//重复n次，或者直到遇到不是失败的状态为止
var B3RepeatUntilSuccess = /** @class */ (function (_super) {
    __extends(B3RepeatUntilSuccess, _super);
    function B3RepeatUntilSuccess(d) {
        return _super.call(this, d) || this;
    }
    B3RepeatUntilSuccess.prototype._parseProp = function (d) {
        this.maxLoop = d.maxLoop || -1;
    };
    B3RepeatUntilSuccess.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    B3RepeatUntilSuccess.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = Constants_1.EnumStatus.ERROR;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            status = this.child.execute(tick);
            if (status == Constants_1.EnumStatus.FAILURE) {
                i++;
            }
            else {
                break;
            }
        }
        i = tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return B3RepeatUntilSuccess;
}(B3Decorator_1.B3Decorator));
exports.B3RepeatUntilSuccess = B3RepeatUntilSuccess;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvQjNSZXBlYXRVbnRpbFN1Y2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUEwQztBQUMxQyxtREFBa0Q7QUFJbEQsc0JBQXNCO0FBQ3RCO0lBQTBDLHdDQUFXO0lBRXBELDhCQUFZLENBQWtCO2VBQzdCLGtCQUFNLENBQUMsQ0FBQztJQUNULENBQUM7SUFFUyx5Q0FBVSxHQUFwQixVQUFxQixDQUFNO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsbUNBQUksR0FBSixVQUFLLElBQVk7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUdELG1DQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLE9BQU8sc0JBQVUsQ0FBQyxLQUFLLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksTUFBTSxHQUFHLHNCQUFVLENBQUMsS0FBSyxDQUFDO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDNUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxDLElBQUksTUFBTSxJQUFJLHNCQUFVLENBQUMsT0FBTyxFQUFFO2dCQUNqQyxDQUFDLEVBQUUsQ0FBQzthQUNKO2lCQUFNO2dCQUNOLE1BQU07YUFDTjtTQUNEO1FBRUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUNGLDJCQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsQ0FwQ3lDLHlCQUFXLEdBb0NwRDtBQXBDWSxvREFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnVtU3RhdHVzIH0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQjNEZWNvcmF0b3IgfSBmcm9tIFwiLi4vY29yZS9CM0RlY29yYXRvclwiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4uL2NvcmUvQjNUaWNrXCI7XG5pbXBvcnQgeyBJQjNSZXBlYXRlclByb3AgfSBmcm9tIFwiLi9CM1JlcGVhdGVyXCI7XG5cbi8v6YeN5aSNbuasoe+8jOaIluiAheebtOWIsOmBh+WIsOS4jeaYr+Wksei0peeahOeKtuaAgeS4uuatolxuZXhwb3J0IGNsYXNzIEIzUmVwZWF0VW50aWxTdWNjZXNzIGV4dGVuZHMgQjNEZWNvcmF0b3Ige1xuXHRtYXhMb29wOiBudW1iZXI7XG5cdGNvbnN0cnVjdG9yKGQ6IElCM1JlcGVhdGVyUHJvcCkge1xuXHRcdHN1cGVyKGQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIF9wYXJzZVByb3AoZDogYW55KSB7XG5cdFx0dGhpcy5tYXhMb29wID0gZC5tYXhMb29wIHx8IC0xO1xuXHR9XG5cblx0b3Blbih0aWNrOiBCM1RpY2spIHtcblx0XHR0aWNrLmJsYWNrYm9hcmQuc2V0KCdpJywgMCwgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcblx0fVxuXG5cblx0dGljayh0aWNrOiBCM1RpY2spIHtcblx0XHRpZiAoIXRoaXMuY2hpbGQpIHtcblx0XHRcdHJldHVybiBFbnVtU3RhdHVzLkVSUk9SO1xuXHRcdH1cblxuXHRcdHZhciBpID0gdGljay5ibGFja2JvYXJkLmdldCgnaScsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG5cdFx0dmFyIHN0YXR1cyA9IEVudW1TdGF0dXMuRVJST1I7XG5cblx0XHR3aGlsZSAodGhpcy5tYXhMb29wIDwgMCB8fCBpIDwgdGhpcy5tYXhMb29wKSB7XG5cdFx0XHRzdGF0dXMgPSB0aGlzLmNoaWxkLmV4ZWN1dGUodGljayk7XG5cblx0XHRcdGlmIChzdGF0dXMgPT0gRW51bVN0YXR1cy5GQUlMVVJFKSB7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGkgPSB0aWNrLmJsYWNrYm9hcmQuc2V0KCdpJywgaSwgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcblx0XHRyZXR1cm4gc3RhdHVzO1xuXHR9XG59Il19