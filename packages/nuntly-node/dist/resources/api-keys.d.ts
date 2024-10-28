import { APIResource } from "../resource.js";
import * as Core from "../core.js";
import * as APIKeysAPI from "./api-keys.js";
export declare class APIKeys extends APIResource {
    /**
     * Create a new api key
     */
    create(body?: APIKeyCreateParams, options?: Core.RequestOptions): Core.APIPromise<APIKeyCreateResponse>;
    create(options?: Core.RequestOptions): Core.APIPromise<APIKeyCreateResponse>;
    /**
     * Return the api-key with the given ID
     */
    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<APIKeyRetrieveResponse>;
    /**
     * Updates partial api key fields with the given id
     */
    update(id: string, body: APIKeyUpdateParams, options?: Core.RequestOptions): Core.APIPromise<APIKeyUpdateResponse>;
    /**
     * Return a list of your api keys
     */
    list(options?: Core.RequestOptions): Core.APIPromise<APIKeyListResponse>;
    /**
     * Delete the api key with the given ID
     */
    delete(id: string, options?: Core.RequestOptions): Core.APIPromise<APIKeyDeleteResponse>;
}
export interface APIKeyCreateResponse {
    /**
     * The id of the api key
     */
    id: string;
    /**
     * The value of the api key
     */
    apikey: string;
    /**
     * The truncated value of the api key
     */
    apikey_truncated: string;
    /**
     * Date at which the object was created (ISO 8601 format)
     */
    created_at: string;
    /**
     * The user who created the object
     */
    created_by: string;
    /**
     * The status of the api key
     */
    status: 'enabled' | 'disabled' | 'revoked';
    /**
     * The name of the api key
     */
    name?: string;
}
export interface APIKeyRetrieveResponse {
    /**
     * The id of the api key
     */
    id: string;
    /**
     * The truncated value of the api key
     */
    apikey_truncated: string;
    /**
     * Date at which the object was created (ISO 8601 format)
     */
    created_at: string;
    /**
     * The user who created the object
     */
    created_by: string;
    /**
     * Date at which the object was modified (ISO 8601 format)
     */
    modified_at: string;
    /**
     * The last user who modified the object
     */
    modified_by: string;
    /**
     * The status of the api key
     */
    status: 'enabled' | 'disabled' | 'revoked';
    /**
     * The name of the api key
     */
    name?: string;
}
export interface APIKeyUpdateResponse {
    /**
     * The id of the api key
     */
    id: string;
}
/**
 * The api keys registered in your account
 */
export type APIKeyListResponse = Array<APIKeyListResponse.APIKeyListResponseItem>;
export declare namespace APIKeyListResponse {
    interface APIKeyListResponseItem {
        /**
         * The id of the api key
         */
        id: string;
        /**
         * The truncated value of the api key
         */
        apikey_truncated: string;
        /**
         * Date at which the object was created (ISO 8601 format)
         */
        created_at: string;
        /**
         * The user who created the object
         */
        created_by: string;
        /**
         * Date at which the object was modified (ISO 8601 format)
         */
        modified_at: string;
        /**
         * The last user who modified the object
         */
        modified_by: string;
        /**
         * The status of the api key
         */
        status: 'enabled' | 'disabled' | 'revoked';
        /**
         * The name of the api key
         */
        name?: string;
    }
}
export interface APIKeyDeleteResponse {
    /**
     * The id of the api key
     */
    id: string;
}
export interface APIKeyCreateParams {
    /**
     * The name of the api key
     */
    name?: string;
}
export interface APIKeyUpdateParams {
    /**
     * The name of the api key
     */
    name?: string;
    /**
     * The status of the api key
     */
    status?: 'enabled' | 'disabled';
}
export declare namespace APIKeys {
    export import APIKeyCreateResponse = APIKeysAPI.APIKeyCreateResponse;
    export import APIKeyRetrieveResponse = APIKeysAPI.APIKeyRetrieveResponse;
    export import APIKeyUpdateResponse = APIKeysAPI.APIKeyUpdateResponse;
    export import APIKeyListResponse = APIKeysAPI.APIKeyListResponse;
    export import APIKeyDeleteResponse = APIKeysAPI.APIKeyDeleteResponse;
    export import APIKeyCreateParams = APIKeysAPI.APIKeyCreateParams;
    export import APIKeyUpdateParams = APIKeysAPI.APIKeyUpdateParams;
}
//# sourceMappingURL=api-keys.d.ts.map