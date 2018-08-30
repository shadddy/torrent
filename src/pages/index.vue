<template>
	<div class="index">
		<my-header></my-header>
		<!--Torrent-Trader 7.0下载-->
		<div class="banner-1">
			<div class="container">
				<div class="content">
					<h1>Torrent-Trader7.0</h1>
					<h2>定制化的专业级多界面看盘软件</h2>
					<div class="download">立即下载</div>
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
				<div class="custom-item-2">
					<div>
						<span>松鼠快投APP</span>
						<span>新手用户首选软件</span>
					</div>

				</div>

				<div class="custom-item-2">
					<div>
						<span>手机炒汇理财</span>
						<span>随身的财富管家</span>
					</div>

				</div>
				<div class="custom-item-2">
					<div>
						<span>智能跟单社区</span>
						<span>轻松下单轻松投</span>
					</div>

				</div>
			</div>
		</div>
		<!--banner-->
		<div class="banner-2">
			<el-carousel height="39vw">
				<el-carousel-item v-for="(item,index) in bannerList" :key="index">
					<img :src="item.src" />
					<div class="content">
						<h1>{{item.title}}</h1>
						<h1>{{item.title2}}</h1>
						<p>{{item.txt}}</p>
						<span class="downloadBtn">
							立即下载
						</span>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<!--插件设计-->
		<div class="plugin">
			<div class="container">
				<h1>更多简单易用的插件设计</h1>
				<ul>
					<li v-for="item in pluginList">
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
						<img :src="item.img"/>
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

			}
		},

		computed: {
			bannerList() {
				return [{
					src: require('../../static/img/banner-1.jpg'),
					title: this.$t('banner.banner1.title'),
					title2: this.$t('banner.banner1.title2'),
					txt: this.$t('banner.banner1.txt')
				}, {
					src: require('../../static/img/banner-2.jpg'),
					title: this.$t('banner.banner2.title'),
					title2: this.$t('banner.banner2.title2'),
					txt: this.$t('banner.banner2.txt')
				}, {
					src: require('../../static/img/banner-3.jpg'),
					title: this.$t('banner.banner3.title'),
					title2: this.$t('banner.banner3.title2'),
					txt: this.$t('banner.banner3.txt')
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
					txt: this.$t('plugin.p2.txt')
				}, {
					img: require('../../static/img/plug-3.png'),
					title: this.$t('plugin.p3.title'),
					txt: this.$t('plugin.p3.txt')
				}, {
					img: require('../../static/img/plug-4.png'),
					title: this.$t('plugin.p4.title'),
					txt: this.$t('plugin.p4.txt')
				}, {
					img: require('../../static/img/plug-5.png'),
					title: this.$t('plugin.p5.title'),
					txt: this.$t('plugin.p5.txt')
				}, {
					img: require('../../static/img/plug-6.png'),
					title: this.$t('plugin.p6.title'),
					txt: this.$t('plugin.p6.txt')
				}, {
					img: require('../../static/img/plug-7.png'),
					title: this.$t('plugin.p7.title'),
					txt: this.$t('plugin.p7.txt')
				}, {
					img: require('../../static/img/plug-8.png'),
					title: this.$t('plugin.p8.title'),
					txt: this.$t('plugin.p8.txt')
				}, {
					img: require('../../static/img/plug-9.png'),
					title: this.$t('plugin.p9.title'),
					txt: this.$t('plugin.p9.txt')
				}, {
					img: require('../../static/img/plug-10.png'),
					title: this.$t('plugin.p10.title'),
					txt: this.$t('plugin.p10.txt')
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
			softwareList(){
				return [{
					txt:this.$t('software.txt1'),
					img:require('../../static/img/soft-1.png')
				},{
					txt:this.$t('software.txt2'),
					img:require('../../static/img/soft-2.png')
				},{
					txt:this.$t('software.txt3'),
					img:require('../../static/img/soft-3.png')
				},{
					txt:this.$t('software.txt4'),
					img:require('../../static/img/soft-4.png')
				},{
					txt:this.$t('software.txt5'),
					img:require('../../static/img/soft-5.png')
				},{
					txt:this.$t('software.txt6'),
					img:require('../../static/img/soft-6.png')
				},{
					txt:this.$t('software.txt7'),
					img:require('../../static/img/soft-7.png')
				},{
					txt:this.$t('software.txt8'),
					img:require('../../static/img/soft-8.png')
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
					color: #f9d681;
					font-weight: 500;
				}
				h2 {
					font-size: 32vw/@w;
					color: white;
				}
				.download {
					cursor: pointer;
					margin-top: 20vw/@w;
					width: 300vw/@w ;
					height: 78vw/@w;
					background: #f9d681;
					color: black;
					font-size: 20vw/@w;
					text-align: center;
					line-height: 78vw/@w;
					border-radius: 20vw/@w;
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
						background-color: #4286f5;
						background-image: url(../../static/img/icon-1.png);
						background-position: center;
						background-repeat: no-repeat;
						margin-right: 10px;
					}
					.right {
						width: 300px;
						h3 {
							margin-top: 20px;
						}
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
				padding: 60vw/@w 0 120vw/@w 0;
				.custom-item-2 {
					width: calc(100%/3);
					div {
						transition: .5s;
						-moz-transition: .5s;
						-ms-transition: .5s;
						-webkit-transition: .5s;
						width: 230vw/@w;
						padding: 15vw/@w 0;
						border-radius: 50px;
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
						background: #f9d681;
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
						color: white;
						font-size: 14vw/@w;
					}
					.downloadBtn {
						display: inline-block;
						background: #f9d681;
						color: black;
						font-size: 20vw/@w;
						text-align: center;
						padding: 20vw/@w 80vw/@w;
						cursor: pointer;
						border-radius: 40px;
						margin-top: 60vw/@w;
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
					li:hover {
						box-shadow: 0px 0px 15px #e6e6e6;
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
					width: 500vw/@w;
					margin-top: 200vw/@w;
					h1 {
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
		.software{
			.container{
				padding: 100vw/@w 0;
				h1{
					text-align: center;
				}
				ul{
					display: flex;
					flex-wrap: wrap;
					margin: 40vw/@w auto;
					li{
						text-align: center;
						width: 325px;
						padding: 50vw/@w 0;
						p{
							margin-top: 10vw/@w;
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