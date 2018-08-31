<template>
	<div class="software">
		<my-header></my-header>
		<router-view></router-view>
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
		}
	}
</script>

<style lang="less">
	@w: 19.2;
	@yellow: #f9d681;
	.banner-1 {
		width: 100%;
		height: 800vw/@w;
		background: url(../../static/img/software/software-1-1.jpg) no-repeat center;
		background-size: 100% 100%;
		.container {
			padding: 270vw/@w 0;
			.content {
				h1 {
					color: white;
					font-size: 60vw/@w;
					font-weight: 500;
					margin-bottom: 20vw/@w;
				}
				h3 {
					font-size: 34vw/@w;
					color: #CCCCCC;
					font-weight: 500;
				}
				.btnBox {
					margin-top: 80vw/@w;
					span {
						cursor: pointer;
						font-size: 20vw/@w;
						color: @yellow;
						padding: 25vw/@w 50vw/@w;
						border: 1px solid @yellow;
						border-radius: 50vw/@w;
						margin-right: 20vw/@w;
					}
				}
			}
		}
	}
	
	.banner-3 {
		padding: 120vw/@w;
		.container {
			h1 {
				text-align: center;
				font-weight: 500;
			}
			.btn{
				transition: .5s;
				-moz-transition: .5s;
				-ms-transition: .5s;
				-webkit-transition: .5s;
				font-size: 30vw/@w;
				cursor: pointer;
				width: 430vw/@w;
				height: 77vw/@w;
				background: @yellow;
				display: block;
				line-height: 77vw/@w;
				text-align: center;
				margin: 40vw/@w auto 0 auto;
				border-radius: 30vw/@w;
				border: 1px solid @yellow;
			}
			.btn:hover{
				background: transparent;
			}
		}
	}
</style>