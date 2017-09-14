define(["jquery","template","ultils","form","datepicker","datepickerCN","validate"],function($,template,ultils){
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
          //console.log(data);
          if(data.code == 200){
            data.result.title = "讲师编辑";
            data.result.btn = "保 存";
            data.result.url="/api/teacher/update"
            renderData(data.result);

          }
        }
      })

    }else{
      //添加讲师
      var obj = {
        title:"讲师添加",
        btn:"添 加",
        url:"/api/teacher/add"
      };
      renderData(obj);
    };

    //  //通过表单添加和编辑信息
    //$("#teacher_info").on("submit","form",function(){
    //  $(this).ajaxSubmit({
    //    success:function(data){
    //      console.log(data);
    //      if(data.code == 200){
    //        location.href = "/teacher/list";
    //      }
    //    }
    //  });
    //  return false;
    //});

    function renderData(data) {
      //渲染模板
      $("#teacher_info").html(template("teacher_add_tpl",data));

      //表单日期
      $("#tc_join_date").datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        language: "zh-CN"
      });

      //表单验证
      $("form").validate({
        sendForm: false,//表单验证成功是否自动提交
        onBlur: true,
        onChange:true,//日期表单项

        //各个表单项验证状态的提示信息
        description: {
          name: {
            required: "讲师名称不能为空"
          },
          password: {
            required: "密码不能为空",
            pattern: "必须是6-15位数字与字母组合"
          },
          date: {
            required: "请选择入职日期"
          }
        },
        eachValidField: function () {
          //只要有表单项被校验并且通过验证，就会调用
          this.parent().parent().addClass("has-success").removeClass("has-error");
        },
        eachInvalidField: function () {
          //只要有表单项被校验并且不通过验证，就会调用
          this.parent().parent().addClass("has-error").removeClass("has-success");
        },
        valid: function () {
          //整个表单通过验证

          //通过表单添加和编辑信息
          $(this).ajaxSubmit({
            success: function (data) {
              console.log(data);
              if (data.code == 200) {
                location.href = "/teacher/list";
              }
            }
          });
        }
      });
    }
  })
})

