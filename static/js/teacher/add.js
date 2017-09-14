define(["jquery","template","ultils"],function($,template,ultils){
  $(function(){
    var id = ultils.getUrlParams().id;
    if(id){
      //编辑讲师
      $.ajax({
        url:"/api/teacher/edit",
        data:{
          tc_id:id
        },
        success:function(data){
          console.log(data);
          data.result.title = "讲师编辑";
          data.result.btn = "保 存";
          data.result.url="/api/teacher/update"
          $("#teacher_info").html(template("teacher_add_tpl",data.result));
        }
      })

      $("#teacher_info").on("click","#teacher_add_btn",function(){
        $.ajax({
          url:"/api/teacher/update",
          type:"post",
          data:$("form").serialize(),
          success:function(data){
            //console.log(data);
            if(data.code==200){
              alert("讲师编辑成功！");
              location.href="/teacher/list"
            }
          }

        })
        return false;
      })
    }else{
      //添加讲师
      var obj = {
        title:"讲师添加",
        btn:"添 加",
        url:"/api/teacher/add"
      };
      $("#teacher_info").html(template("teacher_add_tpl",obj));


      $("#teacher_add_btn").click(function(){

        $.ajax({
          url:"/api/teacher/add",
          type:"post",
          data:$("form").serialize(),
          success:function(data){
            //console.log(data);
            if(data.code==200){
              alert("讲师添加成功！");
              location.href="/teacher/list"
            }
          }

        });
        return false;
      })

    }


  })
})

