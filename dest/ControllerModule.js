"use strict";
const data = new DataModule();
$("#genertor-btn").on("click", function () {
    renderModules.emptyAll();
    data.RandomUser().then(() => {
        renderModules.RenderPage(data.getRandomUser());
    });
});
