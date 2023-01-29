"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var LookupDeveloperIdentity_1 = require("../model/LookupDeveloperIdentity");
var LookupDeveloperIdentityCommand = /** @class */ (function () {
    function LookupDeveloperIdentityCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    LookupDeveloperIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: LookupDeveloperIdentity_1.LookupDeveloperIdentity
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return LookupDeveloperIdentityCommand;
}());
exports.LookupDeveloperIdentityCommand = LookupDeveloperIdentityCommand;
//# sourceMappingURL=LookupDeveloperIdentityCommand.js.map