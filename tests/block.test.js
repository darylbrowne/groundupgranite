// block.test.js
const Person = require('../js/block');
test('Block constructs with a first and last name', () => {
  let testBlock = new Block('modelJSON', 'actualJSON')
  expect(testBlock).toEqual({model: 'modelJSON', actual: 'actualJSON'});
});
test('fullJSON returns Block instance of combnined JSON', () => {
  let testBlock = new Block('modelJSON', 'actualJSON')
  expect(testBlock.fullJSON()).toBe('modelJSON actualJSON');
});
