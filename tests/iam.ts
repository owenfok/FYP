import { assert, expect } from "chai";
import "mocha";
import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";



describe("Try to grep role", () => {
    const roleinfo = gcp.iam.getRule({
        name: "roles/compute.viewer",
    });
    const theRolePermissions = roleinfo.then(roleinfo => console.log(roleinfo.includedPermissions));
    
    
    it("should have role 'viewer' ", async () => {
        expect(theRolePermissions.then.length, "with the role 'viewer'").to.equal(2);
    });
    
})
