"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var DescribeIdentityPool_1 = require("../model/DescribeIdentityPool");
var DescribeIdentityPoolCommand = /** @class */ (function () {
    function DescribeIdentityPoolCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    DescribeIdentityPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: DescribeIdentityPool_1.DescribeIdentityPool
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return DescribeIdentityPoolCommand;
}());
exports.DescribeIdentityPoolCommand = DescribeIdentityPoolCommand;
//# sourceMappingURL=DescribeIdentityPoolCommand.js.map