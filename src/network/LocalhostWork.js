//导入
import {
	Localhostrequest
} from "network/Localhost.js";

import qs from 'qs';

//获取无参Get
export function GetHomelocalhost() {
	return Localhostrequest({
		url: '/Values/Getusers',
		method: 'get'
	})

}

//条件获取Get
export function GetWherelocalhost(ID) {
	return Localhostrequest({
		url: '/Values/Get',
		method: 'get',
		params: {
			id: ID
		}
	})
}

//在使用axios时，注意到配置选项中包含params和data两者，以为他们是相同的，实则不然。 
//因为params是添加到url的请求字符串中的，用于get请求。 
//而data是添加到请求体（body）中的， 用于post请求。

//获取 public List<User> PostAddpost([FromUri]User user)接口[HttpPost, Route("GetNewData")]
export function PostFromUriGetNewData(User) {
	return Localhostrequest({
		url: '/Values/GetNewData',
		method: 'post',
		params: {
			ID : User.ID,
			Name : User.Name,
			Sex : User.Sex,
			Age : User.Age,
			Message : User.Message
		}
	})
}

//获取public List<User> PostAdd([FromBody]User user)接口[ActionName("NewPostAdd")]
export function PostFromBodyPostAdd(User) {
	return Localhostrequest({
		url: '/Values/NewPostAdd',
		method: 'post',
		data: {
			ID : User.ID,
			Name : User.Name,
			Sex : User.Sex,
			Age : User.Age,
			Message : User.Message
		}
	})
}

//获取  public List<User> PutUpdpost([FromUri]int id)接口[HttpPut,Route("PutUpData")]
export function PutFromUriPutUpData(User) {
	return Localhostrequest({
		url: '/Values/PutUpData',
		method: 'put',
		params: {
			ID : User.ID,
			Name : User.Name,
			Sex : User.Sex,
			Age : User.Age,
			Message : User.Message
		}
	})
}

//获取 public List<User> PutUpd([FromBody]int id)接口[ActionName("NewPutUpd")][HttpPut]
export function PutFromBodyNewPutUpd(User) {
	return Localhostrequest({
		url: '/Values/NewPutUpd',
		method: 'put',
		data: {
			ID : User.ID,
			Name : User.Name,
			Sex : User.Sex,
			Age : User.Age,
			Message : User.Message
		}
	})
}

//获取 public List<User> Deletepost([FromUri]int id)接口[HttpDelete, Route("DelDatapost")]
export function DeleteFromUriDelData(ID) {
	return Localhostrequest({
		url: '/Values/DelDatapost',
		method: 'delete',
		params: {
			id: ID
		}
	})
}

//获取 public List<User> Delete([FromBody]int id)接口[HttpDelete, Route("DelData")]
//delete方法在formbody中不能直接通过data传，需要指定其Content-Type为x-www-form-urlencoded，
//传参也要改格式，需要引入qs库后qs.stringify({ '':ID })
export function DeleteFromBodyDelData(ID) {
	return Localhostrequest({
		url: '/Values/DelData',
		method: 'delete',
		headers: { 
		    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		  },
		data : qs.stringify({ '':ID })
		
	})
}



