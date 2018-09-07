<template>
	<div class="guide">
		<my-header></my-header>
		<div class="part-1">
			<div class="content">
				<h1>{{$t('guide.part1.title')}}</h1>
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
				<h1>{{$t('guide.part2.title')}}</h1>
				<el-tabs v-model="activeName">
					<el-tab-pane :label="useList[0].name" name="first"><tab-item :mylist='useList[0]'></tab-item></el-tab-pane>
					<el-tab-pane :label="useList[1].name" name="second"><tab-item :mylist='useList[1]'></tab-item></el-tab-pane>
					<el-tab-pane :label="useList[2].name" name="third"><tab-item :mylist='useList[2]'></tab-item></el-tab-pane>
					<el-tab-pane :label="useList[3].name" name="fourth"><tab-item :mylist='useList[3]'></tab-item></el-tab-pane>
					<!--<el-tab-pane v-for="(item,index) in useList" :key='index' :label="item.name" name="item.order">
						{{item}}
					</el-tab-pane>-->
				</el-tabs>
			</div>
		</div>
		<div class="part-3">
			<div class="container">
				<h1>{{$t('guide.part3.title')}}</h1>
				<div class="content">
					<my-collapse></my-collapse>
					<my-collapse></my-collapse>
					<my-collapse></my-collapse>
					<my-collapse></my-collapse>
				</div>
				
			</div>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import header from '@/components/header'
	import footer from '@/components/footer'
	import tabItem from '@/components/base/tabItem'
	import collapse from '@/components/base/collapse'
	export default {
		data(){
			return{
				activeName:'first'
			}
		},
		components: {
			myHeader: header,
			myFooter: footer,
			tabItem,
			myCollapse:collapse
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
			},
			
			useList(){
				return[{
					order:'first',
					name:this.$t('guide.part2.title1'),
					service:'Torrent'+this.$t('guide.part2.service'),
					service2:this.$t('guide.part2.service2'),
					tech:'Torrent'+this.$t('guide.part2.tech'),
					tech2:this.$t('guide.part2.tech2'),
					list:[{
						name:'Torrent'+this.$t('guide.part2.txt1')
					},{
						name:'Torrent7.0'+this.$t('guide.part2.txt2')
					},{
						name:'Torrent6.9'+this.$t('guide.part2.txt2')
					}]
				},{
					order:'second',
					name:this.$t('guide.part2.title2'),
					service:'Mobile'+this.$t('guide.part2.service'),
					service2:this.$t('guide.part2.service2'),
					tech:'Mobile'+this.$t('guide.part2.tech'),
					tech2:this.$t('guide.part2.tech2'),
					list:[{
						name:'Mobile'+this.$t('guide.part2.txt1')
					},{
						name:'Mobile7.0'+this.$t('guide.part2.txt2')
					},{
						name:'Mobile6.9'+this.$t('guide.part2.txt2')
					}]
				},{
					order:'third',
					name:this.$t('guide.part2.title3'),
					service:'Squirrel'+this.$t('guide.part2.service'),
					service2:this.$t('guide.part2.service2'),
					tech:'Squirrel'+this.$t('guide.part2.tech'),
					tech2:this.$t('guide.part2.tech2'),
					list:[{
						name:'Squirrel'+this.$t('guide.part2.txt1')
					},{
						name:'Squirrel7.0'+this.$t('guide.part2.txt2')
					},{
						name:'Squirrel6.9'+this.$t('guide.part2.txt2')
					}]
				},{
					order:'forth',
					name:this.$t('guide.part2.title4'),
					service:'Socialtrading'+this.$t('guide.part2.service'),
					service2:this.$t('guide.part2.service2'),
					tech:'Socialtrading'+this.$t('guide.part2.tech'),
					tech2:this.$t('guide.part2.tech2'),
					list:[{
						name:'Socialtrading'+this.$t('guide.part2.txt1')
					},{
						name:'Socialtrading7.0'+this.$t('guide.part2.txt2')
					},{
						name:'Socialtrading6.9'+this.$t('guide.part2.txt2')
					}]
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
						width: 100%;
					}
					p {
						margin-top: 35vw/@w;
						text-align: center;
						color: white;
						font-size: 34vw/@w;
					}
				}
			}
		}
	}
	
	.part-2 {
		
		.container {
			padding: 135vw/@w 0;
			h1 {
				text-align: center;
			}
			.el-tabs{
				width: 80%;
				margin: 0 auto;
				.el-tabs__nav-wrap::after{
					background-color: transparent;
				}
				
			}
		}
	}
	.part-3{
		background: #f5f5f5;
		.container{
			padding: 135vw/@w 0;
			h1{
				text-align: center;
			}
			.content{
				margin-top: 50px;
			}
		}
	}
	
</style>