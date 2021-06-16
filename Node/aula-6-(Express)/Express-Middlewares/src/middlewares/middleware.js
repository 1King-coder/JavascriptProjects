exports.globalMiddleware = (request, response, next) => {
    console.log(`\nMiddleware has been executed: Global\n`)

    if (request.body.name) console.log(`User: ${request.body.name} has been logged.`)

    next();
};