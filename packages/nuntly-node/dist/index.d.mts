import * as Errors from "./error.js";
import * as Uploads from "./uploads.js";
import { type Agent } from "./_shims/index.js";
import * as Core from "./core.js";
import * as API from "./resources/index.js";
export interface ClientOptions {
    /**
     * API Key for authentication
     */
    apiKey?: string | null | undefined;
    /**
     * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
     *
     * Defaults to process.env['NUNTLY_BASE_URL'].
     */
    baseURL?: string | null | undefined;
    /**
     * The maximum amount of time (in milliseconds) that the client should wait for a response
     * from the server before timing out a single request.
     *
     * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
     * much longer than this timeout before the promise succeeds or fails.
     */
    timeout?: number;
    /**
     * An HTTP agent used to manage HTTP(S) connections.
     *
     * If not provided, an agent will be constructed by default in the Node.js environment,
     * otherwise no agent is used.
     */
    httpAgent?: Agent;
    /**
     * Specify a custom `fetch` function implementation.
     *
     * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
     * defined globally.
     */
    fetch?: Core.Fetch | undefined;
    /**
     * The maximum number of times that the client will retry a request in case of a
     * temporary failure, like a network error or a 5XX error from the server.
     *
     * @default 2
     */
    maxRetries?: number;
    /**
     * Default headers to include with every request to the API.
     *
     * These can be removed in individual requests by explicitly setting the
     * header to `undefined` or `null` in request options.
     */
    defaultHeaders?: Core.Headers;
    /**
     * Default query parameters to include with every request to the API.
     *
     * These can be removed in individual requests by explicitly setting the
     * param to `undefined` in request options.
     */
    defaultQuery?: Core.DefaultQuery;
}
/**
 * API Client for interfacing with the Nuntly API.
 */
export declare class Nuntly extends Core.APIClient {
    apiKey: string | null;
    private _options;
    /**
     * API Client for interfacing with the Nuntly API.
     *
     * @param {string | null | undefined} [opts.apiKey=process.env['NUNTLY_API_KEY'] ?? null]
     * @param {string} [opts.baseURL=process.env['NUNTLY_BASE_URL'] ?? https://api.nuntly.com] - Override the default base URL for the API.
     * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
     * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
     * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
     * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
     * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
     * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
     */
    constructor({ baseURL, apiKey, ...opts }?: ClientOptions);
    shared: API.Shared;
    apiKeys: API.APIKeys;
    domains: API.Domains;
    emails: API.Emails;
    webhooks: API.Webhooks;
    organizations: API.Organizations;
    account: API.Account;
    protected defaultQuery(): Core.DefaultQuery | undefined;
    protected defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers;
    protected validateHeaders(headers: Core.Headers, customHeaders: Core.Headers): void;
    protected authHeaders(opts: Core.FinalRequestOptions): Core.Headers;
    static Nuntly: typeof Nuntly;
    static DEFAULT_TIMEOUT: number;
    static NuntlyError: typeof Errors.NuntlyError;
    static APIError: typeof Errors.APIError;
    static APIConnectionError: typeof Errors.APIConnectionError;
    static APIConnectionTimeoutError: typeof Errors.APIConnectionTimeoutError;
    static APIUserAbortError: typeof Errors.APIUserAbortError;
    static NotFoundError: typeof Errors.NotFoundError;
    static ConflictError: typeof Errors.ConflictError;
    static RateLimitError: typeof Errors.RateLimitError;
    static BadRequestError: typeof Errors.BadRequestError;
    static AuthenticationError: typeof Errors.AuthenticationError;
    static InternalServerError: typeof Errors.InternalServerError;
    static PermissionDeniedError: typeof Errors.PermissionDeniedError;
    static UnprocessableEntityError: typeof Errors.UnprocessableEntityError;
    static toFile: typeof Uploads.toFile;
    static fileFromPath: typeof Uploads.fileFromPath;
}
export declare const NuntlyError: typeof Errors.NuntlyError, APIError: typeof Errors.APIError, APIConnectionError: typeof Errors.APIConnectionError, APIConnectionTimeoutError: typeof Errors.APIConnectionTimeoutError, APIUserAbortError: typeof Errors.APIUserAbortError, NotFoundError: typeof Errors.NotFoundError, ConflictError: typeof Errors.ConflictError, RateLimitError: typeof Errors.RateLimitError, BadRequestError: typeof Errors.BadRequestError, AuthenticationError: typeof Errors.AuthenticationError, InternalServerError: typeof Errors.InternalServerError, PermissionDeniedError: typeof Errors.PermissionDeniedError, UnprocessableEntityError: typeof Errors.UnprocessableEntityError;
export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;
export declare namespace Nuntly {
    export import RequestOptions = Core.RequestOptions;
    export import Shared = API.Shared;
    export import Error = API.Error;
    export import ErrorResponse = API.ErrorResponse;
    export import APIKeys = API.APIKeys;
    export import APIKeyCreateResponse = API.APIKeyCreateResponse;
    export import APIKeyRetrieveResponse = API.APIKeyRetrieveResponse;
    export import APIKeyUpdateResponse = API.APIKeyUpdateResponse;
    export import APIKeyListResponse = API.APIKeyListResponse;
    export import APIKeyDeleteResponse = API.APIKeyDeleteResponse;
    export import APIKeyCreateParams = API.APIKeyCreateParams;
    export import APIKeyUpdateParams = API.APIKeyUpdateParams;
    export import Domains = API.Domains;
    export import DomainCreateResponse = API.DomainCreateResponse;
    export import DomainRetrieveResponse = API.DomainRetrieveResponse;
    export import DomainUpdateResponse = API.DomainUpdateResponse;
    export import DomainListResponse = API.DomainListResponse;
    export import DomainDeleteResponse = API.DomainDeleteResponse;
    export import DomainCreateParams = API.DomainCreateParams;
    export import DomainUpdateParams = API.DomainUpdateParams;
    export import Emails = API.Emails;
    export import EmailRetrieveResponse = API.EmailRetrieveResponse;
    export import EmailListResponse = API.EmailListResponse;
    export import EmailBulkResponse = API.EmailBulkResponse;
    export import EmailCancelResponse = API.EmailCancelResponse;
    export import EmailSendResponse = API.EmailSendResponse;
    export import EmailBulkParams = API.EmailBulkParams;
    export import EmailSendParams = API.EmailSendParams;
    export import Webhooks = API.Webhooks;
    export import WebhookCreateResponse = API.WebhookCreateResponse;
    export import WebhookRetrieveResponse = API.WebhookRetrieveResponse;
    export import WebhookUpdateResponse = API.WebhookUpdateResponse;
    export import WebhookListResponse = API.WebhookListResponse;
    export import WebhookDeleteResponse = API.WebhookDeleteResponse;
    export import WebhookCreateParams = API.WebhookCreateParams;
    export import WebhookUpdateParams = API.WebhookUpdateParams;
    export import Organizations = API.Organizations;
    export import OrganizationRetrieveResponse = API.OrganizationRetrieveResponse;
    export import OrganizationListResponse = API.OrganizationListResponse;
    export import Account = API.Account;
    export import AccountRetrieveResponse = API.AccountRetrieveResponse;
    export import AccountUpdateResponse = API.AccountUpdateResponse;
    export import AccountUpdateParams = API.AccountUpdateParams;
}
export default Nuntly;
//# sourceMappingURL=index.d.ts.map