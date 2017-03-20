var express    = require('express')
var serveIndex = require('serve-index')
 
var app = express()
 
app.use('/myfiles', serveIndex('public', {'icons': true}))
app.listen(3000)
console.log('server hitting at localhost:3000');
console.log('try /myfiles');