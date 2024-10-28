// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../../resource.mjs";
import * as InvitationsAPI from "./invitations.mjs";
import * as MembershipsAPI from "./memberships.mjs";
export class Organizations extends APIResource {
    constructor() {
        super(...arguments);
        this.memberships = new MembershipsAPI.Memberships(this._client);
        this.invitations = new InvitationsAPI.Invitations(this._client);
    }
    /**
     * Return the organization
     */
    retrieve(id, options) {
        return this._client.get(`/organizations/${id}`, options)._thenUnwrap((obj) => obj.data);
    }
    /**
     * Return the organizations
     */
    list(options) {
        return this._client.get('/organizations', options)._thenUnwrap((obj) => obj.data);
    }
}
(function (Organizations) {
    Organizations.Memberships = MembershipsAPI.Memberships;
    Organizations.Invitations = InvitationsAPI.Invitations;
})(Organizations || (Organizations = {}));
//# sourceMappingURL=organizations.mjs.map