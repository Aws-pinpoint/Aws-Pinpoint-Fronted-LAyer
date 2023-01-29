"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeleteIdentityPoolInput_1 = require("./DeleteIdentityPoolInput");
var DeleteIdentityPoolOutput_1 = require("./DeleteIdentityPoolOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.DeleteIdentityPool = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'DeleteIdentityPool',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteIdentityPoolInput_1.DeleteIdentityPoolInput,
    },
    output: {
        shape: DeleteIdentityPoolOutput_1.DeleteIdentityPoolOutput,
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
//# sourceMappingURL=DeleteIdentityPool.js.map