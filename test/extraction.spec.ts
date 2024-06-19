const { AwsSdk } = require('../dist/nodes/AwsSdk/AwsSdk.node')

describe('Extraction', () => {

    it('Should create a list of services and operations', () => {


        const awsSdkClass = new AwsSdk()
        expect(awsSdkClass.description).toMatchSnapshot()
    })


})