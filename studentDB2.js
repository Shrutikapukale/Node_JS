
console.log("Format: update student set name =updated_name_1 where id= 1");
var updateDB = function(studNo){
	for(i=1;i<=studNo;i++){
	 var query = "update student set name = updated_name_" +i+ " where id="+i;
	 console.log(query);
	}
}

updateDB(25);


//////////////////////////////////////////////////////////////////////////////////////////////
console.log("Format: update student set name =updated_name_1,age=1 where id= 1");
var updateDB2= function(studNo){
	for(i=1;i<=studNo;i++){
	 var query = "update student set name = updated_name_" +i+ " age:"+i+" where id="+i;
	 console.log(query);
	}
}

updateDB2(25);

/////////////////////////////////////////////////////////////////////////////////////////