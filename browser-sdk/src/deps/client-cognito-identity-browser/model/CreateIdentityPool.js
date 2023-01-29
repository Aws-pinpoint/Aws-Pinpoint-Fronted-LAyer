"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateIdentityPoolInput_1 = require("./CreateIdentityPoolInput");
var CreateIdentityPoolOutput_1 = require("./CreateIdentityPoolOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var ResourceConflictException_1 = require("./ResourceConflictException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var LimitExceededException_1 = require("./LimitExceededException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.CreateIdentityPool = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'CreateIdentityPool',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateIdentityPoolInput_1.CreateIdentityPoolInput,
    },
    output: {
        shape: CreateIdentityPoolOutput_1.CreateIdentityPoolOutput,
    },
    errors: [
        {
            shape: InvalidParameterException_1.InvalidParameterException,
        },
        {
            shape: NotAuthorizedException_1.NotAuthorizedException,
        },
        {
            shape: ResourceConflictException_1.ResourceConflictException,
        },
        {
            shape: TooManyRequestsException_1.TooManyRequestsException,
        },
        {
            shape: InternalErrorException_1.InternalErrorException,
        },
        {
            shape: LimitExceededException_1.LimitExceededException,
        },
    ],
};
//# sourceMappingURL=CreateIdentityPool.js.map