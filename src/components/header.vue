<template>
	<div class="header">
		<!--PC端头部-->
		<div class="container">
			<h2 class="logo" @click="Router('/')">
				<img :src="logo"  />
			</h2>
			<div class="right">
				<ul class="pc-nav">
					<li v-for="(item,index) in navList" @mouseenter="slideDown(index)" @mouseleave="slideUp(index)">
						<span @click="Router(item.url)">{{item.name}}</span>
						<ul class="subNav">
							<li v-for="i in item.subNav" @click="Router(i.url)">
								{{i.name}}
							</li>
						</ul>
					</li>
				</ul>
				<span class="registerBtn" @click="loginFunc">{{$t('registerBtn')}}</span>
				<div class="language">
					<span @click="isLangFun" :class="language?'en':'cn'">{{language?'En':'Ch'}}</span>
					<span @click="langQh"  :class="[isLang?'act':null,language?'cn':'en']">{{!language?'En':'Ch'}}</span>
				</div>
			</div>
			<!--移动端导航-->
			<nav class="navbar">
				<h4>
						<span @click="menu">
							<i></i>
							<i></i>
							<i></i>
						</span>
					</h4>
				<ul>
					<li v-for="item in navList" :class="item.act?'act':null">
						<h3 :class="item.length?'act':null" @click="Router(item.url)">{{item.name}}</h3>
						<div>
							<p v-for="items in item.subNav" @click="Router(items.url)">{{items.name}}</p>
						</div>
					</li>
				</ul>
			</nav>
		</div>
		<my-login :isShow="loginShow" @on-close="closeLogin"></my-login>
	</div>
</template>

<script>
	import login from '@/components/login'
	export default {
		components:{
			myLogin:login
		},
		data() {
			return {
				activeIndex: '0',
				logo: require('../../static/img/logo.png'),
				language: false,
				isLang: false,
				loginShow:false,

			}
		},
		methods: {
			// 页面跳转
			Router: function(str) {
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

			},
			func() {
				this.$router.push('/')
			},
			//子导航下拉
			slideDown(val) {
				$('.subNav').eq(val).stop().slideDown()
			},
			slideUp(val) {
				$('.subNav').eq(val).stop().slideUp()
			},
			menu: function() {
				$(".navbar>ul").slideToggle();
			},
			//  中英文切换
			langQh: function() {
				this.language = !this.language;
				this.isLang = !this.isLang;
				if(this.$i18n.locale == 'EN') {
					this.$i18n.locale = 'CN';
				} else {
					this.$i18n.locale = 'EN';
				};
			},
			// 切换语言
			isLangFun: function() {
				this.isLang = !this.isLang
			},
			//打开登录界面
			loginFunc:function(){
				this.loginShow=true
			},
			closeLogin:function(){
				this.loginShow=false
			}
		},
		mounted() {
			let that = this;
			$(".navbar>ul li h3").click(function() {
				if($(this).next().is(":hidden")) {
					$(".navbar>ul li div").slideUp("slow");
					$(this).next().slideDown("slow");
				} else {
					$(this).next().slideUp("slow");
				}
			})
		},
		computed: {
			navList() {
				return [{
					name: this.$t("header.nav_top.nav1"),
					url: 'software',
					length: true,
					subNav: [{
						name: this.$t("header.subNav_1.nav1"),
						url: 'software/firstSoftPage'
					}, {
						name: this.$t("header.subNav_1.nav2"),
						url: 'software/secondSoftPage'
					}, {
						name: this.$t("header.subNav_1.nav3"),
						url: 'software/thirdSoftPage'
					}, {
						name: this.$t("header.subNav_1.nav4"),
						url: 'software/forthSoftPage'
					}]
				}, {
					name: this.$t("header.nav_top.nav2"),
					url: 'download',
				}, {
					name: this.$t("header.nav_top.nav3"),
					url: 'guide',
				}, {
					name: this.$t("header.nav_top.nav4"),
					url: 'about'
				}]
			}
		}
	}
</script>

<style scoped lang="less">
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;

		background: white;
		z-index: 9999;
		border-bottom: 1px solid #ccc;
		.container {
			.logo {
				margin-top: 20px;
				width: 90px;
				height: 36px;
				display: inline-block;
				cursor: pointer;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.right {
				margin-top: 10px;
				display: flex;
				float: right;
				ul {
					position: relative;
					display: flex;
					li {
						transition: .5s;
						-moz-transition: .5s;
						-ms-transition: .5s;
						-webkit-transition: .5s;
						padding: 20px 30px;
						cursor: pointer;
						.subNav {
							display: none;
							position: absolute;
							z-index: 9999;
							background: white;
							width: 60%;
							left: 5px;
							top: 60px;
							li {
								text-align: center;
								display: block;
								padding: 10px 10px;
							}
						}
					}
				}
				.registerBtn {
					border: 1px solid #808080;
					width: 50px;
					text-align: center;
					height: 30px;
					line-height: 30px;
					margin-top: 16px;
					border-radius: 5px;
					cursor: pointer;
				}
				.language {
					float: left;
					position: relative;
					z-index: 200;
					width: 65px;
					height: 32px;
					margin-top: 16px;
					margin-left: 10px;
					span {
						display: block;
						color: #000;
						width: 65px;
						height: 32px;
						line-height: 32px;
						cursor: pointer;
						box-sizing: border-box;
						float: left;
						text-align: right;
						background: white;
					}
					span:nth-of-type(2) {
						position: absolute;
						top: 0;
						transition: .4s;
						z-index: -1;
					}
					span:nth-of-type(2).act {
						top: 32px;
					}
					.cn {
						background-image: url(../../static/img/cn.png);
						background-repeat: no-repeat;
					}
					.en {
						background-image: url(../../static/img/en.png);
						background-repeat: no-repeat;
					}
				}
			}
			.navbar {
				color: #fff;
				border: 1px solid #f1f1f1;
				margin: 10px 0 0 0;
				background: #fafafa;
				margin-bottom: 20px;
				width: 100%;
				box-sizing: border-box;
				h4 {
					height: 46px;
					span {
						width: 44px;
						height: 34px;
						display: block;
						border: 1px solid #ccc;
						border-radius: 5px;
						cursor: pointer;
						box-sizing: border-box;
						padding: 4px 0 0 0;
						float: right;
						margin: 6px 15px 0 0;
						i {
							width: 22px;
							height: 2px;
							background: #999;
							display: block;
							margin: 4px auto 0 auto;
						}
					}
					span:hover {
						border: 1px solid #03A9F4;
					}
				}
				ul {
					display: none;
					li {
						color: #666;
						font-weight: 700;
						font-size: 14px;
						line-height: 46px;
						border-top: 1px solid #f1f1f1;
						cursor: pointer;
						padding-left: 20px;
						h3 {
							position: relative;
						}
						h3.act:after {
							content: '';
							display: block;
							position: absolute;
							width: 10px;
							height: 10px;
							border-bottom: 1px solid #ccc;
							border-right: 1px solid #ccc;
							transform: translateY(-50%) rotate(45deg);
							right: 20px;
							top: 50%;
						}
						p {
							font-weight: 500;
							padding-left: 20px;
						}
						div {
							display: none;
						}
					}
					li:hover {
						background: #fff;
					}
				}
			}
		}
	}
	/*手机端*/
	
	@media only screen and (max-width: 768px) {
		.header {
			.container {
				.right {
					margin-right: 10px;
					.pc-nav {
						display: none;
					}
				}
			}
		}
	}
	
	@media only screen and (min-width:768px) {
		.header {
			.container {
				.navbar {
					display: none;
				}
			}
		}
	}
</style>