
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3Blackboard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvcmUvQjNCbGFja2JvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFJO0lBR0k7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7Ozs7O1FBUUk7SUFDSSxxQ0FBYyxHQUF0QixVQUF1QixTQUFTO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUc7Z0JBQzFCLFlBQVksRUFBRSxFQUFFO2dCQUNoQixXQUFXLEVBQUUsRUFBRTtnQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2dCQUNuQixnQkFBZ0IsRUFBRSxDQUFDO2FBQ3RCLENBQUM7U0FDTDtRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7Ozs7OztRQVNJO0lBQ0kscUNBQWMsR0FBdEIsVUFBdUIsVUFBVSxFQUFFLFNBQVM7UUFDeEMsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDMUI7UUFFRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7UUFhSTtJQUNJLGlDQUFVLEdBQWxCLFVBQW1CLFNBQVMsRUFBRSxTQUFTO1FBQ25DLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFOUIsSUFBSSxTQUFTLEVBQUU7WUFDWCxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV4QyxJQUFJLFNBQVMsRUFBRTtnQkFDWCxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDbkQ7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7O1FBZUk7SUFDSiwwQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLEtBQVUsRUFBRSxTQUFrQixFQUFFLFNBQWtCO1FBQy9ELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7UUFlSTtJQUNKLDBCQUFHLEdBQUgsVUFBSSxHQUFHLEVBQUUsU0FBVSxFQUFFLFNBQVU7UUFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQVMsRUFBRSxJQUFTO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDTCxtQkFBQztBQUFELENBOUhBLEFBOEhDLElBQUE7QUE5SFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgICAgZXhwb3J0IGNsYXNzIEIzQmxhY2tib2FyZCB7XG4gICAgICAgIHByaXZhdGUgX2Jhc2VNZW1vcnk6IGFueTtcbiAgICAgICAgcHJpdmF0ZSBfdHJlZU1lbW9yeTogYW55O1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VNZW1vcnkgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuX3RyZWVNZW1vcnkgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBtZXRob2QgdG8gcmV0cmlldmUgdGhlIHRyZWUgY29udGV4dCBtZW1vcnkuIElmIHRoZSBtZW1vcnkgZG9lc1xuICAgICAgICAgKiBub3QgZXhpc3QsIHRoaXMgbWV0aG9kIGNyZWF0ZXMgaXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgX2dldFRyZWVNZW1vcnlcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRyZWVTY29wZSBUaGUgaWQgb2YgdGhlIHRyZWUgaW4gc2NvcGUuXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIHRyZWUgbWVtb3J5LlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqKi9cbiAgICAgICAgcHJpdmF0ZSBfZ2V0VHJlZU1lbW9yeSh0cmVlU2NvcGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fdHJlZU1lbW9yeVt0cmVlU2NvcGVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJlZU1lbW9yeVt0cmVlU2NvcGVdID0ge1xuICAgICAgICAgICAgICAgICAgICAnbm9kZU1lbW9yeSc6IHt9LFxuICAgICAgICAgICAgICAgICAgICAnb3Blbk5vZGVzJzogW10sXG4gICAgICAgICAgICAgICAgICAgICd0cmF2ZXJzYWxEZXB0aCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICd0cmF2ZXJzYWxDeWNsZSc6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cmVlTWVtb3J5W3RyZWVTY29wZV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgbWV0aG9kIHRvIHJldHJpZXZlIHRoZSBub2RlIGNvbnRleHQgbWVtb3J5LCBnaXZlbiB0aGUgdHJlZVxuICAgICAgICAgKiBtZW1vcnkuIElmIHRoZSBtZW1vcnkgZG9lcyBub3QgZXhpc3QsIHRoaXMgbWV0aG9kIGNyZWF0ZXMgaXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgX2dldE5vZGVNZW1vcnlcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRyZWVNZW1vcnkgdGhlIHRyZWUgbWVtb3J5LlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gbm9kZVNjb3BlIFRoZSBpZCBvZiB0aGUgbm9kZSBpbiBzY29wZS5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbm9kZSBtZW1vcnkuXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICoqL1xuICAgICAgICBwcml2YXRlIF9nZXROb2RlTWVtb3J5KHRyZWVNZW1vcnksIG5vZGVTY29wZSkge1xuICAgICAgICAgICAgdmFyIG1lbW9yeSA9IHRyZWVNZW1vcnkubm9kZU1lbW9yeTtcbiAgICAgICAgICAgIGlmICghbWVtb3J5W25vZGVTY29wZV0pIHtcbiAgICAgICAgICAgICAgICBtZW1vcnlbbm9kZVNjb3BlXSA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWVtb3J5W25vZGVTY29wZV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgbWV0aG9kIHRvIHJldHJpZXZlIHRoZSBjb250ZXh0IG1lbW9yeS4gSWYgdHJlZVNjb3BlIGFuZFxuICAgICAgICAgKiBub2RlU2NvcGUgYXJlIHByb3ZpZGVkLCB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZSBwZXIgbm9kZSBwZXIgdHJlZVxuICAgICAgICAgKiBtZW1vcnkuIElmIG9ubHkgdGhlIHRyZWVTY29wZSBpcyBwcm92aWRlZCwgaXQgcmV0dXJucyB0aGUgcGVyIHRyZWVcbiAgICAgICAgICogbWVtb3J5LiBJZiBubyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIGl0IHJldHVybnMgdGhlIGdsb2JhbCBtZW1vcnkuXG4gICAgICAgICAqIE5vdGljZSB0aGF0LCBpZiBvbmx5IG5vZGVTY29wZSBpcyBwcm92aWRlZCwgdGhpcyBtZXRob2Qgd2lsbCBzdGlsbFxuICAgICAgICAgKiByZXR1cm4gdGhlIGdsb2JhbCBtZW1vcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgX2dldE1lbW9yeVxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHJlZVNjb3BlIFRoZSBpZCBvZiB0aGUgdHJlZSBzY29wZS5cbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG5vZGVTY29wZSBUaGUgaWQgb2YgdGhlIG5vZGUgc2NvcGUuXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gQSBtZW1vcnkgb2JqZWN0LlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqKi9cbiAgICAgICAgcHJpdmF0ZSBfZ2V0TWVtb3J5KHRyZWVTY29wZSwgbm9kZVNjb3BlKSB7XG4gICAgICAgICAgICB2YXIgbWVtb3J5ID0gdGhpcy5fYmFzZU1lbW9yeTtcblxuICAgICAgICAgICAgaWYgKHRyZWVTY29wZSkge1xuICAgICAgICAgICAgICAgIG1lbW9yeSA9IHRoaXMuX2dldFRyZWVNZW1vcnkodHJlZVNjb3BlKTtcblxuICAgICAgICAgICAgICAgIGlmIChub2RlU2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVtb3J5ID0gdGhpcy5fZ2V0Tm9kZU1lbW9yeShtZW1vcnksIG5vZGVTY29wZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWVtb3J5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3JlcyBhIHZhbHVlIGluIHRoZSBibGFja2JvYXJkLiBJZiB0cmVlU2NvcGUgYW5kIG5vZGVTY29wZSBhcmVcbiAgICAgICAgICogcHJvdmlkZWQsIHRoaXMgbWV0aG9kIHdpbGwgc2F2ZSB0aGUgdmFsdWUgaW50byB0aGUgcGVyIG5vZGUgcGVyIHRyZWVcbiAgICAgICAgICogbWVtb3J5LiBJZiBvbmx5IHRoZSB0cmVlU2NvcGUgaXMgcHJvdmlkZWQsIGl0IHdpbGwgc2F2ZSB0aGUgdmFsdWUgaW50b1xuICAgICAgICAgKiB0aGUgcGVyIHRyZWUgbWVtb3J5LiBJZiBubyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIHRoaXMgbWV0aG9kIHdpbGwgc2F2ZVxuICAgICAgICAgKiB0aGUgdmFsdWUgaW50byB0aGUgZ2xvYmFsIG1lbW9yeS4gTm90aWNlIHRoYXQsIGlmIG9ubHkgbm9kZVNjb3BlIGlzXG4gICAgICAgICAqIHByb3ZpZGVkIChidXQgdHJlZVNjb3BlIG5vdCksIHRoaXMgbWV0aG9kIHdpbGwgc3RpbGwgc2F2ZSB0aGUgdmFsdWUgaW50b1xuICAgICAgICAgKiB0aGUgZ2xvYmFsIG1lbW9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBzZXRcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IHRvIGJlIHN0b3JlZC5cbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBzdG9yZWQuXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0cmVlU2NvcGUgVGhlIHRyZWUgaWQgaWYgYWNjZXNzaW5nIHRoZSB0cmVlIG9yIG5vZGVcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vcnkuXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlU2NvcGUgVGhlIG5vZGUgaWQgaWYgYWNjZXNzaW5nIHRoZSBub2RlIG1lbW9yeS5cbiAgICAgICAgICoqL1xuICAgICAgICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHRyZWVTY29wZT86IHN0cmluZywgbm9kZVNjb3BlPzogc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgbWVtb3J5ID0gdGhpcy5fZ2V0TWVtb3J5KHRyZWVTY29wZSwgbm9kZVNjb3BlKTtcbiAgICAgICAgICAgIG1lbW9yeVtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0cmlldmVzIGEgdmFsdWUgaW4gdGhlIGJsYWNrYm9hcmQuIElmIHRyZWVTY29wZSBhbmQgbm9kZVNjb3BlIGFyZVxuICAgICAgICAgKiBwcm92aWRlZCwgdGhpcyBtZXRob2Qgd2lsbCByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSB0aGUgcGVyIG5vZGUgcGVyIHRyZWVcbiAgICAgICAgICogbWVtb3J5LiBJZiBvbmx5IHRoZSB0cmVlU2NvcGUgaXMgcHJvdmlkZWQsIGl0IHdpbGwgcmV0cmlldmUgdGhlIHZhbHVlXG4gICAgICAgICAqIGZyb20gdGhlIHBlciB0cmVlIG1lbW9yeS4gSWYgbm8gcGFyYW1ldGVyIGlzIHByb3ZpZGVkLCB0aGlzIG1ldGhvZCB3aWxsXG4gICAgICAgICAqIHJldHJpZXZlIGZyb20gdGhlIGdsb2JhbCBtZW1vcnkuIElmIG9ubHkgbm9kZVNjb3BlIGlzIHByb3ZpZGVkIChidXRcbiAgICAgICAgICogdHJlZVNjb3BlIG5vdCksIHRoaXMgbWV0aG9kIHdpbGwgc3RpbGwgdHJ5IHRvIHJldHJpZXZlIGZyb20gdGhlIGdsb2JhbFxuICAgICAgICAgKiBtZW1vcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgZ2V0XG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0byBiZSByZXRyaWV2ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0cmVlU2NvcGUgVGhlIHRyZWUgaWQgaWYgYWNjZXNzaW5nIHRoZSB0cmVlIG9yIG5vZGVcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vcnkuXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlU2NvcGUgVGhlIG5vZGUgaWQgaWYgYWNjZXNzaW5nIHRoZSBub2RlIG1lbW9yeS5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgdmFsdWUgc3RvcmVkIG9yIHVuZGVmaW5lZC5cbiAgICAgICAgICoqL1xuICAgICAgICBnZXQoa2V5LCB0cmVlU2NvcGU/LCBub2RlU2NvcGU/KSB7XG4gICAgICAgICAgICB2YXIgbWVtb3J5ID0gdGhpcy5fZ2V0TWVtb3J5KHRyZWVTY29wZSwgbm9kZVNjb3BlKTtcbiAgICAgICAgICAgIHJldHVybiBtZW1vcnlba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldENhY2hlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgYmFzZTogdGhpcy5fYmFzZU1lbW9yeSwgdHJlZTogdGhpcy5fdHJlZU1lbW9yeSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0Q2FjaGUoYmFzZTogYW55LCB0cmVlOiBhbnkpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VNZW1vcnkgPSBiYXNlO1xuICAgICAgICAgICAgdGhpcy5fdHJlZU1lbW9yeSA9IHRyZWU7XG4gICAgICAgIH1cbiAgICB9Il19