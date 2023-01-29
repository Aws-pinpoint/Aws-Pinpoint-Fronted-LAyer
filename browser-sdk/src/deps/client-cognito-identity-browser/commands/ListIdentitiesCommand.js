"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var ListIdentities_1 = require("../model/ListIdentities");
var ListIdentitiesCommand = /** @class */ (function () {
    function ListIdentitiesCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    ListIdentitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: ListIdentities_1.ListIdentities
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return ListIdentitiesCommand;
}());
exports.ListIdentitiesCommand = ListIdentitiesCommand;
//# sourceMappingURL=ListIdentitiesCommand.js.map