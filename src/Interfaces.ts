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
