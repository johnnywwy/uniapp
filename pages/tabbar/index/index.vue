<template>
	<view>
		<block v-for="(item,index) in templates" :key="index">
			<!-- 搜索组件 -->
			<f-search-bar v-if="item.type==='search'" :placeholder='item.placeholder'></f-search-bar>

			<!-- 轮播图组件 -->
			<swiper v-else-if="item.type==='swiper'" :indicator-dots="true" :autoplay="true" :interval="3000"
				:duration="1000">
				<swiper-item class="flex justify-center" v-for="(sitem,sIndex) in item.data" :key="sIndex">
					<image :src="sitem.src" mode="aspectFill" style="width: 720rpx; height: 300rpx;" class="rounded">
					</image>
				</swiper-item>
			</swiper>

			<!-- 图标组件 -->
			<icon-nav v-else-if="item.type==='icons'" :list="item.data"></icon-nav>

			<!-- 优惠券组件 -->
			<coupon-list v-else-if="item.type==='coupon'"></coupon-list>

			<!-- 拼团 -->
			<template v-else-if="item.type==='promotion'">
				<active-list :type="item.listType"></active-list>
			</template>

			<!-- 最新课程 -->
			<template v-else-if="item.type==='list'">
				<view class="divider"></view>
				<view class="flex align-center py-3 px-2 justify-between">
					<text class="font-md font-weight-bold">{{item.title}}</text>
					<text class="font-sm text-light-muted" v-if="item.showMore">查看全部</text>
				</view>
				<view>
					<course-list v-for="(item,index) in item.data" :key="index" :item="item" :type="item.listType">
					</course-list>
				</view>
			</template>

			<!-- 底部广告 -->
			<template v-else-if="item.type==='imageAd'">
				<view class="divider"></view>
				<image :src="item.data" mode="aspectFill" style="width: 750rpx; height: 360rpx;">
				</image>
			</template>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				groupList: [{
						"group_id": 19,
						"id": 12,
						"title": "unicloud商城全栈开发",
						"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
						"price": "4.00",
						"t_price": "10.00",
						"type": "media",
						"start_time": "2021-04-15T16:00:00.000Z",
						"end_time": "2022-05-16T16:00:00.000Z"
					},
					{
						"group_id": 19,
						"id": 12,
						"title": "unicloud商城全栈开发",
						"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
						"price": "4.00",
						"t_price": "10.00",
						"type": "media",
						"start_time": "2021-04-15T16:00:00.000Z",
						"end_time": "2022-05-16T16:00:00.000Z"
					},
				],
				templates: [], //暂存后端获取的数据
			}
		},
		onPullDownRefresh() {
			this.getData()
		},
		created() {
			this.getData()
		},
		methods: {
			getData() {
				this.$api.getIndexData().then(data => {
					// console.log(data);
					this.templates = data
				}).finally(() => {
					uni.stopPullDownRefresh()
				})
			}
		}
	}
</script>

<style>

</style>
