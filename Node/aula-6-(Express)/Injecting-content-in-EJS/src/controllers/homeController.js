exports.homePage = (request, response) => {
    response.render('index', {
        title: undefined,
        numbersArray: [0, 1, 2, 3, 4, 5, 6, 7]
    });
    return;
};
exports.postController = (request, response) => {
    response.send(`
    You just <b>POSTED</b> it.
    `);
    return;
}