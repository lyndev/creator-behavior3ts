
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/Constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL0NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYSxRQUFBLFVBQVUsR0FBRyxPQUFPLENBQUM7QUFFbEMsSUFBWSxVQUtYO0FBTEQsV0FBWSxVQUFVO0lBQ2xCLGlEQUFXLENBQUE7SUFDWCxpREFBTyxDQUFBO0lBQ1AsaURBQU8sQ0FBQTtJQUNQLDZDQUFLLENBQUE7QUFDVCxDQUFDLEVBTFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFLckI7QUFFRCxJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDcEIsdUNBQXVCLENBQUE7SUFDdkIsdUNBQXVCLENBQUE7SUFDdkIsaUNBQWlCLENBQUE7SUFDakIsdUNBQXVCLENBQUE7QUFDM0IsQ0FBQyxFQUxXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBS3ZCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEIzX1ZFUlNJT04gPSAnMC4yLjInO1xuXG5leHBvcnQgZW51bSBFbnVtU3RhdHVzIHtcbiAgICBTVUNDRVNTID0gMSxcbiAgICBGQUlMVVJFLFxuICAgIFJVTk5JTkcsXG4gICAgRVJST1Jcbn1cblxuZXhwb3J0IGVudW0gRW51bUNhdGVnb3J5IHtcbiAgICBDT01QT1NJVEUgPSBcImNvbXBvc2l0ZVwiLFxuICAgIERFQ09SQVRPUiA9ICdkZWNvcmF0b3InLFxuICAgIEFDVElPTiA9ICdhY3Rpb24nLFxuICAgIENPTkRJVElPTiA9ICdjb25kaXRpb24nXG59Il19