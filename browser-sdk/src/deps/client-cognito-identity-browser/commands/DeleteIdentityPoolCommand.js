"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var DeleteIdentityPool_1 = require("../model/DeleteIdentityPool");
var DeleteIdentityPoolCommand = /** @class */ (function () {
    function DeleteIdentityPoolCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    DeleteIdentityPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: DeleteIdentityPool_1.DeleteIdentityPool
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return DeleteIdentityPoolCommand;
}());
exports.DeleteIdentityPoolCommand = DeleteIdentityPoolCommand;
//# sourceMappingURL=DeleteIdentityPoolCommand.js.map