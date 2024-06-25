const { AWSSDK } = require('../dist/nodes/AWSSDK/AWSSDK.node')

describe('Extraction', () => {

    it('Should create a list of services and operations', () => {


        const awsSdkClass = new AWSSDK()
        expect(awsSdkClass.description).toMatchSnapshot()
    })


})