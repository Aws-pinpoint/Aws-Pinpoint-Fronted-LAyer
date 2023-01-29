"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var GetOpenIdToken_1 = require("../model/GetOpenIdToken");
var GetOpenIdTokenCommand = /** @class */ (function () {
    function GetOpenIdTokenCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    GetOpenIdTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: GetOpenIdToken_1.GetOpenIdToken
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return GetOpenIdTokenCommand;
}());
exports.GetOpenIdTokenCommand = GetOpenIdTokenCommand;
//# sourceMappingURL=GetOpenIdTokenCommand.js.map