import { datas } from "../stack"
import { expect } from "chai"
import "mocha";
import * as chai from "chai";
import chaiString from "chai-string";
chai.use(chaiString);


describe("Create Secret", () => {
    it("Secret Name 'your-secret' ", async () => {
        expect(datas["GetSecret"]).to.endsWith("your_secret/versions/1");
    });
});

describe("Secret password", () => {
    it("Secret password 'PassW@rd' ", async () => {
        expect(datas["GetSecretData"]).to.equal("PassW@rd");
    });
});

describe("Secret version", () => {
    it("Secret version '1' ", async () => {
        expect(datas["GetSecretVersion"]).to.equal("1");
    });
});

describe("Secret Enabled", () => {
    it("Secret version 'true' ", async () => {
        expect(datas["GetSecretEnabled"]).to.equal(true);
    });
});