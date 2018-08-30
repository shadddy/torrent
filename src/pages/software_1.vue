<template>
	<div class="software_1">
		<div class="banner-1">
			<div class="container">
				<div class="content">
					<h1>{{$t('software_1.first.title')}}</h1>
					<h3>{{$t('software_1.first.title2')}}</h3>
					<div class="btnBox">
						<span>{{$t('software_1.first.btn1')}}</span>
						<span>{{$t('software_1.first.btn2')}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="banner-2">
			<div class="container">
				<div class="content">
					
				</div>
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
		computed:{
			
		}
	}
</script>

<style scoped lang="less">
@w:19.2;
.banner-2{
	background: url(../../static/img/software/software-1-2.jpg) no-repeat center;
	background-size: 100% 100%;
	width: 100%;
	height: 909vw/@w;
}
</style>