"use strict";
cc._RF.push(module, 'e7c27Y+PFtLkY2IBdTwpllg', 'B3Blackboard');
// libs/b3/core/B3Blackboard.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3Blackboard = void 0;
var B3Blackboard = /** @class */ (function () {
    function B3Blackboard() {
        this._baseMemory = {};
        this._treeMemory = {};
    }
    /**
     * Internal method to retrieve the tree context memory. If the memory does
     * not exist, this method creates it.
     *
     * @method _getTreeMemory
     * @param {String} treeScope The id of the tree in scope.
     * @return {Object} The tree memory.
     * @protected
     **/
    B3Blackboard.prototype._getTreeMemory = function (treeScope) {
        if (!this._treeMemory[treeScope]) {
            this._treeMemory[treeScope] = {
                'nodeMemory': {},
                'openNodes': [],
                'traversalDepth': 0,
                'traversalCycle': 0,
            };
        }
        return this._treeMemory[treeScope];
    };
    /**
     * Internal method to retrieve the node context memory, given the tree
     * memory. If the memory does not exist, this method creates is.
     *
     * @method _getNodeMemory
     * @param {String} treeMemory the tree memory.
     * @param {String} nodeScope The id of the node in scope.
     * @return {Object} The node memory.
     * @protected
     **/
    B3Blackboard.prototype._getNodeMemory = function (treeMemory, nodeScope) {
        var memory = treeMemory.nodeMemory;
        if (!memory[nodeScope]) {
            memory[nodeScope] = {};
        }
        return memory[nodeScope];
    };
    /**
     * Internal method to retrieve the context memory. If treeScope and
     * nodeScope are provided, this method returns the per node per tree
     * memory. If only the treeScope is provided, it returns the per tree
     * memory. If no parameter is provided, it returns the global memory.
     * Notice that, if only nodeScope is provided, this method will still
     * return the global memory.
     *
     * @method _getMemory
     * @param {String} treeScope The id of the tree scope.
     * @param {String} nodeScope The id of the node scope.
     * @return {Object} A memory object.
     * @protected
     **/
    B3Blackboard.prototype._getMemory = function (treeScope, nodeScope) {
        var memory = this._baseMemory;
        if (treeScope) {
            memory = this._getTreeMemory(treeScope);
            if (nodeScope) {
                memory = this._getNodeMemory(memory, nodeScope);
            }
        }
        return memory;
    };
    /**
     * Stores a value in the blackboard. If treeScope and nodeScope are
     * provided, this method will save the value into the per node per tree
     * memory. If only the treeScope is provided, it will save the value into
     * the per tree memory. If no parameter is provided, this method will save
     * the value into the global memory. Notice that, if only nodeScope is
     * provided (but treeScope not), this method will still save the value into
     * the global memory.
     *
     * @method set
     * @param {String} key The key to be stored.
     * @param {String} value The value to be stored.
     * @param {String} treeScope The tree id if accessing the tree or node
     *                           memory.
     * @param {String} nodeScope The node id if accessing the node memory.
     **/
    B3Blackboard.prototype.set = function (key, value, treeScope, nodeScope) {
        var memory = this._getMemory(treeScope, nodeScope);
        memory[key] = value;
    };
    /**
     * Retrieves a value in the blackboard. If treeScope and nodeScope are
     * provided, this method will retrieve the value from the per node per tree
     * memory. If only the treeScope is provided, it will retrieve the value
     * from the per tree memory. If no parameter is provided, this method will
     * retrieve from the global memory. If only nodeScope is provided (but
     * treeScope not), this method will still try to retrieve from the global
     * memory.
     *
     * @method get
     * @param {String} key The key to be retrieved.
     * @param {String} treeScope The tree id if accessing the tree or node
     *                           memory.
     * @param {String} nodeScope The node id if accessing the node memory.
     * @return {Object} The value stored or undefined.
     **/
    B3Blackboard.prototype.get = function (key, treeScope, nodeScope) {
        var memory = this._getMemory(treeScope, nodeScope);
        return memory[key];
    };
    B3Blackboard.prototype.getCache = function () {
        return { base: this._baseMemory, tree: this._treeMemory };
    };
    B3Blackboard.prototype.setCache = function (base, tree) {
        this._baseMemory = base;
        this._treeMemory = tree;
    };
    return B3Blackboard;
}());
exports.B3Blackboard = B3Blackboard;

cc._RF.pop();