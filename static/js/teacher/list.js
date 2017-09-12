define(["jquery","template"],function($,template){
  $(function(){

    $.ajax({
      url:"/api/teacher",
      success:function(data){
        console.log(data);
        if(data.code == 200){
          $("#teacher_list_tbody").html(template("teacher_list_tpl",data))
        }
      }
    })




  })
})
