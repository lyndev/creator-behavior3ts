import { EnumStatus } from "../../../libs/behavior3ts/Constants";
import { B3Action } from "../../../libs/behavior3ts/core/B3Action";
import { B3Tick } from "../../../libs/behavior3ts/core/B3Tick";

export default class Log extends B3Action {
    tick(tick: B3Tick<any>): EnumStatus {
        console.log("test log")
        return EnumStatus.SUCCESS
    }

}