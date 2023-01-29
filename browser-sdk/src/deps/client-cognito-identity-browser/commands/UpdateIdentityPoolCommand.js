"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var UpdateIdentityPool_1 = require("../model/UpdateIdentityPool");
var UpdateIdentityPoolCommand = /** @class */ (function () {
    function UpdateIdentityPoolCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    UpdateIdentityPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: UpdateIdentityPool_1.UpdateIdentityPool
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return UpdateIdentityPoolCommand;
}());
exports.UpdateIdentityPoolCommand = UpdateIdentityPoolCommand;
//# sourceMappingURL=UpdateIdentityPoolCommand.js.map