<template>
	<div>
		<Swiper>
			<SwiperItem v-for="item in banners">
				<a :href="item.link">
					<img :src="item.image" />
				</a>
			</SwiperItem>
		</Swiper>
	</div>
</template>

<script>
	import {
		Swiper,
		SwiperItem
	} from 'components/common/swiper';
	export default {
		name: 'HomeSwiper',
		components: {
			Swiper,
			SwiperItem
		},
		props: {
			banners: {
				type: Array,
				default () {
					return [];
				}
			}
		}
	}
</script>

<style>
</style>
