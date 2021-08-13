"use strict";
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