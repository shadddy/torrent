<template>
	<div class="index">
		<my-header></my-header>
		<!--Torrent-Trader 7.0下载-->
		<div class="banner-1">
			<div class="container">
				<div class="content">
					<h1>{{$t('index.banner1.title')}}</h1>
					<h2>{{$t('index.banner1.title2')}}</h2>
					<div class="download" @click='download("FomiFX MT4 For Windows.exe")'>{{$t('index.banner1.btn')}}</div>
				</div>
			</div>
		</div>
		<!--自定义-->
		<div class="custom">
			<div class="container">
				<div class="custom-item">
					<div class="left"></div>
					<div class="right">
						<h3>自定义界面</h3>
						<p>可自主进行多个界面和窗口设置，便利操作</p>
					</div>

				</div>

				<div class="custom-item">
					<div class="left"></div>
					<div class="right">
						<h3>自定义流程</h3>
						<p>可自主进行图表、信息、模块及通知设置，符合习惯</p>
					</div>
				</div>

				<div class="custom-item">
					<div class="left"></div>
					<div class="right">
						<h3>自定义设置</h3>
						<p>可自主进行订单、数值、风控、预警设置，更加智能</p>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="custom-item-2" @mouseenter="setBannerActive(0)">
					<div>
						<span>松鼠快投APP</span>
						<span>新手用户首选软件</span>
					</div>

				</div>

				<div class="custom-item-2" @mouseenter="setBannerActive(1)">
					<div>
						<span>手机炒汇理财</span>
						<span>随身的财富管家</span>
					</div>

				</div>
				<div class="custom-item-2" @mouseenter="setBannerActive(2)">
					<div>
						<span>智能跟单社区</span>
						<span>轻松下单轻松投</span>
					</div>

				</div>
			</div>
		</div>
		<!--banner-->
		<div class="banner-2">
			<el-carousel height="39vw" ref="carousel" @change="bannerChange()" :autoplay="false">
				<el-carousel-item v-for="(item,index) in bannerList" :key="index">
					<img :src="item.src" />
					<div class="content">
						<h1>{{item.title}}</h1>
						<h1>{{item.title2}}</h1>
						<p>{{item.txt}}</p>
						<!--<span class="downloadBtn">
							立即下载
						</span>
						<img :src="item.wechat" class="wechat"/>-->
						<span class="downloadBtn" v-for="i in item.btns" @mouseenter="showCode(i.url)" @mouseleave="hideCode">
							{{i.name}}
						</span>
						<img :src="currentCode" class="wechat" v-show="wechatShow" />

					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<!--插件设计-->
		<div class="plugin">
			<div class="container">
				<h1>更多简单易用的插件设计</h1>
				<ul>
					<li v-for="(item,index) in pluginList" @click="Router(index,item.url)">
						<img :src="item.img" />
						<h3>{{item.title}}</h3>
						<p>{{item.txt}}</p>
					</li>
				</ul>
			</div>

		</div>
		<!--iMac-->
		<div class="iMac">
			<div class="container">
				<div class="content">
					<h1>{{$t('iMac.title')}}</h1>
					<h6>{{$t('iMac.title2')}}</h6>
					<ul>
						<li v-for="item in iMacList">
							{{item.txt}}
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--更多使用软件-->
		<div class="software">
			<div class="container">
				<h1>{{$t('software.title')}}</h1>
				<ul>
					<li v-for="item in softwareList">
						<img :src="item.img" />
						<p>{{item.txt}}</p>
					</li>
				</ul>
			</div>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import header from '@/components/header'
	import footer from '@/components/footer'
	export default {
		components: {
			myHeader: header,
			myFooter: footer
		},
		data() {
			return {
				itemIndex: 0, //banner图当前索引
				wechatShow: false,
				currentCode: require('../../static/img/erweima.png')
			}
		},
		mounted() {
			$.ajax({
				type: 'post',
				url: '/api/interface/qaq.php',
				data:{
					language:2
				},
				dataType: 'json',
				success: function(data) {
					console.log(data)
				}
			})
		},
		methods: {
			download(url) {
				//				window.open('http://www.fomifx.com/download/FomiFX MT5 For Windows.exe')
				//				this.$func('http://www.fomifx.com/download/FomiFX MT5 For Windows.exe')
				this.downloadFuc(url)
			},
			Router: function(index, str) {
				if(index == 1 || index == 9) {
					if(str == "" || str == undefined) {
						return false;
					}
					if(str == "/") {
						str = "";
					}
					let strs = str;
					if(strs == "index") {
						strs = '';
					}
					this.$router.push('/' + strs);
				} else {
					this.download(str)
				}
			},
			setBannerActive: function(val) {
				this.$refs.carousel.setActiveItem(val)

			},
			//改变banner图当前索引
			bannerChange(index) {
				if(this.itemIndex > 2) {
					this.itemIndex = -1
				}
				this.itemIndex++
			},
			showCode(val) {
				this.wechatShow = true
				this.currentCode = val
			},
			hideCode() {
				this.wechatShow = false
			}

		},
		computed: {
			bannerList() {
				return [{
					src: require('../../static/img/banner-1.jpg'),
					title: this.$t('banner.banner1.title'),
					title2: this.$t('banner.banner1.title2'),
					txt: this.$t('banner.banner1.txt'),
					btns: [{
						name: '扫码下载',
						url: require('../../static/img/erweima.png')
					}],
					wechatShow: false
				}, {
					src: require('../../static/img/banner-2.jpg'),
					title: this.$t('banner.banner2.title'),
					title2: this.$t('banner.banner2.title2'),
					txt: this.$t('banner.banner2.txt'),
					btns: [{
						name: 'MT4环境下载',
						url: require('../../static/img/erweima.png')
					}, {
						name: 'MT5环境下载',
						url: require('../../static/img/erweima.png')
					}],
					wechatShow: false
				}, {
					src: require('../../static/img/banner-3.jpg'),
					title: this.$t('banner.banner3.title'),
					title2: this.$t('banner.banner3.title2'),
					txt: this.$t('banner.banner3.txt'),
					btns: [{
						name: '安卓手机下载',
						url: require('../../static/img/erweima.png')
					}, {
						name: '苹果手机下载',
						url: require('../../static/img/erweima.png')
					}],
					wechatShow: false
				}]
			},
			pluginList() {
				return [{
					img: require('../../static/img/plug-1.png'),
					title: this.$t('plugin.p1.title'),
					txt: this.$t('plugin.p1.txt')
				}, {
					img: require('../../static/img/plug-2.png'),
					title: this.$t('plugin.p2.title'),
					txt: this.$t('plugin.p2.txt'),
					url: 'bigdata'
				}, {
					img: require('../../static/img/plug-3.png'),
					title: this.$t('plugin.p3.title'),
					txt: this.$t('plugin.p3.txt'),
					url: 'Fomi佣金设置器.pdf'
				}, {
					img: require('../../static/img/plug-4.png'),
					title: this.$t('plugin.p4.title'),
					txt: this.$t('plugin.p4.txt'),
					url: 'Fomi持仓控制器.pdf'
				}, {
					img: require('../../static/img/plug-5.png'),
					title: this.$t('plugin.p5.title'),
					txt: this.$t('plugin.p5.txt'),
					url: 'Fomi对冲引擎.pdf'
				}, {
					img: require('../../static/img/plug-6.png'),
					title: this.$t('plugin.p6.title'),
					txt: this.$t('plugin.p6.txt'),
					url: 'Fomi配资管理器.pdf'
				}, {
					img: require('../../static/img/plug-7.png'),
					title: this.$t('plugin.p7.title'),
					txt: this.$t('plugin.p7.txt'),
					url: 'Fomi跟单达人.pdf'
				}, {
					img: require('../../static/img/plug-8.png'),
					title: this.$t('plugin.p8.title'),
					txt: this.$t('plugin.p8.txt')
				}, {
					img: require('../../static/img/plug-9.png'),
					title: this.$t('plugin.p9.title'),
					txt: this.$t('plugin.p9.txt'),
					url: 'Fomi智能风险管理器.pdf'
				}, {
					img: require('../../static/img/plug-10.png'),
					title: this.$t('plugin.p10.title'),
					txt: this.$t('plugin.p10.txt'),
					url: 'table'
				}]
			},
			iMacList() {
				return [{
					txt: this.$t('iMac.txt1')
				}, {
					txt: this.$t('iMac.txt2')
				}, {
					txt: this.$t('iMac.txt3')
				}, {
					txt: this.$t('iMac.txt4')
				}, {
					txt: this.$t('iMac.txt5')
				}, {
					txt: this.$t('iMac.txt6')
				}, {
					txt: this.$t('iMac.txt7')
				}, {
					txt: this.$t('iMac.txt8')
				}]
			},
			softwareList() {
				return [{
					txt: this.$t('software.txt1'),
					img: require('../../static/img/soft-1.png')
				}, {
					txt: this.$t('software.txt2'),
					img: require('../../static/img/soft-2.png')
				}, {
					txt: this.$t('software.txt3'),
					img: require('../../static/img/soft-3.png')
				}, {
					txt: this.$t('software.txt4'),
					img: require('../../static/img/soft-4.png')
				}, {
					txt: this.$t('software.txt5'),
					img: require('../../static/img/soft-5.png')
				}, {
					txt: this.$t('software.txt6'),
					img: require('../../static/img/soft-6.png')
				}, {
					txt: this.$t('software.txt7'),
					img: require('../../static/img/soft-7.png')
				}, {
					txt: this.$t('software.txt8'),
					img: require('../../static/img/soft-8.png')
				}]
			}
		}
	}
