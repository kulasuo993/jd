$(function(){
    //导航的一些需求
    $('.menu li').mouseover(function(){
        $(this).addClass('on').siblings('li').removeClass('on')
    })
    // $('.menu li').mouseleave(function(){
    //     $('#on').addClass('on').siblings('li').removeClass('on')
    // })
    //右侧固定二维码栏
    $('.ji').on('click','.ji_before',function(){
        $(this).toggleClass('ji_before1')
        $('.ji1').toggleClass('ji_box')
        $('.ji_after').toggleClass('ji_after1')
    })

    $('.ji_after').click(function(){
        $("html,body").animate({scrollTop:0}, 1500);
    })
    $('.south_jiantou').click(function(){
        $('html,body').animate({ scrollTop: 9999 }, 1500); 
       
    })

    $('.int').click(function(){
        $('.onecat').show()
    })
    $('.onecat').on('click','.onecatx',function(){
        $('.onecat').hide()
    })
    
//点击第一部分的预约按钮弹出预约框需求
    $('.yuyue').click(function(){
        $('.box').show()
    })

// 预约框的一些需求
    $('#t1').click(function(){
        $(this).addClass('gang').siblings('span').removeClass('gang')
        $('.box1').show().siblings('.box2').hide()
        
    })
    $('#t2').click(function(){
        $(this).addClass('gang').siblings('span').removeClass('gang')
        $('.box2').show().siblings('.box1').hide()
    })

    $('.end').click(function(){
        if($('#ck').prop('checked')){
           window.location.href="https://activity-test.iyingdi.com/sdkLogin/index.html?app_id=100000&app_key=123456&is_vertical=0&sign=56b0b1946f1d89a29c0f7f2627f1b33b"
           
        }
        else{
            $('.appear').fadeIn(1000,function(){
                $('.appear').fadeOut(3000)  
             })
        }
    })
    $('.end1').click(function(){
        if($('#ck1').prop('checked')){
           window.location.href="https://www.baidu.com/link?url=M7cVqDwAOsBmH8Kxn5Uht900IiBUzEptUw9uWV9xJk_&wd=&eqid=ad06edca000b339f0000000563e5eb97"
        }
        else{
            $('.appear').fadeIn(1000,function(){
                $('.appear').fadeOut(3000)  
             })
        }
    })


    $('.fa1').click(function(){
        if($('.pass').attr("type") == "password"){
           $('.pass').attr("type","text")
            $('#eye').removeClass('fa-eye-slash').addClass('fa-eye')
        }
        else{
            $('.pass').attr('type','password')
            $('#eye').removeClass('fa-eye').addClass('fa-eye-slash')
        }
    })
    $('.fa2').click(function(){
        if($('.pass1').attr("type") == "password"){
           $('.pass1').attr("type","text")
            $('#eye1').removeClass('fa-eye-slash1').addClass('fa-eye1')
        }
        else{
            $('.pass1').attr('type','password')
            $('#eye1').removeClass('fa-eye1').addClass('fa-eye-slash1')
        }
    })

    $('#yuyue_del').click(function(){
        $('.box').hide()
    })

  //第二部分轮播效果
  var two_time 
  var two_id = 0
  var two_li =  $('.two_wawa1>li').length
  two_time = setInterval(function(){
    two_id++
    if(two_id>=two_li){
        two_id = 0
    }
    $('.two_wawa1>li').eq(two_id).removeClass('li_on').siblings('li').addClass('li_on')
    $('.two_point>span').eq(two_id).addClass('on').siblings('span').removeClass('on')
    },2000)
    $('.two_wawa1>li').mouseover(function(){
        clearInterval(two_time)
    })
    $('.two_point>span').click(function(){
        clearInterval(two_time)
    })

    $('.two_point>span').click(function(){
        var i = $(this).index()
        $(this).addClass('on').siblings('span').removeClass('on')
        $('.two_wawa1>li').eq(i).removeClass('li_on').siblings('li').addClass('li_on')
    })

//第二部分信息框效果
    $('.two_wenzi>li>span').mouseover(function(){
        clearInterval(timer_two)
        $(this).css({
            'backgroundColor' : 'yellow',
            'display': 'block',
            'white-space': 'normal',
            'margin-right':'100'
        })
    }).mouseleave(function(){
        $(this).css({
            'backgroundColor' : '',
            'white-space': 'nowrap',
        })
    })

    $('.two_jiantou>p').click(function(){
        var i = $(this).index()
        $(this).css({
            'color':'red'
        })
        $(this).siblings('p').css({
            'color':''
        })
        $('.two_line>ul').eq(i).removeClass('twowenzi').siblings('ul').addClass('twowenzi')
    })
   
    
    
    //第二部分菜单
    var timer_two = null
    timer_two = setInterval(function(){
        $('.two_wenzi').eq(0).append($('.two_wenzi').eq(0).children().eq(0))
        $('.two_wenzi').eq(1).append($('.two_wenzi').eq(1).children().eq(0))
        $('.two_wenzi').eq(2).append($('.two_wenzi').eq(2).children().eq(0))
        $('.two_wenzi').eq(3).append($('.two_wenzi').eq(3).children().eq(0))
    },2000)
    
    $('.two_line').on('click','.shang',function(){
        $('.two_wenzi').eq(0).prepend($('.two_wenzi').eq(0).children().eq(8))
        $('.two_wenzi').eq(1).prepend($('.two_wenzi').eq(1).children().eq(5))
        $('.two_wenzi').eq(2).prepend($('.two_wenzi').eq(2).children().eq(5))
        $('.two_wenzi').eq(3).prepend($('.two_wenzi').eq(3).children().eq(5))
        clearInterval(timer_two)
    })
   

    $('.xia1').click(function(){
        // $('.two_wenzi1>li:first').remove();
        $('.two_wenzi').eq(0).append($('.two_wenzi').eq(0).children().eq(0))
        $('.two_wenzi').eq(1).append($('.two_wenzi').eq(1).children().eq(0))
        $('.two_wenzi').eq(2).append($('.two_wenzi').eq(2).children().eq(0))
        $('.two_wenzi').eq(3).append($('.two_wenzi').eq(3).children().eq(0))
        clearInterval(timer_two)
    })

    $('.shang').mouseover(function(){
        $('.shang').css({
            'color':'red'
        })
    }).mouseleave(function(){
        $('.shang').css({
            'color':''
        })
    })
    

    $('.xia1').mouseover(function(){
        $('.xia1').css({
            'color':'red'
        })
    }).mouseleave(function(){
        $('.xia1').css({
            'color':''
        })
    })

    //测试工具
    // $('.niubi').click(function(){
        // console.log($('.center').offset().top);
        //console.log($(window).scrollTop());
        // console.log($(".four_jiesao").offset().top)
        // 1250-2125 1988
        //2750 3875
    //})
    //$('.center').offset().top 2035
    //$(window).scrollTop() 1283-2158

    // 第三部分进度条滚动事件
    $(window).scroll(function () {
        var ws = $(window).scrollTop()
        
        var num1 = '1125'
        var num2 = '2125'
        if (ws>num1 &&ws<num2 ) {
            $('.three_yline').animate({width:'80%'},1500)
             $('.gery').css({'margin-left': '73%' })
            
        }
       
        var abc1 = $('.gery').css('margin-left')
            if(abc1>'144' && abc1<'288'){
                $('.grey_nurber').text('20万')
                $('.jiangli').eq(0).addClass('jiangli1')
                $('.jiangli').eq(1).addClass('jiangli1')
            }else if(abc1 >'288' && abc1 <'432'){
                $('.grey_nurber').text('30万')
                $('.jiangli').eq(0).addClass('jiangli1')
                $('.jiangli').eq(1).addClass('jiangli1')
                $('.jiangli').eq(2).addClass('jiangli1')
            }else if (abc1 >'432' && abc1 <'576'){
                $('.grey_nurber').text('40万')
                $('.jiangli').eq(0).addClass('jiangli1')
                $('.jiangli').eq(1).addClass('jiangli1')
                $('.jiangli').eq(2).addClass('jiangli1')
                $('.jiangli').eq(3).addClass('jiangli1')
            }
            else if (abc1 >'576' && abc1 <'720'){
                $('.grey_nurber').text('50万')
                $('.jiangli').eq(0).addClass('jiangli1')
                $('.jiangli').eq(1).addClass('jiangli1')
                $('.jiangli').eq(2).addClass('jiangli1')
                $('.jiangli').eq(3).addClass('jiangli1')
                $('.jiangli').eq(4).addClass('jiangli1')
            }else if(abc1 >'720' && abc1<'865'){
                $('.grey_nurber').text('60万')
                $('.jiangli').eq(0).addClass('jiangli1')
                $('.jiangli').eq(1).addClass('jiangli1')
                $('.jiangli').eq(2).addClass('jiangli1')
                $('.jiangli').eq(3).addClass('jiangli1')
                $('.jiangli').eq(4).addClass('jiangli1')
                $('.jiangli').eq(5).addClass('jiangli1')
            }else{
                $('.grey_nurber').text('10万')
                $('.jiangli').eq(0).addClass('jiangli1')
            }
       
    })


    // 第三部分 邀请人数事件
    var num = 0
    $('.three_invit>span').text(num)
    $('.three_friend').click(function(){
        num ++
        $('.three_invit>span').text(num)
        if(num >= 3 && num <6){
            $('.three_lingqu').eq(0).click(function(){
                this.disabled = true
                $(this).text('已领取')
                $(this).css('color','black')
                $(this).parent().css({'opacity': '.3'})
            })
        }
         else if(num >= 6 && num <9){
            $('.three_lingqu').eq(1).click(function(){
                this.disabled = true
                $(this).text('已领取')
                $(this).css('color','black')
                $(this).parent().css({'opacity': '.3'})
            })
        }
        if(num>=9){
            $('.three_lingqu').eq(2).click(function(){
                this.disabled = true
                $(this).text('已领取')
                $(this).css({
                    'color':'black',
                })
                $(this).parent().css({'opacity': '.3'})
            })
        }
    })
   


// 第四部分 动态创建人物角色轮播
    var swiperPerson = [
        {
            pic: '../img/four_wawa.png',
            hd: '../img/four_six1.png',
            hd1 : '../img/four_six2.png',
            name: '银',
            list1:{sm: '90%',
            mz: '40%',
            fy: '10%',
            sd: '80%',
            ll: '70%',
        },
            processInfo:{
                sm: '90%',
                mz: '40%',
                fy: '10%',
                sd: '80%',
                ll: '70%',
            },
            teshu:{
                name: '特殊能力：雷神之锤',
                text: '若普攻的一个方向上有两个目标, 则置为特殊地格,同时对两个敌人造成物理伤害。'
            },
            skill1: '对自身十字方向3格范围内的所有敌人造成物理',
            skill2: '将普攻范围内的所有敌方单位击退1格距离',
        },
        {
            pic: '../img/btf.jpg',
            hd: '../img/four_six2.png',
            hd1: '../img/four_six6.png',
            name: '金',
            list1:{
                sm: '10%',
                mz: '40%',
                fy: '0%',
                sd: '80%',
                ll: '0%',
            },
            processInfo:{
                sm: '10%',
                mz: '40%',
                fy: '0%',
                sd: '80%',
                ll: '0%',
            },
            teshu:{
                name: '雷神222',
                text: '2若普攻的一个方向上有两个目标, 则置为特殊地格,同时对两个敌人造成物理伤害。'
            },
            skill1: '2对自身十字方向3格范围内的所有敌人造成物理',
            skill2: '2将普攻范围内的所有敌方单位击退1格距离',
        },
        {
            pic: '../img/btf2.jpg',
            hd: '../img/four_six3.png',
            hd1: '../img/four_six5.png',
            name: '铜',
            list1:{sm: '40%',
            mz: '40%',
            fy: '20%',
            sd: '0%',
            ll: '0%',},
            processInfo:{
                sm: '40%',
                mz: '40%',
                fy: '20%',
                sd: '0%',
                ll: '0%',
            },
            teshu:{
                name: '雷神333',
                text: '3若普攻的一个方向上有两个目标, 则置为特殊地格,同时对两个敌人造成物理伤害。'
            },
            skill1: '3对自身十字方向3格范围内的所有敌人造成物理',
            skill2: '3将普攻范围内的所有敌方单位击退1格距离',
        },
        {
            pic: '../img/cat.png',
            hd: '../img/four_six4.png',
            hd1: '../img/four_six1.png',
            name: '铜',
            list1:{
                sm: '60%',
                mz: '10%',
                fy: '30%',
                sd: '100%',
                ll: '70%',
            },

            processInfo:{
                sm: '60%',
                mz: '10%',
                fy: '30%',
                sd: '100%',
                ll: '70%',
            },
            teshu:{
                name: '雷神444',
                text: '4若普攻的一个方向上有两个目标, 则置为特殊地格,同时对两个敌人造成物理伤害。'
            },
            skill1: '4对自身十字方向3格范围内的所有敌人造成物理',
            skill2: '4将普攻范围内的所有敌方单位击退1格距离',
        },
        {
            pic: '../img/e3.jpg',
            hd: '../img/four_six3.png',
            hd1: '../img/four_six4.png',
            name: '铜',
            list1:{
                sm: '80%',
                mz: '40%',
                fy: '30%',
                sd: '30%',
                ll: '20%',
            },
            processInfo:{
                sm: '80%',
                mz: '40%',
                fy: '30%',
                sd: '30%',
                ll: '20%',
            },
            teshu:{
                name: '雷神555',
                text: '5若普攻的一个方向上有两个目标, 则置为特殊地格,同时对两个敌人造成物理伤害。'
            },
            skill1: '5对自身十字方向3格范围内的所有敌人造成物理',
            skill2: '5将普攻范围内的所有敌方单位击退1格距离',
        },
        {
            pic: '../img/e4.jpg',
            hd: '../img/four_six5.png',
            hd1: '../img/four_six2.png',
            name: '铜',
            list1:{
                sm: '50%',
                mz: '30%',
                fy: '10%',
                sd: '100%',
                ll: '80%',
            },
            processInfo:{
                sm: '50%',
                mz: '30%',
                fy: '10%',
                sd: '100%',
                ll: '80%',
            },
            teshu:{
                name: '雷神666',
                text: '6若普攻的一个方向上有两个目标, 则置为特殊地格,同时对两个敌人造成物理伤害。'
            },
            skill1: '6对自身十字方向3格范围内的所有敌人造成物理',
            skill2: '6将普攻范围内的所有敌方单位击退1格距离',
        },
        {
            pic: '../img/e5.jpg',
            hd: '../img/four_six4.png',
            hd1: '../img/four_six6.png',
            name: '铜',
            list1:{
                sm: '80%',
                mz: '90%',
                fy: '90%',
                sd: '100%',
                ll: '80%',
            },
            processInfo:{
                sm: '80%',
                mz: '90%',
                fy: '90%',
                sd: '100%',
                ll: '80%',
            },
            teshu:{
                name: '雷神777',
                text: '7若普攻的一个方向上有两个目标, 则置为特殊地格,同时对两个敌人造成物理伤害。'
            },
            skill1: '7对自身十字方向3格范围内的所有敌人造成物理',
            skill2: '7将普攻范围内的所有敌方单位击退1格距离',
        },
        
    ]

    var ptStr = '', fwawaStr = '';
    for(var i = 0;i<swiperPerson.length;i++){
        ptStr += `<div class="four_pt" data-index="${i}"><img src="${swiperPerson[i].pic}" alt="" class="pt1"></div>`
        if(i ==0){
            fwawaStr += `<li class="fwawa active" data-index="${i}"><img src="${swiperPerson[i].pic}" alt=""></li>`
        }else{
            fwawaStr += `<li class="fwawa" data-index="${i}"><img src="${swiperPerson[i].pic}" alt=""></li>`
        }  
    }
    $('.four_pt1').append(ptStr)
    $('.four_wawa').append(fwawaStr)

    
  //第四部分娃娃旁边的左右箭头

  //左箭头←
    $('.four_left').click(function(){
    $('.four_pt1').prepend( $('.four_pt:last'))
    $('.four_pt').eq(0).css({
        'opacity':'1'
    }).siblings().css({
        'opacity':'0.3'
    })
    var i = $('.four_pt').attr('data-index')
    $('.jineng1 img').attr('src',swiperPerson[i].hd)
    $('.jineng2 img').attr('src',swiperPerson[i].hd1)
    $('.four_wawa>li').eq(i).addClass('active').siblings('li').removeClass('active')
    $('.four_wawa>li').eq(i).animate({'left': '-200',
    },1000)
    $('.nengli').eq(0).children().eq(0).text(swiperPerson[i].teshu.name)
    $('.nengli').eq(0).children().eq(1).text(swiperPerson[i].teshu.text)
    $('.nengli').eq(1).children().eq(1).text(swiperPerson[i].skill1)
    $('.nengli').eq(2).children().eq(1).text(swiperPerson[i].skill2)
    $('.jindutiao').eq(0).children().eq(1).text(swiperPerson[i].list1.sm)
    $('.jindutiao').eq(1).children().eq(1).text(swiperPerson[i].list1.mz)
    $('.jindutiao').eq(2).children().eq(1).text(swiperPerson[i].list1.fy)
    $('.jindutiao').eq(3).children().eq(1).text(swiperPerson[i].list1.sd)
    $('.jindutiao').eq(4).children().eq(1).text(swiperPerson[i].list1.ll)
    $('.jindutiao').eq(0).children().eq(0).width(swiperPerson[i].processInfo.sm)
    $('.jindutiao').eq(1).children().eq(0).width(swiperPerson[i].processInfo.mz)
    $('.jindutiao').eq(2).children().eq(0).width(swiperPerson[i].processInfo.fy)
    $('.jindutiao').eq(3).children().eq(0).width(swiperPerson[i].processInfo.sd)
    $('.jindutiao').eq(4).children().eq(0).width(swiperPerson[i].processInfo.ll)
    })
  // 右箭头 →
    $('.four_right').click(function(){
    $('.four_pt1').append( $('.four_pt:first'))
    $('.four_pt').eq(0).css({
        'opacity':'1'
    }).siblings().css({
        'opacity':'0.3'
    })
    var i = $('.four_pt').attr('data-index')
    $('.jineng1 img').attr('src',swiperPerson[i].hd)
    $('.jineng2 img').attr('src',swiperPerson[i].hd1)
    $('.four_wawa>li').eq(i).addClass('active').siblings('li').removeClass('active')
    $('.four_wawa>li').eq(i).animate({'left': '-200',
    },1000)
    $('.nengli').eq(0).children().eq(0).text(swiperPerson[i].teshu.name)
    $('.nengli').eq(0).children().eq(1).text(swiperPerson[i].teshu.text)
    $('.nengli').eq(1).children().eq(1).text(swiperPerson[i].skill1)
    $('.nengli').eq(2).children().eq(1).text(swiperPerson[i].skill2)
    $('.jindutiao').eq(0).children().eq(1).text(swiperPerson[i].list1.sm)
    $('.jindutiao').eq(1).children().eq(1).text(swiperPerson[i].list1.mz)
    $('.jindutiao').eq(2).children().eq(1).text(swiperPerson[i].list1.fy)
    $('.jindutiao').eq(3).children().eq(1).text(swiperPerson[i].list1.sd)
    $('.jindutiao').eq(4).children().eq(1).text(swiperPerson[i].list1.ll)
    $('.jindutiao').eq(0).children().eq(0).width(swiperPerson[i].processInfo.sm)
    $('.jindutiao').eq(1).children().eq(0).width(swiperPerson[i].processInfo.mz)
    $('.jindutiao').eq(2).children().eq(0).width(swiperPerson[i].processInfo.fy)
    $('.jindutiao').eq(3).children().eq(0).width(swiperPerson[i].processInfo.sd)
    $('.jindutiao').eq(4).children().eq(0).width(swiperPerson[i].processInfo.ll)
    })
    //第四部分上下箭头
    //上箭头
    $('.four_pt1before').click(function(){
        $('.four_pt1').prepend( $('.four_pt:last'))
        $('.four_pt').eq(0).css({
            'opacity':'1'
        }).siblings().css({
            'opacity':'0.3'
        })
        var i = $('.four_pt').attr('data-index')
        $('.jineng1 img').attr('src',swiperPerson[i].hd)
        $('.jineng2 img').attr('src',swiperPerson[i].hd1)
        $('.four_wawa>li').eq(i).addClass('active').siblings('li').removeClass('active')
        $('.four_wawa>li').eq(i).animate({'left': '-200',
    },1000)
        $('.nengli').eq(0).children().eq(0).text(swiperPerson[i].teshu.name)
        $('.nengli').eq(0).children().eq(1).text(swiperPerson[i].teshu.text)
        $('.nengli').eq(1).children().eq(1).text(swiperPerson[i].skill1)
        $('.nengli').eq(2).children().eq(1).text(swiperPerson[i].skill2)
        $('.jindutiao').eq(0).children().eq(1).text(swiperPerson[i].list1.sm)
        $('.jindutiao').eq(1).children().eq(1).text(swiperPerson[i].list1.mz)
        $('.jindutiao').eq(2).children().eq(1).text(swiperPerson[i].list1.fy)
        $('.jindutiao').eq(3).children().eq(1).text(swiperPerson[i].list1.sd)
        $('.jindutiao').eq(4).children().eq(1).text(swiperPerson[i].list1.ll)
        $('.jindutiao').eq(0).children().eq(0).width(swiperPerson[i].processInfo.sm)
        $('.jindutiao').eq(1).children().eq(0).width(swiperPerson[i].processInfo.mz)
        $('.jindutiao').eq(2).children().eq(0).width(swiperPerson[i].processInfo.fy)
        $('.jindutiao').eq(3).children().eq(0).width(swiperPerson[i].processInfo.sd)
        $('.jindutiao').eq(4).children().eq(0).width(swiperPerson[i].processInfo.ll)
    })
    //下箭头
    $('.four_pt1after').click(function(){
        $('.four_pt1').append( $('.four_pt:first'))
        $('.four_pt').eq(0).css({
            'opacity':'1'
        }).siblings().css({
            'opacity':'0.3'
        })
        var i = $('.four_pt').attr('data-index')
        $('.jineng1 img').attr('src',swiperPerson[i].hd)
        $('.jineng2 img').attr('src',swiperPerson[i].hd1)
        $('.four_wawa>li').eq(i).addClass('active').siblings('li').removeClass('active')
        $('.four_wawa>li').eq(i).animate({'left': '-200',
    },1000)
        $('.nengli').eq(0).children().eq(0).text(swiperPerson[i].teshu.name)
        $('.nengli').eq(0).children().eq(1).text(swiperPerson[i].teshu.text)
        $('.nengli').eq(1).children().eq(1).text(swiperPerson[i].skill1)
        $('.nengli').eq(2).children().eq(1).text(swiperPerson[i].skill2)
        $('.jindutiao').eq(0).children().eq(1).text(swiperPerson[i].list1.sm)
        $('.jindutiao').eq(1).children().eq(1).text(swiperPerson[i].list1.mz)
        $('.jindutiao').eq(2).children().eq(1).text(swiperPerson[i].list1.fy)
        $('.jindutiao').eq(3).children().eq(1).text(swiperPerson[i].list1.sd)
        $('.jindutiao').eq(4).children().eq(1).text(swiperPerson[i].list1.ll)
        $('.jindutiao').eq(0).children().eq(0).width(swiperPerson[i].processInfo.sm)
        $('.jindutiao').eq(1).children().eq(0).width(swiperPerson[i].processInfo.mz)
        $('.jindutiao').eq(2).children().eq(0).width(swiperPerson[i].processInfo.fy)
        $('.jindutiao').eq(3).children().eq(0).width(swiperPerson[i].processInfo.sd)
        $('.jindutiao').eq(4).children().eq(0).width(swiperPerson[i].processInfo.ll)
    })
    $(window).scroll(function () {
        var f_wawa = $(window).scrollTop()
        var num1 = '2750'
        var num2 = '3875'
        if (f_wawa>num1 &&f_wawa<num2 ) {
            $('.four_wawa>li').eq(0).animate({'left': '-200',
            },1000)
            
            $('.four_pt').eq(0).css({
                'opacity':'1'
            }).siblings().css({
                'opacity':'0.3'
            })
        }
    })
    //第四部分图片点击效果
    $('.four_pt1').on('click','.four_pt',function(){
        var i = $(this).attr('data-index')
       
        $('.four_wawa>li').eq(i).addClass('active').siblings('li').removeClass('active') 
        $('.four_wawa>li').eq(i).animate({'left': '-200',
    },1000)
        $(this).siblings().css({
            'opacity':'0.3'
        })
        $(this).css({
            'opacity':'1'
        })
        $('.jineng1 img').attr('src',swiperPerson[i].hd)
        $('.jineng2 img').attr('src',swiperPerson[i].hd1)
        $('.nengli').eq(0).children().eq(0).text(swiperPerson[i].teshu.name)
        $('.nengli').eq(0).children().eq(1).text(swiperPerson[i].teshu.text)
        $('.nengli').eq(1).children().eq(1).text(swiperPerson[i].skill1)
        $('.nengli').eq(2).children().eq(1).text(swiperPerson[i].skill2)
        $('.jindutiao').eq(0).children().eq(1).text(swiperPerson[i].list1.sm)
        $('.jindutiao').eq(1).children().eq(1).text(swiperPerson[i].list1.mz)
        $('.jindutiao').eq(2).children().eq(1).text(swiperPerson[i].list1.fy)
        $('.jindutiao').eq(3).children().eq(1).text(swiperPerson[i].list1.sd)
        $('.jindutiao').eq(4).children().eq(1).text(swiperPerson[i].list1.ll)
        $('.jindutiao').eq(0).children().eq(0).width(swiperPerson[i].processInfo.sm)
        $('.jindutiao').eq(1).children().eq(0).width(swiperPerson[i].processInfo.mz)
        $('.jindutiao').eq(2).children().eq(0).width(swiperPerson[i].processInfo.fy)
        $('.jindutiao').eq(3).children().eq(0).width(swiperPerson[i].processInfo.sd)
        $('.jindutiao').eq(4).children().eq(0).width(swiperPerson[i].processInfo.ll)
        // $('.nengli p').eq(1).text(swiperPerson[i].teshu.name)
    })

    //第五部分 轮播需求
    var five_time
    var five_id = 0
    var five_li = $('.box_5>li').length
    five_time = setInterval(function(){
    five_id++
    if(five_id>=five_li){
        five_id = 0
    } $('.five_point>span').eq(five_id).addClass('on').siblings('span').removeClass('on')
    $('.box_5>li').eq(five_id).removeClass('five_li1').siblings('li').addClass('five_li1')
    },2000)
    
    $('.box_5>li').mouseover(function(){
    clearInterval(five_time)
    })
   
    $('.five_point>span').click(function(){
        var i = $(this).attr('data-index')
         $(this).addClass('on').siblings('span').removeClass('on')
         $('.box_5 li').each(function(index,domEle){
            console.log($(this).attr('data-index'))
            if($(this).attr('data-index') === i){
                $(this).removeClass('five_li1').siblings('li').addClass('five_li1')
                return false
            }
         })
        // $('.box_5>li').eq(i).removeClass('five_li1').siblings('li').addClass('five_li1')
        clearInterval(five_time)
    })
    
 

    var i1 = 4
    var i2 = 1
    $('.five_left').click(function(){
        $('.box_5').prepend($('.box_5').children().eq(4))
        $('.box_5>li').eq(0).removeClass('five_li1').siblings('li').addClass('five_li1')
        $('.five_point>span').eq(i1).addClass('on').siblings('span').removeClass('on')
        clearInterval(five_time)
        i1 = i1 -1
        if(i1<0){
            i1=4
        }
        
    })
    $('.five_right').click(function(){
        $('.box_5').append($('.box_5').children().eq(0))
        $('.box_5>li').eq(0).removeClass('five_li1').siblings('li').addClass('five_li1')
        clearInterval(five_time)
        $('.five_point>span').eq(i2).addClass('on').siblings('span').removeClass('on')
        clearInterval(five_time)
        i2++
        if(i2>=5){
            i2=0
        }
    })

 
   //结尾
 })