
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/libs/behavior3ts/Constants');
require('./assets/libs/behavior3ts/actions/B3Error');
require('./assets/libs/behavior3ts/actions/B3Failer');
require('./assets/libs/behavior3ts/actions/B3Runner');
require('./assets/libs/behavior3ts/actions/B3Succeeder');
require('./assets/libs/behavior3ts/actions/B3Wait');
require('./assets/libs/behavior3ts/composites/B3MemPriority');
require('./assets/libs/behavior3ts/composites/B3MemSequence');
require('./assets/libs/behavior3ts/composites/B3Priority');
require('./assets/libs/behavior3ts/composites/B3Sequence');
require('./assets/libs/behavior3ts/core/B3Action');
require('./assets/libs/behavior3ts/core/B3BaseNode');
require('./assets/libs/behavior3ts/core/B3BehaviorTree');
require('./assets/libs/behavior3ts/core/B3BehaviorTreeGroup');
require('./assets/libs/behavior3ts/core/B3Blackboard');
require('./assets/libs/behavior3ts/core/B3Composite');
require('./assets/libs/behavior3ts/core/B3Condition');
require('./assets/libs/behavior3ts/core/B3Decorator');
require('./assets/libs/behavior3ts/core/B3INodeProperties');
require('./assets/libs/behavior3ts/core/B3Tick');
require('./assets/libs/behavior3ts/decorators/B3Inverter');
require('./assets/libs/behavior3ts/decorators/B3Limiter');
require('./assets/libs/behavior3ts/decorators/B3MaxTime');
require('./assets/libs/behavior3ts/decorators/B3RepeatUntilFailure');
require('./assets/libs/behavior3ts/decorators/B3RepeatUntilSuccess');
require('./assets/libs/behavior3ts/decorators/B3Repeater');
require('./assets/libs/behavior3ts/register/B3ActionsClsRegister');
require('./assets/libs/behavior3ts/register/B3CompositesClsRegister');
require('./assets/libs/behavior3ts/register/B3CustomClsRegister');
require('./assets/libs/behavior3ts/register/B3DecoratorsClsRegister');
require('./assets/libs/behavior3ts/utils/B3Utils');
require('./assets/script/behavior/CustomActions/CustomAction');
require('./assets/script/behavior/CustomActions/Log');
require('./assets/script/behavior/CustomCondtion/DisCondition');
require('./assets/script/behavior/CustomCondtion/TargetCondition');
require('./assets/script/behavior/behaviorTress/TestAI');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/b3/decorators/Inverter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdd6eU7kPFO742ei6scVdkv', 'Inverter');
// libs/b3/decorators/Inverter.ts

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
var b3;
(function (b3) {
    var decorators;
    (function (decorators) {
        var Inverter = /** @class */ (function (_super) {
            __extends(Inverter, _super);
            function Inverter(d) {
                var _this = this;
                d.name = "Inverter";
                _this = _super.call(this, d) || this;
                return _this;
            }
            Inverter.prototype.tick = function (tick) {
                if (!this.child) {
                    return EnumStatus.ERROR;
                }
                var status = this.child.execute(tick);
                if (status == EnumStatus.SUCCESS) {
                    status = EnumStatus.FAILURE;
                }
                else if (status == EnumStatus.FAILURE) {
                    status = EnumStatus.SUCCESS;
                }
                return status;
            };
            return Inverter;
        }(Decorator));
        decorators.Inverter = Inverter;
    })(decorators = b3.decorators || (b3.decorators = {}));
})(b3 || (b3 = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvSW52ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVUsRUFBRSxDQXVCWDtBQXZCRCxXQUFVLEVBQUU7SUFBQyxJQUFBLFVBQVUsQ0F1QnRCO0lBdkJZLFdBQUEsVUFBVTtRQUNuQjtZQUE4Qiw0QkFBUztZQUNuQyxrQkFBWSxDQUFpQjtnQkFBN0IsaUJBR0M7Z0JBRkcsQ0FBQyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7Z0JBQ3BCLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7O1lBQ2IsQ0FBQztZQUVELHVCQUFJLEdBQUosVUFBSyxJQUFVO2dCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNiLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQztpQkFDM0I7Z0JBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXRDLElBQUksTUFBTSxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQzlCLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO2lCQUMvQjtxQkFBTSxJQUFJLE1BQU0sSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFO29CQUNyQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztpQkFDL0I7Z0JBRUQsT0FBTyxNQUFNLENBQUM7WUFDbEIsQ0FBQztZQUNMLGVBQUM7UUFBRCxDQXJCQSxBQXFCQyxDQXJCNkIsU0FBUyxHQXFCdEM7UUFyQlksbUJBQVEsV0FxQnBCLENBQUE7SUFDTCxDQUFDLEVBdkJZLFVBQVUsR0FBVixhQUFVLEtBQVYsYUFBVSxRQXVCdEI7QUFBRCxDQUFDLEVBdkJTLEVBQUUsS0FBRixFQUFFLFFBdUJYIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGIzLmRlY29yYXRvcnMge1xuICAgIGV4cG9ydCBjbGFzcyBJbnZlcnRlciBleHRlbmRzIERlY29yYXRvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGQ6IElEZWNvcmF0b3JQcm9wKSB7XG4gICAgICAgICAgICBkLm5hbWUgPSBcIkludmVydGVyXCI7XG4gICAgICAgICAgICBzdXBlcihkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpY2sodGljazogVGljaykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEVudW1TdGF0dXMuRVJST1I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSB0aGlzLmNoaWxkLmV4ZWN1dGUodGljayk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gRW51bVN0YXR1cy5TVUNDRVNTKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gRW51bVN0YXR1cy5GQUlMVVJFO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT0gRW51bVN0YXR1cy5GQUlMVVJFKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gRW51bVN0YXR1cy5TVUNDRVNTO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/b3/decorators/Limiter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe99cdMf7lMAJy97QOiudXR', 'Limiter');
// libs/b3/decorators/Limiter.ts

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
var b3;
(function (b3) {
    var decorators;
    (function (decorators) {
        var Limiter = /** @class */ (function (_super) {
            __extends(Limiter, _super);
            function Limiter(d) {
                return _super.call(this, d) || this;
            }
            Limiter.prototype._parseProp = function (d) {
                if (!d.maxLoop) {
                    throw 'maxLoop parameter in Limiter decorator is an obligatory parameter';
                }
                this.maxLoop = d.maxLoop || 1;
            };
            Limiter.prototype.open = function (tick) {
                tick.blackboard.set('i', 0, tick.tree.id, this.id);
            };
            Limiter.prototype.tick = function (tick) {
                if (!this.child) {
                    return EnumStatus.ERROR;
                }
                var i = tick.blackboard.get('i', tick.tree.id, this.id);
                if (i < this.maxLoop) {
                    var status = this.child.execute(tick);
                    if (status == EnumStatus.SUCCESS || status == EnumStatus.FAILURE)
                        tick.blackboard.set('i', i + 1, tick.tree.id, this.id);
                    return status;
                }
                return EnumStatus.FAILURE;
            };
            return Limiter;
        }(Decorator));
        decorators.Limiter = Limiter;
    })(decorators = b3.decorators || (b3.decorators = {}));
})(b3 || (b3 = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvTGltaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBVSxFQUFFLENBcUNYO0FBckNELFdBQVUsRUFBRTtJQUFDLElBQUEsVUFBVSxDQXFDdEI7SUFyQ1ksV0FBQSxVQUFVO1FBQ25CO1lBQTZCLDJCQUFTO1lBRWxDLGlCQUFZLENBQWU7dUJBQ3ZCLGtCQUFNLENBQUMsQ0FBQztZQUNaLENBQUM7WUFFUyw0QkFBVSxHQUFwQixVQUFxQixDQUFNO2dCQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtvQkFDWixNQUFNLG1FQUFtRSxDQUFDO2lCQUM3RTtnQkFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFFRCxzQkFBSSxHQUFKLFVBQUssSUFBVTtnQkFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBRUQsc0JBQUksR0FBSixVQUFLLElBQVU7Z0JBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2IsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDO2lCQUMzQjtnQkFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUV4RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNsQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFdEMsSUFBSSxNQUFNLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxNQUFNLElBQUksVUFBVSxDQUFDLE9BQU87d0JBQzVELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFM0QsT0FBTyxNQUFNLENBQUM7aUJBQ2pCO2dCQUVELE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUM5QixDQUFDO1lBQ0wsY0FBQztRQUFELENBbkNBLEFBbUNDLENBbkM0QixTQUFTLEdBbUNyQztRQW5DWSxrQkFBTyxVQW1DbkIsQ0FBQTtJQUNMLENBQUMsRUFyQ1ksVUFBVSxHQUFWLGFBQVUsS0FBVixhQUFVLFFBcUN0QjtBQUFELENBQUMsRUFyQ1MsRUFBRSxLQUFGLEVBQUUsUUFxQ1giLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgYjMuZGVjb3JhdG9ycyB7XG4gICAgZXhwb3J0IGNsYXNzIExpbWl0ZXIgZXh0ZW5kcyBEZWNvcmF0b3Ige1xuICAgICAgICBtYXhMb29wOiBudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKGQ6IElMaW1pdGVyUHJvcCkge1xuICAgICAgICAgICAgc3VwZXIoZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHByb3RlY3RlZCBfcGFyc2VQcm9wKGQ6IGFueSkge1xuICAgICAgICAgICAgaWYgKCFkLm1heExvb3ApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnbWF4TG9vcCBwYXJhbWV0ZXIgaW4gTGltaXRlciBkZWNvcmF0b3IgaXMgYW4gb2JsaWdhdG9yeSBwYXJhbWV0ZXInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXhMb29wID0gZC5tYXhMb29wIHx8IDE7XG4gICAgICAgIH1cblxuICAgICAgICBvcGVuKHRpY2s6IFRpY2spIHtcbiAgICAgICAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ2knLCAwLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGljayh0aWNrOiBUaWNrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5FUlJPUjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGkgPSB0aWNrLmJsYWNrYm9hcmQuZ2V0KCdpJywgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcblxuICAgICAgICAgICAgaWYgKGkgPCB0aGlzLm1heExvb3ApIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0gdGhpcy5jaGlsZC5leGVjdXRlKHRpY2spO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBFbnVtU3RhdHVzLlNVQ0NFU1MgfHwgc3RhdHVzID09IEVudW1TdGF0dXMuRkFJTFVSRSlcbiAgICAgICAgICAgICAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnaScsIGkgKyAxLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIEVudW1TdGF0dXMuRkFJTFVSRTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW50ZXJmYWNlIElMaW1pdGVyUHJvcCBleHRlbmRzIElEZWNvcmF0b3JQcm9wIHtcbiAgICBtYXhMb29wOiBudW1iZXI7XG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/actions/B3Runner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '093cf0Zi9lB27MsxoZ4m1u3', 'B3Runner');
// libs/b3/actions/B3Runner.ts

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
exports.B3Runner = void 0;
var Constants_1 = require("../Constants");
var B3Action_1 = require("../core/B3Action");
var B3Runner = /** @class */ (function (_super) {
    __extends(B3Runner, _super);
    function B3Runner(d) {
        return _super.call(this, d || { name: 'Runner' }) || this;
    }
    B3Runner.prototype.tick = function (tick) {
        return Constants_1.EnumStatus.RUNNING;
    };
    return B3Runner;
}(B3Action_1.B3Action));
exports.B3Runner = B3Runner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2FjdGlvbnMvQjNSdW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUEwQztBQUMxQyw2Q0FBNEM7QUFJeEM7SUFBOEIsNEJBQVE7SUFDbEMsa0JBQVksQ0FBYztlQUN0QixrQkFBTSxDQUFDLElBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHVCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBQ0wsZUFBQztBQUFELENBUkEsQUFRQyxDQVI2QixtQkFBUSxHQVFyQztBQVJZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bVN0YXR1cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQWN0aW9uIH0gZnJvbSBcIi4uL2NvcmUvQjNBY3Rpb25cIjtcbmltcG9ydCB7IElCM05vZGVQcm9wIH0gZnJvbSBcIi4uL2NvcmUvQjNJTm9kZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuLi9jb3JlL0IzVGlja1wiO1xuXG4gICAgZXhwb3J0IGNsYXNzIEIzUnVubmVyIGV4dGVuZHMgQjNBY3Rpb24ge1xuICAgICAgICBjb25zdHJ1Y3RvcihkPzpJQjNOb2RlUHJvcCkge1xuICAgICAgICAgICAgc3VwZXIoZHx8eyBuYW1lOiAnUnVubmVyJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpY2sodGljazogQjNUaWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5SVU5OSU5HO1xuICAgICAgICB9XG4gICAgfSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/composites/B3MemPriority.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e85f8i/41FNlajkPZELiXLe', 'B3MemPriority');
// libs/b3/composites/B3MemPriority.ts

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
exports.B3MemPriority = void 0;
var Constants_1 = require("../Constants");
var B3Composite_1 = require("../core/B3Composite");
var B3MemPriority = /** @class */ (function (_super) {
    __extends(B3MemPriority, _super);
    function B3MemPriority(d) {
        var _this = this;
        d.name = "MemPriority";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3MemPriority.prototype.open = function (tick) {
        tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
    };
    B3MemPriority.prototype.tick = function (tick) {
        var child = tick.blackboard.get('runningChild', tick.tree.id, this.id);
        for (var i = child; i < this.children.length; i++) {
            var status = this.children[i].execute(tick);
            if (status !== Constants_1.EnumStatus.FAILURE) {
                if (status === Constants_1.EnumStatus.RUNNING) {
                    tick.blackboard.set('runningChild', i, tick.tree.id, this.id);
                }
                return status;
            }
        }
        return Constants_1.EnumStatus.FAILURE;
    };
    return B3MemPriority;
}(B3Composite_1.B3Composite));
exports.B3MemPriority = B3MemPriority;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvbXBvc2l0ZXMvQjNNZW1Qcmlvcml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLG1EQUFrRDtBQUlsRDtJQUFtQyxpQ0FBVztJQUM1Qyx1QkFBWSxDQUFtQjtRQUEvQixpQkFHQztRQUZDLENBQUMsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQ3ZCLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7O0lBQ1gsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RSxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFNUMsSUFBSSxNQUFNLEtBQUssc0JBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pDLElBQUksTUFBTSxLQUFLLHNCQUFVLENBQUMsT0FBTyxFQUFFO29CQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDL0Q7Z0JBRUQsT0FBTyxNQUFNLENBQUM7YUFDZjtTQUNGO1FBRUQsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQTFCQSxBQTBCQyxDQTFCa0MseUJBQVcsR0EwQjdDO0FBMUJZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bVN0YXR1cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQ29tcG9zaXRlIH0gZnJvbSBcIi4uL2NvcmUvQjNDb21wb3NpdGVcIjtcbmltcG9ydCB7IElCM0NvbXBvc2l0ZVByb3AgfSBmcm9tIFwiLi4vY29yZS9CM0lOb2RlUHJvcGVydGllc1wiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4uL2NvcmUvQjNUaWNrXCI7XG5cbmV4cG9ydCBjbGFzcyBCM01lbVByaW9yaXR5IGV4dGVuZHMgQjNDb21wb3NpdGUge1xuICBjb25zdHJ1Y3RvcihkOiBJQjNDb21wb3NpdGVQcm9wKSB7XG4gICAgZC5uYW1lID0gXCJNZW1Qcmlvcml0eVwiO1xuICAgIHN1cGVyKGQpO1xuICB9XG5cbiAgb3Blbih0aWNrOiBCM1RpY2spIHtcbiAgICB0aWNrLmJsYWNrYm9hcmQuc2V0KCdydW5uaW5nQ2hpbGQnLCAwLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICB9XG5cbiAgdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICB2YXIgY2hpbGQgPSB0aWNrLmJsYWNrYm9hcmQuZ2V0KCdydW5uaW5nQ2hpbGQnLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICAgIGZvciAodmFyIGkgPSBjaGlsZDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzdGF0dXMgPSB0aGlzLmNoaWxkcmVuW2ldLmV4ZWN1dGUodGljayk7XG5cbiAgICAgIGlmIChzdGF0dXMgIT09IEVudW1TdGF0dXMuRkFJTFVSRSkge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBFbnVtU3RhdHVzLlJVTk5JTkcpIHtcbiAgICAgICAgICB0aWNrLmJsYWNrYm9hcmQuc2V0KCdydW5uaW5nQ2hpbGQnLCBpLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRW51bVN0YXR1cy5GQUlMVVJFO1xuICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/decorators/B3Limiter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb050dGqEBD5ZMbluh2CuOe', 'B3Limiter');
// libs/b3/decorators/B3Limiter.ts

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
exports.B3Limiter = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
var B3Limiter = /** @class */ (function (_super) {
    __extends(B3Limiter, _super);
    function B3Limiter(d) {
        return _super.call(this, d) || this;
    }
    B3Limiter.prototype._parseProp = function (d) {
        if (!d.maxLoop) {
            throw 'maxLoop parameter in Limiter decorator is an obligatory parameter';
        }
        this.maxLoop = d.maxLoop || 1;
    };
    B3Limiter.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    B3Limiter.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        if (i < this.maxLoop) {
            var status = this.child.execute(tick);
            if (status == Constants_1.EnumStatus.SUCCESS || status == Constants_1.EnumStatus.FAILURE)
                tick.blackboard.set('i', i + 1, tick.tree.id, this.id);
            return status;
        }
        return Constants_1.EnumStatus.FAILURE;
    };
    return B3Limiter;
}(B3Decorator_1.B3Decorator));
exports.B3Limiter = B3Limiter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvQjNMaW1pdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFDMUMsbURBQWtEO0FBSWxEO0lBQStCLDZCQUFXO0lBRXRDLG1CQUFZLENBQWlCO2VBQ3pCLGtCQUFNLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFUyw4QkFBVSxHQUFwQixVQUFxQixDQUFNO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ1osTUFBTSxtRUFBbUUsQ0FBQztTQUM3RTtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHdCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHdCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixPQUFPLHNCQUFVLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRDLElBQUksTUFBTSxJQUFJLHNCQUFVLENBQUMsT0FBTyxJQUFJLE1BQU0sSUFBSSxzQkFBVSxDQUFDLE9BQU87Z0JBQzVELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUzRCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUVELE9BQU8sc0JBQVUsQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsQ0FuQzhCLHlCQUFXLEdBbUN6QztBQW5DWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCM0RlY29yYXRvciB9IGZyb20gXCIuLi9jb3JlL0IzRGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBJQjNEZWNvcmF0b3JQcm9wIH0gZnJvbSBcIi4uL2NvcmUvQjNJTm9kZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuLi9jb3JlL0IzVGlja1wiO1xuXG5leHBvcnQgY2xhc3MgQjNMaW1pdGVyIGV4dGVuZHMgQjNEZWNvcmF0b3Ige1xuICAgIG1heExvb3A6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihkOiBJQjNMaW1pdGVyUHJvcCkge1xuICAgICAgICBzdXBlcihkKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3BhcnNlUHJvcChkOiBhbnkpIHtcbiAgICAgICAgaWYgKCFkLm1heExvb3ApIHtcbiAgICAgICAgICAgIHRocm93ICdtYXhMb29wIHBhcmFtZXRlciBpbiBMaW1pdGVyIGRlY29yYXRvciBpcyBhbiBvYmxpZ2F0b3J5IHBhcmFtZXRlcic7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXhMb29wID0gZC5tYXhMb29wIHx8IDE7XG4gICAgfVxuXG4gICAgb3Blbih0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnaScsIDAsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG4gICAgfVxuXG4gICAgdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5FUlJPUjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpID0gdGljay5ibGFja2JvYXJkLmdldCgnaScsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG5cbiAgICAgICAgaWYgKGkgPCB0aGlzLm1heExvb3ApIHtcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSB0aGlzLmNoaWxkLmV4ZWN1dGUodGljayk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gRW51bVN0YXR1cy5TVUNDRVNTIHx8IHN0YXR1cyA9PSBFbnVtU3RhdHVzLkZBSUxVUkUpXG4gICAgICAgICAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnaScsIGkgKyAxLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEVudW1TdGF0dXMuRkFJTFVSRTtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUIzTGltaXRlclByb3AgZXh0ZW5kcyBJQjNEZWNvcmF0b3JQcm9wIHtcbiAgICBtYXhMb29wOiBudW1iZXI7XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/register/B3ActionsClsRegister.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '352f2uqQJhMupJcmXgQLeU6', 'B3ActionsClsRegister');
// libs/b3/register/B3ActionsClsRegister.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3ActionsCls = void 0;
var B3Error_1 = require("../actions/B3Error");
var B3Failer_1 = require("../actions/B3Failer");
var B3Runner_1 = require("../actions/B3Runner");
var B3Succeeder_1 = require("../actions/B3Succeeder");
var B3Wait_1 = require("../actions/B3Wait");
exports.B3ActionsCls = (_a = {},
    _a["B3Error"] = B3Error_1.B3Error,
    _a["B3Failer"] = B3Failer_1.B3Failer,
    _a["B3Runner"] = B3Runner_1.B3Runner,
    _a["B3Succeeder"] = B3Succeeder_1.B3Succeeder,
    _a["B3Wait"] = B3Wait_1.B3Wait,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL3JlZ2lzdGVyL0IzQWN0aW9uc0Nsc1JlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFDN0MsZ0RBQStDO0FBQy9DLGdEQUErQztBQUMvQyxzREFBcUQ7QUFDckQsNENBQTJDO0FBRWhDLFFBQUEsWUFBWTtJQUNuQixHQUFDLFNBQVMsSUFBRyxpQkFBTztJQUNwQixHQUFDLFVBQVUsSUFBRyxtQkFBUTtJQUN0QixHQUFDLFVBQVUsSUFBRyxtQkFBUTtJQUN0QixHQUFDLGFBQWEsSUFBRyx5QkFBVztJQUM1QixHQUFDLFFBQVEsSUFBRyxlQUFNO1FBQ3JCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQjNFcnJvciB9IGZyb20gXCIuLi9hY3Rpb25zL0IzRXJyb3JcIjtcbmltcG9ydCB7IEIzRmFpbGVyIH0gZnJvbSAnLi4vYWN0aW9ucy9CM0ZhaWxlcic7XG5pbXBvcnQgeyBCM1J1bm5lciB9IGZyb20gJy4uL2FjdGlvbnMvQjNSdW5uZXInO1xuaW1wb3J0IHsgQjNTdWNjZWVkZXIgfSBmcm9tIFwiLi4vYWN0aW9ucy9CM1N1Y2NlZWRlclwiO1xuaW1wb3J0IHsgQjNXYWl0IH0gZnJvbSAnLi4vYWN0aW9ucy9CM1dhaXQnO1xuXG5leHBvcnQgbGV0IEIzQWN0aW9uc0NscyA9IHtcbiAgICBbXCJCM0Vycm9yXCJdOiBCM0Vycm9yLFxuICAgIFtcIkIzRmFpbGVyXCJdOiBCM0ZhaWxlcixcbiAgICBbXCJCM1J1bm5lclwiXTogQjNSdW5uZXIsXG4gICAgW1wiQjNTdWNjZWVkZXJcIl06IEIzU3VjY2VlZGVyLFxuICAgIFtcIkIzV2FpdFwiXTogQjNXYWl0LFxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/utils/B3Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39f64v9SzZIYZ/64dh4rnJG', 'B3Utils');
// libs/b3/utils/B3Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUUID = void 0;
function createUUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    // bits 12-15 of the time_hi_and_version field to 0010
    s[14] = "4";
    // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
exports.createUUID = createUUID;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL3V0aWxzL0IzVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBZ0IsVUFBVTtJQUN4QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWCxJQUFJLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztJQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzlEO0lBQ0Qsc0RBQXNEO0lBQ3RELENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7SUFFWixrREFBa0Q7SUFDbEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRWpELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7SUFFbkMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QixPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFoQkQsZ0NBZ0JDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVVSUQoKSB7XG4gIHZhciBzID0gW107XG4gIHZhciBoZXhEaWdpdHMgPSBcIjAxMjM0NTY3ODlhYmNkZWZcIjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAzNjsgaSsrKSB7XG4gICAgc1tpXSA9IGhleERpZ2l0cy5zdWJzdHIoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHgxMCksIDEpO1xuICB9XG4gIC8vIGJpdHMgMTItMTUgb2YgdGhlIHRpbWVfaGlfYW5kX3ZlcnNpb24gZmllbGQgdG8gMDAxMFxuICBzWzE0XSA9IFwiNFwiO1xuXG4gIC8vIGJpdHMgNi03IG9mIHRoZSBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIHRvIDAxXG4gIHNbMTldID0gaGV4RGlnaXRzLnN1YnN0cigoc1sxOV0gJiAweDMpIHwgMHg4LCAxKTtcblxuICBzWzhdID0gc1sxM10gPSBzWzE4XSA9IHNbMjNdID0gXCItXCI7XG5cbiAgdmFyIHV1aWQgPSBzLmpvaW4oXCJcIik7XG4gIHJldHVybiB1dWlkO1xufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/composites/B3Priority.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6436xPKBtIsoNOThmQn2sX', 'B3Priority');
// libs/b3/composites/B3Priority.ts

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
exports.B3Priority = void 0;
var Constants_1 = require("../Constants");
var B3Composite_1 = require("../core/B3Composite");
var B3Priority = /** @class */ (function (_super) {
    __extends(B3Priority, _super);
    function B3Priority(d) {
        var _this = this;
        d.name = "Priority";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3Priority.prototype.tick = function (tick) {
        for (var i = 0; i < this.children.length; i++) {
            var status = this.children[i].execute(tick);
            if (status !== Constants_1.EnumStatus.FAILURE) {
                return status;
            }
        }
        return Constants_1.EnumStatus.FAILURE;
    };
    return B3Priority;
}(B3Composite_1.B3Composite));
exports.B3Priority = B3Priority;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvbXBvc2l0ZXMvQjNQcmlvcml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLG1EQUFrRDtBQUlsRDtJQUFnQyw4QkFBVztJQUN2QyxvQkFBWSxDQUFtQjtRQUEvQixpQkFHQztRQUZHLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7O0lBQ2IsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVDLElBQUksTUFBTSxLQUFLLHNCQUFVLENBQUMsT0FBTyxFQUFFO2dCQUMvQixPQUFPLE1BQU0sQ0FBQzthQUNqQjtTQUNKO1FBRUQsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxDQWpCK0IseUJBQVcsR0FpQjFDO0FBakJZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bVN0YXR1cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQ29tcG9zaXRlIH0gZnJvbSBcIi4uL2NvcmUvQjNDb21wb3NpdGVcIjtcbmltcG9ydCB7IElCM0NvbXBvc2l0ZVByb3AgfSBmcm9tIFwiLi4vY29yZS9CM0lOb2RlUHJvcGVydGllc1wiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4uL2NvcmUvQjNUaWNrXCI7XG5cbmV4cG9ydCBjbGFzcyBCM1ByaW9yaXR5IGV4dGVuZHMgQjNDb21wb3NpdGUge1xuICAgIGNvbnN0cnVjdG9yKGQ6IElCM0NvbXBvc2l0ZVByb3ApIHtcbiAgICAgICAgZC5uYW1lID0gXCJQcmlvcml0eVwiO1xuICAgICAgICBzdXBlcihkKTtcbiAgICB9XG5cbiAgICB0aWNrKHRpY2s6IEIzVGljaykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSB0aGlzLmNoaWxkcmVuW2ldLmV4ZWN1dGUodGljayk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgIT09IEVudW1TdGF0dXMuRkFJTFVSRSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5GQUlMVVJFO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/composites/B3MemSequence.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53589IaR/hLm7hcpnZCspDU', 'B3MemSequence');
// libs/behavior3ts/composites/B3MemSequence.ts

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
exports.B3MemSequence = void 0;
var Constants_1 = require("../Constants");
var B3Composite_1 = require("../core/B3Composite");
var B3MemSequence = /** @class */ (function (_super) {
    __extends(B3MemSequence, _super);
    function B3MemSequence(d) {
        var _this = this;
        d.name = "MemSequence";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3MemSequence.prototype.open = function (tick) {
        tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
    };
    B3MemSequence.prototype.tick = function (tick) {
        var child = tick.blackboard.get('runningChild', tick.tree.id, this.id);
        for (var i = child; i < this.children.length; i++) {
            var status = this.children[i].execute(tick);
            if (status !== Constants_1.EnumStatus.SUCCESS) {
                if (status === Constants_1.EnumStatus.RUNNING) {
                    tick.blackboard.set('runningChild', i, tick.tree.id, this.id);
                }
                return status;
            }
        }
        return Constants_1.EnumStatus.SUCCESS;
    };
    return B3MemSequence;
}(B3Composite_1.B3Composite));
exports.B3MemSequence = B3MemSequence;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2JlaGF2aW9yM3RzL2NvbXBvc2l0ZXMvQjNNZW1TZXF1ZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLG1EQUFrRDtBQUk5QztJQUFtQyxpQ0FBVztJQUMxQyx1QkFBWSxDQUFtQjtRQUEvQixpQkFHQztRQUZHLENBQUMsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQ3ZCLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7O0lBQ2IsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RSxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFNUMsSUFBSSxNQUFNLEtBQUssc0JBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9CLElBQUksTUFBTSxLQUFLLHNCQUFVLENBQUMsT0FBTyxFQUFFO29CQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDakU7Z0JBQ0QsT0FBTyxNQUFNLENBQUM7YUFDakI7U0FDSjtRQUVELE9BQU8sc0JBQVUsQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0F6QkEsQUF5QkMsQ0F6QmtDLHlCQUFXLEdBeUI3QztBQXpCWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCM0NvbXBvc2l0ZSB9IGZyb20gXCIuLi9jb3JlL0IzQ29tcG9zaXRlXCI7XG5pbXBvcnQgeyBJQjNDb21wb3NpdGVQcm9wIH0gZnJvbSBcIi4uL2NvcmUvQjNJTm9kZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuLi9jb3JlL0IzVGlja1wiO1xuXG4gICAgZXhwb3J0IGNsYXNzIEIzTWVtU2VxdWVuY2UgZXh0ZW5kcyBCM0NvbXBvc2l0ZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGQ6IElCM0NvbXBvc2l0ZVByb3ApIHtcbiAgICAgICAgICAgIGQubmFtZSA9IFwiTWVtU2VxdWVuY2VcIjtcbiAgICAgICAgICAgIHN1cGVyKGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3Blbih0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ3J1bm5pbmdDaGlsZCcsIDAsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aWNrKHRpY2s6IEIzVGljaykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGljay5ibGFja2JvYXJkLmdldCgncnVubmluZ0NoaWxkJywgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBjaGlsZDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0gdGhpcy5jaGlsZHJlbltpXS5leGVjdXRlKHRpY2spO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gRW51bVN0YXR1cy5TVUNDRVNTKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IEVudW1TdGF0dXMuUlVOTklORykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgncnVubmluZ0NoaWxkJywgaSwgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIEVudW1TdGF0dXMuU1VDQ0VTUztcbiAgICAgICAgfVxuICAgIH0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/composites/B3Sequence.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a39d73cw7xFR6SYcjWWcbVq', 'B3Sequence');
// libs/b3/composites/B3Sequence.ts

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
exports.B3Sequence = void 0;
var Constants_1 = require("../Constants");
var B3Composite_1 = require("../core/B3Composite");
var B3Sequence = /** @class */ (function (_super) {
    __extends(B3Sequence, _super);
    function B3Sequence(d) {
        var _this = this;
        d.name = "Sequence";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3Sequence.prototype.tick = function (tick) {
        for (var i = 0; i < this.children.length; i++) {
            var status = this.children[i].execute(tick);
            if (status !== Constants_1.EnumStatus.SUCCESS) {
                return status;
            }
        }
        return Constants_1.EnumStatus.SUCCESS;
    };
    return B3Sequence;
}(B3Composite_1.B3Composite));
exports.B3Sequence = B3Sequence;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvbXBvc2l0ZXMvQjNTZXF1ZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLG1EQUFrRDtBQUk5QztJQUFnQyw4QkFBVztJQUN2QyxvQkFBWSxDQUFtQjtRQUEvQixpQkFHQztRQUZHLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7O0lBQ2IsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVDLElBQUksTUFBTSxLQUFLLHNCQUFVLENBQUMsT0FBTyxFQUFFO2dCQUMvQixPQUFPLE1BQU0sQ0FBQzthQUNqQjtTQUNKO1FBRUQsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxDQWpCK0IseUJBQVcsR0FpQjFDO0FBakJZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bVN0YXR1cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQ29tcG9zaXRlIH0gZnJvbSBcIi4uL2NvcmUvQjNDb21wb3NpdGVcIjtcbmltcG9ydCB7IElCM0NvbXBvc2l0ZVByb3AgfSBmcm9tIFwiLi4vY29yZS9CM0lOb2RlUHJvcGVydGllc1wiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4uL2NvcmUvQjNUaWNrXCI7XG5cbiAgICBleHBvcnQgY2xhc3MgQjNTZXF1ZW5jZSBleHRlbmRzIEIzQ29tcG9zaXRlIHtcbiAgICAgICAgY29uc3RydWN0b3IoZDogSUIzQ29tcG9zaXRlUHJvcCkge1xuICAgICAgICAgICAgZC5uYW1lID0gXCJTZXF1ZW5jZVwiO1xuICAgICAgICAgICAgc3VwZXIoZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aWNrKHRpY2s6IEIzVGljaykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuY2hpbGRyZW5baV0uZXhlY3V0ZSh0aWNrKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgIT09IEVudW1TdGF0dXMuU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIEVudW1TdGF0dXMuU1VDQ0VTUztcbiAgICAgICAgfVxuICAgIH0iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3BaseNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ea58bs5w5ChZT5UOgOGuVf', 'B3BaseNode');
// libs/b3/core/B3BaseNode.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3BaseNode = void 0;
var Constants_1 = require("../Constants");
var B3Utils_1 = require("../utils/B3Utils");
var B3BaseNode = /** @class */ (function () {
    function B3BaseNode(d) {
        this.id = d.id || B3Utils_1.createUUID();
        this.category = d.category || '';
        this.name = d.name || '';
        this.title = d.title || this.name;
        this.description = d.description || '';
        this.properties = d.properties || {};
        this.parameters = {};
        this._parseProp(this.properties);
    }
    B3BaseNode.prototype._parseProp = function (prop) {
    };
    /**
     * 这是将tick信号传播到此节点的主要方法
     * @param {Tick} tick A tick instance.
     * @return {Constant} The tick state.
     * @protected
     **/
    B3BaseNode.prototype.execute = function (tick) {
        // ENTER
        this._enter(tick);
        // OPEN
        if (!tick.blackboard.get('isOpen', tick.tree.id, this.id)) {
            this._open(tick);
        }
        // TICK
        var status = this._tick(tick);
        // CLOSE
        if (status !== Constants_1.EnumStatus.RUNNING) {
            this._close(tick);
        }
        // EXIT
        this._exit(tick);
        return status;
    };
    /**
     * Wrapper for enter method.
     * @method _enter
     * @param {Tick} tick A tick instance.
     * @protected
     **/
    B3BaseNode.prototype._enter = function (tick) {
        tick.enterNode(this);
        this.enter(tick);
    };
    /**
     * Wrapper for open method.
     * @method _open
     * @param {Tick} tick A tick instance.
     * @protected
     **/
    B3BaseNode.prototype._open = function (tick) {
        tick.openNode(this);
        tick.blackboard.set('isOpen', true, tick.tree.id, this.id);
        this.open(tick);
    };
    /**
     * Wrapper for tick method.
     * @method _tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     * @protected
     **/
    B3BaseNode.prototype._tick = function (tick) {
        tick.tickNode(this);
        return this.tick(tick);
    };
    /**
     * Wrapper for close method.
     * @method _close
     * @param {Tick} tick A tick instance.
     * @protected
     **/
    B3BaseNode.prototype._close = function (tick) {
        if (!tick.blackboard.get('isOpen', tick.tree.id, this.id))
            return;
        tick.closeNode(this);
        tick.blackboard.set('isOpen', false, tick.tree.id, this.id);
        this.close(tick);
    };
    /**
     * Wrapper for exit method.
     * @method _exit
     * @param {Tick} tick A tick instance.
     * @protected
     **/
    B3BaseNode.prototype._exit = function (tick) {
        tick.exitNode(this);
        this.exit(tick);
    };
    /**
     * 进入节点是执行的方法，每次运行都会执行
     *
     * @method enter
     * @param {Tick} tick A tick instance.
     **/
    B3BaseNode.prototype.enter = function (tick) { };
    /**
     * 打开节点时运行的方法，只有节点打开时执行
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    B3BaseNode.prototype.open = function (tick) { };
    /**
     * 关闭节点的方法，当节点运行结果不是running时，会执行关闭
     *
     * @method close
     * @param {Tick} tick A tick instance.
     **/
    B3BaseNode.prototype.close = function (tick) { };
    /**
     * 退出节点时执行的方法
     *
     * @method exit
     * @param {Tick} tick A tick instance.
     **/
    B3BaseNode.prototype.exit = function (tick) { };
    return B3BaseNode;
}());
exports.B3BaseNode = B3BaseNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvcmUvQjNCYXNlTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFDMUMsNENBQThDO0FBSTlDO0lBUUksb0JBQVksQ0FBYztRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksb0JBQVUsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVTLCtCQUFVLEdBQXBCLFVBQXFCLElBQVM7SUFFOUIsQ0FBQztJQUVEOzs7OztRQUtJO0lBQ0osNEJBQU8sR0FBUCxVQUFRLElBQVk7UUFDaEIsUUFBUTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsT0FBTztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7UUFFRCxPQUFPO1FBQ1AsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixRQUFRO1FBQ1IsSUFBSSxNQUFNLEtBQUssc0JBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQjtRQUVELE9BQU87UUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7Ozs7UUFLSTtJQUNNLDJCQUFNLEdBQWhCLFVBQWlCLElBQVk7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7UUFLSTtJQUNNLDBCQUFLLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7UUFNSTtJQUNNLDBCQUFLLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7O1FBS0k7SUFDTSwyQkFBTSxHQUFoQixVQUFpQixJQUFZO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUFFLE9BQU87UUFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7UUFLSTtJQUNNLDBCQUFLLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7OztRQUtJO0lBQ0osMEJBQUssR0FBTCxVQUFNLElBQVksSUFBSSxDQUFDO0lBRXZCOzs7O1FBSUk7SUFDSix5QkFBSSxHQUFKLFVBQUssSUFBWSxJQUFJLENBQUM7SUFVdEI7Ozs7O1FBS0k7SUFDSiwwQkFBSyxHQUFMLFVBQU0sSUFBWSxJQUFJLENBQUM7SUFFdkI7Ozs7O1FBS0k7SUFDSix5QkFBSSxHQUFKLFVBQUssSUFBWSxJQUFJLENBQUM7SUFDMUIsaUJBQUM7QUFBRCxDQXJKQSxBQXFKQyxJQUFBO0FBckpxQixnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVVVUlEIH0gZnJvbSBcIi4uL3V0aWxzL0IzVXRpbHNcIjtcbmltcG9ydCB7IElCM05vZGVQcm9wIH0gZnJvbSBcIi4vQjNJTm9kZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuL0IzVGlja1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQjNCYXNlTm9kZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBjYXRlZ29yeTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHByb3BlcnRpZXM6IGFueTtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHBhcmFtZXRlcnM6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihkOiBJQjNOb2RlUHJvcCkge1xuICAgICAgICB0aGlzLmlkID0gZC5pZCB8fCBjcmVhdGVVVUlEKCk7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBkLmNhdGVnb3J5IHx8ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSBkLm5hbWUgfHwgJyc7XG4gICAgICAgIHRoaXMudGl0bGUgPSBkLnRpdGxlIHx8IHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGQuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IGQucHJvcGVydGllcyB8fCB7fTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0ge307XG4gICAgICAgIHRoaXMuX3BhcnNlUHJvcCh0aGlzLnByb3BlcnRpZXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcGFyc2VQcm9wKHByb3A6IGFueSkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+Z5piv5bCGdGlja+S/oeWPt+S8oOaSreWIsOatpOiKgueCueeahOS4u+imgeaWueazlVxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXG4gICAgICogQHJldHVybiB7Q29uc3RhbnR9IFRoZSB0aWNrIHN0YXRlLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiovXG4gICAgZXhlY3V0ZSh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgLy8gRU5URVJcbiAgICAgICAgdGhpcy5fZW50ZXIodGljayk7XG5cbiAgICAgICAgLy8gT1BFTlxuICAgICAgICBpZiAoIXRpY2suYmxhY2tib2FyZC5nZXQoJ2lzT3BlbicsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX29wZW4odGljayk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUSUNLXG4gICAgICAgIHZhciBzdGF0dXMgPSB0aGlzLl90aWNrKHRpY2spO1xuXG4gICAgICAgIC8vIENMT1NFXG4gICAgICAgIGlmIChzdGF0dXMgIT09IEVudW1TdGF0dXMuUlVOTklORykge1xuICAgICAgICAgICAgdGhpcy5fY2xvc2UodGljayk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFWElUXG4gICAgICAgIHRoaXMuX2V4aXQodGljayk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIGZvciBlbnRlciBtZXRob2QuXG4gICAgICogQG1ldGhvZCBfZW50ZXJcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiovXG4gICAgcHJvdGVjdGVkIF9lbnRlcih0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgdGljay5lbnRlck5vZGUodGhpcyk7XG4gICAgICAgIHRoaXMuZW50ZXIodGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JhcHBlciBmb3Igb3BlbiBtZXRob2QuXG4gICAgICogQG1ldGhvZCBfb3BlblxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqKi9cbiAgICBwcm90ZWN0ZWQgX29wZW4odGljazogQjNUaWNrKSB7XG4gICAgICAgIHRpY2sub3Blbk5vZGUodGhpcyk7XG4gICAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ2lzT3BlbicsIHRydWUsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMub3Blbih0aWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIGZvciB0aWNrIG1ldGhvZC5cbiAgICAgKiBAbWV0aG9kIF90aWNrXG4gICAgICogQHBhcmFtIHtUaWNrfSB0aWNrIEEgdGljayBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJuIHtDb25zdGFudH0gQSBzdGF0ZSBjb25zdGFudC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICoqL1xuICAgIHByb3RlY3RlZCBfdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgdGljay50aWNrTm9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGljayh0aWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIGZvciBjbG9zZSBtZXRob2QuXG4gICAgICogQG1ldGhvZCBfY2xvc2VcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiovXG4gICAgcHJvdGVjdGVkIF9jbG9zZSh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgaWYgKCF0aWNrLmJsYWNrYm9hcmQuZ2V0KCdpc09wZW4nLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpKSByZXR1cm47XG4gICAgICAgIHRpY2suY2xvc2VOb2RlKHRoaXMpO1xuICAgICAgICB0aWNrLmJsYWNrYm9hcmQuc2V0KCdpc09wZW4nLCBmYWxzZSwgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jbG9zZSh0aWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIGZvciBleGl0IG1ldGhvZC5cbiAgICAgKiBAbWV0aG9kIF9leGl0XG4gICAgICogQHBhcmFtIHtUaWNrfSB0aWNrIEEgdGljayBpbnN0YW5jZS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICoqL1xuICAgIHByb3RlY3RlZCBfZXhpdCh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgdGljay5leGl0Tm9kZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGl0KHRpY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/m+WFpeiKgueCueaYr+aJp+ihjOeahOaWueazle+8jOavj+asoei/kOihjOmDveS8muaJp+ihjFxuICAgICAqXG4gICAgICogQG1ldGhvZCBlbnRlclxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXG4gICAgICoqL1xuICAgIGVudGVyKHRpY2s6IEIzVGljaykgeyB9XG5cbiAgICAvKipcbiAgICAgKiDmiZPlvIDoioLngrnml7bov5DooYznmoTmlrnms5XvvIzlj6rmnInoioLngrnmiZPlvIDml7bmiafooYxcbiAgICAgKiBAbWV0aG9kIG9wZW5cbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxuICAgICAqKi9cbiAgICBvcGVuKHRpY2s6IEIzVGljaykgeyB9XG5cbiAgICAvKipcbiAgICAgKiDmr4/mrKHmiafooYzoioLngrnnmoTmlrnms5VcbiAgICAgKlxuICAgICAqIEBtZXRob2QgdGlja1xuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXG4gICAgICoqL1xuICAgIGFic3RyYWN0IHRpY2sodGljazogQjNUaWNrKTogRW51bVN0YXR1cztcblxuICAgIC8qKlxuICAgICAqIOWFs+mXreiKgueCueeahOaWueazle+8jOW9k+iKgueCuei/kOihjOe7k+aenOS4jeaYr3J1bm5pbmfml7bvvIzkvJrmiafooYzlhbPpl61cbiAgICAgKlxuICAgICAqIEBtZXRob2QgY2xvc2VcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxuICAgICAqKi9cbiAgICBjbG9zZSh0aWNrOiBCM1RpY2spIHsgfVxuXG4gICAgLyoqXG4gICAgICog6YCA5Ye66IqC54K55pe25omn6KGM55qE5pa55rOVXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGV4aXRcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxuICAgICAqKi9cbiAgICBleGl0KHRpY2s6IEIzVGljaykgeyB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3BehaviorTree.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18d3atiViNI2IiuRVJno/ce', 'B3BehaviorTree');
// libs/behavior3ts/core/B3BehaviorTree.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3BehaviorTree = void 0;
var Constants_1 = require("../Constants");
var B3ActionsClsRegister_1 = require("../register/B3ActionsClsRegister");
var B3CompositesClsRegister_1 = require("../register/B3CompositesClsRegister");
var B3CustomClsRegister_1 = require("../register/B3CustomClsRegister");
var B3DecoratorsClsRegister_1 = require("../register/B3DecoratorsClsRegister");
var B3Utils_1 = require("../utils/B3Utils");
var B3Tick_1 = require("./B3Tick");
var B3BehaviorTree = /** @class */ (function () {
    function B3BehaviorTree(id) {
        this.id = id || B3Utils_1.createUUID();
        this.title = 'The behavior tree';
        this.description = 'Default description';
        this.properties = {};
        this.root = null;
        this.debug = null;
    }
    B3BehaviorTree.prototype.load = function (data, names) {
        names = names || {};
        this.id = data.id || this.id;
        this.title = data.title || this.title;
        this.description = data.description || this.description;
        this.properties = data.properties || this.properties;
        var nodes = {};
        var id, spec, node;
        // Create the node list (without connection between them)
        for (id in data.nodes) {
            spec = data.nodes[id];
            var clsName = spec.name;
            clsName = "B3" + clsName;
            var Cls;
            if (B3CustomClsRegister_1.B3CustomClsRegister[spec.name]) { // 自己定义的节点
                // Look for the name in custom nodes
                Cls = B3CustomClsRegister_1.B3CustomClsRegister[spec.name];
            }
            else if (B3ActionsClsRegister_1.B3ActionsCls[clsName]) {
                Cls = B3ActionsClsRegister_1.B3ActionsCls[clsName];
            }
            else if (B3CompositesClsRegister_1.B3CompositesCls[clsName]) {
                Cls = B3CompositesClsRegister_1.B3CompositesCls[clsName];
            }
            else if (B3DecoratorsClsRegister_1.B3DecoratorsCls[clsName]) {
                Cls = B3DecoratorsClsRegister_1.B3DecoratorsCls[clsName];
            }
            else {
                // Invalid node name
                // throw new EvalError('BehaviorTree.load: Invalid node name + "' +
                //     spec.name + '".');
                console.error('BehaviorTree.load: Invalid node name + "' + spec.name + '".');
                continue;
            }
            node = new Cls(spec);
            nodes[id] = node;
        }
        // Connect the nodes
        for (id in data.nodes) {
            spec = data.nodes[id];
            node = nodes[id];
            if (node.category === Constants_1.EnumCategory.COMPOSITE && spec.children) {
                for (var i = 0; i < spec.children.length; i++) {
                    var cid = spec.children[i];
                    node.children.push(nodes[cid]);
                }
            }
            else if (node.category === Constants_1.EnumCategory.DECORATOR && spec.child) {
                node.child = nodes[spec.child];
            }
        }
        this.nodes = nodes;
        this.root = nodes[data.root];
    };
    /**
     * This method dump the current BT into a data structure.
     *
     * Note: This method does not record the current node parameters. Thus,
     * it may not be compatible with load for now.
     *
     * @method dump
     * @return {Object} A data object representing this tree.
     **/
    B3BehaviorTree.prototype.dump = function () {
        var data = {};
        var customNames = [];
        data.title = this.title;
        data.description = this.description;
        data.root = (this.root) ? this.root.id : null;
        data.properties = this.properties;
        data.nodes = {};
        data.custom_nodes = [];
        if (!this.root)
            return data;
        var stack = [this.root];
        while (stack.length > 0) {
            var node = stack.pop();
            var spec = {};
            spec.id = node.id;
            spec.name = node.name;
            spec.title = node.title;
            spec.description = node.description;
            spec.properties = node.properties;
            spec.parameters = node.parameters;
            // verify custom node
            var proto = (node.constructor && node.constructor.prototype);
            var nodeName = (proto && proto.name) || node.name;
            node.category != Constants_1.EnumCategory.ACTION;
            if (node.category != Constants_1.EnumCategory.ACTION && node.category != Constants_1.EnumCategory.COMPOSITE && node.category != Constants_1.EnumCategory.DECORATOR && customNames.indexOf(nodeName) < 0) {
                var subdata = {};
                subdata.name = nodeName;
                subdata.title = (proto && proto.title) || node.title;
                subdata.category = node.category;
                customNames.push(nodeName);
                data.custom_nodes.push(subdata);
            }
            // store children/child
            if (node.category === Constants_1.EnumCategory.COMPOSITE) {
                var composite = node;
                if (composite.children) {
                    var children = [];
                    for (var i = composite.children.length - 1; i >= 0; i--) {
                        children.push(composite.children[i].id);
                        stack.push(composite.children[i]);
                    }
                    spec.children = children;
                }
            }
            else if (node.category === Constants_1.EnumCategory.DECORATOR && node.child) {
                stack.push(node.child);
                spec.child = node.child.id;
            }
            data.nodes[node.id] = spec;
        }
        return data;
    };
    /**
     * Propagates the tick signal through the tree, starting from the root.
     *
     * This method receives a target object of any type (Object, Array,
     * DOMElement, whatever) and a `Blackboard` instance. The target object has
     * no use at all for all Behavior3JS components, but surely is important
     * for custom nodes. The blackboard instance is used by the tree and nodes
     * to store execution variables (e.g., last node running) and is obligatory
     * to be a `Blackboard` instance (or an object with the same interface).
     *
     * Internally, this method creates a Tick object, which will store the
     * target and the blackboard objects.
     *
     * Note: BehaviorTree stores a list of open nodes from last tick, if these
     * nodes weren't called after the current tick, this method will close them
     * automatically.
     *
     * @method tick
     * @param {Object} target A target object.
     * @param {Blackboard} blackboard An instance of blackboard object.
     * @return {Constant} The tick signal state.
     **/
    B3BehaviorTree.prototype.tick = function (target, blackboard) {
        if (!blackboard) {
            throw 'The blackboard parameter is obligatory and must be an ' +
                'instance of B3Blackboard';
        }
        /* CREATE A TICK OBJECT */
        var tick = new B3Tick_1.B3Tick();
        tick.debug = this.debug;
        tick.target = target;
        tick.blackboard = blackboard;
        tick.tree = this;
        /* TICK NODE */
        var state = this.root.execute(tick);
        /* CLOSE NODES FROM LAST TICK, IF NEEDED */
        var lastOpenNodes = blackboard.get('openNodes', this.id);
        var currOpenNodes = tick.openNodes.slice(0);
        // does not close if it is still open in this tick
        var start = 0;
        for (var i = 0, len = Math.min(lastOpenNodes.length, currOpenNodes.length); i < len; i++) {
            if (lastOpenNodes[i] !== currOpenNodes[i]) {
                start = i;
                break;
            }
            start = i + 1;
        }
        // close the nodes
        for (var i = lastOpenNodes.length - 1; i >= start; i--) {
            var node = this.nodes[lastOpenNodes[i]];
            node && node._close(tick);
        }
        /* POPULATE BLACKBOARD */
        blackboard.set('openNodes', currOpenNodes, this.id);
        blackboard.set('nodeCount', tick.nodeCount, this.id);
        return state;
    };
    return B3BehaviorTree;
}());
exports.B3BehaviorTree = B3BehaviorTree;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2JlaGF2aW9yM3RzL2NvcmUvQjNCZWhhdmlvclRyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTRDO0FBQzVDLHlFQUFnRTtBQUNoRSwrRUFBc0U7QUFDdEUsdUVBQXNFO0FBQ3RFLCtFQUFzRTtBQUN0RSw0Q0FBOEM7QUFJOUMsbUNBQWtDO0FBRWxDO0lBUUksd0JBQVksRUFBVztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxvQkFBVSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssSUFBSSxFQUFFLEtBQUs7UUFDWixLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVyRCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ25CLHlEQUF5RDtRQUN6RCxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ25CLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDdkIsT0FBTyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUE7WUFDeEIsSUFBSSxHQUFHLENBQUM7WUFDUixJQUFJLHlDQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFVBQVU7Z0JBQzVDLG9DQUFvQztnQkFDcEMsR0FBRyxHQUFHLHlDQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QztpQkFBTSxJQUFJLG1DQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzlCLEdBQUcsR0FBRyxtQ0FBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQzlCO2lCQUFNLElBQUkseUNBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakMsR0FBRyxHQUFHLHlDQUFlLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDakM7aUJBQU0sSUFBSSx5Q0FBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQyxHQUFHLEdBQUcseUNBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNsQztpQkFBTTtnQkFDSCxvQkFBb0I7Z0JBQ3BCLG1FQUFtRTtnQkFDbkUseUJBQXlCO2dCQUV6QixPQUFPLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUE7Z0JBQzVFLFNBQVE7YUFDWDtZQUVELElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVyQixLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO1FBRUQsb0JBQW9CO1FBQ3BCLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEIsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVqQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssd0JBQVksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDM0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMzQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDbEM7YUFDSjtpQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssd0JBQVksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7Ozs7OztRQVFJO0lBQ0osNkJBQUksR0FBSjtRQUNJLElBQUksSUFBSSxHQUFRLEVBQUUsQ0FBQztRQUNuQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUU1QixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxHQUFlLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVuQyxJQUFJLElBQUksR0FBUSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFFbEMscUJBQXFCO1lBQ3JCLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdELElBQUksUUFBUSxHQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2xELElBQUksQ0FBQyxRQUFRLElBQUksd0JBQVksQ0FBQyxNQUFNLENBQUE7WUFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLHdCQUFZLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksd0JBQVksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSx3QkFBWSxDQUFDLFNBQVMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDakssSUFBSSxPQUFPLEdBQVEsRUFBRSxDQUFDO2dCQUN0QixPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDckQsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUVqQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQztZQUVELHVCQUF1QjtZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssd0JBQVksQ0FBQyxTQUFTLEVBQUU7Z0JBQzFDLElBQUksU0FBUyxHQUFnQixJQUFJLENBQUM7Z0JBQ2xDLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtvQkFDcEIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUNyRCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3hDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyQztvQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztpQkFDNUI7YUFDSjtpQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssd0JBQVksQ0FBQyxTQUFTLElBQWtCLElBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQzlFLEtBQUssQ0FBQyxJQUFJLENBQWUsSUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFpQixJQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzthQUM3QztZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUM5QjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBcUJJO0lBQ0osNkJBQUksR0FBSixVQUFLLE1BQU0sRUFBRSxVQUFVO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDYixNQUFNLHdEQUF3RDtnQkFDOUQsMEJBQTBCLENBQUM7U0FDOUI7UUFFRCwwQkFBMEI7UUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsZUFBZTtRQUNmLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBDLDJDQUEyQztRQUMzQyxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUMsa0RBQWtEO1FBQ2xELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEYsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNWLE1BQU07YUFDVDtZQUNELEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsa0JBQWtCO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwRCxJQUFJLElBQUksR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO1FBRUQseUJBQXlCO1FBQ3pCLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFckQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0EvTUEsQUErTUMsSUFBQTtBQS9NWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1DYXRlZ29yeSB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQWN0aW9uc0NscyB9IGZyb20gXCIuLi9yZWdpc3Rlci9CM0FjdGlvbnNDbHNSZWdpc3RlclwiO1xuaW1wb3J0IHsgQjNDb21wb3NpdGVzQ2xzIH0gZnJvbSBcIi4uL3JlZ2lzdGVyL0IzQ29tcG9zaXRlc0Nsc1JlZ2lzdGVyXCI7XG5pbXBvcnQgeyBCM0N1c3RvbUNsc1JlZ2lzdGVyIH0gZnJvbSBcIi4uL3JlZ2lzdGVyL0IzQ3VzdG9tQ2xzUmVnaXN0ZXJcIjtcbmltcG9ydCB7IEIzRGVjb3JhdG9yc0NscyB9IGZyb20gXCIuLi9yZWdpc3Rlci9CM0RlY29yYXRvcnNDbHNSZWdpc3RlclwiO1xuaW1wb3J0IHsgY3JlYXRlVVVJRCB9IGZyb20gXCIuLi91dGlscy9CM1V0aWxzXCI7XG5pbXBvcnQgeyBCM0Jhc2VOb2RlIH0gZnJvbSBcIi4vQjNCYXNlTm9kZVwiO1xuaW1wb3J0IHsgQjNDb21wb3NpdGUgfSBmcm9tIFwiLi9CM0NvbXBvc2l0ZVwiO1xuaW1wb3J0IHsgQjNEZWNvcmF0b3IgfSBmcm9tIFwiLi9CM0RlY29yYXRvclwiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4vQjNUaWNrXCI7XG5cbmV4cG9ydCBjbGFzcyBCM0JlaGF2aW9yVHJlZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcHJvcGVydGllczogYW55O1xuICAgIHJvb3Q6IEIzQmFzZU5vZGU7XG4gICAgZGVidWc6IGFueTtcbiAgICBub2RlczogeyBbaWQ6IHN0cmluZ106IEIzQmFzZU5vZGUgfTtcbiAgICBjb25zdHJ1Y3RvcihpZD86IHN0cmluZykge1xuICAgICAgICB0aGlzLmlkID0gaWQgfHwgY3JlYXRlVVVJRCgpO1xuICAgICAgICB0aGlzLnRpdGxlID0gJ1RoZSBiZWhhdmlvciB0cmVlJztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICdEZWZhdWx0IGRlc2NyaXB0aW9uJztcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0ge307XG4gICAgICAgIHRoaXMucm9vdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGVidWcgPSBudWxsO1xuICAgIH1cblxuICAgIGxvYWQoZGF0YSwgbmFtZXMpIHtcbiAgICAgICAgbmFtZXMgPSBuYW1lcyB8fCB7fTtcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgdGhpcy5pZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGUgfHwgdGhpcy50aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3JpcHRpb24gfHwgdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gZGF0YS5wcm9wZXJ0aWVzIHx8IHRoaXMucHJvcGVydGllcztcblxuICAgICAgICB2YXIgbm9kZXMgPSB7fTtcbiAgICAgICAgdmFyIGlkLCBzcGVjLCBub2RlO1xuICAgICAgICAvLyBDcmVhdGUgdGhlIG5vZGUgbGlzdCAod2l0aG91dCBjb25uZWN0aW9uIGJldHdlZW4gdGhlbSlcbiAgICAgICAgZm9yIChpZCBpbiBkYXRhLm5vZGVzKSB7XG4gICAgICAgICAgICBzcGVjID0gZGF0YS5ub2Rlc1tpZF07XG4gICAgICAgICAgICBsZXQgY2xzTmFtZSA9IHNwZWMubmFtZVxuICAgICAgICAgICAgY2xzTmFtZSA9IFwiQjNcIiArIGNsc05hbWVcbiAgICAgICAgICAgIHZhciBDbHM7XG4gICAgICAgICAgICBpZiAoQjNDdXN0b21DbHNSZWdpc3RlcltzcGVjLm5hbWVdKSB7IC8vIOiHquW3seWumuS5ieeahOiKgueCuVxuICAgICAgICAgICAgICAgIC8vIExvb2sgZm9yIHRoZSBuYW1lIGluIGN1c3RvbSBub2Rlc1xuICAgICAgICAgICAgICAgIENscyA9IEIzQ3VzdG9tQ2xzUmVnaXN0ZXJbc3BlYy5uYW1lXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQjNBY3Rpb25zQ2xzW2Nsc05hbWVdKSB7XG4gICAgICAgICAgICAgICAgQ2xzID0gQjNBY3Rpb25zQ2xzW2Nsc05hbWVdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEIzQ29tcG9zaXRlc0Nsc1tjbHNOYW1lXSkge1xuICAgICAgICAgICAgICAgIENscyA9IEIzQ29tcG9zaXRlc0Nsc1tjbHNOYW1lXVxuICAgICAgICAgICAgfSBlbHNlIGlmIChCM0RlY29yYXRvcnNDbHNbY2xzTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBDbHMgPSBCM0RlY29yYXRvcnNDbHNbY2xzTmFtZV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEludmFsaWQgbm9kZSBuYW1lXG4gICAgICAgICAgICAgICAgLy8gdGhyb3cgbmV3IEV2YWxFcnJvcignQmVoYXZpb3JUcmVlLmxvYWQ6IEludmFsaWQgbm9kZSBuYW1lICsgXCInICtcbiAgICAgICAgICAgICAgICAvLyAgICAgc3BlYy5uYW1lICsgJ1wiLicpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQmVoYXZpb3JUcmVlLmxvYWQ6IEludmFsaWQgbm9kZSBuYW1lICsgXCInICsgc3BlYy5uYW1lICsgJ1wiLicpXG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZSA9IG5ldyBDbHMoc3BlYyk7XG5cbiAgICAgICAgICAgIG5vZGVzW2lkXSA9IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb25uZWN0IHRoZSBub2Rlc1xuICAgICAgICBmb3IgKGlkIGluIGRhdGEubm9kZXMpIHtcbiAgICAgICAgICAgIHNwZWMgPSBkYXRhLm5vZGVzW2lkXTtcbiAgICAgICAgICAgIG5vZGUgPSBub2Rlc1tpZF07XG5cbiAgICAgICAgICAgIGlmIChub2RlLmNhdGVnb3J5ID09PSBFbnVtQ2F0ZWdvcnkuQ09NUE9TSVRFICYmIHNwZWMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwZWMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNpZCA9IHNwZWMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChub2Rlc1tjaWRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUuY2F0ZWdvcnkgPT09IEVudW1DYXRlZ29yeS5ERUNPUkFUT1IgJiYgc3BlYy5jaGlsZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuY2hpbGQgPSBub2Rlc1tzcGVjLmNoaWxkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgICAgIHRoaXMucm9vdCA9IG5vZGVzW2RhdGEucm9vdF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgZHVtcCB0aGUgY3VycmVudCBCVCBpbnRvIGEgZGF0YSBzdHJ1Y3R1cmUuXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIG1ldGhvZCBkb2VzIG5vdCByZWNvcmQgdGhlIGN1cnJlbnQgbm9kZSBwYXJhbWV0ZXJzLiBUaHVzLFxuICAgICAqIGl0IG1heSBub3QgYmUgY29tcGF0aWJsZSB3aXRoIGxvYWQgZm9yIG5vdy5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZHVtcFxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQSBkYXRhIG9iamVjdCByZXByZXNlbnRpbmcgdGhpcyB0cmVlLlxuICAgICAqKi9cbiAgICBkdW1wKCkge1xuICAgICAgICB2YXIgZGF0YTogYW55ID0ge307XG4gICAgICAgIHZhciBjdXN0b21OYW1lcyA9IFtdO1xuXG4gICAgICAgIGRhdGEudGl0bGUgPSB0aGlzLnRpdGxlO1xuICAgICAgICBkYXRhLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGF0YS5yb290ID0gKHRoaXMucm9vdCkgPyB0aGlzLnJvb3QuaWQgOiBudWxsO1xuICAgICAgICBkYXRhLnByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICAgIGRhdGEubm9kZXMgPSB7fTtcbiAgICAgICAgZGF0YS5jdXN0b21fbm9kZXMgPSBbXTtcblxuICAgICAgICBpZiAoIXRoaXMucm9vdCkgcmV0dXJuIGRhdGE7XG5cbiAgICAgICAgdmFyIHN0YWNrID0gW3RoaXMucm9vdF07XG4gICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgbm9kZTogQjNCYXNlTm9kZSA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgICAgICB2YXIgc3BlYzogYW55ID0ge307XG4gICAgICAgICAgICBzcGVjLmlkID0gbm9kZS5pZDtcbiAgICAgICAgICAgIHNwZWMubmFtZSA9IG5vZGUubmFtZTtcbiAgICAgICAgICAgIHNwZWMudGl0bGUgPSBub2RlLnRpdGxlO1xuICAgICAgICAgICAgc3BlYy5kZXNjcmlwdGlvbiA9IG5vZGUuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBzcGVjLnByb3BlcnRpZXMgPSBub2RlLnByb3BlcnRpZXM7XG4gICAgICAgICAgICBzcGVjLnBhcmFtZXRlcnMgPSBub2RlLnBhcmFtZXRlcnM7XG5cbiAgICAgICAgICAgIC8vIHZlcmlmeSBjdXN0b20gbm9kZVxuICAgICAgICAgICAgdmFyIHByb3RvID0gKG5vZGUuY29uc3RydWN0b3IgJiYgbm9kZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuICAgICAgICAgICAgdmFyIG5vZGVOYW1lID0gKHByb3RvICYmIHByb3RvLm5hbWUpIHx8IG5vZGUubmFtZTtcbiAgICAgICAgICAgIG5vZGUuY2F0ZWdvcnkgIT0gRW51bUNhdGVnb3J5LkFDVElPTlxuICAgICAgICAgICAgaWYgKG5vZGUuY2F0ZWdvcnkgIT0gRW51bUNhdGVnb3J5LkFDVElPTiAmJiBub2RlLmNhdGVnb3J5ICE9IEVudW1DYXRlZ29yeS5DT01QT1NJVEUgJiYgbm9kZS5jYXRlZ29yeSAhPSBFbnVtQ2F0ZWdvcnkuREVDT1JBVE9SICYmIGN1c3RvbU5hbWVzLmluZGV4T2Yobm9kZU5hbWUpIDwgMCkge1xuICAgICAgICAgICAgICAgIHZhciBzdWJkYXRhOiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgICBzdWJkYXRhLm5hbWUgPSBub2RlTmFtZTtcbiAgICAgICAgICAgICAgICBzdWJkYXRhLnRpdGxlID0gKHByb3RvICYmIHByb3RvLnRpdGxlKSB8fCBub2RlLnRpdGxlO1xuICAgICAgICAgICAgICAgIHN1YmRhdGEuY2F0ZWdvcnkgPSBub2RlLmNhdGVnb3J5O1xuXG4gICAgICAgICAgICAgICAgY3VzdG9tTmFtZXMucHVzaChub2RlTmFtZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5jdXN0b21fbm9kZXMucHVzaChzdWJkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3RvcmUgY2hpbGRyZW4vY2hpbGRcbiAgICAgICAgICAgIGlmIChub2RlLmNhdGVnb3J5ID09PSBFbnVtQ2F0ZWdvcnkuQ09NUE9TSVRFKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvc2l0ZSA9IDxCM0NvbXBvc2l0ZT5ub2RlO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb3NpdGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBjb21wb3NpdGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY29tcG9zaXRlLmNoaWxkcmVuW2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY29tcG9zaXRlLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGVjLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLmNhdGVnb3J5ID09PSBFbnVtQ2F0ZWdvcnkuREVDT1JBVE9SICYmICg8QjNEZWNvcmF0b3I+bm9kZSkuY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKCg8QjNEZWNvcmF0b3I+bm9kZSkuY2hpbGQpO1xuICAgICAgICAgICAgICAgIHNwZWMuY2hpbGQgPSAoPEIzRGVjb3JhdG9yPm5vZGUpLmNoaWxkLmlkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRhLm5vZGVzW25vZGUuaWRdID0gc3BlYztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3BhZ2F0ZXMgdGhlIHRpY2sgc2lnbmFsIHRocm91Z2ggdGhlIHRyZWUsIHN0YXJ0aW5nIGZyb20gdGhlIHJvb3QuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCByZWNlaXZlcyBhIHRhcmdldCBvYmplY3Qgb2YgYW55IHR5cGUgKE9iamVjdCwgQXJyYXksXG4gICAgICogRE9NRWxlbWVudCwgd2hhdGV2ZXIpIGFuZCBhIGBCbGFja2JvYXJkYCBpbnN0YW5jZS4gVGhlIHRhcmdldCBvYmplY3QgaGFzXG4gICAgICogbm8gdXNlIGF0IGFsbCBmb3IgYWxsIEJlaGF2aW9yM0pTIGNvbXBvbmVudHMsIGJ1dCBzdXJlbHkgaXMgaW1wb3J0YW50XG4gICAgICogZm9yIGN1c3RvbSBub2Rlcy4gVGhlIGJsYWNrYm9hcmQgaW5zdGFuY2UgaXMgdXNlZCBieSB0aGUgdHJlZSBhbmQgbm9kZXNcbiAgICAgKiB0byBzdG9yZSBleGVjdXRpb24gdmFyaWFibGVzIChlLmcuLCBsYXN0IG5vZGUgcnVubmluZykgYW5kIGlzIG9ibGlnYXRvcnlcbiAgICAgKiB0byBiZSBhIGBCbGFja2JvYXJkYCBpbnN0YW5jZSAob3IgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgaW50ZXJmYWNlKS5cbiAgICAgKlxuICAgICAqIEludGVybmFsbHksIHRoaXMgbWV0aG9kIGNyZWF0ZXMgYSBUaWNrIG9iamVjdCwgd2hpY2ggd2lsbCBzdG9yZSB0aGVcbiAgICAgKiB0YXJnZXQgYW5kIHRoZSBibGFja2JvYXJkIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBOb3RlOiBCZWhhdmlvclRyZWUgc3RvcmVzIGEgbGlzdCBvZiBvcGVuIG5vZGVzIGZyb20gbGFzdCB0aWNrLCBpZiB0aGVzZVxuICAgICAqIG5vZGVzIHdlcmVuJ3QgY2FsbGVkIGFmdGVyIHRoZSBjdXJyZW50IHRpY2ssIHRoaXMgbWV0aG9kIHdpbGwgY2xvc2UgdGhlbVxuICAgICAqIGF1dG9tYXRpY2FsbHkuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHRpY2tcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IEEgdGFyZ2V0IG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge0JsYWNrYm9hcmR9IGJsYWNrYm9hcmQgQW4gaW5zdGFuY2Ugb2YgYmxhY2tib2FyZCBvYmplY3QuXG4gICAgICogQHJldHVybiB7Q29uc3RhbnR9IFRoZSB0aWNrIHNpZ25hbCBzdGF0ZS5cbiAgICAgKiovXG4gICAgdGljayh0YXJnZXQsIGJsYWNrYm9hcmQpIHtcbiAgICAgICAgaWYgKCFibGFja2JvYXJkKSB7XG4gICAgICAgICAgICB0aHJvdyAnVGhlIGJsYWNrYm9hcmQgcGFyYW1ldGVyIGlzIG9ibGlnYXRvcnkgYW5kIG11c3QgYmUgYW4gJyArXG4gICAgICAgICAgICAnaW5zdGFuY2Ugb2YgQjNCbGFja2JvYXJkJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENSRUFURSBBIFRJQ0sgT0JKRUNUICovXG4gICAgICAgIHZhciB0aWNrID0gbmV3IEIzVGljaygpO1xuICAgICAgICB0aWNrLmRlYnVnID0gdGhpcy5kZWJ1ZztcbiAgICAgICAgdGljay50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRpY2suYmxhY2tib2FyZCA9IGJsYWNrYm9hcmQ7XG4gICAgICAgIHRpY2sudHJlZSA9IHRoaXM7XG5cbiAgICAgICAgLyogVElDSyBOT0RFICovXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMucm9vdC5leGVjdXRlKHRpY2spO1xuXG4gICAgICAgIC8qIENMT1NFIE5PREVTIEZST00gTEFTVCBUSUNLLCBJRiBORUVERUQgKi9cbiAgICAgICAgdmFyIGxhc3RPcGVuTm9kZXMgPSBibGFja2JvYXJkLmdldCgnb3Blbk5vZGVzJywgdGhpcy5pZCk7XG4gICAgICAgIHZhciBjdXJyT3Blbk5vZGVzID0gdGljay5vcGVuTm9kZXMuc2xpY2UoMCk7XG5cbiAgICAgICAgLy8gZG9lcyBub3QgY2xvc2UgaWYgaXQgaXMgc3RpbGwgb3BlbiBpbiB0aGlzIHRpY2tcbiAgICAgICAgdmFyIHN0YXJ0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1hdGgubWluKGxhc3RPcGVuTm9kZXMubGVuZ3RoLCBjdXJyT3Blbk5vZGVzLmxlbmd0aCk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGxhc3RPcGVuTm9kZXNbaV0gIT09IGN1cnJPcGVuTm9kZXNbaV0pIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xvc2UgdGhlIG5vZGVzXG4gICAgICAgIGZvciAobGV0IGkgPSBsYXN0T3Blbk5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gc3RhcnQ7IGktLSkge1xuICAgICAgICAgICAgbGV0IG5vZGU6IGFueSA9IHRoaXMubm9kZXNbbGFzdE9wZW5Ob2Rlc1tpXV07XG4gICAgICAgICAgICBub2RlICYmIG5vZGUuX2Nsb3NlKHRpY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogUE9QVUxBVEUgQkxBQ0tCT0FSRCAqL1xuICAgICAgICBibGFja2JvYXJkLnNldCgnb3Blbk5vZGVzJywgY3Vyck9wZW5Ob2RlcywgdGhpcy5pZCk7XG4gICAgICAgIGJsYWNrYm9hcmQuc2V0KCdub2RlQ291bnQnLCB0aWNrLm5vZGVDb3VudCwgdGhpcy5pZCk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3Condition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da5e9QBm8dLK6Sc1Z1LMwb3', 'B3Condition');
// libs/behavior3ts/core/B3Condition.ts

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
exports.B3Condition = void 0;
var Constants_1 = require("../Constants");
var B3BaseNode_1 = require("./B3BaseNode");
var B3Condition = /** @class */ (function (_super) {
    __extends(B3Condition, _super);
    function B3Condition(d) {
        var _this = this;
        d.category = Constants_1.EnumCategory.CONDITION;
        _this = _super.call(this, d) || this;
        return _this;
    }
    return B3Condition;
}(B3BaseNode_1.B3BaseNode));
exports.B3Condition = B3Condition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2JlaGF2aW9yM3RzL2NvcmUvQjNDb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUE0QztBQUM1QywyQ0FBMEM7QUFHdEM7SUFBMEMsK0JBQVU7SUFDaEQscUJBQVksQ0FBYztRQUExQixpQkFHQztRQUZHLENBQUMsQ0FBQyxRQUFRLEdBQUcsd0JBQVksQ0FBQyxTQUFTLENBQUM7UUFDcEMsUUFBQSxrQkFBTSxDQUFDLENBQUMsU0FBQzs7SUFDYixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMeUMsdUJBQVUsR0FLbkQ7QUFMcUIsa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnVtQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCM0Jhc2VOb2RlIH0gZnJvbSBcIi4vQjNCYXNlTm9kZVwiO1xuaW1wb3J0IHsgSUIzTm9kZVByb3AgfSBmcm9tIFwiLi9CM0lOb2RlUHJvcGVydGllc1wiO1xuXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEIzQ29uZGl0aW9uIGV4dGVuZHMgQjNCYXNlTm9kZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGQ6IElCM05vZGVQcm9wKSB7XG4gICAgICAgICAgICBkLmNhdGVnb3J5ID0gRW51bUNhdGVnb3J5LkNPTkRJVElPTjtcbiAgICAgICAgICAgIHN1cGVyKGQpO1xuICAgICAgICB9XG4gICAgfSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3Composite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5ea63MDaBEK5soWfrRowhx', 'B3Composite');
// libs/b3/core/B3Composite.ts

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
exports.B3Composite = void 0;
var Constants_1 = require("../Constants");
var B3BaseNode_1 = require("./B3BaseNode");
var B3Composite = /** @class */ (function (_super) {
    __extends(B3Composite, _super);
    function B3Composite(d) {
        var _this = this;
        d.category = Constants_1.EnumCategory.COMPOSITE;
        _this = _super.call(this, d) || this;
        _this.children = [];
        return _this;
    }
    return B3Composite;
}(B3BaseNode_1.B3BaseNode));
exports.B3Composite = B3Composite;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvcmUvQjNDb21wb3NpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUE0QztBQUM1QywyQ0FBMEM7QUFHdEM7SUFBMEMsK0JBQVU7SUFFaEQscUJBQVksQ0FBbUI7UUFBL0IsaUJBSUM7UUFIRyxDQUFDLENBQUMsUUFBUSxHQUFHLHdCQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3BDLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7UUFDVCxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7SUFDdkIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FQQSxBQU9DLENBUHlDLHVCQUFVLEdBT25EO0FBUHFCLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bUNhdGVnb3J5IH0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQjNCYXNlTm9kZSB9IGZyb20gXCIuL0IzQmFzZU5vZGVcIjtcbmltcG9ydCB7IElCM0NvbXBvc2l0ZVByb3AgfSBmcm9tIFwiLi9CM0lOb2RlUHJvcGVydGllc1wiO1xuXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEIzQ29tcG9zaXRlIGV4dGVuZHMgQjNCYXNlTm9kZSB7XG4gICAgICAgIGNoaWxkcmVuOiBCM0Jhc2VOb2RlW107XG4gICAgICAgIGNvbnN0cnVjdG9yKGQ6IElCM0NvbXBvc2l0ZVByb3ApIHtcbiAgICAgICAgICAgIGQuY2F0ZWdvcnkgPSBFbnVtQ2F0ZWdvcnkuQ09NUE9TSVRFO1xuICAgICAgICAgICAgc3VwZXIoZCk7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIH1cbiAgICB9Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3INodeProperties.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6a68sI5qxJar0VG1n36YzC', 'B3INodeProperties');
// libs/b3/core/B3INodeProperties.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvcmUvQjNJTm9kZVByb3BlcnRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEIzQmFzZU5vZGUgfSBmcm9tIFwiLi9CM0Jhc2VOb2RlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUIzTm9kZVByb3Age1xuICAgIGlkPzpzdHJpbmc7XG4gICAgLyoq57G75YirICovXG4gICAgY2F0ZWdvcnk/OiBzdHJpbmcsXG4gICAgbmFtZT86IHN0cmluZyxcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBwcm9wZXJ0aWVzPzogYW55O1xufVxuXG5leHBvcnQgIGludGVyZmFjZSBJQjNDb21wb3NpdGVQcm9wIGV4dGVuZHMgSUIzTm9kZVByb3Age1xuICAgIGNoaWxkcmVuOiBCM0Jhc2VOb2RlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUIzRGVjb3JhdG9yUHJvcCBleHRlbmRzIElCM05vZGVQcm9we1xuICAgIGNoaWxkOkIzQmFzZU5vZGU7XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3Decorator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaa24ax83JCvozuBvRpp7zm', 'B3Decorator');
// libs/b3/core/B3Decorator.ts

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
exports.B3Decorator = void 0;
var Constants_1 = require("../Constants");
var B3BaseNode_1 = require("./B3BaseNode");
var B3Decorator = /** @class */ (function (_super) {
    __extends(B3Decorator, _super);
    function B3Decorator(d) {
        var _this = this;
        d.category = Constants_1.EnumCategory.DECORATOR;
        _this = _super.call(this, d) || this;
        _this.child = d.child;
        return _this;
    }
    return B3Decorator;
}(B3BaseNode_1.B3BaseNode));
exports.B3Decorator = B3Decorator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvcmUvQjNEZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUE0QztBQUM1QywyQ0FBMEM7QUFHdEM7SUFBMEMsK0JBQVU7SUFFaEQscUJBQVksQ0FBbUI7UUFBL0IsaUJBSUM7UUFIRyxDQUFDLENBQUMsUUFBUSxHQUFHLHdCQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3BDLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7UUFDVCxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7O0lBQ3pCLENBQUM7SUFDTCxrQkFBQztBQUFELENBUEEsQUFPQyxDQVB5Qyx1QkFBVSxHQU9uRDtBQVBxQixrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1DYXRlZ29yeSB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQmFzZU5vZGUgfSBmcm9tIFwiLi9CM0Jhc2VOb2RlXCI7XG5pbXBvcnQgeyBJQjNEZWNvcmF0b3JQcm9wIH0gZnJvbSBcIi4vQjNJTm9kZVByb3BlcnRpZXNcIjtcblxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCM0RlY29yYXRvciBleHRlbmRzIEIzQmFzZU5vZGUge1xuICAgICAgICBjaGlsZDogQjNCYXNlTm9kZTtcbiAgICAgICAgY29uc3RydWN0b3IoZDogSUIzRGVjb3JhdG9yUHJvcCkge1xuICAgICAgICAgICAgZC5jYXRlZ29yeSA9IEVudW1DYXRlZ29yeS5ERUNPUkFUT1I7XG4gICAgICAgICAgICBzdXBlcihkKTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGQgPSBkLmNoaWxkO1xuICAgICAgICB9XG4gICAgfSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3Tick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '155ffn0s3FHCJ1JNS9KU1mY', 'B3Tick');
// libs/b3/core/B3Tick.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3Tick = void 0;
var B3Tick = /** @class */ (function () {
    function B3Tick() {
        this.tree = null;
        this.debug = null;
        this.target = null;
        this.blackboard = null;
        this._openNodes = [];
        this._nodeCount = 0;
    }
    Object.defineProperty(B3Tick.prototype, "openNodes", {
        get: function () { return this._openNodes; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(B3Tick.prototype, "nodeCount", {
        get: function () { return this._nodeCount; },
        enumerable: false,
        configurable: true
    });
    /**
     * node执行enter时候会调用
     * @param node 发起调用的Node.
     **/
    B3Tick.prototype.enterNode = function (node) {
        this._nodeCount++;
        this._openNodes.push(node.id);
        // TODO: call debug here
    };
    /**
     * node执行openNode时执行这个方法
     * @param node
     **/
    B3Tick.prototype.openNode = function (node) {
        // TODO: call debug here
    };
    /**
     * node执行tick时候会调用
     * @param node
     **/
    B3Tick.prototype.tickNode = function (node) {
        // TODO: call debug here
    };
    /**
     * node执行close时候会调用
     * @param node
     **/
    B3Tick.prototype.closeNode = function (node) {
        // TODO: call debug here
        this._openNodes.pop();
    };
    /**
     * node执行exit时候会调用
     * @param node
     **/
    B3Tick.prototype.exitNode = function (node) {
        // TODO: call debug here
    };
    return B3Tick;
}());
exports.B3Tick = B3Tick;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvcmUvQjNUaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFO0lBT0U7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQUksNkJBQVM7YUFBYixjQUFrQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUMzQyxzQkFBSSw2QkFBUzthQUFiLGNBQWtCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzNDOzs7UUFHSTtJQUNKLDBCQUFTLEdBQVQsVUFBVSxJQUFlO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFOUIsd0JBQXdCO0lBQzFCLENBQUM7SUFFRDs7O1FBR0k7SUFDSix5QkFBUSxHQUFSLFVBQVMsSUFBZTtRQUN0Qix3QkFBd0I7SUFDMUIsQ0FBQztJQUVEOzs7UUFHSTtJQUNKLHlCQUFRLEdBQVIsVUFBUyxJQUFlO1FBQ3RCLHdCQUF3QjtJQUMxQixDQUFDO0lBRUQ7OztRQUdJO0lBQ0osMEJBQVMsR0FBVCxVQUFVLElBQWU7UUFDdkIsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7UUFHSTtJQUNKLHlCQUFRLEdBQVIsVUFBUyxJQUFlO1FBQ3RCLHdCQUF3QjtJQUMxQixDQUFDO0lBQ0gsYUFBQztBQUFELENBN0RBLEFBNkRDLElBQUE7QUE3RFksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCM0Jhc2VOb2RlIH0gZnJvbSBcIi4vQjNCYXNlTm9kZVwiO1xuaW1wb3J0IHsgQjNCbGFja2JvYXJkIH0gZnJvbSBcIi4vQjNCbGFja2JvYXJkXCI7XG5cbiAgZXhwb3J0IGNsYXNzIEIzVGljazxUYXJnZXQgPSBhbnk+IHtcbiAgICB0cmVlOiBhbnk7XG4gICAgZGVidWc6IGFueTtcbiAgICB0YXJnZXQ6IFRhcmdldDtcbiAgICBibGFja2JvYXJkOiBCM0JsYWNrYm9hcmQ7XG4gICAgcHJpdmF0ZSBfb3Blbk5vZGVzOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIF9ub2RlQ291bnQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMudHJlZSA9IG51bGw7XG4gICAgICB0aGlzLmRlYnVnID0gbnVsbDtcbiAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgIHRoaXMuYmxhY2tib2FyZCA9IG51bGw7XG4gICAgICB0aGlzLl9vcGVuTm9kZXMgPSBbXTtcbiAgICAgIHRoaXMuX25vZGVDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgZ2V0IG9wZW5Ob2RlcygpIHsgcmV0dXJuIHRoaXMuX29wZW5Ob2RlczsgfVxuICAgIGdldCBub2RlQ291bnQoKSB7IHJldHVybiB0aGlzLl9ub2RlQ291bnQ7IH1cbiAgICAvKipcbiAgICAgKiBub2Rl5omn6KGMZW50ZXLml7blgJnkvJrosIPnlKhcbiAgICAgKiBAcGFyYW0gbm9kZSDlj5HotbfosIPnlKjnmoROb2RlLlxuICAgICAqKi9cbiAgICBlbnRlck5vZGUobm9kZTpCM0Jhc2VOb2RlKSB7XG4gICAgICB0aGlzLl9ub2RlQ291bnQrKztcbiAgICAgIHRoaXMuX29wZW5Ob2Rlcy5wdXNoKG5vZGUuaWQpO1xuXG4gICAgICAvLyBUT0RPOiBjYWxsIGRlYnVnIGhlcmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBub2Rl5omn6KGMb3Blbk5vZGXml7bmiafooYzov5nkuKrmlrnms5VcbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqKi9cbiAgICBvcGVuTm9kZShub2RlOkIzQmFzZU5vZGUpIHtcbiAgICAgIC8vIFRPRE86IGNhbGwgZGVidWcgaGVyZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG5vZGXmiafooYx0aWNr5pe25YCZ5Lya6LCD55SoXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKiovXG4gICAgdGlja05vZGUobm9kZTpCM0Jhc2VOb2RlKSB7XG4gICAgICAvLyBUT0RPOiBjYWxsIGRlYnVnIGhlcmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBub2Rl5omn6KGMY2xvc2Xml7blgJnkvJrosIPnlKhcbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqKi9cbiAgICBjbG9zZU5vZGUobm9kZTpCM0Jhc2VOb2RlKSB7XG4gICAgICAvLyBUT0RPOiBjYWxsIGRlYnVnIGhlcmVcbiAgICAgIHRoaXMuX29wZW5Ob2Rlcy5wb3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBub2Rl5omn6KGMZXhpdOaXtuWAmeS8muiwg+eUqFxuICAgICAqIEBwYXJhbSBub2RlXG4gICAgICoqL1xuICAgIGV4aXROb2RlKG5vZGU6QjNCYXNlTm9kZSkge1xuICAgICAgLy8gVE9ETzogY2FsbCBkZWJ1ZyBoZXJlXG4gICAgfVxuICB9Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3Action.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1c1cCmPu1Me4asyZFrhWEL', 'B3Action');
// libs/behavior3ts/core/B3Action.ts

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
exports.B3Action = void 0;
var Constants_1 = require("../Constants");
var B3BaseNode_1 = require("./B3BaseNode");
var B3Action = /** @class */ (function (_super) {
    __extends(B3Action, _super);
    function B3Action(d) {
        var _this = this;
        d.category = Constants_1.EnumCategory.ACTION;
        _this = _super.call(this, d) || this;
        return _this;
    }
    return B3Action;
}(B3BaseNode_1.B3BaseNode));
exports.B3Action = B3Action;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2JlaGF2aW9yM3RzL2NvcmUvQjNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUE0QztBQUM1QywyQ0FBMEM7QUFHMUM7SUFBdUMsNEJBQVU7SUFDN0Msa0JBQVksQ0FBYztRQUExQixpQkFHQztRQUZHLENBQUMsQ0FBQyxRQUFRLEdBQUcsd0JBQVksQ0FBQyxNQUFNLENBQUM7UUFDakMsUUFBQSxrQkFBTSxDQUFDLENBQUMsU0FBQzs7SUFDYixDQUFDO0lBQ0wsZUFBQztBQUFELENBTEEsQUFLQyxDQUxzQyx1QkFBVSxHQUtoRDtBQUxxQiw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1DYXRlZ29yeSB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzQmFzZU5vZGUgfSBmcm9tIFwiLi9CM0Jhc2VOb2RlXCI7XG5pbXBvcnQgeyBJQjNOb2RlUHJvcCB9IGZyb20gXCIuL0IzSU5vZGVQcm9wZXJ0aWVzXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCM0FjdGlvbiBleHRlbmRzIEIzQmFzZU5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGQ6IElCM05vZGVQcm9wKSB7XG4gICAgICAgIGQuY2F0ZWdvcnkgPSBFbnVtQ2F0ZWdvcnkuQUNUSU9OO1xuICAgICAgICBzdXBlcihkKTtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/decorators/B3Inverter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9972bidrxCdrH5oLLMn+UN', 'B3Inverter');
// libs/b3/decorators/B3Inverter.ts

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
exports.B3Inverter = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
var B3Inverter = /** @class */ (function (_super) {
    __extends(B3Inverter, _super);
    function B3Inverter(d) {
        var _this = this;
        d.name = "Inverter";
        _this = _super.call(this, d) || this;
        return _this;
    }
    B3Inverter.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var status = this.child.execute(tick);
        if (status == Constants_1.EnumStatus.SUCCESS) {
            status = Constants_1.EnumStatus.FAILURE;
        }
        else if (status == Constants_1.EnumStatus.FAILURE) {
            status = Constants_1.EnumStatus.SUCCESS;
        }
        return status;
    };
    return B3Inverter;
}(B3Decorator_1.B3Decorator));
exports.B3Inverter = B3Inverter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvQjNJbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLG1EQUFrRDtBQUk5QztJQUFnQyw4QkFBVztJQUN2QyxvQkFBWSxDQUFtQjtRQUEvQixpQkFHQztRQUZHLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLFFBQUEsa0JBQU0sQ0FBQyxDQUFDLFNBQUM7O0lBQ2IsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixPQUFPLHNCQUFVLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsSUFBSSxNQUFNLElBQUksc0JBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDOUIsTUFBTSxHQUFHLHNCQUFVLENBQUMsT0FBTyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxNQUFNLElBQUksc0JBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDckMsTUFBTSxHQUFHLHNCQUFVLENBQUMsT0FBTyxDQUFDO1NBQy9CO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsQ0FyQitCLHlCQUFXLEdBcUIxQztBQXJCWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCM0RlY29yYXRvciB9IGZyb20gXCIuLi9jb3JlL0IzRGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBJQjNEZWNvcmF0b3JQcm9wIH0gZnJvbSBcIi4uL2NvcmUvQjNJTm9kZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuLi9jb3JlL0IzVGlja1wiO1xuXG4gICAgZXhwb3J0IGNsYXNzIEIzSW52ZXJ0ZXIgZXh0ZW5kcyBCM0RlY29yYXRvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGQ6IElCM0RlY29yYXRvclByb3ApIHtcbiAgICAgICAgICAgIGQubmFtZSA9IFwiSW52ZXJ0ZXJcIjtcbiAgICAgICAgICAgIHN1cGVyKGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGlsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBFbnVtU3RhdHVzLkVSUk9SO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gdGhpcy5jaGlsZC5leGVjdXRlKHRpY2spO1xuXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IEVudW1TdGF0dXMuU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IEVudW1TdGF0dXMuRkFJTFVSRTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09IEVudW1TdGF0dXMuRkFJTFVSRSkge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IEVudW1TdGF0dXMuU1VDQ0VTUztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgICAgfVxuICAgIH0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/decorators/B3Repeater.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf16bZrEi5JSYHzgGI2XFk7', 'B3Repeater');
// libs/b3/decorators/B3Repeater.ts

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
exports.B3Repeater = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
//重复n次，或者直到遇到不是失败或者成功的状态为止
var B3Repeater = /** @class */ (function (_super) {
    __extends(B3Repeater, _super);
    function B3Repeater(d) {
        return _super.call(this, d) || this;
    }
    B3Repeater.prototype._parseProp = function (d) {
        this.maxLoop = d.maxLoop || -1;
    };
    B3Repeater.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    B3Repeater.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = Constants_1.EnumStatus.SUCCESS;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            status = this.child.execute(tick);
            if (status == Constants_1.EnumStatus.SUCCESS || status == Constants_1.EnumStatus.FAILURE) {
                i++;
            }
            else {
                break;
            }
        }
        tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return B3Repeater;
}(B3Decorator_1.B3Decorator));
exports.B3Repeater = B3Repeater;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvQjNSZXBlYXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLG1EQUFrRDtBQUloRCwwQkFBMEI7QUFDMUI7SUFBZ0MsOEJBQVc7SUFFekMsb0JBQVksQ0FBa0I7ZUFDNUIsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVTLCtCQUFVLEdBQXBCLFVBQXFCLENBQU07UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx5QkFBSSxHQUFKLFVBQUssSUFBSTtRQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFHRCx5QkFBSSxHQUFKLFVBQUssSUFBWTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTyxzQkFBVSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxNQUFNLEdBQUcsc0JBQVUsQ0FBQyxPQUFPLENBQUM7UUFFaEMsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMzQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEMsSUFBSSxNQUFNLElBQUksc0JBQVUsQ0FBQyxPQUFPLElBQUksTUFBTSxJQUFJLHNCQUFVLENBQUMsT0FBTyxFQUFFO2dCQUNoRSxDQUFDLEVBQUUsQ0FBQzthQUNMO2lCQUFNO2dCQUNMLE1BQU07YUFDUDtTQUNGO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsQ0FwQytCLHlCQUFXLEdBb0MxQztBQXBDWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCM0RlY29yYXRvciB9IGZyb20gXCIuLi9jb3JlL0IzRGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBJQjNEZWNvcmF0b3JQcm9wIH0gZnJvbSBcIi4uL2NvcmUvQjNJTm9kZVByb3BlcnRpZXNcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuLi9jb3JlL0IzVGlja1wiO1xuXG4gIC8v6YeN5aSNbuasoe+8jOaIluiAheebtOWIsOmBh+WIsOS4jeaYr+Wksei0peaIluiAheaIkOWKn+eahOeKtuaAgeS4uuatolxuICBleHBvcnQgY2xhc3MgQjNSZXBlYXRlciBleHRlbmRzIEIzRGVjb3JhdG9yIHtcbiAgICBtYXhMb29wOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoZDogSUIzUmVwZWF0ZXJQcm9wKSB7XG4gICAgICBzdXBlcihkKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3BhcnNlUHJvcChkOiBhbnkpIHtcbiAgICAgIHRoaXMubWF4TG9vcCA9IGQubWF4TG9vcCB8fCAtMTtcbiAgICB9XG5cbiAgICBvcGVuKHRpY2spIHtcbiAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ2knLCAwLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICAgIH1cblxuXG4gICAgdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICAgIGlmICghdGhpcy5jaGlsZCkge1xuICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5FUlJPUjtcbiAgICAgIH1cblxuICAgICAgdmFyIGkgPSB0aWNrLmJsYWNrYm9hcmQuZ2V0KCdpJywgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcbiAgICAgIHZhciBzdGF0dXMgPSBFbnVtU3RhdHVzLlNVQ0NFU1M7XG5cbiAgICAgIHdoaWxlICh0aGlzLm1heExvb3AgPCAwIHx8IGkgPCB0aGlzLm1heExvb3ApIHtcbiAgICAgICAgc3RhdHVzID0gdGhpcy5jaGlsZC5leGVjdXRlKHRpY2spO1xuXG4gICAgICAgIGlmIChzdGF0dXMgPT0gRW51bVN0YXR1cy5TVUNDRVNTIHx8IHN0YXR1cyA9PSBFbnVtU3RhdHVzLkZBSUxVUkUpIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnaScsIGksIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG4gICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH1cbiAgfVxuXG5leHBvcnQgaW50ZXJmYWNlIElCM1JlcGVhdGVyUHJvcCBleHRlbmRzIElCM0RlY29yYXRvclByb3Age1xuICBtYXhMb29wOiBudW1iZXJcbn0iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/decorators/B3RepeatUntilSuccess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c87c8i/SD1IHbeldhw8UcFP', 'B3RepeatUntilSuccess');
// libs/b3/decorators/B3RepeatUntilSuccess.ts

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
exports.B3RepeatUntilSuccess = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
//重复n次，或者直到遇到不是失败的状态为止
var B3RepeatUntilSuccess = /** @class */ (function (_super) {
    __extends(B3RepeatUntilSuccess, _super);
    function B3RepeatUntilSuccess(d) {
        return _super.call(this, d) || this;
    }
    B3RepeatUntilSuccess.prototype._parseProp = function (d) {
        this.maxLoop = d.maxLoop || -1;
    };
    B3RepeatUntilSuccess.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    B3RepeatUntilSuccess.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = Constants_1.EnumStatus.ERROR;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            status = this.child.execute(tick);
            if (status == Constants_1.EnumStatus.FAILURE) {
                i++;
            }
            else {
                break;
            }
        }
        i = tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return B3RepeatUntilSuccess;
}(B3Decorator_1.B3Decorator));
exports.B3RepeatUntilSuccess = B3RepeatUntilSuccess;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvQjNSZXBlYXRVbnRpbFN1Y2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUEwQztBQUMxQyxtREFBa0Q7QUFJbEQsc0JBQXNCO0FBQ3RCO0lBQTBDLHdDQUFXO0lBRXBELDhCQUFZLENBQWtCO2VBQzdCLGtCQUFNLENBQUMsQ0FBQztJQUNULENBQUM7SUFFUyx5Q0FBVSxHQUFwQixVQUFxQixDQUFNO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsbUNBQUksR0FBSixVQUFLLElBQVk7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUdELG1DQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLE9BQU8sc0JBQVUsQ0FBQyxLQUFLLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksTUFBTSxHQUFHLHNCQUFVLENBQUMsS0FBSyxDQUFDO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDNUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxDLElBQUksTUFBTSxJQUFJLHNCQUFVLENBQUMsT0FBTyxFQUFFO2dCQUNqQyxDQUFDLEVBQUUsQ0FBQzthQUNKO2lCQUFNO2dCQUNOLE1BQU07YUFDTjtTQUNEO1FBRUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUNGLDJCQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsQ0FwQ3lDLHlCQUFXLEdBb0NwRDtBQXBDWSxvREFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnVtU3RhdHVzIH0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQjNEZWNvcmF0b3IgfSBmcm9tIFwiLi4vY29yZS9CM0RlY29yYXRvclwiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4uL2NvcmUvQjNUaWNrXCI7XG5pbXBvcnQgeyBJQjNSZXBlYXRlclByb3AgfSBmcm9tIFwiLi9CM1JlcGVhdGVyXCI7XG5cbi8v6YeN5aSNbuasoe+8jOaIluiAheebtOWIsOmBh+WIsOS4jeaYr+Wksei0peeahOeKtuaAgeS4uuatolxuZXhwb3J0IGNsYXNzIEIzUmVwZWF0VW50aWxTdWNjZXNzIGV4dGVuZHMgQjNEZWNvcmF0b3Ige1xuXHRtYXhMb29wOiBudW1iZXI7XG5cdGNvbnN0cnVjdG9yKGQ6IElCM1JlcGVhdGVyUHJvcCkge1xuXHRcdHN1cGVyKGQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIF9wYXJzZVByb3AoZDogYW55KSB7XG5cdFx0dGhpcy5tYXhMb29wID0gZC5tYXhMb29wIHx8IC0xO1xuXHR9XG5cblx0b3Blbih0aWNrOiBCM1RpY2spIHtcblx0XHR0aWNrLmJsYWNrYm9hcmQuc2V0KCdpJywgMCwgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcblx0fVxuXG5cblx0dGljayh0aWNrOiBCM1RpY2spIHtcblx0XHRpZiAoIXRoaXMuY2hpbGQpIHtcblx0XHRcdHJldHVybiBFbnVtU3RhdHVzLkVSUk9SO1xuXHRcdH1cblxuXHRcdHZhciBpID0gdGljay5ibGFja2JvYXJkLmdldCgnaScsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG5cdFx0dmFyIHN0YXR1cyA9IEVudW1TdGF0dXMuRVJST1I7XG5cblx0XHR3aGlsZSAodGhpcy5tYXhMb29wIDwgMCB8fCBpIDwgdGhpcy5tYXhMb29wKSB7XG5cdFx0XHRzdGF0dXMgPSB0aGlzLmNoaWxkLmV4ZWN1dGUodGljayk7XG5cblx0XHRcdGlmIChzdGF0dXMgPT0gRW51bVN0YXR1cy5GQUlMVVJFKSB7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGkgPSB0aWNrLmJsYWNrYm9hcmQuc2V0KCdpJywgaSwgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcblx0XHRyZXR1cm4gc3RhdHVzO1xuXHR9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/decorators/B3RepeatUntilFailure.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ac85cJdoFGS4ZCDfFiw/sB', 'B3RepeatUntilFailure');
// libs/b3/decorators/B3RepeatUntilFailure.ts

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
exports.B3RepeatUntilFailure = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
//重复n次，或者直到遇到不是成功的状态为止
var B3RepeatUntilFailure = /** @class */ (function (_super) {
    __extends(B3RepeatUntilFailure, _super);
    function B3RepeatUntilFailure(d) {
        return _super.call(this, d) || this;
    }
    B3RepeatUntilFailure.prototype._parseProp = function (d) {
        this.maxLoop = this.maxLoop || -1;
    };
    B3RepeatUntilFailure.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    B3RepeatUntilFailure.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = Constants_1.EnumStatus.ERROR;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            status = this.child.execute(tick);
            if (status == Constants_1.EnumStatus.SUCCESS) {
                i++;
            }
            else {
                break;
            }
        }
        i = tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return B3RepeatUntilFailure;
}(B3Decorator_1.B3Decorator));
exports.B3RepeatUntilFailure = B3RepeatUntilFailure;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvQjNSZXBlYXRVbnRpbEZhaWx1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUEwQztBQUMxQyxtREFBa0Q7QUFJbEQsc0JBQXNCO0FBQ3RCO0lBQTBDLHdDQUFXO0lBRWpELDhCQUFZLENBQWtCO2VBQzFCLGtCQUFNLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFUyx5Q0FBVSxHQUFwQixVQUFxQixDQUFNO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsbUNBQUksR0FBSixVQUFLLElBQUk7UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBR0QsbUNBQUksR0FBSixVQUFLLElBQVk7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLE9BQU8sc0JBQVUsQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksTUFBTSxHQUFHLHNCQUFVLENBQUMsS0FBSyxDQUFDO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDekMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxDLElBQUksTUFBTSxJQUFJLHNCQUFVLENBQUMsT0FBTyxFQUFFO2dCQUM5QixDQUFDLEVBQUUsQ0FBQzthQUNQO2lCQUFNO2dCQUNILE1BQU07YUFDVDtTQUNKO1FBRUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCwyQkFBQztBQUFELENBcENBLEFBb0NDLENBcEN5Qyx5QkFBVyxHQW9DcEQ7QUFwQ1ksb0RBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bVN0YXR1cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzRGVjb3JhdG9yIH0gZnJvbSBcIi4uL2NvcmUvQjNEZWNvcmF0b3JcIjtcbmltcG9ydCB7IEIzVGljayB9IGZyb20gXCIuLi9jb3JlL0IzVGlja1wiO1xuaW1wb3J0IHsgSUIzUmVwZWF0ZXJQcm9wIH0gZnJvbSBcIi4vQjNSZXBlYXRlclwiO1xuXG4vL+mHjeWkjW7mrKHvvIzmiJbogIXnm7TliLDpgYfliLDkuI3mmK/miJDlip/nmoTnirbmgIHkuLrmraJcbmV4cG9ydCBjbGFzcyBCM1JlcGVhdFVudGlsRmFpbHVyZSBleHRlbmRzIEIzRGVjb3JhdG9yIHtcbiAgICBtYXhMb29wOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoZDogSUIzUmVwZWF0ZXJQcm9wKSB7XG4gICAgICAgIHN1cGVyKGQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcGFyc2VQcm9wKGQ6IGFueSkge1xuICAgICAgICB0aGlzLm1heExvb3AgPSB0aGlzLm1heExvb3AgfHwgLTE7XG4gICAgfVxuXG4gICAgb3Blbih0aWNrKSB7XG4gICAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ2knLCAwLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICAgIH1cblxuXG4gICAgdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5FUlJPUjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpID0gdGljay5ibGFja2JvYXJkLmdldCgnaScsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG4gICAgICAgIHZhciBzdGF0dXMgPSBFbnVtU3RhdHVzLkVSUk9SO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLm1heExvb3AgPCAwIHx8IGkgPCB0aGlzLm1heExvb3ApIHtcbiAgICAgICAgICAgIHN0YXR1cyA9IHRoaXMuY2hpbGQuZXhlY3V0ZSh0aWNrKTtcblxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBFbnVtU3RhdHVzLlNVQ0NFU1MpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaSA9IHRpY2suYmxhY2tib2FyZC5zZXQoJ2knLCBpLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/register/B3CompositesClsRegister.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL3JlZ2lzdGVyL0IzQ29tcG9zaXRlc0Nsc1JlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBNEQ7QUFDNUQsNkRBQTREO0FBQzVELHVEQUFzRDtBQUN0RCx1REFBc0Q7QUFFM0MsUUFBQSxlQUFlO0lBQ3RCLEdBQUMsZUFBZSxJQUFHLDZCQUFhO0lBQ2hDLEdBQUMsZUFBZSxJQUFHLDZCQUFhO0lBQ2hDLEdBQUMsWUFBWSxJQUFHLHVCQUFVO0lBQzFCLEdBQUMsWUFBWSxJQUFHLHVCQUFVO1FBQzdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQjNNZW1Qcmlvcml0eSB9IGZyb20gJy4uL2NvbXBvc2l0ZXMvQjNNZW1Qcmlvcml0eSc7XG5pbXBvcnQgeyBCM01lbVNlcXVlbmNlIH0gZnJvbSAnLi4vY29tcG9zaXRlcy9CM01lbVNlcXVlbmNlJztcbmltcG9ydCB7IEIzU2VxdWVuY2UgfSBmcm9tIFwiLi4vY29tcG9zaXRlcy9CM1NlcXVlbmNlXCI7XG5pbXBvcnQgeyBCM1ByaW9yaXR5IH0gZnJvbSAnLi4vY29tcG9zaXRlcy9CM1ByaW9yaXR5JztcblxuZXhwb3J0IGxldCBCM0NvbXBvc2l0ZXNDbHMgPSB7XG4gICAgW1wiQjNNZW1Qcmlvcml0eVwiXTogQjNNZW1Qcmlvcml0eSxcbiAgICBbXCJCM01lbVNlcXVlbmNlXCJdOiBCM01lbVNlcXVlbmNlLFxuICAgIFtcIkIzU2VxdWVuY2VcIl06IEIzU2VxdWVuY2UsXG4gICAgW1wiQjNQcmlvcml0eVwiXTogQjNQcmlvcml0eSxcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3BehaviorTreeGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b1b4pdEmdNFJRky3UbovJd', 'B3BehaviorTreeGroup');
// libs/b3/core/B3BehaviorTreeGroup.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3BehaviorTreeGroup = void 0;
var B3BehaviorTree_1 = require("./B3BehaviorTree");
var B3BehaviorTreeGroup = /** @class */ (function () {
    function B3BehaviorTreeGroup() {
    }
    /**
     * 格式化逻辑树项目数据，把依赖树信息安装好
     * @param project 编辑器导出的项目信息
     */
    B3BehaviorTreeGroup.prototype.parse = function (project) {
        this._trees || (this._trees = {});
        var treeHash = {};
        for (var i = 0; i < project.trees.length; i++) {
            treeHash[project.trees[i].id] = project.trees[i];
        }
        for (var id in treeHash) {
            var tree = treeHash[id];
            this._paserTree(tree, treeHash);
            this._trees[tree.title] = tree;
        }
    };
    /**
     * 根据树的title生成对应的树
     * @param treeTitle
     * @param names
     */
    B3BehaviorTreeGroup.prototype.build = function (treeTitle, names) {
        var tree = this._trees[treeTitle];
        if (!tree)
            return null;
        var bTree = new B3BehaviorTree_1.B3BehaviorTree();
        bTree.load(tree, names);
        return bTree;
    };
    B3BehaviorTreeGroup.prototype._paserTree = function (tree, treeHash) {
        if (tree.pasered) {
            var nodes_1 = [];
            for (var nodeId in tree.nodes) {
                var node = tree.nodes[nodeId];
                nodes_1.push(node);
            }
            return nodes_1;
        }
        var nodes = [];
        for (var nodeId in tree.nodes) {
            var node = tree.nodes[nodeId];
            if (treeHash[node.name]) {
                var childTree = treeHash[node.name];
                var addNodes = this._paserTree(childTree, treeHash);
                nodes = nodes.concat(addNodes);
                node.name = "Sequence";
                node.children = [childTree.root];
            }
            else {
                nodes.push(node);
            }
        }
        for (var i = 0; i < nodes.length; i++) {
            tree.nodes[nodes[i].id] = nodes[i];
        }
        tree.pasered = true;
        return nodes;
    };
    return B3BehaviorTreeGroup;
}());
exports.B3BehaviorTreeGroup = B3BehaviorTreeGroup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvcmUvQjNCZWhhdmlvclRyZWVHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFFbEQ7SUFBQTtJQWdFQSxDQUFDO0lBOURHOzs7T0FHRztJQUNILG1DQUFLLEdBQUwsVUFBTSxPQUFxQjtRQUN2QixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNsQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxLQUFLLElBQUksRUFBRSxJQUFJLFFBQVEsRUFBRTtZQUNyQixJQUFJLElBQUksR0FBVSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQ0FBSyxHQUFMLFVBQU0sU0FBaUIsRUFBRSxLQUFXO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUN2QixJQUFJLEtBQUssR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztRQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8sd0NBQVUsR0FBbEIsVUFBbUIsSUFBVyxFQUFFLFFBQWE7UUFDekMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxPQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2YsS0FBSyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUMzQixJQUFJLElBQUksR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQyxPQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BCO1lBQ0QsT0FBTyxPQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLEtBQUssR0FBWSxFQUFFLENBQUM7UUFDeEIsS0FBSyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzNCLElBQUksSUFBSSxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyQixJQUFJLFNBQVMsR0FBVSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMxQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDcEQsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDcEI7U0FDSjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBR3BCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCwwQkFBQztBQUFELENBaEVBLEFBZ0VDLElBQUE7QUFoRVksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQjNCZWhhdmlvclRyZWUgfSBmcm9tIFwiLi9CM0JlaGF2aW9yVHJlZVwiO1xuXG5leHBvcnQgY2xhc3MgQjNCZWhhdmlvclRyZWVHcm91cCB7XG4gICAgcHJpdmF0ZSBfdHJlZXM6IHsgW3RpdGxlOiBzdHJpbmddOiBJVHJlZSB9O1xuICAgIC8qKlxuICAgICAqIOagvOW8j+WMlumAu+i+keagkemhueebruaVsOaNru+8jOaKiuS+nei1luagkeS/oeaBr+WuieijheWlvVxuICAgICAqIEBwYXJhbSBwcm9qZWN0IOe8lui+keWZqOWvvOWHuueahOmhueebruS/oeaBr1xuICAgICAqL1xuICAgIHBhcnNlKHByb2plY3Q6IElUcmVlUHJvamVjdCkge1xuICAgICAgICB0aGlzLl90cmVlcyB8fCAodGhpcy5fdHJlZXMgPSB7fSk7XG4gICAgICAgIGxldCB0cmVlSGFzaCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudHJlZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRyZWVIYXNoW3Byb2plY3QudHJlZXNbaV0uaWRdID0gcHJvamVjdC50cmVlc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGlkIGluIHRyZWVIYXNoKSB7XG4gICAgICAgICAgICBsZXQgdHJlZTogSVRyZWUgPSB0cmVlSGFzaFtpZF07XG4gICAgICAgICAgICB0aGlzLl9wYXNlclRyZWUodHJlZSwgdHJlZUhhc2gpO1xuICAgICAgICAgICAgdGhpcy5fdHJlZXNbdHJlZS50aXRsZV0gPSB0cmVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC55o2u5qCR55qEdGl0bGXnlJ/miJDlr7nlupTnmoTmoJFcbiAgICAgKiBAcGFyYW0gdHJlZVRpdGxlIFxuICAgICAqIEBwYXJhbSBuYW1lcyBcbiAgICAgKi9cbiAgICBidWlsZCh0cmVlVGl0bGU6IHN0cmluZywgbmFtZXM/OiBhbnkpOiBCM0JlaGF2aW9yVHJlZSB7XG4gICAgICAgIGxldCB0cmVlID0gdGhpcy5fdHJlZXNbdHJlZVRpdGxlXTtcbiAgICAgICAgaWYgKCF0cmVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgbGV0IGJUcmVlID0gbmV3IEIzQmVoYXZpb3JUcmVlKCk7XG4gICAgICAgIGJUcmVlLmxvYWQodHJlZSwgbmFtZXMpO1xuICAgICAgICByZXR1cm4gYlRyZWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFzZXJUcmVlKHRyZWU6IElUcmVlLCB0cmVlSGFzaDogYW55KTogSU5vZGVbXSB7XG4gICAgICAgIGlmICh0cmVlLnBhc2VyZWQpIHtcbiAgICAgICAgICAgIGxldCBub2RlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgbm9kZUlkIGluIHRyZWUubm9kZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZTogSU5vZGUgPSB0cmVlLm5vZGVzW25vZGVJZF07XG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9kZXM6IElOb2RlW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbm9kZUlkIGluIHRyZWUubm9kZXMpIHtcbiAgICAgICAgICAgIGxldCBub2RlOiBJTm9kZSA9IHRyZWUubm9kZXNbbm9kZUlkXTtcbiAgICAgICAgICAgIGlmICh0cmVlSGFzaFtub2RlLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkVHJlZTogSVRyZWUgPSB0cmVlSGFzaFtub2RlLm5hbWVdXG4gICAgICAgICAgICAgICAgbGV0IGFkZE5vZGVzID0gdGhpcy5fcGFzZXJUcmVlKGNoaWxkVHJlZSwgdHJlZUhhc2gpO1xuICAgICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGFkZE5vZGVzKTtcbiAgICAgICAgICAgICAgICBub2RlLm5hbWUgPSBcIlNlcXVlbmNlXCI7XG4gICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IFtjaGlsZFRyZWUucm9vdF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cmVlLm5vZGVzW25vZGVzW2ldLmlkXSA9IG5vZGVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRyZWUucGFzZXJlZCA9IHRydWU7XG5cblxuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgSUJhc2Uge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHByb3BlcnRpZXM6IGFueTtcbn1cblxuaW50ZXJmYWNlIElUcmVlIGV4dGVuZHMgSUJhc2Uge1xuICAgIHJvb3Q6IHN0cmluZyxcbiAgICBub2RlczogeyBbaWQ6IHN0cmluZ106IElOb2RlIH0sXG4gICAgcGFzZXJlZD86IGJvb2xlYW4gICAgICAgICAgICAgICAgLy/lkI7mnJ/mt7vliqDnmoRcbn1cblxuXG5pbnRlcmZhY2UgSU5vZGUgZXh0ZW5kcyBJQmFzZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNoaWxkcmVuOiBzdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIElUcmVlUHJvamVjdCB7XG4gICAgdHJlZXM6IElUcmVlW107XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/core/B3Blackboard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7c27Y+PFtLkY2IBdTwpllg', 'B3Blackboard');
// libs/b3/core/B3Blackboard.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B3Blackboard = void 0;
var B3Blackboard = /** @class */ (function () {
    function B3Blackboard() {
        this._baseMemory = {};
        this._treeMemory = {};
    }
    /**
     * Internal method to retrieve the tree context memory. If the memory does
     * not exist, this method creates it.
     *
     * @method _getTreeMemory
     * @param {String} treeScope The id of the tree in scope.
     * @return {Object} The tree memory.
     * @protected
     **/
    B3Blackboard.prototype._getTreeMemory = function (treeScope) {
        if (!this._treeMemory[treeScope]) {
            this._treeMemory[treeScope] = {
                'nodeMemory': {},
                'openNodes': [],
                'traversalDepth': 0,
                'traversalCycle': 0,
            };
        }
        return this._treeMemory[treeScope];
    };
    /**
     * Internal method to retrieve the node context memory, given the tree
     * memory. If the memory does not exist, this method creates is.
     *
     * @method _getNodeMemory
     * @param {String} treeMemory the tree memory.
     * @param {String} nodeScope The id of the node in scope.
     * @return {Object} The node memory.
     * @protected
     **/
    B3Blackboard.prototype._getNodeMemory = function (treeMemory, nodeScope) {
        var memory = treeMemory.nodeMemory;
        if (!memory[nodeScope]) {
            memory[nodeScope] = {};
        }
        return memory[nodeScope];
    };
    /**
     * Internal method to retrieve the context memory. If treeScope and
     * nodeScope are provided, this method returns the per node per tree
     * memory. If only the treeScope is provided, it returns the per tree
     * memory. If no parameter is provided, it returns the global memory.
     * Notice that, if only nodeScope is provided, this method will still
     * return the global memory.
     *
     * @method _getMemory
     * @param {String} treeScope The id of the tree scope.
     * @param {String} nodeScope The id of the node scope.
     * @return {Object} A memory object.
     * @protected
     **/
    B3Blackboard.prototype._getMemory = function (treeScope, nodeScope) {
        var memory = this._baseMemory;
        if (treeScope) {
            memory = this._getTreeMemory(treeScope);
            if (nodeScope) {
                memory = this._getNodeMemory(memory, nodeScope);
            }
        }
        return memory;
    };
    /**
     * Stores a value in the blackboard. If treeScope and nodeScope are
     * provided, this method will save the value into the per node per tree
     * memory. If only the treeScope is provided, it will save the value into
     * the per tree memory. If no parameter is provided, this method will save
     * the value into the global memory. Notice that, if only nodeScope is
     * provided (but treeScope not), this method will still save the value into
     * the global memory.
     *
     * @method set
     * @param {String} key The key to be stored.
     * @param {String} value The value to be stored.
     * @param {String} treeScope The tree id if accessing the tree or node
     *                           memory.
     * @param {String} nodeScope The node id if accessing the node memory.
     **/
    B3Blackboard.prototype.set = function (key, value, treeScope, nodeScope) {
        var memory = this._getMemory(treeScope, nodeScope);
        memory[key] = value;
    };
    /**
     * Retrieves a value in the blackboard. If treeScope and nodeScope are
     * provided, this method will retrieve the value from the per node per tree
     * memory. If only the treeScope is provided, it will retrieve the value
     * from the per tree memory. If no parameter is provided, this method will
     * retrieve from the global memory. If only nodeScope is provided (but
     * treeScope not), this method will still try to retrieve from the global
     * memory.
     *
     * @method get
     * @param {String} key The key to be retrieved.
     * @param {String} treeScope The tree id if accessing the tree or node
     *                           memory.
     * @param {String} nodeScope The node id if accessing the node memory.
     * @return {Object} The value stored or undefined.
     **/
    B3Blackboard.prototype.get = function (key, treeScope, nodeScope) {
        var memory = this._getMemory(treeScope, nodeScope);
        return memory[key];
    };
    B3Blackboard.prototype.getCache = function () {
        return { base: this._baseMemory, tree: this._treeMemory };
    };
    B3Blackboard.prototype.setCache = function (base, tree) {
        this._baseMemory = base;
        this._treeMemory = tree;
    };
    return B3Blackboard;
}());
exports.B3Blackboard = B3Blackboard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2NvcmUvQjNCbGFja2JvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFJO0lBR0k7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7Ozs7O1FBUUk7SUFDSSxxQ0FBYyxHQUF0QixVQUF1QixTQUFTO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUc7Z0JBQzFCLFlBQVksRUFBRSxFQUFFO2dCQUNoQixXQUFXLEVBQUUsRUFBRTtnQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2dCQUNuQixnQkFBZ0IsRUFBRSxDQUFDO2FBQ3RCLENBQUM7U0FDTDtRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7Ozs7OztRQVNJO0lBQ0kscUNBQWMsR0FBdEIsVUFBdUIsVUFBVSxFQUFFLFNBQVM7UUFDeEMsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDMUI7UUFFRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7UUFhSTtJQUNJLGlDQUFVLEdBQWxCLFVBQW1CLFNBQVMsRUFBRSxTQUFTO1FBQ25DLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFOUIsSUFBSSxTQUFTLEVBQUU7WUFDWCxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV4QyxJQUFJLFNBQVMsRUFBRTtnQkFDWCxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDbkQ7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7O1FBZUk7SUFDSiwwQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLEtBQVUsRUFBRSxTQUFrQixFQUFFLFNBQWtCO1FBQy9ELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7UUFlSTtJQUNKLDBCQUFHLEdBQUgsVUFBSSxHQUFHLEVBQUUsU0FBVSxFQUFFLFNBQVU7UUFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQVMsRUFBRSxJQUFTO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDTCxtQkFBQztBQUFELENBOUhBLEFBOEhDLElBQUE7QUE5SFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgICAgZXhwb3J0IGNsYXNzIEIzQmxhY2tib2FyZCB7XG4gICAgICAgIHByaXZhdGUgX2Jhc2VNZW1vcnk6IGFueTtcbiAgICAgICAgcHJpdmF0ZSBfdHJlZU1lbW9yeTogYW55O1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VNZW1vcnkgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuX3RyZWVNZW1vcnkgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBtZXRob2QgdG8gcmV0cmlldmUgdGhlIHRyZWUgY29udGV4dCBtZW1vcnkuIElmIHRoZSBtZW1vcnkgZG9lc1xuICAgICAgICAgKiBub3QgZXhpc3QsIHRoaXMgbWV0aG9kIGNyZWF0ZXMgaXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgX2dldFRyZWVNZW1vcnlcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRyZWVTY29wZSBUaGUgaWQgb2YgdGhlIHRyZWUgaW4gc2NvcGUuXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIHRyZWUgbWVtb3J5LlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqKi9cbiAgICAgICAgcHJpdmF0ZSBfZ2V0VHJlZU1lbW9yeSh0cmVlU2NvcGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fdHJlZU1lbW9yeVt0cmVlU2NvcGVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJlZU1lbW9yeVt0cmVlU2NvcGVdID0ge1xuICAgICAgICAgICAgICAgICAgICAnbm9kZU1lbW9yeSc6IHt9LFxuICAgICAgICAgICAgICAgICAgICAnb3Blbk5vZGVzJzogW10sXG4gICAgICAgICAgICAgICAgICAgICd0cmF2ZXJzYWxEZXB0aCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICd0cmF2ZXJzYWxDeWNsZSc6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cmVlTWVtb3J5W3RyZWVTY29wZV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgbWV0aG9kIHRvIHJldHJpZXZlIHRoZSBub2RlIGNvbnRleHQgbWVtb3J5LCBnaXZlbiB0aGUgdHJlZVxuICAgICAgICAgKiBtZW1vcnkuIElmIHRoZSBtZW1vcnkgZG9lcyBub3QgZXhpc3QsIHRoaXMgbWV0aG9kIGNyZWF0ZXMgaXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgX2dldE5vZGVNZW1vcnlcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRyZWVNZW1vcnkgdGhlIHRyZWUgbWVtb3J5LlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gbm9kZVNjb3BlIFRoZSBpZCBvZiB0aGUgbm9kZSBpbiBzY29wZS5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbm9kZSBtZW1vcnkuXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICoqL1xuICAgICAgICBwcml2YXRlIF9nZXROb2RlTWVtb3J5KHRyZWVNZW1vcnksIG5vZGVTY29wZSkge1xuICAgICAgICAgICAgdmFyIG1lbW9yeSA9IHRyZWVNZW1vcnkubm9kZU1lbW9yeTtcbiAgICAgICAgICAgIGlmICghbWVtb3J5W25vZGVTY29wZV0pIHtcbiAgICAgICAgICAgICAgICBtZW1vcnlbbm9kZVNjb3BlXSA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWVtb3J5W25vZGVTY29wZV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgbWV0aG9kIHRvIHJldHJpZXZlIHRoZSBjb250ZXh0IG1lbW9yeS4gSWYgdHJlZVNjb3BlIGFuZFxuICAgICAgICAgKiBub2RlU2NvcGUgYXJlIHByb3ZpZGVkLCB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZSBwZXIgbm9kZSBwZXIgdHJlZVxuICAgICAgICAgKiBtZW1vcnkuIElmIG9ubHkgdGhlIHRyZWVTY29wZSBpcyBwcm92aWRlZCwgaXQgcmV0dXJucyB0aGUgcGVyIHRyZWVcbiAgICAgICAgICogbWVtb3J5LiBJZiBubyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIGl0IHJldHVybnMgdGhlIGdsb2JhbCBtZW1vcnkuXG4gICAgICAgICAqIE5vdGljZSB0aGF0LCBpZiBvbmx5IG5vZGVTY29wZSBpcyBwcm92aWRlZCwgdGhpcyBtZXRob2Qgd2lsbCBzdGlsbFxuICAgICAgICAgKiByZXR1cm4gdGhlIGdsb2JhbCBtZW1vcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgX2dldE1lbW9yeVxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHJlZVNjb3BlIFRoZSBpZCBvZiB0aGUgdHJlZSBzY29wZS5cbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG5vZGVTY29wZSBUaGUgaWQgb2YgdGhlIG5vZGUgc2NvcGUuXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gQSBtZW1vcnkgb2JqZWN0LlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqKi9cbiAgICAgICAgcHJpdmF0ZSBfZ2V0TWVtb3J5KHRyZWVTY29wZSwgbm9kZVNjb3BlKSB7XG4gICAgICAgICAgICB2YXIgbWVtb3J5ID0gdGhpcy5fYmFzZU1lbW9yeTtcblxuICAgICAgICAgICAgaWYgKHRyZWVTY29wZSkge1xuICAgICAgICAgICAgICAgIG1lbW9yeSA9IHRoaXMuX2dldFRyZWVNZW1vcnkodHJlZVNjb3BlKTtcblxuICAgICAgICAgICAgICAgIGlmIChub2RlU2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVtb3J5ID0gdGhpcy5fZ2V0Tm9kZU1lbW9yeShtZW1vcnksIG5vZGVTY29wZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWVtb3J5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3JlcyBhIHZhbHVlIGluIHRoZSBibGFja2JvYXJkLiBJZiB0cmVlU2NvcGUgYW5kIG5vZGVTY29wZSBhcmVcbiAgICAgICAgICogcHJvdmlkZWQsIHRoaXMgbWV0aG9kIHdpbGwgc2F2ZSB0aGUgdmFsdWUgaW50byB0aGUgcGVyIG5vZGUgcGVyIHRyZWVcbiAgICAgICAgICogbWVtb3J5LiBJZiBvbmx5IHRoZSB0cmVlU2NvcGUgaXMgcHJvdmlkZWQsIGl0IHdpbGwgc2F2ZSB0aGUgdmFsdWUgaW50b1xuICAgICAgICAgKiB0aGUgcGVyIHRyZWUgbWVtb3J5LiBJZiBubyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIHRoaXMgbWV0aG9kIHdpbGwgc2F2ZVxuICAgICAgICAgKiB0aGUgdmFsdWUgaW50byB0aGUgZ2xvYmFsIG1lbW9yeS4gTm90aWNlIHRoYXQsIGlmIG9ubHkgbm9kZVNjb3BlIGlzXG4gICAgICAgICAqIHByb3ZpZGVkIChidXQgdHJlZVNjb3BlIG5vdCksIHRoaXMgbWV0aG9kIHdpbGwgc3RpbGwgc2F2ZSB0aGUgdmFsdWUgaW50b1xuICAgICAgICAgKiB0aGUgZ2xvYmFsIG1lbW9yeS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBzZXRcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IHRvIGJlIHN0b3JlZC5cbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBzdG9yZWQuXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0cmVlU2NvcGUgVGhlIHRyZWUgaWQgaWYgYWNjZXNzaW5nIHRoZSB0cmVlIG9yIG5vZGVcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vcnkuXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlU2NvcGUgVGhlIG5vZGUgaWQgaWYgYWNjZXNzaW5nIHRoZSBub2RlIG1lbW9yeS5cbiAgICAgICAgICoqL1xuICAgICAgICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHRyZWVTY29wZT86IHN0cmluZywgbm9kZVNjb3BlPzogc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgbWVtb3J5ID0gdGhpcy5fZ2V0TWVtb3J5KHRyZWVTY29wZSwgbm9kZVNjb3BlKTtcbiAgICAgICAgICAgIG1lbW9yeVtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0cmlldmVzIGEgdmFsdWUgaW4gdGhlIGJsYWNrYm9hcmQuIElmIHRyZWVTY29wZSBhbmQgbm9kZVNjb3BlIGFyZVxuICAgICAgICAgKiBwcm92aWRlZCwgdGhpcyBtZXRob2Qgd2lsbCByZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSB0aGUgcGVyIG5vZGUgcGVyIHRyZWVcbiAgICAgICAgICogbWVtb3J5LiBJZiBvbmx5IHRoZSB0cmVlU2NvcGUgaXMgcHJvdmlkZWQsIGl0IHdpbGwgcmV0cmlldmUgdGhlIHZhbHVlXG4gICAgICAgICAqIGZyb20gdGhlIHBlciB0cmVlIG1lbW9yeS4gSWYgbm8gcGFyYW1ldGVyIGlzIHByb3ZpZGVkLCB0aGlzIG1ldGhvZCB3aWxsXG4gICAgICAgICAqIHJldHJpZXZlIGZyb20gdGhlIGdsb2JhbCBtZW1vcnkuIElmIG9ubHkgbm9kZVNjb3BlIGlzIHByb3ZpZGVkIChidXRcbiAgICAgICAgICogdHJlZVNjb3BlIG5vdCksIHRoaXMgbWV0aG9kIHdpbGwgc3RpbGwgdHJ5IHRvIHJldHJpZXZlIGZyb20gdGhlIGdsb2JhbFxuICAgICAgICAgKiBtZW1vcnkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgZ2V0XG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0byBiZSByZXRyaWV2ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0cmVlU2NvcGUgVGhlIHRyZWUgaWQgaWYgYWNjZXNzaW5nIHRoZSB0cmVlIG9yIG5vZGVcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1vcnkuXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlU2NvcGUgVGhlIG5vZGUgaWQgaWYgYWNjZXNzaW5nIHRoZSBub2RlIG1lbW9yeS5cbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgdmFsdWUgc3RvcmVkIG9yIHVuZGVmaW5lZC5cbiAgICAgICAgICoqL1xuICAgICAgICBnZXQoa2V5LCB0cmVlU2NvcGU/LCBub2RlU2NvcGU/KSB7XG4gICAgICAgICAgICB2YXIgbWVtb3J5ID0gdGhpcy5fZ2V0TWVtb3J5KHRyZWVTY29wZSwgbm9kZVNjb3BlKTtcbiAgICAgICAgICAgIHJldHVybiBtZW1vcnlba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldENhY2hlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgYmFzZTogdGhpcy5fYmFzZU1lbW9yeSwgdHJlZTogdGhpcy5fdHJlZU1lbW9yeSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0Q2FjaGUoYmFzZTogYW55LCB0cmVlOiBhbnkpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VNZW1vcnkgPSBiYXNlO1xuICAgICAgICAgICAgdGhpcy5fdHJlZU1lbW9yeSA9IHRyZWU7XG4gICAgICAgIH1cbiAgICB9Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/decorators/B3MaxTime.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d13fMEQvBARLJWoblZe4yK', 'B3MaxTime');
// libs/b3/decorators/B3MaxTime.ts

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
exports.B3MaxTime = void 0;
var Constants_1 = require("../Constants");
var B3Decorator_1 = require("../core/B3Decorator");
var B3MaxTime = /** @class */ (function (_super) {
    __extends(B3MaxTime, _super);
    function B3MaxTime(d) {
        return _super.call(this, d) || this;
    }
    B3MaxTime.prototype._parseProp = function (d) {
        if (!d.maxTime) {
            throw 'maxTime parameter in MaxTime decorator is an obligatory parameter';
        }
        this.maxTime = d.maxTime || 0;
    };
    B3MaxTime.prototype.open = function (tick) {
        var startTime = (new Date()).getTime();
        tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
    };
    B3MaxTime.prototype.tick = function (tick) {
        if (!this.child) {
            return Constants_1.EnumStatus.ERROR;
        }
        var currTime = (new Date()).getTime();
        var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
        var status = this.child.execute(tick);
        if (currTime - startTime > this.maxTime) {
            return Constants_1.EnumStatus.FAILURE;
        }
        return status;
    };
    return B3MaxTime;
}(B3Decorator_1.B3Decorator));
exports.B3MaxTime = B3MaxTime;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2RlY29yYXRvcnMvQjNNYXhUaW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFDMUMsbURBQWtEO0FBSTlDO0lBQStCLDZCQUFXO0lBRXRDLG1CQUFZLENBQWU7ZUFDdkIsa0JBQU0sQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVTLDhCQUFVLEdBQXBCLFVBQXFCLENBQU07UUFDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDWixNQUFNLG1FQUFtRSxDQUFDO1NBQzdFO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsd0JBQUksR0FBSixVQUFLLElBQVk7UUFDYixJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsd0JBQUksR0FBSixVQUFLLElBQVk7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLE9BQU8sc0JBQVUsQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFFRCxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXhFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JDLE9BQU8sc0JBQVUsQ0FBQyxPQUFPLENBQUM7U0FDN0I7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWpDQSxBQWlDQyxDQWpDOEIseUJBQVcsR0FpQ3pDO0FBakNZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW51bVN0YXR1cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEIzRGVjb3JhdG9yIH0gZnJvbSBcIi4uL2NvcmUvQjNEZWNvcmF0b3JcIjtcbmltcG9ydCB7IElCM0RlY29yYXRvclByb3AgfSBmcm9tIFwiLi4vY29yZS9CM0lOb2RlUHJvcGVydGllc1wiO1xuaW1wb3J0IHsgQjNUaWNrIH0gZnJvbSBcIi4uL2NvcmUvQjNUaWNrXCI7XG5cbiAgICBleHBvcnQgY2xhc3MgQjNNYXhUaW1lIGV4dGVuZHMgQjNEZWNvcmF0b3Ige1xuICAgICAgICBtYXhUaW1lOiBudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKGQ6IElNYXhUaW1lUHJvcCkge1xuICAgICAgICAgICAgc3VwZXIoZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHByb3RlY3RlZCBfcGFyc2VQcm9wKGQ6IGFueSkge1xuICAgICAgICAgICAgaWYgKCFkLm1heFRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnbWF4VGltZSBwYXJhbWV0ZXIgaW4gTWF4VGltZSBkZWNvcmF0b3IgaXMgYW4gb2JsaWdhdG9yeSBwYXJhbWV0ZXInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXhUaW1lID0gZC5tYXhUaW1lIHx8IDA7XG4gICAgICAgIH1cblxuICAgICAgICBvcGVuKHRpY2s6IEIzVGljaykge1xuICAgICAgICAgICAgdmFyIHN0YXJ0VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB0aWNrLmJsYWNrYm9hcmQuc2V0KCdzdGFydFRpbWUnLCBzdGFydFRpbWUsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aWNrKHRpY2s6IEIzVGljaykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEVudW1TdGF0dXMuRVJST1I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgc3RhcnRUaW1lID0gdGljay5ibGFja2JvYXJkLmdldCgnc3RhcnRUaW1lJywgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcblxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuY2hpbGQuZXhlY3V0ZSh0aWNrKTtcbiAgICAgICAgICAgIGlmIChjdXJyVGltZSAtIHN0YXJ0VGltZSA+IHRoaXMubWF4VGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBFbnVtU3RhdHVzLkZBSUxVUkU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgICAgIH1cbiAgICB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1heFRpbWVQcm9wIGV4dGVuZHMgSUIzRGVjb3JhdG9yUHJvcCB7XG4gICAgbWF4VGltZTogbnVtYmVyO1xufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/libs/behavior3ts/actions/B3Wait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9122ZsbIVMVo01pCrrQpa7', 'B3Wait');
// libs/b3/actions/B3Wait.ts

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
exports.B3Wait = void 0;
var Constants_1 = require("../Constants");
var B3Action_1 = require("../core/B3Action");
var B3Wait = /** @class */ (function (_super) {
    __extends(B3Wait, _super);
    function B3Wait(d) {
        return _super.call(this, d) || this;
    }
    B3Wait.prototype._parseProp = function (d) {
        this.endTime = d.milliseconds || 0;
    };
    B3Wait.prototype.open = function (tick) {
        var startTime = (new Date()).getTime();
        tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
    };
    B3Wait.prototype.tick = function (tick) {
        var currTime = (new Date()).getTime();
        var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
        if (currTime - startTime > this.endTime) {
            return Constants_1.EnumStatus.SUCCESS;
        }
        return Constants_1.EnumStatus.RUNNING;
    };
    return B3Wait;
}(B3Action_1.B3Action));
exports.B3Wait = B3Wait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9saWJzL2IzL2FjdGlvbnMvQjNXYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFDMUMsNkNBQTRDO0FBSTVDO0lBQTRCLDBCQUFRO0lBRWhDLGdCQUFZLENBQWM7ZUFDdEIsa0JBQU0sQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVTLDJCQUFVLEdBQXBCLFVBQXFCLENBQU07UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBR0QscUJBQUksR0FBSixVQUFLLElBQVk7UUFDYixJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBR0QscUJBQUksR0FBSixVQUFLLElBQVk7UUFDYixJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXhFLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JDLE9BQU8sc0JBQVUsQ0FBQyxPQUFPLENBQUM7U0FDN0I7UUFFRCxPQUFPLHNCQUFVLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0EzQkEsQUEyQkMsQ0EzQjJCLG1CQUFRLEdBMkJuQztBQTNCWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCM0FjdGlvbiB9IGZyb20gXCIuLi9jb3JlL0IzQWN0aW9uXCI7XG5pbXBvcnQgeyBJQjNOb2RlUHJvcCB9IGZyb20gXCIuLi9jb3JlL0IzSU5vZGVQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBCM1RpY2sgfSBmcm9tIFwiLi4vY29yZS9CM1RpY2tcIjtcblxuZXhwb3J0IGNsYXNzIEIzV2FpdCBleHRlbmRzIEIzQWN0aW9uIHtcbiAgICBlbmRUaW1lOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoZDogSUIzTm9kZVByb3ApIHtcbiAgICAgICAgc3VwZXIoZCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9wYXJzZVByb3AoZDogYW55KSB7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGQubWlsbGlzZWNvbmRzIHx8IDA7XG4gICAgfVxuXG5cbiAgICBvcGVuKHRpY2s6IEIzVGljaykge1xuICAgICAgICB2YXIgc3RhcnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnc3RhcnRUaW1lJywgc3RhcnRUaW1lLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xuICAgIH1cblxuXG4gICAgdGljayh0aWNrOiBCM1RpY2spIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IHRpY2suYmxhY2tib2FyZC5nZXQoJ3N0YXJ0VGltZScsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XG5cbiAgICAgICAgaWYgKGN1cnJUaW1lIC0gc3RhcnRUaW1lID4gdGhpcy5lbmRUaW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5TVUNDRVNTO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEVudW1TdGF0dXMuUlVOTklORztcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/behavior/behaviorTress/TestAI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0446cJ2m1xDNLJA/xMBu24/', 'TestAI');
// script/behavior/behaviorTress/TestAI.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var B3BehaviorTree_1 = require("../../../libs/behavior3ts/core/B3BehaviorTree");
var B3Blackboard_1 = require("../../../libs/behavior3ts/core/B3Blackboard");
var B3Utils_1 = require("../../../libs/behavior3ts/utils/B3Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TestAI = /** @class */ (function (_super) {
    __extends(TestAI, _super);
    function TestAI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attckTarget = null;
        return _this;
    }
    TestAI.prototype.start = function () {
        var _this = this;
        cc.tween(this.attckTarget).repeatForever(cc.tween(this.attckTarget).to(1, { x: 100 }).to(1, { x: 0 })).start();
        this.blackboardData = new B3Blackboard_1.B3Blackboard();
        cc.loader.loadRes("behavior3/testai3", cc.JsonAsset, function (err, json) {
            if (json) {
                _this.testTree = new B3BehaviorTree_1.B3BehaviorTree(B3Utils_1.createUUID());
                var data = json.json;
                _this.testTree.load(data, data.custom_nodes);
            }
        });
    };
    TestAI.prototype.update = function (dt) {
        if (this.attckTarget) {
            this.blackboardData.set("targetpos", this.attckTarget.position);
        }
        this.blackboardData.set("mypos", this.node.position);
        if (this.testTree) {
            this.testTree.tick({}, this.blackboardData);
        }
    };
    __decorate([
        property(cc.Node)
    ], TestAI.prototype, "attckTarget", void 0);
    TestAI = __decorate([
        ccclass
    ], TestAI);
    return TestAI;
}(cc.Component));
exports.default = TestAI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYmVoYXZpb3IvYmVoYXZpb3JUcmVzcy9UZXN0QUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0ZBQStFO0FBQy9FLDRFQUEyRTtBQUMzRSxtRUFBcUU7QUFDL0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUE4QkM7UUF6QkcsaUJBQVcsR0FBWSxJQUFJLENBQUE7O0lBeUIvQixDQUFDO0lBeEJHLHNCQUFLLEdBQUw7UUFBQSxpQkFhQztRQVpHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGFBQWEsQ0FDcEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FDL0QsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUVULElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUE7UUFDeEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUFrQjtZQUN6RSxJQUFJLElBQUksRUFBRTtnQkFDTixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksK0JBQWMsQ0FBQyxvQkFBVSxFQUFFLENBQUMsQ0FBQTtnQkFDaEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtnQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTthQUM5QztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQ2xFO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtTQUM5QztJQUNMLENBQUM7SUF4QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUztJQUxWLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E4QjFCO0lBQUQsYUFBQztDQTlCRCxBQThCQyxDQTlCbUMsRUFBRSxDQUFDLFNBQVMsR0E4Qi9DO2tCQTlCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEIzQmVoYXZpb3JUcmVlIH0gZnJvbSAnLi4vLi4vLi4vbGlicy9iZWhhdmlvcjN0cy9jb3JlL0IzQmVoYXZpb3JUcmVlJztcbmltcG9ydCB7IEIzQmxhY2tib2FyZCB9IGZyb20gJy4uLy4uLy4uL2xpYnMvYmVoYXZpb3IzdHMvY29yZS9CM0JsYWNrYm9hcmQnO1xuaW1wb3J0IHsgY3JlYXRlVVVJRCB9IGZyb20gJy4uLy4uLy4uL2xpYnMvYmVoYXZpb3IzdHMvdXRpbHMvQjNVdGlscyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RBSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgdGVzdFRyZWU6IEIzQmVoYXZpb3JUcmVlXG4gICAgYmxhY2tib2FyZERhdGE6IEIzQmxhY2tib2FyZFxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXR0Y2tUYXJnZXQ6IGNjLk5vZGUgPSBudWxsXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYXR0Y2tUYXJnZXQpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmF0dGNrVGFyZ2V0KS50bygxLCB7IHg6IDEwMCB9KS50bygxLCB7IHg6IDAgfSlcbiAgICAgICAgKS5zdGFydCgpXG5cbiAgICAgICAgdGhpcy5ibGFja2JvYXJkRGF0YSA9IG5ldyBCM0JsYWNrYm9hcmQoKVxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImJlaGF2aW9yMy90ZXN0YWkzXCIsIGNjLkpzb25Bc3NldCwgKGVyciwganNvbjogY2MuSnNvbkFzc2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAoanNvbikge1xuICAgICAgICAgICAgICAgIHRoaXMudGVzdFRyZWUgPSBuZXcgQjNCZWhhdmlvclRyZWUoY3JlYXRlVVVJRCgpKVxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ganNvbi5qc29uXG4gICAgICAgICAgICAgICAgdGhpcy50ZXN0VHJlZS5sb2FkKGRhdGEsIGRhdGEuY3VzdG9tX25vZGVzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5hdHRja1RhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5ibGFja2JvYXJkRGF0YS5zZXQoXCJ0YXJnZXRwb3NcIiwgdGhpcy5hdHRja1RhcmdldC5wb3NpdGlvbilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJsYWNrYm9hcmREYXRhLnNldChcIm15cG9zXCIsIHRoaXMubm9kZS5wb3NpdGlvbilcbiAgICAgICAgaWYgKHRoaXMudGVzdFRyZWUpIHtcbiAgICAgICAgICAgIHRoaXMudGVzdFRyZWUudGljayh7fSwgdGhpcy5ibGFja2JvYXJkRGF0YSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/behavior/CustomCondtion/DisCondition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89872JvBMRCsJFpPK/pO9Ds', 'DisCondition');
// script/behavior/CustomCondtion/DisCondition.ts

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
var B3Condition_1 = require("../../../libs/behavior3ts/core/B3Condition");
var DisCondition = /** @class */ (function (_super) {
    __extends(DisCondition, _super);
    function DisCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisCondition.prototype.tick = function (tick) {
        var myPos = tick.blackboard.get("mypos");
        var targetPos = tick.blackboard.get("targetpos");
        var dis = myPos.sub(targetPos).mag();
        if (dis < this.dis) {
            return Constants_1.EnumStatus.SUCCESS;
        }
        return Constants_1.EnumStatus.FAILURE;
    };
    DisCondition.prototype._parseProp = function (d) {
        this.dis = d.dis;
    };
    DisCondition.prototype.setTarget = function (v) {
        this.target = v;
    };
    DisCondition.prototype.getTarget = function () {
        return this.target;
    };
    return DisCondition;
}(B3Condition_1.B3Condition));
exports.default = DisCondition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYmVoYXZpb3IvQ3VzdG9tQ29uZHRpb24vRGlzQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFpRTtBQUNqRSwwRUFBeUU7QUFFekU7SUFBMEMsZ0NBQVc7SUFBckQ7O0lBeUJBLENBQUM7SUFyQkcsMkJBQUksR0FBSixVQUFLLElBQWlCO1FBQ2xCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBWSxDQUFBO1FBQ25ELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBWSxDQUFBO1FBQzNELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDcEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNoQixPQUFPLHNCQUFVLENBQUMsT0FBTyxDQUFBO1NBQzVCO1FBQ0QsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQTtJQUM3QixDQUFDO0lBRVMsaUNBQVUsR0FBcEIsVUFBcUIsQ0FBTTtRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUE7SUFDcEIsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxDQUFDO1FBQ1AsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDbkIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0F6QkEsQUF5QkMsQ0F6QnlDLHlCQUFXLEdBeUJwRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9saWJzL2JlaGF2aW9yM3RzL0NvbnN0YW50cyc7XG5pbXBvcnQgeyBCM0NvbmRpdGlvbiB9IGZyb20gJy4uLy4uLy4uL2xpYnMvYmVoYXZpb3IzdHMvY29yZS9CM0NvbmRpdGlvbic7XG5pbXBvcnQgeyBCM1RpY2sgfSBmcm9tICcuLi8uLi8uLi9saWJzL2JlaGF2aW9yM3RzL2NvcmUvQjNUaWNrJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc0NvbmRpdGlvbiBleHRlbmRzIEIzQ29uZGl0aW9uIHtcbiAgICB0YXJnZXQ7XG4gICAgZGlzO1xuXG4gICAgdGljayh0aWNrOiBCM1RpY2s8YW55Pik6IEVudW1TdGF0dXMge1xuICAgICAgICBsZXQgbXlQb3MgPSB0aWNrLmJsYWNrYm9hcmQuZ2V0KFwibXlwb3NcIikgYXMgY2MuVmVjM1xuICAgICAgICBsZXQgdGFyZ2V0UG9zID0gdGljay5ibGFja2JvYXJkLmdldChcInRhcmdldHBvc1wiKSBhcyBjYy5WZWMzXG4gICAgICAgIGxldCBkaXMgPSBteVBvcy5zdWIodGFyZ2V0UG9zKS5tYWcoKVxuICAgICAgICBpZiAoZGlzIDwgdGhpcy5kaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBFbnVtU3RhdHVzLlNVQ0NFU1NcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5GQUlMVVJFXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9wYXJzZVByb3AoZDogYW55KSB7XG4gICAgICAgIHRoaXMuZGlzID0gZC5kaXNcbiAgICB9XG5cbiAgICBzZXRUYXJnZXQodikge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHZcbiAgICB9XG5cbiAgICBnZXRUYXJnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldFxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/behavior/CustomCondtion/TargetCondition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3385QdwsJKuIoTU4b0DLl0', 'TargetCondition');
// script/behavior/CustomCondtion/TargetCondition.ts

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
var B3Condition_1 = require("../../../libs/behavior3ts/core/B3Condition");
var TargetCondition = /** @class */ (function (_super) {
    __extends(TargetCondition, _super);
    function TargetCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetCondition.prototype.tick = function (tick) {
        if (this.target == tick.blackboard.get("target")) {
            return Constants_1.EnumStatus.SUCCESS;
        }
        Constants_1.EnumStatus.FAILURE;
    };
    return TargetCondition;
}(B3Condition_1.B3Condition));
exports.default = TargetCondition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYmVoYXZpb3IvQ3VzdG9tQ29uZHRpb24vVGFyZ2V0Q29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFpRTtBQUNqRSwwRUFBeUU7QUFFekU7SUFBNkMsbUNBQVc7SUFBeEQ7O0lBUUEsQ0FBQztJQU5HLDhCQUFJLEdBQUosVUFBSyxJQUFpQjtRQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDOUMsT0FBTyxzQkFBVSxDQUFDLE9BQU8sQ0FBQTtTQUM1QjtRQUNELHNCQUFVLENBQUMsT0FBTyxDQUFBO0lBQ3RCLENBQUM7SUFDTCxzQkFBQztBQUFELENBUkEsQUFRQyxDQVI0Qyx5QkFBVyxHQVF2RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1TdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9saWJzL2JlaGF2aW9yM3RzL0NvbnN0YW50cyc7XG5pbXBvcnQgeyBCM0NvbmRpdGlvbiB9IGZyb20gJy4uLy4uLy4uL2xpYnMvYmVoYXZpb3IzdHMvY29yZS9CM0NvbmRpdGlvbic7XG5pbXBvcnQgeyBCM1RpY2sgfSBmcm9tICcuLi8uLi8uLi9saWJzL2JlaGF2aW9yM3RzL2NvcmUvQjNUaWNrJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldENvbmRpdGlvbiBleHRlbmRzIEIzQ29uZGl0aW9uIHtcbiAgICB0YXJnZXRcbiAgICB0aWNrKHRpY2s6IEIzVGljazxhbnk+KTogRW51bVN0YXR1cyB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCA9PSB0aWNrLmJsYWNrYm9hcmQuZ2V0KFwidGFyZ2V0XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gRW51bVN0YXR1cy5TVUNDRVNTXG4gICAgICAgIH1cbiAgICAgICAgRW51bVN0YXR1cy5GQUlMVVJFXG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------
