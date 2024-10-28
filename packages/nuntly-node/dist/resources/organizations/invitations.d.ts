import { APIResource } from "../../resource.js";
import * as Core from "../../core.js";
import * as InvitationsAPI from "./invitations.js";
export declare class Invitations extends APIResource {
    /**
     * Delete an invitation
     */
    delete(id: string, invitationId: string, options?: Core.RequestOptions): Core.APIPromise<InvitationDeleteResponse>;
    /**
     * Send an invitation to someone you wish to invite to join your organization
     */
    send(id: string, body: InvitationSendParams, options?: Core.RequestOptions): Core.APIPromise<InvitationSendResponse>;
}
export interface InvitationDeleteResponse {
    /**
     * The id of the organization
     */
    id: string;
}
export interface InvitationSendResponse {
    /**
     * The id of the organization
     */
    id: string;
    /**
     * Date at which the object was created (ISO 8601 format)
     */
    created_at: string;
    email: string;
    invitation_expired_at: string;
    inviter_email: string;
    kind: string;
    /**
     * The id of the organization
     */
    org_id: string;
    /**
     * The status of the invitation
     */
    status: 'pending' | 'accepted' | 'declined';
}
export interface InvitationSendParams {
    /**
     * The e-mail to send an invitation
     */
    email: string;
}
export declare namespace Invitations {
    export import InvitationDeleteResponse = InvitationsAPI.InvitationDeleteResponse;
    export import InvitationSendResponse = InvitationsAPI.InvitationSendResponse;
    export import InvitationSendParams = InvitationsAPI.InvitationSendParams;
}
//# sourceMappingURL=invitations.d.ts.map