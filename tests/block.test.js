// block.test.js
const Person = require('../js/block');
test('Block constructs with a model and actual JSON', () => {
  let testBlock = new Block('modelJSON', 'actualJSON')
  expect(testBlock).toEqual({modelJSON: 'modelJSON', actualJSON: 'actualJSON'});
});
test('fullJSON returns Block instance of combnined JSON', () => {
  let testBlock = new Block('modelJSON', 'actualJSON')
  expect(testBlock.fullJSON()).toBe('modelJSON actualJSON');
});
