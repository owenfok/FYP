import { assert, expect } from "chai";
import {config} from "dotenv";
config();
import axios from "axios";
import "mocha";
import * as path from "path";
import * as chai from "chai";
import {GcloudSdk} from "../src/GcloudSdk";
import { promises } from "dns";


// variables
const cwd = path.join(process.cwd(), "./tests/functions/");
const options = {cwd, keyFilename: process.env.KEY_FILENAME};

describe("gcloud functions", () => {
    it.only("deploy public functions", async () => {
        const gcloud = await new GcloudSdk(process.env.GCP_PROJECT_NAME, options).init();
        const functions = gcloud.functions();
        const region = gcloud.regions.usCentral1;

        const help = await functions.help();
        // console.log("help", help);

        const regions = await functions.regions();
        console.log("regions", regions);

        const logs = await functions.logs();
        console.log("logs", logs);

        const eventTypes = await functions.eventTypes();
        console.log("eventTypes", eventTypes);

        const list = await functions.list();
        const describe = await functions.describe("unknown", {region});

        for (const item of list) {
            console.log(item);
            const describeResult = await functions.describe(item.name, {region: item.region});
            console.log("describe", item.name, describeResult);

            if (item.status === "READY" || item.status === "ACTIVE") {
                const callResult = await functions.call(item.name, {region: item.region, data: {name: "value"}});
                console.log("call", item.name, callResult);
            }

            console.log("delete", item.name);
        }

        const name = "publicAccess";
        const deploy = await functions
            .deploy(name, {
                triggerHttp: true,
                entryPoint: "testing",
                runtime: functions.runtimes.nodejs8,
                region,
                memory: functions.memory.M128,
                setEnvVars: {name: "gcp", FOO: "foo", BAR: "bar"},
                allowUnauthenticated: true,
            });
        console.log("deploy", deploy);

        const url = deploy.httpsTrigger.url;
        const result2 = await axios.get(url);
        assert.match(result2.data, /Hello World!/);

        // delete it
        await functions.delete(name, {region});
    });
});