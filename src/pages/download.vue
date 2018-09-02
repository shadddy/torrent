<template>
	<div class="download">
		<my-header></my-header>
		<div class="part-1">
			<div class="content">
				<h1>{{$t('download.part1.title')}}</h1>
				<ul>
					<li v-for="item in part1">
						<img :src="item.icon">
						<p>{{item.txt}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="part-2">
			<div class="container">
				<div class="content_left">
					<h1>{{$t('download.part2.title')}}</h1>
					<p>{{$t('download.part2.title2')}}</p>
					<ul>
						<li>
							<span class="icon icon-1"></span>
							<span>{{$t('download.part2.txt1')}}</span>
						</li>
						<li>
							<span class="icon icon-2"></span>
							<span>{{$t('download.part2.txt2')}}</span>
						</li>
						<li>
							<span class="icon icon-3"></span>
							<span class="link">{{$t('download.part2.txt3.txt1')}}</span>
							<span class="link">{{$t('download.part2.txt3.txt2')}}</span>
							<span class="link">{{$t('download.part2.txt3.txt3')}}</span>
						</li>
					</ul>
					<div class="btn">
						{{$t('download.btn')}}
					</div>
				</div>
			</div>
		</div>
		<div class="part-3">
			<div class="container">
				<div class="content_right">
					<h1>{{$t('download.part3.title')}}</h1>
					<p>{{$t('download.part3.title2')}}</p>
					<ul>
						<li>
							<span class="icon icon-1"></span>
							<span>{{$t('download.part2.txt1')}}</span>
						</li>
						<li>
							<span class="icon icon-2"></span>
							<span>{{$t('download.part2.txt2')}}</span>
						</li>
						<li>
							<span class="icon icon-3"></span>
							<span class="link">{{$t('download.part3.txt3.txt1')}}</span>
							<span class="link">{{$t('download.part3.txt3.txt2')}}</span>
							<span class="link">{{$t('download.part3.txt3.txt3')}}</span>
						</li>
					</ul>
					<div class="btn">
						{{$t('download.btn')}}
					</div>
				</div>
			</div>
		</div>
		<div class="part-4">
			<div class="container">
				<div class="content_left">
					<h1>{{$t('download.part4.title')}}</h1>
					<p>{{$t('download.part4.title2')}}</p>
					<ul>
						<li>
							<span class="icon icon-1"></span>
							<span>{{$t('download.part4.txt1')}}</span>
						</li>
						<li>
							<span class="icon icon-2"></span>
							<span>{{$t('download.part4.txt2')}}</span>
						</li>
						<li>
							<span class="icon icon-3"></span>
							<span class="link">{{$t('download.part4.txt3.txt1')}}</span>
							<span class="link">{{$t('download.part4.txt3.txt2')}}</span>
							<span class="link">{{$t('download.part4.txt3.txt3')}}</span>
						</li>
					</ul>
					<div class="btn">
						{{$t('download.btn')}}
					</div>
				</div>
			</div>
		</div>
		<div class="part-5">
			<div class="container">
				<div class="content_left content_left_right">
					<h1>{{$t('download.part5.title')}}</h1>
					<p>{{$t('download.part5.title2')}}</p>
					<ul>
						<li>
							<span class="icon icon-1"></span>
							<span>{{$t('download.part5.txt1')}}</span>
						</li>
						<li>
							<span class="icon icon-2"></span>
							<span>{{$t('download.part5.txt2')}}</span>
						</li>
						<li>
							<span class="icon icon-3"></span>
							<span class="link">{{$t('download.part5.txt3.txt1')}}</span>
							<span class="link">{{$t('download.part5.txt3.txt2')}}</span>
							<span class="link">{{$t('download.part5.txt3.txt3')}}</span>
						</li>
					</ul>
					<div class="btn">
						{{$t('download.btn')}}
					</div>
				</div>
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
			part1() {
				return [{
					txt: this.$t('download.part1.txt1'),
					icon: require('../../static/img/download/part1-icon-1.png')
				}, {
					txt: this.$t('download.part1.txt2'),
					icon: require('../../static/img/download/part1-icon-2.png')
				}, {
					txt: this.$t('download.part1.txt3'),
					icon: require('../../static/img/download/part1-icon-3.png')
				}]
			}
		}
	}
