import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { GetOpenIdTokenInput } from '../types/GetOpenIdTokenInput';
import { GetOpenIdTokenOutput } from '../types/GetOpenIdTokenOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class GetOpenIdTokenCommand implements __aws_sdk_types.Command<InputTypesUnion, GetOpenIdTokenInput, OutputTypesUnion, GetOpenIdTokenOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: GetOpenIdTokenInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<GetOpenIdTokenInput, GetOpenIdTokenOutput, Blob>;
    constructor(input: GetOpenIdTokenInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<GetOpenIdTokenInput, GetOpenIdTokenOutput>;
}
