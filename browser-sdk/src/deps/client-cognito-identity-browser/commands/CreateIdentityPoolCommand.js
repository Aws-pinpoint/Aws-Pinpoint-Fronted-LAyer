"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var CreateIdentityPool_1 = require("../model/CreateIdentityPool");
var CreateIdentityPoolCommand = /** @class */ (function () {
    function CreateIdentityPoolCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    CreateIdentityPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: CreateIdentityPool_1.CreateIdentityPool
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return CreateIdentityPoolCommand;
}());
exports.CreateIdentityPoolCommand = CreateIdentityPoolCommand;
//# sourceMappingURL=CreateIdentityPoolCommand.js.map