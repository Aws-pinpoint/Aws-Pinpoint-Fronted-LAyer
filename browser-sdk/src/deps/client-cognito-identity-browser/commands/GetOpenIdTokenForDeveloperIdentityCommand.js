"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var GetOpenIdTokenForDeveloperIdentity_1 = require("../model/GetOpenIdTokenForDeveloperIdentity");
var GetOpenIdTokenForDeveloperIdentityCommand = /** @class */ (function () {
    function GetOpenIdTokenForDeveloperIdentityCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    GetOpenIdTokenForDeveloperIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: GetOpenIdTokenForDeveloperIdentity_1.GetOpenIdTokenForDeveloperIdentity
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return GetOpenIdTokenForDeveloperIdentityCommand;
}());
exports.GetOpenIdTokenForDeveloperIdentityCommand = GetOpenIdTokenForDeveloperIdentityCommand;
//# sourceMappingURL=GetOpenIdTokenForDeveloperIdentityCommand.js.map