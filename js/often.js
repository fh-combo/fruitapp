/**
 * Created by Administrator on 2016/4/24.
 */
//全局淡入淡出-start
(function($){
    $.extend($.fn, {
        fadeIn: function(ms){
            if(typeof(ms) === 'undefined'){
                ms = 250;
            }
            $(this).css({
                display: 'block',
                opacity:0
            }).animate({
                opacity:.5
            }, ms);
            return this;
        },
        fadeOut: function(ms){
            if(typeof(ms) === 'undefined'){
                ms = 250;
            }
            $(this).css({
                display: 'none',
                opacity:0
            }).animate({
                opacity:.5
            }, ms);
            return this;
        }
    })
})(Zepto)
//end
//_tap = touchend in document ? "touchend":"click";
/*客服，分享
    :淡入淡出控制
*/
//遮罩弹窗出现 固定后面内容不滚动
var css='<style id="css">html,body {position:absolute;width:100%;height:100%;top:0;left:0;overflow:hidden}</style>';

$("#call-btn,#phone-btn,#share-btn").on("tap",function(e){
   $(".model-full").fadeIn();
    $(".ctm-container,.close-model").show();
    $('head').append(css);

});
$("#model-full,#close-model").on("tap",function(e){
    $(".model-full").fadeOut();
    $(".ctm-container,.close-model").hide();
    $('#css').remove();
});



/*end*/


    function orderLists(){
    $.ajax({
        type:"POST",
        url:"order-lists.htm",
        data: "" ,
        success:function(msg){
            $("#order-main").html(msg);
        },
        error:function(XMLHttpRequest, textStatus, thrownError){
            alert("异步发生错误！");
        }
    })
    }
    orderLists();
/*已取消*/
function orderUndo(){
$.ajax({
    type:"POST",
    url:"order-undo.htm",
    data: "" ,
    success:function(msg){
        $("#order-main").html(msg);
    },
    error:function(XMLHttpRequest, textStatus, thrownError){
        alert("异步发生错误！");
    }
})
}
/*end*/
/*已完成初始页面*/
function orderFinish(){
$.ajax({
    type:"POST",
    url:"order-finish.htm",
    data: "" ,
    success:function(msg){
        $("#order-main").html(msg);
    },
    error:function(XMLHttpRequest, textStatus, thrownError){
        alert("异步发生错误！");
    }
})
}
/*end*/

/*未完成*/
function orderUndone(){
$.ajax({
    type:"POST",
    url:"order-undone.htm",
    data: "" ,
    success:function(msg){
        $("#order-main").html(msg);
    },
    error:function(XMLHttpRequest, textStatus, thrownError){
        alert("异步发生错误！");
    }
})
}
/*end*/
/*订单分类异步加载页面*/
var hk = $('#status-load > div');
hk.each(function(i){
    hk.eq(i).on('tap',function(){
        $(this).addClass("load-chk").siblings().removeClass("load-chk");
        if($(this).index()==0){
            orderLists();
        }else if($(this).index()==1){
            orderUndone();
        }else if($(this).index()==2){
            orderUndo();
        }
    })
});
/*
end*/

//售后-进行中
function saleLoad(){
    $.ajax({
        type:"POST",
        url:"sale-load.htm",
        data: "" ,
        success:function(msg){
            $("#news-content").html(msg);
        },
        error:function(XMLHttpRequest, textStatus, thrownError){
            alert("异步发生错误！");
        }
    })
}
saleLoad();

//售后-已完成
function saleFinish(){
    $.ajax({
        type:"POST",
        url:"sale-finish.htm",
        data: "" ,
        success:function(msg){
            $("#news-content").html(msg);
        },
        error:function(XMLHttpRequest, textStatus, thrownError){
            alert("异步发生错误！");
        }
    })
}

/*
售后分类异步加载页面
 @example:
    控制：status-sale
    内容：news-content
    文件：sale-load.htm sale-finish.htm
*/
var mk = $('#status-sale > div');
mk.each(function(i){
    mk.eq(i).on('tap',function(){
        $(this).addClass("load-chk").siblings().removeClass("load-chk");
        if($(this).index()==0){
            saleLoad();
        }else if($(this).index()==1){
            saleFinish();
        }
    })
});
/*end*/

//计算文档的可见高度
function windowHeight() {
    var de = document.documentElement;
    return self.innerHeight||(de && de.clientHeight)||document.body.clientHeight;
}
windowHeight();
//window.onresize是窗口改变大小的时候，因为窗口改变大小，文档的可见高度或宽度会变化。
window.onload=window.onresize=function(){
    var wh=windowHeight();
    document.getElementById("model-full").style.height
        = (wh-document.getElementById("footer").offsetHeight)+"px";
    document.getElementById("main").style.height
        = (wh-document.getElementById("footer").offsetHeight)+"px";
    document.getElementById("ctm-container-fresh").style.bottom
        =  (document.getElementById("footer").offsetHeight)+"px";
}

