//导入
import {
  JavaLocalhostrequest
} from "network/JavaLocalhost.js";

//登录接口
export function Javalogin(User) {
	return JavaLocalhostrequest({
		url: '/sys_user/login',
		method: 'post',
		data: {
			name : User.name,
			password : User.password
		}
	})
}
	

//查询接口
export function GetUserAll(token) {
	return JavaLocalhostrequest({
		url: '/GetUserAll',
		method: 'get',
		headers: {
		    'token': token
		  }
	})
}