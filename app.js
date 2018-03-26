require("babel-register"); // 开发环境下使用

const app = require('./server/bootstrap')

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000')