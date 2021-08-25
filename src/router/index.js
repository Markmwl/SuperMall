import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'

Vue.use(Router);

const routes = [
	{
		path: '', //默认路径加不加/都可以
		redirect: '/Home', //页面重定向
	},
	{
		path: '/Home',
		name: 'Home',
		component: () => import('@/views/Home/Home.vue'),
		meta: {
			title: '首页'
		}
	},
	{
		path: '/Class',
		name: 'Class',
		component: () => import('@/views/Class/Class.vue'),
		meta: {
			title: '分类'
		}
	},
	{
		path: '/Shoping',
		name: 'Shoping',
		component: () => import('@/views/Shoping/Shoping.vue'),
		meta: {
			title: '购物车'
		}
	},
	{
		path: '/Mi',
		name: 'Mi',
		component: () => import('@/views/Mi/Mi.vue'),
		meta: {
			title: '我的'
		}
	},
];

const router = new Router({
	mode: 'history',//设置url加载方式
	routes
});

//newRouter的同时在导出
export default router;


//设置全局导航守卫 前置守卫(guard):跳转之前调用
router.beforeEach((to, from, next) => {
	//从from跳转到to
	document.title = to.matched[0].meta.title;
	next();
})

//注意：添加此处是因为在Home.vue中在界面活跃时执行activated()方法中实现this.$router.push(this.path); 实现路由跳转会报错，但是不影响界面操作，所以需要在配置路由的js文件重写push方法
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(error => error)
}