<template>
	<div class="bigdata">
		<my-header></my-header>
		<div class="banner">
			<div class="content">
				<h1>{{$t('bigdata.banner.title')}}</h1>
				<p>{{$t('bigdata.banner.title2')}}</p>
				<div class="btn-box">
					<span @click="Router('download')">{{$t('table.part1.btn1')}}</span>
					<span @click="Router('register')">{{$t('table.part1.btn2')}}</span>
				</div>
			</div>
		</div>
		<div class="part-1">
			<div class="container">
				<h1>{{$t('bigdata.banner.title')}}</h1>
				<div class="content">
					<ul>
						<li v-for="item in chartList">
							<my-chart :id="item.id" :title="item.title" :data='item.data'></my-chart>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import header from '@/components/header'
	import footer from '@/components/footer'
	import echart from '@/components/base/echart'
	export default {
		components: {
			myHeader: header,
			myFooter: footer,
			myChart: echart
		},
		methods:{
			Router(url){
				this.$router.push('/'+url)
			}
		},
		computed: {
			chartList() {
				return [{
						id: 'chart1',
						title: this.$t('bigdata.charts.title1'),
						data:[[0, 14, 23, 34, 50,67,84],[0, 30, 54,67, 63,78, 70],[0, 32, 20, 54, 19, 33, 41]]
					},
					{
						id: 'chart2',
						title: this.$t('bigdata.charts.title2'),
						data:[[0, 10, 34,67, 63,78, 70],[0, 14, 23, 34, 50,67,84],[0, 32, 20, 54, 19, 33, 41]]
					},
					{
						id: 'chart3',
						title: this.$t('bigdata.charts.title3'),
						data:[[0, 14, 23, 34, 50,67,84],[0, 30, 54,67, 63,78, 70],[0, 22, 20, 54, 19, 33, 41]]
					},
					{
						id: 'chart4',
						title: this.$t('bigdata.charts.title4'),
						data:[[0, 14, 23, 34, 50,67,84],[0, 30, 54,67, 53,78, 70],[0, 32, 20, 54, 19, 33, 41]].reverse()
					},
					{
						id: 'chart5',
						title: this.$t('bigdata.charts.title5'),
						data:[[0, 14, 23, 34, 50,67,84],[0, 30, 54,67, 63,78, 70],[0, 32, 20, 54, 19, 33, 41]]
					},
					{
						id: 'chart6',
						title: this.$t('bigdata.charts.title6'),
						data:[[0, 14, 23, 34, 50,67,84],[0, 30, 54,47, 63,78, 70],[0, 32, 30, 54, 19, 33, 41]].reverse()
					}
				]
			}
		}
	}
</script>

<style scoped lang="less">
	@w: 19.2;
	.bigdata {
		.banner {
			width: 100%;
			height: 560vw/@w;
			background: url(../../static/img/bigdata/banner-1.jpg) center no-repeat;
			background-size: 100% 100%;
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
			background: #f5f5f5;
			h1 {
				text-align: center;
				padding-top: 135vw/@w;
				padding-bottom: 40vw/@w;
			}
			.content {
				width: 100%;
				ul {
					display:flex;
					flex-wrap: wrap;
					justify-content: space-between;
					li {
						margin-top: 30vw/@w;
						width: 49%;
						height: 512vw/@w;
						position: relative;
						background: white;
						padding: 30vw/@w;
					}
				}
			}
		}
	}
	@media only screen and (max-width: 768px) {
		.bigdata{
			.part-1{
				h1{
					font-size: 20px;
				}
				.content{
					ul{
						li{
							width: 100%;
							height: 300px;
						}
					}
				}
			}
		}
	}
</style>