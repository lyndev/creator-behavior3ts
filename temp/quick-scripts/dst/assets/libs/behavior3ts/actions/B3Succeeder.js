
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/actions/B3Succeeder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f771pBFQhDj5a8bjL+CU3q', 'B3Succeeder');
// libs/b3/actions/B3Succeeder.ts

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
exports.B3Succeeder = void 0;
var Constants_1 = require("../Constants");
var B3Action_1 = require("../core/B3Action");
var B3Succeeder = /** @class */ (function (_super) {
    __extends(B3Succeeder, _super);
    function B3Succeeder(d) {
        return _super.call(this, d || { name: 'Succeeder' }) || this;
    }
    B3Succeeder.prototype.tick = function (tick) {
        return Constants_1.EnumStatus.SUCCESS;
    };
    return B3Succeeder;
}(B3Action_1.B3Action));
exports.B3Succeeder = B3Succeeder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2FjdGlvbnMvQjNTdWNjZWVkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUEwQztBQUMxQyw2Q0FBNEM7QUFJNUM7SUFBaUMsK0JBQVE7SUFDckMscUJBQVksQ0FBZTtlQUN2QixrQkFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDBCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQVJBLEFBUUMsQ0FSZ0MsbUJBQVEsR0FReEM7QUFSWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCM0FjdGlvbiB9IGZyb20gXCIuLi9jb3JlL0IzQWN0aW9uXCI7XG5pbXBvcnQgeyBJQjNOb2RlUHJvcCB9IGZyb20gXCIuLi9jb3JlL0IzSU5vZGVQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBCM1RpY2sgfSBmcm9tIFwiLi4vY29yZS9CM1RpY2tcIjtcblxuZXhwb3J0IGNsYXNzIEIzU3VjY2VlZGVyIGV4dGVuZHMgQjNBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGQ/OiBJQjNOb2RlUHJvcCkge1xuICAgICAgICBzdXBlcihkIHx8IHsgbmFtZTogJ1N1Y2NlZWRlcicgfSk7XG4gICAgfVxuXG4gICAgdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgcmV0dXJuIEVudW1TdGF0dXMuU1VDQ0VTUztcbiAgICB9XG59Il19