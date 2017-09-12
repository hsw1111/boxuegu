define(["jquery","template","bootstrap"],function($,template){
  $(function(){

    //获取讲师列表
    $.ajax({
      url:"/api/teacher",
      success:function(data){
        console.log(data);
        if(data.code == 200){
          $("#teacher_list_tbody").html(template("teacher_list_tpl",data))
        }
      }
    })

    //点击显示模态框
    $("#teacher_list_tbody").on("click",".search-btn",function(){

      var id = $(this).parent().data("id");
      $.ajax({
        url:"/api/teacher/view",
        data:{
          tc_id:id
        },
        success:function(data){
          console.log(data);
          $("#teacherModal").html(template("modal_tpl",data.result)).modal("show");
        }
      });
    })


  })
})
