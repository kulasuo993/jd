
//获得元素
var $leftBtn = $('.leftBtn');
var $rightBtn = $('.rightBtn');
//获取页面中所有的图片li
var $lis = $('.imgURL li');
//获取所有锚点的li
var $maodians = $('.maodianUl li')

//表示当前显示的li的序号
var index = 0;

var timer = null;

$rightBtn.click(function() {
    //防止动画积累的方法：只要jq对象在执行动画，就忽略任何的触发
    if ($lis.is(':animated')) {
        return;
    }
    //旧的怎么样，新的怎么样
    $lis.eq(index).fadeOut();

    $maodians.eq(index).removeClass('selectMaoDian');

    index++;

    //当已经时最后一张时，点击切换到第一张
    if (index == 5) {
        index = 0;
    }

    //新的淡入
    $lis.eq(index).fadeIn();

    $maodians.eq(index).addClass('selectMaoDian');
});

$leftBtn.click(function() {
    //防止动画积累的方法：只要jq对象在执行动画，就忽略任何的触发
    if ($lis.is(':animated')) {
        return;
    }

    $lis.eq(index).fadeOut();
    $maodians.eq(index).removeClass('selectMaoDian');

    index--;

    //当已经时最后一张时，点击切换到第一张
    if (index == -1) {
        index = 4;
    }
    $lis.eq(index).fadeIn();
    $maodians.eq(index).addClass('selectMaoDian');
})

//锚点添加事件
$maodians.mouseenter(function() {
    //旧的淡出，并给锚点取消背景
    $lis.eq(index).fadeOut();
    $maodians.eq(index).removeClass('selectMaoDian');

    //index()方法返回当前节点在兄弟节点中的序号，从0开始计算。
    index = $(this).index();

    //console.log(index);

    //新的淡入，并给锚点添加背景
    $lis.eq(index).fadeIn();
    $maodians.eq(index).addClass('selectMaoDian');
});

//自动播放(定时器)
timer = setInterval(function() {
    //防止动画积累的方法：只要jq对象在执行动画，就忽略任何的触发
    if ($lis.is(':animated')) {
        return;
    }

    //旧的怎么样，新的怎么样
    $lis.eq(index).fadeOut();
    $maodians.eq(index).removeClass('selectMaoDian');

    index++;

    //当已经时最后一张时，点击切换到第一张
    if (index == 5) {
        index = 0;
    }

    $lis.eq(index).fadeIn();
    $maodians.eq(index).addClass('selectMaoDian');
}, 3000);
