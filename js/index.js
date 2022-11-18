$(document).ready(function(){
    $(window).scroll(function(e) { // 스크롤 이벤트가 발생하면 실행할 함수 정의
        if ($(this).scrollTop() >= 70) { // 750px 초과 스크롤하면 
            $('#top_wrap').css({position:"fixed", zIndex:"9999", boxShadow:"3px 3px 3px #ccc"});
            // $('.menu_two').show();
        } else { // 750px 만틈 스크롤한 게 아니면
            $('#top_wrap').css({position:"static", boxShadow:""});
        }
    });
});

function sliding(){
    $("#main_img").delay(1000).animate({marginLeft:"-1800px"},1000,function(){
        $("#main_img a:first").appendTo("#main_img");
        $(this).css("margin-left","-600px");
    });
}
setInterval("sliding()",1000);