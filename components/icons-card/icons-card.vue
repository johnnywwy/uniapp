<template>
	<view class="p-3">
		<view class="flex bg-white shadow rounded">
			<view v-for="(item,index) in icons" :key="index" hover-class="bg-light"
				class="flex flex-1 flex-column align-center justify-center py-3">
				<uni-icons :type="item.type" size="30" color='#febd00'></uni-icons>
				<text class="font-sm mt-1 text-secondary">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "icons-card",
		props: {
			icons: Array
		},
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
