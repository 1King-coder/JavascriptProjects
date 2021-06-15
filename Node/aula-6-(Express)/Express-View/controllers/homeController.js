exports.homePage = (request, response) => {
    response.send(`
    <form action="/" method="POST">
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder="type your name here"><br>
        <label for="name">Age:</label>
        <input type="text" name="Age" placeholder="your age"><br>
        <input type="submit" value="SEND">
    </form>
    `);
};
exports.postController = (request, response) => {
    response.send(`
    You just <b>POSTED</b> it.
    `);
}