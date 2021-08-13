
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3Tick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvcmUvQjNUaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFO0lBT0U7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQUksNkJBQVM7YUFBYixjQUFrQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUMzQyxzQkFBSSw2QkFBUzthQUFiLGNBQWtCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzNDOzs7UUFHSTtJQUNKLDBCQUFTLEdBQVQsVUFBVSxJQUFlO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFOUIsd0JBQXdCO0lBQzFCLENBQUM7SUFFRDs7O1FBR0k7SUFDSix5QkFBUSxHQUFSLFVBQVMsSUFBZTtRQUN0Qix3QkFBd0I7SUFDMUIsQ0FBQztJQUVEOzs7UUFHSTtJQUNKLHlCQUFRLEdBQVIsVUFBUyxJQUFlO1FBQ3RCLHdCQUF3QjtJQUMxQixDQUFDO0lBRUQ7OztRQUdJO0lBQ0osMEJBQVMsR0FBVCxVQUFVLElBQWU7UUFDdkIsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7UUFHSTtJQUNKLHlCQUFRLEdBQVIsVUFBUyxJQUFlO1FBQ3RCLHdCQUF3QjtJQUMxQixDQUFDO0lBQ0gsYUFBQztBQUFELENBN0RBLEFBNkRDLElBQUE7QUE3RFksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCM0Jhc2VOb2RlIH0gZnJvbSBcIi4vQjNCYXNlTm9kZVwiO1xuaW1wb3J0IHsgQjNCbGFja2JvYXJkIH0gZnJvbSBcIi4vQjNCbGFja2JvYXJkXCI7XG5cbiAgZXhwb3J0IGNsYXNzIEIzVGljazxUYXJnZXQgPSBhbnk+IHtcbiAgICB0cmVlOiBhbnk7XG4gICAgZGVidWc6IGFueTtcbiAgICB0YXJnZXQ6IFRhcmdldDtcbiAgICBibGFja2JvYXJkOiBCM0JsYWNrYm9hcmQ7XG4gICAgcHJpdmF0ZSBfb3Blbk5vZGVzOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIF9ub2RlQ291bnQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMudHJlZSA9IG51bGw7XG4gICAgICB0aGlzLmRlYnVnID0gbnVsbDtcbiAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgIHRoaXMuYmxhY2tib2FyZCA9IG51bGw7XG4gICAgICB0aGlzLl9vcGVuTm9kZXMgPSBbXTtcbiAgICAgIHRoaXMuX25vZGVDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0IG9wZW5Ob2RlcygpIHsgcmV0dXJuIHRoaXMuX29wZW5Ob2RlczsgfVxuICAgIGdldCBub2RlQ291bnQoKSB7IHJldHVybiB0aGlzLl9ub2RlQ291bnQ7IH1cbiAgICAvKipcbiAgICAgKiBub2Rl5omn6KGMZW50ZXLml7blgJnkvJrosIPnlKhcbiAgICAgKiBAcGFyYW0gbm9kZSDlj5HotbfosIPnlKjnmoROb2RlLlxuICAgICAqKi9cbiAgICBlbnRlck5vZGUobm9kZTpCM0Jhc2VOb2RlKSB7XG4gICAgICB0aGlzLl9ub2RlQ291bnQrKztcbiAgICAgIHRoaXMuX29wZW5Ob2Rlcy5wdXNoKG5vZGUuaWQpO1xuXG4gICAgICAvLyBUT0RPOiBjYWxsIGRlYnVnIGhlcmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBub2Rl5omn6KGMb3Blbk5vZGXml7bmiafooYzov5nkuKrmlrnms5VcbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqKi9cbiAgICBvcGVuTm9kZShub2RlOkIzQmFzZU5vZGUpIHtcbiAgICAgIC8vIFRPRE86IGNhbGwgZGVidWcgaGVyZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG5vZGXmiafooYx0aWNr5pe25YCZ5Lya6LCD55SoXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKiovXG4gICAgdGlja05vZGUobm9kZTpCM0Jhc2VOb2RlKSB7XG4gICAgICAvLyBUT0RPOiBjYWxsIGRlYnVnIGhlcmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBub2Rl5omn6KGMY2xvc2Xml7blgJnkvJrosIPnlKhcbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqKi9cbiAgICBjbG9zZU5vZGUobm9kZTpCM0Jhc2VOb2RlKSB7XG4gICAgICAvLyBUT0RPOiBjYWxsIGRlYnVnIGhlcmVcbiAgICAgIHRoaXMuX29wZW5Ob2Rlcy5wb3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBub2Rl5omn6KGMZXhpdOaXtuWAmeS8muiwg+eUqFxuICAgICAqIEBwYXJhbSBub2RlXG4gICAgICoqL1xuICAgIGV4aXROb2RlKG5vZGU6QjNCYXNlTm9kZSkge1xuICAgICAgLy8gVE9ETzogY2FsbCBkZWJ1ZyBoZXJlXG4gICAgfVxuICB9Il19