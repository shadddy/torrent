<template>
	<div class="software_3">
		<div class="banner-1">
			<div class="container">
				<div class="content">
					<h1>{{$t('software_3.first.title')}}</h1>
					<h3>{{$t('software_3.first.title2')}}</h3>
					<div class="btnBox">
						<span @click="downloadFuc('SquirrelBond.apk')">{{$t('software_3.first.btn1')}}</span>
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
				<h1>{{$t('software_3.third.title')}}</h1>
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
			swift(){
				this.$router.push('/download');
			}
		},
		computed: {
			banner2List() {
				return [{
					title: this.$t('software_3.second.title1'),
					txt: this.$t('software_3.second.txt1'),
					icon: require('../../static/img/software/icon-9.png'),
				}, {
					title: this.$t('software_3.second.title2'),
					txt: this.$t('software_3.second.txt2'),
					icon: require('../../static/img/software/icon-10.png'),
				}, {
					title: this.$t('software_3.second.title3'),
					txt: this.$t('software_3.second.txt3'),
					icon: require('../../static/img/software/icon-11.png'),
				}, {
					title: this.$t('software_3.second.title4'),
					txt: this.$t('software_3.second.txt4'),
					icon: require('../../static/img/software/icon-12.png'),
				}]
			},
			banner3List() {
				return [{
					title: this.$t('software_3.third.title1'),
					txt: this.$t('software_3.third.txt1')
				}, {
					title: this.$t('software_3.third.title2'),
					txt: this.$t('software_3.third.txt2')
				}, {
					title: this.$t('software_3.third.title3'),
					txt: this.$t('software_3.third.txt3')
				}, {
					title: this.$t('software_3.third.title4'),
					txt: this.$t('software_3.third.txt4')
				}]
			}
		}
	}
</script>

<style scoped lang="less">
	@w: 19.2;
	.banner-1 {
		background: url(../../static/img/software/software-3-1.jpg) no-repeat center;
		background-size: 100% 100%;
	}
	
	.banner-2 {
		width: 100%;
		height: 960vw/@w;
		background: url(../../static/img/software/software-3-2.jpg) no-repeat center;
		background-size: 100% 100%;
		.content{
			position: absolute;
			overflow: hidden;
			right: 0;
			top: 180vw/@w;
			width:740vw/@w;
			ul{	
				display: flex;
				flex-wrap: wrap;
				li{
					width: 370vw/@w;
					text-align: center;
					margin-bottom: 80vw/@w;
					img{
						width: 94vw/@w;
						height: 94vw/@w;
					}
					h3{
						padding-top: 15vw/@w;
					}
					p{
						padding: 10vw/@w 30vw/@w;
					}
				}
			}
		}
	}
	.banner-3{
		background: url(../../static/img/software/software-3-3.jpg) no-repeat center;
	}
	@media only screen and (max-width:768px){
	.banner-2{
		position: relative;
		height: auto;
		overflow: hidden;
		background: white;
		.container{
			.content{
				width: 100%;
				padding: 20px;
				position: relative;
				top: 0;
				ul{
					display:flex;
					flex-wrap: wrap;
					justify-content: space-between;
					img{
						width: 40px;
						height: 40px;
					}
					li{
						position: relative;
						width: 48%;
					
						left: auto;
						top: auto;
						h3{
							max-width: 100%;
							font-size: 14px;
						}
						p{
							max-width: 90%;
							font-size: 8px;
							margin: 0 auto;
						}
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