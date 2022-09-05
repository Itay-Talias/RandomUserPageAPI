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
    static generateFriends(usersDetails: any[]): string[] {
        const friendsArr: string[] = [];
        usersDetails.forEach((user, index) =>
            friendsArr.push(
                GeneratorDetails.generateUserName(usersDetails, index)
            )
        );
        return friendsArr;
    }
    static async generateQuote() {
        const userQuote = await $.get(`https://api.kanye.rest/`);
        return userQuote.quote;
    }
    static async generateAboutMe() {
        const userAboutMe = await $.get(
            `https://baconipsum.com/api/?type=meat-and-filler`
        );
        return userAboutMe;
    }
    static async generatePokemon() {
        const usersQuote = await $.get(`https://api.kanye.rest/`);
        return usersQuote.quote;
    }
    static async generateUser() {
        const userDetais = await this.fetchUsersDetails(8);
        const faivQuote = await this.generateQuote();
        return {
            name: this.generateUserName(userDetais, 0),
            city: this.generateCity(userDetais, 0),
            state: this.generateState(userDetais, 0),
            photo: this.generatePhoto(userDetais, 0),
            friends: this.generateFriends(userDetais.slice(1)),
            quote: faivQuote,
        };
    }
}
