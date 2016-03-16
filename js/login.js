function checkIsNull(){
	if ($("[name='username']").val()=="" || $("[name='password']").val()==""){
			alert("请确认信息的完整性!");
<<<<<<< HEAD
			return false:
		} else {
			return true;
=======
		} else {
			$("[name='loginform']").submit();
>>>>>>> origin/master
		}
}
$(function(){
	$("[name='username']").blur(function(){
		if ($(this).val()==""){
			alert("用户名不能为空");
			$(this).focus().select();
		}
	});
	$("[name='password']").blur(function(){
		if ($(this).val()==""){
			alert("密码不能为空!");
			$(this).focus().select();
		}
	});
<<<<<<< HEAD
=======
	$("[name='submit']").click(function(){
		checkIsNull();
	});
>>>>>>> origin/master
});