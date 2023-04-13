<template>
	<div id="FeatureView">
		<div class="fession">本周流行</div>
		<div class="Feature">
			<div v-for="item in Features" class="Feature-item">
				<a :href="item.link">
					<img :src="item.image" />
					<a>{{item.title}}</a>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	//FeatureView
	export default {
		name: 'FeatureView',
		props: {
			Features: Array
		}
	}
</script>

<style>
	.fession {
		font-size: 15px;
		text-align: center;
	}
	
	.Feature {
		display: flex;
		width: 100%;
		text-align: center;
		font-size: 10px;
		
		padding: 15px 0 20px;
		border-bottom: 8px solid #eee;
		
		/* flex-wrap: nowrap | wrap | wrap-reverse; */
		/* nowrap（默认）：不换行。 */
		/* wrap：换行，第一行在上方。 */
		/* wrap-reverse：换行，第一行在下方。 */
		flex-wrap: wrap;
	}
	
	.Feature-item {
		 flex: 1; 
	}
	
	.Feature-item img {
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}
</style>
