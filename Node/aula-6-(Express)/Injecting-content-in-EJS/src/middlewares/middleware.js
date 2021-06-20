exports.globalMiddleware = (request, response, next) => {
    response.locals.localVariable = 'I am a local variable';
    console.log('I am a Global middleware.');
    next();
};