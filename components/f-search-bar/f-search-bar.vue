<template>
	<view class="p-2">
		<view style="background: #f5f5f1; color:#928E8A;" class="flex align-center justify-center py-2 rounded"
			@click="openSearch">
			<uni-icons color="#928E8A" type="search" size="20"></uni-icons>
			<text class="ml-2">{{ placeholder }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "f-search-bar",
		props: {
			placeholder: {
				type: String,
				default: "请输入搜索内容"
			}
		},
		data() {
			return {

			};
		},
		methods: {
			openSearch() {
				this.navigateTo('/pages/search/search');
			}
		}
	}
</script>

<style>

</style>
