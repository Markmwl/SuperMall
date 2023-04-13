module.exports = {
	configureWebpack:{
		resolve:{
			alias:{
				//由于默认@已经配置为src路径所以不用在进行二次配置
				//1.配置资源路径assets
				'assets':'@/assets',
				//2.配置公共路径common
				'common':'@/common',
				//3.配置组件路径components
				'components':'@/components',
				//4.配置网络路径network
				'network':'@/network',
				//5.配置大型视图路径views
				'views':'@/views',
			}
		}
	},
	// 配置跨域请求 webpack-dev-server 相关配置
	devServer: {
		//默认端口
		port: 8080,
		//设置为0.0.0.0则所有地址都能访问
		host: 'localhost',
		// 自动打开浏览器
		open: true,
		https: false,
		//使用代理解决跨域问题(跨域的常用方式：1.在前端解决跨域问题 2.后端直接设置访问控制允许源Access-Control-Allow-Origin:* 代表允许全部域名跨域，也可单独设置指定域名跨域 3.后端配置Nginx反向代理)
		proxy: {
			//详解
			//1.proxy里边的'/api'什么意思？
			//答：作用是告诉node，我的接口要是以'/api'开头的才用代理，例如:App.vue中请求的接口地址为"/api/user"符合以/api开口的条件，所以会被代理，最后代理的路径由http://localhost:8080/api/user ==> 变成http://10.10.38.94:3000/api/user
			//    虽然浏览器的NetWork的Headers/General URL还是http://localhost:8080/api/user,但实际上在请求后，就被node代理服务器悄悄代理成为了http://10.10.38.943000/api/user再去请求真实后台接口地址
			//2.pathRewrite里面的'^/api':''什么意思？
			//答：由上面可知，代理成了http://10.10.38.94:3000/api/user,但是我们实际的真是后台接口地址是http://10.10.38.94:3000/user，所以在请求前一刻，需要将/api去除(把/api给重写成空字符串了)。
			//'^/api是一个正则表达式，表示匹配请求的url中，全部http://localhost:8081/api/user转接为http://localhost:8081/user'
			'/api': {
				//目标代理服务器地址
				target: 'http://localhost:53139/api',
				//如果要代理 websockets，配置这个参数
				//ws: true,
				// 如果是https接口，需要配置这个参数
				//secure: false,  
				//允许跨域
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			},
			//'^/java是一个正则表达式，表示匹配请求的url中，全部http://localhost:8081/java/login转接为http://localhost:8081/login'
			'/java': {
				//目标代理服务器地址
				target: 'http://localhost:8081',
				//如果要代理 websockets，配置这个参数
				//ws: true,
				// 如果是https接口，需要配置这个参数
				//secure: false,  
				//允许跨域
				changeOrigin: true,
				pathRewrite: {
					'^/java': ''
				}
			}
		}
	
	}
};