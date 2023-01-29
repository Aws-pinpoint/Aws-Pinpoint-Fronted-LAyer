"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListIdentityPoolsInput_1 = require("./ListIdentityPoolsInput");
var ListIdentityPoolsOutput_1 = require("./ListIdentityPoolsOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.ListIdentityPools = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'ListIdentityPools',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListIdentityPoolsInput_1.ListIdentityPoolsInput,
    },
    output: {
        shape: ListIdentityPoolsOutput_1.ListIdentityPoolsOutput,
    },
    errors: [
        {
            shape: InvalidParameterException_1.InvalidParameterException,
        },
        {
            shape: NotAuthorizedException_1.NotAuthorizedException,
        },
        {
            shape: TooManyRequestsException_1.TooManyRequestsException,
        },
        {
            shape: InternalErrorException_1.InternalErrorException,
        },
    ],
};
//# sourceMappingURL=ListIdentityPools.js.map