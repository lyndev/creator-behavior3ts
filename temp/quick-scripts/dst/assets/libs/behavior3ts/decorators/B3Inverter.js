
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/decorators/B3Inverter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9972bidrxCdrH5oLLMn+UN', 'B3Inverter');
// libs/b3/decorators/B3Inverter.ts

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
exports.B3Inverter = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
var B3Inverter = /** @class */ (function (_super) {
    __extends(B3Inverter, _super);
    function B3Inverter(d) {
        var _this = this;
        d.name = "Inverter";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3Inverter.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var status = this.child.execute(tick);
        if (status == Constants_1.EnumStatus.SUCCESS) {
            status = Constants_1.EnumStatus.FAILURE;
        }
        else if (status == Constants_1.EnumStatus.FAILURE) {
            status = Constants_1.EnumStatus.SUCCESS;
        }
        return status;
    };
    return B3Inverter;
}(B3Decorator_1.B3Decorator));
exports.B3Inverter = B3Inverter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvQjNJbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLG1EQUFrRDtBQUk5QztJQUFnQyw4QkFBVztJQUN2QyxvQkFBWSxDQUFtQjtRQUEvQixpQkFHQztRQUZHLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7O0lBQ2IsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixPQUFPLHNCQUFVLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsSUFBSSxNQUFNLElBQUksc0JBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDOUIsTUFBTSxHQUFHLHNCQUFVLENBQUMsT0FBTyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxNQUFNLElBQUksc0JBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDckMsTUFBTSxHQUFHLHNCQUFVLENBQUMsT0FBTyxDQUFDO1NBQy9CO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsQ0FyQitCLHlCQUFXLEdBcUIxQztBQXJCWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCM0RlY29yYXRvciB9IGZyb20gXCIuLi9jb3JlL0IzRGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBJQjNEZWNvcmF0b3JQcm9wIH0gZnJvbSBcIi4uL2NvcmUvQjNJTm9kZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuLi9jb3JlL0IzVGlja1wiO1xuXG4gICAgZXhwb3J0IGNsYXNzIEIzSW52ZXJ0ZXIgZXh0ZW5kcyBCM0RlY29yYXRvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGQ6IElCM0RlY29yYXRvclByb3ApIHtcbiAgICAgICAgICAgIGQubmFtZSA9IFwiSW52ZXJ0ZXJcIjtcbiAgICAgICAgICAgIHN1cGVyKGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGlsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBFbnVtU3RhdHVzLkVSUk9SO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gdGhpcy5jaGlsZC5leGVjdXRlKHRpY2spO1xuXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IEVudW1TdGF0dXMuU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IEVudW1TdGF0dXMuRkFJTFVSRTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09IEVudW1TdGF0dXMuRkFJTFVSRSkge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IEVudW1TdGF0dXMuU1VDQ0VTUztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgICAgfVxuICAgIH0iXX0=