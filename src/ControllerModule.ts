const data: DataModule = new DataModule();

$("#genertor-btn").on("click", function () {
    renderModules.emptyAll();
    data.RandomUser().then(() => {
        renderModules.RenderPage(data.getRandomUser());
    });
});
