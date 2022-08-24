import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		user: null,
		token: null
	},
	actions: {
		// 初始化
		init({
			state
		}) {
			let user = uni.getStorageSync('user')
			if (user) {
				state.user = JSON.parse(user)
				state.token = state.user.token
			}
		},
		// 登录
		login({
			state
		}, user) {
			state.user = user
			state.token = user.token

			uni.setStorageSync('user', JSON.stringify(user))
			// uni.setStorageSync('token', JSON.stringify(token))
		},

		// 登出
		logout({
			state
		}) {
			state.user = null
			state.token = null
			uni.removeStorageSync('user')
		}
	},
	mutations: {}

})
