<template>
	<div>
		<div class="dialog-wrap" v-if="isShow">
			<div class="dialog-content" >
				<span class="dialog-close" @click="closeMyself">x</span>
				<slot>empty</slot>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		props:{
			title:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				isShow:true
			}
		},
		methods:{
			closeMyself(){
				this.isShow=false
			},
		}
	}
</script>

<style scoped lang="less">
	.dialog-wrap{
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 1000;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.5);
		
		.dialog-content{
			
			max-width: 700px;
			width: 50%;
			position: fixed;
			max-height: 50%;
			background: #fff;
			top: 20%;
			left: 50%;
			margin-left: -25%;
			z-index: 10;
			border: 2px solid #464068;
			line-height: 1.6;
			h1{
				background: #f5f6fa;
			}
			.dialog-close{
				position: absolute;
				right: 15px;
				top: 0px;
				cursor: pointer;
			}
		}
	}
	/*移动端*/
	@media only screen and (max-width:768px){
		.dialog-wrap{
			.dialog-content{
				width: 100%;
				top: 0;
				left: 0;
				height: 100%;
				max-width: none;
				max-height: none;
				margin-left: 0;
				
			}
			.dialog-close{
				position: absolute;
				right: 15px;
				top: 10px;
				cursor: pointer;
				color: white;
				font-size: 24px;
			}
		}
	}
</style>