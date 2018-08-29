<template>
	<div class="header">
		<!--PC端头部-->
		<div class="container">
			<el-row :gutter="1">
				<el-col :xl="2" :xs="0">
					<img src="../../static/img/logo.png" class="logo" />
				</el-col>
				<el-col :xl="6" :offset='10' :md="0" :xs="0" :lg="0">
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
						<el-menu-item v-for="(item,ind) in navList" :index="item.name">
							{{item.name}}
						</el-menu-item>
					</el-menu>
				</el-col>
				<el-col :xl="3">
					<span class="registerBtn">{{$t('registerBtn')}}</span>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '0',
				navList: [{
					name: this.$t("header.nav_top.nav1")
				}, {
					name: this.$t("header.nav_top.nav2")
				}, {
					name: this.$t("header.nav_top.nav3")
				}, {
					name: this.$t("header.nav_top.nav4")
				}]
			}
		}
	}
</script>

<style scoped lang="less">
	.header {
		width: 100%;
		height: 72px;
		.container {
			.logo {
				margin-top: 10px;
				width: 124px;
				height: 52px;
			}
			.registerBtn {
				border: 1px solid #808080;
				padding: 10px 20px;
				border-radius: 5px;
				line-height: 75px;
			}
		}
	}
</style>