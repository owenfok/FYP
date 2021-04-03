import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import "mocha";
import { expect } from "chai";

async function listInstance() {​​

  try {​​
    const results = await gcp.compute.getInstance();
    const gcn = results;

    console.log('Instance:');

    ((gcn: {​​ name: any; }​​) => {​​
      console.log(gcn.name);
    }​​);
    return true;
  }​​ catch (err) {​​
    console.error('ERROR:', err);
    return false
  }​​
}

describe("", () => {
   
    it("Create instance", async () => {
        const gcn = gcp.compute.getInstance({            
            name:"vm",
            zone:"asia-east2"
        })
        await 
        expect("Shoule have instance " )
    });
    
     
})
