import {
	ICredentialType,
	INodeProperties
} from 'n8n-workflow';

export class AwsSdk implements ICredentialType {
	name = 'awsSdkCredentials';
	displayName = 'AWS SDK Credentials';
	properties: INodeProperties[] = [
		// The credentials to get from user and save encrypted.
		// Properties can be defined exactly in the same way
		// as node properties.
		{
			displayName: 'Access Key Id',
			name: 'accessKeyId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Secret Access Key',
			name: 'secretAccessKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',

		},
		{
			displayName: 'Session Token',
			name: 'sessionToken',
			type: 'string',
			default: '',
		}
	];


}
