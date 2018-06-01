 
console.log(process.env.NODE_ENV)

 
let app = require('./server/bootstrap');
let port = process.env.APP_PORT || 3000
app.listen(port,()=>{
	console.log(`server is running at ${port}`)
});
