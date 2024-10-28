"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFromPath = exports.toFile = exports.UnprocessableEntityError = exports.PermissionDeniedError = exports.InternalServerError = exports.AuthenticationError = exports.BadRequestError = exports.RateLimitError = exports.ConflictError = exports.NotFoundError = exports.APIUserAbortError = exports.APIConnectionTimeoutError = exports.APIConnectionError = exports.APIError = exports.NuntlyError = exports.Nuntly = void 0;
const Errors = __importStar(require("./error.js"));
const Uploads = __importStar(require("./uploads.js"));
const Core = __importStar(require("./core.js"));
const API = __importStar(require("./resources/index.js"));
/**
 * API Client for interfacing with the Nuntly API.
 */
class Nuntly extends Core.APIClient {
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
exports.Nuntly = Nuntly;
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
exports.NuntlyError = Errors.NuntlyError, exports.APIError = Errors.APIError, exports.APIConnectionError = Errors.APIConnectionError, exports.APIConnectionTimeoutError = Errors.APIConnectionTimeoutError, exports.APIUserAbortError = Errors.APIUserAbortError, exports.NotFoundError = Errors.NotFoundError, exports.ConflictError = Errors.ConflictError, exports.RateLimitError = Errors.RateLimitError, exports.BadRequestError = Errors.BadRequestError, exports.AuthenticationError = Errors.AuthenticationError, exports.InternalServerError = Errors.InternalServerError, exports.PermissionDeniedError = Errors.PermissionDeniedError, exports.UnprocessableEntityError = Errors.UnprocessableEntityError;
exports.toFile = Uploads.toFile;
exports.fileFromPath = Uploads.fileFromPath;
(function (Nuntly) {
    Nuntly.Shared = API.Shared;
    Nuntly.APIKeys = API.APIKeys;
    Nuntly.Domains = API.Domains;
    Nuntly.Emails = API.Emails;
    Nuntly.Webhooks = API.Webhooks;
    Nuntly.Organizations = API.Organizations;
    Nuntly.Account = API.Account;
})(Nuntly = exports.Nuntly || (exports.Nuntly = {}));
exports = module.exports = Nuntly;
exports.default = Nuntly;
//# sourceMappingURL=index.js.map