"use strict";
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const resource_1 = require("../resource.js");
class Account extends resource_1.APIResource {
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
exports.Account = Account;
(function (Account) {
})(Account = exports.Account || (exports.Account = {}));
//# sourceMappingURL=account.js.map