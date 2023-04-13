<template>
	<div id="JavaModule">
		<div class="Postlogin">
			<h4>Post:调用本地java-login服务</h4>
			<h4>用户名:<input type="text" v-model="UserLoging.name" /></h4>
			<h4>密码:<input type="text" v-model="UserLoging.password" /></h4>
			<input type="button" value="登录" @click="PostUserLogin" />
			<div v-if="JSON.stringify(this.logindata)!='{}'">
				<div v-if="parseInt(this.logindata.code) > 0">
					<h4>code:{{this.logindata.code}},message:{{this.logindata.message}},token:{{this.logindata.data.token}}</h4>
				</div>
				<div v-else>
					<h4>code:{{this.logindata.code}},message:{{this.logindata.message}}</h4>
				</div>
			</div>
		</div>
		<div class="PostUserAll">
			<h4>Post:调用本地java-GetUserAll服务</h4>
			<input type="button" value="查询" @click="PostGetUserAll" />	
			<div v-if="JSON.stringify(this.getUserAll)!='{}'">
				<div v-if="parseInt(this.getUserAll.code) > 0">
				    <h4>code:{{this.getUserAll.code}},message:{{this.getUserAll.message}}</h4>
					<h4 v-for="item in this.getUserAll.data">
						{{item.id}},{{item.name}},{{item.sex}},{{item.age}},{{item.address}},{{item.phonenumber}}
					</h4>
				</div>
				<div v-else>
					<h4>code:{{this.getUserAll.code}},message:{{this.getUserAll.message}}</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'JavaModule',
		data() {
			return {
				ziid: 1,
				UserLoging: {
					name: null,
					password: null
				}
			}
		},
		props: {
			logindata: Object,
			getUserAll: Object
		},
		methods: {
			PostUserLogin() {
				console.log('我执行了PostUserLogin！')
				if (this.UserLoging != null && this.UserLoging.name != '' && this.UserLoging.name != null && this
					.UserLoging.password != '' && this.UserLoging.password != null) {
					console.log('我执行了，有值！');
					console.log(this.UserLoging);
					this.$emit("Javalogin", this.UserLoging)
				} else {
					alert('[JavaLogin]用户名和密码不能为空！');
				}
			},
			PostGetUserAll() {
				console.log('我执行了PostGetUserAll！')
				this.$emit("JavaGetUserAll", this.global.token)
			},
		},
	}
</script>

<style>
	.Postlogin {
		border: 2px solid #e6699f;
		padding: 2px 0 2px;
		margin-top: 2px;
	}
	.PostUserAll {
		border: 2px solid #e685d4;
		padding: 2px 0 2px;
		margin-top: 2px;
	}
</style>
