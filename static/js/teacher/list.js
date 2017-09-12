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

    //点击查看显示模态框
    $("#teacher_list_tbody").on("click",".search-btn",function(){

      var id = $(this).parent().data("id");
      $.ajax({
        url:"/api/teacher/view",
        data:{
          tc_id:id
        },
        success:function(data){
          console.log(data);
          if(data.code==200){

            $("#teacherModal").html(template("modal_tpl",data.result)).modal("show");
          }
        }
      });
    })

    //点击注销或启用
    $("#teacher_list_tbody").on("click",".change-btn",function(){

      var id = $(this).parent().data("id");
      var status = $(this).data("status");
      var that = $(this);
      $.ajax({
        url:"/api/teacher/handle",
        type:"post",
        data:{
          tc_id:id,
          tc_status:status
        },
        success:function(data){
          console.log(data);
          if(data.code==200){
            if(data.result.tc_status == 1){
              that.addClass("btn-success").removeClass("btn-warning").text("启 用");
            }else{
              that.addClass("btn-warning").removeClass("btn-success").text("注 销");
            }
            that.data("status",data.result.tc_status);
          }

        }
      });
    })


  })
})
