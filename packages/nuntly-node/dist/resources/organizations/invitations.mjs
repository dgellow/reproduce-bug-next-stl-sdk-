// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../../resource.mjs";
export class Invitations extends APIResource {
    /**
     * Delete an invitation
     */
    delete(id, invitationId, options) {
        return this._client.delete(`/organizations/${id}/invitations/${invitationId}`, options)._thenUnwrap((obj) => obj.data);
    }
    /**
     * Send an invitation to someone you wish to invite to join your organization
     */
    send(id, body, options) {
        return this._client.post(`/organizations/${id}/invitations`, { body, ...options })._thenUnwrap((obj) => obj.data);
    }
}
(function (Invitations) {
})(Invitations || (Invitations = {}));
//# sourceMappingURL=invitations.mjs.map