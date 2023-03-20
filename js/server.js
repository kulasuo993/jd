
// 引入koa
const koa = require("koa")
const cors = require("koa2-cors")
const Router = require("koa-router")
const {koaBody} = require('koa-body') // koa-body的最新的版本的用法已经发生了变化
const app = new koa()
const router = new Router()

app.use(cors())
// app.use(koaBody())
app.use(koaBody({
    multipart: true
}))

// 响应字符串类型
router.get("/home",async (ctx)=>{
    ctx.body = "首页111"
})

// 响应JSON类型
router.get("/list",async (ctx)=>{
    ctx.status = 200
    // 表示响应的类型是个json
    ctx.type = 'json'
    // 响应一个对象，对象会转化成json数据
    ctx.body = {
        name: '小明',
        age: 12
    }
})


// 响应XML类型
router.get("/xml",async (ctx)=>{
    ctx.status = 200
    // 表示响应的类型是个json
    // ctx.type = 'xml'
    // 响应一个对象，对象会转化成json数据
    ctx.body = `<div><h1>前端开发</h1><p>ajax</p></div>`
})

// 响应400
router.get("/400",async (ctx)=>{
    ctx.status = 400
    ctx.body = 400
})

// 响应500
router.get("/500",async (ctx)=>{
    // 后端代码出错，会自动设置status为500
    console.log(name)
    ctx.body = 500
})

// get传参query
router.get("/get",async (ctx)=>{
    // console.log(ctx)
    ctx.status = 200
    ctx.body = ctx.query
})

// get传参params
router.get("/get/:name/:age",async (ctx)=>{
    ctx.status = 200
    ctx.body = ctx.params
})

// post传参
router.post("/post",async (ctx,next)=>{
    ctx.status = 200
    console.log(ctx.request.body)
    ctx.body = ctx.request.body
})

// jsonp
router.get("/jsonp",async (ctx)=>{
    // `fn({a:1,b:2})`
    // ctx.body = `fn(${{a:1, b:2}})`
    // ctx.body = `fn(${JSON.stringify({a:1, b:2})})`

    let cb = ctx.query.callBack;
    ctx.body = `${cb}(${JSON.stringify({a:1, b:2})})`
})

