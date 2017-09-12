define(["jquery","cookie"],function($){
  $(function(){
    $("form").submit(function(){
      var tc_name = $("#tc_name").val();
      var tc_pass = $("#tc_pass").val();

      if(tc_name == ""){
        alert("请输入用户名");
        return false;
      };
      if(tc_pass == ""){
        alert("请输入密码");
        return false;
      };
      $.ajax({
        url:"/api/login",
        type:"post",
        data:{
          tc_name:tc_name,
          tc_pass:tc_pass
        },
        success:function(data){
          console.log(data);
          if(data.code == 200){
            $.cookie("userinfo",JSON.stringify(data.result),{expires:10,path:"/"});
            window.location.href = "/";

          }

        }

      })
//
      return false;
    })


  })
})
