"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var SetIdentityPoolRoles_1 = require("../model/SetIdentityPoolRoles");
var SetIdentityPoolRolesCommand = /** @class */ (function () {
    function SetIdentityPoolRolesCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    SetIdentityPoolRolesCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: SetIdentityPoolRoles_1.SetIdentityPoolRoles
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return SetIdentityPoolRolesCommand;
}());
exports.SetIdentityPoolRolesCommand = SetIdentityPoolRolesCommand;
//# sourceMappingURL=SetIdentityPoolRolesCommand.js.map