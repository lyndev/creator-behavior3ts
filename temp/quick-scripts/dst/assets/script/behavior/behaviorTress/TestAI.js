
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/behavior/behaviorTress/TestAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0446cJ2m1xDNLJA/xMBu24/', 'TestAI');
// script/behavior/behaviorTress/TestAI.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var B3BehaviorTree_1 = require("../../../libs/behavior3ts/core/B3BehaviorTree");
var B3Blackboard_1 = require("../../../libs/behavior3ts/core/B3Blackboard");
var B3Utils_1 = require("../../../libs/behavior3ts/utils/B3Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TestAI = /** @class */ (function (_super) {
    __extends(TestAI, _super);
    function TestAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attckTarget = null;
        return _this;
    }
    TestAI.prototype.start = function () {
        var _this = this;
        cc.tween(this.attckTarget).repeatForever(cc.tween(this.attckTarget).to(1, { x: 100 }).to(1, { x: 0 })).start();
        this.blackboardData = new B3Blackboard_1.B3Blackboard();
        cc.loader.loadRes("behavior3/testai3", cc.JsonAsset, function (err, json) {
            if (json) {
                _this.testTree = new B3BehaviorTree_1.B3BehaviorTree(B3Utils_1.createUUID());
                var data = json.json;
                _this.testTree.load(data, data.custom_nodes);
            }
        });
    };
    TestAI.prototype.update = function (dt) {
        if (this.attckTarget) {
            this.blackboardData.set("targetpos", this.attckTarget.position);
        }
        this.blackboardData.set("mypos", this.node.position);
        if (this.testTree) {
            this.testTree.tick({}, this.blackboardData);
        }
    };
    __decorate([
        property(cc.Node)
    ], TestAI.prototype, "attckTarget", void 0);
    TestAI = __decorate([
        ccclass
    ], TestAI);
    return TestAI;
}(cc.Component));
exports.default = TestAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYmVoYXZpb3IvYmVoYXZpb3JUcmVzcy9UZXN0QUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0ZBQStFO0FBQy9FLDRFQUEyRTtBQUMzRSxtRUFBcUU7QUFDL0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUE4QkM7UUF6QkcsaUJBQVcsR0FBWSxJQUFJLENBQUE7O0lBeUIvQixDQUFDO0lBeEJHLHNCQUFLLEdBQUw7UUFBQSxpQkFhQztRQVpHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGFBQWEsQ0FDcEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FDL0QsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUVULElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUE7UUFDeEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUFrQjtZQUN6RSxJQUFJLElBQUksRUFBRTtnQkFDTixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksK0JBQWMsQ0FBQyxvQkFBVSxFQUFFLENBQUMsQ0FBQTtnQkFDaEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtnQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTthQUM5QztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQ2xFO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtTQUM5QztJQUNMLENBQUM7SUF4QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUztJQUxWLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E4QjFCO0lBQUQsYUFBQztDQTlCRCxBQThCQyxDQTlCbUMsRUFBRSxDQUFDLFNBQVMsR0E4Qi9DO2tCQTlCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEIzQmVoYXZpb3JUcmVlIH0gZnJvbSAnLi4vLi4vLi4vbGlicy9iZWhhdmlvcjN0cy9jb3JlL0IzQmVoYXZpb3JUcmVlJztcbmltcG9ydCB7IEIzQmxhY2tib2FyZCB9IGZyb20gJy4uLy4uLy4uL2xpYnMvYmVoYXZpb3IzdHMvY29yZS9CM0JsYWNrYm9hcmQnO1xuaW1wb3J0IHsgY3JlYXRlVVVJRCB9IGZyb20gJy4uLy4uLy4uL2xpYnMvYmVoYXZpb3IzdHMvdXRpbHMvQjNVdGlscyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RBSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgdGVzdFRyZWU6IEIzQmVoYXZpb3JUcmVlXG4gICAgYmxhY2tib2FyZERhdGE6IEIzQmxhY2tib2FyZFxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXR0Y2tUYXJnZXQ6IGNjLk5vZGUgPSBudWxsXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYXR0Y2tUYXJnZXQpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmF0dGNrVGFyZ2V0KS50bygxLCB7IHg6IDEwMCB9KS50bygxLCB7IHg6IDAgfSlcbiAgICAgICAgKS5zdGFydCgpXG5cbiAgICAgICAgdGhpcy5ibGFja2JvYXJkRGF0YSA9IG5ldyBCM0JsYWNrYm9hcmQoKVxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImJlaGF2aW9yMy90ZXN0YWkzXCIsIGNjLkpzb25Bc3NldCwgKGVyciwganNvbjogY2MuSnNvbkFzc2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAoanNvbikge1xuICAgICAgICAgICAgICAgIHRoaXMudGVzdFRyZWUgPSBuZXcgQjNCZWhhdmlvclRyZWUoY3JlYXRlVVVJRCgpKVxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ganNvbi5qc29uXG4gICAgICAgICAgICAgICAgdGhpcy50ZXN0VHJlZS5sb2FkKGRhdGEsIGRhdGEuY3VzdG9tX25vZGVzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5hdHRja1RhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5ibGFja2JvYXJkRGF0YS5zZXQoXCJ0YXJnZXRwb3NcIiwgdGhpcy5hdHRja1RhcmdldC5wb3NpdGlvbilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJsYWNrYm9hcmREYXRhLnNldChcIm15cG9zXCIsIHRoaXMubm9kZS5wb3NpdGlvbilcbiAgICAgICAgaWYgKHRoaXMudGVzdFRyZWUpIHtcbiAgICAgICAgICAgIHRoaXMudGVzdFRyZWUudGljayh7fSwgdGhpcy5ibGFja2JvYXJkRGF0YSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==