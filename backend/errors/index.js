//errors/index.js
var util = require('util');

function HTTPError() {
    var self = this;
    Error.call(self, arguments);
}

util.inherits(HTTPError, Error);

function InternalError(message) {
    var self = this;
    Error.captureStackTrace(self, arguments.callee);
    self.statusCode = 500;
    self.message = message;
    self.name = 'InternalError@';
}

util.inherits(InternalError, HTTPError);

function NotFound(message) {
    var self = this;
    HTTPError.call(self);
    Error.captureStackTrace(self, arguments.callee);
    self.statusCode = 404;
    self.message = message;
    self.name = 'NotFound';
}

util.inherits(NotFound, HTTPError);

function BadRequest(message) {
    var self = this;
    HTTPError.call(self);
    Error.captureStackTrace(self, arguments.callee);
    self.statusCode = 400;
    self.message = message;
    self.name = 'BadRequest';
}

util.inherits(BadRequest, HTTPError);

function UnauthorizedRequest(message) {
    var self = this;
    HTTPError.call(self);
    Error.captureStackTrace(self, arguments.callee);
    self.statusCode = 401;
    self.message = message;
    self.name = "UnauthorizedRequest"
}

util.inherits(UnauthorizedRequest, HTTPError);

function ForbiddenRequest(message) {
    var self = this;
    HTTPError.call(self);
    Error.captureStackTrace(self, arguments.callee);
    self.statusCode = 403;
    self.message = message;
    self.name = "ForbiddenRequest"
}

util.inherits(ForbiddenRequest, HTTPError);

function ErrorExecutingCMD(stdout, stderr) {
    var self = this;
    Error.call(self);
    Error.captureStackTrace(self, arguments.callee);
    self.stdout = stdout;
    self.stderr = stderr;
}

util.inherits(ErrorExecutingCMD, Error);

module.exports = {
    HTTPError: HTTPError,
    NotFound: NotFound,
    InternalError: InternalError,
    BadRequest: BadRequest,
    UnauthorizedRequest: UnauthorizedRequest,
    ForbiddenRequest: ForbiddenRequest,
    ErrorExecutingCMD: ErrorExecutingCMD
};
