import { EnumStatus } from '../../../libs/behavior3ts/Constants';
import { B3Condition } from '../../../libs/behavior3ts/core/B3Condition';
import { B3Tick } from '../../../libs/behavior3ts/core/B3Tick';
export default class TargetCondition extends B3Condition {
    target
    tick(tick: B3Tick<any>): EnumStatus {
        if (this.target == tick.blackboard.get("target")) {
            return EnumStatus.SUCCESS
        }
        EnumStatus.FAILURE
    }
}