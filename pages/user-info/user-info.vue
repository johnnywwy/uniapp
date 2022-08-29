<template>
	<view>
		<uni-list :border="false">
			<uni-list-item clickable :border="false" title="头像">
				<image slot="footer" src="/static/logo.png" style="width: 80rpx; height: 80rpx; border-radius:100%;"
					class="bg-light">
				</image>
			</uni-list-item>
			<uni-list-item clickable :border="false" title="昵称">
				<input slot="footer" type="text" placeholder="未填写" style="text-align: right;">
				</text>
			</uni-list-item>
			<uni-list-item clickable :border="false" title="性别" @click="changeSex">
				<text slot="footer">{{form.sex}}</text>
			</uni-list-item>
			<uni-list-item clickable :border="false" title="手机">
				<text slot="footer">{{phone}}</text>
			</uni-list-item>
		</uni-list>
		<view class="p-3">
			<main-button>保存</main-button>
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
				phone: '12345678901',
				form: {
					sex: '未知'
				}
			}
		},
		computed: {
			...mapState({
				user: state => state.user
			})
		},
		methods: {
			// 修改性别
			changeSex() {
				let sexOptions = ['未知', '男', '女']
				uni.showActionSheet({
					itemList: sexOptions,
					success: (res) => {
						this.form.sex = sexOptions[res.tapIndex]
					}
				})
			}
		}
	}
</script>

<style>

</style>
