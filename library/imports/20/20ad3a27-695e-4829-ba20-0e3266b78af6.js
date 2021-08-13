"use strict";
cc._RF.push(module, '20ad3onaV5IKbogDjJmt4r2', 'B3DecoratorsClsRegister');
// libs/b3/register/B3DecoratorsClsRegister.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3DecoratorsCls = void 0;
var B3Inverter_1 = require("../decorators/B3Inverter");
var B3Limiter_1 = require("../decorators/B3Limiter");
var B3MaxTime_1 = require("../decorators/B3MaxTime");
var B3Repeater_1 = require("../decorators/B3Repeater");
var B3RepeatUntilFailure_1 = require("../decorators/B3RepeatUntilFailure");
var B3RepeatUntilSuccess_1 = require("../decorators/B3RepeatUntilSuccess");
exports.B3DecoratorsCls = (_a = {},
    _a["B3Inverter"] = B3Inverter_1.B3Inverter,
    _a["B3Limiter"] = B3Limiter_1.B3Limiter,
    _a["B3MaxTime"] = B3MaxTime_1.B3MaxTime,
    _a["B3Repeater"] = B3Repeater_1.B3Repeater,
    _a["B3RepeatUntilFailure"] = B3RepeatUntilFailure_1.B3RepeatUntilFailure,
    _a["B3RepeatUntilSuccess"] = B3RepeatUntilSuccess_1.B3RepeatUntilSuccess,
    _a);

cc._RF.pop();