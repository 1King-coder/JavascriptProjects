exports.homePage = (request, response) => {
    console.log(request.session.user)
    response.render('index');
    return;
};
exports.postController = (request, response) => {
    response.send(`
    You just <b>POSTED</b> it.
    `);
    return;
}