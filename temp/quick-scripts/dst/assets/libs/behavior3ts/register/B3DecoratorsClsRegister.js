
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/register/B3DecoratorsClsRegister.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL3JlZ2lzdGVyL0IzRGVjb3JhdG9yc0Nsc1JlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQscURBQW9EO0FBQ3BELHFEQUFvRDtBQUNwRCx1REFBc0Q7QUFDdEQsMkVBQTBFO0FBQzFFLDJFQUEwRTtBQUUvRCxRQUFBLGVBQWU7SUFDdEIsR0FBQyxZQUFZLElBQUcsdUJBQVU7SUFDMUIsR0FBQyxXQUFXLElBQUcscUJBQVM7SUFDeEIsR0FBQyxXQUFXLElBQUcscUJBQVM7SUFDeEIsR0FBQyxZQUFZLElBQUcsdUJBQVU7SUFDMUIsR0FBQyxzQkFBc0IsSUFBRywyQ0FBb0I7SUFDOUMsR0FBQyxzQkFBc0IsSUFBRywyQ0FBb0I7UUFDakQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCM0ludmVydGVyIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9CM0ludmVydGVyJztcbmltcG9ydCB7IEIzTGltaXRlciB9IGZyb20gJy4uL2RlY29yYXRvcnMvQjNMaW1pdGVyJztcbmltcG9ydCB7IEIzTWF4VGltZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvQjNNYXhUaW1lJztcbmltcG9ydCB7IEIzUmVwZWF0ZXIgfSBmcm9tICcuLi9kZWNvcmF0b3JzL0IzUmVwZWF0ZXInO1xuaW1wb3J0IHsgQjNSZXBlYXRVbnRpbEZhaWx1cmUgfSBmcm9tICcuLi9kZWNvcmF0b3JzL0IzUmVwZWF0VW50aWxGYWlsdXJlJztcbmltcG9ydCB7IEIzUmVwZWF0VW50aWxTdWNjZXNzIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9CM1JlcGVhdFVudGlsU3VjY2Vzcyc7XG5cbmV4cG9ydCBsZXQgQjNEZWNvcmF0b3JzQ2xzID0ge1xuICAgIFtcIkIzSW52ZXJ0ZXJcIl06IEIzSW52ZXJ0ZXIsXG4gICAgW1wiQjNMaW1pdGVyXCJdOiBCM0xpbWl0ZXIsXG4gICAgW1wiQjNNYXhUaW1lXCJdOiBCM01heFRpbWUsXG4gICAgW1wiQjNSZXBlYXRlclwiXTogQjNSZXBlYXRlcixcbiAgICBbXCJCM1JlcGVhdFVudGlsRmFpbHVyZVwiXTogQjNSZXBlYXRVbnRpbEZhaWx1cmUsXG4gICAgW1wiQjNSZXBlYXRVbnRpbFN1Y2Nlc3NcIl06IEIzUmVwZWF0VW50aWxTdWNjZXNzLFxufSJdfQ==