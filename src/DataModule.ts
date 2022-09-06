class DataModule {
    private loggedUser: User;
    constructor() {
        this.loggedUser = {} as User;
    }
    public async RandomUser() {
        this.loggedUser = await GeneratorDetails.generateUser();
    }
    public getRandomUser() {
        return this.loggedUser;
    }
}

const data: DataModule = new DataModule();
data.RandomUser().then(() => {
    console.log(data.getRandomUser());
});
