
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/decorators/B3Limiter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb050dGqEBD5ZMbluh2CuOe', 'B3Limiter');
// libs/b3/decorators/B3Limiter.ts

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
exports.B3Limiter = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
var B3Limiter = /** @class */ (function (_super) {
    __extends(B3Limiter, _super);
    function B3Limiter(d) {
        return _super.call(this, d) || this;
    }
    B3Limiter.prototype._parseProp = function (d) {
        if (!d.maxLoop) {
            throw 'maxLoop parameter in Limiter decorator is an obligatory parameter';
        }
        this.maxLoop = d.maxLoop || 1;
    };
    B3Limiter.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    B3Limiter.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        if (i < this.maxLoop) {
            var status = this.child.execute(tick);
            if (status == Constants_1.EnumStatus.SUCCESS || status == Constants_1.EnumStatus.FAILURE)
                tick.blackboard.set('i', i + 1, tick.tree.id, this.id);
            return status;
        }
        return Constants_1.EnumStatus.FAILURE;
    };
    return B3Limiter;
}(B3Decorator_1.B3Decorator));
exports.B3Limiter = B3Limiter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvQjNMaW1pdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFDMUMsbURBQWtEO0FBSWxEO0lBQStCLDZCQUFXO0lBRXRDLG1CQUFZLENBQWlCO2VBQ3pCLGtCQUFNLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFUyw4QkFBVSxHQUFwQixVQUFxQixDQUFNO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ1osTUFBTSxtRUFBbUUsQ0FBQztTQUM3RTtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHdCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHdCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixPQUFPLHNCQUFVLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRDLElBQUksTUFBTSxJQUFJLHNCQUFVLENBQUMsT0FBTyxJQUFJLE1BQU0sSUFBSSxzQkFBVSxDQUFDLE9BQU87Z0JBQzVELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUzRCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUVELE9BQU8sc0JBQVUsQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsQ0FuQzhCLHlCQUFXLEdBbUN6QztBQW5DWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCM0RlY29yYXRvciB9IGZyb20gXCIuLi9jb3JlL0IzRGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBJQjNEZWNvcmF0b3JQcm9wIH0gZnJvbSBcIi4uL2NvcmUvQjNJTm9kZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuLi9jb3JlL0IzVGlja1wiO1xuXG5leHBvcnQgY2xhc3MgQjNMaW1pdGVyIGV4dGVuZHMgQjNEZWNvcmF0b3Ige1xuICAgIG1heExvb3A6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihkOiBJQjNMaW1pdGVyUHJvcCkge1xuICAgICAgICBzdXBlcihkKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3BhcnNlUHJvcChkOiBhbnkpIHtcbiAgICAgICAgaWYgKCFkLm1heExvb3ApIHtcbiAgICAgICAgICAgIHRocm93ICdtYXhMb29wIHBhcmFtZXRlciBpbiBMaW1pdGVyIGRlY29yYXRvciBpcyBhbiBvYmxpZ2F0b3J5IHBhcmFtZXRlcic7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXhMb29wID0gZC5tYXhMb29wIHx8IDE7XG4gICAgfVxuXG4gICAgb3Blbih0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnaScsIDAsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG4gICAgfVxuXG4gICAgdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5FUlJPUjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpID0gdGljay5ibGFja2JvYXJkLmdldCgnaScsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG5cbiAgICAgICAgaWYgKGkgPCB0aGlzLm1heExvb3ApIHtcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSB0aGlzLmNoaWxkLmV4ZWN1dGUodGljayk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gRW51bVN0YXR1cy5TVUNDRVNTIHx8IHN0YXR1cyA9PSBFbnVtU3RhdHVzLkZBSUxVUkUpXG4gICAgICAgICAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnaScsIGkgKyAxLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEVudW1TdGF0dXMuRkFJTFVSRTtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUIzTGltaXRlclByb3AgZXh0ZW5kcyBJQjNEZWNvcmF0b3JQcm9wIHtcbiAgICBtYXhMb29wOiBudW1iZXI7XG59Il19