</script>

<style scoped lang="less">
	@w: 19.2;
	.part-1 {
		width: 100%;
		height: 800vw/@w ;
		background: url(../../static/img/download/download-1.jpg) no-repeat center;
		background-size: 100% 100%;
		.content {
			width: 640vw/@w;
			margin: 0 auto;
			padding-top: 210vw/@w;
			h1 {
				color: white;
				text-align: center;
				font-size: 54vw/@w;
				padding-bottom: 60vw/@w;
			}
			ul {
				display: flex;
				justify-content: space-between;
				li {
					img {
						width: 100%;
					}
					p {
						margin-top: 35vw/@w;
						text-align: center;
						color: white;
						font-size: 34vw/@w;
					}
				}
			}
		}
	}
	
	.part-2 {
		width: 100%;
		height: 878vw/@w ;
		background: url(../../static/img/download/download-2.jpg) no-repeat center;
		background-size: 100% 100%;
	}
	
	.part-3 {
		width: 100%;
		height: 839vw/@w ;
		background: url(../../static/img/download/download-3.jpg) no-repeat center;
		background-size: 100% 100%;
	}
	
	.part-4 {
		width: 100%;
		height: 811vw/@w ;
		background: url(../../static/img/download/download-4.jpg) no-repeat center;
		background-size: 100% 100%;
	}
	
	.part-5 {
		width: 100%;
		height: 879vw/@w ;
		background: url(../../static/img/download/download-5.jpg) no-repeat center;
		background-size: 100% 100%;
	}
	
	.icon {
		display: block;
		margin-right: 20vw/@w;
		width: 22px;
		height: 22px;
	}
	
	.link {
		margin-right: 10vw/@w;
		cursor: pointer;
		color: #4ea1ff;
	}
	
	.btn {
		width: 250vw/@w;
		height: 66vw/@w;
		background: #f9d681;
		border-radius: 40vw/@w;
		text-align: center;
		line-height: 66vw/@w;
		font-size: 20vw/@w;
		margin-top: 60vw/@w;
		border: 1px solid #f9d681;
		transition: .5s;
		-moz-transition: .5s;
		-ms-transition: .5s;
		-webkit-transition: .5s;
		cursor: pointer;
	}
	
	.btn:hover {
		background: transparent;
		color: #f9d681;
	}
	
	.content_left {
		padding-top: 200vw/@w;
		width: 530vw/@w;
		h1 {
			color: #333333;
			font-size: 70vw/@w;
		}
		p {
			padding: 55vw/@w 0;
			color: #666666;
			font-size: 14vw/@w;
		}
		ul {
			li {
				display: flex;
				margin-bottom: 30vw/@w;
			}
		}
		.icon-1 {
			background: url(../../static/img/download/part2-icon-1.png) center no-repeat;
		}
		.icon-2 {
			background: url(../../static/img/download/part2-icon-2.png) center no-repeat;
		}
		.icon-3 {
			background: url(../../static/img/download/part2-icon-3.png) center no-repeat;
		}
	}
	
	.content_left_right{
		position: absolute;
		right: 0;

	}
	.content_right {
		width: 530vw/@w;
		position: absolute;
		right: 0;
		top: 200vw/@w;
		h1 {
			color: #ffffff;
			font-size: 70vw/@w;
		}
		p {
			padding: 55vw/@w 0;
			color: #d8d8d8;
			font-size: 14vw/@w;
		}
		ul {
			li {
				display: flex;
				margin-bottom: 30vw/@w;
				color: #D8D8D8;
			}
		}
		.icon-1 {
			background: url(../../static/img/download/part3-icon-1.png) center no-repeat;
		}
		.icon-2 {
			background: url(../../static/img/download/part3-icon-2.png) center no-repeat;
		}
		.icon-3 {
			background: url(../../static/img/download/part3-icon-3.png) center no-repeat;
		}
	}
</style>