import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { LookupDeveloperIdentityInput } from '../types/LookupDeveloperIdentityInput';
import { LookupDeveloperIdentityOutput } from '../types/LookupDeveloperIdentityOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class LookupDeveloperIdentityCommand implements __aws_sdk_types.Command<InputTypesUnion, LookupDeveloperIdentityInput, OutputTypesUnion, LookupDeveloperIdentityOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: LookupDeveloperIdentityInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<LookupDeveloperIdentityInput, LookupDeveloperIdentityOutput, Blob>;
    constructor(input: LookupDeveloperIdentityInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<LookupDeveloperIdentityInput, LookupDeveloperIdentityOutput>;
}
