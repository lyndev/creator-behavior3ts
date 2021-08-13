import { B3BehaviorTree } from '../../../libs/behavior3ts/core/B3BehaviorTree';
import { B3Blackboard } from '../../../libs/behavior3ts/core/B3Blackboard';
import { createUUID } from '../../../libs/behavior3ts/utils/B3Utils';
const { ccclass, property } = cc._decorator;
@ccclass
export default class TestAI extends cc.Component {
    testTree: B3BehaviorTree
    blackboardData: B3Blackboard

    @property(cc.Node)
    attckTarget: cc.Node = null
    start() {
        cc.tween(this.attckTarget).repeatForever(
            cc.tween(this.attckTarget).to(1, { x: 100 }).to(1, { x: 0 })
        ).start()

        this.blackboardData = new B3Blackboard()
        cc.loader.loadRes("behavior3/testai3", cc.JsonAsset, (err, json: cc.JsonAsset) => {
            if (json) {
                this.testTree = new B3BehaviorTree(createUUID())
                let data = json.json
                this.testTree.load(data, data.custom_nodes)
            }
        })
    }

    update(dt) {
        if (this.attckTarget) {
            this.blackboardData.set("targetpos", this.attckTarget.position)
        }
        this.blackboardData.set("mypos", this.node.position)
        if (this.testTree) {
            this.testTree.tick({}, this.blackboardData)
        }
    }
}
