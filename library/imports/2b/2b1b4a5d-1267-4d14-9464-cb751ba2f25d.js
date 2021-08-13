"use strict";
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