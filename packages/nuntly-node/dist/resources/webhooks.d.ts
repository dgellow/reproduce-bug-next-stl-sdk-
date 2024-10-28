import { APIResource } from "../resource.js";
import * as Core from "../core.js";
import * as WebhooksAPI from "./webhooks.js";
export declare class Webhooks extends APIResource {
    /**
     * Create a webhook so the endpoint is notified from Nuntly platform events (Emails
     * events)
     */
    create(body: WebhookCreateParams, options?: Core.RequestOptions): Core.APIPromise<WebhookCreateResponse>;
    /**
     * Return the webhook with the given ID
     */
    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<WebhookRetrieveResponse>;
    /**
     * Updates a webhook with the given ID
     */
    update(id: string, body: WebhookUpdateParams, options?: Core.RequestOptions): Core.APIPromise<WebhookUpdateResponse>;
    /**
     * Return a list of your webhooks
     */
    list(options?: Core.RequestOptions): Core.APIPromise<WebhookListResponse>;
    /**
     * Delete the webhook with the given ID
     */
    delete(id: string, options?: Core.RequestOptions): Core.APIPromise<WebhookDeleteResponse>;
}
export interface WebhookCreateResponse {
    /**
     * The id of the webhook
     */
    id: string;
}
export interface WebhookRetrieveResponse {
    /**
     * The id of the webhook
     */
    id: string;
    /**
     * Date at which the object was created (ISO 8601 format)
     */
    created_at: string;
    /**
     * The user who created the object
     */
    created_by: string;
    /**
     * The endpoint URL of the webhook
     */
    endpoint_url: string;
    /**
     * The list of events to enable for this webhook
     */
    events: Array<'Bounce' | 'Complaint' | 'Delivery' | 'Send' | 'Reject' | 'Open' | 'Click' | 'DeliveryDelay'>;
    /**
     * Date at which the object was modified (ISO 8601 format)
     */
    modified_at: string;
    /**
     * The last user who modified the object
     */
    modified_by: string;
    /**
     * The status of the webhook.
     */
    status: 'enabled' | 'disabled' | 'revoked';
    /**
     * The name of the webhook
     */
    name?: string;
}
export interface WebhookUpdateResponse {
    /**
     * The id of the webhook
     */
    id: string;
    /**
     * The list of events to enable for this webhook
     */
    events: Array<'Bounce' | 'Complaint' | 'Delivery' | 'Send' | 'Reject' | 'Open' | 'Click' | 'DeliveryDelay'>;
    /**
     * The status of the webhook.
     */
    status: 'enabled' | 'disabled' | 'revoked';
    /**
     * The endpoint URL of the webhook
     */
    endpoint_url?: string;
    /**
     * The name of the webhook
     */
    name?: string;
}
export interface WebhookListResponse {
    /**
     * The webhooks registered in your organization
     */
    data: Array<WebhookListResponse.Data>;
}
export declare namespace WebhookListResponse {
    interface Data {
        /**
         * The id of the webhook
         */
        id: string;
        /**
         * Date at which the object was created (ISO 8601 format)
         */
        created_at: string;
        /**
         * The user who created the object
         */
        created_by: string;
        /**
         * The endpoint URL of the webhook
         */
        endpoint_url: string;
        /**
         * The list of events to enable for this webhook
         */
        events: Array<'Bounce' | 'Complaint' | 'Delivery' | 'Send' | 'Reject' | 'Open' | 'Click' | 'DeliveryDelay'>;
        /**
         * Date at which the object was modified (ISO 8601 format)
         */
        modified_at: string;
        /**
         * The last user who modified the object
         */
        modified_by: string;
        /**
         * The status of the webhook.
         */
        status: 'enabled' | 'disabled' | 'revoked';
        /**
         * The name of the webhook
         */
        name?: string;
    }
}
export interface WebhookDeleteResponse {
    /**
     * The id of the webhook
     */
    id: string;
}
export interface WebhookCreateParams {
    /**
     * The endpoint URL of the webhook
     */
    endpoint_url: string;
    /**
     * The list of events to enable for this webhook
     */
    events: Array<'Bounce' | 'Complaint' | 'Delivery' | 'Send' | 'Reject' | 'Open' | 'Click' | 'DeliveryDelay'>;
    /**
     * The status of the webhook.
     */
    status: 'enabled' | 'disabled' | 'revoked';
    /**
     * The name of the webhook
     */
    name?: string;
}
export interface WebhookUpdateParams {
    /**
     * The list of events to enable for this webhook
     */
    events: Array<'Bounce' | 'Complaint' | 'Delivery' | 'Send' | 'Reject' | 'Open' | 'Click' | 'DeliveryDelay'>;
    /**
     * The status of the webhook.
     */
    status: 'enabled' | 'disabled';
    /**
     * The endpoint URL of the webhook
     */
    endpoint_url?: string;
    /**
     * The name of the webhook
     */
    name?: string;
}
export declare namespace Webhooks {
    export import WebhookCreateResponse = WebhooksAPI.WebhookCreateResponse;
    export import WebhookRetrieveResponse = WebhooksAPI.WebhookRetrieveResponse;
    export import WebhookUpdateResponse = WebhooksAPI.WebhookUpdateResponse;
    export import WebhookListResponse = WebhooksAPI.WebhookListResponse;
    export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
    export import WebhookCreateParams = WebhooksAPI.WebhookCreateParams;
    export import WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
}
//# sourceMappingURL=webhooks.d.ts.map