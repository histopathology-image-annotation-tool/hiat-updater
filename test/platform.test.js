/* global describe, it, expect */
const platform = require('../lib/platform')

describe('Platform', () => {
  it('Should parse Mac ARM dmg', () => {
    const result = platform('AnnotAid-MacOS-ARM-v1.0.0-setup.dmg')
    expect(result).toBe('dmg-arm')
  })

  it('Should parse Mac Intel', () => {
    const result = platform('AnnotAid-MacOS-Intel-v1.0.0-setup.dmg')
    expect(result).toBe('dmg')
  })

  it('Should parse other platforms', () => {
    const result = platform('hyper_2.1.1_amd64.deb')
    expect(result).toBe('deb')
  })

  it('Should parse dmg', () => {
    const result = platform('hyper-2.1.1.dmg')
    expect(result).toBe('dmg')
  })

  it('Should return false for unknown files', () => {
    const result = platform('hi.txt')
    expect(result).toBe(false)
  })
})
