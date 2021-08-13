
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/b3/decorators/Limiter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe99cdMf7lMAJy97QOiudXR', 'Limiter');
// libs/b3/decorators/Limiter.ts

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
        var Limiter = /** @class */ (function (_super) {
            __extends(Limiter, _super);
            function Limiter(d) {
                return _super.call(this, d) || this;
            }
            Limiter.prototype._parseProp = function (d) {
                if (!d.maxLoop) {
                    throw 'maxLoop parameter in Limiter decorator is an obligatory parameter';
                }
                this.maxLoop = d.maxLoop || 1;
            };
            Limiter.prototype.open = function (tick) {
                tick.blackboard.set('i', 0, tick.tree.id, this.id);
            };
            Limiter.prototype.tick = function (tick) {
                if (!this.child) {
                    return EnumStatus.ERROR;
                }
                var i = tick.blackboard.get('i', tick.tree.id, this.id);
                if (i < this.maxLoop) {
                    var status = this.child.execute(tick);
                    if (status == EnumStatus.SUCCESS || status == EnumStatus.FAILURE)
                        tick.blackboard.set('i', i + 1, tick.tree.id, this.id);
                    return status;
                }
                return EnumStatus.FAILURE;
            };
            return Limiter;
        }(Decorator));
        decorators.Limiter = Limiter;
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