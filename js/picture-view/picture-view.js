var pictureView=(function($){
    var curIndex=0;
    var picLength=$(".picture-show-wrapper").find(".figure").length;
    var interval;
    function mouseOverPicture(){
        $(".picture-view-main .picture-list ul li").mouseover(function(){
            curIndex=$(this).index();
            _slide($(this));
            clearInterval(interval);
        });
    }
    function mouseOutPicture(){
        $(".picture-view-main .picture-list ul").mouseout(function(){
            autoSlide();
        });
    }
    function autoSlide(){
        interval=setInterval(function(){
            var tempIndex=curIndex+1;
            curIndex=tempIndex>=picLength?0:tempIndex;
            _slide($(".picture-view-main .picture-list ul li").eq(curIndex));
        },3000);
    }
    function _slide(obj){
        obj.find("div").addClass("mouse-over");
        obj.find("i").addClass("arrow");
        obj.siblings().find("div").removeClass("mouse-over");
        obj.siblings().find("i").removeClass("arrow");
        var pos=$(".picture-show-wrapper").find(".figure").eq(curIndex).position();
        $(".picture-show-wrapper").css({
            "transform":"translateY(-"+pos.top+"px)"
        })
    }
    return{
        mouseOverPicture:mouseOverPicture,
        autoSlide:autoSlide,
        mouseOutPicture:mouseOutPicture
    }
})(jQuery);

$(function(){
    pictureView.mouseOverPicture();
    pictureView.autoSlide();
    pictureView.mouseOutPicture();
})