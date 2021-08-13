"use strict";
cc._RF.push(module, '155ffn0s3FHCJ1JNS9KU1mY', 'B3Tick');
// libs/b3/core/B3Tick.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3Tick = void 0;
var B3Tick = /** @class */ (function () {
    function B3Tick() {
        this.tree = null;
        this.debug = null;
        this.target = null;
        this.blackboard = null;
        this._openNodes = [];
        this._nodeCount = 0;
    }
    Object.defineProperty(B3Tick.prototype, "openNodes", {
        get: function () { return this._openNodes; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(B3Tick.prototype, "nodeCount", {
        get: function () { return this._nodeCount; },
        enumerable: false,
        configurable: true
    });
    /**
     * node执行enter时候会调用
     * @param node 发起调用的Node.
     **/
    B3Tick.prototype.enterNode = function (node) {
        this._nodeCount++;
        this._openNodes.push(node.id);
        // TODO: call debug here
    };
    /**
     * node执行openNode时执行这个方法
     * @param node
     **/
    B3Tick.prototype.openNode = function (node) {
        // TODO: call debug here
    };
    /**
     * node执行tick时候会调用
     * @param node
     **/
    B3Tick.prototype.tickNode = function (node) {
        // TODO: call debug here
    };
    /**
     * node执行close时候会调用
     * @param node
     **/
    B3Tick.prototype.closeNode = function (node) {
        // TODO: call debug here
        this._openNodes.pop();
    };
    /**
     * node执行exit时候会调用
     * @param node
     **/
    B3Tick.prototype.exitNode = function (node) {
        // TODO: call debug here
    };
    return B3Tick;
}());
exports.B3Tick = B3Tick;

cc._RF.pop();