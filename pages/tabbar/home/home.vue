<template>
	<view>
		<button type="default" @click="openLogin">登录页</button>
		<view>
			{{user.username ? user.username:'未登录'}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {}
			}
		},
		created() {
			// this.openLogin()
			this.user = this.$store.state.user
			console.log(this.user);
		},
		methods: {
			openLogin() {
				uni.navigateTo({
					url: '../../login/login',
				});
			}
		}
	}
</script>

<style>

</style>
