// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var _a;
import * as Errors from "./error.mjs";
import * as Uploads from "./uploads.mjs";
import * as Core from "./core.mjs";
import * as API from "./resources/index.mjs";
/**
 * API Client for interfacing with the Nuntly API.
 */
export class Nuntly extends Core.APIClient {
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
    constructor({ baseURL = Core.readEnv('NUNTLY_BASE_URL'), apiKey = Core.readEnv('NUNTLY_API_KEY') ?? null, ...opts } = {}) {
        const options = {
            apiKey,
            ...opts,
            baseURL: baseURL || `https://api.nuntly.com`,
        };
        super({
            baseURL: options.baseURL,
            timeout: options.timeout ?? 60000 /* 1 minute */,
            httpAgent: options.httpAgent,
            maxRetries: options.maxRetries,
            fetch: options.fetch,
        });
        this.shared = new API.Shared(this);
        this.apiKeys = new API.APIKeys(this);
        this.domains = new API.Domains(this);
        this.emails = new API.Emails(this);
        this.webhooks = new API.Webhooks(this);
        this.organizations = new API.Organizations(this);
        this.account = new API.Account(this);
        this._options = options;
        this.apiKey = apiKey;
    }
    defaultQuery() {
        return this._options.defaultQuery;
    }
    defaultHeaders(opts) {
        return {
            ...super.defaultHeaders(opts),
            ...this._options.defaultHeaders,
        };
    }
    validateHeaders(headers, customHeaders) {
        if (this.apiKey && headers['authorization']) {
            return;
        }
        if (customHeaders['authorization'] === null) {
            return;
        }
        throw new Error('Could not resolve authentication method. Expected the apiKey to be set. Or for the "Authorization" headers to be explicitly omitted');
    }
    authHeaders(opts) {
        if (this.apiKey == null) {
            return {};
        }
        return { Authorization: `Bearer ${this.apiKey}` };
    }
}
_a = Nuntly;
Nuntly.Nuntly = _a;
Nuntly.DEFAULT_TIMEOUT = 60000; // 1 minute
Nuntly.NuntlyError = Errors.NuntlyError;
Nuntly.APIError = Errors.APIError;
Nuntly.APIConnectionError = Errors.APIConnectionError;
Nuntly.APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
Nuntly.APIUserAbortError = Errors.APIUserAbortError;
Nuntly.NotFoundError = Errors.NotFoundError;
Nuntly.ConflictError = Errors.ConflictError;
Nuntly.RateLimitError = Errors.RateLimitError;
Nuntly.BadRequestError = Errors.BadRequestError;
Nuntly.AuthenticationError = Errors.AuthenticationError;
Nuntly.InternalServerError = Errors.InternalServerError;
Nuntly.PermissionDeniedError = Errors.PermissionDeniedError;
Nuntly.UnprocessableEntityError = Errors.UnprocessableEntityError;
Nuntly.toFile = Uploads.toFile;
Nuntly.fileFromPath = Uploads.fileFromPath;
export const { NuntlyError, APIError, APIConnectionError, APIConnectionTimeoutError, APIUserAbortError, NotFoundError, ConflictError, RateLimitError, BadRequestError, AuthenticationError, InternalServerError, PermissionDeniedError, UnprocessableEntityError, } = Errors;
export var toFile = Uploads.toFile;
export var fileFromPath = Uploads.fileFromPath;
(function (Nuntly) {
    Nuntly.Shared = API.Shared;
    Nuntly.APIKeys = API.APIKeys;
    Nuntly.Domains = API.Domains;
    Nuntly.Emails = API.Emails;
    Nuntly.Webhooks = API.Webhooks;
    Nuntly.Organizations = API.Organizations;
    Nuntly.Account = API.Account;
})(Nuntly || (Nuntly = {}));
export default Nuntly;
//# sourceMappingURL=index.mjs.map