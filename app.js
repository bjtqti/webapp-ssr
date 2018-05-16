if(process.env.NODE_ENV !== 'production'){
	require('babel-register'); //develop
}

console.log(process.env.NODE_ENV)

let app = require(process.env.NODE_ENV === 'production' ? './dist/server/bootstrap' : './server/bootstrap')
let port = process.env.APP_PORT || 3000
app.listen(port,()=>{
	console.log(`server is running at ${port}`)
});
