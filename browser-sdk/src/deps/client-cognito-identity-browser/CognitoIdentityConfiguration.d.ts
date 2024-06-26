import * as __aws_sdk_types from '@aws-sdk/types';
export interface CognitoIdentityConfiguration {
    /**
     * The function that will be used to convert a base64-encoded string to a byte array
     */
    base64Decoder?: __aws_sdk_types.Decoder;
    /**
     * The function that will be used to convert binary data to a base64-encoded string
     */
    base64Encoder?: __aws_sdk_types.Encoder;
    /**
     * The credentials used to sign requests.
     */
    credentials: __aws_sdk_types.Credentials | __aws_sdk_types.Provider<__aws_sdk_types.Credentials>;
    /**
     * A function that determines how long (in milliseconds) the SDK should wait before retrying a request
     */
    delayDecider?: __aws_sdk_types.DelayDecider;
    /**
     * The fully qualified endpoint of the webservice. This is only required when using a custom endpoint (for example, when using a local version of S3).
     */
    endpoint?: string | __aws_sdk_types.HttpEndpoint | __aws_sdk_types.Provider<__aws_sdk_types.HttpEndpoint>;
    /**
     * The endpoint provider to call if no endpoint is provided
     */
    endpointProvider?: any;
    /**
     * The handler to use as the core of the client's middleware stack
     */
    handler?: __aws_sdk_types.Terminalware<any, Blob>;
    /**
     * The HTTP handler to use
     */
    httpHandler?: __aws_sdk_types.HttpHandler<Blob>;
    /**
     * The maximum number of redirects to follow for a service request. Set to `0` to disable retries.
     */
    maxRedirects?: number;
    /**
     * The maximum number of times requests that encounter potentially transient failures should be retried
     */
    maxRetries?: number;
    /**
     * The configuration profile to use.
     */
    profile?: string;
    /**
     * The AWS region to which this client will send requests
     */
    region: string | __aws_sdk_types.Provider<string>;
    /**
     * A function that determines whether an error is retryable
     */
    retryDecider?: __aws_sdk_types.RetryDecider;
    /**
     * A constructor for a class implementing the @aws-sdk/types.Hash interface that computes the SHA-256 HMAC or checksum of a string or binary buffer
     */
    sha256?: __aws_sdk_types.HashConstructor;
    /**
     * The signer to use when signing requests.
     */
    signer?: __aws_sdk_types.RequestSigner;
    /**
     * The service name with which to sign requests.
     */
    signingName?: string;
    /**
     * Whether SSL is enabled for requests.
     */
    sslEnabled?: boolean;
    /**
     * A function that converts a stream into an array of bytes.
     */
    streamCollector?: __aws_sdk_types.StreamCollector<Blob>;
    /**
     * The function that will be used to convert strings into HTTP endpoints
     */
    urlParser?: __aws_sdk_types.UrlParser;
    /**
     * The function that will be used to convert a UTF8-encoded string to a byte array
     */
    utf8Decoder?: __aws_sdk_types.Decoder;
    /**
     * The function that will be used to convert binary data to a UTF-8 encoded string
     */
    utf8Encoder?: __aws_sdk_types.Encoder;
}
export interface CognitoIdentityResolvableConfiguration extends CognitoIdentityConfiguration {
    /**
     * Whether the HTTP handler was injected by the user and should thus not be destroyed when this client is
     */
    _user_injected_http_handler: any;
    /**
     * A function that can calculate the length of a request body.
     */
    bodyLengthChecker: (body: any) => number | undefined;
    /**
     * The parser to use when converting HTTP responses to SDK output types
     */
    parser: __aws_sdk_types.ResponseParser<Blob>;
    /**
     * The serializer to use when converting SDK input to HTTP requests
     */
    serializer: __aws_sdk_types.Provider<__aws_sdk_types.RequestSerializer<Blob>>;
}
export interface CognitoIdentityResolvedConfiguration extends CognitoIdentityConfiguration {
    _user_injected_http_handler: boolean;
    base64Decoder: __aws_sdk_types.Decoder;
    base64Encoder: __aws_sdk_types.Encoder;
    bodyLengthChecker: (body: any) => number | undefined;
    credentials: __aws_sdk_types.Provider<__aws_sdk_types.Credentials>;
    endpoint: __aws_sdk_types.Provider<__aws_sdk_types.HttpEndpoint>;
    endpointProvider: any;
    handler: __aws_sdk_types.Terminalware<any, Blob>;
    httpHandler: __aws_sdk_types.HttpHandler<Blob>;
    maxRedirects: number;
    maxRetries: number;
    parser: __aws_sdk_types.ResponseParser<Blob>;
    region: __aws_sdk_types.Provider<string>;
    serializer: __aws_sdk_types.Provider<__aws_sdk_types.RequestSerializer<Blob>>;
    sha256: __aws_sdk_types.HashConstructor;
    signer: __aws_sdk_types.RequestSigner;
    signingName: string;
    sslEnabled: boolean;
    streamCollector: __aws_sdk_types.StreamCollector<Blob>;
    urlParser: __aws_sdk_types.UrlParser;
    utf8Decoder: __aws_sdk_types.Decoder;
    utf8Encoder: __aws_sdk_types.Encoder;
}
export declare const configurationProperties: __aws_sdk_types.ConfigurationDefinition<CognitoIdentityResolvableConfiguration, CognitoIdentityResolvedConfiguration>;
