import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import { CognitoIdentityConfiguration, CognitoIdentityResolvedConfiguration } from './CognitoIdentityConfiguration';
import { InputTypesUnion } from './types/InputTypesUnion';
import { OutputTypesUnion } from './types/OutputTypesUnion';
export declare class CognitoIdentityClient {
    protected readonly config: CognitoIdentityResolvedConfiguration;
    readonly middlewareStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>;
    constructor(configuration: CognitoIdentityConfiguration);
    destroy(): void;
    /**
     * This will need to be revised when the command interface lands.
     */
    send<InputType extends InputTypesUnion, OutputType extends OutputTypesUnion>(command: __aws_sdk_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, CognitoIdentityResolvedConfiguration, Blob>): Promise<OutputType>;
    send<InputType extends InputTypesUnion, OutputType extends OutputTypesUnion>(command: __aws_sdk_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, CognitoIdentityResolvedConfiguration, Blob>, cb: (err: any, data?: OutputType) => void): void;
}
