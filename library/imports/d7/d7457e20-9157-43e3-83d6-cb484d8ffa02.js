"use strict";
cc._RF.push(module, 'd74574gkVdD44PWy0hNj/oC', 'Constants');
// libs/b3/Constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCategory = exports.EnumStatus = exports.B3_VERSION = void 0;
exports.B3_VERSION = '0.2.2';
var EnumStatus;
(function (EnumStatus) {
    EnumStatus[EnumStatus["SUCCESS"] = 1] = "SUCCESS";
    EnumStatus[EnumStatus["FAILURE"] = 2] = "FAILURE";
    EnumStatus[EnumStatus["RUNNING"] = 3] = "RUNNING";
    EnumStatus[EnumStatus["ERROR"] = 4] = "ERROR";
})(EnumStatus = exports.EnumStatus || (exports.EnumStatus = {}));
var EnumCategory;
(function (EnumCategory) {
    EnumCategory["COMPOSITE"] = "composite";
    EnumCategory["DECORATOR"] = "decorator";
    EnumCategory["ACTION"] = "action";
    EnumCategory["CONDITION"] = "condition";
})(EnumCategory = exports.EnumCategory || (exports.EnumCategory = {}));

cc._RF.pop();