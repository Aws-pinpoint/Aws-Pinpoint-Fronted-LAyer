"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var DescribeIdentity_1 = require("../model/DescribeIdentity");
var DescribeIdentityCommand = /** @class */ (function () {
    function DescribeIdentityCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    DescribeIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: DescribeIdentity_1.DescribeIdentity
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return DescribeIdentityCommand;
}());
exports.DescribeIdentityCommand = DescribeIdentityCommand;
//# sourceMappingURL=DescribeIdentityCommand.js.map