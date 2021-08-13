
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/actions/B3Error.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2b70MOcE1Gnpt1cjemZ2px', 'B3Error');
// libs/b3/actions/B3Error.ts

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
exports.B3Error = void 0;
var B3Action_1 = require("../core/B3Action");
var Constants_1 = require("../Constants");
var B3Error = /** @class */ (function (_super) {
    __extends(B3Error, _super);
    function B3Error(d) {
        return _super.call(this, d || { name: "Error" }) || this;
    }
    B3Error.prototype.tick = function (tick) {
        return Constants_1.EnumStatus.ERROR;
    };
    return B3Error;
}(B3Action_1.B3Action));
exports.B3Error = B3Error;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2FjdGlvbnMvQjNFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBRzVDLDBDQUEwQztBQUUxQztJQUE2QiwyQkFBUTtJQUNqQyxpQkFBWSxDQUFlO2VBQ3ZCLGtCQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUFLLElBQVk7UUFDYixPQUFPLHNCQUFVLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FSQSxBQVFDLENBUjRCLG1CQUFRLEdBUXBDO0FBUlksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCM0FjdGlvbiB9IGZyb20gXCIuLi9jb3JlL0IzQWN0aW9uXCI7XG5pbXBvcnQgeyBJQjNOb2RlUHJvcCB9IGZyb20gXCIuLi9jb3JlL0IzSU5vZGVQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBCM1RpY2sgfSBmcm9tIFwiLi4vY29yZS9CM1RpY2tcIjtcbmltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tICcuLi9Db25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgQjNFcnJvciBleHRlbmRzIEIzQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihkPzogSUIzTm9kZVByb3ApIHtcbiAgICAgICAgc3VwZXIoZCB8fCB7IG5hbWU6IFwiRXJyb3JcIiB9KTtcbiAgICB9XG5cbiAgICB0aWNrKHRpY2s6IEIzVGljaykge1xuICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5FUlJPUjtcbiAgICB9XG59Il19