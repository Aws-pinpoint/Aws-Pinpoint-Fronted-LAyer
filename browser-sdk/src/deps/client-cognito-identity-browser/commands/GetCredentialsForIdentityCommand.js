"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var GetCredentialsForIdentity_1 = require("../model/GetCredentialsForIdentity");
var GetCredentialsForIdentityCommand = /** @class */ (function () {
    function GetCredentialsForIdentityCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    GetCredentialsForIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: GetCredentialsForIdentity_1.GetCredentialsForIdentity
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return GetCredentialsForIdentityCommand;
}());
exports.GetCredentialsForIdentityCommand = GetCredentialsForIdentityCommand;
//# sourceMappingURL=GetCredentialsForIdentityCommand.js.map