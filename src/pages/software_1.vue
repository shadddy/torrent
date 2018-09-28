<template>
	<div class="software_1">
		<div class="banner-1">
			<div class="container">
				<div class="content">
					<h1>{{$t('software_1.first.title')}}</h1>
					<h3>{{$t('software_1.first.title2')}}</h3>
					<div class="btnBox">
						<span @click="download('FomiFX MT4 For Windows.exe')">{{$t('software_1.first.btn1')}}</span>
						<span @click="download('FomiFX MT5 For Windows.exe')">{{$t('software_1.first.btn2')}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="banner-2">
			<div class="container">
				<div class="content">
					<ul>
						<li v-for="item in banner2List">
							<img :src="item.icon"/>
							<div>
								<h3>{{item.title}}</h3>
							<p>{{item.txt}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="banner-3">
			<div class="container">
				<h1>{{$t('software_1.third.title')}}</h1>
				<ul>
					<li v-for="(item,index) in banner3List"> 
						<span>0{{index+1}}</span>
						<div>
							<h3>{{item.title}}</h3>
							<p>{{item.txt}}</p>
						</div>
					</li>
				</ul>
				<span class="btn" @click="swift">{{$t('software_1.third.btn')}}</span>
			</div>
		</div>
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
		methods:{
			download(url){
				this.downloadFuc(url)
			},
			swift(){
				this.$router.push('/download');
			}
		},
		computed:{
			banner2List(){
				return [{
					icon:require('../../static/img/software/icon-1.png'),
					title:this.$t('software_1.second.title1'),
					txt:this.$t('software_1.second.txt1')
				},{
					icon:require('../../static/img/software/icon-2.png'),
					title:this.$t('software_1.second.title2'),
					txt:this.$t('software_1.second.txt2')
				},{
					icon:require('../../static/img/software/icon-3.png'),
					title:this.$t('software_1.second.title3'),
					txt:this.$t('software_1.second.txt3')
				},{
					icon:require('../../static/img/software/icon-4.png'),
					title:this.$t('software_1.second.title4'),
					txt:this.$t('software_1.second.txt4')
				}]
			},
			banner3List(){
				return [{
					title:this.$t('software_1.third.title1'),
					txt:this.$t('software_1.third.txt1')
				},{
					title:this.$t('software_1.third.title2'),
					txt:this.$t('software_1.third.txt2')
				},{
					title:this.$t('software_1.third.title3'),
					txt:this.$t('software_1.third.txt3')
				},{
					title:this.$t('software_1.third.title4'),
					txt:this.$t('software_1.third.txt4')
				},{
					title:this.$t('software_1.third.title5'),
					txt:this.$t('software_1.third.txt5')
				}]
			}
		}
	}
</script>

<style scoped lang="less">
@w:19.2;
.banner-1{
	background: url(../../static/img/software/software-1-1.jpg) no-repeat center;
	background-size: 100% 100%;
}
.banner-2{
	background: url(../../static/img/software/software-1-2.jpg) no-repeat center;
	background-size: 100% 100%;
	width: 100%;
	height: 909vw/@w;
	position: relative;
	.content{
		position: absolute;
		right:0;
		top:230vw/@w;
		ul{
			li{
				display: flex;
				margin-bottom: 20vw/@w;
				img{
					width: 94vw/@w;
					height: 94vw/@w;
					margin-right: 30vw/@w;
				}
				h3{
					margin-top: 10vw/@w;
					font-size: 30vw/@w;
				}
				p{	
					margin-top: 10vw/@w;
					font-size: 14vw/@w;
					color: #999;
					max-width: 400vw/@w;
				}
			}
		}
	}
}
.banner-3{
	background: #f5f5f5;
	.container{
		ul{
			margin: 0 auto;
			margin-top: 80vw/@w;
			display: flex;
			flex-wrap: wrap;
			justify-content:space-between;
			li{
				background: white;
				margin-bottom: 20px;
				margin-right: 10px;
				border-radius: 20px;
				box-shadow: 0 0 10px #ccc;
				width: 48%;
				display: flex;
				padding: 45vw/@w 35vw/@w;
				span{
					margin-right: 10px;
					width: 30px;
					text-align: center;
					line-height: 30px;
					height: 30px;
					border: 1px solid #ccc;
				}
				h3{
					font-size: 20px;
				}
				p{
					font-size: 14px;
					line-height: 30px;
				}
			}
		}
	}
}
@media only screen and (max-width:768px){
	.banner-2{
		position: relative;
		height: auto;
		overflow: hidden;
		background: white;
		.container{
			.content{
				padding: 20px;
				position: relative;
				top: 0;
			}
		}
	}
	.banner-3{
		.container{
			h1{
				font-size: 20px;
			}
			ul{
				li{
					width: 100%;
					div{
						h3{
							font-size: 14px;
						}
						p{
							font-size: 12px;
							line-height: 20px;
						}
					}
				}
			}
			.btn{
				width: 120px;
				height: 30px;
				line-height: 30px;
			}
		}
	}
}
</style>