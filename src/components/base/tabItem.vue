<template>
	<div class="tabItem">
		<div class="content">
			<div>
				<div class="left-wrap">
					<div>
						<h3>{{mylist.service}}</h3>
						<h6>24小时为您服务</h6>
						<span>使用咨询</span>
					</div>
					<div>
						<h3>技术研发部</h3>
						<h6>专注产品定制升级</h6>
						<span>技术咨询</span>
					</div>
				</div>
			</div>
			<div>
				<ul>
					<li v-for="item in mylist.list">
						<span class="listItem">{{item.name}}</span>
						<span class="date">
						2018-06-05
					</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			mylist:{
				
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
			}
			.left-wrap {
				display: flex;
				width: 95%;
				margin: 0 auto;
				background: url(../../../static/img/guide/part2-1.png) center no-repeat;
				padding: 100px 50px;
				border-radius: 10px;
				h3{
					font-size: 20px;
					color: white;
					font-weight: 500;
					text-align: center;
				}
				h6{
					font-size: 14px;
					color: #ccc;
					font-weight: 500;
					text-align: center;
					margin: 15px 0;
				}
				span{
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
		.tabItem{
			.content{
				flex-direction: column;
				div{
					width: 100%;
					.left-wrap{
						padding: 30px 20px;
						div{
							display: flex;
							flex-direction: column;
							justify-content: space-between;
						}
					}
				}
			}
		}	
	}
</style>