<template>
	<view class="flex flex-1 flex-column" style="height: 100%;">
		<tab :current='current' :tabs="tabs" @change='clickTab'></tab>
		<swiper :duration="200" class="flex flex-1 flex-column">
			<swiper-item class="flex" v-for="(t,tI) in tabs" :key=tI>
				<scroll-view scroll-y="true" class="flex-1">
					<course-list v-for="(item,index) in t.list" :key="index" :item="item" type=one></course-list>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				tabs: [{
					name: '课程',
					loadStatus: 'more',
					list: [{
							"id": 12,
							"title": "unicloud商城全栈开发",
							"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
							"price": "10.00",
							"t_price": "10.00",
							"type": "media"
						},
						{
							"id": 538,
							"title": "VueCli 实战商城后台管理系统",
							"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/efa10a1e149fa44d0a51.png",
							"price": "10.00",
							"t_price": "10.00",
							"type": "media"
						},
						{
							"id": 542,
							"title": "uni-app实战视频点播app小程序",
							"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/9ef188863ea44740d24d.png",
							"price": "99.00",
							"t_price": "99.00",
							"type": "audio"
						},
						{
							"id": 543,
							"title": "uni-app多端企业网盘全栈开发",
							"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/ff517a15e651ba374920.png",
							"price": "99.00",
							"t_price": "99.00",
							"type": "video"
						}
					],
					page: 1,
				}, {
					name: '专栏',
					loadStatus: 'more',
					list: [],
					page: 1,
				}]
			}
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateBack({
				delta: 1
			})
		},
		methods: {
			clickTab(index) {
				this.current = index
				// console.log(index);
			}
		}
	}
</script>

<style>
	page {
		/* background: yellow; */
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
