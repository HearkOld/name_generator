var PART_1 = ["Hy", "Ry", "Ty", "Sy", "Ly", "He", "Re", "Te", "Me", "Ku", "Mu", "Hu", "Ru", "Ma", "A", "La", "Ha", "Ta", "Tr", "Pr", "Cr", "Ar"]
var PART_2 = ["gon", "ron", "son", "bun", "gun", "lun", "ay", "eng", "zu", "uko", "sem", "sen", "ion", "ireon", "izon" ]
var CLASSES = ["the quick", "of Bertha", "the weak", "the poor", "of Asgard", "of the sun", "of the moon", "the paladin", "the mage"]
var Name = function(prefix, suffix, ending){
  this.prefix = PART_1[Math.floor(Math.random()*PART_1.length)];
  this.suffix = PART_2[Math.floor(Math.random()*PART_2.length)];
  this.ending = CLASSES[Math.floor(Math.random()*CLASSES.length)];
  
}
OUTPUT_1 = PART_1[Math.floor(Math.random()*PART_1.length)];
OUTPUT_2 = PART_2[Math.floor(Math.random()*PART_2.length)];
OUTPUT_3 = CLASSES[Math.floor(Math.random()*CLASSES.length)];
var write = function(){
  document.write(OUTPUT_1+ "" +OUTPUT_2+""+OUTPUT_3)
}
var generate = function(){
 document.getElementById('log').innerHTML = '<h1>'+PART_1[Math.floor(Math.random()*PART_1.length)]+ "" +PART_2[Math.floor(Math.random()*PART_2.length)]+" "+CLASSES[Math.floor(Math.random()*CLASSES.length)]+'</h1>'
}
var Town_Pre = ["Abr", "Aryn", "Lean", "Mynt", "Shar", "Qee", "Beso", "Omyn", "Lympho", "Des", "Lyn"]
var Town_Suf = ["nthia", "ia", "olyn", "ownia", "ian", "feea", "pora", "chi"]
var generateTown = function(){
 document.getElementById('log').innerHTML = '<h1>'+Town_Pre[Math.floor(Math.random()*Town_Pre.length)]+ "" +Town_Suf[Math.floor(Math.random()*Town_Suf.length)]+'</h1>'
}
var submit = function(){
	var chosep = prompt("Prefix or Suffix?", "prefix")
	if (chosep.toLowerCase() == "prefix"){
		var chosea = prompt("and What might this prefix be?", "wu")
		PART_1.push(chosea)
	} else if (chosep.toLowerCase() == "suffix"){
		var choseb = prompt("and what might this suffix be?", "tang")
		PART_2.push(choseb.toLowerCase())
	} else {
		alert("Invalid Input")
	}
}
