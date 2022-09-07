"use strict";
class RenderModules {
    RenderPage(user) {
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
    RenderUser(user) {
        const userhtml = $("#user-template").html();
        var template = Handlebars.compile(userhtml);
        const newHTML = template(user);
        $(".user-container").append(newHTML);
    }
    RenderQuote(user) {
        const quotehtml = $("#quote-template").html();
        var template = Handlebars.compile(quotehtml);
        const newHTML = template(user.quote);
        $(".quote-container").append(newHTML);
    }
    RenderPokemon(user) {
        const pokemonhtml = $("#pokemon-template").html();
        var template = Handlebars.compile(pokemonhtml);
        const newHTML = template(user.pokemon);
        $(".pokemon-container").append(newHTML);
    }
    RenderAboutMe(user) {
        const aboutMehtml = $("#meat-template").html();
        var template = Handlebars.compile(aboutMehtml);
        const newHTML = template({ aboutMeArr: user.aboutMe });
        $(".meat-container").append(newHTML);
    }
    RenderFriends(user) {
        const friendsMenhtml = $("#friends-template").html();
        var template = Handlebars.compile(friendsMenhtml);
        const newHTML = template({ friends: user.friends });
        $(".friends-container").append(newHTML);
    }
    RenderLoadUsers(users) {
        const popuphtml = $("#popup-template").html();
        var template = Handlebars.compile(popuphtml);
        const newHTML = template({ userArr: users });
        $(".popuptext").append(newHTML);
    }
    EmptyLoadUsers() {
        $(".popuptext").empty();
    }
}
