"use strict";
class LocalStorageManager {
    saveInLocalStorage(user) {
        const users = JSON.parse(localStorage.users || "[]");
        users.push(user);
        localStorage.users = JSON.stringify(users);
    }
    getAllUserFromLocalStorage() {
        return JSON.parse(localStorage.users);
    }
    getUserByNameFromLocaStorage(name) {
        const users = JSON.parse(localStorage.users);
        return users.find((user) => user.name === name);
    }
}
