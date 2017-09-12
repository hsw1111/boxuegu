define(["jquery", "template", "cookie"], function($, template){
	$(function(){

		//ÅÐ¶ÏÊÇ·ñµÇÂ¼
		if(location.pathname != "/dashboard/login"){
			if(!$.cookie("PHPSESSID")){
				location.href = "/dashboard/login";
			}
			var userinfo = JSON.parse($.cookie("userinfo"));
			$("#profile").html(template("profile_tpl", userinfo));
		};


		//µ¼º½ÏÔÊ¾
		$("ul>li>ul").parent().click(function(){
			$(this).children("ul").stop().slideToggle();
		});
		//µ¼º½¸ßÁÁ
		$(".list-unstyled a").each(function(i,e){
			if($(e).attr("href")==location.pathname){
				$(e).addClass("active");
			}
		})


		//ÍË³öµÇÂ¼
		$("#logout-btn").click(function(){
			$.ajax({
				url:"/api/logout",
				type:"post",
				success:function(data){
					//console.log(data);
					if(data.code==200){
						alert(data.msg);
						location.href = "/dashboard/login";
					}
				}
			})
		})



	})
})