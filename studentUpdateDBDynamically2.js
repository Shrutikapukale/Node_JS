

//WAP to update the student DB(send the key and value as argument which is to be update. Note:DB dynamic  without using switch case)
console.log("Student DB update while DB generated also dynamically ");
studentDB2={};

for(var j=1;j<=5;j++){ 
 studentDB2[j]={ "Id":j,"Name":"Name_"+j, "Age":j , "MoNo":j};
  //console.log("Students....",studentDB2[j]);
}

 console.log("length..stud.",Object.keys(studentDB2).length);
 console.log("DB length",Object.values(studentDB2).length)





var studentDatabase =function(studentDB2,sID,x,y){
	   console.log("X:",x)
	   console.log("Y:",y)
	   console.log("abc"+x+y)
	
	console.log("old Database......");
	for(var i=1;i<=Object.keys(studentDB2).length;i++){
		console.log("Students in studentDB2 :: ", i, studentDB2[i]);
	  }
	
	
	for(var i=1;i<=Object.keys(studentDB2).length;i++){
		if(i == sID){
 	        studentDB2[i][x]=y;
			
			       }   
				
	}   	   
	  console.log("New Database......");
	  for(var i=1;i<=Object.keys(studentDB2).length;i++){
		console.log("Students in studentDB2 :: ", i, studentDB2[i]);
	  }
	  
   }


//var sValue = 999999;
var sValue = "Shruti"
//var sValue = 30;
//studentDatabase(studentDB2,2,"MoNo",sValue);
studentDatabase(studentDB2,2,"Name",sValue);
//studentDatabase(studentDB2,3,"Age",sValue);




