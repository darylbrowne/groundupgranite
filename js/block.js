// block.js
class Block {
  constructor(modelJSON, actualJSON) {
    this.modelJSON = modelJSON
    this.actualJSON = actualJSON
  }
fullJSON() {
    return this.modelJSON + ' ' + this.actualJSON
  }
}
module.exports = Block;
