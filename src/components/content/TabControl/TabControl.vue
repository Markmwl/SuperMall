<template>
	<div id="TabControl">
		<div v-for="(item,index) in titles" 
		class="TabControl-item"
		:class="{active: isactive == index}" 
		@click="activeclick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TabControl',
		data(){
			return {
				isactive:this.Selectindex
			}
		},
		props:{
			titles:Array,
			Selectindex:Number
		},
		methods:{
			activeclick(index){
				this.isactive = index;
				this.$emit("Selectindex", this.isactive)
			}
		}
	}
</script>

<style>
	#TabControl {
		display: flex;
		text-align: center;
		font-size: 15px;
		background-color: #FFFFFF;
	}
	
	.TabControl-item {
		flex: 1;
		height: 40px;
		line-height: 40px;
	}
	
	/* 为了使span和下边框间距调大设置其边距为5像素 */
	.TabControl-item span {
		padding: 5px;	
	}
	
	/* 选中那个span给那个span加该样式 */
	.active span {
		border-bottom: 4px solid var(--color-tint);
		color: var(--color-tint);
	}
</style>
