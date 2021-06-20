exports.globalMiddleware = (request, response, next) => {
    console.log('I am a Global middleware.')
    next();
};

exports.checkCsrfError = (error, request, response, next) => {
    if (error && error.code === 'EBADCSRFTOKEN') {
        return response.render('csrfError')
    };
};

exports.csrfMiddleware = (request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
};