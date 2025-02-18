import subtraction from './subtraction'
import { test, expect } from 'vitest'

test('First parameter me kuch bhi jo likhna ho likh sakte hain test case ke liye , like R.N i am testing Subtraction file', () => {
  expect(subtraction(10, 10)).toBe(0)
})
