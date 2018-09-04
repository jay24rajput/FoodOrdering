function validateform()
{
	var fname=document.forms["mysignupform"]["first_name"].value;
	if(fname=="")
	{
		alert("Name field cannot be empty!");
	}
	if(/\d/.test(fname))
    {
        alert("Name cannot contain numbers");
    }


	var mname=document.forms["mysignupform"]["middle_name"].value;
	if(mname=="")
	{
		alert("Name field cannot be empty!");
	}
    if(/\d/.test(mname))
    {
        alert("Name cannot contain numbers");
    }

    var lname=document.forms["mysignupform"]["last_name"].value;
    if(/\d/.test(mname))
    {
        alert("Name cannot contain numbers");
    }

	var dob=document.forms["mysignupform"]["dob"].value;
    if(dob=="")
    {
        alert("Please enter your Date of birth");
    }
	var year=""
	for(var i=0;i<4;i++)
	{
		year=year+dob[i];
	}
	if(year<1930 || year>2014)
	{
		alert("Enter a valid age!");
	}


	var radioButton=document.getElementsByName("address_type");
	var isChecked=false;
	for(var i=0;i<radioButton.length;i++)
    {
        if(radioButton[i].checked)
        {
            isChecked=true;
            break;
        }
    }
    if(isChecked===false)
    {
        alert("Please select a dilevery address!!");
    }

    var address=document.forms["mysignupform"]["address"].value;
	if(address==="")
    {
        alert("Please enter an address!!");
    }

    var firstPassword=document.forms["mysignupform"]["user_password"].value;
	var secondPassword=document.forms["mysignupform"]["user_password_confirm"].value;
	if (firstPassword!==secondPassword)
    {
        alert("Passwords do not match!!!");
    }

    var email=document.forms["mysignupform"]["email_id"].value;
    if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mysignupform.email.value))
    {
        alert("Enter a email is in valid form");
    }

}