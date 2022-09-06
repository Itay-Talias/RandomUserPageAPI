class DataModule {
    private loggedUser: User;
    constructor() {
        this.loggedUser = {} as User;
    }
    async RandomUser() {
        this.loggedUser = await GeneratorDetails.generateUser();
    }
    public getRandomUser() {
        return this.loggedUser;
    }
}
