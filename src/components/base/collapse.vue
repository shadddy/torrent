<template>
	<div class="collapse">
		<div class="collapse-wrap">
			<h2 @click="isDrop=!isDrop">
				<span :class="isDrop?'act':null">></span>{{title}}
			</h2>
			<div class="collapse-content" v-show="isDrop" v-html="content">
				<!--<p>最低硬件要求：</p>
				<p>操作系统：Windows 7/8/10 Mac OS 10.10+</p>
				<p>CPU：2 GHz或更快</p>
				<p>RAM：8 GB</p>
				<p>Internet 连接：2 Mbps</p>
				<p>空闲磁盘空间：80 MB </p>
				<p>推荐硬件要求：</p>
				<p>操作系统：Windows 7/8/10 Mac OS 10.10+</p>
				<p>CPU：四核处理器(i7等)，3 GHz或更快 </p>
				<p>RAM：16 GB</p>
				<p>Internet 连接：DSL/电缆 10 Mbps</p>
				<p>硬盘：SSD固态硬盘上</p>
				<p>屏幕：24'，1920x1080</p>
				<p>空闲磁盘空间：80 MB</p>-->
				{{content}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:''
			},
			content:{
				type:String,
				default:''
			},
			content_2:{
				type:String,
				default:'<p>hii</p>'
			}
		},
		data() {
			return {
				isDrop: false
			}
		},
		mounted(){
			setTimeout(function(){
				$('.collapse-content').text(this.content)
			},2000)
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="less">
	.collapse {
		margin-bottom: 10px;
		width: 100%;
		.collapse-wrap {
			width: 100%;
			h2 {
				background: #e6e6e6;
				font-size: 14px;
				cursor: pointer;
				padding: 10px;
				border-radius: 5px;
			}
			.collapse-content{
				padding: 10px 20px;
			}
		}
	}
	.act{
		transform: rotate(45deg);
	}
</style>