import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { GetCredentialsForIdentityInput } from '../types/GetCredentialsForIdentityInput';
import { GetCredentialsForIdentityOutput } from '../types/GetCredentialsForIdentityOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class GetCredentialsForIdentityCommand implements __aws_sdk_types.Command<InputTypesUnion, GetCredentialsForIdentityInput, OutputTypesUnion, GetCredentialsForIdentityOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: GetCredentialsForIdentityInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<GetCredentialsForIdentityInput, GetCredentialsForIdentityOutput, Blob>;
    constructor(input: GetCredentialsForIdentityInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<GetCredentialsForIdentityInput, GetCredentialsForIdentityOutput>;
}
