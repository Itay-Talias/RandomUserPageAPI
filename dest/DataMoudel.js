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
    static fetchUsersDetails(numOfUsers) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersDetails = yield $.get(`https://randomuser.me/api/?results=${numOfUsers}`);
            return usersDetails.results;
        });
    }
    static generateUserName(userDetais, indexOfUser) {
        return `${userDetais[indexOfUser].name.title} ${userDetais[indexOfUser].name.first} ${userDetais[indexOfUser].name.last}`;
    }
    static generatePhoto(userDetais, indexOfUser) {
        return `${userDetais[indexOfUser].picture.thumbnail}`;
    }
    static generateCity(userDetais, indexOfUser) {
        return `${userDetais[indexOfUser].location.city}`;
    }
    static generateState(userDetais, indexOfUser) {
        return `${userDetais[indexOfUser].location.state}`;
    }
    static generateFriends(usersDetails) {
        const friendsArr = [];
        usersDetails.forEach((user, index) => friendsArr.push(GeneratorDetails.generateUserName(usersDetails, index)));
        return friendsArr;
    }
    static generateQuote() {
        return __awaiter(this, void 0, void 0, function* () {
            const userQuote = yield $.get(`https://api.kanye.rest/`);
            return userQuote.quote;
        });
    }
    static generateAboutMe() {
        return __awaiter(this, void 0, void 0, function* () {
            const userAboutMe = yield $.get(`https://baconipsum.com/api/?type=meat-and-filler`);
            return userAboutMe;
        });
    }
    static generatePokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            const usersQuote = yield $.get(`https://api.kanye.rest/`);
            return usersQuote.quote;
        });
    }
    static generateUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const userDetais = yield this.fetchUsersDetails(8);
            const faivQuote = yield this.generateQuote();
            return {
                name: this.generateUserName(userDetais, 0),
                city: this.generateCity(userDetais, 0),
                state: this.generateState(userDetais, 0),
                photo: this.generatePhoto(userDetais, 0),
                friends: this.generateFriends(userDetais.slice(1)),
                quote: faivQuote,
            };
        });
    }
}
