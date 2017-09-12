define(["jquery", "template", "cookie"], function($, template){
	$(function(){

		//�ж��Ƿ��¼
		if(location.pathname != "/dashboard/login"){
			if(!$.cookie("PHPSESSID")){
				location.href = "/dashboard/login";
			}
			var userinfo = JSON.parse($.cookie("userinfo"));
			$("#profile").html(template("profile_tpl", userinfo));
		};


		//������ʾ
		$("ul>li>ul").parent().click(function(){
			$(this).children("ul").stop().slideToggle();
		});
		//��������
		$(".list-unstyled a").each(function(i,e){
			if($(e).attr("href")==location.pathname){
				$(e).addClass("active");
			}
		})


		//�˳���¼
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