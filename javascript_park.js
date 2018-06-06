const Dinosaur = require("./dinosaur.js");

const dinosaur = new Dinosaur();

const Park = function(){
    this.enclosure = [];


};

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeByType = function (type) {
  for(var i = this.enclosure.length - 1; i >= 0; i--) {
    if(this.enclosure[i].type === type) {
       this.enclosure.splice(i, 1);
    }
}

Park.prototype.moreThan2 = function() {
  for(var i = this.enclosure.length - 1; i >= 0; i--) {
    if(dinosaur[i].offspring > 2) {
       return dinosaur;
    }
}

};




module.exports = Park;

// for(dinosaur in this.enclosure){
//   if (dinosaur.offspring > 2) {
//     return dinosaur;
//   }
// }


// for(dinosaur ; this.enclosure){
//   if dinosaur.type === type {
//     this.enclosure.splice(dinosaur)
//   }
// }
