<!-- login -->
<template>
<div class="main">
	<div class="footer flex-center">
		<van-button 
			round 
			type="danger" 
			style="width: 6rem;" 
			plain 
			hairline 
			@click="handleC"
		>手机号登陆</van-button>
	</div>
</div>
</template>

<script>
import { QRCode } from "../api/login/index";
import { Button } from "vant"
export default {
	components:{
		[Button.name]: Button
	},
	data() {
		return {
				
		}
	},
	created() {

	},
	mounted() {
		
	},
	methods:{
		handleC(){
			QRCode().then(res => {
				
			})
		}
	}
}
</script>
<style  lang='scss' scoped>
/* @import url(); 引入css类 */
.main{
	position: relative;
	width: 100vw;
	height: 100vh;
	background-image: url('../static/images/baseImg/pink.jpeg');
	background-repeat: no-repeat;
	background-size:cover;
	background-position: center;
	.footer{
		position: absolute;
		width: 100%;
		bottom: 3rem;
	}
}
</style> 