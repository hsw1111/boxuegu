define(["jquery","ckeditor","datepicker","datepickerCN","validate"],function($,CKEDITOR){
  //$(function(){

    //富文本插件
    CKEDITOR.replace("tc_textarea",  {
      toolbarGroups : [
        { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
        // { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
        { name: 'links' },
        // { name: 'insert' },
        // { name: 'forms' },
        { name: 'tools' },
        // { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'others' },
        // '/',
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
        { name: 'styles' },
        { name: 'colors' },
        { name: 'about' }
      ]
    });

    //表单日期
    $("#tc_birthday,#tc_join_date").datepicker({
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
          required: "昵称不能为空"
        },
        birthday:{
          required:"请选择出生日期"
        },
        password: {
          required: "密码不能为空",
          pattern: "必须是6-15位数字与字母组合"
        },
        date: {
          required: "请选择入职日期"
        },
        phone:{
          required: "手机号码不能为空",
          pattern: "必须是11位数字组成的有效手机号"
        },
        email:{
          required: "邮箱不能为空",
          pattern: "请输入有效的邮箱账号"
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


  //})
})
