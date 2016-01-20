var buttonModule=(function($){
    var posX,posY;
    function clickSaveBtn(){
        $("#save_btn").click(function(){
            $(".tooltip-fixed").css({
                "opacity":1
            })
            $(".tooltip-fixed .pic-cover").css({
                "transform":"scaleX(0)"
            })
            setTimeout(function(){
                $(".tooltip-fixed").css({
                    "opacity":0
                });
                $(".tooltip-fixed .pic-cover").css({
                    "transform":"scaleX(1)"
                })
            },2500)
        })
    }
    function clickAddCartBtn(){
        $("#add_cart_btn").click(function(){
            $(".production").animate({
                "left":$("#shopping_list").offset().left-$(window).scrollLeft(),
                "top":$("#shopping_list").offset().top-$(window).scrollTop(),
                "opacity":1
            },1500,function(){
                $(this).css({
                    "opacity":0,
                    "left":posX,
                    "top":posY
                })
                $(".right-side .cart-logo").css({
                    "-webkit-animation":"cart-shake 0.3s 1",
                    "-moz-animation":"cart-shake 0.3s 1",
                    "-ms-animation":"cart-shake 0.3s 1",
                    "-o-animation":"cart-shake 0.3s 1",
                    "animation":"cart-shake 0.3s 1"
                })
            })
        })
    }
    function mouseoverAddCartBtn(){
        $("#add_cart_btn").mouseover(function(){
            posY=$(this).offset().top-$(window).scrollTop()-$(this).outerHeight();
            posX=$(this).offset().left-$(window).scrollLeft()+$(this).outerWidth()/2;
            $(".production").css({
                "left":posX,
                "top":posY,
                "margin-left":-$(".production").outerWidth()/2
            })
        })
    }
    function cartAnimationEnd(){
        $(".right-side .cart-logo").on("webkitAnimationEnd animationend oAnimationEnd oanimationend",function(){
            $(this).css({
                "-webkit-animation":"",
                "-moz-animation":"",
                "-ms-animation":"",
                "-o-animation":"",
                "animation":""
            });
        })
    }
    function clickMeBtn(){
        $("#click_me_btn").click(function(){
            var me=$(this);
            me.find(".message-tip").css({
                "top":-me.find(".message-tip").outerHeight()-me.find(".message-tip .message-tip-arrow").outerHeight(),
                "left":(me.outerWidth()-me.find(".message-tip").outerWidth())/2,
                "opacity":1
            })
        })
    }


    return{
        clickSaveBtn:clickSaveBtn,
        clickAddCartBtn:clickAddCartBtn,
        mouseoverAddCartBtn:mouseoverAddCartBtn,
        cartAnimationEnd:cartAnimationEnd,
        clickMeBtn:clickMeBtn
    }

})(jQuery);



$(function(){
    buttonModule.clickSaveBtn();
    buttonModule.clickAddCartBtn();
    buttonModule.mouseoverAddCartBtn();
    buttonModule.cartAnimationEnd();
    buttonModule.clickMeBtn();
    $(".fa-close").click(function(e){
        $(this).parent().css({
            "opacity":0
        })
        e.stopPropagation();
    })

})