/*通讯录所以联系人
*	wxid:微信号
*	headurl:头像图片地址
*	petname:昵称
*	sex:性别(男0女1)
*	remarks:备注
* 	sdasd:个性签名
*	phone:电话号码
*	gallery:相册
*	district:地区
*	source:添加来源
*	Messageblob:对话内容,
*	newmeassage:对话最新一条消息
*	sendobject:发送信息的对象(1是别人0是自己)
*
*
*
*	imgurl:图片地址
*/	
import {imgurl} from 'src/config/env';


//同学录数据
export const contacts = {
A:[
	{
		"wxid":"achuqiao",
		"headurl":imgurl+'chuqiao.jpg',
		"petname":"a楚乔",
		"sex":1,
		"remarks":"楚乔",
		"sdasd":"披荆斩棘",
		"phone":"13333333333",
		"sendobject":1,
		"gallery":[
			imgurl+'yuwenyue.jpg',imgurl+'c.jpg',imgurl+'chenchangsheng.jpg'
		],
		"district":"奴籍少女",
		"source":"通过搜索手机号添加",
		"newmeassage":"从前有个剑客，他人很冷，心很冷，剑很冷，最后冷死了",
		"sendobject":1,
		"Messageblob":[
			"有位非常漂亮的女同事，有天起晚了没有时间化妆便急忙冲到公司。结果那天她被记旷工了。。。。",
			"你病，或者不病倒，老板就在那里，不悲不喜；你休，或者不休假，工作就在那里，不来不去；你拼，或者不拼命，工资就在那里，不增不减；你辞，或者不辞职，地球还是会转，不歇不停",
			"从前有个剑客，他人很冷，心很冷，剑很冷，最后冷死了",
		],
	},
	{//没有备注
		"wxid":"ayuwenyue",
		"headurl":imgurl+'yuwenyue.jpg',
		"petname":"a宇文玥",
		"sex":0,
		"remarks":"",
		"sdasd":"涅槃而生",
		"phone":"13000000000",
		"gallery":[
			imgurl+'wudaoya.jpg',imgurl+'h.jpg',imgurl+'hexiao.jpg'
		],
		"district":"宇文府",
		"source":"通过搜索微信号添加",
		"newmeassage":"你的肩膀，那么近却那么远，到最后想说的话都未曾讲。!",
		"sendobject":1,
		"Messageblob":[
			"人生没有彩排，每天都是直播，不仅收视率低，而且工资不高。",
			"看庭前花开花落，荣辱不惊，望天上云卷云舒，去留无意。",
			"你的肩膀，那么近却那么远，到最后想说的话都未曾讲。",
			"从前有个剑客，他人很冷，心很冷，剑很冷，最后冷死了。",
		],
	}
],
B:[],
C:[
	{
		"wxid":"caiawei",
		"headurl":imgurl+'caiwei.jpg',
		"petname":"采薇",
		"sex":1,
		"remarks":"",
		"sdasd":"",
		"phone":"13000000000",
		"gallery":[
			imgurl+'caiwei.jpg',imgurl+'lichun.jpg',
		],
		"district":"淳公主的侍女",
		"source":"通过群聊添加",
		"newmeassage":"一发型师在给一个女客人做头发的时候把她脸给烫伤了，后来经过协商。。。。他把她给娶了。。。",
		"sendobject":1,
		"Messageblob":[
			"诺贝尔奖为什么没有数学奖？",
			"看庭前花开花落，荣辱不惊，望天上云卷云舒，去留无意。",
			"一发型师在给一个女客人做头发的时候把她脸给烫伤了，后来经过协商。。。。他把她给娶了。。。",
		],
	},
	{
		"wxid":"chenchangsheng",
		"headurl":imgurl+'chenchangsheng.jpg',
		"petname":"陈长生",
		"sex":0,
		"remarks":"",
		"sdasd":"逆天改命",
		"phone":"13002566500",
		"gallery":[
			imgurl+'b1.jpg',imgurl+'chenchangsheng.jpg',imgurl+'xiaoyu.jpg'
		],
		"district":"河边",
		"source":"通过搜索微信号添加",
		"newmeassage":"你因为穷做过什么违心的事？——上班。",
		"sendobject":1,
		"Messageblob":[
			"诺贝尔奖为什么没有数学奖？",
			"你因为穷做过最违心的事情是什么？——加班。",
			"你因为穷做过什么违心的事？——上班。",
		],
	},
	{
		"wxid":"chenyuan",
		"headurl":imgurl+'chenyuan.jpg',
		"petname":"程鸢",
		"sex":0,
		"remarks":"",
		"sdasd":"",
		"phone":"13002566500",
		"gallery":[
			imgurl+'b1.jpg',imgurl+'chenyuan.jpg',imgurl+'yexun.jpg'
		],
		"district":"燕洵手下将军",
		"source":"通过群聊添加",
		"newmeassage":"跟长辈聊天时，我们总是用尽方法想讨他们开心，而长辈三言两语就可以让我们烦心。",
		"sendobject":1,
		"Messageblob":[
			"诺贝尔奖为什么没有数学奖？",
			"你因为穷做过最违心的事情是什么？——加班。",
			"跟长辈聊天时，我们总是用尽方法想讨他们开心，而长辈三言两语就可以让我们烦心。",
		],
	},
],
D:[
{
	"wxid":"dinglan",
	"headurl":imgurl+'dinglan.jpg',
	"petname":"丁澜",
	"sex":0,
	"remarks":"临惜",
	"sdasd":"",
	"phone":"13002566500",
	"gallery":[
		imgurl+'b1.jpg',imgurl+'chenyuan.jpg',imgurl+'yexun.jpg'
	],
	"district":"楚乔的五哥",
	"source":"通过搜索微信号添加",
	"newmeassage":"越是没有能力改变自己生活的人，越喜欢批评别人的改变。",
	"sendobject":1,
	"Messageblob":[
		"诺贝尔奖为什么没有数学奖？",
		"你因为穷做过最违心的事情是什么？——加班。",
		"越是没有能力改变自己生活的人，越喜欢批评别人的改变。",
	],
}
],
E:[],
F:[
	{
		"wxid":"fengmian",
		"headurl":imgurl+'fengmian.jpg',
		"petname":"风眠",
		"sex":0,
		"remarks":"风眠",
		"sdasd":"",
		"phone":"13002566500",
		"gallery":[
			imgurl+'b1.jpg',imgurl+'fengmian.jpg',imgurl+'yuanchun.jpg'
		],
		"district":"燕洵的书童",
		"source":"通过群聊添加",
		"newmeassage":"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
		"sendobject":1,
		"Messageblob":[
			"诺贝尔奖为什么没有数学奖？",
			"你因为穷做过最违心的事情是什么？——加班。",
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
		],
	}
],
G:[],
H:[
	{
		"wxid":"hexiao",
		"headurl":imgurl+'hexiao.jpg',
		"petname":"贺萧",
		"sex":0,
		"remarks":"",
		"sdasd":"",
		"phone":"13002566500",
		"gallery":[
			imgurl+'b1.jpg',imgurl+'fengmian.jpg',imgurl+'yuanchun.jpg'
		],
		"district":"燕洵的书童",
		"source":"通过搜索手机号添加",
		"source":"通过群聊添加",
		"newmeassage":"全国人民都上听了，单吊敬业福。",
		"sendobject":1,
		"Messageblob":[
			"诺贝尔奖为什么没有数学奖？",
			"你因为穷做过最违心的事情是什么？——加班。",
			"全国人民都上听了，单吊敬业福。",
		],
	}
],
I:[],
J:[
	{
		"wxid":"jinghan",
		"headurl":imgurl+'jinghan.jpg',
		"petname":"景邯",
		"sex":0,
		"remarks":"",
		"sdasd":"",
		"phone":"13000000000",
		"gallery":[
			imgurl+'jinghan.jpg',imgurl+'zhongyu.jpg',
		],
		"district":"大夏云绸封地景小王爷",
		"source":"通过群聊添加",
		"source":"通过群聊添加",
		"newmeassage":"春节发现，原来“喜新厌旧”还可以说成“辞旧迎新”这般高尚！",
		"sendobject":1,
		"Messageblob":[
			"诺贝尔奖为什么没有数学奖？",
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
			"春节发现，原来“喜新厌旧”还可以说成“辞旧迎新”这般高尚！",
		],
	},
	{
		"wxid":"jingsi",
		"headurl":imgurl+'jingsi.jpg',
		"petname":"锦偲",
		"sex":1,
		"remarks":"",
		"sdasd":"",
		"phone":"13000000000",
		"gallery":[
			imgurl+'jingsi.jpg',imgurl+'yuwenyue.jpg',
		],
		"district":"青山院大丫鬟",
		"source":"通过群聊添加",
		"newmeassage":"刚领导问我：“你觉得这个项目最大的风险是什么？” ，我：“我怕加班猝死。。。”",
		"sendobject":1,
		"Messageblob":[
			"诺贝尔奖为什么没有数学奖？",
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
			"刚领导问我：“你觉得这个项目最大的风险是什么？” ，我：“我怕加班猝死。。。”",
		],
	},
],
K:[],
L:[
	{
		"wxid":"lanshuyi",
		"headurl":imgurl+'lanshuyi.jpg',
		"petname":"兰淑仪",
		"sex":1,
		"remarks":"兰淑仪",
		"sdasd":"",
		"phone":"13000000000",
		"gallery":[
			imgurl+'lanshuyi.jpg',imgurl+'yuwenyue.jpg',
		],
		"district":"大魏淑仪，来历成谜。",
		"source":"通过群聊添加",
		"newmeassage":"名人用过的东西叫“文物”；凡人用过的视为“废物”。",
		"sendobject":1,
		"Messageblob":[
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
			"诺贝尔奖为什么没有数学奖？",
			"名人用过的东西叫“文物”；凡人用过的视为“废物”。",
		],
	},
	{
		"wxid":"liangshaoqing",
		"headurl":imgurl+'liangshaoqing.jpg',
		"petname":"梁少卿",
		"sex":0,
		"remarks":"",
		"sdasd":"",
		"phone":"13000000000",
		"gallery":[
			imgurl+'lanshuyi.jpg',imgurl+'yuwenyue.jpg',
		],
		"district":"二货书生",
		"source":"通过搜索手机号添加",
		"newmeassage":"名人酗酒称“豪饮”；凡人多喝叫“贪杯”。",
		"sendobject":1,
		"Messageblob":[
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
			"诺贝尔奖为什么没有数学奖？",
			"名人酗酒称“豪饮”；凡人多喝叫“贪杯”。",
		],
	},
	{
		"wxid":"lichun",
		"headurl":imgurl+'lichun.jpg',
		"petname":"李策",
		"sex":0,
		"remarks":"",
		"sdasd":"默默守护",
		"phone":"13000000000",
		"gallery":[
			imgurl+'lanshuyi.jpg',imgurl+'yuwenyue.jpg',
		],
		"district":"南梁太子",
		"source":"通过群聊添加",
		"newmeassage":"名人蓬头垢面谓“艺术气质”；凡人不修边幅叫“流里流气”。",
		"sendobject":1,
		"Messageblob":[
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
			"诺贝尔奖为什么没有数学奖？",
			"名人蓬头垢面谓“艺术气质”；凡人不修边幅叫“流里流气”。",
		],
	},
],
M:[
	{
		"wxid":"mengfeng",
		"headurl":imgurl+'mengfeng.jpg',
		"petname":"蒙枫",
		"sex":1,
		"remarks":"",
		"sdasd":"我是个杀手！",
		"phone":"13000000000",
		"gallery":[
			imgurl+'mengfeng.jpg',imgurl+'yuwenyue.jpg',
		],
		"district":"往生营",
		"source":"通过搜索手机号添加",
		"newmeassage":"名人的空话谓“指导”；凡人的实话叫“唠叨”。",
		"sendobject":1,
		"Messageblob":[
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
			"诺贝尔奖为什么没有数学奖？",
			"名人的空话谓“指导”；凡人的实话叫“唠叨”。",
		],
	},
],
N:[],
O:[],
P:[],
Q:[],
R:[],
S:[
	{
		"wxid":"shugeuifei",
		"headurl":imgurl+'shugeuifei.jpg',
		"petname":"魏贵妃",
		"sex":1,
		"remarks":"",
		"sdasd":"本宫乏了~",
		"phone":"13000000000",
		"gallery":[
			imgurl+'mengfeng.jpg',imgurl+'yuwenyue.jpg',
		],
		"district":"魏阀",
		"source":"通过群聊添加",
		"newmeassage":"名人的空话谓“指导”；凡人的实话叫“唠叨”。",
		"sendobject":1,
		"Messageblob":[
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
			"诺贝尔奖为什么没有数学奖？",
			"名人的空话谓“指导”；凡人的实话叫“唠叨”。",
		],
	},
],
T:[],
U:[],
V:[],
W:[
	{
		"wxid":"wudaoya",
		"headurl":imgurl+'wudaoya.jpg',
		"petname":"乌道涯",
		"sex":0,
		"remarks":"",
		"sdasd":"本宫乏了~",
		"phone":"13000000000",
		"gallery":[
			imgurl+'wudaoya.jpg',imgurl+'zhaosong.jpg',
		],
		"district":"燕北",
		"source":"通过群聊添加",
		"newmeassage":"钱财多的回家少，美貌多的穿衣少，想法多的成事少，劳累多的收入少，权力多的时间少，情人多的安宁少，朋友多的困难少，锻炼多的疾病少。 ",
		"sendobject":1,
		"Messageblob":[
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
			"诺贝尔奖为什么没有数学奖？",
			"钱财多的回家少，美貌多的穿衣少，想法多的成事少，劳累多的收入少，权力多的时间少，情人多的安宁少，朋友多的困难少，锻炼多的疾病少。 ",
		],
	},
],
X:[	
	{
		"wxid":"xulianjie442154157",
		"headurl":imgurl+'chen.jpg',
		"petname":"百里辰",
		"sex":1,
		"sdasd":"披荆斩棘",
		"phone":"15800319949",
		"sendobject":0,
		"gallery":[
			imgurl+'chen.jpg',imgurl+'cangdu.jpg',imgurl+'b1.jpg'
		],
		"district":"上海 闵行",
		"newmeassage":"你的肩膀，那么近却那么远，到最后想说的话都未曾讲。",
		"Messageblob":[
		
		],
	},
	{
		"wxid":"xiaoheilong",
		"headurl":imgurl+'h.jpg',
		"petname":"小黑龙",
		"sex":1,
		"remarks":"吃货",
		"sdasd":"我是个小吃货，啦啦啦啦~",
		"phone":"13000000000",
		"gallery":[
			imgurl+'h.jpg',imgurl+'d.jpg',imgurl+'hu.jpg',
		],
		"district":"大陆道尊",
		"source":"通过群聊添加",
		"newmeassage":"皇叔是仁德的；爱民是如子的；特长是会哭的；眼泪是充足的。",
		"sendobject":1,
		"Messageblob":[
			"诺贝尔奖为什么没有数学奖？",
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
			"皇叔是仁德的；爱民是如子的；特长是会哭的；眼泪是充足的。",
		],
	},
	{
		"wxid":"xiaoyu",
		"headurl":imgurl+'xiaoyu.jpg',
		"petname":"萧玉",
		"sex":1,
		"remarks":"",
		"sdasd":"美女~",
		"phone":"13000000000",
		"gallery":[
			imgurl+'xiaoyu.jpg',imgurl+'yuwenyue.jpg'
		],
		"district":"南梁",
		"source":"通过群聊添加",
		"newmeassage":"孔明是伟大的；治国是有方的；用兵是如神的；放火是专长的。 ",
		"sendobject":1,
		"Messageblob":[
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
			"诺贝尔奖为什么没有数学奖？",
			"孔明是伟大的；治国是有方的；用兵是如神的；放火是专长的。 ",
		],
	}
],
Y:[
	{
		"wxid":"yexun",
		"headurl":imgurl+'yexun.jpg',
		"petname":"燕洵",
		"sex":1,
		"remarks":"",
		"sdasd":"楚乔......",
		"phone":"13000000000",
		"gallery":[
			imgurl+'yexun.jpg',imgurl+'yuwenyue.jpg'
		],
		"district":"西凉",
		"source":"通过群聊添加",
		"newmeassage":"庞统是可惜的；出场是很少的；长相是挺丑的；死的是很惨的。",
		"sendobject":1,
		"Messageblob":[
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
			"诺贝尔奖为什么没有数学奖？",
			"庞统是可惜的；出场是很少的；长相是挺丑的；死的是很惨的。",
		],
	},
	{
		"wxid":"yuanchun",
		"headurl":imgurl+'yuanchun.jpg',
		"petname":"元淳",
		"sex":1,
		"remarks":"",
		"sdasd":"喜欢燕洵",
		"phone":"13000000000",
		"gallery":[
			imgurl+'yuanchun.jpg',imgurl+'yuwenyue.jpg'
		],
		"district":"西魏公主",
		"source":"通过群聊添加",
		"newmeassage":"云长是红脸的；胡子是很长的；自负是肯定的；倒霉是迟早的。",
		"sendobject":1,
		"Messageblob":[
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
			"诺贝尔奖为什么没有数学奖？",
			"云长是红脸的；胡子是很长的；自负是肯定的；倒霉是迟早的。",
		],
	},
],
Z:[
	{
		"wxid":"zhaosong",
		"headurl":imgurl+'zhaosong.jpg',
		"petname":"赵嵩",
		"sex":1,
		"remarks":"",
		"sdasd":"小八小八小八",
		"phone":"13000000000",
		"gallery":[
			imgurl+'zhaosong.jpg',imgurl+'yuwenyue.jpg'
		],
		"district":"大魏十三皇子",
		"source":"通过群聊添加",
		"newmeassage":"翼德是莽撞的；粗中是有细的；嗓门是挺大的；睡觉是睁眼的。",
		"sendobject":1,
		"Messageblob":[
			"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
			"诺贝尔奖为什么没有数学奖？",
			"翼德是莽撞的；粗中是有细的；嗓门是挺大的；睡觉是睁眼的。",
		],
	},
	
]
}