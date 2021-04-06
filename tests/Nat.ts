import * as gcp from "@pulumi/gcp";
import { describe, it } from "mocha";
import { expect } from 'chai';


describe("Set up Vpc Nat ", () => {
    const vpcNat : gcp.compute.RouterNat = VPCNAT;
    it("Set router name", async () => {
        const vpcNET = await promise(vpcNat.router)
        expect(vpcNET).to.equal("msat-router-5caae0d");
    });


    it("Set router region us-east1.", async () => {
        const vpcNET = await promise(vpcNat.region)
        expect(vpcNET).to.equal("us-east1");
    });

    

    it("Set up nat ip allocate .", async () => {
        const NatAllocate = await promise(vpcNat.natIpAllocateOption)
        expect(NatAllocate).to.equal("AUTO_ONLY");
    });

    it("Set tcp Established Timeout Sec 1200.", async () => {
        const natEstablishedTimeout = await promise(vpcNat.tcpEstablishedIdleTimeoutSec)
        expect(natEstablishedTimeout).to.equal(1200);
    });

    it("Set tcp Transitory Idle Timeout Sec 30.", async () => {
        const natTransitoryTimeout = await promise(vpcNat.tcpTransitoryIdleTimeoutSec)
        expect(natTransitoryTimeout).to.equal(30);
    });

    it("Set udp Idle Timeout Sec 30.", async () => {
        const natUdpTimeout = await promise(vpcNat.udpIdleTimeoutSec)
        expect(natUdpTimeout).to.equal(30);
    });
    
});