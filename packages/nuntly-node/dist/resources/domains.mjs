// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../resource.mjs";
export class Domains extends APIResource {
    /**
     * Return the domain with the given ID
     */
    create(body, options) {
        return this._client.post('/domains', { body, ...options })._thenUnwrap((obj) => obj.data);
    }
    /**
     * Return the domain with the given ID
     */
    retrieve(id, options) {
        return this._client.get(`/domains/${id}`, options)._thenUnwrap((obj) => obj.data);
    }
    /**
     * Updates some domain fields with the given ID
     */
    update(id, body, options) {
        return this._client.patch(`/domains/${id}`, { body, ...options })._thenUnwrap((obj) => obj.data);
    }
    /**
     * Return a list of your domains
     */
    list(options) {
        return this._client.get('/domains', options)._thenUnwrap((obj) => obj.data);
    }
    /**
     * Delete the domain with the given ID
     */
    delete(id, options) {
        return this._client.delete(`/domains/${id}`, options)._thenUnwrap((obj) => obj.data);
    }
}
(function (Domains) {
})(Domains || (Domains = {}));
//# sourceMappingURL=domains.mjs.map