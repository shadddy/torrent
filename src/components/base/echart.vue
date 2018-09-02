<template>
	<div class="echart">
		<div :id="id">

		</div>
	</div>
</template>

<script>
	export default {
		props: {
			id: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: '标题'
			},
			data: {
				type:Array,
				default:''
			}
		},
		data() {
			return {

			}
		},
		mounted() {
			let mychart = this.$echarts.init(document.getElementById(this.id))
			mychart.setOption({
				color:['#32aa43','#d4171f','#f46b2e'],
				title: {
					text: this.title,
					bottom:'0',
					left:'center',
					textStyle:{
						color:'#ccc'
					}
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985'
						}
					},
					formatter: '{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}:{c2}%'
				},
				legend: {
					left:'10%',
					icon:'rect',
					data: ['看多', '看空', '交易量']
				},
				
				grid: {
					left: '3%',
					right: '4%',
					bottom: '8%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					boundaryGap: false,
					data:['周一','周二','周三','周四','周五','周六','周日'],
					axisLabel:{
						show:false
					},
					axisTick:{
						show:false
					}
				}],
				yAxis: [{
					type: 'value',
					min:0,
					max:100,
					axisLabel:{
						formatter:'{value}%'
					}
				}],
				series: [{
						name: '看多',
						type: 'line',
						stack: '看多',
						smooth:true,
						lineStyle:{
							color:'#32aa43'
						},
						areaStyle: {
							normal: {
								color:'rgba(50,170,67,0.5)'
							}
						},
						data: this.data[0]
					},
					{
						name: '看空',
						type: 'line',
						stack: '看空',
						smooth:true,
						lineStyle:{
							color:'#d4171f'
						},
						areaStyle: {
							normal: {
								color:'rgba(212,23,31,0.5)'
							}
						},
						data: this.data[1]
					},
					{
						name: '交易量',
						type: 'line',
						stack: '交易量',
						smooth:true,
						lineStyle:{
							color:'#f46b2e'
						},
						areaStyle: {
							normal: {
								color:'rgba(244,107,46,0.5)'
							}
						},
						data: this.data[2]
					}
				]
			})
		}
	}
</script>

<style scoped lang="less">
	.echart {
		width: 100%;
		height: 100%;
		div {
			width: 100%;
			height: 100%;
		}
	}
</style>