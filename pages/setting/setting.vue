<template>
	<view>
		<uni-list :border="false">
			<uni-list-item clickable :border="false" title="账户安全" showArrow @click="changePassword"></uni-list-item>
			<uni-list-item clickable :border="false" title="清除缓存" @click="clear">
				<text slot="footer">{{ currentSize|formatCurrentSize }}</text>
			</uni-list-item>
			<uni-list-item :border="false" title="检查更新" showArrow></uni-list-item>
			<uni-list-item :border="false" title="当前版本">
				<text slot="footer">1.0.0</text>
			</uni-list-item>
		</uni-list>
		<view class="p-3" v-if="user">
			<main-button @click='handleLogout'>退出登录</main-button>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import tool from '@/common/tool.js';
	export default {

		data() {
			return {
				currentSize: 0,
				keys: []
			}
		},
		computed: {
			...mapState({
				user: state => state.user
			})
		},
		created() {
			this.getSize()
		},
		filters: {
			formatCurrentSize(currentSize) {
				return tool.bytesToSize(currentSize)
			}
		},
		methods: {
			// 退出登录
			handleLogout() {
				uni.showModal({
					content: '是否要退出登录？',
					success: (res) => {
						if (res.cancel) {
							return
						}
						this.$api.logout()
						this.$store.dispatch('logout').then(res => {
							this.$toast('退出登录成功')
						})
					}
				});
			},
			// 修改密码
			changePassword() {
				this.authJump('/pages/user-safe/user-safe')
			},
			// 获取缓存大小
			getSize() {
				uni.getStorageInfo({
					success: (res) => {
						console.log(res.keys);
						this.keys = res.keys.filter(k => k !== 'user')
						this.currentSize = res.currentSize
						console.log(res.limitSize);
					}
				});
			},
			// 清除缓存
			clear() {
				uni.showModal({
					content: '是否需要清除缓存？',
					success: res => {
						if (res.cancel) {
							return
						}
						this.keys.forEach(k => {
							uni.removeStorageSync(k)
						})
						this.$toast('清除成功')
						this.getSize()
					},
				});
			}
		}
	}
</script>

<style>

</style>
