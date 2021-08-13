"use strict";
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