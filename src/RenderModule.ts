class RenderModules {
    RenderPage(user: User) {
        this.RenderUser(user);
        this.RenderQuote(user);
        this.RenderPokemon(user);
        this.RenderAboutMe(user);
        this.RenderFriends(user);
    }
    emptyAll() {
        $(".user-container").empty();
        $(".quote-container").empty();
        $(".pokemon-container").empty();
        $(".meat-container").empty();
        $(".friends-container").empty();
    }
    private RenderUser(user: User) {
        const userhtml = $("#user-template").html();
        var template = Handlebars.compile(userhtml);
        const newHTML = template(user);
        $(".user-container").append(newHTML);
    }
    private RenderQuote(user: User) {
        const quotehtml = $("#quote-template").html();
        var template = Handlebars.compile(quotehtml);
        const newHTML = template(user.quote);
        $(".quote-container").append(newHTML);
    }
    private RenderPokemon(user: User) {
        const pokemonhtml = $("#pokemon-template").html();
        var template = Handlebars.compile(pokemonhtml);
        const newHTML = template(user.pokemon);
        $(".pokemon-container").append(newHTML);
    }
    private RenderAboutMe(user: User) {
        const aboutMehtml = $("#meat-template").html();
        var template = Handlebars.compile(aboutMehtml);
        const newHTML = template({ aboutMeArr: user.aboutMe });
        $(".meat-container").append(newHTML);
    }
    private RenderFriends(user: User) {
        const friendsMenhtml = $("#friends-template").html();
        var template = Handlebars.compile(friendsMenhtml);
        const newHTML = template({ friends: user.friends });
        $(".friends-container").append(newHTML);
    }
    public RenderLoadUsers(users: object[]) {
        const popuphtml = $("#popup-template").html();
        var template = Handlebars.compile(popuphtml);
        const newHTML = template({ userArr: users });
        $(".popuptext").append(newHTML);
    }
    public EmptyLoadUsers() {
        $(".popuptext").empty();
    }
}
