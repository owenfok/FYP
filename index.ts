import * as pulumi from "@pulumi/pulumi"
import * as gcp from "@pulumi/gcp"

// Instance 
const gcn = pulumi.output(gcp.compute.getInstance({
    name: "vm",
    zone: "asia-east2-a"
}, { async: true }))

export const instanceZone = gcn.zone
export const machineName = gcn.machineType
export const instanceDeletionProtestion = gcn.deletionProtection
export const instanceImage = gcn.bootDisks[0].initializeParams[0].image
export const instanceSize = gcn.bootDisks[0].initializeParams[0].size
//

// InstanceGroup
const InstanceGroup = pulumi.output(gcp.compute.getInstanceGroup({
    name: "instance-group-1",
    zone: "asia-east2-a"
}, { async: true }));

export const InstanceGroupName = InstanceGroup.name
export const InstanceGroupSize = InstanceGroup.size
//

// Instance Template
const InstanceTemplate = pulumi.output(gcp.compute.getInstanceTemplate({
    name: "instance-template-1",
    project: ""
}, { async: true }));

export const InstanceTemplateName = InstanceTemplate.name
export const InstanceTemplateMetadata = InstanceTemplate.metadata
export const InstanceTemplateMachineType = InstanceTemplate.machineType
//

//  Identity and Access Management
const roleinfo = pulumi.output(gcp.iam.getRule({
    name: "roles/compute.viewer",
}, { async: true }));

export const theRoleId = roleinfo.id
export const theRoleName = roleinfo.name
export const theRoleStage = roleinfo.stage
export const theRolePermissions = roleinfo.includedPermissions
//

// pubsub
const pubsubTopic = pulumi.output(gcp.pubsub.getTopic({
    name: "abc",
}, { async: true }));

export const pubsubTopicName = pubsubTopic.name
export const pubsubTopicLabels = pubsubTopic.labels
export const pubsubTopicMessageStoragePolicies = pubsubTopic.messageStoragePolicies
//
