"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emails = void 0;
const resource_1 = require("../resource.js");
class Emails extends resource_1.APIResource {
    /**
     * Return the email with the given id
     */
    retrieve(id, options) {
        return this._client.get(`/emails/${id}`, options)._thenUnwrap((obj) => obj.data);
    }
    /**
     * Return a list of your last emails
     */
    list(options) {
        return this._client.get('/emails', options)._thenUnwrap((obj) => obj.data);
    }
    /**
     * Send bulk emails
     */
    bulk(body, options) {
        return this._client.post('/emails/bulk', { body, ...options })._thenUnwrap((obj) => obj.data);
    }
    /**
     * Cancel an email or a scheduled email
     */
    cancel(id, options) {
        return this._client.delete(`/emails/${id}`, options)._thenUnwrap((obj) => obj.data);
    }
    /**
     * Send an email
     */
    send(body, options) {
        return this._client.post('/emails', { body, ...options })._thenUnwrap((obj) => obj.data);
    }
}
exports.Emails = Emails;
(function (Emails) {
})(Emails = exports.Emails || (exports.Emails = {}));
//# sourceMappingURL=emails.js.map