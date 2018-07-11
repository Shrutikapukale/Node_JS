//WAP to update the student DB(send the key and value as argument which is to be update. Note:DB dynamic)
console.log("Student DB update while DB generated also dynamically ");
studentDB2={};

for(var j=1;j<=10;j++){
 studentDB2[j]="update student set name = updated_name_" +j+ " age:"+j+ "MoNo:" +j+ " where id="+j;
  console.log("Students....",studentDB2[j]);
}

 console.log("length..stud.",Object.keys(studentDB2).length);
 console.log("DB length",Object.values(studentDB2).length)





var studentDatabase =function(studentDB2,sID,x,y){
	
	console.log("old Database......");
	for(var i=1;i<=Object.keys(studentDB2).length;i++){
		console.log("Students in studentDB2 :: ", i, studentDB2[i]);
	  }
	
	
	for(var i=1;i<=Object.keys(studentDB2).length;i++){
		
		if(i == sID){
				switch(x){
						case "ID":studentDB2[i]="update student set name = updated_name_" +i+ " age:"+i+ "MoNo:" +i+ " where id="+y; break;
						case "Name":studentDB2[i]="update student set name = " +y+ " age:"+i+ "MoNo:" +i+ " where id="+i; break;
						case "Age":studentDB2[i]="update student set name = updated_name_" +i+ " age:"+y+ "MoNo:" +i+ " where id="+i;break
						case "MoNo":studentDB2[i]="update student set name = updated_name_" +i+ " age:"+i+ "MoNo:" +y+ " where id="+i;break;
						Default:cosole.log("Error");
						}
			        }   
				}
		   
		   
	  console.log("New Database......");
	  for(var i=1;i<=Object.keys(studentDB2).length;i++){
		console.log("Students in studentDB2 :: ", i, studentDB2[i]);
	  }
	  
}

//var sValue = 999999;
//var sValue = "Shruti"
var sValue = 25;
//studentDatabase(studentDB2,2,"MoNo",sValue);
//studentDatabase(studentDB2,2,"Name",sValue);
studentDatabase(studentDB2,2,"Age",sValue);




