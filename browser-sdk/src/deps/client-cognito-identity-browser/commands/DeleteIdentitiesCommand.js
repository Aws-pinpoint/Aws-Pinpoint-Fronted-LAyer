"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var DeleteIdentities_1 = require("../model/DeleteIdentities");
var DeleteIdentitiesCommand = /** @class */ (function () {
    function DeleteIdentitiesCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    DeleteIdentitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: DeleteIdentities_1.DeleteIdentities
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return DeleteIdentitiesCommand;
}());
exports.DeleteIdentitiesCommand = DeleteIdentitiesCommand;
//# sourceMappingURL=DeleteIdentitiesCommand.js.map