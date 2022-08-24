<template>
	<view>
		<uni-list>
			<uni-list-item title="原密码" note="">
				<input type="text" value="" slot="footer" placeholder="请输入原密码" class="font-md"
					placeholder-style='color:#bbb' style="text-align: right;" />
			</uni-list-item>
			<uni-list-item title="新密码" note="">
				<input type="text" value="" slot="footer" placeholder="请输入新密码" class="font-md"
					placeholder-style='color:#bbb' style="text-align: right;" />
			</uni-list-item>
			<uni-list-item title="确认密码" note="">
				<input type="text" value="" slot="footer" placeholder="请再次输入新密码" class="font-md"
					placeholder-style='color:#bbb' style="text-align: right;" />
			</uni-list-item>
		</uni-list>
		<view class="p-3">
			<main-button>保 存</main-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style>

</style>
