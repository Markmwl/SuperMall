import {request} from "network/request.js";

export function GetHomeMultidata(config){
	return request({
		url:'/home/multidata'
	})
}
