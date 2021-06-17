exports.globalMiddleware = (request, response, next) => {
    console.log('I am a Global middleware.')
    next();
};