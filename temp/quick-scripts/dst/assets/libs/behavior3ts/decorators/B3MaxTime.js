
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/decorators/B3MaxTime.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d13fMEQvBARLJWoblZe4yK', 'B3MaxTime');
// libs/b3/decorators/B3MaxTime.ts

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
exports.B3MaxTime = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
var B3MaxTime = /** @class */ (function (_super) {
    __extends(B3MaxTime, _super);
    function B3MaxTime(d) {
        return _super.call(this, d) || this;
    }
    B3MaxTime.prototype._parseProp = function (d) {
        if (!d.maxTime) {
            throw 'maxTime parameter in MaxTime decorator is an obligatory parameter';
        }
        this.maxTime = d.maxTime || 0;
    };
    B3MaxTime.prototype.open = function (tick) {
        var startTime = (new Date()).getTime();
        tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
    };
    B3MaxTime.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var currTime = (new Date()).getTime();
        var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
        var status = this.child.execute(tick);
        if (currTime - startTime > this.maxTime) {
            return Constants_1.EnumStatus.FAILURE;
        }
        return status;
    };
    return B3MaxTime;
}(B3Decorator_1.B3Decorator));
exports.B3MaxTime = B3MaxTime;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvQjNNYXhUaW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFDMUMsbURBQWtEO0FBSTlDO0lBQStCLDZCQUFXO0lBRXRDLG1CQUFZLENBQWU7ZUFDdkIsa0JBQU0sQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVTLDhCQUFVLEdBQXBCLFVBQXFCLENBQU07UUFDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDWixNQUFNLG1FQUFtRSxDQUFDO1NBQzdFO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsd0JBQUksR0FBSixVQUFLLElBQVk7UUFDYixJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsd0JBQUksR0FBSixVQUFLLElBQVk7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLE9BQU8sc0JBQVUsQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFFRCxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXhFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JDLE9BQU8sc0JBQVUsQ0FBQyxPQUFPLENBQUM7U0FDN0I7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWpDQSxBQWlDQyxDQWpDOEIseUJBQVcsR0FpQ3pDO0FBakNZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bVN0YXR1cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzRGVjb3JhdG9yIH0gZnJvbSBcIi4uL2NvcmUvQjNEZWNvcmF0b3JcIjtcbmltcG9ydCB7IElCM0RlY29yYXRvclByb3AgfSBmcm9tIFwiLi4vY29yZS9CM0lOb2RlUHJvcGVydGllc1wiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4uL2NvcmUvQjNUaWNrXCI7XG5cbiAgICBleHBvcnQgY2xhc3MgQjNNYXhUaW1lIGV4dGVuZHMgQjNEZWNvcmF0b3Ige1xuICAgICAgICBtYXhUaW1lOiBudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKGQ6IElNYXhUaW1lUHJvcCkge1xuICAgICAgICAgICAgc3VwZXIoZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHByb3RlY3RlZCBfcGFyc2VQcm9wKGQ6IGFueSkge1xuICAgICAgICAgICAgaWYgKCFkLm1heFRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnbWF4VGltZSBwYXJhbWV0ZXIgaW4gTWF4VGltZSBkZWNvcmF0b3IgaXMgYW4gb2JsaWdhdG9yeSBwYXJhbWV0ZXInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXhUaW1lID0gZC5tYXhUaW1lIHx8IDA7XG4gICAgICAgIH1cblxuICAgICAgICBvcGVuKHRpY2s6IEIzVGljaykge1xuICAgICAgICAgICAgdmFyIHN0YXJ0VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB0aWNrLmJsYWNrYm9hcmQuc2V0KCdzdGFydFRpbWUnLCBzdGFydFRpbWUsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aWNrKHRpY2s6IEIzVGljaykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEVudW1TdGF0dXMuRVJST1I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgc3RhcnRUaW1lID0gdGljay5ibGFja2JvYXJkLmdldCgnc3RhcnRUaW1lJywgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcblxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuY2hpbGQuZXhlY3V0ZSh0aWNrKTtcbiAgICAgICAgICAgIGlmIChjdXJyVGltZSAtIHN0YXJ0VGltZSA+IHRoaXMubWF4VGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBFbnVtU3RhdHVzLkZBSUxVUkU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgICAgIH1cbiAgICB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1heFRpbWVQcm9wIGV4dGVuZHMgSUIzRGVjb3JhdG9yUHJvcCB7XG4gICAgbWF4VGltZTogbnVtYmVyO1xufSJdfQ==