<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<div :style="activeColorstyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props: {
			path:String,
			//让前台传回颜色值在赋值给相应元素，若该值默认为空或者前台没传则用默认值代替
			activeColor: {
				type: String,
				default: '#00A8E6'
			}
		},
		data() {
			return {

			}
		},
		computed: {
			isActive() {
				//console.log(this.$route.path);
				//路由的路径path要匹配到我选择的那个组件的props中path时
				return this.$route.path == this.path;
				///return this.$route.path.indexOf(this.path) !== -1;
			},
			activeColorstyle() {
				//console.log(this.isActive);
				//若路由处于活跃时把字体颜色值赋值给字体，若不处于活跃状态则style设置为空
				return this.isActive ? {
					color: this.activeColor
				} : {};
			}
		},
		methods: {
			itemClick() {
				//当前路由不等于活跃路由时在替换  防止多次点击相同菜单按钮报错
				if (this.$route.path !== this.path) {
					//替换页面到对应路由页面
					this.$router.replace(this.path);
				}

			}
		}
	}
</script>

<style scoped>
	.tab-bar-item {
		/* 均等分布 */
		flex: 1;
		/* 设置字体剧中 */
		text-align: center;
		/* tab-bar 高度 49px 常用 */
		height: 49px;
		font-size: 14px;
	}

	.tab-bar-item img {
		height: 27px;
		width: 27px;
		/* 图片离上边框大小跳转 */
		margin-top: 1px;
		/* 使图片和文字间距缩小,需要去掉图片边距，设置svg居中显示 */
		vertical-align: middle;
		/* 使图片和文字间距增大,设置图片的下外边距 */
		/* margin-bottom: 1px; */
	}

	.active {
		color: #00A8E6
	}
</style>
