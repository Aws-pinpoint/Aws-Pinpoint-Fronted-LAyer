"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var UnlinkIdentity_1 = require("../model/UnlinkIdentity");
var UnlinkIdentityCommand = /** @class */ (function () {
    function UnlinkIdentityCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    UnlinkIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: UnlinkIdentity_1.UnlinkIdentity
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return UnlinkIdentityCommand;
}());
exports.UnlinkIdentityCommand = UnlinkIdentityCommand;
//# sourceMappingURL=UnlinkIdentityCommand.js.map