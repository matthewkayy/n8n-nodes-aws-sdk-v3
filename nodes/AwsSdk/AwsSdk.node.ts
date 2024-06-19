import * as awsSdkClients from 'aws-sdk/clients/all';
import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
} from 'n8n-workflow';

import serviceProperties from './properties.json'

type ServiceName = keyof typeof awsSdkClients



export class AwsSdk implements INodeType {

	description: INodeTypeDescription = {
		displayName: 'AWS SDK',
		name: 'AWSSDK',
		group: ['transform'],
		version: 1,
		description: 'Implements the NPM AWS SDK packages; starts with V2 for all services and migrating to V3 for each service over time.',
		defaults: {
			name: 'AWS Service Request',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'awsSdkCredentials',
				required: true,
			}
		],
		properties: [

			...serviceProperties as INodeProperties[],
			{
				displayName: 'Request Input',
				name: 'requestInput',
				type: 'json',
				default: '{}',
				description: 'The input to the request, this is not typed (yet) so you must provide the correct input for the operation you are using.',
			},
		]

	};



	// The function below is responsible for actually doing whatever this node
	// is supposed to do. In this case, we're just appending the `myString` property
	// with whatever the user has entered.
	// You can make async calls and use `await`.
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const inputItems = this.getInputData();




		const resultItems: INodeExecutionData[] = [];

		// Iterates over all input items and add the key "myString" with the
		// value the parameter "myString" resolves to.
		// (This could be a different value for each item in case it contains an expression)
		for (let itemIndex = 0; itemIndex < inputItems.length; itemIndex++) {
			try {
				const region = this.getNodeParameter('region', itemIndex) as string
				const service = this.getNodeParameter('service', itemIndex) as ServiceName
				const operation = this.getNodeParameter('operation', itemIndex) as string
				const credentials = await this.getCredentials('awsSdkCredentials')
				const requestInput = this.getNodeParameter('requestInput', itemIndex) as Record<string, any>
				const serviceClient = new (awsSdkClients as any)[service]({
					region,
					credentials: {
						accessKeyId: credentials.accessKeyId,
						secretAccessKey: credentials.secretAccessKey,
						sessionToken: credentials.sessionToken,
					}
				})

				const response = await serviceClient[operation](requestInput).promise()

				resultItems.push({ json: response, pairedItem: itemIndex });
			} catch (error) {
				// This node should never fail but we want to showcase how
				// to handle errors.
				if (this.continueOnFail()) {
					resultItems.push({ json: this.getInputData(itemIndex)[0].json, error, pairedItem: itemIndex });
				} else {
					// Adding `itemIndex` allows other workflows to handle this error
					if (error.context) {
						// If the error thrown already contains the context property,
						// only append the itemIndex
						error.context.itemIndex = itemIndex;
						throw error;
					}
					throw new NodeOperationError(this.getNode(), error, {
						itemIndex,
					});
				}
			}
		}

		return this.prepareOutputData(resultItems);
	}
}
