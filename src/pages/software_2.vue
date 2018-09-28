<template>
	<div class="software_2">
		<div class="banner-1">
			<div class="container">
				<div class="content">
					<h1>{{$t('software_2.first.title')}}</h1>
					<h3>{{$t('software_2.first.title2')}}</h3>
					<div class="btnBox">
						<span @click="download('FomiFX MT4 For Windows.exe')">{{$t('software_2.first.btn1')}}</span>
						<span @click="download('FomiFX MT5 For Windows.exe')">{{$t('software_2.first.btn2')}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="banner-2">
			<div class="container">
				<div class="content">
					<ul>
						<li v-for="item in banner2List">
							<img :src="item.icon" />
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
				<h1>{{$t('software_2.third.title')}}</h1>
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
	export default{
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
					title:this.$t('software_2.second.title1'),
					txt:this.$t('software_2.second.txt1'),
					icon:require('../../static/img/software/icon-5.png'),
				},{
					title:this.$t('software_2.second.title2'),
					txt:this.$t('software_2.second.txt2'),
					icon:require('../../static/img/software/icon-6.png'),
				},{
					title:this.$t('software_2.second.title3'),
					txt:this.$t('software_2.second.txt3'),
					icon:require('../../static/img/software/icon-7.png'),
				},{
					title:this.$t('software_2.second.title4'),
					txt:this.$t('software_2.second.txt4'),
					icon:require('../../static/img/software/icon-8.png'),
				}]
			},
			banner3List(){
				return [{
					title:this.$t('software_2.third.title1'),
					txt:this.$t('software_2.third.txt1')
				},{
					title:this.$t('software_2.third.title2'),
					txt:this.$t('software_2.third.txt2')
				},{
					title:this.$t('software_2.third.title3'),
					txt:this.$t('software_2.third.txt3')
				},{
					title:this.$t('software_2.third.title4'),
					txt:this.$t('software_2.third.txt4')
				}]
			}
		}
	}
</script>

<style scoped lang="less">
@w:19.2;
.banner-1{
	background: url(../../static/img/software/software-2-1.jpg) no-repeat center;
	background-size: 100% 100%;
}
.banner-2{
	width: 100%;
	height: 960vw/@w;
	background: url(../../static/img/software/software-2-2.jpg) no-repeat center;
	background-size: 100% 100%;
	.content{
		ul{
			li{
				display: inline-block;
				text-align: center;
				position: absolute;
				img{
					width: 94vw/@w;
					height: 94vw/@w;
				}
				h3{
					font-size: 30vw/@w;
					max-width: 400vw/@w;
				}
				p{
					font-size: 14vw/@w;
					max-width: 400vw/@w;
				}
			}
			li:nth-of-type(1){
				left:40vw/@w ;
				top: 110vw/@w;
			}
			li:nth-of-type(2){
				right: 10vw/@w;
				top: 100vw/@w;
			}
			li:nth-of-type(3){
				left: 40vw/@w;
				top: 730vw/@w;
			}
			li:nth-of-type(4){
				right: 0vw/@w;
				top: 600vw/@w;
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
				ul{
					display:flex;
					flex-wrap: wrap;
					justify-content: space-between;
					li{
						position: relative;
						width: 48%;
					
						left: auto;
						top: auto;
					}
				}
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