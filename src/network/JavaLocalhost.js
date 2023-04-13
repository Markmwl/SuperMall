import axios from "axios";


export function JavaLocalhostrequest(config){
	const change = axios.create({
		baseURL:'/java',
		timeout:0
	});
	
	change.interceptors.request.use(config => {
		console.log('java本地请求成功！');
		console.log(config);
		return config;
	},err =>{
		console.log('java本地请求失败！' + err);
	});

	change.interceptors.response.use(res => {
		console.log('java本地响应成功！');
		console.log(res);
		return res.data;
	},err =>{
		console.log('java本地响应失败！' + err);
	})
	
	return change(config)	
}


