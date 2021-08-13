"use strict";
cc._RF.push(module, '91c6aLJ91JPHY46B3nzUZlV', 'B3CompositesClsRegister');
// libs/b3/register/B3CompositesClsRegister.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3CompositesCls = void 0;
var B3MemPriority_1 = require("../composites/B3MemPriority");
var B3MemSequence_1 = require("../composites/B3MemSequence");
var B3Sequence_1 = require("../composites/B3Sequence");
var B3Priority_1 = require("../composites/B3Priority");
exports.B3CompositesCls = (_a = {},
    _a["B3MemPriority"] = B3MemPriority_1.B3MemPriority,
    _a["B3MemSequence"] = B3MemSequence_1.B3MemSequence,
    _a["B3Sequence"] = B3Sequence_1.B3Sequence,
    _a["B3Priority"] = B3Priority_1.B3Priority,
    _a);

cc._RF.pop();