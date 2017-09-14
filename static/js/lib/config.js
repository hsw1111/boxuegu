require.config({
  baseUrl: "/views/assets",
  paths: {
    jquery: "./jquery/jquery",
    cookie: "./jquery-cookie/jquery.cookie",
    template: "./artTemplate/template",
    bootstrap:"./bootstrap/js/bootstrap",
    ultils:"../static/js/lib/ultils",
    form:"./jquery-form/jquery.form",
    nprogress:"./nprogress/nprogress",
    datepicker:"./bootstrap-datepicker/js/bootstrap-datepicker.min",
    datepickerCN:"./bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
    validate:"./jquery-validate/jquery-validate.min",
    ckeditor:"./ckeditor/ckeditor"
  },
  shim:{
    bootstrap:{
      deps:["jquery"]
    },
    datepickerCN:{
      deps:["jquery"]
    },
    validate:{
      deps:["jquery"]
    },
    ckeditor:{
      exports:"CKEDITOR"
    }
  }

})