$(function(){
    //导航栏地区选择（北京
    $('.ct').mouseover(function(){
        $('.ct1').stop(true,false).slideDown()
    }).mouseleave(function(){
        $('.ct1').stop(true,false).slideUp()
    })

    
    $('.ct1 li').click(function(){
        var ct = $(this).text()
        $('#ct').html(ct)
        $('.ct1').stop(true,false).hide()
       
        return false
    })


    $('.ct1 li').mouseover(function(){
        $(this).css({
            'backgroundColor' : 'rgba(0, 0, 0, .1)'
        })
        $(this).children('a').css({
            'color':'red'
        })
    }).mouseleave(function(){
        $(this).css({
            'backgroundColor' : ''
        })
        $(this).children('a').css({
            'color':''
        })
    })


    $('.ct_choose').mouseover(function(){
        $(this).children('span').css({
            color : 'red'
        })
    }).mouseleave(function(){
        $(this).children('span').css({
            color : ''
        })
    })
    //导航栏（我的京东）事件
    $('.list3').mouseover(function(){
        $('.list3 .lt_3box').stop(true,false).slideDown(0)
        $(this).siblings().children('ul').hide()
        $('.box').hide()
        $('.box2').hide()
    }).mouseleave(function(){
        $('.list3 .lt_3box').stop(true,false).slideUp(500)
    })
    
    $('.list4').mouseover(function(){
        $('.list4>ul').stop(true,false).slideDown(0)
        $(this).siblings().children('ul').hide()
        $('.box').hide()
        $('.box2').hide()
    }).mouseleave(function(){
        $('.list4>ul').stop(true,false).slideUp(500)
    })

    $('.list5').mouseover(function(){
        $('.list5>ul').stop(true,false).slideDown(0)
        $(this).siblings().children('ul').hide()
        $('.box').hide()
        $('.box2').hide()
    }).mouseleave(function(){
        $('.list5>ul').stop(true,false).slideUp(500)
    })

    $('.list6').mouseover(function(){
        $('.box').stop(true,false).slideDown(0)
        $(this).siblings().children('ul').hide()
        $('.box2').hide()
    }).mouseleave(function(){
        $('.box').stop(true,false).slideUp(500)
    })
    $('.list7').mouseover(function(){
        $('.box2').stop(true,false).slideDown(500)
        $(this).siblings().children('ul').hide()
        $('.box').hide()
    }).mouseleave(function(){
        $('.box2').stop(true,false).slideUp(500)
    })



    //搜索框
    $('.log').mouseover(function(){
        $('.log').addClass('log1')
    }).mouseleave(function(){
        $('.log').removeClass('log1')
    })

    //导航购物车的信封点击数量增加效果
    $('.num').click(function(){
        axios.get('http://127.0.0.1:3000/buy_num').then(res =>{
            let buynum = ''
            let list = res.data
            list.forEach(item => {
                buynum = `${item.num}`
            });
            $('.num_1').text(buynum)
        })
       
    })

    //导航购物车鼠标移动效果
    $('.buy').mouseover(function(){
        $('.buy_box').stop(true,false).slideDown(0)
    }).mouseleave(function(){
        $('.buy_box').stop(true,false).slideUp(500)
    })

    //固定二维码鼠标移动效果
    $('.QR_code').mouseover(function(){
        $('.box2').stop(true,false).slideDown(500)
        $(this).siblings().children('ul').hide()
        $('.box').hide()
    }).mouseleave(function(){
        $('.box2').stop(true,false).slideUp(500)
    })



    //第一部分
    // 左边导航栏触碰效果
    $('.one_left>ul>li').mouseover(function(){
        $(this).addClass('on').siblings('li').removeClass('on')
    }).mouseleave(function(){
        $(this).removeClass('on')
    })

    $('.one_left1').mouseover(function(){
        $('.ol_box').stop(true,false).slideDown()
    }).mouseleave(function(){
        $('.ol_box').stop(true,false).slideUp(500)
    })

    // 第一部分大轮播图
    var mySwiper = new Swiper('.one_wawa', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 3000,
    },
    allowTouchMove: false, // PC端阻止触摸切换
    pagination: {
        el: '.swiper-pagination',
        clickable :true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    })

    $('.one .one_center .swiper-button-prev').mouseover(function(){
        $(this).css({
            'background-color': 'rgba(0, 0, 0, .6)'
        })
    }).mouseleave(function(){
        $(this).css({
            'background-color': 'rgba(0, 0, 0, .2)'
        })
    })

    $('.one .one_center .swiper-button-next').mouseover(function(){
        $(this).css({
            'background-color': 'rgba(0, 0, 0, .6)'
        })
    }).mouseleave(function(){
        $(this).css({
            'background-color': 'rgba(0, 0, 0, .2)'
        })
    })
    // 第一部分小轮播图
    var mySwiperRgt = new Swiper('.Ocenter', {
        loop: true,
        autoplay: {
            delay: 1000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    $('.one_center1 .Ocenter').mouseover(function(){
        $('.one_center1 .Ocenter .swiper-button-prev').show()
        $('.one_center1 .Ocenter .swiper-button-next').show()
    }).mouseleave(function(){
        $('.one_center1 .Ocenter .swiper-button-prev').hide()
        $('.one_center1 .Ocenter .swiper-button-next').hide()
    })

    $('.one_center1 .Ocenter .swiper-button-prev').mouseover(function(){
        $(this).css({
            'background-color': 'rgba(0, 0, 0, .6)'
        })
    }).mouseleave(function(){
        $(this).css({
            'background-color': 'rgba(0, 0, 0, .2)'
        })
    })

    $('.one_center1 .Ocenter .swiper-button-next').mouseover(function(){
        $(this).css({
            'background-color': 'rgba(0, 0, 0, .6)'
        })
    }).mouseleave(function(){
        $(this).css({
            'background-color': 'rgba(0, 0, 0, .2)'
        })
    })

    $('.one_center1 .Ocenter .ocenter li').mouseover(function(){
        $(this).css({
            'opacity':'.6'
        })
    }).mouseleave(function(){
        $(this).css({
            'opacity':'1'
        })
    })




    // 第二部分倒计时
    var a1=  setInterval(countDown, 1000)
    function countDown() {
    var date = new Date('2023-02-20 19:00:00')
    var date_new = new Date
    var newdate = date - date_new
    var day,hour,minute,second;
        //计算天数
        if(newdate>=0){
            var d = Math.floor(newdate/(1000*60*60*24))
            day = (d < 10 ? "0"+ d:d)
            //计算小时叔
            var h = Math.floor(newdate/(1000*60*60)%24)
            hour = h<10 ? "0" + h:h
            //计算分钟
            var m = Math.floor(newdate/(1000*60)%60)
            minute = m <10 ? '0' + m:m
            //计算秒数
            var s = Math.floor(newdate/1000%60)
            second = s <10 ? '0' + s:s
            var abc = `${day}天${hour}时${minute}分${second}秒 结束`
            $('.daojishi') .text(`${day}天${hour}时${minute}分${second}秒`) 
        }
       else{
        $('.daojishi').addClass('daojishi1')
        $('.daojishi').text('已结束')
       }
    }

   
    // 第二部分（京东秒杀旁的轮播图
    var mySwipercenter = new Swiper('._1center',{
        loop: true,
        speed:1000,
        slidesPerView : 1,
        slidesPerGroup : 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    $('.two ._1center .swiper-button-prev').mouseover(function(){
        $(this).css({
            'background': 'rgba(0, 0, 0, .4)'
        })
    }).mouseleave(function(){
        $(this).css({
            'background': 'rgba(0, 0, 0, .2)'
        })
    })

    $('.two ._1center .swiper-button-next').mouseover(function(){
        $(this).css({
            'background': 'rgba(0, 0, 0, .4)'
        })
    }).mouseleave(function(){
        $(this).css({
            'background': 'rgba(0, 0, 0, .2)'
        })
    })

    $('.two .center1 li').mouseover(function(){
        $(this).css({
            'opacity' : '.7'
        })
        $(this).children('h3').css({
            'color' : 'red'
        })
    }).mouseleave(function(){
        $(this).css({
            'opacity' : '1'
        })
        $(this).children('h3').css({
            'color' : ''
        })
    })

  
    
   
   
  
    // 第二部分最右边固定商品的鼠标移动事件
    $('.two .right .box').mouseover(function(){
        $(this).css({
            'backgroundColor' : 'red'
        })
        $('.two .right .box a').css({
            'color' : 'white'
        })
    }).mouseleave(function(){
        $(this).css({
            'backgroundColor' : ''
        })
        $('.two .right .box a').css({
            'color' : ''
        })
    })

    $('.two .right').mouseover(function(){
        $(this).children('img').css({
            'opacity':'.7'
        })
    }).mouseleave(function(){
        $(this).children('img').css({
            'opacity':'1'
        })
    })

    // 第二部分scoll事件
  

    // $('.two_fix li').mouseover(function(){
    //     $(this).children().css({
    //         'color':'white'
    //     })
        
    // }).mouseleave(function(){
    //     $(this).children().css({
    //         'color':'red'
    //     })
    // })


    


    $('.two_fix .on').click(function(){
        $("html,body").animate({scrollTop:0}, 1000);
        return false;
    })
    // 固定导航栏
    $(window).scroll(function(){
        console.log($(window).scrollTop()) //920 1316
        var scrollTopValue =  $(window).scrollTop()
        if(scrollTopValue >=725){
            $('.fixed').slideDown(500)
            $('.fixed').css({
                position:'fixed',
                top:0,
                left:0
            })
            $('.two_fix').css({
                'position':'fixed',
                top:112,
                right:160
            })
            $('.two_fix .on').slideDown(100)
           
            $('.two_fix li').eq(0).children('a').addClass('on1')
            $('.two_fix li').eq(0).siblings().children('a').removeClass('on1')
        }
        if(scrollTopValue>=962){
            $('.two_fix li').eq(1).children('a').addClass('on1')
            $('.two_fix li').eq(1).siblings().children('a').removeClass('on1')
        }
        if(scrollTopValue>=1316){
            $('.two_fix li').eq(2).children('a').addClass('on1')
            $('.two_fix li').eq(2).siblings().children('a').removeClass('on1')
        }
        if(scrollTopValue>=2016){
            $('.two_fix li').eq(3).children('a').addClass('on1')
            $('.two_fix li').eq(3).siblings().children('a').removeClass('on1')
        }
        if(scrollTopValue>=2252){
            
            $('.five').css({
                position:'fixed',
                top:50,
                left:0,
                backgroundColor:'white',
                borderBottom: '1px solid red'
            })
        }
        if(scrollTopValue>=3120){
            $('.two_fix li').siblings().children('a').removeClass('on1')
        }
        if(scrollTopValue<2252){
            $('.five').css({
                position:'',
                backgroundColor:'',
                borderBottom: ''
            })
        }
        if(scrollTopValue<725){
            $('.fixed').hide()
            $('.two_fix .on').slideUp(100)
            $('.two_fix').css({
                position: 'absolute',
                top: 0,
                right: 0,
            })
            $('.two_fix .on').siblings().children('a').removeClass('on1')
            
        }
    })
    // $('.two_fix .on').click(function(){
    //     $("html,body").animate({scrollTop:0}, 1000);
    //     return false;
    // })
    $('.two_fix li').eq(0).click(function(){
        $("html,body").animate({scrollTop:725}, 800);
        $('.two_fix li').eq(0).children('a').addClass('on1')
        $('.two_fix li').eq(0).siblings().children('a').removeClass('on1')
        return false;
    })
    $('.two_fix li').eq(1).click(function(){
        $("html,body").animate({scrollTop:965}, 800);
        $('.two_fix li').eq(1).children('a').addClass('on1')
        $('.two_fix li').eq(1).siblings().children('a').removeClass('on1')
        return false;
    })
    $('.two_fix li').eq(2).click(function(){
        $("html,body").animate({scrollTop:1316}, 800);
        $('.two_fix li').eq(1).children('a').addClass('on1')
        $('.two_fix li').eq(1).siblings().children('a').removeClass('on1')
        return false;
    })
    $('.two_fix li').eq(3).click(function(){
        $("html,body").animate({scrollTop:2016}, 800);
        $('.two_fix li').eq(1).children('a').addClass('on1')
        $('.two_fix li').eq(1).siblings().children('a').removeClass('on1')
        return false;
    })
    //第三部分左侧box的鼠标移动事件
    // 头部（每日特价
    $('.three .left h3').mouseover(function(){
        $(this).siblings('i').css({
            'background': 'url(../img/three_jiantou.png) no-repeat',
            'background-position': '0 0'
        })
    }).mouseleave(function(){
        $(this).siblings('i').css({
            'background': 'url(../img/three_jiantou.png) no-repeat',
            'background-position': '-16px 0'
        })
    })

    $('.three .left i').mouseover(function(){
        $(this).css({
            'background': 'url(../img/three_jiantou.png) no-repeat',
            'background-position': '0 0'
        })
    }).mouseleave(function(){
        $(this).css({
            'background': 'url(../img/three_jiantou.png) no-repeat',
            'background-position': '-16px 0'
        })
    })
    // 左边
    $('.three .left .dijia').mouseover(function(){
        $('.three .left .dijia .boluo').css({
            'opacity' : '.8'
        })
        $('.three .left .dijia .boluo p').css({
            'color' : 'red'
        })
    }).mouseleave(function(){
        $('.three .left .dijia .boluo').css({
            'opacity' : '1'
        })
        $('.three .left .dijia .boluo p').css({
            'color' : ''
        })
    })

    // 右边
    $('.three .fruit ul li').mouseover(function(){
        $(this).children('a').children('img').css({
            'opacity' : '.7'
        })
        $(this).children('a').children('p').css({
            'color' : 'red'
        })
    }).mouseleave(function(){
        $(this).children('a').children('img').css({
            'opacity' : '1'
        })
        $(this).children('a').children('p').css({
            'color' : ''
        })
    })

    //第三部分右侧box的鼠标移动事件
    // 头部（品牌闪购
    $('.three .right h3').mouseover(function(){
        $(this).siblings('i').css({
            'background': 'url(../img/three_jiantou.png) no-repeat',
            'background-position': '0 0'
        })
    }).mouseleave(function(){
        $(this).siblings('i').css({
            'background': 'url(../img/three_jiantou.png) no-repeat',
            'background-position': '-16px 0'
        })
    })

    $('.three .right i').mouseover(function(){
        $(this).css({
            'background': 'url(../img/three_jiantou.png) no-repeat',
            'background-position': '0 0'
        })
    }).mouseleave(function(){
        $(this).css({
            'background': 'url(../img/three_jiantou.png) no-repeat',
            'background-position': '-16px 0'
        })
    })
    // 左边
    $('.three .right .hd').mouseover(function(){
        $('.three .right .hd .box .l1').css({
            'opacity' : '.7'
        })
    }).mouseleave(function(){
        $('.three .right .hd .box .l1').css({
            'opacity' : '1'
        })
    })

    // 右边
    $('.three .right .box1 ul li').mouseover(function(){
        $(this).children('a').children('img').css({
            'opacity' : '.7'
        })
        $(this).children('a').children('p').css({
            'color' : 'red'
        })
    }).mouseleave(function(){
        $(this).children('a').children('img').css({
            'opacity' : '1'
        })
        $(this).children('a').children('p').css({
            'color' : ''
        })
    })

    // 第四部分
    $('.four img').mouseover(function(){
        $(this).css({
            'opacity':'.7'
        })
    }).mouseleave(function(){
        $(this).css({
            'opacity':'1'
        })
    })


    $('.more_1').mouseover(function(){
        $(this).css({
            'color' : 'red'
        })
    }).mouseleave(function(){
        $(this).css({
            'color' : ''
        })
    })
   
  
     let page = 1
     goodListFun(page)
    $(window).scroll(function(){
        var a1 = document.body.scrollHeight-420
        var a2 = document.documentElement.scrollTop
        var a3 = document.documentElement.clientHeight
        if(a1-a2<a3&page<5){
            page++
            goodListFun(page)
        }
       });
       
    function goodListFun(page1){ 
        axios.post('http://127.0.0.1:3000/goodlist',{
            page : page1,
        }).then(res =>{
            if(res.data.length > 0){
                let list = res.data
                let strHtml = ''
                list.forEach(item => {
                    strHtml += `
                                    <li class="li">
                                        <img src="${item.img}">
                                        <p class="pp">${item.name}</p>
                                        <span>
                                            <p class="p1">${item.a1}</p>
                                            <p class="p2">${item.a2}</p>
                                            <p class="p3">${item.a3}</p>
                                        </span>
                                    </li>`
                });
                $('.good_list').append(strHtml)
            }
        }
        )}
 
   $('.gl').on('mouseover','.li',function(){
    $(this).children('img').css({
        'opacity':'.7'
    })
   }).on('mouseleave','.li',function(){
    $(this).children('img').css({
        'opacity':'1'
    })
   })
   
   //第五部分
   $('.five .iii .ili').mouseover(function(){
    $(this).children().css({
        color:'red'
    })
   }).mouseleave(function(){
    $(this).children().css({
        color:''
    })
   })
       

    


})