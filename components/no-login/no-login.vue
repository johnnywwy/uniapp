<template>
	<view class="noLogin">
		<image src="../../static/noLogin.png" style="width: 350rpx;height: 350rpx;" mode=""></image>
		<text class="text-muted my-2 font">登录才可以查看我的学习哦</text>
		<button type="default" size="mini" @click="openLogin">立即登录</button>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		name: "no-login",
		data() {
			return {

			};
		},
		computed: {
			...mapState({
				token: state => state.token
			})
		},
		methods: {
			openLogin() {
				this.navigateTo('/pages/login/login');
			}
		}
	}
</script>

<style>
	.noLogin {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #ffffff;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

	}
</style>
