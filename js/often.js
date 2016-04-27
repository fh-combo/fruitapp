/**
 * Created by Administrator on 2016/4/24.
 */
//ȫ�ֵ��뵭��-start
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
/*�ͷ�������
    :���뵭������
*/
//���ֵ������� �̶��������ݲ�����
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
            alert("�첽��������");
        }
    })
    }
    orderLists();
/*��ȡ��*/
function orderUndo(){
$.ajax({
    type:"POST",
    url:"order-undo.htm",
    data: "" ,
    success:function(msg){
        $("#order-main").html(msg);
    },
    error:function(XMLHttpRequest, textStatus, thrownError){
        alert("�첽��������");
    }
})
}
/*end*/
/*����ɳ�ʼҳ��*/
function orderFinish(){
$.ajax({
    type:"POST",
    url:"order-finish.htm",
    data: "" ,
    success:function(msg){
        $("#order-main").html(msg);
    },
    error:function(XMLHttpRequest, textStatus, thrownError){
        alert("�첽��������");
    }
})
}
/*end*/

/*δ���*/
function orderUndone(){
$.ajax({
    type:"POST",
    url:"order-undone.htm",
    data: "" ,
    success:function(msg){
        $("#order-main").html(msg);
    },
    error:function(XMLHttpRequest, textStatus, thrownError){
        alert("�첽��������");
    }
})
}
/*end*/
/*���������첽����ҳ��*/
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

//�ۺ�-������
function saleLoad(){
    $.ajax({
        type:"POST",
        url:"sale-load.htm",
        data: "" ,
        success:function(msg){
            $("#news-content").html(msg);
        },
        error:function(XMLHttpRequest, textStatus, thrownError){
            alert("�첽��������");
        }
    })
}
saleLoad();

//�ۺ�-�����
function saleFinish(){
    $.ajax({
        type:"POST",
        url:"sale-finish.htm",
        data: "" ,
        success:function(msg){
            $("#news-content").html(msg);
        },
        error:function(XMLHttpRequest, textStatus, thrownError){
            alert("�첽��������");
        }
    })
}

/*
�ۺ�����첽����ҳ��
 @example:
    ���ƣ�status-sale
    ���ݣ�news-content
    �ļ���sale-load.htm sale-finish.htm
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

//�����ĵ��Ŀɼ��߶�
function windowHeight() {
    var de = document.documentElement;
    return self.innerHeight||(de && de.clientHeight)||document.body.clientHeight;
}
windowHeight();
//window.onresize�Ǵ��ڸı��С��ʱ����Ϊ���ڸı��С���ĵ��Ŀɼ��߶Ȼ��Ȼ�仯��
window.onload=window.onresize=function(){
    var wh=windowHeight();
    document.getElementById("model-full").style.height
        = (wh-document.getElementById("footer").offsetHeight)+"px";
    document.getElementById("main").style.height
        = (wh-document.getElementById("footer").offsetHeight)+"px";
    document.getElementById("ctm-container-fresh").style.bottom
        =  (document.getElementById("footer").offsetHeight)+"px";
}

