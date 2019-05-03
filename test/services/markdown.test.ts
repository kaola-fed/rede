import {expect} from 'chai'

import mdIt from '../../src/services/markdown'

describe('markdown', () => {
  it('should return h1 with a class rde-h1', () => {
    const str = mdIt.render('# header')
    expect(str).to.equal('<h1 class="rde-h1">header</h1>\n')
  })

  it('should return p with a class rde-p', () => {
    const str = mdIt.render('this is a paragraph')
    expect(str).to.equal('<p class="rde-p">this is a paragraph</p>\n')
  })

  it('should return a with a class rde-a', () => {
    const str = mdIt.render('[this is a paragraph](http://www.kaola.com)')
    expect(str).to.equal('<p class="rde-p"><a class="rde-a" href="http://www.kaola.com">this is a paragraph</a></p>\n')
  })
})