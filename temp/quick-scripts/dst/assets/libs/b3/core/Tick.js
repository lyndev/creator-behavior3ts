
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/b3/core/Tick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64a1a9VZVNHmag+hdLpTxxS', 'Tick');
// libs/b3/core/Tick.ts

var b3;
(function (b3) {
    var Tick = /** @class */ (function () {
        function Tick() {
            this.tree = null;
            this.debug = null;
            this.target = null;
            this.blackboard = null;
            this._openNodes = [];
            this._nodeCount = 0;
        }
        Object.defineProperty(Tick.prototype, "openNodes", {
            get: function () { return this._openNodes; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Tick.prototype, "nodeCount", {
            get: function () { return this._nodeCount; },
            enumerable: false,
            configurable: true
        });
        /**
         * node执行enter时候会调用
         * @param node 发起调用的Node.
         **/
        Tick.prototype.enterNode = function (node) {
            this._nodeCount++;
            this._openNodes.push(node.id);
            // TODO: call debug here
        };
        /**
         * node执行openNode时执行这个方法
         * @param node
         **/
        Tick.prototype.openNode = function (node) {
            // TODO: call debug here
        };
        /**
         * node执行tick时候会调用
         * @param node
         **/
        Tick.prototype.tickNode = function (node) {
            // TODO: call debug here
        };
        /**
         * node执行close时候会调用
         * @param node
         **/
        Tick.prototype.closeNode = function (node) {
            // TODO: call debug here
            this._openNodes.pop();
        };
        /**
         * node执行exit时候会调用
         * @param node
         **/
        Tick.prototype.exitNode = function (node) {
            // TODO: call debug here
        };
        return Tick;
    }());
    b3.Tick = Tick;
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