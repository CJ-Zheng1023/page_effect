var zoomView=(function($){

})(jQuery);

$(function(){
    //初始化计算图片列表宽度
    $("#zoom_view_picture_list").css({
        "width":$("#zoom_view_picture_list li").outerWidth()*$("#zoom_view_picture_list li").length
    })
    $(".zoom-view-main .picture-list .arrow").click(function(){
        alert(123)
    })
    $("#zoom_view_picture_list").click(function(){
        alert(222)
    })

})