# n8n-nodes-aws-sdk-v3

This is an n8n community node. It lets you use any AWS service via the javascript AWS SDK in your n8n workflows.

AWS SDK isn't affiliated or endorsed by AWS. It starts with the latest V2 version of the JS SDK and iterates through the various services already built in and exported. These are assembled into a gigantic list which the Node makes available in the UI. This isn't as beautiful as the dedicated Service Nodes, however it at least makes calling any service possible. It's called V3 because I intended to use the V3 SDK however that doesn't have the ability to iterate on every service, so it's using V2 and the various V3 modules can be imported over time after the V2 sunset date.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials) <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Usage](#usage) <!-- delete if not using this section -->  
[Resources](#resources)  
[Version history](#version-history) <!-- delete if not using this section -->

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- Every AWS Service
  - The latest supported Api Version
    - Every Operation

## Credentials

_If users need to authenticate with the app/service, provide details here. You should include prerequisites (such as signing up with the service), available authentication methods, and how to set them up._

## Compatibility

_State the minimum n8n version, as well as which versions you test against. You can also include any known version incompatibility issues._

## Usage

_This is an optional section. Use it to help users with any difficult or confusing aspects of the node._

_By the time users are looking for community nodes, they probably already know n8n basics. But if you expect new users, you can link to the [Try it out](https://docs.n8n.io/try-it-out/) documentation to help them get started._

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- _Link to app/service documentation._

## Version history

_This is another optional section. If your node has multiple versions, include a short description of available versions and what changed, as well as any compatibility impact._
