"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var MergeDeveloperIdentities_1 = require("../model/MergeDeveloperIdentities");
var MergeDeveloperIdentitiesCommand = /** @class */ (function () {
    function MergeDeveloperIdentitiesCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    MergeDeveloperIdentitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: MergeDeveloperIdentities_1.MergeDeveloperIdentities
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return MergeDeveloperIdentitiesCommand;
}());
exports.MergeDeveloperIdentitiesCommand = MergeDeveloperIdentitiesCommand;
//# sourceMappingURL=MergeDeveloperIdentitiesCommand.js.map