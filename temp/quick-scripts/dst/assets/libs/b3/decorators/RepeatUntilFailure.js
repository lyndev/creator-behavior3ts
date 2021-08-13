
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/b3/decorators/RepeatUntilFailure.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22a8dEsA59N+Lhyb8txN43y', 'RepeatUntilFailure');
// libs/b3/decorators/RepeatUntilFailure.ts

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
var b3;
(function (b3) {
    var decorators;
    (function (decorators) {
        //重复n次，或者直到遇到不是成功的状态为止
        var RepeatUntilFailure = /** @class */ (function (_super) {
            __extends(RepeatUntilFailure, _super);
            function RepeatUntilFailure(d) {
                return _super.call(this, d) || this;
            }
            RepeatUntilFailure.prototype._parseProp = function (d) {
                this.maxLoop = this.maxLoop || -1;
            };
            RepeatUntilFailure.prototype.open = function (tick) {
                tick.blackboard.set('i', 0, tick.tree.id, this.id);
            };
            RepeatUntilFailure.prototype.tick = function (tick) {
                if (!this.child) {
                    return EnumStatus.ERROR;
                }
                var i = tick.blackboard.get('i', tick.tree.id, this.id);
                var status = EnumStatus.ERROR;
                while (this.maxLoop < 0 || i < this.maxLoop) {
                    status = this.child.execute(tick);
                    if (status == EnumStatus.SUCCESS) {
                        i++;
                    }
                    else {
                        break;
                    }
                }
                i = tick.blackboard.set('i', i, tick.tree.id, this.id);
                return status;
            };
            return RepeatUntilFailure;
        }(Decorator));
        decorators.RepeatUntilFailure = RepeatUntilFailure;
    })(decorators = b3.decorators || (b3.decorators = {}));
})(b3 || (b3 = {}));

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