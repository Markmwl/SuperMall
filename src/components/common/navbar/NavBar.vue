<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default {
		name: 'NavBar'
	}
</script>

<style scoped>
	.nav-bar {
		display: flex;
		height: 44px;
		/* 一般导航栏会设置为44px  状态栏会设置为20px 加一起就是64px */
		/* 设置line-height使文字可以上下居中 */
		line-height: 44px;
		text-align: center;
		/* 加底部阴影 */
		box-shadow: 0 1px 1px rgba(100,100,100,.1);
	}
	
	.left, .right {
		width: 60px;
	}
	
	.center {
		/* 让中间占据div中所有剩余空间 给flex设置1而其余控件(left、right)都设置了宽度就会占据所有剩余空间(前提是布局display设置为flex) */
		flex: 1;
	}
</style>
