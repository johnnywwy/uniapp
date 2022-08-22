<template>
	<view>
		<view class="login-back" @click="back">
			<uni-icons type="locked" size="20"></uni-icons>
		</view>
		<view class="login-bg"></view>
		<view class="login">
			<!-- 登录标题 -->
			<view class="flex">
				<text class="title">{{type==='login'?'登录':'注册'}}</text>
			</view>
			<!-- 用户名密码区域 -->
			<view class="login-form">
				<uni-icons type="person" size="20"></uni-icons>
				<input type="text" placeholder="请输入用户名" v-model="form.username" class="rounded font-md">
			</view>
			<view class="login-form">
				<uni-icons type="locked" size="20"></uni-icons>
				<input type="password" placeholder="请输入密码" v-model="form.password" class="rounded font-md">
			</view>

			<view class="login-form" v-if="type!=='login'">
				<uni-icons type="locked" size="20"></uni-icons>
				<input type="password" placeholder="请再次输入密码" v-model="form.repassword" class="rounded font-md">
			</view>
			<!-- 登录按钮 -->
			<view>
				<view class="bg-main btn" hover-class="bg-main-hover" @click="submit">
					{{type==='login'?'登 录':'注 册'}}
				</view>
			</view>

			<!-- 注册账号 忘记密码 -->
			<view class="flex align-center justify-between my-2 font">
				<text class="py-2 text-main" @click="changeType">{{type==='login'?'注册账号':'去登录'}}</text>
				<text class="py-2 text-light-muted">忘记密码？</text>
			</view>

			<!-- 微信登录 -->
			<view class="wechatlogin flex align-center justify-center">
				<uni-icons type="weixin" size="28" color="#5ccc84"></uni-icons>
			</view>

			<!-- 用户协议 -->
			<checkbox-group class='flex align-center justify-center mt-3'>
				<label class="text-light-muted">
					<checkbox color="#7fd49e" style="transform: scale(0.7);" />
					<text class="font">已阅读并同意用户协议&隐私声明</text>
				</label>
			</checkbox-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'login',
				form: {
					username: 'johnny',
					password: 'johnny',
					repassword: ''
				}
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delete: 1
				});
			},
			changeType() {
				this.type = this.type === 'login' ? 'reg' : 'login'
			},

			resetForm() {
				this.form = {
					username: '',
					password: '',
					repassword: ''
				}
			},

			submit() {
				uni.showLoading({
					title: '提交中',
					mask: false
				})
				let data = Object.assign(this.form, {})
				if (this.type === 'reg') {

					console.log(data);
					this.$api.reg(data).then(res => {
						this.$toast('注册成功')
						this.resetForm()
						this.changeType()
					}).finally(() => {
						uni.hideLoading()
					})
				} else {
					this.$api.login(data).then(user => {
						// console.log(user)
						this.$toast('登录成功')
						this.$store.dispatch('login', user)

						setTimeout(() => {
							this.back()
						}, 350)
					}).finally(() => {
						uni.hideLoading()
					})

				}

			}
		}
	}
</script>

<style lang="scss">

</style>
