var SockJsServer = require('./lib/SockJsServer'),
	HttpServer = require('./lib/HttpServer'),
	Config = require('./lib/Config');


SockJsServer.installHandlers(HttpServer);
HttpServer.listen(Config.port,Config.host);
