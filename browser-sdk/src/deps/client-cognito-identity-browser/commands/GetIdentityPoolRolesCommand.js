"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var GetIdentityPoolRoles_1 = require("../model/GetIdentityPoolRoles");
var GetIdentityPoolRolesCommand = /** @class */ (function () {
    function GetIdentityPoolRolesCommand(input) {
        this.input = input;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    GetIdentityPoolRolesCommand.prototype.resolveMiddleware = function (clientStack, configuration) {
        var handler = configuration.handler;
        var stack = clientStack.concat(this.middlewareStack);
        var handlerExecutionContext = {
            logger: {},
            model: GetIdentityPoolRoles_1.GetIdentityPoolRoles
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    };
    return GetIdentityPoolRolesCommand;
}());
exports.GetIdentityPoolRolesCommand = GetIdentityPoolRolesCommand;
//# sourceMappingURL=GetIdentityPoolRolesCommand.js.map