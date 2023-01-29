import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { GetOpenIdTokenForDeveloperIdentityInput } from '../types/GetOpenIdTokenForDeveloperIdentityInput';
import { GetOpenIdTokenForDeveloperIdentityOutput } from '../types/GetOpenIdTokenForDeveloperIdentityOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class GetOpenIdTokenForDeveloperIdentityCommand implements __aws_sdk_types.Command<InputTypesUnion, GetOpenIdTokenForDeveloperIdentityInput, OutputTypesUnion, GetOpenIdTokenForDeveloperIdentityOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: GetOpenIdTokenForDeveloperIdentityInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<GetOpenIdTokenForDeveloperIdentityInput, GetOpenIdTokenForDeveloperIdentityOutput, Blob>;
    constructor(input: GetOpenIdTokenForDeveloperIdentityInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<GetOpenIdTokenForDeveloperIdentityInput, GetOpenIdTokenForDeveloperIdentityOutput>;
}
