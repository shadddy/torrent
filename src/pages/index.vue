<template>
	<div class="index">
		<my-header></my-header>
		<!--Torrent-Trader 7.0下载-->
		<div class="banner-1">
			<div class="container">
				<div class="content">
					<h1>Torrent-Trader7.0</h1>
					<h2>定制化的专业级多界面看盘软件</h2>
					<div class="download">立即下载</div>
				</div>
			</div>
		</div>
		<!--自定义-->
		<div class="custom">
			<div class="container">
				<div class="custom-item">

					<div class="left"></div>
					<div class="right">
						<h3>自定义界面</h3>
						<p>可自主进行多个界面和窗口设置，便利操作</p>
					</div>

				</div>

				<div class="custom-item">
					<div class="left"></div>
					<div class="right">
						<h3>自定义界面</h3>
						<p>可自主进行多个界面和窗口设置，便利操作</p>
					</div>
				</div>

				<div class="custom-item">
					<div class="left"></div>
					<div class="right">
						<h3>自定义界面</h3>
						<p>可自主进行多个界面和窗口设置，便利操作</p>
					</div>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	import header from '@/components/header'
	export default {
		components: {
			myHeader: header
		}
	}
</script>

<style scoped lang="less">
	@w: 19.2;
	.index {
		.el-main {
			padding: 0;
		}
		.banner-1 {
			position: relative;
			width: 100%;
			height: 800vw/@w;
			background-image: url(../../static/img/bg-1.jpg);
			background-size: 100% 100%;
			padding-top: 270vw/@w;
			.content {
				width: 500vw/@w;
				h1 {
					font-size: 54vw/@w;
					color: #f9d681;
					font-weight: 500;
				}
				h2 {
					font-size: 32vw/@w;
					color: white;
				}
				.download {
					cursor: pointer;
					margin-top: 20vw/@w;
					width: 300vw/@w ;
					height: 78vw/@w;
					background: #f9d681;
					color: black;
					font-size: 20vw/@w;
					text-align: center;
					line-height: 78vw/@w;
					border-radius: 20vw/@w;
				}
			}
		}
		.custom {
			overflow: hidden;
			padding: 120vw/@w 0 120vw/@w 0; 
			
			.container {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				.custom-item {
					display: flex;
					width: calc(100%/3);
					
					.left {
						width: 90px;
						height: 90px;
						border-radius: 50%;
						background-color: #4286f5;
						background-image: url(../../static/img/icon-1.png);
						background-position: center;
						background-repeat: no-repeat;
						margin-right: 10px;
					}
					.right {
						h3 {
							margin-top: 20px;
						}
						p {
							margin-top: 10px;
							word-wrap: break-word;
						}
					}
				}
			}
		}
	}
	
	@media only screen and (max-width:1300px) {
		.index {
			.custom {
				.container {
					.custom-item {
						width: 100%;
					}
				}
			}
		}
	}
</style>