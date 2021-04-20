import  { datas} from "../stack"
import { expect } from "chai"
import "mocha"


describe("Comput Engine", () => {
    it("Machine type using f1 micro ", () => {
        expect(datas["machineName"], "Machine type should is f1 mirco").to.equal('f1-micro');
    })


    it("Zone in asia-east2-a ", () => {
        expect(datas["instanceZone"], "should in asia-east2-a").to.equal("asia-east2-a");
    })

    it("Disable instance delete protection ", () => {
        expect(datas["instanceDeletionProtestion"], "should disable instance delete protection").to.equal(false);
    })

    it("The OS is debian 10 ", () => {

        expect(datas["instanceImage"], "should is debian 10").to.equal("https://www.googleapis.com/compute/beta/projects/debian-cloud/global/images/debian-10-buster-v20210316");
    })

    it("The drive size is 10 GB  ", () => {

        expect(datas["instanceSize"], "should is 10 GB").to.equal(10);
    })

})
