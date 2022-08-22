<template>
	<view>
		<view class="divider"></view>
		<view class="flex align-center py-3 px-2">
			<text class="font-md font-weight-bold">
				{{type==='group'? '拼团':'秒杀'}}
			</text>
		</view>
		<scroll-view scroll-x="true" class="scroll-row">
			<course-list v-for="(item,index) in list" :key="index" :item="item"></course-list>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "active-list",
		props: {
			type: {
				type: String,
				default: 'group'
			}
		},
		data() {
			return {
				list: []
			};
		},
		created() {
			let key = this.type === 'group' ? 'getGroup' : 'getFlashsale'
			this.$api[key]({
				page: 1,
				usable: 1
			}).then(res => {
				// console.log(res.rows);
				this.list = res.rows
			})
		},
		methods: {},
	}
</script>

<style>

</style>
