define(function(){
    return {
        //��ȡurl��ַ�еĲ���
        getUrlParams:function(){
        var url = location.search;
        url = url.slice(1).split("&");
        var obj = {};
        for (var i = 0; i < url.length; i++) {
          var arr = url[i].split("=");
          obj[arr[0]]=arr[1]
        }
        return obj;
      }
    }

})
