import { resolve, reject } from 'bluebird'

const defaultMockResolve = (mock, res) => mock ? mock.returns(resolve(res)) : () => resolve(res)

const defaultMockReject = (mock, err) => mock ? mock.returns(reject(err)) : () => reject(err)

const defaultMock = (mock, res) => mock ? mock.returns(res) : () => res

const defaultMockErr = (mock, err) => {
  return mock
    ? mock.throws(err)
    : () => { throw err }
}

export default {
  defaultMockResolve,
  defaultMockReject,
  defaultMock,
  defaultMockErr
}
