class LocalStorageManager {
    public saveInLocalStorage(user: User) {
        const users = JSON.parse(localStorage.users || "[]");
        users.push(user);
        localStorage.users = JSON.stringify(users);
    }
    public getAllUserFromLocalStorage(): User[] {
        return JSON.parse(localStorage.users);
    }
    public getUserByNameFromLocaStorage(name: string): User {
        const users = JSON.parse(localStorage.users);
        return users.find((user: User) => user.name === name);
    }
}
