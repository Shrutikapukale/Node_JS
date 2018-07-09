

function getRandomNo(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}


var studDB=function(){
	for(var i=1; i<=25; i++){
		var getAge = getRandomNo(25,50);
        var getMoNo=getRandomNo(9000000000,9999999999);
		var query2="insert into student(id,name,age,phno)values ("+ i+",'abc_"+i+"',"+getAge+","+getMoNo+")" ;
		console.log(query2);
	}
	
}

studDB();