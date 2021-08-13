
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/actions/B3Wait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9122ZsbIVMVo01pCrrQpa7', 'B3Wait');
// libs/b3/actions/B3Wait.ts

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
exports.B3Wait = void 0;
var Constants_1 = require("../Constants");
var B3Action_1 = require("../core/B3Action");
var B3Wait = /** @class */ (function (_super) {
    __extends(B3Wait, _super);
    function B3Wait(d) {
        return _super.call(this, d) || this;
    }
    B3Wait.prototype._parseProp = function (d) {
        this.endTime = d.milliseconds || 0;
    };
    B3Wait.prototype.open = function (tick) {
        var startTime = (new Date()).getTime();
        tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
    };
    B3Wait.prototype.tick = function (tick) {
        var currTime = (new Date()).getTime();
        var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
        if (currTime - startTime > this.endTime) {
            return Constants_1.EnumStatus.SUCCESS;
        }
        return Constants_1.EnumStatus.RUNNING;
    };
    return B3Wait;
}(B3Action_1.B3Action));
exports.B3Wait = B3Wait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2FjdGlvbnMvQjNXYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFDMUMsNkNBQTRDO0FBSTVDO0lBQTRCLDBCQUFRO0lBRWhDLGdCQUFZLENBQWM7ZUFDdEIsa0JBQU0sQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVTLDJCQUFVLEdBQXBCLFVBQXFCLENBQU07UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBR0QscUJBQUksR0FBSixVQUFLLElBQVk7UUFDYixJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBR0QscUJBQUksR0FBSixVQUFLLElBQVk7UUFDYixJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXhFLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JDLE9BQU8sc0JBQVUsQ0FBQyxPQUFPLENBQUM7U0FDN0I7UUFFRCxPQUFPLHNCQUFVLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0EzQkEsQUEyQkMsQ0EzQjJCLG1CQUFRLEdBMkJuQztBQTNCWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCM0FjdGlvbiB9IGZyb20gXCIuLi9jb3JlL0IzQWN0aW9uXCI7XG5pbXBvcnQgeyBJQjNOb2RlUHJvcCB9IGZyb20gXCIuLi9jb3JlL0IzSU5vZGVQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBCM1RpY2sgfSBmcm9tIFwiLi4vY29yZS9CM1RpY2tcIjtcblxuZXhwb3J0IGNsYXNzIEIzV2FpdCBleHRlbmRzIEIzQWN0aW9uIHtcbiAgICBlbmRUaW1lOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoZDogSUIzTm9kZVByb3ApIHtcbiAgICAgICAgc3VwZXIoZCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9wYXJzZVByb3AoZDogYW55KSB7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGQubWlsbGlzZWNvbmRzIHx8IDA7XG4gICAgfVxuXG5cbiAgICBvcGVuKHRpY2s6IEIzVGljaykge1xuICAgICAgICB2YXIgc3RhcnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnc3RhcnRUaW1lJywgc3RhcnRUaW1lLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICAgIH1cblxuXG4gICAgdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IHRpY2suYmxhY2tib2FyZC5nZXQoJ3N0YXJ0VGltZScsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG5cbiAgICAgICAgaWYgKGN1cnJUaW1lIC0gc3RhcnRUaW1lID4gdGhpcy5lbmRUaW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5TVUNDRVNTO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEVudW1TdGF0dXMuUlVOTklORztcbiAgICB9XG59Il19