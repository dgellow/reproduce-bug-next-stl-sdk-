// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../../resource.mjs";
export class Memberships extends APIResource {
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
(function (Memberships) {
})(Memberships || (Memberships = {}));
//# sourceMappingURL=memberships.mjs.map