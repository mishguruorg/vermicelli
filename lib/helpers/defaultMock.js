import Promise from 'bluebird'
import { defaultTo } from 'ramda'

const defaultErrorMessage = 'This is a default error message from vermicelli. It means that no error message has been set.'

const defaultError = defaultTo(new Error(defaultErrorMessage))

const defaultMockResolve = (mock, res) => mock
  ? mock.returns(delayedPromise(res))
  : () => delayedPromise(res)

const defaultMockReject = (mock, err) => mock
  ? mock.returns(delayedPromise(null, defaultError(err)))
  : () => delayedPromise(null, defaultError(err))

const defaultMock = (mock, res) => mock
  ? mock.returns(res)
  : () => res

const defaultMockErr = (mock, err) => {
  return mock
    ? mock.throws(defaultError(err))
    : () => { throw defaultError(err) }
}

const delayedPromise = (res, err) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (err) return reject(err)
      if (res) return resolve(res)
    }, 20)
  })
}

export default {
  defaultMockResolve,
  defaultMockReject,
  defaultMock,
  defaultMockErr
}
