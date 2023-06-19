var p = prompt('pilih : gajah, semut, orang');

var comp = Math.random();
alert(comp);
if(comp < 0.34 ){
	comp = 'gajah';
}else if(comp >= 0.34 && comp < 0.67){
	comp = 'orang';
}else{
	comp = 'semut';
}

var hasil = '';
//menentukan rules
if( p == comp){
	hasil = 'DRAW !!';
} 

else if(p == 'gajah' ){
	hasil = (comp =='orang')?'YOU WIN !' : 'YOU LOSE!';
}

else if(p == 'orang' ){
	hasil = (comp =='gajah')?'YOU WIN !' : 'YOU LOSE!';
}

else if(p == 'semut' ){
	hasil = (comp =='orang')?'YOU WIN !' : 'YOU LOSE!';
}


// else if(p == 'gajah' ){
// 	if(comp == 'orang' ){
// 		hasil = 'YOU WIN !!';
// 	}else {
// 		hasil = 'YOU LOSE !';
// 	}
// }

// else if(p == 'orang' ){
// 	if(comp == 'gajah' ){
// 		hasil = 'YOU LOSE !!';
// 	}else{
// 		hasil = 'YOU WIN !';
// 	}
// }

// else if(p == 'semut' ){
// 	if(comp == 'orang' ){
// 		hasil = 'YOU WIN !!';
// 	}else{
// 		hasil = 'YOU LOSE !';
// 	}
// }

alert(hasil);
	
