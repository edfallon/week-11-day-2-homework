const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('dinosaur', function(){

  let dinosaur;


    beforeEach(function(){
        dinosaur = new Dinosaur();
      });

  it('should have a type', function(){
    dinosaur.type = "Tyrannosaurus";
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  });

  it("should have a number of offspring per year", function(){
    dinosaur.offspring = 2;
    assert.strictEqual(dinosaur.offspring, 2);
  })




});
