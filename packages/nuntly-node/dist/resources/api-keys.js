"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKeys = void 0;
const resource_1 = require("../resource.js");
const core_1 = require("../core.js");
class APIKeys extends resource_1.APIResource {
    create(body = {}, options) {
        if ((0, core_1.isRequestOptions)(body)) {
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
exports.APIKeys = APIKeys;
(function (APIKeys) {
})(APIKeys = exports.APIKeys || (exports.APIKeys = {}));
//# sourceMappingURL=api-keys.js.map