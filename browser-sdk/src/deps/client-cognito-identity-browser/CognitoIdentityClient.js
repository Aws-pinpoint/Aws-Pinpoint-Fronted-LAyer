"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_sdk_config_resolver = require("@aws-sdk/config-resolver");
var __aws_sdk_middleware_content_length = require("@aws-sdk/middleware-content-length");
var __aws_sdk_middleware_header_default = require("@aws-sdk/middleware-header-default");
var __aws_sdk_middleware_serializer = require("@aws-sdk/middleware-serializer");
var __aws_sdk_middleware_stack = require("@aws-sdk/middleware-stack");
var __aws_sdk_retry_middleware = require("@aws-sdk/retry-middleware");
var __aws_sdk_signing_middleware = require("@aws-sdk/signing-middleware");
var __aws_sdk_util_user_agent_browser = require("@aws-sdk/util-user-agent-browser");
var CognitoIdentityConfiguration_1 = require("./CognitoIdentityConfiguration");
var ServiceMetadata_1 = require("./model/ServiceMetadata");
var CognitoIdentityClient = /** @class */ (function () {
    function CognitoIdentityClient(configuration) {
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
        this.config = __aws_sdk_config_resolver.resolveConfiguration(configuration, CognitoIdentityConfiguration_1.configurationProperties, this.middlewareStack);
        this.middlewareStack.add(__aws_sdk_middleware_serializer.serializerMiddleware(this.config.serializer), {
            step: 'serialize',
            priority: 90,
            tags: { SERIALIZER: true }
        });
        this.middlewareStack.add(__aws_sdk_middleware_content_length.contentLengthMiddleware(this.config.bodyLengthChecker), {
            step: 'build',
            priority: -80,
            tags: { SET_CONTENT_LENGTH: true }
        });
        if (this.config.maxRetries > 0) {
            this.middlewareStack.add(__aws_sdk_retry_middleware.retryMiddleware(this.config.maxRetries, this.config.retryDecider, this.config.delayDecider), {
                step: 'finalize',
                priority: Infinity,
                tags: { RETRY: true }
            });
        }
        this.middlewareStack.add(__aws_sdk_signing_middleware.signingMiddleware(this.config.signer), {
            step: 'finalize',
            priority: 0,
            tags: { SIGNATURE: true }
        });
        this.middlewareStack.add(__aws_sdk_middleware_header_default.headerDefault({
            'X-Amz-User-Agent': __aws_sdk_util_user_agent_browser.defaultUserAgent(ServiceMetadata_1.ServiceMetadata.serviceId || ServiceMetadata_1.ServiceMetadata.endpointPrefix, ServiceMetadata_1.clientVersion)
        }), {
            step: 'build',
            priority: 0,
            tags: { SET_USER_AGENT: true }
        });
    }
    CognitoIdentityClient.prototype.destroy = function () {
        if (!this.config._user_injected_http_handler) {
            this.config.httpHandler.destroy();
        }
    };
    CognitoIdentityClient.prototype.send = function (command, cb) {
        var handler = command.resolveMiddleware(this.middlewareStack, this.config);
        if (cb) {
            handler(command).then(function (result) { return cb(null, result); }, function (err) { return cb(err); }).catch(
            // prevent any errors thrown in the callback from triggering an
            // unhandled promise rejection
            function () { });
        }
        else {
            return handler(command);
        }
    };
    return CognitoIdentityClient;
}());
exports.CognitoIdentityClient = CognitoIdentityClient;
//# sourceMappingURL=CognitoIdentityClient.js.map