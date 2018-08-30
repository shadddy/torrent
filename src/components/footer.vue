<template>
	<div class="footer">
		<div class="container">
			<h4>{{$t('footer.title')}}</h4>
			<p v-for="item in footList">
				{{item.txt}}
			</p>
			<span class="copyright">
				{{$t('footer.copyright')}}
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			footList() {
				return [{
					txt: this.$t('footer.txt1')
				}, {
					txt: this.$t('footer.txt2')
				}, {
					txt: this.$t('footer.txt3')
				}, {
					txt: this.$t('footer.txt4')
				}, {
					txt: this.$t('footer.txt5')
				}]
			}
		}
	}
</script>

<style scoped lang="less">
	@w: 19.2;
	.footer {
		background-color: #1a1717;
		.container {
			padding: 85vw/@w 0 30vw/@w 0;
			h4 {
				color: #e1e0e0;
				font-size: 14px;
			}
			p{
				color: #999999;
				font-size: 14px;
				margin-top: 20px;
			}
			.copyright{
				color: #999999;
				display: block;
				margin-top: 60px;
			}
		}
	}
</style>