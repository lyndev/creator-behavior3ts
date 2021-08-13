
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