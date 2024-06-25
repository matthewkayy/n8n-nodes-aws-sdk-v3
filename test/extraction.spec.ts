const { AWSSDKWrapper } = require('../dist/nodes/AWSSDKWrapper/AWSSDKWrapper.node')

describe('Extraction', () => {

	it('Should create a list of services and operations', () => {


		const awsSdkClass = new AWSSDKWrapper()
		expect(awsSdkClass.description).toMatchSnapshot()
	})


})
