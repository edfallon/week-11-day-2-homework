const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('dinosaur', function(){

  let dinosaur;


    beforeEach(function(){
        dinosaur = new Dinosaur();
      });

  it('should have a type', function(){
    dinosaur.type = "Tyrannosaurus"
    assert.strictEqual(dinosaur.type, "Tyrannosaurus")
  });




});
