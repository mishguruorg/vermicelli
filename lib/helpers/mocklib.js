import proxyquire from 'proxyquire'

const mockLib = (path, mocks) => proxyquire.noPreserveCache().noCallThru()(path, mocks)

export default mockLib
