
import { assert, expect } from "chai";
import "mocha";
import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

describe("Try to set alert", () => {
    it("should have 1 alert", async () => {
        const basic = gcp.monitoring.getNotificationChannel({
            displayName: "Test Notification Channel",
        });
        const alertPolicy = new gcp.monitoring.AlertPolicy("alertPolicy", {
            displayName: "My Alert Policy",
            notificationChannels: [basic.then(basic => basic.name)],
            combiner: "OR",
            conditions: [{
                displayName: "test condition",
                conditionThreshold: {
                    filter: "metric.type=\"compute.googleapis.com/instance/disk/write_bytes_count\" AND resource.type=\"gce_instance\"",
                    duration: "60s",
                    comparison: "COMPARISON_GT",
                    aggregations: [{
                        alignmentPeriod: "60s",
                        perSeriesAligner: "ALIGN_RATE",
                    }],
                },
            }],
        });

        expect(alertPolicy.displayName, "Should have one alert").to.equal(
            "My Alert Policy");
    })
})
