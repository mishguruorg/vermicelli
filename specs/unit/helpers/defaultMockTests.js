/* globals describe, it */
import { expect } from 'chai'
import { stub } from 'sinon'
import {
  defaultMockResolve,
  defaultMockReject
} from '../../../lib/helpers/defaultMock'

describe('when I call functions in defaultMock', () => {
  it('defaultMockResolve should return a successful promise when no mock is given', () => {
    const defaultResolve = defaultMockResolve()

    expect(defaultResolve().then).to.be.a.func
  })
  it('defaultMockResolve should return a successful promise', () => {
    const sinonStub = stub()
    const defaultPromisedMock = defaultMockResolve(sinonStub)

    const sinonStubRes = defaultPromisedMock()
    expect(sinonStubRes.then).to.be.a.func
    expect(sinonStub.called).to.be.true
  })
  it('defaultMockReject should return an unsuccessful promise when no mock is given', done => {
    const defaultReject = defaultMockReject()

    defaultReject()
      .catch(err => {
        expect(err).to.exist
        done()
      })
  })
  it('defaultMockReject should return an unsuccessful promise', done => {
    const sinonStub = stub()
    const defaultPromisedMock = defaultMockReject(sinonStub)

    defaultPromisedMock()
      .catch(err => {
        expect(err).to.exist
        expect(sinonStub.called).to.be.eq(true)
        done()
      })
  })
})
