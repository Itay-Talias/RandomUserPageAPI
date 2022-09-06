"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class GeneratorDetails {
    generateUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const userDetais = yield this.fetchUsersDetails(8);
            const faivQuote = yield this.generateQuote();
            const aboutMe = yield this.generateAboutMe();
            const randomPokemon = yield this.generatePokemon();
            return {
                name: this.generateUserName(userDetais, 0),
                address: this.generateAddres(userDetais, 0),
                photo: this.generatePhoto(userDetais, 0),
                friends: this.generateFriends(userDetais.slice(1)),
                aboutMe: aboutMe,
                quote: faivQuote,
                pokemon: randomPokemon,
            };
        });
    }
    fetchUsersDetails(numOfUsers) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersDetails = yield $.get(`https://randomuser.me/api/?results=${numOfUsers}`);
            return usersDetails.results;
        });
    }
    generateUserName(userDetais, indexOfUser) {
        return `${userDetais[indexOfUser].name.title} ${userDetais[indexOfUser].name.first} ${userDetais[indexOfUser].name.last}`;
    }
    generatePhoto(userDetais, indexOfUser) {
        return `${userDetais[indexOfUser].picture.thumbnail}`;
    }
    generateCity(userDetais, indexOfUser) {
        return `${userDetais[indexOfUser].location.city}`;
    }
    generateState(userDetais, indexOfUser) {
        return `${userDetais[indexOfUser].location.state}`;
    }
    generateAddres(userDetais, indexOfUser) {
        const state = this.generateState(userDetais, indexOfUser);
        const city = this.generateCity(userDetais, indexOfUser);
        return { state, city };
    }
    generateFriends(usersDetails) {
        const friendsArr = [];
        usersDetails.forEach((user, index) => friendsArr.push(this.generateUserName(usersDetails, index)));
        return friendsArr;
    }
    generateQuote() {
        return __awaiter(this, void 0, void 0, function* () {
            const userQuote = yield $.get(`https://api.kanye.rest/`);
            return { quote: userQuote.quote };
        });
    }
    generateAboutMe() {
        return __awaiter(this, void 0, void 0, function* () {
            const userAboutMe = yield $.get(`https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`);
            return userAboutMe;
        });
    }
    generatePokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            const randomId = Math.floor(Math.random() * 948) + 1;
            const randomPokemon = yield $.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`);
            return {
                name: randomPokemon.name[0].toUpperCase() +
                    randomPokemon.name.slice(1),
                photo: randomPokemon.sprites.front_shiny,
            };
        });
    }
}
