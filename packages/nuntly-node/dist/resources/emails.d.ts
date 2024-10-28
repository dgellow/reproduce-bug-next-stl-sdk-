import { APIResource } from "../resource.js";
import * as Core from "../core.js";
import * as EmailsAPI from "./emails.js";
export declare class Emails extends APIResource {
    /**
     * Return the email with the given id
     */
    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<EmailRetrieveResponse>;
    /**
     * Return a list of your last emails
     */
    list(options?: Core.RequestOptions): Core.APIPromise<EmailListResponse>;
    /**
     * Send bulk emails
     */
    bulk(body: EmailBulkParams, options?: Core.RequestOptions): Core.APIPromise<EmailBulkResponse>;
    /**
     * Cancel an email or a scheduled email
     */
    cancel(id: string, options?: Core.RequestOptions): Core.APIPromise<EmailCancelResponse>;
    /**
     * Send an email
     */
    send(body: EmailSendParams, options?: Core.RequestOptions): Core.APIPromise<EmailSendResponse>;
}
export interface EmailRetrieveResponse {
    /**
     * The id of the email
     */
    id: string;
    /**
     * Date at which the object was created (ISO 8601 format)
     */
    created_at: string;
    /**
     * The e-mail address of the sender
     */
    from: string;
    /**
     * The status of the email.
     */
    status: 'queued' | 'scheduled' | 'processed' | 'sending' | 'sent' | 'delivered' | 'canceled' | 'blocked';
    /**
     * The primary recipient(s) of the email
     */
    to: Array<string> | string;
    /**
     * The blind carbon copy recipient(s) of the email
     */
    bcc?: Array<string> | string;
    /**
     * The carbon copy recipient(s) of the email
     */
    cc?: Array<string> | string;
    /**
     * The context for the template
     */
    context?: unknown;
    desired_delivery?: EmailRetrieveResponse.DesiredDelivery;
    /**
     * The headers to add to the email
     */
    headers?: Record<string, string>;
    /**
     * The email address where replies should be sent. If a recipient replies, the
     * response will go to this address instead of the sender's email address
     */
    reply_to?: Array<string> | string;
    /**
     * The subject of the e-mail
     */
    subject?: string;
    /**
     * The tags to add to the email
     */
    tags?: Array<EmailRetrieveResponse.Tag>;
}
export declare namespace EmailRetrieveResponse {
    interface DesiredDelivery {
        delivery_time: string;
        delivery_timezone?: string;
    }
    /**
     * The tag to add to the email and you can get via email id or in webhook events
     */
    interface Tag {
        /**
         * The name of the tag
         */
        name: string;
        /**
         * The tag to add to the email
         */
        value: string;
    }
}
export interface EmailListResponse {
    /**
     * The emails
     */
    emails: Array<EmailListResponse.Email>;
}
export declare namespace EmailListResponse {
    interface Email {
        /**
         * The id of the email
         */
        id: string;
        /**
         * Date at which the object was created (ISO 8601 format)
         */
        created_at: string;
        /**
         * The e-mail address of the sender
         */
        from: string;
        /**
         * The status of the email.
         */
        status: 'queued' | 'scheduled' | 'processed' | 'sending' | 'sent' | 'delivered' | 'canceled' | 'blocked';
        /**
         * The primary recipient(s) of the email
         */
        to: Array<string> | string;
        /**
         * The blind carbon copy recipient(s) of the email
         */
        bcc?: Array<string> | string;
        /**
         * The carbon copy recipient(s) of the email
         */
        cc?: Array<string> | string;
        /**
         * The context for the template
         */
        context?: unknown;
        desired_delivery?: Email.DesiredDelivery;
        /**
         * The headers to add to the email
         */
        headers?: Record<string, string>;
        /**
         * The email address where replies should be sent. If a recipient replies, the
         * response will go to this address instead of the sender's email address
         */
        reply_to?: Array<string> | string;
        /**
         * The subject of the e-mail
         */
        subject?: string;
        /**
         * The tags to add to the email
         */
        tags?: Array<Email.Tag>;
    }
    namespace Email {
        interface DesiredDelivery {
            delivery_time: string;
            delivery_timezone?: string;
        }
        /**
         * The tag to add to the email and you can get via email id or in webhook events
         */
        interface Tag {
            /**
             * The name of the tag
             */
            name: string;
            /**
             * The tag to add to the email
             */
            value: string;
        }
    }
}
export interface EmailBulkResponse {
    emails: Array<EmailBulkResponse.Email>;
}
export declare namespace EmailBulkResponse {
    interface Email {
        /**
         * The id of the email
         */
        id: string;
    }
}
export interface EmailCancelResponse {
    /**
     * The id of the email
     */
    id: string;
}
export interface EmailSendResponse {
    /**
     * The id of the email
     */
    id: string;
    /**
     * The status of the email.
     */
    status: 'queued' | 'scheduled';
}
export interface EmailBulkParams {
    /**
     * The emails to send by bulk
     */
    emails: Array<EmailBulkParams.Email>;
    /**
     * Used as a fallback field email value if no value is present in email
     */
    fallback?: EmailBulkParams.Fallback;
}
export declare namespace EmailBulkParams {
    interface Email {
        /**
         * The e-mail address of the sender
         */
        from: string;
        /**
         * The primary recipient(s) of the email
         */
        to: Array<string> | string;
        /**
         * The blind carbon copy recipient(s) of the email
         */
        bcc?: Array<string> | string;
        /**
         * The carbon copy recipient(s) of the email
         */
        cc?: Array<string> | string;
        /**
         * The context for the template
         */
        context?: unknown;
        desired_delivery?: Email.DesiredDelivery;
        /**
         * The headers to add to the email
         */
        headers?: Record<string, string>;
        /**
         * The HTML version of the email
         */
        html?: string;
        /**
         * The email address where replies should be sent. If a recipient replies, the
         * response will go to this address instead of the sender's email address
         */
        reply_to?: Array<string> | string;
        /**
         * The subject of the e-mail
         */
        subject?: string;
        /**
         * The tags to add to the email
         */
        tags?: Array<Email.Tag>;
        /**
         * The plaintext version of the email
         */
        text?: string;
    }
    namespace Email {
        interface DesiredDelivery {
            delivery_time: string;
            delivery_timezone?: string;
        }
        /**
         * The tag to add to the email and you can get via email id or in webhook events
         */
        interface Tag {
            /**
             * The name of the tag
             */
            name: string;
            /**
             * The tag to add to the email
             */
            value: string;
        }
    }
    /**
     * Used as a fallback field email value if no value is present in email
     */
    interface Fallback {
        /**
         * The blind carbon copy recipient(s) of the email
         */
        bcc?: Array<string> | string;
        /**
         * The carbon copy recipient(s) of the email
         */
        cc?: Array<string> | string;
        /**
         * The context for the template
         */
        context?: unknown;
        desired_delivery?: Fallback.DesiredDelivery;
        /**
         * The e-mail address of the sender
         */
        from?: string;
        /**
         * The headers to add to the email
         */
        headers?: Record<string, string>;
        /**
         * The HTML version of the email
         */
        html?: string;
        /**
         * The email address where replies should be sent. If a recipient replies, the
         * response will go to this address instead of the sender's email address
         */
        reply_to?: Array<string> | string;
        /**
         * The subject of the e-mail
         */
        subject?: string;
        /**
         * The tags to add to the email
         */
        tags?: Array<Fallback.Tag>;
        /**
         * The plaintext version of the email
         */
        text?: string;
    }
    namespace Fallback {
        interface DesiredDelivery {
            delivery_time: string;
            delivery_timezone?: string;
        }
        /**
         * The tag to add to the email and you can get via email id or in webhook events
         */
        interface Tag {
            /**
             * The name of the tag
             */
            name: string;
            /**
             * The tag to add to the email
             */
            value: string;
        }
    }
}
export interface EmailSendParams {
    /**
     * The e-mail address of the sender
     */
    from: string;
    /**
     * The primary recipient(s) of the email
     */
    to: Array<string> | string;
    /**
     * The attachements to add to the email
     */
    attachments?: Array<EmailSendParams.Attachment>;
    /**
     * The blind carbon copy recipient(s) of the email
     */
    bcc?: Array<string> | string;
    /**
     * The carbon copy recipient(s) of the email
     */
    cc?: Array<string> | string;
    /**
     * The context for the template
     */
    context?: unknown;
    desired_delivery?: EmailSendParams.DesiredDelivery;
    /**
     * The headers to add to the email
     */
    headers?: Record<string, string>;
    /**
     * The HTML version of the email
     */
    html?: string;
    /**
     * The email address where replies should be sent. If a recipient replies, the
     * response will go to this address instead of the sender's email address
     */
    reply_to?: Array<string> | string;
    /**
     * The subject of the e-mail
     */
    subject?: string;
    /**
     * The tags to add to the email
     */
    tags?: Array<EmailSendParams.Tag>;
    /**
     * The plaintext version of the email
     */
    text?: string;
}
export declare namespace EmailSendParams {
    /**
     * The attachment
     */
    interface Attachment {
        /**
         * The base64-encoded content of the attachment
         */
        content?: string;
        /**
         * Content type for the attachment
         */
        content_type?: string;
        /**
         * The name of the attached file
         */
        filename?: string;
        /**
         * Attachement URL
         */
        path?: string;
    }
    interface DesiredDelivery {
        delivery_time: string;
        delivery_timezone?: string;
    }
    /**
     * The tag to add to the email and you can get via email id or in webhook events
     */
    interface Tag {
        /**
         * The name of the tag
         */
        name: string;
        /**
         * The tag to add to the email
         */
        value: string;
    }
}
export declare namespace Emails {
    export import EmailRetrieveResponse = EmailsAPI.EmailRetrieveResponse;
    export import EmailListResponse = EmailsAPI.EmailListResponse;
    export import EmailBulkResponse = EmailsAPI.EmailBulkResponse;
    export import EmailCancelResponse = EmailsAPI.EmailCancelResponse;
    export import EmailSendResponse = EmailsAPI.EmailSendResponse;
    export import EmailBulkParams = EmailsAPI.EmailBulkParams;
    export import EmailSendParams = EmailsAPI.EmailSendParams;
}
//# sourceMappingURL=emails.d.ts.map