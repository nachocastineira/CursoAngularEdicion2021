export interface Heroe {
    id?:               string; //dato opcional '?'
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_img?:         string; //opcional
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}
