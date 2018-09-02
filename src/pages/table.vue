<template>
	<div class="table">
		<my-header></my-header>
		<div class="banner-1">
			<div class="content">
				<h1>{{$t('table.part1.title')}}</h1>
				<p>{{$t('table.part1.title2')}}</p>
				<div class="btn-box">
					<span>{{$t('table.part1.btn1')}}</span>
					<span>{{$t('table.part1.btn2')}}</span>
				</div>
			</div>
		</div>
		<div class="part-1">
			<div class="container">
				<h3>{{$t('table.part2.title')}}</h3>
				<table>
					<tr>
						<th>{{$t('table.part2.coinCom')}}</th>
						<th>{{$t('table.part2.buyIn')}}</th>
						<th>{{$t('table.part2.saleOut')}}</th>
						<th>{{$t('table.part2.diff')}}</th>
					</tr>
					<tr v-for="item in tableList">
						<td v-for="i in item">
							{{i}}
						</td>
					</tr>

				</table>
				<span class="btn">{{$t('more')}}</span>
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
		},
		computed: {
			tableList() {
				return [{
						name: this.$t('table.part2.euro') + '/' + this.$t('table.part2.dollar'),
						buyIn: 1.14130,
						saleOut: 1.14132,
						diff: 0.2
					},
					{
						name: this.$t('table.part2.euro') + '/' + this.$t('table.part2.dollar'),
						buyIn: 1.14130,
						saleOut: 1.14132,
						diff: 0.2
					},
					{
						name: this.$t('table.part2.euro') + '/' + this.$t('table.part2.dollar'),
						buyIn: 1.14130,
						saleOut: 1.14132,
						diff:0.2
					}
				]
			}
		}
	}
</script>

<style scoped lang="less">
	@w: 19.2;
	.table {
		.banner-1 {
			background: url(../../static/img/table/banner1.jpg) center no-repeat;
			background-size: 100% 100%;
			width: 100%;
			height: 560vw/@w;
			overflow: hidden;
			.content {
				width: 60%;
				margin: 145vw/@w auto;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				flex-direction: column;
				h1 {
					text-align: center;
					color: white;
					font-size: 58vw/@w;
					font-weight: 400;
					flex-direction: row;
					margin-bottom: 35vw/@w;
				}
				p {
					text-align: center;
					font-size: 24vw/@w;
					color: #999999;
					line-height: 36vw/@w;
					margin-bottom: 50vw/@w;
				}
				.btn-box {
					overflow: hidden;
					position: relative;
					display: flex;
					flex-direction: row;
					justify-content: center;
					span {
						transition: .5s;
						-moz-transition: .5s;
						-ms-transition: .5s;
						-webkit-transition: .5s;
						cursor: pointer;
						display: inline-block;
						color: #f9d681;
						font-size: 20vw/@w;
						padding: 22vw/@w 60vw/@w;
						border: 1px solid #f9d681;
						border-radius: 50vw/@w;
					}
					span:nth-of-type(2) {
						margin-left: 30px;
					}
					span:hover {
						background: #f9d681;
						color: white;
					}
				}
			}
		}
		.part-1 {
			.container {
				h3 {
					text-align: center;
					padding: 135vw/@w 0 50vw/@w 0;
				}
				table {
					width: 100%;
					table-layout: fixed;
					th {
						letter-spacing: 10px;
						font-weight: 100;
						background: #0a264d;
						color: white;
						padding: 30px 0;
					}
					tr{
						td{
							padding: 30px 0;
							text-align: center;
						}
					}
					tr:nth-child(odd){
						background: white;
					}
					tr:nth-child(even){
						background: #f1f2f4;
					}
				}
				.btn{
					width: 432vw/@w;
					height: 78vw/@w;
					display: block;
					margin: 60vw/@w auto;
					text-align: center;
					line-height: 78vw/@w;
					font-size: 30vw/@w;
					border: 1px solid #f9d681;
					background: #f9d681;
					cursor: pointer;
					border-radius: 40vw/@w;
					transition: .5s;
						-moz-transition: .5s;
						-ms-transition: .5s;
						-webkit-transition: .5s;
				}
				.btn:hover{
					background: transparent;
					color: #f9d681;
				}
			}
		}
	}
</style>