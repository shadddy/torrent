<template>
	<div class="header">
		<!--PC端头部-->
		<div class="container">
			<h2 class="logo" @click="Router('/')">
				<img :src="logo"  />
			</h2>
			<div class="right">
				<ul>
					<li v-for="(item,index) in navList" @mouseenter="slideDown(index)" @mouseleave="slideUp(index)" >
						<span @click="Router(item.url)">{{item.name}}</span>
						<ul class="subNav">
							<li v-for="i in item.subNav" @click="Router(i.url)">
								{{i.name}}
							</li>
						</ul>
					</li>
				</ul>
				<span class="registerBtn">{{$t('registerBtn')}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '0',
				logo: require('../../static/img/logo.png')

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
			func(){
				this.$router.push('/')
			},
			//子导航下拉
			slideDown(val){
				$('.subNav').eq(val).stop().slideDown()
			},
			slideUp(val){
				$('.subNav').eq(val).stop().slideUp()
			}
		},
		mounted(){
			let that=this;
		},
		computed: {
			navList() {
				return [{
					name: this.$t("header.nav_top.nav1"),
					url: 'software',
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
					url: '/',
				}, {
					name: this.$t("header.nav_top.nav3"),
					url: '/'
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
		width: 100%;
		height: 72px;
		.container {
			.logo {
				margin-top: 10px;
				width: 124px;
				height: 52px;
				display: inline-block;
				cursor: pointer;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.right {
				display: flex;
				float: right;
				ul {
					display: flex;
					li {
						transition: .5s;
						-moz-transition: .5s;
						-ms-transition: .5s;
						-webkit-transition: .5s;
						padding: 20px 30px;
						cursor: pointer;
						position: relative;
						.subNav{
						
							display: none;
							position: absolute;
							z-index:9999;
							background: white;
							
							left:5px;
							top:70px;
							li{
								text-align: center;
								display:block;
								padding: 5px 10px;
								
							}
						}
					}
				}
				.registerBtn {
					border: 1px solid #808080;
					width: 50px;
					text-align: center;
					height: 40px;
					line-height: 40px;
					margin-top: 12px;
					border-radius: 5px;
				}
			}
		}
	}
</style>