</script>

<style scoped lang="less">
	@w: 19.2;
	.index {
		.el-main {
			padding: 0;
		}
		.banner-1 {
			position: relative;
			width: 100%;
			height: 800vw/@w;
			background-image: url(../../static/img/bg-1.jpg);
			background-size: 100% 100%;
			padding-top: 270vw/@w;
			.content {
				width: 500vw/@w;
				h1 {
					font-size: 54vw/@w;
					color: #e61737;
					font-weight: 500;
				}
				h2 {
					font-size: 32vw/@w;
					color: white;
					margin: 20vw/@w 0 60vw/@w 0;
				}
				.download {
					transition: .5s;
					-moz-transition: .5s;
					-ms-transition: .5s;
					-webkit-transition: .5s;
					cursor: pointer;
					margin-top: 20vw/@w;
					width: 300vw/@w ;
					height: 78vw/@w;
					background: #e61737;
					border: 1px solid #e61737;
					color: white;
					font-size: 20vw/@w;
					text-align: center;
					line-height: 78vw/@w;
					border-radius: 40vw/@w;
				}
				.download:hover {
					background: transparent;
					color: #e61737;
				}
			}
		}
		.custom {
			overflow: hidden;
			.container {
				padding: 120vw/@w 0 100vw/@w 0;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				.custom-item {
					display: flex;
					width: calc(1300px/3);
					.left {
						width: 90px;
						height: 90px;
						border-radius: 50%;
						background-color: #e61737;
						background-image: url(../../static/img/icon-1.png);
						background-position: center;
						background-repeat: no-repeat;
						margin-right: 20px;
					}
					.right {
						width: 300px;
						h3 {}
						p {
							margin-top: 10px;
							word-wrap: break-word;
						}
					}
				}
				.custom-item:nth-of-type(2) {
					.left {
						background-image: url(../../static/img/icon-2.png);
					}
				}
				.custom-item:nth-of-type(3) {
					.left {
						background-image: url(../../static/img/icon-3.png);
					}
				}
			}
			.container:nth-of-type(1) {
				border-bottom: 1px solid #ccc;
			}
			.container:nth-of-type(2) {
				padding: 40vw/@w 0 0vw/@w 0;
				.custom-item-2 {
					width: calc(100%/3);
					div {
						/*transition: .5s;
						-moz-transition: .5s;
						-ms-transition: .5s;
						-webkit-transition: .5s;*/
						width: 230vw/@w;
						padding: 45vw/@w 0 60vw/@w 0;
						margin: 0 auto;
						span {
							display: block;
							text-align: center;
						}
						span:nth-of-type(1) {
							font-size: 20vw/@w;
							color: black;
						}
						span:nth-of-type(2) {
							font-size: 14vw/@w;
							color: rgba(0, 0, 0, 0.5);
						}
					}
					div:hover {
						background: #b61d22;
					}
					div:hover span {
						color: white;
					}
				}
				.custom-item-2.active {
					div {
						background: #b61d22;
					}
					div span {
						color: white
					}
				}
			}
		}
		.banner-2 {
			.el-carousel__container {
				img {
					width: 100%;
					height: 100%;
				}
				.content {
					position: absolute;
					top: 150vw/@w;
					left: 350vw/@w;
					max-width: 490vw/@w;
					h1 {
						font-size: 50vw/@w;
						color: #f9d681;
					}
					p {
						margin-top: 75vw/@w;
						margin-bottom: 50vw/@w;
						color: white;
						font-size: 14vw/@w;
					}
					.downloadBtn {
						transition: .5s;
						-moz-transition: .5s;
						-ms-transition: .5s;
						-webkit-transition: .5s;
						display: inline-block;
						background: #f9d681;
						border: 1px solid #f9d681;
						color: black;
						font-size: 20vw/@w;
						text-align: center;
						padding: 20vw/@w 80vw/@w;
						cursor: pointer;
						border-radius: 40px;
						margin-top: 10vw/@w;
					}
					.downloadBtn:hover {
						background: transparent;
						color: #f9d681;
					}
					.wechat {
						width: 150vw/@w;
						height: 150vw/@w;
						display: block;
						position: absolute;
						right: 0;
						top: 300vw/@w;
					}
				}
			}
		}
		.plugin {
			.container {
				padding: 90vw/@w 0;
				h1 {
					text-align: center;
					padding-top: 40vw/@w;
					padding-bottom: 110vw/@w;
					font-weight: 500;
				}
				ul {
					display: flex;
					flex-wrap: wrap;
					margin: 0 auto;
					li {
						cursor: pointer;
						transition: .5s;
						border-top: 1px solid #e6e6e6;
						border-right: 1px solid #e6e6e6;
						text-align: center;
						width: 260px;
						padding: 50vw/@w 0;
						img {
							width: 60vw/@w;
							height: 60vw/@w;
						}
						h3 {
							margin-top: 20vw/@w;
							font-size: 20vw/@w;
						}
						p {
							margin-top: 10vw/@w;
							font-size: 14vw/@w;
						}
					}
					li:nth-of-type(1) {
						background: #e61737;
						color: white;
					}
					li:nth-of-type(1),
					li:nth-of-type(6) {
						border-left: 1px solid #e6e6e6;
					}
					li:nth-of-type(6),
					li:nth-of-type(7),
					li:nth-of-type(8),
					li:nth-of-type(9),
					li:nth-of-type(10) {
						border-bottom: 1px solid #e6e6e6;
					}
					li:not(:first-child):hover {
						/*box-shadow: 0px 0px 25px #e6e6e6;*/
						background: #E0E0E0;
						transform: scale(1.05);
					}
				}
			}
		}
		.iMac {
			width: 100%;
			height: 1023vw/@w;
			background-image: url(../../static/img/iMac.jpg);
			background-size: 100% 100%;
			position: relative;
			overflow: hidden;
			.container {
				.content {
					width: 540vw/@w;
					margin-top: 200vw/@w;
					h1 {
						background: #971f31;
						padding: 18vw/@w 14vw/@w;
						color: white;
						font-size: 50vw/@w;
						margin-bottom: 40vw/@w;
					}
					h6 {
						color: #ccc;
						font-size: 14vw/@w;
						margin-bottom: 70vw/@w;
					}
					ul {
						li {
							background-image: url(../../static/img/checked.png);
							background-repeat: no-repeat;
							background-position: left;
							padding-left: 30px;
							color: #ccc;
							font-size: 14px;
							line-height: 40vw/@w;
						}
					}
				}
			}
		}
		.software {
			.container {
				padding: 100vw/@w 0;
				h1 {
					text-align: center;
				}
				ul {
					display: flex;
					flex-wrap: wrap;
					margin: 40vw/@w auto;
					li {
						text-align: center;
						width: 325px;
						padding: 50vw/@w 0;
						p {
							margin-top: 10vw/@w;
						}
					}
				}
			}
		}
	}
	
	@media only screen and (max-width:768px) {
		.index {
			.banner-1 {
				padding-top: 180vw/@w;
				padding-left: 100vw/@w;
				.content {
					width: 800vw/@w;
					h1 {
						font-size: 20px;
					}
					h2 {
						font-size: 10px;
					}
					.download {
						width: 100px;
						height: 20px;
						font-size: 10px;
						line-height: 20px;
					}
				}
			}
			.custom {
				.container {
					.custom-item {}
				}
			}
			.banner-2 {
				.el-carousel__container {
					.content {
						left: 10px;
						top: 10px;
						max-width: 190px;
						p {
							font-size: 10px;
							margin-top: 0;
						}
						.downloadBtn {
							margin-top: 5px;
						}
					}
				}
			}
			.plugin {
				.container {
					h1 {
						font-size: 20px;
					}
					ul {
						li {
							width: 50%;
						}
					}
				}
			}
			.iMac {
				.container {
					.content {
						margin-top: 5px;
						width: 300px;
						ul {
							li {
								line-height: 16px;
								font-size: 10px;
							}
						}
					}
				}
			}
			.software {
				.container {
					h1 {
						font-size: 20px;
					}
					ul {
						li {
							width: 50%;
						}
					}
				}
			}
		}
	}
	
	@media only screen and (max-width:1300px) {
		.index {
			.custom {
				.container {
					.custom-item {
						width: 100%;
					}
				}
			}
		}
	}
</style>