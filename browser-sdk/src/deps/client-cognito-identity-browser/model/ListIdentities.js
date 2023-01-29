"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListIdentitiesInput_1 = require("./ListIdentitiesInput");
var ListIdentitiesOutput_1 = require("./ListIdentitiesOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.ListIdentities = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'ListIdentities',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListIdentitiesInput_1.ListIdentitiesInput,
    },
    output: {
        shape: ListIdentitiesOutput_1.ListIdentitiesOutput,
    },
    errors: [
        {
            shape: InvalidParameterException_1.InvalidParameterException,
        },
        {
            shape: ResourceNotFoundException_1.ResourceNotFoundException,
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
//# sourceMappingURL=ListIdentities.js.map