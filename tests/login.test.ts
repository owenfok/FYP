import {config} from "dotenv";
config();
import { assert, expect } from "chai";
import "mocha";
import {GcloudSdk} from "../src/GcloudSdk";

describe("Try to Login gcp AC", () => {
    it("Try login with service account", async () => {
        const gcloudSdk = new GcloudSdk(process.env.GCP_PROJECT_NAME, {keyFilename: process.env.KEY_FILENAME});
        await gcloudSdk.logout();
        const gcloud = await gcloudSdk.init();
    });

    it("Check ac can login ?", async () => {
        const gcloudSdk = new GcloudSdk(process.env.GCP_PROJECT_NAME);
        await gcloudSdk.logout();
        const gcloud = await gcloudSdk.init();
    });

    it("Check accan logout ?", async () => {
        const gcloudSdk = new GcloudSdk(process.env.GCP_PROJECT_NAME, {useInteractiveLogin: false});
        await gcloudSdk.logout();

        try {
            await gcloudSdk.init();
            assert.isTrue(false);
        } catch (err) {
            assert.match(err.message, /There is no authorized user./);
        }
    });
});
