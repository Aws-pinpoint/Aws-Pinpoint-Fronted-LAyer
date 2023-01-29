import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { InputTypesUnion } from '../types/InputTypesUnion';
import { OutputTypesUnion } from '../types/OutputTypesUnion';
import { MergeDeveloperIdentitiesInput } from '../types/MergeDeveloperIdentitiesInput';
import { MergeDeveloperIdentitiesOutput } from '../types/MergeDeveloperIdentitiesOutput';
import { CognitoIdentityResolvedConfiguration } from '../CognitoIdentityConfiguration';
export declare class MergeDeveloperIdentitiesCommand implements __aws_sdk_types.Command<InputTypesUnion, MergeDeveloperIdentitiesInput, OutputTypesUnion, MergeDeveloperIdentitiesOutput, CognitoIdentityResolvedConfiguration, Blob> {
    readonly input: MergeDeveloperIdentitiesInput;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<MergeDeveloperIdentitiesInput, MergeDeveloperIdentitiesOutput, Blob>;
    constructor(input: MergeDeveloperIdentitiesInput);
    resolveMiddleware(clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>, configuration: CognitoIdentityResolvedConfiguration): __aws_sdk_types.Handler<MergeDeveloperIdentitiesInput, MergeDeveloperIdentitiesOutput>;
}
