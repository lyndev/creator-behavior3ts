"use strict";
cc._RF.push(module, '9ea58bs5w5ChZT5UOgOGuVf', 'B3BaseNode');
// libs/b3/core/B3BaseNode.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3BaseNode = void 0;
var Constants_1 = require("../Constants");
var B3Utils_1 = require("../utils/B3Utils");
var B3BaseNode = /** @class */ (function () {
    function B3BaseNode(d) {
        this.id = d.id || B3Utils_1.createUUID();
        this.category = d.category || '';
        this.name = d.name || '';
        this.title = d.title || this.name;
        this.description = d.description || '';
        this.properties = d.properties || {};
        this.parameters = {};
        this._parseProp(this.properties);
    }
    B3BaseNode.prototype._parseProp = function (prop) {
    };
    /**
     * 这是将tick信号传播到此节点的主要方法
     * @param {Tick} tick A tick instance.
     * @return {Constant} The tick state.
     * @protected
     **/
    B3BaseNode.prototype.execute = function (tick) {
        // ENTER
        this._enter(tick);
        // OPEN
        if (!tick.blackboard.get('isOpen', tick.tree.id, this.id)) {
            this._open(tick);
        }
        // TICK
        var status = this._tick(tick);
        // CLOSE
        if (status !== Constants_1.EnumStatus.RUNNING) {
            this._close(tick);
        }
        // EXIT
        this._exit(tick);
        return status;
    };
    /**
     * Wrapper for enter method.
     * @method _enter
     * @param {Tick} tick A tick instance.
     * @protected
     **/
    B3BaseNode.prototype._enter = function (tick) {
        tick.enterNode(this);
        this.enter(tick);
    };
    /**
     * Wrapper for open method.
     * @method _open
     * @param {Tick} tick A tick instance.
     * @protected
     **/
    B3BaseNode.prototype._open = function (tick) {
        tick.openNode(this);
        tick.blackboard.set('isOpen', true, tick.tree.id, this.id);
        this.open(tick);
    };
    /**
     * Wrapper for tick method.
     * @method _tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     * @protected
     **/
    B3BaseNode.prototype._tick = function (tick) {
        tick.tickNode(this);
        return this.tick(tick);
    };
    /**
     * Wrapper for close method.
     * @method _close
     * @param {Tick} tick A tick instance.
     * @protected
     **/
    B3BaseNode.prototype._close = function (tick) {
        if (!tick.blackboard.get('isOpen', tick.tree.id, this.id))
            return;
        tick.closeNode(this);
        tick.blackboard.set('isOpen', false, tick.tree.id, this.id);
        this.close(tick);
    };
    /**
     * Wrapper for exit method.
     * @method _exit
     * @param {Tick} tick A tick instance.
     * @protected
     **/
    B3BaseNode.prototype._exit = function (tick) {
        tick.exitNode(this);
        this.exit(tick);
    };
    /**
     * 进入节点是执行的方法，每次运行都会执行
     *
     * @method enter
     * @param {Tick} tick A tick instance.
     **/
    B3BaseNode.prototype.enter = function (tick) { };
    /**
     * 打开节点时运行的方法，只有节点打开时执行
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    B3BaseNode.prototype.open = function (tick) { };
    /**
     * 关闭节点的方法，当节点运行结果不是running时，会执行关闭
     *
     * @method close
     * @param {Tick} tick A tick instance.
     **/
    B3BaseNode.prototype.close = function (tick) { };
    /**
     * 退出节点时执行的方法
     *
     * @method exit
     * @param {Tick} tick A tick instance.
     **/
    B3BaseNode.prototype.exit = function (tick) { };
    return B3BaseNode;
}());
exports.B3BaseNode = B3BaseNode;

cc._RF.pop();