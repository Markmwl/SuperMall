<template>
	<div id="home">
		<NavBar class="home-nav">
			<div slot="center">购物街</div>
		</NavBar>
		<!-- 轮播图 -->
		<HomeSwiper :banners="banner"></HomeSwiper>
		<!-- 推荐内容圆形图显示 -->
		<MarkCircularText :recommends="recommend"></MarkCircularText>
		<!-- 本周流行 -->
		<FeatureView :Features="Features"></FeatureView>
		<!-- tabcontrol -->
		<TabControl :titles ="['流行','新款','精选']" class="Tab-Control"></TabControl>
		<a>首页界面</a>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<h4>1</h4>
		<!-- 此处加换行是因为底部内容被遮挡 -->
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
	</div>
</template>

<script>
	//公共组件
	import NavBar from 'components/common/navbar/NavBar';
	//公共业务组件
	import TabControl from 'components/content/TabControl/TabControl';
    //home相关子组件
	import HomeSwiper from './childcops/HomeSwiper.vue';
	import MarkCircularText from './childcops/MarkCircularText.vue';
	import FeatureView from './childcops/FeatureView.vue';
	//网络请求组件
	import {GetHomeMultidata} from 'network/HomeWork.js';
	
	export default {
		name:"home",
		components:{
			NavBar,
			HomeSwiper,
			MarkCircularText,
			FeatureView,
			TabControl
		},
		data(){
			return {
				result:null,
				banner:[],
				recommend:[],
				Features:[]
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
			//this.Features = this.recommend;
			this.recommend.forEach(o=>{
				this.Features.push(o);
			});
			this.Features.reverse();
			
			this.recommend.forEach(o=>{
				this.Features.push(o);
			});
			
			});
		}
	}
</script>

<style scoped>
	#home {
		padding-top: 44px;
	}
	
	.home-nav {
		/* assets/css/base.css */
		background-color: var(--color-tint); 
		color: #fff;
		
		position:fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
	}
	
	.Tab-Control {
		/* 设置吸顶效果可以使用position: sticky和top设置吸顶高度连用 */
		position: sticky;
		top: 44px;
	}
	
</style>
