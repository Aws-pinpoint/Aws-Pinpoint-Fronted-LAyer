import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { UnlinkDeveloperIdentityInput } from '../types/UnlinkDeveloperIdentityInput';
import { UnlinkDeveloperIdentityOutput } from '../types/UnlinkDeveloperIdentityOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class UnlinkDeveloperIdentityCommand implements __aws_sdk_types.Command<InputTypesUnion, UnlinkDeveloperIdentityInput, OutputTypesUnion, UnlinkDeveloperIdentityOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: UnlinkDeveloperIdentityInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<UnlinkDeveloperIdentityInput, UnlinkDeveloperIdentityOutput, Blob>;
    constructor(input: UnlinkDeveloperIdentityInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<UnlinkDeveloperIdentityInput, UnlinkDeveloperIdentityOutput>;
}
