import axios from "axios";


//本地WebApi测试http://localhost:53139
export function Localhostrequest(config){
	const change = axios.create({
		baseURL:'/api',
		timeout:0
	});
	
	change.interceptors.request.use(config => {
		console.log('本地请求成功！');
		console.log(config);
		return config;
	},err =>{
		console.log('本地请求失败！' + err);
	});

	change.interceptors.response.use(res => {
		console.log('本地响应成功！');
		console.log(res);
		return res.data;
	},err =>{
		console.log('本地响应失败！' + err);
	})
	
	return change(config)	
}


