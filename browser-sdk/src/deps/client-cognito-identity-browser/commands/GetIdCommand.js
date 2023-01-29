"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var GetId_1 = require("../model/GetId");
var GetIdCommand = /** @class */ (function () {
    function GetIdCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    GetIdCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: GetId_1.GetId
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return GetIdCommand;
}());
exports.GetIdCommand = GetIdCommand;
//# sourceMappingURL=GetIdCommand.js.map