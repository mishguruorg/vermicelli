import { resolve, reject } from 'bluebird'
import { defaultTo } from 'ramda'

const defaultErrorMessage = 'This is a default error message from vermicelli. It means that no error message has been set.'

const defaultError = defaultTo(new Error(defaultErrorMessage))

const defaultMockResolve = (mock, res) => mock
  ? mock.returns(resolve(res))
  : () => resolve(res)

const defaultMockReject = (mock, err) => mock
  ? mock.returns(reject(defaultError(err)))
  : () => reject(defaultError(err))

const defaultMock = (mock, res) => mock
  ? mock.returns(res)
  : () => res

const defaultMockErr = (mock, err) => {
  return mock
    ? mock.throws(defaultError(err))
    : () => { throw defaultError(err) }
}

export default {
  defaultMockResolve,
  defaultMockReject,
  defaultMock,
  defaultMockErr
}
