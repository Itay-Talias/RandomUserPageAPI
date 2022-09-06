interface Address {
    city: string;
    state: string;
}

interface Quote {
    quote: string;
}

interface Pokemon {
    name: string;
    photo: string;
}

interface User {
    name: string;
    photo: string;
    aboutMe: string[];
    friends: string[];
    address: Address;
    quote: Quote;
    pokemon: Pokemon;
}

class GeneratorDetails {
    static async fetchUsersDetails(numOfUsers: number) {
        const usersDetails = await $.get(
            `https://randomuser.me/api/?results=${numOfUsers}`
        );
        return usersDetails.results;
    }
    static generateUserName(userDetais: any, indexOfUser: number): string {
        return `${userDetais[indexOfUser].name.title} ${userDetais[indexOfUser].name.first} ${userDetais[indexOfUser].name.last}`;
    }
    static generatePhoto(userDetais: any, indexOfUser: number): string {
        return `${userDetais[indexOfUser].picture.thumbnail}`;
    }
    static generateCity(userDetais: any, indexOfUser: number): string {
        return `${userDetais[indexOfUser].location.city}`;
    }
    static generateState(userDetais: any, indexOfUser: number): string {
        return `${userDetais[indexOfUser].location.state}`;
    }
    static generateAddres(userDetais: any, indexOfUser: number): Address {
        const state = this.generateState(userDetais, indexOfUser);
        const city = this.generateCity(userDetais, indexOfUser);
        return { state, city };
    }
    static generateFriends(usersDetails: any[]): string[] {
        const friendsArr: string[] = [];
        usersDetails.forEach((user, index) =>
            friendsArr.push(
                GeneratorDetails.generateUserName(usersDetails, index)
            )
        );
        return friendsArr;
    }
    static async generateQuote(): Promise<Quote> {
        const userQuote = await $.get(`https://api.kanye.rest/`);
        return { quote: userQuote.quote };
    }
    static async generateAboutMe(): Promise<string[]> {
        const userAboutMe = await $.get(
            `https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`
        );
        return userAboutMe;
    }
    static async generatePokemon(): Promise<Pokemon> {
        const randomId: number = Math.floor(Math.random() * 948) + 1;
        const randomPokemon = await $.get(
            `https://pokeapi.co/api/v2/pokemon/${randomId}/`
        );
        return {
            name: randomPokemon.name,
            photo: randomPokemon.sprites.front_shiny,
        };
    }
    static async generateUser(): Promise<User> {
        const userDetais = await this.fetchUsersDetails(8);
        const faivQuote = await this.generateQuote();
        const aboutMe = await this.generateAboutMe();
        const randomPokemon = await this.generatePokemon();
        return {
            name: this.generateUserName(userDetais, 0),
            address: this.generateAddres(userDetais, 0),
            photo: this.generatePhoto(userDetais, 0),
            friends: this.generateFriends(userDetais.slice(1)),
            aboutMe: aboutMe,
            quote: faivQuote,
            pokemon: randomPokemon,
        };
    }
}
