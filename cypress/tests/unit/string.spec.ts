import { flatten } from '../../../src/utils/string'

describe('Unit Test String utils', () => {
  context('string/flatten', () => {
    it('Flatten a string', () => {
      expect(flatten('foo bar')).to.eq('foobar')
    })

    it('To lowerCase the given string', () => {
      expect(flatten('Foo Bar')).to.eq('foobar')
    })
  })
})
