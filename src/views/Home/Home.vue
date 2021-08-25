<template>
	<div id="home">
		<NavBar class="home-nav">
			<div slot="center">购物街</div>
		</NavBar>
		<!-- 轮播图 -->
		<HomeSwiper :banners="banner"></HomeSwiper>
		<!-- 内容圆形图显示 -->
		<MarkCircularText :recommends="recommend"></MarkCircularText>
		<a>首页界面</a>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar';
	import {GetHomeMultidata} from 'network/HomeWork.js';
	import HomeSwiper from './childcops/HomeSwiper.vue';
	import MarkCircularText from './childcops/MarkCircularText.vue';
	export default {
		name:"home",
		components:{
			NavBar,
			HomeSwiper,
			MarkCircularText
		},
		data(){
			return {
				result:null,
				banner:[],
				recommend:[]
			}
		},
		created(){
			//2.请求多个数据(轮播图、页面中部图片)
			//因为在函数中变量值随着函数运行完毕就自动gc掉所以需要把它在函数执行完毕前将变量保存起来
			GetHomeMultidata().then(o=> {
			console.log(o);
			//保存整个对象
			this.result = o;
			//保存对象中子项，这里取banner下list
			this.banner =o.data.banner.list;
			this.recommend =o.data.recommend.list;
			});
		}
	}
</script>

<style scoped>
	.home-nav {
		/* assets/css/base.css */
		background-color: var(--color-tint); 
		color: #fff;
	}
</style>
