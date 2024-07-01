"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = hello;
//export own function and use other module
var module_ts_1 = require("./module.ts");
function hello() {
    return (0, module_ts_1.nihao)();
}
