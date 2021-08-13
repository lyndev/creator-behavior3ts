
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/behavior/CustomActions/Log.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '226cddHfSNFBILZZAOlNO2U', 'Log');
// script/behavior/CustomActions/Log.ts

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
        console.log("test log:", this.properties["info"]);
        return Constants_1.EnumStatus.SUCCESS;
    };
    Log.prototype._parseProp = function (prop) {
        _super.prototype._parseProp.call(this, prop);
        this.properties = prop;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYmVoYXZpb3IvQ3VzdG9tQWN0aW9ucy9Mb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWlFO0FBQ2pFLG9FQUFtRTtBQUduRTtJQUFpQyx1QkFBUTtJQUF6Qzs7SUFXQSxDQUFDO0lBVEcsa0JBQUksR0FBSixVQUFLLElBQWlCO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUNqRCxPQUFPLHNCQUFVLENBQUMsT0FBTyxDQUFBO0lBQzdCLENBQUM7SUFFUyx3QkFBVSxHQUFwQixVQUFxQixJQUFTO1FBQzFCLGlCQUFNLFVBQVUsWUFBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQTtJQUMxQixDQUFDO0lBQ0wsVUFBQztBQUFELENBWEEsQUFXQyxDQVhnQyxtQkFBUSxHQVd4QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vLi4vLi4vbGlicy9iZWhhdmlvcjN0cy9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvYmVoYXZpb3IzdHMvY29yZS9CM0FjdGlvblwiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvYmVoYXZpb3IzdHMvY29yZS9CM1RpY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nIGV4dGVuZHMgQjNBY3Rpb24ge1xuICAgIHByb3BlcnRpZXNcbiAgICB0aWNrKHRpY2s6IEIzVGljazxhbnk+KTogRW51bVN0YXR1cyB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdCBsb2c6XCIsIHRoaXMucHJvcGVydGllc1tcImluZm9cIl0pXG4gICAgICAgIHJldHVybiBFbnVtU3RhdHVzLlNVQ0NFU1NcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3BhcnNlUHJvcChwcm9wOiBhbnkpIHtcbiAgICAgICAgc3VwZXIuX3BhcnNlUHJvcChwcm9wKVxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wXG4gICAgfVxufSJdfQ==