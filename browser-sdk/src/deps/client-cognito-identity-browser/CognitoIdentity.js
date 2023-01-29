"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var CognitoIdentityClient_1 = require("./CognitoIdentityClient");
var CreateIdentityPoolCommand_1 = require("./commands/CreateIdentityPoolCommand");
var DeleteIdentitiesCommand_1 = require("./commands/DeleteIdentitiesCommand");
var DeleteIdentityPoolCommand_1 = require("./commands/DeleteIdentityPoolCommand");
var DescribeIdentityCommand_1 = require("./commands/DescribeIdentityCommand");
var DescribeIdentityPoolCommand_1 = require("./commands/DescribeIdentityPoolCommand");
var GetCredentialsForIdentityCommand_1 = require("./commands/GetCredentialsForIdentityCommand");
var GetIdCommand_1 = require("./commands/GetIdCommand");
var GetIdentityPoolRolesCommand_1 = require("./commands/GetIdentityPoolRolesCommand");
var GetOpenIdTokenCommand_1 = require("./commands/GetOpenIdTokenCommand");
var GetOpenIdTokenForDeveloperIdentityCommand_1 = require("./commands/GetOpenIdTokenForDeveloperIdentityCommand");
var ListIdentitiesCommand_1 = require("./commands/ListIdentitiesCommand");
var ListIdentityPoolsCommand_1 = require("./commands/ListIdentityPoolsCommand");
var LookupDeveloperIdentityCommand_1 = require("./commands/LookupDeveloperIdentityCommand");
var MergeDeveloperIdentitiesCommand_1 = require("./commands/MergeDeveloperIdentitiesCommand");
var SetIdentityPoolRolesCommand_1 = require("./commands/SetIdentityPoolRolesCommand");
var UnlinkDeveloperIdentityCommand_1 = require("./commands/UnlinkDeveloperIdentityCommand");
var UnlinkIdentityCommand_1 = require("./commands/UnlinkIdentityCommand");
var UpdateIdentityPoolCommand_1 = require("./commands/UpdateIdentityPoolCommand");
var CognitoIdentity = /** @class */ (function (_super) {
    tslib_1.__extends(CognitoIdentity, _super);
    function CognitoIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CognitoIdentity.prototype.createIdentityPool = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new CreateIdentityPoolCommand_1.CreateIdentityPoolCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.deleteIdentities = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new DeleteIdentitiesCommand_1.DeleteIdentitiesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.deleteIdentityPool = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new DeleteIdentityPoolCommand_1.DeleteIdentityPoolCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.describeIdentity = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new DescribeIdentityCommand_1.DescribeIdentityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.describeIdentityPool = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new DescribeIdentityPoolCommand_1.DescribeIdentityPoolCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.getCredentialsForIdentity = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new GetCredentialsForIdentityCommand_1.GetCredentialsForIdentityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.getId = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new GetIdCommand_1.GetIdCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.getIdentityPoolRoles = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new GetIdentityPoolRolesCommand_1.GetIdentityPoolRolesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.getOpenIdToken = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new GetOpenIdTokenCommand_1.GetOpenIdTokenCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.getOpenIdTokenForDeveloperIdentity = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new GetOpenIdTokenForDeveloperIdentityCommand_1.GetOpenIdTokenForDeveloperIdentityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.listIdentities = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new ListIdentitiesCommand_1.ListIdentitiesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.listIdentityPools = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new ListIdentityPoolsCommand_1.ListIdentityPoolsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.lookupDeveloperIdentity = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new LookupDeveloperIdentityCommand_1.LookupDeveloperIdentityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.mergeDeveloperIdentities = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new MergeDeveloperIdentitiesCommand_1.MergeDeveloperIdentitiesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.setIdentityPoolRoles = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new SetIdentityPoolRolesCommand_1.SetIdentityPoolRolesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.unlinkDeveloperIdentity = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new UnlinkDeveloperIdentityCommand_1.UnlinkDeveloperIdentityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.unlinkIdentity = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new UnlinkIdentityCommand_1.UnlinkIdentityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    CognitoIdentity.prototype.updateIdentityPool = function (args, cb) {
        // create the appropriate command and pass it to .send
        var command = new UpdateIdentityPoolCommand_1.UpdateIdentityPoolCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    };
    return CognitoIdentity;
}(CognitoIdentityClient_1.CognitoIdentityClient));
exports.CognitoIdentity = CognitoIdentity;
//# sourceMappingURL=CognitoIdentity.js.map