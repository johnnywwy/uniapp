<template>
	<view>
		<view v-if="list.length">
			<view class="flex align-center py-3 px-2 justify-between">
				<text class="font-md font-weight-bold">历史记录</text>
				<text class="font-sm text-light-muted" @click="clear">清除全部</text>
			</view>

			<view class="flex flex-wrap p-3" style="margin-right: 30rpx;">
				<uni-badge :text=item type='info' size="normal" v-for="(item,index) in list" :key="index"
					style="margin-right: 25rpx; margin-bottom: 20rpx;" @click="handelSearchEvent(item)"></uni-badge>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['vue', 'react'],
				keyword: ''
			}
		},
		onNavigationBarSearchInputChanged(e) {
			this.keyword = e.text
		},
		onNavigationBarButtonTap() {
			this.handelSearchEvent()
		},
		onNavigationBarSearchInputConfirmed() {
			this.handelSearchEvent()
		},
		onLoad() {
			let list = uni.getStorageSync('historyKeyword')
			if (list) {
				this.list = JSON.parse(list)
			}
		},
		methods: {
			// 搜索
			handelSearchEvent(value = '') {
				if (value) {
					this.keyword = value
				}
				if (this.keyword === '') {
					return this.$toast('请输入关键词')
				}
				// 跳转到搜索结果页面
				uni.navigateTo({
					url: '../search-result/search-result?keyword=' + this.keyword,
				})
				// 加入到历史记录
				this.addHistory()

			},
			clear() {
				uni.showModal({
					content: '是否清空搜索记录？',
					success: res => {
						if (res.confirm) {
							this.list = []
							uni.removeStorageSync('historyKeyword')
						}
					},
				});
			},
			addHistory() {
				let index = this.list.findIndex(v => v === this.keyword)
				if (index !== -1) {
					this.objToFirst(this.list, index)
				} else {
					this.list.unshift(this.keyword)
				}
				uni.setStorageSync('historyKeyword', JSON.stringify(this.list))
			},
			// 指定数组某一项
			objToFirst(arr, index) {
				if (index !== 0) {
					arr.unshift(arr.splice(index, 1)[0])
				}
				return arr
			}
		}
	}
</script>

<style>

</style>
