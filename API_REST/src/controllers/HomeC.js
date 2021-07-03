class HomeController {
  index(request, response) {
    response.json({
      allRight: true,
    });
  }
}

export default new HomeController();
