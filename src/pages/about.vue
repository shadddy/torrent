<template>
	<div class="aboutus">
		<my-header></my-header>
		<!--卓越的金融科技研发先驱-->
		<div class="banner-1">
			<div class="container">
				<div class="content">
					<h1>{{$t('about.banner1.title')}}</h1>
					<p>{{$t('about.banner1.title2')}}</p>
					<div class="btn-box">
						<span @click="Router('download')">{{$t('about.banner1.download')}}</span>
						<span @click="register">{{$t('about.banner1.register')}}</span>
					</div>
				</div>
			</div>
		</div>
		<!--更多实用功能-->
		<div class="func">
			<div class="container">
				<h1>{{$t('about.func.title')}}</h1>
				<ul>
					<li v-for="item in funcList">
						<img :src="item.img" />
						<h4>{{item.title}}</h4>
						<p>{{item.txt}}</p>
					</li>
				</ul>
			</div>
		</div>
		<!--解决方案-->
		<div class="banner-2">
			<div class="container">
				<h1>{{$t('about.banner2.title')}}</h1>
				<p>{{$t('about.banner2.title2')}}</p>
				<ul>
					<li v-for="item in banner2List">
						<span>{{item.val}}+</span>
						<span>{{item.txt}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--体验步骤-->
		<div class="step">
			<div class="container">
				<h1>{{$t('about.step.title')}}</h1>
				<ul>
					<li class="content">
						<h2>1</h2>
						<h3>{{$t('about.step.title1')}}</h3>
						<p>{{$t('about.step.txt1')}}</p>
					</li>
					<li class="arrow">
						<img :src="arrow" />
					</li>
					<li class="content">
						<h2>2</h2>
						<h3>{{$t('about.step.title2')}}</h3>
						<p>{{$t('about.step.txt2')}}</p>
					</li>
					<li class="arrow">
						<img :src="arrow" />
					</li>
					<li class="content">
						<h2>3</h2>
						<h3>{{$t('about.step.title3')}}</h3>
						<p>{{$t('about.step.txt3')}}</p>

					</li>
				</ul>
				<div class="btn-box">
					<span @click="Router('download')">{{$t('about.banner1.download')}}</span>
					<span @click="register">{{$t('about.banner1.register')}}</span>
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
				scorll: '',
				arrow: require('../../static/img/about/arrow.png')
			}
		},
		mounted() {
			window.addEventListener('scroll', this.menu)
		},
		methods: {
			menu() {
				var that = this
				this.scroll = document.documentElement.scrollTop

			},
			Router(url){
				this.$router.push('/'+url)
			},
			register(){
				window.location.href="http://my.fomifx.com/zh/Forms/LiveAccount"
			}
		},

		computed: {
			funcList() {
				return [{
					title: this.$t('about.func.title1'),
					txt: this.$t('about.func.txt1'),
					img: require('../../static/img/about/icon-1.png')
				}, {
					title: this.$t('about.func.title2'),
					txt: this.$t('about.func.txt2'),
					img: require('../../static/img/about/icon-2.png')
				}, {
					title: this.$t('about.func.title3'),
					txt: this.$t('about.func.txt3'),
					img: require('../../static/img/about/icon-3.png')
				}, {
					title: this.$t('about.func.title4'),
					txt: this.$t('about.func.txt4'),
					img: require('../../static/img/about/icon-4.png')
				}, {
					title: this.$t('about.func.title5'),
					txt: this.$t('about.func.txt5'),
					img: require('../../static/img/about/icon-5.png')
				}, {
					title: this.$t('about.func.title6'),
					txt: this.$t('about.func.txt6'),
					img: require('../../static/img/about/icon-6.png')
				}, {
					title: this.$t('about.func.title7'),
					txt: this.$t('about.func.txt7'),
					img: require('../../static/img/about/icon-7.png')
				}, {
					title: this.$t('about.func.title8'),
					txt: this.$t('about.func.txt8'),
					img: require('../../static/img/about/icon-8.png')
				}]
			},
			banner2List() {
				return [{
					val: 100000,
					txt: this.$t('about.banner2.txt1')
				}, {
					val: 110,
					txt: this.$t('about.banner2.txt2')
				}, {
					val: 100,
					txt: this.$t('about.banner2.txt3')
				}, {
					val: 5,
					txt: this.$t('about.banner2.txt4')
				}]
			}
		}
	}
</script>

