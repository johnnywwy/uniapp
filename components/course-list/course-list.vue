<template>
	<view class="scroll-row-item course" :class="'course-'+this.type">
		<view class="position-relative">
			<image :src="item.cover" mode=""></image>
			<view class=" text-light font-sm">{{item.type | formatType}}</view>
		</view>
		<view class="flex flex-column flex-shrink">
			<text class="text-ellipsis font-md">{{item.title}}</text>
			<view class="font-sm text-light-muted my-1" v-html="item.try" v-if="item.try"></view>
			<view class="flex flex-1 align-end">
				<text class="font-md text-danger">￥{{ item.price }}</text>
				<text class="font-sm text-light-muted">￥{{ item.t_price }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	let opt = {
		media: "图文",
		audio: "音频",
		video: "视频",
		column: "专栏"
	}
	export default {
		name: "course-list",
		props: {
			item: Object,
			type: {
				type: String,
				default: "two"
			}
		},
		filters: {
			formatType(k) {
				return opt[k]
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.course {}

	.course-two {
		width: 340rpx;
		margin-left: 20rpx;
		margin-bottom: 20rpx;

		image,
		view:first-child {
			width: 340rpx;
			height: 180rpx;
			flex-shrink: 1;

			view {
				position: absolute;
				bottom: 10rpx;
				right: 10rpx;
				background: rgba(0, 0, 0, 0.4);
				paddnig: 0 10rpx;
			}
		}

		view:last-child {
			text:first-child {
				margin-top: 10rpx;
			}
		}
	}

	.course-one {
		display: flex !important;
		padding: 20rpx;

		image,
		view:first-child {
			width: 300rpx;
			height: 170rpx;
			flex-shrink: 1;

			view {
				position: absolute;
				bottom: 10rpx;
				right: 10rpx;
				background: rgba(0, 0, 0, 0.4);
				paddnig: 0 10rpx;
			}
		}

		view:first-child {
			margin-right: 20rpx;
		}
	}
</style>
