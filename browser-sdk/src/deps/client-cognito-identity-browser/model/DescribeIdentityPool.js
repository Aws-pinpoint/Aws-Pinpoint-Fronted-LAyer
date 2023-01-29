"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DescribeIdentityPoolInput_1 = require("./DescribeIdentityPoolInput");
var DescribeIdentityPoolOutput_1 = require("./DescribeIdentityPoolOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.DescribeIdentityPool = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'DescribeIdentityPool',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DescribeIdentityPoolInput_1.DescribeIdentityPoolInput,
    },
    output: {
        shape: DescribeIdentityPoolOutput_1.DescribeIdentityPoolOutput,
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
//# sourceMappingURL=DescribeIdentityPool.js.map