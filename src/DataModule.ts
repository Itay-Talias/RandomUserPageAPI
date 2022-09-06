class DataModule {
    private loggedUser: User;
    private generator: GeneratorDetails;
    constructor() {
        this.loggedUser = {} as User;
        this.generator = new GeneratorDetails();
    }
    async RandomUser() {
        this.loggedUser = await this.generator.generateUser();
    }
    public getRandomUser() {
        return this.loggedUser;
    }
}
