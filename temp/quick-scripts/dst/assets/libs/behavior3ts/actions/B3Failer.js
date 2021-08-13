
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/actions/B3Failer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2874bKBC7NCt5sH5Q+TnxV7', 'B3Failer');
// libs/b3/actions/B3Failer.ts

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
exports.B3Failer = void 0;
var Constants_1 = require("../Constants");
var B3Action_1 = require("../core/B3Action");
var B3Failer = /** @class */ (function (_super) {
    __extends(B3Failer, _super);
    function B3Failer(d) {
        return _super.call(this, d || { name: 'Failer' }) || this;
    }
    B3Failer.prototype.tick = function (tick) {
        return Constants_1.EnumStatus.FAILURE;
    };
    return B3Failer;
}(B3Action_1.B3Action));
exports.B3Failer = B3Failer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2FjdGlvbnMvQjNGYWlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUEwQztBQUMxQyw2Q0FBNEM7QUFJNUM7SUFBOEIsNEJBQVE7SUFDbEMsa0JBQVksQ0FBZTtlQUN2QixrQkFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELHVCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBQ0wsZUFBQztBQUFELENBUkEsQUFRQyxDQVI2QixtQkFBUSxHQVFyQztBQVJZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bVN0YXR1cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQWN0aW9uIH0gZnJvbSBcIi4uL2NvcmUvQjNBY3Rpb25cIjtcbmltcG9ydCB7IElCM05vZGVQcm9wIH0gZnJvbSBcIi4uL2NvcmUvQjNJTm9kZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuLi9jb3JlL0IzVGlja1wiO1xuXG5leHBvcnQgY2xhc3MgQjNGYWlsZXIgZXh0ZW5kcyBCM0FjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoZD86IElCM05vZGVQcm9wKSB7XG4gICAgICAgIHN1cGVyKGQgfHwgeyBuYW1lOiAnRmFpbGVyJyB9KTtcbiAgICB9XG5cbiAgICB0aWNrKHRpY2s6IEIzVGljaykge1xuICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5GQUlMVVJFO1xuICAgIH1cbn0iXX0=