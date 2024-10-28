"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memberships = void 0;
const resource_1 = require("../../resource.js");
class Memberships extends resource_1.APIResource {
    /**
     * Return the organization memberships
     */
    list(id, options) {
        return this._client.get(`/organizations/${id}/memberships`, options)._thenUnwrap((obj) => obj.data);
    }
    /**
     * Revoke a user from an organization
     */
    revoke(id, userId, options) {
        return this._client.delete(`/organizations/${id}/memberships/${userId}`, options)._thenUnwrap((obj) => obj.data);
    }
}
exports.Memberships = Memberships;
(function (Memberships) {
})(Memberships = exports.Memberships || (exports.Memberships = {}));
//# sourceMappingURL=memberships.js.map