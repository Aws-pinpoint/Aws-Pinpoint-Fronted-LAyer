"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __aws_crypto_sha256_browser = require("@aws-crypto/sha256-browser");
var __aws_sdk_core_handler = require("@aws-sdk/core-handler");
var __aws_sdk_fetch_http_handler = require("@aws-sdk/fetch-http-handler");
var __aws_sdk_json_builder = require("@aws-sdk/json-builder");
var __aws_sdk_json_error_unmarshaller = require("@aws-sdk/json-error-unmarshaller");
var __aws_sdk_json_parser = require("@aws-sdk/json-parser");
var __aws_sdk_protocol_json_rpc = require("@aws-sdk/protocol-json-rpc");
var __aws_sdk_signature_v4 = require("@aws-sdk/signature-v4");
var __aws_sdk_stream_collector_browser = require("@aws-sdk/stream-collector-browser");
var __aws_sdk_url_parser_browser = require("@aws-sdk/url-parser-browser");
var __aws_sdk_util_base64_browser = require("@aws-sdk/util-base64-browser");
var __aws_sdk_util_body_length_browser = require("@aws-sdk/util-body-length-browser");
var __aws_sdk_util_utf8_browser = require("@aws-sdk/util-utf8-browser");
exports.configurationProperties = {
    profile: {},
    maxRedirects: {
        defaultValue: 10
    },
    maxRetries: {
        defaultValue: 3
    },
    region: {
        required: true,
        normalize: function (value) {
            if (typeof value === 'string') {
                var promisified_1 = Promise.resolve(value);
                return function () { return promisified_1; };
            }
            return value;
        }
    },
    sslEnabled: {
        defaultValue: true
    },
    urlParser: {
        defaultValue: __aws_sdk_url_parser_browser.parseUrl
    },
    endpointProvider: {
        defaultValue: function (sslEnabled, region) { return ({
            protocol: sslEnabled ? 'https:' : 'http:',
            path: '/',
            hostname: "cognito-identity." + region + ".amazonaws.com"
        }); }
    },
    endpoint: {
        defaultProvider: function (configuration) {
            var promisified = configuration.region()
                .then(function (region) { return configuration.endpointProvider(configuration.sslEnabled, region); });
            return function () { return promisified; };
        },
        normalize: function (value, configuration) {
            if (typeof value === 'string') {
                var promisified_2 = Promise.resolve(configuration.urlParser(value));
                return function () { return promisified_2; };
            }
            else if (typeof value === 'object') {
                var promisified_3 = Promise.resolve(value);
                return function () { return promisified_3; };
            }
            // Users are not required to supply an endpoint, so `value`
            // could be undefined. This function, however, will only be
            // invoked if `value` is defined, so the return will never
            // be undefined.
            return value;
        }
    },
    base64Decoder: {
        defaultValue: __aws_sdk_util_base64_browser.fromBase64
    },
    base64Encoder: {
        defaultValue: __aws_sdk_util_base64_browser.toBase64
    },
    utf8Decoder: {
        defaultValue: __aws_sdk_util_utf8_browser.fromUtf8
    },
    utf8Encoder: {
        defaultValue: __aws_sdk_util_utf8_browser.toUtf8
    },
    streamCollector: {
        defaultValue: __aws_sdk_stream_collector_browser.streamCollector
    },
    serializer: {
        defaultProvider: function (configuration) {
            var promisified = configuration.endpoint()
                .then(function (endpoint) { return new __aws_sdk_protocol_json_rpc.JsonRpcSerializer(endpoint, new __aws_sdk_json_builder.JsonBuilder(configuration.base64Encoder, configuration.utf8Decoder)); });
            return function () { return promisified; };
        }
    },
    parser: {
        defaultProvider: function (configuration) { return new __aws_sdk_protocol_json_rpc.JsonRpcParser(new __aws_sdk_json_parser.JsonParser(configuration.base64Decoder), __aws_sdk_json_error_unmarshaller.jsonErrorUnmarshaller, configuration.streamCollector, configuration.utf8Encoder); }
    },
    _user_injected_http_handler: {
        defaultProvider: function (configuration) { return !configuration.httpHandler; }
    },
    httpHandler: {
        defaultProvider: function () { return new __aws_sdk_fetch_http_handler.FetchHttpHandler(); }
    },
    handler: {
        defaultProvider: function (configuration) { return __aws_sdk_core_handler.coreHandler(configuration.httpHandler, configuration.parser); }
    },
    bodyLengthChecker: {
        defaultValue: __aws_sdk_util_body_length_browser.calculateBodyLength
    },
    retryDecider: {},
    delayDecider: {},
    credentials: {
        required: true,
        normalize: function (value) {
            if (typeof value === 'object') {
                var promisified_4 = Promise.resolve(value);
                return function () { return promisified_4; };
            }
            return value;
        }
    },
    sha256: {
        defaultValue: __aws_crypto_sha256_browser.Sha256
    },
    signingName: {
        defaultValue: 'cognito-identity'
    },
    signer: {
        defaultProvider: function (configuration) { return new __aws_sdk_signature_v4.SignatureV4({
            credentials: configuration.credentials,
            region: configuration.region,
            service: configuration.signingName,
            sha256: configuration.sha256,
            uriEscapePath: false,
        }); }
    },
};
//# sourceMappingURL=CognitoIdentityConfiguration.js.map