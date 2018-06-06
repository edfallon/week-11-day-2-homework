const assert = require('assert');
const Park = require('../javascript_park.js');
const Dinosaur = require("../dinosaur.js");

describe('park', function(){

  let park;
  let dinosaur;


    beforeEach(function(){
      park = new Park();
      dinosaur = new Dinosaur();
    });

  it('enclosure should start empty', function(){
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should be able to add dinosaur', function(){
    park.addDinosaur(dinosaur);
    assert.strictEqual(park.enclosure.length, 1);
  });

  it('should be able to remove all dinosaurs of a particular type', function(){
    dinosaur1 = new Dinosaur("Triceratops", 1);
    park.addDinosaur(dinosaur1)
    park.removeByType('Triceratops');
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should get all the dinosaurs with an offspring count of more than 2', function(){
    dinosaur1 = new Dinosaur("Velociraptor", 4);
    dinosaur2 = new Dinosaur("Triceratops", 1);
    dinosaur3 = new Dinosaur("Tyrannosaurus", 2);
    dinosaur4 = new Dinosaur("Barney", 0);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(park.moreThan2(), dinosaur1);
  });


});
