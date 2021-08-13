
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3BehaviorTree.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18d3atiViNI2IiuRVJno/ce', 'B3BehaviorTree');
// libs/behavior3ts/core/B3BehaviorTree.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3BehaviorTree = void 0;
var Constants_1 = require("../Constants");
var B3ActionsClsRegister_1 = require("../register/B3ActionsClsRegister");
var B3CompositesClsRegister_1 = require("../register/B3CompositesClsRegister");
var B3CustomClsRegister_1 = require("../register/B3CustomClsRegister");
var B3DecoratorsClsRegister_1 = require("../register/B3DecoratorsClsRegister");
var B3Utils_1 = require("../utils/B3Utils");
var B3Tick_1 = require("./B3Tick");
var B3BehaviorTree = /** @class */ (function () {
    function B3BehaviorTree(id) {
        this.id = id || B3Utils_1.createUUID();
        this.title = 'The behavior tree';
        this.description = 'Default description';
        this.properties = {};
        this.root = null;
        this.debug = null;
    }
    B3BehaviorTree.prototype.load = function (data, names) {
        names = names || {};
        this.id = data.id || this.id;
        this.title = data.title || this.title;
        this.description = data.description || this.description;
        this.properties = data.properties || this.properties;
        var nodes = {};
        var id, spec, node;
        // Create the node list (without connection between them)
        for (id in data.nodes) {
            spec = data.nodes[id];
            var clsName = spec.name;
            clsName = "B3" + clsName;
            var Cls;
            if (B3CustomClsRegister_1.B3CustomClsRegister[spec.name]) { // 自己定义的节点
                // Look for the name in custom nodes
                Cls = B3CustomClsRegister_1.B3CustomClsRegister[spec.name];
            }
            else if (B3ActionsClsRegister_1.B3ActionsCls[clsName]) {
                Cls = B3ActionsClsRegister_1.B3ActionsCls[clsName];
            }
            else if (B3CompositesClsRegister_1.B3CompositesCls[clsName]) {
                Cls = B3CompositesClsRegister_1.B3CompositesCls[clsName];
            }
            else if (B3DecoratorsClsRegister_1.B3DecoratorsCls[clsName]) {
                Cls = B3DecoratorsClsRegister_1.B3DecoratorsCls[clsName];
            }
            else {
                // Invalid node name
                // throw new EvalError('BehaviorTree.load: Invalid node name + "' +
                //     spec.name + '".');
                console.error('BehaviorTree.load: Invalid node name + "' + spec.name + '".');
                continue;
            }
            node = new Cls(spec);
            nodes[id] = node;
        }
        // Connect the nodes
        for (id in data.nodes) {
            spec = data.nodes[id];
            node = nodes[id];
            if (node.category === Constants_1.EnumCategory.COMPOSITE && spec.children) {
                for (var i = 0; i < spec.children.length; i++) {
                    var cid = spec.children[i];
                    node.children.push(nodes[cid]);
                }
            }
            else if (node.category === Constants_1.EnumCategory.DECORATOR && spec.child) {
                node.child = nodes[spec.child];
            }
        }
        this.nodes = nodes;
        this.root = nodes[data.root];
    };
    /**
     * This method dump the current BT into a data structure.
     *
     * Note: This method does not record the current node parameters. Thus,
     * it may not be compatible with load for now.
     *
     * @method dump
     * @return {Object} A data object representing this tree.
     **/
    B3BehaviorTree.prototype.dump = function () {
        var data = {};
        var customNames = [];
        data.title = this.title;
        data.description = this.description;
        data.root = (this.root) ? this.root.id : null;
        data.properties = this.properties;
        data.nodes = {};
        data.custom_nodes = [];
        if (!this.root)
            return data;
        var stack = [this.root];
        while (stack.length > 0) {
            var node = stack.pop();
            var spec = {};
            spec.id = node.id;
            spec.name = node.name;
            spec.title = node.title;
            spec.description = node.description;
            spec.properties = node.properties;
            spec.parameters = node.parameters;
            // verify custom node
            var proto = (node.constructor && node.constructor.prototype);
            var nodeName = (proto && proto.name) || node.name;
            node.category != Constants_1.EnumCategory.ACTION;
            if (node.category != Constants_1.EnumCategory.ACTION && node.category != Constants_1.EnumCategory.COMPOSITE && node.category != Constants_1.EnumCategory.DECORATOR && customNames.indexOf(nodeName) < 0) {
                var subdata = {};
                subdata.name = nodeName;
                subdata.title = (proto && proto.title) || node.title;
                subdata.category = node.category;
                customNames.push(nodeName);
                data.custom_nodes.push(subdata);
            }
            // store children/child
            if (node.category === Constants_1.EnumCategory.COMPOSITE) {
                var composite = node;
                if (composite.children) {
                    var children = [];
                    for (var i = composite.children.length - 1; i >= 0; i--) {
                        children.push(composite.children[i].id);
                        stack.push(composite.children[i]);
                    }
                    spec.children = children;
                }
            }
            else if (node.category === Constants_1.EnumCategory.DECORATOR && node.child) {
                stack.push(node.child);
                spec.child = node.child.id;
            }
            data.nodes[node.id] = spec;
        }
        return data;
    };
    /**
     * Propagates the tick signal through the tree, starting from the root.
     *
     * This method receives a target object of any type (Object, Array,
     * DOMElement, whatever) and a `Blackboard` instance. The target object has
     * no use at all for all Behavior3JS components, but surely is important
     * for custom nodes. The blackboard instance is used by the tree and nodes
     * to store execution variables (e.g., last node running) and is obligatory
     * to be a `Blackboard` instance (or an object with the same interface).
     *
     * Internally, this method creates a Tick object, which will store the
     * target and the blackboard objects.
     *
     * Note: BehaviorTree stores a list of open nodes from last tick, if these
     * nodes weren't called after the current tick, this method will close them
     * automatically.
     *
     * @method tick
     * @param {Object} target A target object.
     * @param {Blackboard} blackboard An instance of blackboard object.
     * @return {Constant} The tick signal state.
     **/
    B3BehaviorTree.prototype.tick = function (target, blackboard) {
        if (!blackboard) {
            throw 'The blackboard parameter is obligatory and must be an ' +
                'instance of B3Blackboard';
        }
        /* CREATE A TICK OBJECT */
        var tick = new B3Tick_1.B3Tick();
        tick.debug = this.debug;
        tick.target = target;
        tick.blackboard = blackboard;
        tick.tree = this;
        /* TICK NODE */
        var state = this.root.execute(tick);
        /* CLOSE NODES FROM LAST TICK, IF NEEDED */
        var lastOpenNodes = blackboard.get('openNodes', this.id);
        var currOpenNodes = tick.openNodes.slice(0);
        // does not close if it is still open in this tick
        var start = 0;
        for (var i = 0, len = Math.min(lastOpenNodes.length, currOpenNodes.length); i < len; i++) {
            if (lastOpenNodes[i] !== currOpenNodes[i]) {
                start = i;
                break;
            }
            start = i + 1;
        }
        // close the nodes
        for (var i = lastOpenNodes.length - 1; i >= start; i--) {
            var node = this.nodes[lastOpenNodes[i]];
            node && node._close(tick);
        }
        /* POPULATE BLACKBOARD */
        blackboard.set('openNodes', currOpenNodes, this.id);
        blackboard.set('nodeCount', tick.nodeCount, this.id);
        return state;
    };
    return B3BehaviorTree;
}());
exports.B3BehaviorTree = B3BehaviorTree;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2JlaGF2aW9yM3RzL2NvcmUvQjNCZWhhdmlvclRyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTRDO0FBQzVDLHlFQUFnRTtBQUNoRSwrRUFBc0U7QUFDdEUsdUVBQXNFO0FBQ3RFLCtFQUFzRTtBQUN0RSw0Q0FBOEM7QUFJOUMsbUNBQWtDO0FBRWxDO0lBUUksd0JBQVksRUFBVztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxvQkFBVSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssSUFBSSxFQUFFLEtBQUs7UUFDWixLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVyRCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ25CLHlEQUF5RDtRQUN6RCxL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QUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEYsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNWLE1BQU07YUFDVDtZQUNELEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsa0JBQWtCO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwRCxJQUFJLElBQUksR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO1FBRUQseUJBQXlCO1FBQ3pCLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFckQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0EvTUEsQUErTUMsSUFBQTtBQS9NWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1DYXRlZ29yeSB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQWN0aW9uc0NscyB9IGZyb20gXCIuLi9yZWdpc3Rlci9CM0FjdGlvbnNDbHNSZWdpc3RlclwiO1xuaW1wb3J0IHsgQjNDb21wb3NpdGVzQ2xzIH0gZnJvbSBcIi4uL3JlZ2lzdGVyL0IzQ29tcG9zaXRlc0Nsc1JlZ2lzdGVyXCI7XG5pbXBvcnQgeyBCM0N1c3RvbUNsc1JlZ2lzdGVyIH0gZnJvbSBcIi4uL3JlZ2lzdGVyL0IzQ3VzdG9tQ2xzUmVnaXN0ZXJcIjtcbmltcG9ydCB7IEIzRGVjb3JhdG9yc0NscyB9IGZyb20gXCIuLi9yZWdpc3Rlci9CM0RlY29yYXRvcnNDbHNSZWdpc3RlclwiO1xuaW1wb3J0IHsgY3JlYXRlVVVJRCB9IGZyb20gXCIuLi91dGlscy9CM1V0aWxzXCI7XG5pbXBvcnQgeyBCM0Jhc2VOb2RlIH0gZnJvbSBcIi4vQjNCYXNlTm9kZVwiO1xuaW1wb3J0IHsgQjNDb21wb3NpdGUgfSBmcm9tIFwiLi9CM0NvbXBvc2l0ZVwiO1xuaW1wb3J0IHsgQjNEZWNvcmF0b3IgfSBmcm9tIFwiLi9CM0RlY29yYXRvclwiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4vQjNUaWNrXCI7XG5cbmV4cG9ydCBjbGFzcyBCM0JlaGF2aW9yVHJlZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcHJvcGVydGllczogYW55O1xuICAgIHJvb3Q6IEIzQmFzZU5vZGU7XG4gICAgZGVidWc6IGFueTtcbiAgICBub2RlczogeyBbaWQ6IHN0cmluZ106IEIzQmFzZU5vZGUgfTtcbiAgICBjb25zdHJ1Y3RvcihpZD86IHN0cmluZykge1xuICAgICAgICB0aGlzLmlkID0gaWQgfHwgY3JlYXRlVVVJRCgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gJ1RoZSBiZWhhdmlvciB0cmVlJztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICdEZWZhdWx0IGRlc2NyaXB0aW9uJztcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0ge307XG4gICAgICAgIHRoaXMucm9vdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGVidWcgPSBudWxsO1xuICAgIH1cblxuICAgIGxvYWQoZGF0YSwgbmFtZXMpIHtcbiAgICAgICAgbmFtZXMgPSBuYW1lcyB8fCB7fTtcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgdGhpcy5pZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGUgfHwgdGhpcy50aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3JpcHRpb24gfHwgdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gZGF0YS5wcm9wZXJ0aWVzIHx8IHRoaXMucHJvcGVydGllcztcblxuICAgICAgICB2YXIgbm9kZXMgPSB7fTtcbiAgICAgICAgdmFyIGlkLCBzcGVjLCBub2RlO1xuICAgICAgICAvLyBDcmVhdGUgdGhlIG5vZGUgbGlzdCAod2l0aG91dCBjb25uZWN0aW9uIGJldHdlZW4gdGhlbSlcbiAgICAgICAgZm9yIChpZCBpbiBkYXRhLm5vZGVzKSB7XG4gICAgICAgICAgICBzcGVjID0gZGF0YS5ub2Rlc1tpZF07XG4gICAgICAgICAgICBsZXQgY2xzTmFtZSA9IHNwZWMubmFtZVxuICAgICAgICAgICAgY2xzTmFtZSA9IFwiQjNcIiArIGNsc05hbWVcbiAgICAgICAgICAgIHZhciBDbHM7XG4gICAgICAgICAgICBpZiAoQjNDdXN0b21DbHNSZWdpc3RlcltzcGVjLm5hbWVdKSB7IC8vIOiHquW3seWumuS5ieeahOiKgueCuVxuICAgICAgICAgICAgICAgIC8vIExvb2sgZm9yIHRoZSBuYW1lIGluIGN1c3RvbSBub2Rlc1xuICAgICAgICAgICAgICAgIENscyA9IEIzQ3VzdG9tQ2xzUmVnaXN0ZXJbc3BlYy5uYW1lXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQjNBY3Rpb25zQ2xzW2Nsc05hbWVdKSB7XG4gICAgICAgICAgICAgICAgQ2xzID0gQjNBY3Rpb25zQ2xzW2Nsc05hbWVdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEIzQ29tcG9zaXRlc0Nsc1tjbHNOYW1lXSkge1xuICAgICAgICAgICAgICAgIENscyA9IEIzQ29tcG9zaXRlc0Nsc1tjbHNOYW1lXVxuICAgICAgICAgICAgfSBlbHNlIGlmIChCM0RlY29yYXRvcnNDbHNbY2xzTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBDbHMgPSBCM0RlY29yYXRvcnNDbHNbY2xzTmFtZV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEludmFsaWQgbm9kZSBuYW1lXG4gICAgICAgICAgICAgICAgLy8gdGhyb3cgbmV3IEV2YWxFcnJvcignQmVoYXZpb3JUcmVlLmxvYWQ6IEludmFsaWQgbm9kZSBuYW1lICsgXCInICtcbiAgICAgICAgICAgICAgICAvLyAgICAgc3BlYy5uYW1lICsgJ1wiLicpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQmVoYXZpb3JUcmVlLmxvYWQ6IEludmFsaWQgbm9kZSBuYW1lICsgXCInICsgc3BlYy5uYW1lICsgJ1wiLicpXG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZSA9IG5ldyBDbHMoc3BlYyk7XG5cbiAgICAgICAgICAgIG5vZGVzW2lkXSA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb25uZWN0IHRoZSBub2Rlc1xuICAgICAgICBmb3IgKGlkIGluIGRhdGEubm9kZXMpIHtcbiAgICAgICAgICAgIHNwZWMgPSBkYXRhLm5vZGVzW2lkXTtcbiAgICAgICAgICAgIG5vZGUgPSBub2Rlc1tpZF07XG5cbiAgICAgICAgICAgIGlmIChub2RlLmNhdGVnb3J5ID09PSBFbnVtQ2F0ZWdvcnkuQ09NUE9TSVRFICYmIHNwZWMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwZWMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNpZCA9IHNwZWMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChub2Rlc1tjaWRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUuY2F0ZWdvcnkgPT09IEVudW1DYXRlZ29yeS5ERUNPUkFUT1IgJiYgc3BlYy5jaGlsZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuY2hpbGQgPSBub2Rlc1tzcGVjLmNoaWxkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgICAgIHRoaXMucm9vdCA9IG5vZGVzW2RhdGEucm9vdF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgZHVtcCB0aGUgY3VycmVudCBCVCBpbnRvIGEgZGF0YSBzdHJ1Y3R1cmUuXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIG1ldGhvZCBkb2VzIG5vdCByZWNvcmQgdGhlIGN1cnJlbnQgbm9kZSBwYXJhbWV0ZXJzLiBUaHVzLFxuICAgICAqIGl0IG1heSBub3QgYmUgY29tcGF0aWJsZSB3aXRoIGxvYWQgZm9yIG5vdy5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZHVtcFxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQSBkYXRhIG9iamVjdCByZXByZXNlbnRpbmcgdGhpcyB0cmVlLlxuICAgICAqKi9cbiAgICBkdW1wKCkge1xuICAgICAgICB2YXIgZGF0YTogYW55ID0ge307XG4gICAgICAgIHZhciBjdXN0b21OYW1lcyA9IFtdO1xuXG4gICAgICAgIGRhdGEudGl0bGUgPSB0aGlzLnRpdGxlO1xuICAgICAgICBkYXRhLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGF0YS5yb290ID0gKHRoaXMucm9vdCkgPyB0aGlzLnJvb3QuaWQgOiBudWxsO1xuICAgICAgICBkYXRhLnByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICAgIGRhdGEubm9kZXMgPSB7fTtcbiAgICAgICAgZGF0YS5jdXN0b21fbm9kZXMgPSBbXTtcblxuICAgICAgICBpZiAoIXRoaXMucm9vdCkgcmV0dXJuIGRhdGE7XG5cbiAgICAgICAgdmFyIHN0YWNrID0gW3RoaXMucm9vdF07XG4gICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgbm9kZTogQjNCYXNlTm9kZSA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgICAgICB2YXIgc3BlYzogYW55ID0ge307XG4gICAgICAgICAgICBzcGVjLmlkID0gbm9kZS5pZDtcbiAgICAgICAgICAgIHNwZWMubmFtZSA9IG5vZGUubmFtZTtcbiAgICAgICAgICAgIHNwZWMudGl0bGUgPSBub2RlLnRpdGxlO1xuICAgICAgICAgICAgc3BlYy5kZXNjcmlwdGlvbiA9IG5vZGUuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBzcGVjLnByb3BlcnRpZXMgPSBub2RlLnByb3BlcnRpZXM7XG4gICAgICAgICAgICBzcGVjLnBhcmFtZXRlcnMgPSBub2RlLnBhcmFtZXRlcnM7XG5cbiAgICAgICAgICAgIC8vIHZlcmlmeSBjdXN0b20gbm9kZVxuICAgICAgICAgICAgdmFyIHByb3RvID0gKG5vZGUuY29uc3RydWN0b3IgJiYgbm9kZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuICAgICAgICAgICAgdmFyIG5vZGVOYW1lID0gKHByb3RvICYmIHByb3RvLm5hbWUpIHx8IG5vZGUubmFtZTtcbiAgICAgICAgICAgIG5vZGUuY2F0ZWdvcnkgIT0gRW51bUNhdGVnb3J5LkFDVElPTlxuICAgICAgICAgICAgaWYgKG5vZGUuY2F0ZWdvcnkgIT0gRW51bUNhdGVnb3J5LkFDVElPTiAmJiBub2RlLmNhdGVnb3J5ICE9IEVudW1DYXRlZ29yeS5DT01QT1NJVEUgJiYgbm9kZS5jYXRlZ29yeSAhPSBFbnVtQ2F0ZWdvcnkuREVDT1JBVE9SICYmIGN1c3RvbU5hbWVzLmluZGV4T2Yobm9kZU5hbWUpIDwgMCkge1xuICAgICAgICAgICAgICAgIHZhciBzdWJkYXRhOiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgICBzdWJkYXRhLm5hbWUgPSBub2RlTmFtZTtcbiAgICAgICAgICAgICAgICBzdWJkYXRhLnRpdGxlID0gKHByb3RvICYmIHByb3RvLnRpdGxlKSB8fCBub2RlLnRpdGxlO1xuICAgICAgICAgICAgICAgIHN1YmRhdGEuY2F0ZWdvcnkgPSBub2RlLmNhdGVnb3J5O1xuXG4gICAgICAgICAgICAgICAgY3VzdG9tTmFtZXMucHVzaChub2RlTmFtZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5jdXN0b21fbm9kZXMucHVzaChzdWJkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3RvcmUgY2hpbGRyZW4vY2hpbGRcbiAgICAgICAgICAgIGlmIChub2RlLmNhdGVnb3J5ID09PSBFbnVtQ2F0ZWdvcnkuQ09NUE9TSVRFKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvc2l0ZSA9IDxCM0NvbXBvc2l0ZT5ub2RlO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb3NpdGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBjb21wb3NpdGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY29tcG9zaXRlLmNoaWxkcmVuW2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY29tcG9zaXRlLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGVjLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLmNhdGVnb3J5ID09PSBFbnVtQ2F0ZWdvcnkuREVDT1JBVE9SICYmICg8QjNEZWNvcmF0b3I+bm9kZSkuY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKCg8QjNEZWNvcmF0b3I+bm9kZSkuY2hpbGQpO1xuICAgICAgICAgICAgICAgIHNwZWMuY2hpbGQgPSAoPEIzRGVjb3JhdG9yPm5vZGUpLmNoaWxkLmlkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRhLm5vZGVzW25vZGUuaWRdID0gc3BlYztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3BhZ2F0ZXMgdGhlIHRpY2sgc2lnbmFsIHRocm91Z2ggdGhlIHRyZWUsIHN0YXJ0aW5nIGZyb20gdGhlIHJvb3QuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCByZWNlaXZlcyBhIHRhcmdldCBvYmplY3Qgb2YgYW55IHR5cGUgKE9iamVjdCwgQXJyYXksXG4gICAgICogRE9NRWxlbWVudCwgd2hhdGV2ZXIpIGFuZCBhIGBCbGFja2JvYXJkYCBpbnN0YW5jZS4gVGhlIHRhcmdldCBvYmplY3QgaGFzXG4gICAgICogbm8gdXNlIGF0IGFsbCBmb3IgYWxsIEJlaGF2aW9yM0pTIGNvbXBvbmVudHMsIGJ1dCBzdXJlbHkgaXMgaW1wb3J0YW50XG4gICAgICogZm9yIGN1c3RvbSBub2Rlcy4gVGhlIGJsYWNrYm9hcmQgaW5zdGFuY2UgaXMgdXNlZCBieSB0aGUgdHJlZSBhbmQgbm9kZXNcbiAgICAgKiB0byBzdG9yZSBleGVjdXRpb24gdmFyaWFibGVzIChlLmcuLCBsYXN0IG5vZGUgcnVubmluZykgYW5kIGlzIG9ibGlnYXRvcnlcbiAgICAgKiB0byBiZSBhIGBCbGFja2JvYXJkYCBpbnN0YW5jZSAob3IgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgaW50ZXJmYWNlKS5cbiAgICAgKlxuICAgICAqIEludGVybmFsbHksIHRoaXMgbWV0aG9kIGNyZWF0ZXMgYSBUaWNrIG9iamVjdCwgd2hpY2ggd2lsbCBzdG9yZSB0aGVcbiAgICAgKiB0YXJnZXQgYW5kIHRoZSBibGFja2JvYXJkIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBOb3RlOiBCZWhhdmlvclRyZWUgc3RvcmVzIGEgbGlzdCBvZiBvcGVuIG5vZGVzIGZyb20gbGFzdCB0aWNrLCBpZiB0aGVzZVxuICAgICAqIG5vZGVzIHdlcmVuJ3QgY2FsbGVkIGFmdGVyIHRoZSBjdXJyZW50IHRpY2ssIHRoaXMgbWV0aG9kIHdpbGwgY2xvc2UgdGhlbVxuICAgICAqIGF1dG9tYXRpY2FsbHkuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHRpY2tcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IEEgdGFyZ2V0IG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge0JsYWNrYm9hcmR9IGJsYWNrYm9hcmQgQW4gaW5zdGFuY2Ugb2YgYmxhY2tib2FyZCBvYmplY3QuXG4gICAgICogQHJldHVybiB7Q29uc3RhbnR9IFRoZSB0aWNrIHNpZ25hbCBzdGF0ZS5cbiAgICAgKiovXG4gICAgdGljayh0YXJnZXQsIGJsYWNrYm9hcmQpIHtcbiAgICAgICAgaWYgKCFibGFja2JvYXJkKSB7XG4gICAgICAgICAgICB0aHJvdyAnVGhlIGJsYWNrYm9hcmQgcGFyYW1ldGVyIGlzIG9ibGlnYXRvcnkgYW5kIG11c3QgYmUgYW4gJyArXG4gICAgICAgICAgICAnaW5zdGFuY2Ugb2YgQjNCbGFja2JvYXJkJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENSRUFURSBBIFRJQ0sgT0JKRUNUICovXG4gICAgICAgIHZhciB0aWNrID0gbmV3IEIzVGljaygpO1xuICAgICAgICB0aWNrLmRlYnVnID0gdGhpcy5kZWJ1ZztcbiAgICAgICAgdGljay50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRpY2suYmxhY2tib2FyZCA9IGJsYWNrYm9hcmQ7XG4gICAgICAgIHRpY2sudHJlZSA9IHRoaXM7XG5cbiAgICAgICAgLyogVElDSyBOT0RFICovXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMucm9vdC5leGVjdXRlKHRpY2spO1xuXG4gICAgICAgIC8qIENMT1NFIE5PREVTIEZST00gTEFTVCBUSUNLLCBJRiBORUVERUQgKi9cbiAgICAgICAgdmFyIGxhc3RPcGVuTm9kZXMgPSBibGFja2JvYXJkLmdldCgnb3Blbk5vZGVzJywgdGhpcy5pZCk7XG4gICAgICAgIHZhciBjdXJyT3Blbk5vZGVzID0gdGljay5vcGVuTm9kZXMuc2xpY2UoMCk7XG5cbiAgICAgICAgLy8gZG9lcyBub3QgY2xvc2UgaWYgaXQgaXMgc3RpbGwgb3BlbiBpbiB0aGlzIHRpY2tcbiAgICAgICAgdmFyIHN0YXJ0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1hdGgubWluKGxhc3RPcGVuTm9kZXMubGVuZ3RoLCBjdXJyT3Blbk5vZGVzLmxlbmd0aCk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGxhc3RPcGVuTm9kZXNbaV0gIT09IGN1cnJPcGVuTm9kZXNbaV0pIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xvc2UgdGhlIG5vZGVzXG4gICAgICAgIGZvciAobGV0IGkgPSBsYXN0T3Blbk5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gc3RhcnQ7IGktLSkge1xuICAgICAgICAgICAgbGV0IG5vZGU6IGFueSA9IHRoaXMubm9kZXNbbGFzdE9wZW5Ob2Rlc1tpXV07XG4gICAgICAgICAgICBub2RlICYmIG5vZGUuX2Nsb3NlKHRpY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogUE9QVUxBVEUgQkxBQ0tCT0FSRCAqL1xuICAgICAgICBibGFja2JvYXJkLnNldCgnb3Blbk5vZGVzJywgY3Vyck9wZW5Ob2RlcywgdGhpcy5pZCk7XG4gICAgICAgIGJsYWNrYm9hcmQuc2V0KCdub2RlQ291bnQnLCB0aWNrLm5vZGVDb3VudCwgdGhpcy5pZCk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn0iXX0=