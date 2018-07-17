
var obj={};

console.log("format:Update student set name= 'Shruti','MoNo':9999,'Age':25 where id 2");
var updateStudent = function(obj,id) {
	query="Update student set";
	for(var key in obj){
		query += key+"="+obj[key]+",";
	}
	
		query=query.slice(0,-1)  //to remove last index of string
		query +=" where id=" +id +";";
	    console.log(query);
}
updateStudent({Name:"shruti","MoNo":9999,"Age":25},2);

//o/p: Update student setName=shruti,MoNo=9999,Age=25 where id=2;

/////////////////////////////////////////////////////////////////////////////////////////
console.log("Format:Update student set name= 'Shruti' where id in(1,2,3)");
 var updateStudent1 = function(obj,id) {
	query="Update student set";
	  for(var i in obj){
			query += " "+ i+"='"+obj[i]+"',";
		}
		
		
		query=query.slice(0,-1)
		query +=" where id in("
		for(var i of id){
			query += i + ","
		}
	
		query = query.slice(0,-1)+");";
		
	    console.log(query);
}

var ids=[1,2,3];
updateStudent1({Name:"shruti",Age:20,MoNo:999},ids);

//o/p:Update student set Name= 'shruti', Age= '20', MoNo= '999' where id in  (1,2,3);

///////////////////////////////////////////////////////////////////////////////////////////////

console.log("insert into student(id,name,age,phno)values(1,'abc',1,1) ...here (id,name,age,phno) is also statically generated ");
var insertStudentStatic = function(obj,id) {
	query="insert into student(name,age,phno)values (";
	for(var key in obj){
		query += "'" +obj[key]+ "'"+ ",";
	}
	
		query=query.slice(0,-1)
		query +=" );" 
	    console.log(query);
}
insertStudentStatic({Name:"shruti","Age":25,"MoNo":9999},2);
//o/p:insert into student(name,age,phno)values ('shruti','25','9999' );

console.log("insert into student(id,name,age,phno)values(1,'abc',1,1)....here (id,name,age,phno) is also dynamically generated ");
var insertStudentDynamic = function(obj) {
	query="insert into student ("
	for(key in obj){
		query += key +",";
	}
	query=query.slice(0,-1)
	query += ")values (";
	for(var key in obj){
		query += "'" +obj[key]+ "'"+ ",";
	}
	
		query=query.slice(0,-1)
		query +=" );" 
	    console.log(query);
}
insertStudentDynamic({ID:1,Name:"shruti","Age":25,"MoNo":9999});

//o/p:insert into student (ID,Name,Age,MoNo)values ('1','shruti','25','9999' );

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("Multiple inserts  new.......")
var multipleInsertStudentDynamic = function(count) {
	 
	for(i=1;i<=count;i++){ 
	 insertStudentDynamic({Id:i,Name:"Name_"+i ,Age:i, MoNo:i });
	}
}

multipleInsertStudentDynamic(10);
/* o/p:

Multiple inserts  new.......
insert into student (Id,Name,Age,MoNo)values ('1','Name_1','1','1' );
insert into student (Id,Name,Age,MoNo)values ('2','Name_2','2','2' );
insert into student (Id,Name,Age,MoNo)values ('3','Name_3','3','3' );
insert into student (Id,Name,Age,MoNo)values ('4','Name_4','4','4' );
insert into student (Id,Name,Age,MoNo)values ('5','Name_5','5','5' );
insert into student (Id,Name,Age,MoNo)values ('6','Name_6','6','6' );
insert into student (Id,Name,Age,MoNo)values ('7','Name_7','7','7' );
insert into student (Id,Name,Age,MoNo)values ('8','Name_8','8','8' );
insert into student (Id,Name,Age,MoNo)values ('9','Name_9','9','9' );
insert into student (Id,Name,Age,MoNo)values ('10','Name_10','10','10' )*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Format:insert into student(name,age,phno)values('abc',1,1);" );
var insertStudent = function(obj) {
 
	query="insert into student("
	for(var key in obj){
		query += key + ",";
	}
	  query=query.slice(0,-1)
	
	query +=")values (";
	for(var key in obj){
		query += "'" +obj[key]+ "'"+ ",";
	}

		query=query.slice(0,-1)+");"
	    console.log(query);
		
 
}


insertStudent({Name:"shruti","Age":25,"MoNo":9999});

//o/p:insert into student(Name,Age,MoNo)values ('shruti','25','9999' ) where id in (1,2,3);
//////////////////////////////////////////////////////////////////////////


var selectStudent=function(obj){
	query="select * from student where ";
	for(key in obj){
	query += " "+key +"='" + obj[key]+ "'and" ;
	}
	 query=query.slice(0,-3)+";";
     console.log(query);	
}
selectStudent({Name: "Abc",Age:20 ,MoNo:999});

//o/p: select * from student where  Name='Abc'and Age='20'and MoNo='999';
//////////////////////////////////////////////////////////////////////////

var gnerateString = function(obj){
	var str = " ";
	for(var key in obj){
		str += key+"="+obj[key]+",";
	}
	str=str.slice(0,-1);
    return str;
}

var s1=gnerateString({Name: "Abc",Age:20 ,MoNo:999});
var s2=gnerateString({Name: "Abc",Age:20});
var s3=gnerateString({Name: "Abc"});

console.log(s1);
console.log(s2);
console.log(s3);

/*"o/P:   Name=Abc,Age=20,MoNo=999
          Name=Abc,Age=20
          Name=Abc*/
		 
		 
/////////////////////////////////////////	
	 
var gnerateStringForkey = function(obj){
	var str = "(";
	for(var key in obj){
		str += key+ ",";
	}
	str=str.slice(0,-1);
    str +=")";
	
	return str;
}

var s1=gnerateStringForkey({Name: "Abc",Age:20 ,MoNo:999});
var s2=gnerateStringForkey({Name: "Abc",Age:20});
var s3=gnerateStringForkey({Name: "Abc"});

console.log(s1);
console.log(s2);
console.log(s3);

/*o/p:
(Name,Age,MoNo)
(Name,Age)
(Name)*/
//////////////////////////////////////////////////////////////////////

var gnerateStringForValue = function(obj){
	var str = "(";
	for(var key in obj){
		str += obj[key]+ ",";
	}
	str=str.slice(0,-1);
    str +=")";
	
	return str;
}

var s1=gnerateStringForValue({Name: "Abc",Age:20 ,MoNo:999});
var s2=gnerateStringForValue({Name: "Abc",Age:20});
var s3=gnerateStringForValue({Name: "Abc"});

console.log(s1);
console.log(s2);
console.log(s3);

/* o/p:
(Abc,20,999)
(Abc,20)
(Abc)*/

//////////////////////////////////////////////////////////////
console.log("insertUsingFunctionCalling:insert into student(Name,Age,MoNo)values ('shruti','25','9999' );");
var insertUsingFunctionCalling=function(obj,ids){
	query="insert into student"+gnerateStringForkey(obj) +"values" + gnerateStringForValue(obj)+";";
	console.log(query);
}
insertUsingFunctionCalling({Name: "Abc",Age:20 ,MoNo:999});

//o/p: insert into student(Name,Age,MoNo)values(Abc,20,999);
/////////////////////////////////////////////////////////////////////////
