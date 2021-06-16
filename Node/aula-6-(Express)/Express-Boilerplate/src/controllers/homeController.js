exports.homePage = (request, response) => {
    response.render('index');
};
exports.postController = (request, response) => {
    response.send(`
    You just <b>POSTED</b> it.
    `);
}