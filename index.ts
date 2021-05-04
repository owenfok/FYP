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
export const instanceNetwork = gcn.networkInterfaces[0].name
export const instanceTags = gcn.tags[0]
export const instanceDisksAutoDelete = gcn.bootDisks[0].autoDelete

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
export const InstanceTemplateNetwork = InstanceTemplate.networkInterfaces[0].name
export const InstanceTemplateDisk = InstanceTemplate.disks[0].diskSizeGb
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
    name: "MyTopic",
}, { async: true }));

export const pubsubTopicName = pubsubTopic.name
export const pubsubTopicLabels = pubsubTopic.labels
export const pubsubTopicMessageStoragePolicies = pubsubTopic.messageStoragePolicies
//

//VPC///////////////////////////////////

const network = pulumi.output(gcp.compute.getNetwork({
    name: "gateway-1",
} ))

export const net = network.name


    // ------vpc_subnet public
const publicsubnet = pulumi.output(gcp.compute.getSubnetwork({
    name: "public",
    region: "us-east1",
} ));
    // ------vpc_private public
const privatesubnet = pulumi.output(gcp.compute.getSubnetwork({
    name: "private",
    region: "us-east1",
} ));




//vpc_subnet public
export const PsubnetName = publicsubnet.name
export const PsubnetReGion = publicsubnet.region
export const PsubnetGateway = publicsubnet.gatewayAddress
export const PsubnetRange = publicsubnet.ipCidrRange
//vpc_subnet private
export const PrivateSubnetName = privatesubnet.name
export const PrivateSubnetRegion = privatesubnet.region
export const PrivateSubnetGateway = privatesubnet.gatewayAddress
export const PrivateSubnetRange = privatesubnet.ipCidrRange


/////////////////////////////////////

//natRouter///////
const my_router = pulumi.output(gcp.compute.getRouter({
    name: "vpcroute",
    network: "gateway-1",
    region: "us-east1"
}, { async: true }));



export const GetRouteName = my_router.name

export const GetRouteIpRanges = my_router.bgps[0].advertisedIpRanges[0].range

export const GetRouteRegion = my_router.region


export const GetRouteNetWork = my_router.network

export const GetRouteMode = my_router.bgps[0].advertiseMode
////////

//secret manager///////
const Secret = pulumi.output(gcp.secretmanager.getSecretVersion({
    secret: "your_secret",
}, { async: true }));


export const GetSecret = Secret.name
export const GetSecretData = Secret.secretData
export const GetSecretVersion = Secret.version
export const GetSecretEnabled = Secret.enabled
//////////////////////

///CloudFunction///
const my_function = pulumi.output(gcp.cloudfunctions.getFunction({
    name: "gcplab",
    region:"us-east1"
}, { async: true }));

export const GetCloudFunction = my_function.name
export const GetCloudFunctionRegion = my_function.region
export const GetCloudFunctionEntryPt = my_function.entryPoint
export const GetCloudFunctionTriggers = my_function.eventTriggers[0].eventType
export const GetCloudFunctionPolicies = my_function.eventTriggers[0].failurePolicies[0].retry
export const GetCloudFunctionResource = my_function.eventTriggers[0].resource
export const GetCloudFunctionIngress = my_function.ingressSettings

export const GetCloudFunctionRuntime = my_function.runtime
export const GetCloudFunctionTimeout = my_function.timeout
export const GetCloudFunctionVpcConnector = my_function.vpcConnector
export const GetCloudFunctionVPCsetting = my_function.vpcConnectorEgressSettings
///////////////////
