<template>
	<div class="download">
		<my-header></my-header>
		<div class="part-1">
			<div class="content">
				<h1>{{$t('download.part1.title')}}</h1>
				<ul>
					<li v-for="item in part1">
						<img :src="item.icon">
						<p>{{item.txt}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="part-2">
			<div class="container">
				<div class="content_left">
					<h1>{{$t('download.part2.title')}}</h1>
					<p>{{$t('download.part2.title2')}}</p>
					<ul>
						<li>
							<span class="icon icon-1"></span>
							<span>{{$t('download.part2.txt1')}}</span>
						</li>
						<li>
							<span class="icon icon-2"></span>
							<span>{{$t('download.part2.txt2')}}</span>
						</li>
						<li>
							<span class="icon icon-3"></span>
							<span class="link" @click="download('FomiFX MT4下载安装说明-IOS版.pdf')">{{$t('download.part2.txt3.txt1')}}</span>
							<span class="link">{{$t('download.part2.txt3.txt2')}}</span>
							<span class="link">{{$t('download.part2.txt3.txt3')}}</span>
						</li>
					</ul>
					<div class="btn" @click="download('FomiFX MT4 For Windows.exe')">
						{{$t('download.part1.btn1')}}
					</div>
					<div class="btn" @click="download('FomiFX MT5 For Windows.exe')">
						{{$t('download.part1.btn2')}}
					</div>
					<!--<img :src="currentCode" v-show="codeShow" class="wechat" />-->
				</div>
			</div>
		</div>
		<div class="part-3">
			<div class="container">
				<div class="content_right">
					<h1>{{$t('download.part3.title')}}</h1>
					<p>{{$t('download.part3.title2')}}</p>
					<ul>
						<li>
							<span class="icon icon-1"></span>
							<span>{{$t('download.part2.txt1')}}</span>
						</li>
						<li>
							<span class="icon icon-2"></span>
							<span>{{$t('download.part2.txt2')}}</span>
						</li>
						<li>
							<span class="icon icon-3"></span>
							<span class="link"  @click="download('FomiFX MT4 手机版使用说明（IOS版）.pdf')">{{$t('download.part3.txt3.txt1')}}</span>
							<span class="link">{{$t('download.part3.txt3.txt2')}}</span>
							<span class="link">{{$t('download.part3.txt3.txt3')}}</span>
						</li>
					</ul>
					<div class="btn" @mouseenter="mobileShowCode1" @mouseleave="mobileHideCode" @click="download('net.metaquotes.metatrader4_400.1102_1102.apk')">
						{{$t('download.part1.btn1')}}
					</div>
					<div class="btn" @mouseenter="mobileShowCode2" @mouseleave="mobileHideCode" @click="download('FomiFX MT5 For Windows.exe')">
						{{$t('download.part1.btn2')}}
					</div>

				</div>
			</div>
			<div class="code-box" v-show="mobileCodeShow">
				<div>
					<h3>安卓手机下载</h3><img :src="mobileCodeCur1" /></div>
				<div>
					<h3>苹果手机下载</h3><img :src="mobileCodeCur2" /></div>
			</div>
		</div>
		<div class="part-4">
			<div class="container">
				<div class="content_left">
					<h1>{{$t('download.part4.title')}}</h1>
					<p>{{$t('download.part4.title2')}}</p>
					<ul>
						<li>
							<span class="icon icon-1"></span>
							<span>{{$t('download.part4.txt1')}}</span>
						</li>
						<li>
							<span class="icon icon-2"></span>
							<span>{{$t('download.part4.txt2')}}</span>
						</li>
						<li>
							<span class="icon icon-3"></span>
							<span class="link">{{$t('download.part4.txt3.txt1')}}</span>
							<span class="link">{{$t('download.part4.txt3.txt2')}}</span>
							<span class="link">{{$t('download.part4.txt3.txt3')}}</span>
						</li>
					</ul>
					<div class="btn" @mouseenter="" @mouseleave="" @click="download('SquirrelBond.apk')">
						{{$t('download.part3.btn1')}}
					</div>
					<!--					<img :src="currentCode" v-show="codeShow" class="wechat"/>-->
				</div>
			</div>
		</div>
		<div class="part-5">
			<div class="container">
				<div class="content_left content_left_right">
					<h1>{{$t('download.part5.title')}}</h1>
					<p>{{$t('download.part5.title2')}}</p>
					<ul>
						<li>
							<span class="icon icon-1"></span>
							<span>{{$t('download.part5.txt1')}}</span>
						</li>
						<li>
							<span class="icon icon-2"></span>
							<span>{{$t('download.part5.txt2')}}</span>
						</li>
						<li>
							<span class="icon icon-3"></span>
							<span class="link">{{$t('download.part5.txt3.txt1')}}</span>
							<span class="link">{{$t('download.part5.txt3.txt2')}}</span>
							<span class="link">{{$t('download.part5.txt3.txt3')}}</span>
						</li>
					</ul>
					<div class="btn" @mouseenter="socialShowCode" @mouseleave="socialHideCode" @click="download('socialtrading-plus.apk')">
						{{$t('download.btn')}}
					</div>
					<img :src="socialCode" v-show="socialShow" class="wechat" />
				</div>
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
				currentCode: require('../../static/img/erweima.png'),
				socialCode: require('../../static/img/social-code.png'),
				
				
				mobileCode1:require('../../static/img/download/MobileTrader For Android（MT4）.png'),
				mobileCode2:require('../../static/img/download/MobileTrader For IOS（MT4）.png'),
				mobileCode3:require('../../static/img/download/MobileTrader For Android（MT5）.png'),
				mobileCode4:require('../../static/img/download/MobileTrader For IOS（MT5）.png'),
				
				mobileCodeCur1:require('../../static/img/download/MobileTrader For Android（MT4）.png'),
				mobileCodeCur2:require('../../static/img/download/MobileTrader For IOS（MT4）.png'),
				mobileCodeShow: false,
				
				socialShow:false
			}
		},
		methods: {
			download(url) {
				this.downloadFuc(url)
			},
			mobileShowCode1(){
				this.mobileCodeShow=true
				this.mobileCodeCur1=this.mobileCode1
				this.mobileCodeCur2=this.mobileCode2
			},
			mobileShowCode2(){
				this.mobileCodeShow=true
				this.mobileCodeCur1=this.mobileCode3
				this.mobileCodeCur2=this.mobileCode4
			},
			mobileHideCode(){
				this.mobileCodeShow=false
			},
			socialShowCode(){
				this.socialShow=true
			},
			socialHideCode(){
				this.socialShow=false
			},
		},
		computed: {
			part1() {
				return [{
					txt: this.$t('download.part1.txt1'),
					icon: require('../../static/img/download/part1-icon-1.png')
				}, {
					txt: this.$t('download.part1.txt2'),
					icon: require('../../static/img/download/part1-icon-2.png')
				}, {
					txt: this.$t('download.part1.txt3'),
					icon: require('../../static/img/download/part1-icon-3.png')
				}]
			}
		}
	}
