
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3BaseNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvcmUvQjNCYXNlTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFDMUMsNENBQThDO0FBSTlDO0lBUUksb0JBQVksQ0FBYztRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksb0JBQVUsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVTLCtCQUFVLEdBQXBCLFVBQXFCLElBQVM7SUFFOUIsQ0FBQztJQUVEOzs7OztRQUtJO0lBQ0osNEJBQU8sR0FBUCxVQUFRLElBQVk7UUFDaEIsUUFBUTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsT0FBTztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7UUFFRCxPQUFPO1FBQ1AsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixRQUFRO1FBQ1IsSUFBSSxNQUFNLEtBQUssc0JBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQjtRQUVELE9BQU87UUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7Ozs7UUFLSTtJQUNNLDJCQUFNLEdBQWhCLFVBQWlCLElBQVk7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7UUFLSTtJQUNNLDBCQUFLLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7UUFNSTtJQUNNLDBCQUFLLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7O1FBS0k7SUFDTSwyQkFBTSxHQUFoQixVQUFpQixJQUFZO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUFFLE9BQU87UUFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7UUFLSTtJQUNNLDBCQUFLLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7OztRQUtJO0lBQ0osMEJBQUssR0FBTCxVQUFNLElBQVksSUFBSSxDQUFDO0lBRXZCOzs7O1FBSUk7SUFDSix5QkFBSSxHQUFKLFVBQUssSUFBWSxJQUFJLENBQUM7SUFVdEI7Ozs7O1FBS0k7SUFDSiwwQkFBSyxHQUFMLFVBQU0sSUFBWSxJQUFJLENBQUM7SUFFdkI7Ozs7O1FBS0k7SUFDSix5QkFBSSxHQUFKLFVBQUssSUFBWSxJQUFJLENBQUM7SUFDMUIsaUJBQUM7QUFBRCxDQXJKQSxBQXFKQyxJQUFBO0FBckpxQixnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVVVUlEIH0gZnJvbSBcIi4uL3V0aWxzL0IzVXRpbHNcIjtcbmltcG9ydCB7IElCM05vZGVQcm9wIH0gZnJvbSBcIi4vQjNJTm9kZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuL0IzVGlja1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQjNCYXNlTm9kZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBjYXRlZ29yeTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHByb3BlcnRpZXM6IGFueTtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHBhcmFtZXRlcnM6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihkOiBJQjNOb2RlUHJvcCkge1xuICAgICAgICB0aGlzLmlkID0gZC5pZCB8fCBjcmVhdGVVVUlEKCk7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBkLmNhdGVnb3J5IHx8ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSBkLm5hbWUgfHwgJyc7XG4gICAgICAgIHRoaXMudGl0bGUgPSBkLnRpdGxlIHx8IHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGQuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IGQucHJvcGVydGllcyB8fCB7fTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0ge307XG4gICAgICAgIHRoaXMuX3BhcnNlUHJvcCh0aGlzLnByb3BlcnRpZXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcGFyc2VQcm9wKHByb3A6IGFueSkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+Z5piv5bCGdGlja+S/oeWPt+S8oOaSreWIsOatpOiKgueCueeahOS4u+imgeaWueazlVxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7Q29uc3RhbnR9IFRoZSB0aWNrIHN0YXRlLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiovXG4gICAgZXhlY3V0ZSh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgLy8gRU5URVJcbiAgICAgICAgdGhpcy5fZW50ZXIodGljayk7XG5cbiAgICAgICAgLy8gT1BFTlxuICAgICAgICBpZiAoIXRpY2suYmxhY2tib2FyZC5nZXQoJ2lzT3BlbicsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX29wZW4odGljayk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUSUNLXG4gICAgICAgIHZhciBzdGF0dXMgPSB0aGlzLl90aWNrKHRpY2spO1xuXG4gICAgICAgIC8vIENMT1NFXG4gICAgICAgIGlmIChzdGF0dXMgIT09IEVudW1TdGF0dXMuUlVOTklORykge1xuICAgICAgICAgICAgdGhpcy5fY2xvc2UodGljayk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFWElUXG4gICAgICAgIHRoaXMuX2V4aXQodGljayk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIGZvciBlbnRlciBtZXRob2QuXG4gICAgICogQG1ldGhvZCBfZW50ZXJcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiovXG4gICAgcHJvdGVjdGVkIF9lbnRlcih0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgdGljay5lbnRlck5vZGUodGhpcyk7XG4gICAgICAgIHRoaXMuZW50ZXIodGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JhcHBlciBmb3Igb3BlbiBtZXRob2QuXG4gICAgICogQG1ldGhvZCBfb3BlblxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqKi9cbiAgICBwcm90ZWN0ZWQgX29wZW4odGljazogQjNUaWNrKSB7XG4gICAgICAgIHRpY2sub3Blbk5vZGUodGhpcyk7XG4gICAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ2lzT3BlbicsIHRydWUsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMub3Blbih0aWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIGZvciB0aWNrIG1ldGhvZC5cbiAgICAgKiBAbWV0aG9kIF90aWNrXG4gICAgICogQHBhcmFtIHtUaWNrfSB0aWNrIEEgdGljayBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHtDb25zdGFudH0gQSBzdGF0ZSBjb25zdGFudC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICoqL1xuICAgIHByb3RlY3RlZCBfdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgdGljay50aWNrTm9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGljayh0aWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIGZvciBjbG9zZSBtZXRob2QuXG4gICAgICogQG1ldGhvZCBfY2xvc2VcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiovXG4gICAgcHJvdGVjdGVkIF9jbG9zZSh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgaWYgKCF0aWNrLmJsYWNrYm9hcmQuZ2V0KCdpc09wZW4nLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpKSByZXR1cm47XG4gICAgICAgIHRpY2suY2xvc2VOb2RlKHRoaXMpO1xuICAgICAgICB0aWNrLmJsYWNrYm9hcmQuc2V0KCdpc09wZW4nLCBmYWxzZSwgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jbG9zZSh0aWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIGZvciBleGl0IG1ldGhvZC5cbiAgICAgKiBAbWV0aG9kIF9leGl0XG4gICAgICogQHBhcmFtIHtUaWNrfSB0aWNrIEEgdGljayBpbnN0YW5jZS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICoqL1xuICAgIHByb3RlY3RlZCBfZXhpdCh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgdGljay5leGl0Tm9kZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGl0KHRpY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/m+WFpeiKgueCueaYr+aJp+ihjOeahOaWueazle+8jOavj+asoei/kOihjOmDveS8muaJp+ihjFxuICAgICAqXG4gICAgICogQG1ldGhvZCBlbnRlclxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXG4gICAgICoqL1xuICAgIGVudGVyKHRpY2s6IEIzVGljaykgeyB9XG5cbiAgICAvKipcbiAgICAgKiDmiZPlvIDoioLngrnml7bov5DooYznmoTmlrnms5XvvIzlj6rmnInoioLngrnmiZPlvIDml7bmiafooYxcbiAgICAgKiBAbWV0aG9kIG9wZW5cbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxuICAgICAqKi9cbiAgICBvcGVuKHRpY2s6IEIzVGljaykgeyB9XG5cbiAgICAvKipcbiAgICAgKiDmr4/mrKHmiafooYzoioLngrnnmoTmlrnms5VcbiAgICAgKlxuICAgICAqIEBtZXRob2QgdGlja1xuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXG4gICAgICoqL1xuICAgIGFic3RyYWN0IHRpY2sodGljazogQjNUaWNrKTogRW51bVN0YXR1cztcblxuICAgIC8qKlxuICAgICAqIOWFs+mXreiKgueCueeahOaWueazle+8jOW9k+iKgueCuei/kOihjOe7k+aenOS4jeaYr3J1bm5pbmfml7bvvIzkvJrmiafooYzlhbPpl61cbiAgICAgKlxuICAgICAqIEBtZXRob2QgY2xvc2VcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxuICAgICAqKi9cbiAgICBjbG9zZSh0aWNrOiBCM1RpY2spIHsgfVxuXG4gICAgLyoqXG4gICAgICog6YCA5Ye66IqC54K55pe25omn6KGM55qE5pa55rOVXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGV4aXRcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxuICAgICAqKi9cbiAgICBleGl0KHRpY2s6IEIzVGljaykgeyB9XG59XG4iXX0=