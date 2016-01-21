var zoomView=(function($){
    var CAN_SHOW_LENGTH=5;
    var curPos=0;
    var picListLength=$("#zoom_view_picture_list li").length;
    var LEFT_LIMIT_POSITION=picListLength-CAN_SHOW_LENGTH;
    var SELECTOR_WIDTH=200;
    var SELECTOR_HEIGHT=200;
    function clickArrow(){
        $(".zoom-view-main .picture-list .arrow-left").click(function(){
            if(!$(this).hasClass("active")){
                return;
            }
            curPos=curPos+1;
            if(curPos==LEFT_LIMIT_POSITION){
                $(this).removeClass("active");
            }
            if(curPos==1){
                $(".zoom-view-main .picture-list").find(".arrow-right").addClass("active");
            }
            _slide();
        })
        $(".zoom-view-main .picture-list .arrow-right").click(function(){
            if(!$(this).hasClass("active")){
                return;
            }
            curPos=curPos-1;
            if(curPos==0){
                $(this).removeClass("active");
            }
            if(curPos==1){
                $(".zoom-view-main .picture-list").find(".arrow-left").addClass("active");
            }
            _slide();
        })
    }
    function _slide(){
        $("#zoom_view_picture_list").css({
            "transform":"translateX(-"+$("#zoom_view_picture_list li").eq(curPos).position().left+"px)"
        })
    }
    function initPictureList(){
        //初始化计算图片列表宽度
        $("#zoom_view_picture_list").css({
            "width":$("#zoom_view_picture_list li").outerWidth()*picListLength
        })
        if(picListLength>CAN_SHOW_LENGTH){
            $(".zoom-view-main .picture-list .arrow-left").addClass("active");
        }
    }
    function pictureMouseOver(){
        $(".zoom-view-main .picture-list ul li img").mouseover(function(){
            $(".zoom-view-main .view-box img").attr("src","css/zoom-view/images/"+($(this).parent().index()+1)+"_md.jpg");
            $(".zoom-view-main .zoom-box img").attr("src","css/zoom-view/images/"+($(this).parent().index()+1)+"_md.jpg");
            $(this).addClass("active").parent().siblings().find("img").removeClass("active");
        })
    }
    function bindViewBoxEvent(){
        $(".zoom-view-main .view-box .view-box-selector").css({
            "width":SELECTOR_WIDTH,
            "height":SELECTOR_HEIGHT
        })
        $(".zoom-view-main .zoom-box img").css({
            "width":$(".zoom-view-main .view-box").innerWidth()*$(".zoom-view-main .zoom-box").innerWidth()/SELECTOR_WIDTH,
            "height":$(".zoom-view-main .view-box").innerHeight()*$(".zoom-view-main .zoom-box").innerHeight()/SELECTOR_HEIGHT
        })

        $(".zoom-view-main .view-box").bind({
            mouseover:function(){
                $(".zoom-view-main .view-box .view-box-selector").show();
                $(".zoom-view-main .zoom-box").show();
            },
            mousemove:function(e){
                var mouseX=e.pageX-$(this).offset().left;
                var mouseY=e.pageY-$(this).offset().top;
                var selectorX;
                var selectorY;
                if(mouseX>=SELECTOR_WIDTH/2&&mouseX<=$(this).innerWidth()-SELECTOR_WIDTH/2){
                    selectorX=mouseX-SELECTOR_WIDTH/2;
                }else if(mouseX<SELECTOR_WIDTH/2){
                    selectorX=0;
                }else if(mouseX>$(this).innerWidth()-SELECTOR_WIDTH/2){
                    selectorX=$(this).innerWidth()-SELECTOR_WIDTH;
                }
                if(mouseY>=SELECTOR_HEIGHT/2&&mouseY<=$(this).innerHeight()-SELECTOR_HEIGHT/2){
                    selectorY=mouseY-SELECTOR_HEIGHT/2;
                }else if(mouseY<SELECTOR_HEIGHT/2){
                    selectorY=0;
                }else if(mouseY>$(this).innerHeight()-SELECTOR_HEIGHT/2){
                    selectorY=$(this).innerHeight()-SELECTOR_HEIGHT;
                }
                $(".zoom-view-main .view-box .view-box-selector").css({
                    "left":selectorX,
                    "top":selectorY
                })
                var left=(selectorX+SELECTOR_WIDTH)*$(".zoom-view-main .zoom-box img").innerWidth()/$(".zoom-view-main .view-box").innerWidth()-$(".zoom-view-main .zoom-box").innerWidth();
                var top=(selectorY+SELECTOR_HEIGHT)*$(".zoom-view-main .zoom-box img").innerHeight()/$(".zoom-view-main .view-box").innerHeight()-$(".zoom-view-main .zoom-box").innerHeight();
                $(".zoom-view-main .zoom-box img").css({
                    "left":-left,
                    "top":-top
                })
            },
            mouseout:function(){
                $(".zoom-view-main .view-box .view-box-selector").hide();
                $(".zoom-view-main .zoom-box").hide();
            }
        })
    }
    return{
        clickArrow:clickArrow,
        initPictureList:initPictureList,
        pictureMouseOver:pictureMouseOver,
        bindViewBoxEvent:bindViewBoxEvent
    }




})(jQuery);

$(function(){
    zoomView.initPictureList();
    zoomView.clickArrow();
    zoomView.pictureMouseOver();
    zoomView.bindViewBoxEvent();

})