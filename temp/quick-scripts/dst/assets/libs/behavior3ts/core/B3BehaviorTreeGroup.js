
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3BehaviorTreeGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b1b4pdEmdNFJRky3UbovJd', 'B3BehaviorTreeGroup');
// libs/b3/core/B3BehaviorTreeGroup.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3BehaviorTreeGroup = void 0;
var B3BehaviorTree_1 = require("./B3BehaviorTree");
var B3BehaviorTreeGroup = /** @class */ (function () {
    function B3BehaviorTreeGroup() {
    }
    /**
     * 格式化逻辑树项目数据，把依赖树信息安装好
     * @param project 编辑器导出的项目信息
     */
    B3BehaviorTreeGroup.prototype.parse = function (project) {
        this._trees || (this._trees = {});
        var treeHash = {};
        for (var i = 0; i < project.trees.length; i++) {
            treeHash[project.trees[i].id] = project.trees[i];
        }
        for (var id in treeHash) {
            var tree = treeHash[id];
            this._paserTree(tree, treeHash);
            this._trees[tree.title] = tree;
        }
    };
    /**
     * 根据树的title生成对应的树
     * @param treeTitle
     * @param names
     */
    B3BehaviorTreeGroup.prototype.build = function (treeTitle, names) {
        var tree = this._trees[treeTitle];
        if (!tree)
            return null;
        var bTree = new B3BehaviorTree_1.B3BehaviorTree();
        bTree.load(tree, names);
        return bTree;
    };
    B3BehaviorTreeGroup.prototype._paserTree = function (tree, treeHash) {
        if (tree.pasered) {
            var nodes_1 = [];
            for (var nodeId in tree.nodes) {
                var node = tree.nodes[nodeId];
                nodes_1.push(node);
            }
            return nodes_1;
        }
        var nodes = [];
        for (var nodeId in tree.nodes) {
            var node = tree.nodes[nodeId];
            if (treeHash[node.name]) {
                var childTree = treeHash[node.name];
                var addNodes = this._paserTree(childTree, treeHash);
                nodes = nodes.concat(addNodes);
                node.name = "Sequence";
                node.children = [childTree.root];
            }
            else {
                nodes.push(node);
            }
        }
        for (var i = 0; i < nodes.length; i++) {
            tree.nodes[nodes[i].id] = nodes[i];
        }
        tree.pasered = true;
        return nodes;
    };
    return B3BehaviorTreeGroup;
}());
exports.B3BehaviorTreeGroup = B3BehaviorTreeGroup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvcmUvQjNCZWhhdmlvclRyZWVHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFFbEQ7SUFBQTtJQWdFQSxDQUFDO0lBOURHOzs7T0FHRztJQUNILG1DQUFLLEdBQUwsVUFBTSxPQUFxQjtRQUN2QixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNsQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxLQUFLLElBQUksRUFBRSxJQUFJLFFBQVEsRUFBRTtZQUNyQixJQUFJLElBQUksR0FBVSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQ0FBSyxHQUFMLFVBQU0sU0FBaUIsRUFBRSxLQUFXO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUN2QixJQUFJLEtBQUssR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztRQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8sd0NBQVUsR0FBbEIsVUFBbUIsSUFBVyxFQUFFLFFBQWE7UUFDekMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxPQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2YsS0FBSyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUMzQixJQUFJLElBQUksR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQyxPQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BCO1lBQ0QsT0FBTyxPQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLEtBQUssR0FBWSxFQUFFLENBQUM7UUFDeEIsS0FBSyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzNCLElBQUksSUFBSSxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyQixJQUFJLFNBQVMsR0FBVSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMxQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDcEQsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDcEI7U0FDSjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBR3BCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCwwQkFBQztBQUFELENBaEVBLEFBZ0VDLElBQUE7QUFoRVksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQjNCZWhhdmlvclRyZWUgfSBmcm9tIFwiLi9CM0JlaGF2aW9yVHJlZVwiO1xuXG5leHBvcnQgY2xhc3MgQjNCZWhhdmlvclRyZWVHcm91cCB7XG4gICAgcHJpdmF0ZSBfdHJlZXM6IHsgW3RpdGxlOiBzdHJpbmddOiBJVHJlZSB9O1xuICAgIC8qKlxuICAgICAqIOagvOW8j+WMlumAu+i+keagkemhueebruaVsOaNru+8jOaKiuS+nei1luagkeS/oeaBr+WuieijheWlvVxuICAgICAqIEBwYXJhbSBwcm9qZWN0IOe8lui+keWZqOWvvOWHuueahOmhueebruS/oeaBr1xuICAgICAqL1xuICAgIHBhcnNlKHByb2plY3Q6IElUcmVlUHJvamVjdCkge1xuICAgICAgICB0aGlzLl90cmVlcyB8fCAodGhpcy5fdHJlZXMgPSB7fSk7XG4gICAgICAgIGxldCB0cmVlSGFzaCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudHJlZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRyZWVIYXNoW3Byb2plY3QudHJlZXNbaV0uaWRdID0gcHJvamVjdC50cmVlc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGlkIGluIHRyZWVIYXNoKSB7XG4gICAgICAgICAgICBsZXQgdHJlZTogSVRyZWUgPSB0cmVlSGFzaFtpZF07XG4gICAgICAgICAgICB0aGlzLl9wYXNlclRyZWUodHJlZSwgdHJlZUhhc2gpO1xuICAgICAgICAgICAgdGhpcy5fdHJlZXNbdHJlZS50aXRsZV0gPSB0cmVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC55o2u5qCR55qEdGl0bGXnlJ/miJDlr7nlupTnmoTmoJFcbiAgICAgKiBAcGFyYW0gdHJlZVRpdGxlIFxuICAgICAqIEBwYXJhbSBuYW1lcyBcbiAgICAgKi9cbiAgICBidWlsZCh0cmVlVGl0bGU6IHN0cmluZywgbmFtZXM/OiBhbnkpOiBCM0JlaGF2aW9yVHJlZSB7XG4gICAgICAgIGxldCB0cmVlID0gdGhpcy5fdHJlZXNbdHJlZVRpdGxlXTtcbiAgICAgICAgaWYgKCF0cmVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgbGV0IGJUcmVlID0gbmV3IEIzQmVoYXZpb3JUcmVlKCk7XG4gICAgICAgIGJUcmVlLmxvYWQodHJlZSwgbmFtZXMpO1xuICAgICAgICByZXR1cm4gYlRyZWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFzZXJUcmVlKHRyZWU6IElUcmVlLCB0cmVlSGFzaDogYW55KTogSU5vZGVbXSB7XG4gICAgICAgIGlmICh0cmVlLnBhc2VyZWQpIHtcbiAgICAgICAgICAgIGxldCBub2RlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgbm9kZUlkIGluIHRyZWUubm9kZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZTogSU5vZGUgPSB0cmVlLm5vZGVzW25vZGVJZF07XG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9kZXM6IElOb2RlW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbm9kZUlkIGluIHRyZWUubm9kZXMpIHtcbiAgICAgICAgICAgIGxldCBub2RlOiBJTm9kZSA9IHRyZWUubm9kZXNbbm9kZUlkXTtcbiAgICAgICAgICAgIGlmICh0cmVlSGFzaFtub2RlLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkVHJlZTogSVRyZWUgPSB0cmVlSGFzaFtub2RlLm5hbWVdXG4gICAgICAgICAgICAgICAgbGV0IGFkZE5vZGVzID0gdGhpcy5fcGFzZXJUcmVlKGNoaWxkVHJlZSwgdHJlZUhhc2gpO1xuICAgICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGFkZE5vZGVzKTtcbiAgICAgICAgICAgICAgICBub2RlLm5hbWUgPSBcIlNlcXVlbmNlXCI7XG4gICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IFtjaGlsZFRyZWUucm9vdF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cmVlLm5vZGVzW25vZGVzW2ldLmlkXSA9IG5vZGVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRyZWUucGFzZXJlZCA9IHRydWU7XG5cblxuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgSUJhc2Uge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHByb3BlcnRpZXM6IGFueTtcbn1cblxuaW50ZXJmYWNlIElUcmVlIGV4dGVuZHMgSUJhc2Uge1xuICAgIHJvb3Q6IHN0cmluZyxcbiAgICBub2RlczogeyBbaWQ6IHN0cmluZ106IElOb2RlIH0sXG4gICAgcGFzZXJlZD86IGJvb2xlYW4gICAgICAgICAgICAgICAgLy/lkI7mnJ/mt7vliqDnmoRcbn1cblxuXG5pbnRlcmZhY2UgSU5vZGUgZXh0ZW5kcyBJQmFzZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNoaWxkcmVuOiBzdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIElUcmVlUHJvamVjdCB7XG4gICAgdHJlZXM6IElUcmVlW107XG59Il19