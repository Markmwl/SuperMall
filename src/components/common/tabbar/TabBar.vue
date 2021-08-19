<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>	
	export default {
		name: 'TabBar'
	}
</script>

<style scoped>
	/* 设置 tab-bar*/
	#tab-bar {
		/* 水平分布 */
		display: flex;
		/* 设置背景色 */
		background-color: #f6f6f6;
		/* 放在下边 */
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		/* 设置上边框阴影 */
		box-shadow: 0 -2px 1px rgba(100, 100, 100, .1);
	}
</style>
