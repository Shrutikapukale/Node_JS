//WAP to update the student DB(send the key and value as argument which is to be update. )

console.log("Student database.................");
var s1={"ID":1,"Name":"ABC_1","Age":1,"MoNo":1};
var s2={"ID":2,"Name":"ABC_2","Age":2,"MoNo":22};
var s3={"ID":3,"Name":"ABC_3","Age":3,"MoNo":333};
var s4={"ID":4,"Name":"ABC_4","Age":4,"MoNo":4444};

studentDB2={};
studentDB2[1]=s1;
studentDB2[2]=s2;
studentDB2[3]=s3;
studentDB2[4]=s4;


var studentDatabase = function(studentDB2,sID,x,y){
	console.log("Old Database......");
	for(var i=1;i<=Object.keys(studentDB2).length;i++){
		if(i == sID){
			switch(x){
				case "ID":studentDB2[i].ID = sValue;break;
				case "Name":studentDB2[i].Name = sValue;break
				case "Age":studentDB2[i].Age = sValue;break
				case "MoNo":studentDB2[i].MoNo = sValue;break;
				Default:console.log("Error")
				}	
	                    }
		       }

      console.log("New Database......");
      Object.keys(studentDB2).forEach(
       function ([key]){
		console.log("Students in studentDB2 :: ", key, studentDB2[key]);
	     }
      )
}
		



var sValue=8888;
//var sValue="shruti";
//var sValue=25;
studentDatabase(studentDB2,3,"MoNo",sValue);
//studentDatabase(studentDB2,2,"Name",sValue);
//studentDatabase(studentDB2,2,"Age",sValue);
