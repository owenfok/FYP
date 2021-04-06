
import { assert, expect } from "chai";
import "mocha";
import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

describe("Try to set alert", () => {
    it("should have 1 alert", async () => {
        const alertPolicy = new gcp.monitoring.AlertPolicy("alert_policy", {
            combiner: "OR",
            conditions: [{
                conditionThreshold: {
                    aggregations: [{
                        alignmentPeriod: "60s",
                        perSeriesAligner: "ALIGN_RATE",
                    }],
                    comparison: "COMPARISON_GT",
                    duration: "60s",
                    filter: "metric.type=\"compute.googleapis.com/instance/disk/write_bytes_count\" AND resource.type=\"gce_instance\"",
                },
                displayName: "test condition",
            }],
            displayName: "My Alert Policy",
            userLabels: {
                foo: "bar",
            }
        })

            expect(alertPolicy.displayName, "Should have one alert").to.equal(
      "My Alert Policy");
    })
})
