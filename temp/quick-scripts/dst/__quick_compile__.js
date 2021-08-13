
(function () {
var scripts = [{"deps":{"./assets/libs/behavior3ts/actions/B3Failer":12,"./assets/libs/behavior3ts/actions/B3Succeeder":24,"./assets/libs/behavior3ts/actions/B3Wait":32,"./assets/libs/behavior3ts/actions/B3Error":16,"./assets/libs/behavior3ts/composites/B3MemSequence":10,"./assets/libs/behavior3ts/composites/B3Priority":9,"./assets/libs/behavior3ts/composites/B3Sequence":11,"./assets/libs/behavior3ts/composites/B3MemPriority":5,"./assets/libs/behavior3ts/core/B3BaseNode":13,"./assets/libs/behavior3ts/core/B3BehaviorTree":14,"./assets/libs/behavior3ts/core/B3BehaviorTreeGroup":28,"./assets/libs/behavior3ts/core/B3Blackboard":29,"./assets/libs/behavior3ts/core/B3Composite":17,"./assets/libs/behavior3ts/core/B3Decorator":19,"./assets/libs/behavior3ts/core/B3Condition":15,"./assets/libs/behavior3ts/core/B3INodeProperties":18,"./assets/libs/behavior3ts/core/B3Tick":20,"./assets/libs/behavior3ts/core/B3Action":21,"./assets/libs/behavior3ts/decorators/B3Limiter":6,"./assets/libs/behavior3ts/decorators/B3MaxTime":31,"./assets/libs/behavior3ts/decorators/B3RepeatUntilFailure":26,"./assets/libs/behavior3ts/decorators/B3RepeatUntilSuccess":25,"./assets/libs/behavior3ts/decorators/B3Repeater":23,"./assets/libs/behavior3ts/decorators/B3Inverter":22,"./assets/libs/behavior3ts/register/B3CompositesClsRegister":27,"./assets/libs/behavior3ts/register/B3CustomClsRegister":35,"./assets/libs/behavior3ts/register/B3DecoratorsClsRegister":30,"./assets/libs/behavior3ts/register/B3ActionsClsRegister":7,"./assets/libs/behavior3ts/utils/B3Utils":8,"./assets/libs/behavior3ts/Constants":3,"./assets/libs/behavior3ts/actions/B3Runner":4,"./assets/script/behavior/CustomCondtion/TargetCondition":38,"./assets/script/behavior/CustomCondtion/DisCondition":37,"./assets/script/behavior/behaviorTress/TestAI":33,"./assets/script/behavior/CustomActions/Log":36,"./assets/script/behavior/CustomActions/CustomAction":34},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/libs/b3/decorators/Inverter.js"},{"deps":{},"path":"preview-scripts/assets/libs/b3/decorators/Limiter.js"},{"deps":{},"path":"preview-scripts/assets/libs/behavior3ts/Constants.js"},{"deps":{"../Constants":3,"../core/B3Action":21},"path":"preview-scripts/assets/libs/behavior3ts/actions/B3Runner.js"},{"deps":{"../Constants":3,"../core/B3Composite":17},"path":"preview-scripts/assets/libs/behavior3ts/composites/B3MemPriority.js"},{"deps":{"../Constants":3,"../core/B3Decorator":19},"path":"preview-scripts/assets/libs/behavior3ts/decorators/B3Limiter.js"},{"deps":{"../actions/B3Error":16,"../actions/B3Failer":12,"../actions/B3Runner":4,"../actions/B3Wait":32,"../actions/B3Succeeder":24},"path":"preview-scripts/assets/libs/behavior3ts/register/B3ActionsClsRegister.js"},{"deps":{},"path":"preview-scripts/assets/libs/behavior3ts/utils/B3Utils.js"},{"deps":{"../Constants":3,"../core/B3Composite":17},"path":"preview-scripts/assets/libs/behavior3ts/composites/B3Priority.js"},{"deps":{"../Constants":3,"../core/B3Composite":17},"path":"preview-scripts/assets/libs/behavior3ts/composites/B3MemSequence.js"},{"deps":{"../Constants":3,"../core/B3Composite":17},"path":"preview-scripts/assets/libs/behavior3ts/composites/B3Sequence.js"},{"deps":{"../core/B3Action":21,"../Constants":3},"path":"preview-scripts/assets/libs/behavior3ts/actions/B3Failer.js"},{"deps":{"../Constants":3,"../utils/B3Utils":8},"path":"preview-scripts/assets/libs/behavior3ts/core/B3BaseNode.js"},{"deps":{"../Constants":3,"./B3Tick":20,"../register/B3CustomClsRegister":35,"../register/B3DecoratorsClsRegister":30,"../register/B3CompositesClsRegister":27,"../register/B3ActionsClsRegister":7,"../utils/B3Utils":8},"path":"preview-scripts/assets/libs/behavior3ts/core/B3BehaviorTree.js"},{"deps":{"./B3BaseNode":13,"../Constants":3},"path":"preview-scripts/assets/libs/behavior3ts/core/B3Condition.js"},{"deps":{"../core/B3Action":21,"../Constants":3},"path":"preview-scripts/assets/libs/behavior3ts/actions/B3Error.js"},{"deps":{"./B3BaseNode":13,"../Constants":3},"path":"preview-scripts/assets/libs/behavior3ts/core/B3Composite.js"},{"deps":{},"path":"preview-scripts/assets/libs/behavior3ts/core/B3INodeProperties.js"},{"deps":{"../Constants":3,"./B3BaseNode":13},"path":"preview-scripts/assets/libs/behavior3ts/core/B3Decorator.js"},{"deps":{},"path":"preview-scripts/assets/libs/behavior3ts/core/B3Tick.js"},{"deps":{"../Constants":3,"./B3BaseNode":13},"path":"preview-scripts/assets/libs/behavior3ts/core/B3Action.js"},{"deps":{"../core/B3Decorator":19,"../Constants":3},"path":"preview-scripts/assets/libs/behavior3ts/decorators/B3Inverter.js"},{"deps":{"../Constants":3,"../core/B3Decorator":19},"path":"preview-scripts/assets/libs/behavior3ts/decorators/B3Repeater.js"},{"deps":{"../Constants":3,"../core/B3Action":21},"path":"preview-scripts/assets/libs/behavior3ts/actions/B3Succeeder.js"},{"deps":{"../Constants":3,"../core/B3Decorator":19},"path":"preview-scripts/assets/libs/behavior3ts/decorators/B3RepeatUntilSuccess.js"},{"deps":{"../core/B3Decorator":19,"../Constants":3},"path":"preview-scripts/assets/libs/behavior3ts/decorators/B3RepeatUntilFailure.js"},{"deps":{"../composites/B3MemPriority":5,"../composites/B3MemSequence":10,"../composites/B3Priority":9,"../composites/B3Sequence":11},"path":"preview-scripts/assets/libs/behavior3ts/register/B3CompositesClsRegister.js"},{"deps":{"./B3BehaviorTree":14},"path":"preview-scripts/assets/libs/behavior3ts/core/B3BehaviorTreeGroup.js"},{"deps":{},"path":"preview-scripts/assets/libs/behavior3ts/core/B3Blackboard.js"},{"deps":{"../decorators/B3Inverter":22,"../decorators/B3Limiter":6,"../decorators/B3MaxTime":31,"../decorators/B3Repeater":23,"../decorators/B3RepeatUntilFailure":26,"../decorators/B3RepeatUntilSuccess":25},"path":"preview-scripts/assets/libs/behavior3ts/register/B3DecoratorsClsRegister.js"},{"deps":{"../Constants":3,"../core/B3Decorator":19},"path":"preview-scripts/assets/libs/behavior3ts/decorators/B3MaxTime.js"},{"deps":{"../Constants":3,"../core/B3Action":21},"path":"preview-scripts/assets/libs/behavior3ts/actions/B3Wait.js"},{"deps":{"../../../libs/behavior3ts/utils/B3Utils":8,"../../../libs/behavior3ts/core/B3BehaviorTree":14,"../../../libs/behavior3ts/core/B3Blackboard":29},"path":"preview-scripts/assets/script/behavior/behaviorTress/TestAI.js"},{"deps":{"../../../libs/behavior3ts/core/B3Action":21,"../../../libs/behavior3ts/Constants":3},"path":"preview-scripts/assets/script/behavior/CustomActions/CustomAction.js"},{"deps":{"../../../script/behavior/CustomCondtion/TargetCondition":38,"../../../script/behavior/CustomCondtion/DisCondition":37,"../../../script/behavior/CustomActions/Log":36,"../../../script/behavior/CustomActions/CustomAction":34},"path":"preview-scripts/assets/libs/behavior3ts/register/B3CustomClsRegister.js"},{"deps":{"../../../libs/behavior3ts/Constants":3,"../../../libs/behavior3ts/core/B3Action":21},"path":"preview-scripts/assets/script/behavior/CustomActions/Log.js"},{"deps":{"../../../libs/behavior3ts/core/B3Condition":15,"../../../libs/behavior3ts/Constants":3},"path":"preview-scripts/assets/script/behavior/CustomCondtion/DisCondition.js"},{"deps":{"../../../libs/behavior3ts/Constants":3,"../../../libs/behavior3ts/core/B3Condition":15},"path":"preview-scripts/assets/script/behavior/CustomCondtion/TargetCondition.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    