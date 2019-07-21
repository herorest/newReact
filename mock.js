var request = require('superagent')
var model = require('./src/js/repertory/common/interface');

function getName() {
    var familyNames = new Array(
        "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
        "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
        "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
        "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
        "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
        "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
        "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
        "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
        "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
        "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
    );
    var givenNames = new Array(
        "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
        "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
        "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
        "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
        "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
        "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
        "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
        "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
        "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
        "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
    );
    var i = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    var familyName = familyNames[i];
    var j = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    var givenName = givenNames[j];
    var name = familyName + givenName;
    return name;
}

function getMoble() {
    var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
    var i = parseInt(10 * Math.random());
    var prefix = prefixArray[i];
    for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix;
}

function randomDate() {
    timeScape = parseInt(1000 * 60 * 60 * 24 * 30 * Math.random());
}

function getDate() {
    var date = new Date().getTime();
    date -= timeScape;
    timeScape += timeScape;
    return date;
}

function getContent() {
    var rand = Math.ceil(Math.random() * 10);
    quotes = [
        '欢迎光临',
        '请注意本信息',
        '感谢你使用本书',
        'javascript，不错的特效语言',
        '本特效可以用于写欢迎词',
        '每次进入，这里的信息都可以刷新',
        '你听不懂滴',
        '人的才华就如海绵的水，没有外力的挤压，它是绝对流不出来的。流出来后，海绵才能吸收新的源泉。',
        '时间很贪婪——有时候，它会独自吞噬所有的细节。',
        '在人人都自私的地方，智者不仅不比愚者好，反而比愚者还危险',
        '坚持下去，并不是我们真的足够坚强，而是我们别无选择。',
        '迷恋是一种吞噬。',
        '只要有你在，我就无所不能。',
        '这是我一贯的主张，我认为最有效的管教就是疼痛。',
        '什么都无法舍弃的人，什么也改变不了。',
        '远的就像隔着一片海去喊另一个人的身影。',
        '有些人总是会让你不顾一切想要保护的',
        '谢谢你总是在我需要你的时候掉链子。',
        '社会最大的悲剧不是坏人的嚣张，而是好人的沉默。',
        '再温柔的拒绝，成分里总归有嘲笑。',
        '孤独就是连放屁都只能一个人闻。',
        '给他们面子是我自己要面子',
        '你快去洗头吧，顺便洗洗脑子',
        '班上连一个让我起色心的都没有'
    ]
    return quotes[rand];
}

// 联系人接口辅助函数
var familyNames = new Array(
    "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
    "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
    "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
    "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
    "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
    "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
    "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
    "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
    "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
    "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
);
var givenNames = new Array(
    "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
    "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
    "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
    "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
    "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
    "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
    "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
    "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
    "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
    "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
);
var familyNamesSortkey = new Array(
    'zhao', 'qian', 'sun', 'li', 'zhou', 'wu', 'zheng', 'wang', 'feng', 'chen',
    'chu', 'wei', 'jiang', 'shen', 'han', 'yang', 'zhu', 'qin', 'you', 'xu',
    'he', 'lv', 'shi', 'zhang', 'kong', 'cao', 'yan', 'hua', 'jin', 'wei',
    'tao', 'jiang', 'qi', 'xie', 'zou', 'yu', 'bai', 'shui', 'dou', 'zhang',
    'yun', 'su', 'pan', 'ge', 'xi', 'fan', 'peng', 'lang', 'lu', 'wei',
    'chang', 'ma', 'miao', 'feng', 'hua', 'fang', 'yu', 'ren', 'yuan', 'liu',
    'yin', 'bao', 'shi', 'tang', 'fei', 'lian', 'cen', 'xue', 'lei', 'he',
    'ni', 'tang', 'teng', 'yin', 'luo', 'bi', 'hao', 'wu', 'an', 'chang',
    'le', 'yu', 'shi', 'fu', 'pi', 'bian', 'qi', 'kang', 'wu', 'yu',
    'yuan', 'bu', 'gu', 'meng', 'ping', 'huang', 'he', 'mu', 'xiao', 'yin'
);
var givenNamesSortkey = new Array(
    'zi,xuan', 'miao', 'guo,dong', 'fu,zi', 'rui,tang', 'tian', 'min', 'shang', 'guo,xian', 'he,xiang', 'chen,tao',
    'hao,xuan', 'yi,xuan', 'yi,chen', 'yi,fan', 'yi,ran', 'jin, chun', 'jin,kun', 'chun,qi', 'yang', 'wen,hao',
    'dong,dong', 'xiong,lin', 'hao,chen', 'xi,han', 'rong,rong', 'bing,feng', 'xin,xin', 'yi,hao', 'xin,hui', 'jian,zheng',
    'mei,xin', 'shu,hui', 'wen,xuan', 'wen,jie', 'xin,yuan', 'zhong,lin', 'rong,run', 'xin,ru', 'hui,jia', 'xin,jian',
    'jian,lin', 'yi,fei', 'lin', 'bing,jie', 'jia,xin', 'han,han', 'yu,chen', 'chun,mei', 'ze,hui', 'wei,yang',
    'han,yue', 'run,li', 'xiang', 'shu,hua', 'jing,ying', 'ling,jing', 'ran,xi', 'yu,han', 'jia,yi', 'jia,yi',
    'zi,chen', 'jia,qi', 'zi,xuan', 'rui,chen', 'xin,rui', 'meng', 'ming,yuan', 'xin,yi', 'ze,yuan', 'xin,yi',
    'jia,yi', 'jia,hui', 'chen,qian', 'chen,lu', 'yun,hao', 'ru,xin', 'shu,jun', 'jing,ying', 'run,sha', 'rong,shan',
    'jia,yu', 'jia,yu', 'xiao,qing', 'yi,ming', 'yu,chen', 'tian,chi', 'tian,hao', 'yu,ze', 'ya,han', 'ya,han',
    'qing,yan', 'shi,yue', 'jia,le', 'chen,han', 'tian,he', 'yue,ao', 'jia,hao', 'tian,hao', 'meng,meng', 'ruo,meng'
)

module.exports = function(app) {
    app.get('/c/browser/index/getuserdevicelist', function(req, res) {
        res.json({
            "returnCode": 200,
            "returnMessage": "",
            "returnValue": [{
                "sn": "U10AFBP422276",
                "imei": "861643030047687",
                "name": "MEIZU U680Q",
                "type": null,
                "status": 1,
                "upgrade": false,
                "logout": true,
                "deviceModel": "U68CA"
            }, {
                "sn": "91CUBNA222R8",
                "imei": "860922030014868",
                "name": "MLNOTE3",
                "type": null,
                "status": 0,
                "upgrade": false,
                "logout": true,
                "deviceModel": "L6810"
            }, {
                "sn": "71MBBKP0002W",
                "imei": "866190021014529",
                "name": "MlNOTE",
                "type": null,
                "status": 1,
                "upgrade": false,
                "logout": true,
                "deviceModel": "M4633"
            }, {
                "sn": "S25QACP42347D",
                "imei": "861936030042017",
                "name": "魅蓝 metal2",
                "type": null,
                "status": 0,
                "upgrade": false,
                "logout": true,
                "deviceModel": "M68B0"
            }],
            "returnUrl": ""
        })
    });
}
