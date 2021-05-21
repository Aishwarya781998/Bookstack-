function checkForm()
{
	if(signUpForm.password.value!=signUpForm.confirm_password.value)
	{
		window.alert("Passwords don't match")
		forgotPassword.Password.focus();
		return false;
	}
	return true;
};

function checkStatus(arg)
{
	if(arg==="Email already exists")
		window.alert(arg);
}