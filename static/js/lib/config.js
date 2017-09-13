require.config({
  baseUrl: "/views/assets",
  paths: {
    jquery: "./jquery/jquery",
    cookie: "./jquery-cookie/jquery.cookie",
    template: "./artTemplate/template",
    bootstrap:"./bootstrap/js/bootstrap",
    ultils:"../static/js/lib/ultils"
  },
  shim:{
    bootstrap:{
      deps:["jquery"]
    }
  }

})