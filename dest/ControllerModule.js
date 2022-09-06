"use strict";
class ControllerModule {
    constructor() {
        this.data = new DataModule();
        this.render = new RenderModules();
        this.wisdom = {};
    }
    addOnClicksToButtons() {
        $("#genertor-btn").on("click", () => {
            this.render.emptyAll();
            this.data.RandomUser().then(() => {
                this.render.RenderPage(this.data.getRandomUser());
            });
        });
        $("#save-btn").on("click", () => {
            this.wisdom = this.data.getRandomUser();
            localStorage.wisdom = JSON.stringify(this.wisdom);
        });
        $("#load-btn").on("click", () => {
            const user = JSON.parse(localStorage.wisdom);
            this.render.emptyAll();
            this.render.RenderPage(user);
        });
    }
}
