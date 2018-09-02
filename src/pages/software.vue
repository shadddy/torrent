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
	.software {
		.banner-1 {
			width: 100%;
			height: 800vw/@w;
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
			background: #f5f5f5;
			.container {
				h1 {
					text-align: center;
					font-weight: 500;
				}
				.btn {
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
					margin: 70vw/@w auto 0 auto;
					border-radius: 30vw/@w;
					border: 1px solid @yellow;
				}
				.btn:hover {
					background: transparent;
					color: @yellow;
				}
				ul {
					margin: 0 auto;
					margin-top: 80vw/@w;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					li {
						background: white;
						margin-bottom: 20px;
						margin-right: 10px;
						border-radius: 20px;
						box-shadow: 0 0 10px #ccc;
						width: 48%;
						display: flex;
						padding: 45vw/@w 35vw/@w;
						span {
							margin-right: 10px;
							width: 30px;
							text-align: center;
							line-height: 30px;
							height: 30px;
							border: 1px solid #ccc;
						}
						h3 {
							font-size: 20px;
						}
						p {
							font-size: 14px;
							line-height: 30px;
						}
					}
				}
			}
		}
	}
	
</style>