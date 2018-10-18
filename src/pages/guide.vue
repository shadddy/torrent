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
					<el-tab-pane :label="useList[0].name" name="first">
						<tab-item :mylist='markList[0]' @openMark="openMark"></tab-item>
					</el-tab-pane>
					<el-tab-pane :label="useList[1].name" name="second">
						<tab-item :mylist='markList[1]' @openMark="openMark"></tab-item>
					</el-tab-pane>
					<el-tab-pane :label="useList[2].name" name="third">
						<tab-item :mylist='markList[2]' @openMark="openMark"></tab-item>
					</el-tab-pane>
					<el-tab-pane :label="useList[3].name" name="fourth">
						<tab-item :mylist='markList[3]' @openMark="openMark"></tab-item>
					</el-tab-pane>
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
					<my-collapse v-for="(item,index) in questionList" :title="item.title" :content="item.content" :key="index"></my-collapse>
				</div>

			</div>
		</div>
		<my-footer></my-footer>

		<my-dialog :markShow="markShow" @closeMyself='closeMark' :markTitle="markTitle" :markContent='markContent' @openMark="openMark">
		</my-dialog>
	</div>
</template>

<script>
	import header from '@/components/header'
	import footer from '@/components/footer'
	import tabItem from '@/components/base/tabItem'
	import collapse from '@/components/base/collapse'
	import { baseUrl } from '@/config/index'
	import dialog from '@/components/base/dialog'
	export default {
		data() {
			return {
				activeName: 'first',
				questionList: [],
				questionListCn: [],
				questionListEn: [

				],
				markList: [],
				markListCn: [
					[],
					[],
					[],
					[]
				],
				markListEn: [
					[],
					[],
					[],
					[]
				],
				markShow: false,
				markTitle: '标题',
				markContent: '',
				state: false
			}
		},
		components: {
			myHeader: header,
			myFooter: footer,
			tabItem,
			myCollapse: collapse,
			myDialog: dialog
		},
		created() {
			this.questionList = this.questionListCn
			this.markList=this.markListCn
		},
		mounted() {
			let that = this
			$.ajax({
				url: baseUrl + 'interface/qaq.php',
				method: 'post',
				data: {
					language: 1
				},
				success: function(res) {
					var obj = JSON.parse(res)
					for(var i in obj) {
						var _content = obj[i].content.replace(/&lt;/gim, '<').replace(/&gt;/gim, '>')
						that.questionListCn.push({
							title: obj[i].title,
							content: _content
						})
					}
					//					that.questionList=that.questionListCn

				}
			})
			$.ajax({
				url: baseUrl + 'interface/qaq.php',
				method: 'post',
				data: {
					language: 2
				},
				success: function(res) {
					var obj = JSON.parse(res)
					for(var i in obj) {
						var _content = obj[i].content.replace(/&lt;/gim, '<').replace(/&gt;/gim, '>')
						that.questionListEn.push({
							title: obj[i].title,
							content: _content
						})
					}

				}
			})
			
			$.ajax({
					url: baseUrl + 'interface/biaoqian.php',
					method: 'post',
					async: true,
					data: {
						language: 1,
						type: 1,

					},
					dataType: 'json',
					success: function(res) {
						for(var i in res) {
							
							var _content = res[i].content.replace(/&lt;/gim, '<').replace(/&gt;/gim, '>')
							that.markListCn[0].push({
								title: res[i].title,
								time: res[i].create_time,
								content: _content
							})
						}
					}
				})
			
			$.ajax({
					url: baseUrl + 'interface/biaoqian.php',
					method: 'post',
					async: true,
					data: {
						language: 1,
						type: 2,

					},
					dataType: 'json',
					success: function(res) {
						for(var i in res) {
							
							var _content = res[i].content.replace(/&lt;/gim, '<').replace(/&gt;/gim, '>')
							that.markListCn[1].push({
								title: res[i].title,
								time: res[i].create_time,
								content: _content
							})
						}
					}
				})
			$.ajax({
					url: baseUrl + 'interface/biaoqian.php',
					method: 'post',
					async: true,
					data: {
						language: 1,
						type: 3,

					},
					dataType: 'json',
					success: function(res) {
						for(var i in res) {
							
							var _content = res[i].content.replace(/&lt;/gim, '<').replace(/&gt;/gim, '>')
							that.markListCn[2].push({
								title: res[i].title,
								time: res[i].create_time,
								content: _content
							})
						}
					}
				})
			$.ajax({
					url: baseUrl + 'interface/biaoqian.php',
					method: 'post',
					async: true,
					data: {
						language: 1,
						type: 4,

					},
					dataType: 'json',
					success: function(res) {
						for(var i in res) {
							
							var _content = res[i].content.replace(/&lt;/gim, '<').replace(/&gt;/gim, '>')
							that.markListCn[3].push({
								title: res[i].title,
								time: res[i].create_time,
								content: _content
							})
						}
					}
				})
				
				
				$.ajax({
					url: baseUrl + 'interface/biaoqian.php',
					method: 'post',
					async: true,
					data: {
						language: 2,
						type: 1,

					},
					dataType: 'json',
					success: function(res) {
						for(var i in res) {
							
							var _content = res[i].content.replace(/&lt;/gim, '<').replace(/&gt;/gim, '>')
							that.markListEn[0].push({
								title: res[i].title,
								time: res[i].create_time,
								content: _content
							})
						}
					}
				})
				$.ajax({
					url: baseUrl + 'interface/biaoqian.php',
					method: 'post',
					async: true,
					data: {
						language: 2,
						type: 2,

					},
					dataType: 'json',
					success: function(res) {
						for(var i in res) {
							
							var _content = res[i].content.replace(/&lt;/gim, '<').replace(/&gt;/gim, '>')
							that.markListEn[1].push({
								title: res[i].title,
								time: res[i].create_time,
								content: _content
							})
						}
					}
				})
				$.ajax({
					url: baseUrl + 'interface/biaoqian.php',
					method: 'post',
					async: true,
					data: {
						language: 2,
						type: 3,

					},
					dataType: 'json',
					success: function(res) {
						for(var i in res) {
							
							var _content = res[i].content.replace(/&lt;/gim, '<').replace(/&gt;/gim, '>')
							that.markListEn[2].push({
								title: res[i].title,
								time: res[i].create_time,
								content: _content
							})
						}
					}
				})
				$.ajax({
					url: baseUrl + 'interface/biaoqian.php',
					method: 'post',
					async: true,
					data: {
						language: 2,
						type: 4,

					},
					dataType: 'json',
					success: function(res) {
						for(var i in res) {
							
							var _content = res[i].content.replace(/&lt;/gim, '<').replace(/&gt;/gim, '>')
							that.markListEn[3].push({
								title: res[i].title,
								time: res[i].create_time,
								content: _content
							})
						}
					}
				})
		},
		methods: {
			closeMark() {
				this.markShow = false
			},
			openMark(data) {
				this.markShow = true
				this.markTitle = data.title
				this.markContent = data.content
			}
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
			language() {
				return this.$store.state.language
			},
			useList() {
				return [{
					order: 'first',
					name: this.$t('guide.part2.title1'),
					service: 'Fomifx' + this.$t('guide.part2.service'),
					service2: this.$t('guide.part2.service2'),
					tech: 'Torrent' + this.$t('guide.part2.tech'),
					tech2: this.$t('guide.part2.tech2'),
					list: [{
						name: 'Fomifx' + this.$t('guide.part2.txt1')
					}, {
						name: 'Fomifx7.0' + this.$t('guide.part2.txt2')
					}, {
						name: 'Fomifx6.9' + this.$t('guide.part2.txt2')
					}]
				}, {
					order: 'second',
					name: this.$t('guide.part2.title2'),
					service: 'Fomifx' + this.$t('guide.part2.service'),
					service2: this.$t('guide.part2.service2'),
					tech: 'Mobile' + this.$t('guide.part2.tech'),
					tech2: this.$t('guide.part2.tech2'),
					list: [{
						name: 'Mobile' + this.$t('guide.part2.txt1')
					}, {
						name: 'Mobile7.0' + this.$t('guide.part2.txt2')
					}, {
						name: 'Mobile6.9' + this.$t('guide.part2.txt2')
					}]
				}, {
					order: 'third',
					name: this.$t('guide.part2.title3'),
					service: 'Fomifx' + this.$t('guide.part2.service'),
					service2: this.$t('guide.part2.service2'),
					tech: 'Squirrel' + this.$t('guide.part2.tech'),
					tech2: this.$t('guide.part2.tech2'),
					list: [{
						name: 'Squirrel' + this.$t('guide.part2.txt1')
					}, {
						name: 'Squirrel7.0' + this.$t('guide.part2.txt2')
					}, {
						name: 'Squirrel6.9' + this.$t('guide.part2.txt2')
					}]
				}, {
					order: 'forth',
					name: this.$t('guide.part2.title4'),
					service: 'Fomifx' + this.$t('guide.part2.service'),
					service2: this.$t('guide.part2.service2'),
					tech: 'Socialtrading' + this.$t('guide.part2.tech'),
					tech2: this.$t('guide.part2.tech2'),
					list: [{
						name: 'Socialtrading' + this.$t('guide.part2.txt1')
					}, {
						name: 'Socialtrading7.0' + this.$t('guide.part2.txt2')
					}, {
						name: 'Socialtrading6.9' + this.$t('guide.part2.txt2')
					}]
				}]
			}
		},
		watch: {
			language: function(a, b) {
				if(a == true) {
					this.questionList = this.questionListEn
					this.markList=this.markListEn

				} else {
					this.questionList = this.questionListCn
					this.markList=this.markListCn
				}
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
		.container {
			padding: 135vw/@w 0;
			h1 {
				text-align: center;
			}
			.el-tabs {
				width: 80%;
				margin: 0 auto;
				.el-tabs__nav-wrap::after {
					background-color: transparent;
				}
			}
		}
	}
	
	.part-3 {
		background: #f5f5f5;
		.container {
			padding: 135vw/@w 0;
			h1 {
				text-align: center;
			}
			.content {
				margin-top: 50px;
			}
		}
	}
	@media only screen and (max-width: 768px){
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
		.part-2{
			.container{
				h1{
					font-size: 20px;
				}
			}
		}
	}
</style>