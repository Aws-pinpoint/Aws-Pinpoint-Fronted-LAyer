"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeleteIdentitiesInput_1 = require("./DeleteIdentitiesInput");
var DeleteIdentitiesOutput_1 = require("./DeleteIdentitiesOutput");
var InvalidParameterException_1 = require("./InvalidParameterException");
var TooManyRequestsException_1 = require("./TooManyRequestsException");
var InternalErrorException_1 = require("./InternalErrorException");
var ServiceMetadata_1 = require("./ServiceMetadata");
exports.DeleteIdentities = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: 'DeleteIdentities',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteIdentitiesInput_1.DeleteIdentitiesInput,
    },
    output: {
        shape: DeleteIdentitiesOutput_1.DeleteIdentitiesOutput,
    },
    errors: [
        {
            shape: InvalidParameterException_1.InvalidParameterException,
        },
        {
            shape: TooManyRequestsException_1.TooManyRequestsException,
        },
        {
            shape: InternalErrorException_1.InternalErrorException,
        },
    ],
};
//# sourceMappingURL=DeleteIdentities.js.map