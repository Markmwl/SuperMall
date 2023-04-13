<template>
	<tab-bar>
		<tab-bar-item path="/Home">
			<!-- 直接使用@来使用文件路径，@代码表src -->
			<img slot="item-icon" src="~assets/img/tabbarimg/home.svg" />
			<!-- 使用~assets来使用文件路径是因为assets不是主路径src -->
			<img slot="item-icon-active" src="~assets/img/tabbarimg/homeselect.svg" />
			<div slot="item-text">首页</div>
		</tab-bar-item>
		<tab-bar-item path="/Class" activeColor ="red">
			<img slot="item-icon" src="~assets/img/tabbarimg/class.svg" />
			<img slot="item-icon-active" src="~assets/img/tabbarimg/classselect.svg" />
			<div slot="item-text">分类</div>
		</tab-bar-item>
		<tab-bar-item path="/Shoping" activeColor ="pink">
			<img slot="item-icon" src="~assets/img/tabbarimg/shoping.svg" />
			<img slot="item-icon-active" src="~assets/img/tabbarimg/shopingselect.svg" />
			<div slot="item-text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path="/Mi">
			<img slot="item-icon" src="~assets/img/tabbarimg/mi.svg" />
			<img slot="item-icon-active" src="~assets/img/tabbarimg/miselect.svg" />
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	// 像import导入的文件可以直接使用webpack.base.config.js中resolve起的别名来直接拼接，而src则不行需要加~
	import TabBar from 'components/common/tabbar/TabBar.vue';
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue';
	export default {
		name: 'MainTabBar',
		components: {
			TabBar,
			TabBarItem
		},
	}
</script>

<style>
	
</style>