<style scoped lang="less">
		@w: 19.2;
	.aboutus {
		.banner-1 {
			overflow: hidden;
			width: 100%;
			height: 800vw/@w;
			background: url(../../static/img/about/banner-1.jpg) center no-repeat;
			background-size: 100% 100%;
			.content {
				width: 60%;
				margin: 245vw/@w auto;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				flex-direction: column;
				h1 {
					text-align: center;
					color: white;
					font-size: 58vw/@w;
					font-weight: 400;
					flex-direction: row;
					margin-bottom: 35vw/@w;
				}
				p {
					text-align: center;
					font-size: 24vw/@w;
					color: #999999;
					line-height: 36vw/@w;
					margin-bottom: 50vw/@w;
				}
				.btn-box {
					overflow: hidden;
					position: relative;
					display: flex;
					flex-direction: row;
					justify-content: center;
					span {
						transition: .5s;
						-moz-transition: .5s;
						-ms-transition: .5s;
						-webkit-transition: .5s;
						cursor: pointer;
						display: inline-block;
						color: #f9d681;
						font-size: 20vw/@w;
						padding: 22vw/@w 60vw/@w;
						border: 1px solid #f9d681;
						border-radius: 50vw/@w;
					}
					span:nth-of-type(2) {
						margin-left: 30px;
					}
					span:hover {
						background: #f9d681;
						color: white;
					}
				}
			}
		}
		.func {
			.container {
				padding: 100vw/@w 0;
				h1 {
					text-align: center;
					font-size: 34vw/@w;
					font-weight: 500;
				}
				ul {
					margin-top: 50px;
					flex-wrap: wrap;
					display: flex;
					li {
						text-align: center;
						width: 325px;
						padding: 20px;
						h4 {
							font-size: 20px;
							font-weight: 500;
							margin: 30px 0 10px 0;
						}
						p {
							font-size: 14px;
							color: #999999;
							line-height: 20px;
						}
					}
				}
			}
		}
		.banner-2 {
			background: url(../../static/img/about/banner-2.jpg) center no-repeat;
			background-size: 100% 100%;
			height: 863vw/@w;
			width: 100%;
			.container {
				padding: 150vw/@w 0;
				h1 {
					text-align: center;
					color: white;
					font-weight: 500;
					margin-bottom: 50px;
				}
				p {
					text-align: center;
					width: 800vw/@w;
					margin: 0 auto;
					color: #999999;
				}
				ul {
					margin-top: 50px;
					flex-wrap: wrap;
					display: flex;
					justify-content: center;
					li {
						text-align: center;
						color: white;
						border: 1px solid #CCCCCC;
						width: 260px;
						height: 260px;
						border-radius: 50%;
						margin-right: 60px;
						span {
							display: block;
						}
						span:nth-of-type(1) {
							font-size: 58px;
							margin-top: 65px;
							margin-bottom: 10px;
						}
					}
				}
			}
		}
		.step {
			width: 100%;
			background: url(../../static/img/about/step.jpg) center no-repeat;
			.container {
				padding: 110vw/@w 0;
				h1 {
					text-align: center;
					font-weight: 500;
					margin-bottom: 80px;
				}
				ul {
					flex-wrap: wrap;
					display: flex;
					justify-content: center;
					flex-direction: row;
					li {
						width: 50px;
						text-align: center;
						padding: 40px 0 60px 0;
						img {
							margin-top: 40px;
						}
					}
					.content {
						width: 365vw/@w;
						background: white;
						border-radius: 30px;
						h2 {
							font-size: 50vw/@w;
							font-style: italic;
							color: #e71737;
						}
						h3{
							color: #e71737;
						}
					}
				}
				.btn-box {
					overflow: hidden;
					position: relative;
					display: flex;
					flex-direction: row;
					justify-content: center;
					margin-top: 40px;
					span {
						transition: .5s;
						-moz-transition: .5s;
						-ms-transition: .5s;
						-webkit-transition: .5s;
						cursor: pointer;
						margin-right: 30px;
						display: inline-block;
						color: #e71737;
						font-size: 20vw/@w;
						padding: 22vw/@w 60vw/@w;
						border: 1px solid#e71737;
						border-radius: 50vw/@w;
					}
					span:hover {
						background: #e71737;
						color: white;
					}
				}
			}
		}
	}
	
	@media only screen and (max-width:768px) {
		.aboutus {
			.banner-1 {
				.container {
					.content {
						margin: 30px auto;
						width: 90%;
						h1 {
							font-size: 20px;
						}
						p {
							font-size: 10px;
							line-height: 16px;
						}
						.btn-box{
							span{
								font-size: 12px;
							}
						}
					}
				}
			}
			.func {
				.container {
					h1 {
						font-size: 20px;
						
					}
					ul {
						li {
							width: 50%;
							img{
								width: 40%;
							}
							h4{
								margin: 5px 0 10px 0;
							}
						}
					}
				}
			}
			.banner-2{
				height: auto;

				.container{
					h1{
						font-size: 20px;
						margin-bottom: 10px;
					}
					p{
						width: 90%;
						font-size: 12px;
					}
					ul{
						margin-top: 20px;
						display: flex;
						li{
							margin-right: 0;
							width: 150px;
							height: 150px;
							span:nth-of-type(1){
								margin-top: 40px;
								font-size: 24px;
							}
							span:nth-of-type(2){
								font-size: 12px;
							}
						}
					}
				}
			}
			.step{
				.container{
					h1{
						
						font-size: 20px;
						font-weight: bold;
					}
					ul{
						
							.content{
								width: 80px;
								h2{
									font-size: 20px;
								}
								h3{
									font-size: 14px;
								}
								p{
									font-size: 12px;
								}
							}
							.arrow{
								width: 30px;
								img{
									width: 30px;
								}
							}
						
					}
					.btn-box{
						span{
							font-size: 14px;
						}
					}
				}
			}
		}
		}
</style>