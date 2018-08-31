<template>
<div class="software_4">
		<div class="banner-1">
			<div class="container">
				<div class="content">
					<h1>{{$t('software_4.first.title')}}</h1>
					<h3>{{$t('software_4.first.title2')}}</h3>
					<div class="btnBox">
						<span>{{$t('software_4.first.btn')}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import header from '@/components/header'
	import footer from '@/components/footer'
	export default{
		components: {
			myHeader: header,
			myFooter: footer
		}
	}
</script>

<style>
</style>