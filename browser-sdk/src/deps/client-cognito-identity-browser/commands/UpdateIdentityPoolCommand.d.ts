import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { UpdateIdentityPoolInput } from '../types/UpdateIdentityPoolInput';
import { UpdateIdentityPoolOutput } from '../types/UpdateIdentityPoolOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class UpdateIdentityPoolCommand implements __aws_sdk_types.Command<InputTypesUnion, UpdateIdentityPoolInput, OutputTypesUnion, UpdateIdentityPoolOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: UpdateIdentityPoolInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<UpdateIdentityPoolInput, UpdateIdentityPoolOutput, Blob>;
    constructor(input: UpdateIdentityPoolInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<UpdateIdentityPoolInput, UpdateIdentityPoolOutput>;
}
