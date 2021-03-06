import { datas } from "../stack"
import { expect } from "chai"
import "mocha"

describe("Try to set alert", () => {
    it("should have email",  () => {
        expect(datas["notiType"], "Should have email").to.equal("Email");
    })
    it("Noticification channel should have name 'gcp noti'",  () => {
        expect(datas["notiDisplayName"], "Display name should be 'gcp noti'").to.equal("gcp noti");
    })
    it("Noticification channel should be enabled",  () => {
        expect(datas["notiStatus"], "Status should be enabled").to.equal(true);
    })
    it("At least 1 contact should be set",  () => {
        expect(datas["notiLabels"], "At least 1 contact should be set").to.equal(true);
    })
})