</script>

<style scoped lang="less">
	@w: 19.2;
	.part-1 {
		width: 100%;
		height: 800vw/@w ;
		background: url(../../static/img/download/download-1.jpg) no-repeat center;
		background-size: 100% 100%;
		.content {
			width: 640vw/@w;
			margin: 0 auto;
			padding-top: 210vw/@w;
			h1 {
				color: white;
				text-align: center;
				font-size: 54vw/@w;
				padding-bottom: 60vw/@w;
			}
			ul {
				display: flex;
				justify-content: space-between;
				li {
					img {
						width: 100vw/@w;
						display: block;
						margin: 0 auto;
					}
					p {
						margin-top: 35vw/@w;
						text-align: center;
						color: white;
						font-size: 30vw/@w;
					}
				}
			}
		}
	}
	
	.part-2 {
		width: 100%;
		height: 878vw/@w ;
		background: url(../../static/img/download/download-2.jpg) no-repeat center;
		background-size: 100% 100%;
	}
	
	.part-3 {
		position: relative;
		width: 100%;
		height: 839vw/@w ;
		background: url(../../static/img/download/download-3.jpg) no-repeat center;
		background-size: 100% 100%;
		.content_right {
			width: 560vw/@w;
			h1 {
				background: #e71737;
				padding: 14vw/@w 20vw/@w;
			}
		}
	}
	
	.part-4 {
		width: 100%;
		height: 811vw/@w ;
		background: url(../../static/img/download/download-4.jpg) no-repeat center;
		background-size: 100% 100%;
	}
	
	.part-5 {
		width: 100%;
		height: 879vw/@w ;
		background: url(../../static/img/download/download-5.jpg) no-repeat center;
		background-size: 100% 100%;
	}
	
	.icon {
		display: block;
		margin-right: 20vw/@w;
		width: 22px;
		height: 22px;
		
	}
	
	.link {
		margin-right: 10vw/@w;
		cursor: pointer;
		color: #e71737;
	}
	
	.btn {
		width: 250vw/@w;
		height: 66vw/@w;
		background: #e71737;
		border-radius: 40vw/@w;
		text-align: center;
		line-height: 66vw/@w;
		font-size: 20vw/@w;
		margin-top: 10vw/@w;
		border: 1px solid #e71737;
		color: white;
		transition: .5s;
		-moz-transition: .5s;
		-ms-transition: .5s;
		-webkit-transition: .5s;
		cursor: pointer;
	}
	
	.btn:hover {
		background: transparent;
		color: #e71737;
	}
	
	.wechat {
		width: 150vw/@w;
		height: 150vw/@w;
		position: absolute;
		right: 0;
		bottom: 0;
	}
	
	.content_left {
		padding-top: 200vw/@w;
		width: 530vw/@w;
		position: relative;
		h1 {
			color: #333333;
			font-size: 70vw/@w;
		}
		p {
			padding: 55vw/@w 0;
			color: #666666;
			font-size: 14vw/@w;
		}
		ul {
			li {
				display: flex;
				margin-bottom: 30vw/@w;
			}
		}
		.icon-1 {
			background: url(../../static/img/download/part2-icon-1.png) center no-repeat;
		}
		.icon-2 {
			background: url(../../static/img/download/part2-icon-2.png) center no-repeat;
		}
		.icon-3 {
			background: url(../../static/img/download/part2-icon-3.png) center no-repeat;
		}
	}
	
	.content_left_right {
		position: absolute;
		right: 0;
	}
	
	.content_right {
		width: 530vw/@w;
		position: absolute;
		right: 0;
		top: 200vw/@w;
		h1 {
			color: #ffffff;
			font-size: 70vw/@w;
		}
		p {
			padding: 55vw/@w 0;
			color: #d8d8d8;
			font-size: 14vw/@w;
		}
		ul {
			li {
				display: flex;
				margin-bottom: 30vw/@w;
				color: #D8D8D8;
			}
		}
		.icon-1 {
			background: url(../../static/img/download/part3-icon-1.png) center no-repeat;
		}
		.icon-2 {
			background: url(../../static/img/download/part3-icon-2.png) center no-repeat;
		}
		.icon-3 {
			background: url(../../static/img/download/part3-icon-3.png) center no-repeat;
		}
	}
	
	.code-box {
		width: 360vw/@w;
		display: flex;
		position: absolute;
		right: 150vw/@w;
		bottom: 0;
		div {
			width: 50%;
			padding: 10px;
			h3 {
				color: white;
				font-weight: 500;
				text-align: center;
			}
			img {
				width: 100%;
			}
		}
	}
	
	@media only screen and (max-width: 768px) {
		.part-1{
			.content{
				padding-top: 20px;
				width:200px;
				h1{
					font-size: 20px;
				}
				ul{
					li{
						img{
							width: 50px;
						}
						p{
							font-size: 12px;
						}
					}
				}
			}
		}
		.part-2,
		.part-3,
		.part-4,
		.part-5 {
			height: auto;
			padding: 20px;
			.container {}
		}
		.part-2 {
			background: white;
		}
		.part-3 {
			background: black;
		}
		.part-4 {
			background: white;
		}
		.part-5 {
			background: #f5f5f5;
		}
		.content_left,
		.content_right {
			width: 100%;
			padding-top: 10px;
			position: relative;
			top: 0;
			.btn {
				width: 120px;
				height: 25px;
				line-height: 25px;
				margin: 5px auto;
				font-size: 12px;
			}
		}
		.content_left{
			h1{
				font-size: 20px;
			}
			p{
				font-size: 10px;
			}
			.icon{
				width: 16px;
				height: 16px;
				background-size:100% 100%;
			}
			ul{
				li{
					span{
						font-size: 10px;
					}
				}
			}
			
		}
		.content_right{
			h1{
				font-size: 18px;
				max-width: 150px;
			}
			p{
				font-size: 10px;
			}
			.icon{
				width: 16px;
				height: 16px;
				background-size:100% 100%;
			}
			ul{
				li{
					span{
						font-size: 10px;
					}
				}
			}
		}
		.part-3{
			.content_right{
				width: 100%;
			}
		}
	}
</style>