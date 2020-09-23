	
	var check= ()=>{
	 
		var phone = document.myform.phone.value;
		var username = document.myform.username.value.trim();
		var password = document.myform.password.value;
		var nameList=['Gaurav','Priya','Siddhartha','Shuvam','Amisha'];
		if(username ==""||(username.length<5)||(username.length>15)){
			alert("Invalid Name");
			document.myform.username.focus();
		}
		else if (!password.match(/[1-9]/)){
			alert("Password must have a number");
			document.myform.password.value="";
			document.myform.password.focus();
		}
		else if (!password.match(/[A-Z]/)){
			alert("Password must have an uppercase");
			document.myform.password.value="";
			document.myform.password.focus();
		}
		else if (!password.match(/[a-z]/)){
			alert("Password must have a lowercase");
			document.myform.password.value="";
			document.myform.password.focus();
			}
		else if (!password.match(/[!@#$%^&*]/)){
			alert("Password must have a special character");
			document.myform.password.value="";
			document.myform.password.focus();
		}
		else if (phone ==""||isNaN(phone)||phone.length!=10){
			alert("Enter phone number");
			document.myform.phone.value="";
			document.myform.phone.focus();
		}		
		else if(nameList.indexOf(username) !== -1 )
		{
			alert('user name exists');
			document.myform.username.focus();
		}
		else{
			alert("Welcome");
			document.myform.submit();
		}


		

			}	