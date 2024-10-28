import { APIResource } from "../resource.js";
import * as Core from "../core.js";
import * as AccountAPI from "./account.js";
export declare class Account extends APIResource {
    /**
     * Retrieve your account informations
     */
    retrieve(options?: Core.RequestOptions): Core.APIPromise<AccountRetrieveResponse>;
    /**
     * Update your account
     */
    update(body: AccountUpdateParams, options?: Core.RequestOptions): Core.APIPromise<AccountUpdateResponse>;
}
export interface AccountRetrieveResponse {
    /**
     * The display name
     */
    display_name: string;
    /**
     * The email address associated with the account
     */
    email: string;
    /**
     * The id of the user
     */
    user_id: string;
}
export interface AccountUpdateResponse {
    /**
     * The id of the user
     */
    user_id: string;
}
export interface AccountUpdateParams {
    /**
     * The display name
     */
    display_name: string;
}
export declare namespace Account {
    export import AccountRetrieveResponse = AccountAPI.AccountRetrieveResponse;
    export import AccountUpdateResponse = AccountAPI.AccountUpdateResponse;
    export import AccountUpdateParams = AccountAPI.AccountUpdateParams;
}
//# sourceMappingURL=account.d.ts.map