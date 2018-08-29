function validateform()
{
	var fname=document.forms["mysignupform"]["first_name"].value;
	if(fname=="")
	{
		alert("Name field cannot be empty!");
	}

	var mname=document.forms["mysignupform"]["middle_name"].value;
	if(mname=="")
	{
		alert("Name field cannot be empty!");
	}

	var dob=document.forms["mysignupform"]["dob"].value;
	var year=""
	for(var i=0;i<4;i++)
	{
		year=year+dob[i];
	}
	if(year<1930 || year>2014)
	{
		alert("Enter a valid age!");
	}

	email=document.forms["mysignupform"]["email_id"].value;
	if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mysignupform.email.value))
	{
		alert("Enter a email is in valid form");
	}

	if(!document.getElementById("home").checked && !document.getElementById("work").checked)
	{
		alert("Enter a dilivery location type!");
	}
}