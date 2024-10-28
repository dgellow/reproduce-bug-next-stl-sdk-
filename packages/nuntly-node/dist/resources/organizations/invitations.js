"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invitations = void 0;
const resource_1 = require("../../resource.js");
class Invitations extends resource_1.APIResource {
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
exports.Invitations = Invitations;
(function (Invitations) {
})(Invitations = exports.Invitations || (exports.Invitations = {}));
//# sourceMappingURL=invitations.js.map