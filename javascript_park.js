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

};




module.exports = Park;


// for(dinosaur ; this.enclosure){
//   if dinosaur.type === type {
//     this.enclosure.splice(dinosaur)
//   }
// }
