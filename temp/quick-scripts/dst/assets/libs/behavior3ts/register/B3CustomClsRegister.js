
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/register/B3CustomClsRegister.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2JlaGF2aW9yM3RzL3JlZ2lzdGVyL0IzQ3VzdG9tQ2xzUmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCxvRkFBK0U7QUFDL0UsMkZBQXNGO0FBQ3RGLHFGQUFnRjtBQUVyRSxRQUFBLG1CQUFtQjtJQUMxQixHQUFDLGNBQWMsSUFBRyxzQkFBWTtJQUM5QixHQUFDLEtBQUssSUFBRyxhQUFHO0lBQ1osR0FBQyxpQkFBaUIsSUFBRSx5QkFBZTtJQUNuQyxHQUFDLGNBQWMsSUFBRSxzQkFBWTtRQUNoQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2cgZnJvbSBcIi4uLy4uLy4uL3NjcmlwdC9iZWhhdmlvci9DdXN0b21BY3Rpb25zL0xvZ1wiO1xuaW1wb3J0IEN1c3RvbUFjdGlvbiBmcm9tIFwiLi4vLi4vLi4vc2NyaXB0L2JlaGF2aW9yL0N1c3RvbUFjdGlvbnMvQ3VzdG9tQWN0aW9uXCI7XG5pbXBvcnQgVGFyZ2V0Q29uZGl0aW9uIGZyb20gJy4uLy4uLy4uL3NjcmlwdC9iZWhhdmlvci9DdXN0b21Db25kdGlvbi9UYXJnZXRDb25kaXRpb24nO1xuaW1wb3J0IERpc0NvbmRpdGlvbiBmcm9tIFwiLi4vLi4vLi4vc2NyaXB0L2JlaGF2aW9yL0N1c3RvbUNvbmR0aW9uL0Rpc0NvbmRpdGlvblwiO1xuXG5leHBvcnQgbGV0IEIzQ3VzdG9tQ2xzUmVnaXN0ZXIgPSB7XG4gICAgW1wiQ3VzdG9tQWN0aW9uXCJdOiBDdXN0b21BY3Rpb24sXG4gICAgW1wiTG9nXCJdOiBMb2csXG4gICAgW1wiVGFyZ2V0Q29uZGl0aW9uXCJdOlRhcmdldENvbmRpdGlvbixcbiAgICBbXCJEaXNDb25kaXRpb25cIl06RGlzQ29uZGl0aW9uLFxufSJdfQ==