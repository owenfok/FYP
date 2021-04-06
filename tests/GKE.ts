import * as k8s from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import { describe, it } from "mocha";
import { expect } from 'chai';


describe("check GKE setting ", () => {
    const cluster: gcp.container.Cluster = infra.ClusterK8s;

    describe("#Cluster K8s", () => {
        it("must have at least 2 nodes", async () => {
            const nodes = await promise(cluster.initialNodeCount);
            expect(nodes).to.gte(2);
        });

        it("MachineType must e2-micro.", async () => {
            const MichineType = await promise(cluster.nodeConfig.machineType);
            expect(MichineType).to.equal("e2-micro");
        });

        it("GKE engine setting in us-east1 Region", async () => {
            const GKELocation = await promise(cluster.location);
            expect(GKELocation).to.equal("us-east1");
        });

        it("GKE Engine Name.", async () => {
            const GKEName = await promise(cluster.name);
            expect(GKEName).to.equal("name-530306d");
        });
    });
});