import { APIResource } from "../../resource.js";
import * as Core from "../../core.js";
import * as OrganizationsAPI from "./organizations.js";
import * as InvitationsAPI from "./invitations.js";
import * as MembershipsAPI from "./memberships.js";
export declare class Organizations extends APIResource {
    memberships: MembershipsAPI.Memberships;
    invitations: InvitationsAPI.Invitations;
    /**
     * Return the organization
     */
    retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<OrganizationRetrieveResponse>;
    /**
     * Return the organizations
     */
    list(options?: Core.RequestOptions): Core.APIPromise<OrganizationListResponse>;
}
export interface OrganizationRetrieveResponse {
    /**
     * Date at which the object was created (ISO 8601 format)
     */
    created_at: string;
    /**
     * The user who created the object
     */
    created_by: string;
    /**
     * The display name of the organization
     */
    display_name: string;
    /**
     * Date at which the object was modified (ISO 8601 format)
     */
    modified_at: string;
    /**
     * The last user who modified the object
     */
    modified_by: string;
    /**
     * The id of the organization
     */
    org_id: string;
    /**
     * The status of the organization
     */
    status: 'active' | 'pending' | 'revoked';
}
/**
 * The organizations for the user
 */
export type OrganizationListResponse = Array<OrganizationListResponse.OrganizationListResponseItem>;
export declare namespace OrganizationListResponse {
    interface OrganizationListResponseItem {
        /**
         * Date at which the object was created (ISO 8601 format)
         */
        created_at: string;
        /**
         * The user who created the object
         */
        created_by: string;
        /**
         * The display name of the organization
         */
        display_name: string;
        /**
         * Date at which the object was modified (ISO 8601 format)
         */
        modified_at: string;
        /**
         * The last user who modified the object
         */
        modified_by: string;
        /**
         * The id of the organization
         */
        org_id: string;
        /**
         * The status of the organization
         */
        status: 'active' | 'pending' | 'revoked';
    }
}
export declare namespace Organizations {
    export import OrganizationRetrieveResponse = OrganizationsAPI.OrganizationRetrieveResponse;
    export import OrganizationListResponse = OrganizationsAPI.OrganizationListResponse;
    export import Memberships = MembershipsAPI.Memberships;
    export import MembershipListResponse = MembershipsAPI.MembershipListResponse;
    export import MembershipRevokeResponse = MembershipsAPI.MembershipRevokeResponse;
    export import Invitations = InvitationsAPI.Invitations;
    export import InvitationDeleteResponse = InvitationsAPI.InvitationDeleteResponse;
    export import InvitationSendResponse = InvitationsAPI.InvitationSendResponse;
    export import InvitationSendParams = InvitationsAPI.InvitationSendParams;
}
//# sourceMappingURL=organizations.d.ts.map