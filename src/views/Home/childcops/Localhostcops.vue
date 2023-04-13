<template>
	<div id ="Localhostcops">
		<div class="GetUsers">
			<h4>Get:本地localhost中方法 GetUsers()无参返回数据</h4>
			<h4 v-for="item in localGets">
				{{item.ID}},{{item.Name}},{{item.Age}},{{item.Sex}},{{item.Message}}
			</h4>
		</div>
		<div class="Get">
			<h4>Get:本地localhost中方法Get(int id)有参返回数据</h4>
			<input type="text" v-model="ziid" /> &nbsp;
			<input type="button" value="查询" @click=" Selectbyid"/>
			<div v-if="localwhereGets != null">
			<h4>ID:{{localwhereGets.ID}}</h4>
			<h4>姓名:{{localwhereGets.Name}}</h4>
			<h4>年龄:{{localwhereGets.Age}}</h4>
			<h4>性别:{{localwhereGets.Sex}}</h4>
			<h4>说明:{{localwhereGets.Message}}</h4>
			</div>
			<div v-else>
				<h4>未查询到此人数据！</h4>
			</div>
		</div>
		<div class="Posturl">
			<h4>Post:本地localhost中方法PostAddpost([FromUri]User user)有参返回List<!User>数据</h4>
			<h4>ID:<input type="text" v-model="Userurl.ID" /></h4>
			<h4>姓名:<input type="text" v-model="Userurl.Name" /></h4>
			<h4>年龄:<input type="text" v-model="Userurl.Age" /></h4>
			<h4>性别:<input type="text" v-model="Userurl.Sex" /></h4>
			<h4>说明:<input type="text" v-model="Userurl.Message" /></h4>
			<input type="button" value="添加" @click="Postdataadd"/>&nbsp;
			<input type="button" value="更新" @click="updateurl"/>&nbsp;
			<input type="button" value="删除" @click="deleteurl"/>
			<h4 v-for="item in localChangeadd">
				{{item.ID}},{{item.Name}},{{item.Age}},{{item.Sex}},{{item.Message}}
			</h4>
		</div>
		
		<div class="Postbody">
			<h4>Post:本地localhost中方法PostAdd([FromBody]User user)有参返回List<!User>数据</h4>
			<h4>ID:<input type="text" v-model="Userbody.ID" /></h4>
			<h4>姓名:<input type="text" v-model="Userbody.Name" /></h4>
			<h4>年龄:<input type="text" v-model="Userbody.Age" /></h4>
			<h4>性别:<input type="text" v-model="Userbody.Sex" /></h4>
			<h4>说明:<input type="text" v-model="Userbody.Message" /></h4>
			<input type="button" value="添加" @click=" Postdataaddbody"/>&nbsp;
			<input type="button" value="更新" @click="updatebody"/>&nbsp;
			<input type="button" value="删除" @click="deletebody"/>
			<h4 v-for="item in localChangeaddbody">
				{{item.ID}},{{item.Name}},{{item.Age}},{{item.Sex}},{{item.Message}}
			</h4>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Localhostcops',
		data(){
			return {
				ziid:1,
				Userurl:{ ID:null,Name:null,Sex:null,Age:null,Message:null},
				Userbody:{ ID:null,Name:null,Sex:null,Age:null,Message:null}
			}
		},
		props: {
			//设置本地数据显示
			localGets: {
				type: Array,
				default () {
					return [];
				}
			},
			localwhereGets:Object,
			id:Number,
			localChangeadd:Array,
			localChangeaddbody:Array
		},
		methods:{
			Selectbyid(){
				this.$emit("Changeidwhere",this.ziid);
			},
			
			Postdataadd(){
				if( this.Userurl != null && this.Userurl.ID != '')
				{
					this.Userurl.ID = parseInt(this.Userurl.ID);
					this.Userurl.Age = parseInt(this.Userurl.Age);
				    this.$emit("Changeadd",this.Userurl)
				}
				else
				{
					alert('[FromUrl]要添加的数据是空的！');
				}
			},
			
			Postdataaddbody(){
				if( this.Userbody != null && this.Userbody.ID != '')
				{
					this.Userbody.ID = parseInt(this.Userbody.ID);
					this.Userbody.Age = parseInt(this.Userbody.Age);
				    this.$emit("Changeaddbody",this.Userbody)
				}
				else
				{
					alert('[FromBody]要添加的数据是空的！');
				}
			},
			
			updateurl(){
				if( this.Userurl != null && this.Userurl.ID != '')
				{
					this.Userurl.ID = parseInt(this.Userurl.ID);
					this.Userurl.Age = parseInt(this.Userurl.Age);
				    this.$emit("updurluser",this.Userurl)
				}
				else
				{
					alert('[FromUrl]要更新的数据是空的！');
				}
			},
			updatebody(){
				if( this.Userbody != null && this.Userbody.ID != '')
				{
					this.Userbody.ID = parseInt(this.Userbody.ID);
					this.Userbody.Age = parseInt(this.Userbody.Age);
				    this.$emit("updbodyuser",this.Userbody)
				}
				else
				{
					alert('[FromBody]要更新的数据是空的！');
				}
			},
			deleteurl(){
				if(this.Userurl != null && this.Userurl.ID != '' )
				{
					this.Userurl.ID = parseInt(this.Userurl.ID);
					 this.$emit("delurlid",this.Userurl.ID)
				}
				else
				{
					alert('[FromUrl]要删除的ID是空的！');
				}
			},
			deletebody(){
				if( this.Userbody != null && this.Userbody.ID != '')
				{
					this.Userbody.ID = parseInt(this.Userbody.ID);
					 this.$emit("delbodyid",this.Userbody.ID)
				}
				else
				{
					alert('[FromBody]要更新的ID是空的！');
				}
			}
			
		}
	}
</script>

<style>
	
	.GetUsers {
		border: 2px solid #00A8E6;
		padding: 2px 0 2px;
		margin-top: 2px;
	}

	.Get {
		border: 2px solid #e6436e;
		padding: 2px 0 2px;
		margin-top: 2px;
	}
	
	.Posturl {
		border: 2px solid #dce61b;
		padding: 2px 0 2px;
		margin-top: 2px;
	}
	
	.Postbody {
		border: 2px solid #ff00ff;
		padding: 2px 0 2px;
		margin-top: 2px;
	}
</style>