//购物车数量
router.get("/buy_num",async (ctx)=>{
    ctx.status = 200
    ctx.body = [{
        time : 1,
        ooo : 233,
        num : 7,
        sad :'11321312asdas'
    }]
})
// 响应JSON类型
router.post("/goodlist",async (ctx)=>{
    ctx.status = 200
    console.log(ctx.request.body)
    if(ctx.request.body.type === 'hot'){
        if(ctx.request.body.page < 2&ctx.request.body.page > 0){
            ctx.body = [{
                name: "达尔优（dareu）A98pro机械键盘三模热插拔游戏办公PBT键帽可换轴RGB弹力臂gasket结构天空轴V4-黑色鎏金版",
                img: "../img/v21.avif",
                price: 100,
                a1:'￥',
                a2:'869.',
                a3:'00'
            },
            {
                name: "甜雅静 仿瓷密胺盘子餐具圆形烧烤盘树脂胶塑料碟子圆盘商用大白色餐盘子 10寸浅盘加厚 A5耐高温",
                img: "../img/v22.avif",
                price: 90,
                a1:'￥',
                a2:'10.',
                a3:'00'
            },
            {
                name: "艾薇 学生乳胶床垫宿舍单人床垫乳胶厚床垫床褥榻榻米床垫折叠床垫学生褥子单人 0.9米床  泰舒 90*190*5cm 200W屏蔽式增压泵",
                img: "../img/v23.avif",
                price: 90,
                a1:'￥',
                a2:'269.',
                a3:'00'
            },
            {
                name: "真博士除甲醛 360°室内装修新房吸去甲醛活性炭除异味竹炭包新车除异味 1000克（20包）买即送检测盒",
                img: "../img/v24.avif",
                price: 100,
                a1:'￥',
                a2:'29.',
                a3:'80'
            },
            {
                name: "高尔夫GOLF双肩包女15.6英寸笔记本电脑包商务通勤双肩背包女士隐藏手提电脑包大容量防泼水学生书包 优雅黑",
                img: "../img/v25.avif",
                price: 100,
                a1:'￥',
                a2:'229.',
                a3:'00'
            }
            
        ]
    }
        if(ctx.request.body.page < 3&ctx.request.body.page > 1){
        ctx.body = [{
                name: "珍酒【酒厂授权】佳品（经典） 53度酱香型高度白酒 酒中珍品礼盒装 500ml*6瓶 整箱装（内含礼品袋）",
                img: "../img/v1.avif",
                price: 100,
                a1:'￥',
                a2:'968.',
                a3:'00'
            },
            {
                name: "罗万其 三层家用小货架 桌面置物架家用多层化妆品小型收纳客厅少女心迷你宿舍厨房整理架 白色大号两层 1层",
                img: "../img/v2.avif",
                price: 90,
                a1:'￥',
                a2:'36.',
                a3:'00'
            },
            {
                name: "科沛拓增压泵家用全自动太阳能热水器小型加压泵自来水管道泵水泵 200W屏蔽式增压泵",
                img: "../img/v3.avif",
                price: 90,
                a1:'￥',
                a2:'298.',
                a3:'00'
            },
            {
                name: "爱结晶 飘窗垫窗台垫定做卧室美式卡坐垫订做田园榻榻米简约现代阳台垫子 定制专拍",
                img: "../img/v4.avif",
                price: 100,
                a1:'￥',
                a2:'10.',
                a3:'00'
            },
            {
                name: "九牧（JOMOO）厨房304不锈钢水槽单槽洗菜盆台控下水洗碗池纳米抗刮抑菌 【台控】抗刮(抽拉龙头)",
                img: "../img/v5.avif",
                price: 100,
                a1:'￥',
                a2:'2148.',
                a3:'00'
            }
            
        ]
    }
    if(ctx.request.body.page < 4&ctx.request.body.page > 2){
        ctx.body = [{
            name: "YUZHONGSHA宜兴紫砂茶宠佛摆件大红袍弥勒佛如来雕塑茶具创意款可养 大红袍",
            img: "../img/v6.avif",
            price: 100,
            a1:'￥',
            a2:'138.',
            a3:'80'
        },
        {
            name: "水星家纺 A类床上四件套纯棉床单刺绣被套枕套 床上用品双人被罩被褥被单 爱丽丝·幻境1.5米床",
            img: "../img/v7.avif",
            price: 90,
            a1:'￥',
            a2:'569.',
            a3:'00'
        },
        {
            name: "名创优品（MINISO）咱们裸熊系列白熊抱枕 趴姿公仔毛绒玩具抱觉卧室办公室生日礼物",
            img: "../img/v8.avif",
            price: 90,
            a1:'￥',
            a2:'26.',
            a3:'90'
        },
        {
            name: "海尔（Haier）洗烘套装 1.08洗净比10Kg滚筒洗衣机全自动+热泵烘干机家用组合 香薰除菌 EG100B129W+EHG100129W",
            img: "../img/v9.avif",
            price: 100,
            a1:'￥',
            a2:'4699.',
            a3:'00'
        },
        {
            name: "正泰中间继电器24V jzx-22f八角DC12v中间继电器14脚220伏底座直流两开两闭 JZX-22F(D)/2Z8脚 (继电器+底座) 直流 DC24V",
            img: "../img/v2.avif",
            price: 100,
            a1:'￥',
            a2:'14.',
            a3:'80'
        }
        
    ]
}
    if(ctx.request.body.page < 5&ctx.request.body.page > 3){
        ctx.body = [{
            name: "雷士（NVC）  LED筒灯天花灯 金属铝材砂银 4瓦暖白光4000K 开孔70-80mm【绿色家居】",
            img: "../img/v11.avif",
            price: 100,
            a1:'￥',
            a2:'16.',
            a3:'00'
        },
        {
            name: "瓷砖大礼包",
            img: "../img/v12.avif",
            price: 90,
            a1:'￥',
            a2:'5000.',
            a3:'00'
        },
        {
            name: "南极人NanJiren 磨毛四件套 水洗棉简约裸睡双人床上用品床被套200*230cm床单枕套 1.8米床",
            img: "../img/v13.avif",
            price: 90,
            a1:'￥',
            a2:'88.',
            a3:'80'
        },
        {
            name: "YUZHONGSHA宜兴紫紫砂茶宠羊摆件十二生肖领头羊金钱羊雕塑创意款 款2",
            img: "../img/v14.avif",
            price: 100,
            a1:'￥',
            a2:'99.',
            a3:'00'
        },
        {
            name: "美的 炒锅不粘锅麦饭石色涂层锅炒菜锅煎炒锅 家用 香槟金28WOK302 ",
            img: "../img/v15.avif",
            price: 100,
            a1:'￥',
            a2:'89.',
            a3:'00'
        }
        
    ]
}
    if(ctx.request.body.page < 6&ctx.request.body.page > 4){
        ctx.body = [{
            name: "艾瑞泽 螺丝刀全套六角梅花螺丝批套装拆机家用维修螺丝刀工具 21合一特惠款",
            img: "../img/v16.avif",
            price: 100,
            a1:'￥',
            a2:'25.',
            a3:'10'
        },
        {
            name: "罗万其 冰箱移动底座洗衣机滑轮移动底座冰箱脚垫移搬东西神器可移沙发家具挪床脚 手动转向蓝色常规款(承重300斤) 1层",
            img: "../img/v17.avif",
            price: 90,
            a1:'￥',
            a2:'46.',
            a3:'00'
        },
        {
            name: "皇家罗兰可净化甲醛的环保无缝墙布  金银丝洒金壁布电视背景墙卧室全屋 HJ148-13优雅日光",
            img: "../img/v18.avif",
            price: 90,
            a1:'￥',
            a2:'52.',
            a3:'90'
        },
        {
            name: "正泰(CHNT) 空气开关 家用小型断路器 空开 NBE7 1P 20A",
            img: "../img/v19.avif",
            price: 100,
            a1:'￥',
            a2:'10.',
            a3:'80'
        },
        {
            name: "罗万其窄缝置物架10cm 厨房缝隙超窄窄缝收纳置物架夹缝柜13厘米窄柜 40长13.1宽3层 1个",
            img: "../img/v2.avif",
            price: 100,
            a1:'￥',
            a2:'64.',
            a3:'00'
        }
        
    ]}
     
    }else if(ctx.request.body.type === 'smart'){
        if(ctx.request.body.page < 10){
            ctx.body = [
                {
                    name: "高尔夫GOLF双肩包女15.6英寸笔记本电脑包商务通勤双肩背包女士隐藏手提电脑包大容量防泼水学生书包 优雅黑",
                    img: "../img/v25.avif",
                    price: 100,
                    a1:'￥',
                    a2:'229.',
                    a3:'00'
                },
                {
                name: "达尔优（dareu）A98pro机械键盘三模热插拔游戏办公PBT键帽可换轴RGB弹力臂gasket结构天空轴V4-黑色鎏金版",
                img: "../img/v21.avif",
                price: 100,
                a1:'￥',
                a2:'869.',
                a3:'00'
            },
            {
                name: "甜雅静 仿瓷密胺盘子餐具圆形烧烤盘树脂胶塑料碟子圆盘商用大白色餐盘子 10寸浅盘加厚 A5耐高温",
                img: "../img/v22.avif",
                price: 90,
                a1:'￥',
                a2:'10.',
                a3:'00'
            },
            {
                name: "艾薇 学生乳胶床垫宿舍单人床垫乳胶厚床垫床褥榻榻米床垫折叠床垫学生褥子单人 0.9米床  泰舒 90*190*5cm 200W屏蔽式增压泵",
                img: "../img/v23.avif",
                price: 90,
                a1:'￥',
                a2:'269.',
                a3:'00'
            },
            {
                name: "真博士除甲醛 360°室内装修新房吸去甲醛活性炭除异味竹炭包新车除异味 1000克（20包）买即送检测盒",
                img: "../img/v24.avif",
                price: 100,
                a1:'￥',
                a2:'29.',
                a3:'80'
            }
            
        ]
    }
}
})

    



// 全局配置
app.use(router.routes(), router.allowedMethods())
 
 
// 监听
app.listen("3000", ()=>{
   console.log("koa服务启动 ")
})