<template>
	<view class="flex flex-wrap py-2">
		<view v-for="(item,index) in list" :key="index" style="width: 25%;"
			class="flex flex-column justify-center align-center py-1" hover-class="bg-light">
			<image :src="item.src" style="width: 70rpx; height: 70rpx; border-radius 100%;" mode="widthFix">
			</image>
			<text class="font-sm text-muted mt-1">{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "icon-nav",
		props: {
			list: Array,
		},
		data() {
			return {};
		}
	}
</script>

<style>

</style>
