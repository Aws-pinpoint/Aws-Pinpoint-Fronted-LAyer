"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var ListIdentityPools_1 = require("../model/ListIdentityPools");
var ListIdentityPoolsCommand = /** @class */ (function () {
    function ListIdentityPoolsCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    ListIdentityPoolsCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: ListIdentityPools_1.ListIdentityPools
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return ListIdentityPoolsCommand;
}());
exports.ListIdentityPoolsCommand = ListIdentityPoolsCommand;
//# sourceMappingURL=ListIdentityPoolsCommand.js.map