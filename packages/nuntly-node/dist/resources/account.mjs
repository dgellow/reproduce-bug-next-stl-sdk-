// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from "../resource.mjs";
export class Account extends APIResource {
    /**
     * Retrieve your account informations
     */
    retrieve(options) {
        return this._client.get('/account', options)._thenUnwrap((obj) => obj.data);
    }
    /**
     * Update your account
     */
    update(body, options) {
        return this._client.patch('/account', { body, ...options })._thenUnwrap((obj) => obj.data);
    }
}
(function (Account) {
})(Account || (Account = {}));
//# sourceMappingURL=account.mjs.map