import axios from "axios";

export function request(config){
	//1.创建axios实例
	const change = axios.create({
		baseURL:'http://123.207.32.32:8000',
		timeout:3000
	});
	
	//2.设置axios拦截器
	//2.1 拦截请求 两参 函数类型，入参1：满足时，成功时 参数2：不满足时，失败时
	change.interceptors.request.use(config => {
		//该config为config配置对象
		console.log('请求成功！');
		console.log(config);
		//一般拦截器额能做什么 ？ 比如：修改config中属性、加载图标，待加载成功再到响应中关闭、某些网络请求(例如登录需要用到令牌(token))，必须携带一些特殊信息
		
		//在拦截以后必须把config返回回去，否则会把config拦截在该方法里后续拿不到config对象则会进入err提示没该config对象
		return config;
	},err =>{
		console.log('请求失败！' + err);
	});
	//2.2 拦截响应
	change.interceptors.response.use(res => {
		console.log('响应成功！');
		console.log(res);
		//在拦截以后必须把res返回回去，否则会把res拦截在该方法里后续拿不到res对象则会在前台返回undefined，而这里你不需要返回全部res，只需返回其中的data即可！
		return res.data;
	},err =>{
		console.log('响应失败！' + err);
	})
	
	//3.发送真正网络请求 因为它本身返回的就是一个promise对象，所以没必要在封装一层promise对象
	return change(config)	
}



