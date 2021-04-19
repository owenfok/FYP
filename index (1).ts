import * as pulumi from "@pulumi/pulumi"
import * as gcp from "@pulumi/gcp"
import "mocha"


// Instance 
const gcn = pulumi.output(gcp.compute.getInstance({
    name: "vm",
    zone: "asia-east2-a"
}, { async: true }))


export const instanceZone = gcn.zone
//console.log(getZone)
export const machineName = gcn.machineType
//console.log(machineName)
export const instanceDeletionProtestion = gcn.deletionProtection
//console.log(instanceDeletionProtestion)
export const instanceBootDisk = gcn.bootDisks
//console.log(instanceBootDisk)

//


// InstanceGroup
const InstanceGroup = pulumi.output(gcp.compute.getInstanceGroup({
    name: "instance-group-1",
    zone: "asia-east2-a"
}, { async: true }));

export const InstanceGroupName = InstanceGroup.name
export const InstanceGroupSize = InstanceGroup.size
//console.log(InstanceGroupSize)

//


// Instance Template

const InstanceTemplate = pulumi.output(gcp.compute.getInstanceTemplate({
    name: "instance-template-1",
    project: ""
}, { async: true }));

export const InstanceTemplateName = InstanceTemplate.name
//console.log(InstanceTemplateName)
export const InstanceTemplateMetadata = InstanceTemplate.metadata
//console.log(InstanceTemplateMetadata)
export const InstanceTemplateMachineType = InstanceTemplate.machineType
//console.log(InstanceTemplateMachineType)



//  Identity and Access Management


const roleinfo = gcp.iam.getRule({
    name: "roles/compute.viewer",
});
export const theRoleId = roleinfo.then(roleinfo => console.log(roleinfo.id))
export const theRoleName = roleinfo.then(roleinfo => console.log(roleinfo.name))
export const theRoleStage = roleinfo.then(roleinfo => console.log(roleinfo.stage))
export const theRolePermissions = roleinfo.then(roleinfo => console.log(roleinfo.includedPermissions))



const roleinfos = pulumi.output(gcp.iam.getRule({
    name: "roles/compute.viewer",
}));

export const a = roleinfos.id