var express = require('express');
var app = express();
var marked = require('marked'); //marked is a markdown processor
var fs = require('fs');

/*app.get('/hello.txt', function(req, res) {
	var body = 'Hello World';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);
	res.end(body);
});
*/
app.use(function(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
});

app.use(express.static(__dirname + '/public'));

//GET /md?markdown=Put+some+basic+markdown+here
app.get('/md', function(req, res) {
	var markdown = req.query.markdown;
	marked(markdown, function(err, content) {
		if (err) throw err;
		res.send('<html><body>' + content + '</body></html>');
	});
});
app.listen(3030);
console.log('Listening on 3030');

/*
var server = Hapi.createServer('localhost', 8000);

server.route([
	{ method: "GET", path: '/', handler: home }
	])


server.route({ method: 'GET', path: '/', handler: { file: './public/index.html' } });
server.route({ method: 'GET', path: '/markdown', handler: function(request) {
							request.reply({ greeting: request.params });
}
});

server.start();

*/



