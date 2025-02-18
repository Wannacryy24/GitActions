import sum from './sum'
import { test, expect } from 'vitest'
// jab bhi test case likhna hota hai uske liye ek test ka function hota hai
// test("3 parameter hote hai")
// 1:testing defination => test("testing for sum function")
// 2: callback function , isme vo code likna hai jo testing ke liye output dega
// 3: set timeout is optional ki kitni der baar execute hoga;
// callback ke andar ek function likhta hain

test('sum vale function ko test karenege', () => {
  // kisko test karna chahte ho
  // expect kisko expect kar raha hai sum vale function ko
  // sum vala function 2 parameter expext kar raha hai
  expect(sum(10, 10)).toBe(20)
})
