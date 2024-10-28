// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../resource.mjs";
import { isRequestOptions } from "../core.mjs";
export class APIKeys extends APIResource {
    create(body = {}, options) {
        if (isRequestOptions(body)) {
            return this.create({}, body);
        }
        return this._client.post('/api-keys', { body, ...options })._thenUnwrap((obj) => obj.data);
    }
    /**
     * Return the api-key with the given ID
     */
    retrieve(id, options) {
        return this._client.get(`/api-keys/${id}`, options)._thenUnwrap((obj) => obj.data);
    }
    /**
     * Updates partial api key fields with the given id
     */
    update(id, body, options) {
        return this._client.put(`/api-keys/${id}`, { body, ...options })._thenUnwrap((obj) => obj.data);
    }
    /**
     * Return a list of your api keys
     */
    list(options) {
        return this._client.get('/api-keys', options)._thenUnwrap((obj) => obj.data);
    }
    /**
     * Delete the api key with the given ID
     */
    delete(id, options) {
        return this._client.delete(`/api-keys/${id}`, options)._thenUnwrap((obj) => obj.data);
    }
}
(function (APIKeys) {
})(APIKeys || (APIKeys = {}));
//# sourceMappingURL=api-keys.mjs.map