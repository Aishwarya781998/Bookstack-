function checkForm()
{
	if(forgotPassword.password.value!=forgotPassword.confirmPassword.value)
	{
		alert("Passwords don't match")
		forgotPassword.Password.focus();
		return false;
	}
	return true;
};

function checkStatus(arg)
{
	if(arg==="Invalid Details")
		alert(arg);
}