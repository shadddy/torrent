<template>
	<div class="register">
		<my-header></my-header>
		<div class="register-wrap">
			<div class="container">
				<h1>请您注册账号</h1>
				<ul>
					<li>
						<span>用户名:</span>
						<input type="text" />
					</li>
					<li>
						<span>密码:</span>
						<input type="password" />
					</li>
					<li>
						<span>确认密码:</span>
						<input type="password" />
					</li>
					<li>
						<span>姓名:</span>
						<input type="text" />
					</li>
					<li>
						<span>手机号:</span>
						<input type="number" />
					</li>
					<li>
						<span>邀请码:</span>
						<input type="number" />
					</li>
					<li class="btn">
						<a>立即注册</a>
					</li>
				</ul>

			</div>
		</div>
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

<style scoped lang="less">
	.register {
		.register-wrap {
			border-top: 1px solid #ccc;
			.container {
				padding: 100px 0;
				h1 {
					text-align: center;
				}
				ul {
					display: flex;
					flex-wrap: wrap;
					margin: 0 auto;
					width: 360px;
					li {
						width: 100%;
						display: flex;
						flex-direction: column;
						input {
							width: 100%;
							height: 100%;
							box-sizing: border-box;
							border: 1px solid #38bfff;
							background: #f2fbfe;
							height: 40px;
							padding-right: 40px;
						}
						a {
							width: 100%;
							height: 40px;
							background: #38bfff;
							text-align: center;
							color: white;
							line-height: 40px;
							cursor: pointer;
							
						}
					}
					.btn{
						margin-top: 30px;
					}
				}
			}
		}
	}
</style>