import { APIResource } from "../../resource.js";
import * as Core from "../../core.js";
import * as MembershipsAPI from "./memberships.js";
export declare class Memberships extends APIResource {
    /**
     * Return the organization memberships
     */
    list(id: string, options?: Core.RequestOptions): Core.APIPromise<MembershipListResponse>;
    /**
     * Revoke a user from an organization
     */
    revoke(id: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<MembershipRevokeResponse>;
}
export interface MembershipListResponse {
    /**
     * The invitations of this organization
     */
    invitations: Array<MembershipListResponse.Invitation>;
    /**
     * The organization membership
     */
    members: Array<MembershipListResponse.Member>;
}
export declare namespace MembershipListResponse {
    interface Invitation {
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
    interface Member {
        members: Array<Member.Member>;
    }
    namespace Member {
        interface Member {
            /**
             * Date at which the object was created (ISO 8601 format)
             */
            created_at: string;
            /**
             * The user who created the object
             */
            created_by: string;
            display_name: string;
            email: string;
            kind: string;
            /**
             * Date at which the object was modified (ISO 8601 format)
             */
            modified_at: string;
            /**
             * The last user who modified the object
             */
            modified_by: string;
            org_id: string;
            /**
             * The role of the membership
             */
            role: 'owner' | 'member';
            user_id: string;
        }
    }
}
export interface MembershipRevokeResponse {
    /**
     * The id of the organization
     */
    org_id: string;
    /**
     * The id of the organization
     */
    user_id: string;
}
export declare namespace Memberships {
    export import MembershipListResponse = MembershipsAPI.MembershipListResponse;
    export import MembershipRevokeResponse = MembershipsAPI.MembershipRevokeResponse;
}
//# sourceMappingURL=memberships.d.ts.map