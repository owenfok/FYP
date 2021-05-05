import { datas } from "../stack"
import { expect } from "chai"
import "mocha";


describe("setup database", () => {

    it("should have database instance 'test-sql-instance'", async () => {
        expect(datas["databaseName"], "Name of database should be 'test-sql-instance'").to.equal("test-sql-instance");
    })
    
    it("database version should be 'MYSQL_5_6'", async () => {
        expect(datas["databaseVersion"], "database version should be 'MYSQL_5_6'").to.equal("MYSQL_5_6");
    })

    it("Should be in 'us-west1'", async () => {
        expect(datas["databaseRegion"], "Should be in 'us-west1'").to.equal("us-west1");
    })
})



describe("Database Setting", () => {

    it("crash safe replication should be turned off ", async () => {
        expect(datas["dbCrashSafe"], "crash safe replication should be turned off").to.equal(false);
    })

    it("disk auto size should be turned off ", async () => {
        expect(datas["dbAutoSize"], "Auto size should be turned off").to.equal(false);
    })

    it("disk size should be set to 10 ", async () => {
        expect(datas["dbDiskSize"], "Disk size should be set to 10").to.equal(10);
    })

    it("disk type should be PD_HDD ", async () => {
        expect(datas["dbDiskType"], "Disk size should be PD_HDD").to.equal("PD_HDD");
    })

    it("Database location preferences should be us-west1-a ", async () => {
        expect(datas["dblocation"], "Database location preferences should be us-west1-a ").to.equal("us-west1-a");
    })

    it("Database pricing plan should be PER_USE", async () => {
        expect(datas["dbpricing"], "Database pricing plan should be PER_USE").to.equal("PER_USE");
    })

    it("Instance of database should be db-f1-micro", async () => {
        expect(datas["dbinstance"], "Instance of database should be db-f1-micro").to.equal("db-f1-micro");
    })
})
