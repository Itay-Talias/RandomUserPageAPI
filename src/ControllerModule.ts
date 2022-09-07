class ControllerModule {
    data: DataModule;
    render: RenderModules;
    localStorageManager: LocalStorageManager;
    constructor() {
        this.data = new DataModule();
        this.render = new RenderModules();
        this.localStorageManager = new LocalStorageManager();
    }
    addOnClicksToButtons() {
        const self = this;
        $("#genertor-btn").on("click", () => {
            this.render.emptyAll();
            this.data.RandomUser().then(() => {
                this.render.RenderPage(this.data.getRandomUser());
            });
        });
        $("#save-btn").on("click", () => {
            this.localStorageManager.saveInLocalStorage(
                this.data.getRandomUser()
            );
        });
        $("#load-btn").on("click", () => {
            const users = this.localStorageManager.getAllUserFromLocalStorage();
            console.log(users);
            this.render.EmptyLoadUsers();
            $("#myPopup").addClass("show");
            this.render.RenderLoadUsers(users);
        });

        $(".popup").on("click", ".user-in-loaclStorage", function () {
            console.log($(this).text());
            const user = self.localStorageManager.getUserByNameFromLocaStorage(
                $(this).text()
            );
            self.render.emptyAll();
            self.render.RenderPage(user);
            $("#myPopup").removeClass("show");
        });
    }
}
