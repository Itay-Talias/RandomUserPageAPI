class GeneratorDetails {
    async generateUser(): Promise<User> {
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
    async fetchUsersDetails(numOfUsers: number) {
        const usersDetails = await $.get(
            `https://randomuser.me/api/?results=${numOfUsers}`
        );
        return usersDetails.results;
    }
    generateUserName(userDetais: any, indexOfUser: number): string {
        return `${userDetais[indexOfUser].name.title} ${userDetais[indexOfUser].name.first} ${userDetais[indexOfUser].name.last}`;
    }
    generatePhoto(userDetais: any, indexOfUser: number): string {
        return `${userDetais[indexOfUser].picture.thumbnail}`;
    }
    generateCity(userDetais: any, indexOfUser: number): string {
        return `${userDetais[indexOfUser].location.city}`;
    }
    generateState(userDetais: any, indexOfUser: number): string {
        return `${userDetais[indexOfUser].location.state}`;
    }
    generateAddres(userDetais: any, indexOfUser: number): Address {
        const state = this.generateState(userDetais, indexOfUser);
        const city = this.generateCity(userDetais, indexOfUser);
        return { state, city };
    }
    generateFriends(usersDetails: any[]): string[] {
        const friendsArr: string[] = [];
        usersDetails.forEach((user, index) =>
            friendsArr.push(this.generateUserName(usersDetails, index))
        );
        return friendsArr;
    }
    async generateQuote(): Promise<Quote> {
        const userQuote = await $.get(`https://api.kanye.rest/`);
        return { quote: userQuote.quote };
    }
    async generateAboutMe(): Promise<string[]> {
        const userAboutMe = await $.get(
            `https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`
        );
        return userAboutMe;
    }
    async generatePokemon(): Promise<Pokemon> {
        const randomId: number = Math.floor(Math.random() * 948) + 1;
        const randomPokemon = await $.get(
            `https://pokeapi.co/api/v2/pokemon/${randomId}/`
        );
        return {
            name:
                randomPokemon.name[0].toUpperCase() +
                randomPokemon.name.slice(1),
            photo: randomPokemon.sprites.front_shiny,
        };
    }
}
