"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UpdateIdentityPoolInput_1 = require("./UpdateIdentityPoolInput");
var UpdateIdentityPoolOutput_1 = require("./UpdateIdentityPoolOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var ResourceNotFoundException_1 = require("./ResourceNotFoundException");
var NotAuthorizedException_1 = require("./NotAuthorizedException");
var ResourceConflictException_1 = require("./ResourceConflictException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ConcurrentModificationException_1 = require("./ConcurrentModificationException");
var LimitExceededException_1 = require("./LimitExceededException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.UpdateIdentityPool = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'UpdateIdentityPool',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateIdentityPoolInput_1.UpdateIdentityPoolInput,
    },
    output: {
        shape: UpdateIdentityPoolOutput_1.UpdateIdentityPoolOutput,
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
            shape: ResourceConflictException_1.ResourceConflictException,
        },
        {
            shape: TooManyRequestsException_1.TooManyRequestsException,
        },
        {
            shape: InternalErrorException_1.InternalErrorException,
        },
        {
            shape: ConcurrentModificationException_1.ConcurrentModificationException,
        },
        {
            shape: LimitExceededException_1.LimitExceededException,
        },
    ],
};
//# sourceMappingURL=UpdateIdentityPool.js.map