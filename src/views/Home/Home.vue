<template>
	<div id="home">
		<NavBar class="home-nav">
			<div slot="center">购物街</div>
		</NavBar>
		<!-- 轮播图 -->
		<HomeSwiper :banners="banner"></HomeSwiper>
		<!-- 推荐内容圆形图显示 -->
		<MarkCircularText :recommends="recommend"></MarkCircularText>
		<!-- 本周流行 -->
		<FeatureView :Features="Features"></FeatureView>
		<!-- tabcontrol -->
		<TabControl :titles="['流行','新款','精选']" @Selectindex ="changeselectindex" class="Tab-Control"></TabControl>
		<a>首页界面</a>
		<div v-if="this.selectindex == 0">
			<!-- 本地组件 -->
			<Localhostcops :localGets="localGetdata" :localwhereGets="localwhereget" @Changeidwhere="changedata"
				:localChangeadd="localPostAdddata" @Changeadd="changepostaddurl" 
				:localChangeaddbody="localPostAdddatabody" @Changeaddbody="changepostaddbody"
				@updurluser ="changeputupdurl" @updbodyuser = "changeputupdbody" 
				@delurlid ="changedeleteurl" @delbodyid ="changedeletebody"></Localhostcops>
				<!-- 此处加换行是因为底部内容被遮挡 -->
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
		</div>
		<div v-else-if="this.selectindex == 1">
			<!-- java服务界面 -->
			<JavaModule :logindata="Data" @Javalogin ="changeJavalogin"
			            :getUserAll="UserData" @JavaGetUserAll ="changeJavaGetUserAll"></JavaModule>
			<!-- 此处加换行是因为底部内容被遮挡 -->
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
	</div>
</template>

<script>
	//公共组件
	import NavBar from 'components/common/navbar/NavBar';
	//公共业务组件
	import TabControl from 'components/content/TabControl/TabControl';
	//home相关子组件
	import HomeSwiper from './childcops/HomeSwiper.vue';
	import MarkCircularText from './childcops/MarkCircularText.vue';
	import FeatureView from './childcops/FeatureView.vue';
	//本地相关组件
	import Localhostcops from './childcops/Localhostcops.vue';
	//java相关组件
	import JavaModule from './childcops/JavaModule.vue';

	//网络请求组件
	import {
		GetHomeMultidata
	} from 'network/HomeWork.js';
	//本地网络请求
	import {
		GetHomelocalhost,
		GetWherelocalhost,
		PostFromUriGetNewData,
		PostFromBodyPostAdd,
		PutFromBodyNewPutUpd,
		PutFromUriPutUpData,
		DeleteFromBodyDelData,
		DeleteFromUriDelData
	} from 'network/LocalhostWork.js';
	
	//本地java服务
	import {
		Javalogin,
		GetUserAll
	} from 'network/JavaLocalhostWork.js'




	export default {
		name: "home",
		components: {
			NavBar,
			HomeSwiper,
			MarkCircularText,
			FeatureView,
			TabControl,
			//注册本地组件
			Localhostcops,
			//java使用组件
			JavaModule
		},
		data() {
			return {
				result: null,
				banner: [],
				recommend: [],
				Features: [],
				//设置商品数据格式
				goods: {
					'pop': {
						page: 0,
						lis: []
					},
					'news': {
						page: 0,
						lis: []
					},
					'sell': {
						page: 0,
						lis: []
					}
				},
				//本地组件变量
				localGetdata: [],
				localwhereget: {},
				localPostAdddata: [],
				localPostAdddatabody: [],
				ID: 1,
				selectindex:0,
				User: {},
				Data: {},
				UserData: {}
			}
		},
		created() {
			//2.请求多个数据(轮播图、页面中部图片)
			//因为在函数中变量值随着函数运行完毕就自动gc掉所以需要把它在函数执行完毕前将变量保存起来
			GetHomeMultidata().then(o => {
				//保存整个对象
				this.result = o;
				//保存对象中子项，这里取banner下list
				this.banner = o.data.banner.list;
				this.recommend = o.data.recommend.list;
				//this.Features = this.recommend;
				this.recommend.forEach(o => {
					this.Features.push(o);
				});
				this.Features.reverse();

				this.recommend.forEach(o => {
					this.Features.push(o);
				});

			});

			//无参查询
			GetHomelocalhost().then(c => {
				this.localGetdata = c;
			});

			//有参查询
			GetWherelocalhost(this.ID).then(c => {
				this.localwhereget = c;
			});

			//url拼接post请求
			PostFromUriGetNewData(this.User).then(p => {
				this.localPostAdddata = p;
			});

			//body主体post请求
			PostFromBodyPostAdd(this.User).then(p => {
				this.localPostAdddatabody = p;
			});	
		},
		methods: {
			changedata(params) {
				GetWherelocalhost(params).then(c => {
					if (c != null) {
						this.localwhereget = c;
					} else {
						this.localwhereget = null;
					}

				})
			},
			
			changeselectindex(index) {
				this.selectindex = index;
			},

			//post:添加数据url
			changepostaddurl(user) {
				PostFromUriGetNewData(user).then(p => {
					if (p != null) {
						this.localPostAdddata = p;
					} else {
						this.localPostAdddata = null;
					}
				})
			},

			//post:添加数据body
			changepostaddbody(user) {
				PostFromBodyPostAdd(user).then(p => {
					if (p != null) {
						this.localPostAdddatabody = p;
					} else {
						this.localPostAdddatabody = null;
					}
				})
			},
			
			//put:更新数据url
			changeputupdurl(user) {
				PutFromUriPutUpData(user).then(p => {
					if (p != null) {
						this.localPostAdddata = p;
					} else {
						this.localPostAdddata = null;
					}
				})
			},
			
			//put:更新数据body
			changeputupdbody(user) {
				PutFromBodyNewPutUpd(user).then(p => {
					if (p != null) {
						this.localPostAdddatabody = p;
					} else {
						this.localPostAdddatabody = null;
					}
				})
			},
			
			//delete:删除数据url
			changedeleteurl(id) {
				DeleteFromUriDelData(id).then(p => {
					if (p != null) {
						this.localPostAdddata = p;
					} else {
						this.localPostAdddata = null;
					}
				})
			},
			
			//delete:删除数据body
			changedeletebody(id) {
				console.log('执行body：',id);
				DeleteFromBodyDelData(id).then(p => {
					if (p != null) {
						this.localPostAdddatabody = p;
					} else {
						this.localPostAdddatabody = null;
					}
				})
			},
			
			//java服务登录
			changeJavalogin(user) {
				Javalogin(user).then(p => {
					if (p != null) {
						this.Data = p;
						if(parseInt(this.Data.code) > 0)
						{
							this.global.token = this.Data.data.token;
						}
						else
						{
							this.global.token = "";
						}
					} else {
						this.Data = null;
					}
				})
			},
			
			//java服务查询
			changeJavaGetUserAll(token) {
				GetUserAll(token).then(p => {
					if (p != null) {
						this.UserData = p;
					} else {
						this.UserData = null;
					}
				})
			},
		}
	}
</script>

<style scoped>
	#home {
		padding-top: 44px;
	}

	.home-nav {
		/* assets/css/base.css */
		background-color: var(--color-tint);
		color: #fff;

		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
	}

	.Tab-Control {
		/* 设置吸顶效果可以使用position: sticky和top设置吸顶高度连用 */
		position: sticky;
		top: 44px;
	}
</style>
