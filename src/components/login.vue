<template>
	<div class="login" v-show="isShow">

		<div class="login-wrap">
			<h2>用户登录<img src="../../static/img/close_03.jpg" class="close" @click="closeMyself"></h2>
			<div class="login-content">
				<label>用户名:</label>
				<input type="text" />
				<label>密码:</label>
				<input type="password" />
<!--				<span>忘记密码?</span>-->
				<a>登录</a>
				<a @click="toRegister">注册</a>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			closeMyself(){
				this.$emit('on-close')
			},
			toRegister(){
				this.$router.push('/register');
			}
		}
	}
</script>

<style scoped lang="less">
	.login {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 999;
		.login-wrap {
			width: 55.6%;
			max-width: 700px;
			position: absolute;
			left: 50%;
			top: 40%;
			transform: translate(-50%, -50%);
			background: #fff;
			border-top: 3px solid #00aaef;
			padding-bottom: 32px;
			h2 {
				background: #f5f6fa;
				position: relative;
				.close {
					position: absolute;
					display: block;
					right: 24px;
					top: 50%;
					transform: translateY(-50%);
					cursor: pointer;
				}
			}
			.login-content {
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				width: 320px;
				margin: 30px auto;
				input {
					display: block;
					margin: 0 auto;
					width: 320px;
					border: 1px solid #3bc0ff;
					box-sizing: border-box;
					color: #666;
					font-size: 14px;
					height: 40px;
					line-height: 40px;
					padding-left: 10px;
					background: #f2fbfe;
				}
				span{
					text-align: right;
					cursor: pointer;
				}
				a{
					text-align: center;
					height: 40px;
					line-height: 40px;
					background:#3bc0ff;
					margin-top: 10px;
					color: white;
					cursor: pointer;
				}
			}
		}
	}
	@media only screen and  (max-width: 768px) {
		.login{
			.login-wrap{
				width: 100%;
			}
		}
	}
</style>