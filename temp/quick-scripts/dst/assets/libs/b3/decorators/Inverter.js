
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/b3/decorators/Inverter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdd6eU7kPFO742ei6scVdkv', 'Inverter');
// libs/b3/decorators/Inverter.ts

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
        var Inverter = /** @class */ (function (_super) {
            __extends(Inverter, _super);
            function Inverter(d) {
                var _this = this;
                d.name = "Inverter";
                _this = _super.call(this, d) || this;
                return _this;
            }
            Inverter.prototype.tick = function (tick) {
                if (!this.child) {
                    return EnumStatus.ERROR;
                }
                var status = this.child.execute(tick);
                if (status == EnumStatus.SUCCESS) {
                    status = EnumStatus.FAILURE;
                }
                else if (status == EnumStatus.FAILURE) {
                    status = EnumStatus.SUCCESS;
                }
                return status;
            };
            return Inverter;
        }(Decorator));
        decorators.Inverter = Inverter;
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