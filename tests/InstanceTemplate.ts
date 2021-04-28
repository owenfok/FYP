import  { datas} from "../stack"
import { expect } from "chai"
import "mocha"


describe("Instance template", () => {
    it("Machine type using f1 micro ", () => {
        expect(datas["InstanceTemplateMachineType"], "Machine type should is f1 mirco").to.equal('f1-micro');
    })


    it("Instance Template Metadata ", () => {
        expect(datas["InstanceTemplateMetadata"], "should have metadata").to.equal("sudo touch test.txt");
    })

    it("Instance template name ", () => {

        expect(datas["InstanceTemplateName"], " Name should is instance-template-1 ").to.equal("instance-template-1");
    })
    
        it("Instance template disk size ", () => {

        expect(datas["InstanceTemplateDisk "], " size should 10 GB").to.equal(10);
    })
    
        it("Instance template network name ", () => {

        expect(datas["InstanceTemplateNetwork"], " Name should is gateway-1 ").to.equal("gateway-1");
    })

})
