// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../resource.mjs";
export class Webhooks extends APIResource {
    /**
     * Create a webhook so the endpoint is notified from Nuntly platform events (Emails
     * events)
     */
    create(body, options) {
        return this._client.post('/webhooks', { body, ...options })._thenUnwrap((obj) => obj.data);
    }
    /**
     * Return the webhook with the given ID
     */
    retrieve(id, options) {
        return this._client.get(`/webhooks/${id}`, options)._thenUnwrap((obj) => obj.data);
    }
    /**
     * Updates a webhook with the given ID
     */
    update(id, body, options) {
        return this._client.put(`/webhooks/${id}`, { body, ...options })._thenUnwrap((obj) => obj.data);
    }
    /**
     * Return a list of your webhooks
     */
    list(options) {
        return this._client.get('/webhooks', options)._thenUnwrap((obj) => obj.data);
    }
    /**
     * Delete the webhook with the given ID
     */
    delete(id, options) {
        return this._client.delete(`/webhooks/${id}`, options)._thenUnwrap((obj) => obj.data);
    }
}
(function (Webhooks) {
})(Webhooks || (Webhooks = {}));
//# sourceMappingURL=webhooks.mjs.map