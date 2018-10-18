<template>
	<div class="tabItem">
		<div class="content">
			<div>
				<div class="left-wrap">
					<div>
						<h3>Fomifx{{$t('guide.part2.service')}}</h3>
						<h6>{{$t('guide.part2.service2')}}</h6>
						<span @click="toQ(2093003828)">{{$t('guide.part2.btn1')}}</span>
					</div>
					<div>
						<h3>{{$t('guide.part2.tech')}}</h3>
						<h6>{{$t('guide.part2.tech2')}}</h6>
						<span @click="toQ(2063317281)">{{$t('guide.part2.btn2')}}</span>
					</div>
				</div>
			</div>
			<div>
				<ul>
					<li v-for="item in mylist"  @click='openMark'>
						<span class="listItem">{{item.title}}</span>
						<span class="date">
						{{item.time|capitalize}}
					</span>
					<span v-show="false">
						{{item.content}}
					</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			mylist: {

			}
		},
		data() {
			return {
				list: [{
					name: '1'
				}, {
					name: '2'
				}, {
					name: '3'
				}, {
					name: '4'
				}, {
					name: '5'
				}]
			}
		},
		methods:{
			openMark(event){
				console.log(event.currentTarget.childNodes)
				var _title=event.currentTarget.childNodes[0].innerText
				var _content=event.currentTarget.childNodes[4].innerText
				this.$emit('openMark',{title:_title,content:_content})
			},
			toQ(val){
				window.open("http://wpa.qq.com/msgrd?v=3&uin="+val+"&site=qq&menu=yes")
			}
		},
		filters: {
			capitalize: function(value) {
				if(!value) return ''
				value = value.split(' ')[0]
				return value
			}
		}
	}
</script>

<style scoped lang="less">
	.tabItem {
		width: 100%;
		.content {
			width: 100%;
			display: flex;
			div {
				width: 50%;
				overflow: hidden;
			}
			.left-wrap {
				display: flex;
				width: 95%;
				margin: 0 auto;
				background: url(../../../static/img/guide/part2-1.png) center no-repeat;
				padding: 100px 50px;
				border-radius: 10px;
				h3 {
					font-size: 20px;
					color: white;
					font-weight: 500;
					text-align: center;
				}
				h6 {
					font-size: 14px;
					color: #ccc;
					font-weight: 500;
					text-align: center;
					margin: 15px 0;
				}
				span {
					display: block;
					text-align: center;
					border: 1px solid #f9d681;
					width: 50%;
					margin: 0 auto;
					color: #f9d681;
					border-radius: 20px;
					font-size: 14px;
					height: 30px;
					line-height: 30px;
					cursor: pointer;
				}
			}
			li {
				margin-left: 20px;
				border-bottom: 1px dashed #ccc;
				list-style: disc;
				color: #666;
				height: 40px;
				line-height: 40px;
				.listItem {
					cursor: pointer;
				}
				.date {
					float: right;
					color: #ccc;
				}
			}
		}
	}
	
	@media only screen and (max-width: 768px) {
		.tabItem {
			.content {
				flex-direction: column;
				div {
					width: 100%;
					.left-wrap {
						padding: 30px 20px;
						div {
							display: flex;
							flex-direction: column;
							justify-content: space-between;
						}
					}
				}
				.left-wrap{
					h3{
						font-size: 14px;
					}
					span{
						width: 60%;
					}
				}
			}
		}
	}
</style>