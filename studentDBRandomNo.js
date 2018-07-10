

function getRandomNo(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}


var studDB=function(studNo)
		var Age = getRandomNo(25,50);
                var MoNo=getRandomNo(9000000000,9999999999);
		var query2="insert into student(id,name,age,phno)values ("+ i+",'abc_"+i+"',"+Age+","+MoNo+")" ;
		console.log(query2);
	}
	
}

studDB(25);
