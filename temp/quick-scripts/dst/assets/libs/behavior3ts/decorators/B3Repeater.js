
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/decorators/B3Repeater.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf16bZrEi5JSYHzgGI2XFk7', 'B3Repeater');
// libs/b3/decorators/B3Repeater.ts

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
exports.B3Repeater = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
//重复n次，或者直到遇到不是失败或者成功的状态为止
var B3Repeater = /** @class */ (function (_super) {
    __extends(B3Repeater, _super);
    function B3Repeater(d) {
        return _super.call(this, d) || this;
    }
    B3Repeater.prototype._parseProp = function (d) {
        this.maxLoop = d.maxLoop || -1;
    };
    B3Repeater.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    B3Repeater.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = Constants_1.EnumStatus.SUCCESS;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            status = this.child.execute(tick);
            if (status == Constants_1.EnumStatus.SUCCESS || status == Constants_1.EnumStatus.FAILURE) {
                i++;
            }
            else {
                break;
            }
        }
        tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return B3Repeater;
}(B3Decorator_1.B3Decorator));
exports.B3Repeater = B3Repeater;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvQjNSZXBlYXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLG1EQUFrRDtBQUloRCwwQkFBMEI7QUFDMUI7SUFBZ0MsOEJBQVc7SUFFekMsb0JBQVksQ0FBa0I7ZUFDNUIsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVTLCtCQUFVLEdBQXBCLFVBQXFCLENBQU07UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx5QkFBSSxHQUFKLFVBQUssSUFBSTtRQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFHRCx5QkFBSSxHQUFKLFVBQUssSUFBWTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTyxzQkFBVSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxNQUFNLEdBQUcsc0JBQVUsQ0FBQyxPQUFPLENBQUM7UUFFaEMsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMzQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEMsSUFBSSxNQUFNLElBQUksc0JBQVUsQ0FBQyxPQUFPLElBQUksTUFBTSxJQUFJLHNCQUFVLENBQUMsT0FBTyxFQUFFO2dCQUNoRSxDQUFDLEVBQUUsQ0FBQzthQUNMO2lCQUFNO2dCQUNMLE1BQU07YUFDUDtTQUNGO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsQ0FwQytCLHlCQUFXLEdBb0MxQztBQXBDWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCM0RlY29yYXRvciB9IGZyb20gXCIuLi9jb3JlL0IzRGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBJQjNEZWNvcmF0b3JQcm9wIH0gZnJvbSBcIi4uL2NvcmUvQjNJTm9kZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuLi9jb3JlL0IzVGlja1wiO1xuXG4gIC8v6YeN5aSNbuasoe+8jOaIluiAheebtOWIsOmBh+WIsOS4jeaYr+Wksei0peaIluiAheaIkOWKn+eahOeKtuaAgeS4uuatolxuICBleHBvcnQgY2xhc3MgQjNSZXBlYXRlciBleHRlbmRzIEIzRGVjb3JhdG9yIHtcbiAgICBtYXhMb29wOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoZDogSUIzUmVwZWF0ZXJQcm9wKSB7XG4gICAgICBzdXBlcihkKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3BhcnNlUHJvcChkOiBhbnkpIHtcbiAgICAgIHRoaXMubWF4TG9vcCA9IGQubWF4TG9vcCB8fCAtMTtcbiAgICB9XG5cbiAgICBvcGVuKHRpY2spIHtcbiAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ2knLCAwLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICAgIH1cblxuXG4gICAgdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICAgIGlmICghdGhpcy5jaGlsZCkge1xuICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5FUlJPUjtcbiAgICAgIH1cblxuICAgICAgdmFyIGkgPSB0aWNrLmJsYWNrYm9hcmQuZ2V0KCdpJywgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcbiAgICAgIHZhciBzdGF0dXMgPSBFbnVtU3RhdHVzLlNVQ0NFU1M7XG5cbiAgICAgIHdoaWxlICh0aGlzLm1heExvb3AgPCAwIHx8IGkgPCB0aGlzLm1heExvb3ApIHtcbiAgICAgICAgc3RhdHVzID0gdGhpcy5jaGlsZC5leGVjdXRlKHRpY2spO1xuXG4gICAgICAgIGlmIChzdGF0dXMgPT0gRW51bVN0YXR1cy5TVUNDRVNTIHx8IHN0YXR1cyA9PSBFbnVtU3RhdHVzLkZBSUxVUkUpIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnaScsIGksIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG4gICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH1cbiAgfVxuXG5leHBvcnQgaW50ZXJmYWNlIElCM1JlcGVhdGVyUHJvcCBleHRlbmRzIElCM0RlY29yYXRvclByb3Age1xuICBtYXhMb29wOiBudW1iZXJcbn0iXX0=