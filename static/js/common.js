define(["jquery", "template","nprogress", "cookie"], function($, template,Nprogress){
	Nprogress.start();
	$(function(){
		Nprogress.done();
		//判断是否登录
		if(location.pathname != "/dashboard/login"){
			if(!$.cookie("PHPSESSID")){
				location.href = "/dashboard/login";
			}
			var userinfo = JSON.parse($.cookie("userinfo"));
			$("#profile").html(template("profile_tpl", userinfo));
		};


		//点击显示导航分类
		$("ul>li>ul").parent().click(function(){
			$(this).children("ul").stop().slideToggle();
		});
		//点击高亮
		$(".list-unstyled a").each(function(i,e){
			if($(e).attr("href")==location.pathname){
				$(e).addClass("active");
			}
		})


		//退出登录
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

		//进度条
		$(document).ajaxStart(function(){
			Nprogress.start();
		});

		$(document).ajaxStop(function(){
			Nprogress.done();
		});

	})
})