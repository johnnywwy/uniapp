<template>
	<view class="animate__animated animate__fadeIn animate__faster">
		<view class="home-bg"></view>

		<view class="position-relative">
			<view class="flex p-3" v-if="!user" @click="handleLogin">
				<image src="/static/logo.png" class="rounded-circle bg-light" style="width: 120rpx;height: 120rpx;"
					mode=""></image>
				<view class="flex flex-column pl-3 flex-1 text-white">
					<view class="pt-1 mb-2 font-md">立即登录</view>
					<view class="font-sm">登录解锁更多功能</view>
				</view>
			</view>

			<view class="flex align-center p-3" v-else>
				<image :src="user.avatar" class="rounded-circle bg-light" style="width: 120rpx;height: 120rpx;" mode="">
				</image>
				<view class="flex flex-column pl-3 flex-1 text-white">
					<view class="pt-1 mb-2 font-md">{{user.username|| user.nickname}}</view>
					<view class="font-sm">{{user.desc || '暂无描述'}}</view>
				</view>
				<text class="iconfont icon-leimupinleifenleileibie text-white" @click="editUserInfo"></text>
			</view>

			<icons-card :icons="icons"></icons-card>

			<view class="px-3">
				<uni-list :border="false">
					<uni-list-item clickable title="我的优惠券" showArrow @click="authJump('/pages/my-coupon/my-coupon')">
						<text slot="header" class="iconfont icon-9 mr-2" style="font-size: 18px;color: #4396ec;"></text>
					</uni-list-item>
					<uni-list-item clickable title="常见问题" showArrow>
						<text slot="header" class="iconfont icon-help mr-2"
							style="font-size: 18px;color: #4396ec;"></text>
					</uni-list-item>
					<uni-list-item clickable title="设置" showArrow @click="openSetting">
						<text slot="header" class="iconfont icon-leimupinleifenleileibie mr-2"
							style="font-size: 18px;color: #4396ec;"></text>
					</uni-list-item>
				</uni-list>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				icons: [{
					type: 'list',
					name: '订单'
				}, {
					type: 'chat',
					name: '消息'
				}, {
					type: 'star',
					name: '收藏'
				}, {
					type: 'compose',
					name: '在学'
				}]
			}
		},
		computed: {
			...mapState({
				user: state => state.user
			})
		},
		// 右上角... 打开设置
		onNavigationBarButtonTap() {
			this.openSetting()
		},

		methods: {
			// 登录
			handleLogin() {
				this.navigateTo('../../login/login')
			},
			// 打开设置
			openSetting() {
				this.navigateTo('/pages/setting/setting')
			},
			// 编辑用户信息
			editUserInfo() {
				this.authJump('/pages/user-info/user-info')
			}
		}
	}
</script>

<style lang="scss" scoped>
	view {
		.home-bg {
			background-color: #5ccc84;
			height: 350rpx;
			width: 750rpx;
			border-bottom-left-radius: 100rpx;
			border-bottom-right-radius: 100rpx;
			position: fixed;
			left: 0;
			top: 0;
		}
	}
</style>
