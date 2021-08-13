"use strict";
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