<template>
	<view class="p-2">
		<scroll-view scroll-x="true" class="scroll-row">
			<view v-for="i in 3" :key="i" class="coupon">
				<view>
					<text>￥100</text>
					<text class="font-sm">满￥200可用</text>
				</view>
				<view hover-class="bg-hover-warning">领取</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "coupon-list",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.coupon {
		width: 310rpx;
		display: inline-flex;
		color: #ffffff;
		margin-right: 30rpx;

		view:first-child {
			padding: 20rpx 30rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background-color: #d39e00;
			border-right: 3rpx dashed;

			text:first-child {
				font-size: 40rpx;
			}

			text:last-child {
				font-size: 25rpx;
			}
		}

		view:last-child {
			width: 120rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #ffc107;
			font-size: 30rpx;
		}
	}
</style>
