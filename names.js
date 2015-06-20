var PART_1 = ["Ve", "Vy", "Em", "Sa", "Cu","Hy", "Ry", "Ty", "Sy", "Ly", "He", "Re", "Te", "Me", "Ku", "Mu", "Hu", "Ru", "Ma", "A", "La", "Ha", "Ta", "Tr", "Pr", "Cr", "Ar"]


var PART_2 = ["en", "xen", "ix", "pan", "gon", "ron", "son", "bun", "gun", "lun", "ay", "eng", "zu", "uko", "sem", "sen", "ion", "ireon", "izon" ]

var CLASSES = ["the quick", "of Bertha", "the weak", "the poor", "of Asgard", "of the sun", "of the moon", "the paladin", "the mage"]

var Name = function(prefix, suffix, ending){
  this.prefix = PART_1[Math.floor(Math.random()*PART_1.length)];
  this.suffix = PART_2[Math.floor(Math.random()*PART_2.length)];
  this.ending = CLASSES[Math.floor(Math.random()*CLASSES.length)];
  
}
