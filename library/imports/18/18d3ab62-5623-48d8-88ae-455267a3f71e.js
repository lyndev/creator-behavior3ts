"use strict";
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