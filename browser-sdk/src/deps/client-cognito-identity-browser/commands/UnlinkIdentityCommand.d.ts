import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { UnlinkIdentityInput } from '../types/UnlinkIdentityInput';
import { UnlinkIdentityOutput } from '../types/UnlinkIdentityOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class UnlinkIdentityCommand implements __aws_sdk_types.Command<InputTypesUnion, UnlinkIdentityInput, OutputTypesUnion, UnlinkIdentityOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: UnlinkIdentityInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<UnlinkIdentityInput, UnlinkIdentityOutput, Blob>;
    constructor(input: UnlinkIdentityInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<UnlinkIdentityInput, UnlinkIdentityOutput>;
}
