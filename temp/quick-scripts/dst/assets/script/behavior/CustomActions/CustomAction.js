
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/behavior/CustomActions/CustomAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9dab852nxdEPoBfr74M/Cr/', 'CustomAction');
// script/behavior/CustomActions/CustomAction.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("../../../libs/behavior3ts/Constants");
var B3Action_1 = require("../../../libs/behavior3ts/core/B3Action");
var Log = /** @class */ (function (_super) {
    __extends(Log, _super);
    function Log() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Log.prototype.tick = function (tick) {
        console.log("test log");
        return Constants_1.EnumStatus.SUCCESS;
    };
    return Log;
}(B3Action_1.B3Action));
exports.default = Log;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYmVoYXZpb3IvQ3VzdG9tQWN0aW9ucy9DdXN0b21BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWlFO0FBQ2pFLG9FQUFtRTtBQUduRTtJQUFpQyx1QkFBUTtJQUF6Qzs7SUFNQSxDQUFDO0lBTEcsa0JBQUksR0FBSixVQUFLLElBQWlCO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdkIsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQTtJQUM3QixDQUFDO0lBRUwsVUFBQztBQUFELENBTkEsQUFNQyxDQU5nQyxtQkFBUSxHQU14QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vLi4vLi4vbGlicy9iZWhhdmlvcjN0cy9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvYmVoYXZpb3IzdHMvY29yZS9CM0FjdGlvblwiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvYmVoYXZpb3IzdHMvY29yZS9CM1RpY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nIGV4dGVuZHMgQjNBY3Rpb24ge1xuICAgIHRpY2sodGljazogQjNUaWNrPGFueT4pOiBFbnVtU3RhdHVzIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0IGxvZ1wiKVxuICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5TVUNDRVNTXG4gICAgfVxuXG59Il19