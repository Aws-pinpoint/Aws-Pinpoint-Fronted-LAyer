"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DescribeIdentityInput_1 = require("./DescribeIdentityInput");
var DescribeIdentityOutput_1 = require("./DescribeIdentityOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.DescribeIdentity = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'DescribeIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DescribeIdentityInput_1.DescribeIdentityInput,
    },
    output: {
        shape: DescribeIdentityOutput_1.DescribeIdentityOutput,
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
//# sourceMappingURL=DescribeIdentity.js.map