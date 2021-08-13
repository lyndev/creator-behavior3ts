"use strict";
cc._RF.push(module, 'dc7a7KjzN5DZpgEOp9+zWQs', 'B3CustomClsRegister');
// libs/behavior3ts/register/B3CustomClsRegister.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3CustomClsRegister = void 0;
var Log_1 = require("../../../script/behavior/CustomActions/Log");
var CustomAction_1 = require("../../../script/behavior/CustomActions/CustomAction");
var TargetCondition_1 = require("../../../script/behavior/CustomCondtion/TargetCondition");
var DisCondition_1 = require("../../../script/behavior/CustomCondtion/DisCondition");
exports.B3CustomClsRegister = (_a = {},
    _a["CustomAction"] = CustomAction_1.default,
    _a["Log"] = Log_1.default,
    _a["TargetCondition"] = TargetCondition_1.default,
    _a["DisCondition"] = DisCondition_1.default,
    _a);

cc._RF.pop();