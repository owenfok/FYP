import { datas } from "../stack"
import { expect } from "chai"
import "mocha"

describe("Try to set alert", () => {
    it("should have email", async () => {
        expect(datas["notiType"], "Should have email").to.equal("Email");
    })
    it("Noticification channel should have name 'gcp noti'", async () => {
        expect(datas["notiDisplayName"], "Display name should be 'gcp noti'").to.equal("gcp noti");
    })
    it("Noticification channel should be enabled", async () => {
        expect(datas["notiStatus"], "Status should be enabled").to.equal(true);
    })
    it("At least 1 contact should be set", async () => {
        expect(datas["notiLabels"], "At least 1 contact should be set").to.equal(true);
    })
})
