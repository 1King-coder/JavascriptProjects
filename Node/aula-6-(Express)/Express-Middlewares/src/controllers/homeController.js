exports.homePage = (request, response) => {
    response.render('index');
//    console.log(`Bear in mind that i got it from u: \n${request.session.name} ${request.session.lastname}`)
    return;
};
exports.postController = (request, response) => {
    response.send(`
    You just <b>POSTED</b> it.
    `);
    return;
};