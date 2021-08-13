
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/composites/B3MemSequence.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53589IaR/hLm7hcpnZCspDU', 'B3MemSequence');
// libs/behavior3ts/composites/B3MemSequence.ts

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
exports.B3MemSequence = void 0;
var Constants_1 = require("../Constants");
var B3Composite_1 = require("../core/B3Composite");
var B3MemSequence = /** @class */ (function (_super) {
    __extends(B3MemSequence, _super);
    function B3MemSequence(d) {
        var _this = this;
        d.name = "MemSequence";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3MemSequence.prototype.open = function (tick) {
        tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
    };
    B3MemSequence.prototype.tick = function (tick) {
        var child = tick.blackboard.get('runningChild', tick.tree.id, this.id);
        for (var i = child; i < this.children.length; i++) {
            var status = this.children[i].execute(tick);
            if (status !== Constants_1.EnumStatus.SUCCESS) {
                if (status === Constants_1.EnumStatus.RUNNING) {
                    tick.blackboard.set('runningChild', i, tick.tree.id, this.id);
                }
                return status;
            }
        }
        return Constants_1.EnumStatus.SUCCESS;
    };
    return B3MemSequence;
}(B3Composite_1.B3Composite));
exports.B3MemSequence = B3MemSequence;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2JlaGF2aW9yM3RzL2NvbXBvc2l0ZXMvQjNNZW1TZXF1ZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLG1EQUFrRDtBQUk5QztJQUFtQyxpQ0FBVztJQUMxQyx1QkFBWSxDQUFtQjtRQUEvQixpQkFHQztRQUZHLENBQUMsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQ3ZCLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7O0lBQ2IsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RSxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFNUMsSUFBSSxNQUFNLEtBQUssc0JBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9CLElBQUksTUFBTSxLQUFLLHNCQUFVLENBQUMsT0FBTyxFQUFFO29CQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDakU7Z0JBQ0QsT0FBTyxNQUFNLENBQUM7YUFDakI7U0FDSjtRQUVELE9BQU8sc0JBQVUsQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0F6QkEsQUF5QkMsQ0F6QmtDLHlCQUFXLEdBeUI3QztBQXpCWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCM0NvbXBvc2l0ZSB9IGZyb20gXCIuLi9jb3JlL0IzQ29tcG9zaXRlXCI7XG5pbXBvcnQgeyBJQjNDb21wb3NpdGVQcm9wIH0gZnJvbSBcIi4uL2NvcmUvQjNJTm9kZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuLi9jb3JlL0IzVGlja1wiO1xuXG4gICAgZXhwb3J0IGNsYXNzIEIzTWVtU2VxdWVuY2UgZXh0ZW5kcyBCM0NvbXBvc2l0ZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGQ6IElCM0NvbXBvc2l0ZVByb3ApIHtcbiAgICAgICAgICAgIGQubmFtZSA9IFwiTWVtU2VxdWVuY2VcIjtcbiAgICAgICAgICAgIHN1cGVyKGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3Blbih0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ3J1bm5pbmdDaGlsZCcsIDAsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aWNrKHRpY2s6IEIzVGljaykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGljay5ibGFja2JvYXJkLmdldCgncnVubmluZ0NoaWxkJywgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBjaGlsZDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0gdGhpcy5jaGlsZHJlbltpXS5leGVjdXRlKHRpY2spO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gRW51bVN0YXR1cy5TVUNDRVNTKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IEVudW1TdGF0dXMuUlVOTklORykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgncnVubmluZ0NoaWxkJywgaSwgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIEVudW1TdGF0dXMuU1VDQ0VTUztcbiAgICAgICAgfVxuICAgIH0iXX0=