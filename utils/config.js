var DOMAIN = "www.kfape.cn";
var MINAPPTYPE = "1"; //小程序的类型，如果是企业小程序请填：0 ，如果是个人小程序请填：1
var WEBSITENAME = "KFAPE"; //网站名称
var ABOUTID = 274; //wordpress网站"页面"的id,注意这个"页面"是wordpress的"页面"，不是"文章"
var PAGECOUNT = '10'; //每页文章数目
var CATEGORIESID = 'all' //专题页显示全部的分类
var INDEXLISTTYPE = "all" //首页显示所有分类
var PAYTEMPPLATEID = 'hzKpxuPF2rw7O-qTElkeoE0lMwr0O4t9PJkLyt6v8rk'; //赞赏消息模版id
var REPLAYTEMPPLATEID = 'IiAVoBWP34u1uwt801rI_Crgen7Xl2lvAGP67ofJLo8'; //回复评论消息模版id
var ZANIMAGEURL = 'https://www.watch-life.net/images/2017/07/zsm400.jpg'; //微信赞赏的图片链接，用于个人小程序的赞赏
var LOGO = "../../images/logo-icon.png"; // 网站的logo图片
var POSTERIMGURL = "../../images/logo700.png"; //生成海报如果没有首图，使用此处设置的图片作为海报图片。
var DOWNLOADFILEDOMAIN = [{
		id: 1,
		domain: 'www.kfape.cn'
	},
	{
		id: 2,
		domain: 'www.kfape.cn'
	},
	{
		id: 3,
		domain: 'www.kfape.cn'
	}
]
var INDEXNAV = [{
		id: '1',
		name: '微店',
		image: '../../images/shop.png',
		url: 'pages/shelf/shelf',
		redirecttype: 'miniapp',
		appid: 'wx55ea6098e41af5c4',
		extraData: ''
	},
	{
		id: '2',
		name: '排行',
		image: '../../images/ranking.png',
		url: '../hot/hot',
		redirecttype: 'apppage',
		appid: '',
		extraData: ''
	},
	{
		id: '3',
		name: '教程',
		image: '../../images/app.png',
		url: '../list/list?categoryID=98',
		redirecttype: 'apppage',
		appid: '',
		extraData: ''
	},
]

export default {
	getDomain: DOMAIN,
	getWebsiteName: WEBSITENAME,
	getAboutId: ABOUTID,
	getPayTemplateId: PAYTEMPPLATEID,
	getPageCount: PAGECOUNT,
	getCategoriesID: CATEGORIESID,
	getIndexNav: INDEXNAV,
	getReplayTemplateId: REPLAYTEMPPLATEID,
	getMinAppType: MINAPPTYPE,
	getZanImageUrl: ZANIMAGEURL,
	getIndexListType: INDEXLISTTYPE,
	getLogo: LOGO,
	getPostImageUrl: POSTERIMGURL,
	getDownloadFileDomain: DOWNLOADFILEDOMAIN
}
