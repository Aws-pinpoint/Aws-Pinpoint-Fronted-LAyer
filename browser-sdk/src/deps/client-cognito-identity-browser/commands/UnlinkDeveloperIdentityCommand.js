"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var UnlinkDeveloperIdentity_1 = require("../model/UnlinkDeveloperIdentity");
var UnlinkDeveloperIdentityCommand = /** @class */ (function () {
    function UnlinkDeveloperIdentityCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    UnlinkDeveloperIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: UnlinkDeveloperIdentity_1.UnlinkDeveloperIdentity
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return UnlinkDeveloperIdentityCommand;
}());
exports.UnlinkDeveloperIdentityCommand = UnlinkDeveloperIdentityCommand;
//# sourceMappingURL=UnlinkDeveloperIdentityCommand.js.map