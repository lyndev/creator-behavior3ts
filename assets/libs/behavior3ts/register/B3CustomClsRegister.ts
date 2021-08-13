import Log from "../../../script/behavior/CustomActions/Log";
import CustomAction from "../../../script/behavior/CustomActions/CustomAction";
import TargetCondition from '../../../script/behavior/CustomCondtion/TargetCondition';
import DisCondition from "../../../script/behavior/CustomCondtion/DisCondition";

export let B3CustomClsRegister = {
    ["CustomAction"]: CustomAction,
    ["Log"]: Log,
    ["TargetCondition"]:TargetCondition,
    ["DisCondition"]:DisCondition,
}