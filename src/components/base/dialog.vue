<template>
		<div class="dialog-wrap" v-show="markShow">
			<div class="dialog-content" >
				<span class="dialog-close" @click="closeMyself">x</span>
				<h3>
					{{markTitle}}
				</h3>
				<div class="content" v-html="markContent">
					{{markContent}}
				</div>
			</div>
		</div>
</template>

<script>
	
	export default{
		props:{
			markTitle:{
				type:String,
				default:''
			},
			markShow:{
				type:Boolean,
				default:false
			},
			markContent:{
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
				this.$emit('closeMyself')
			}
		}
	}
</script>

<style scoped lang="less">
	.dialog-wrap{
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 10000;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.5);
		
		.dialog-content{
			padding-top: 20px;
			max-width: 700px;
			width: 50%;
			position: fixed;
			max-height: 50%;
			background: #fff;
			top: 20%;
			left: 50%;
			transform: translate(-50%,-50%);
			
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
			h3{
				text-align: center;
			}
			.content{
				width: 100%;
				padding: 20px;
			}
		}
	}
	/*移动端*/
	@media only screen and (max-width:768px){
		.dialog-wrap{
			.dialog-content{
				width: 90%;
				
				max-width: none;
				max-height: none;
				margin-left: 0;
				
			}
			.dialog-close{
				position: absolute;
				right: 15px;
				top: 10px;
				cursor: pointer;
				color: black;
				font-size: 24px;
			}
		}
	}
</style>