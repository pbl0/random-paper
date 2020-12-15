import { Sub } from './reddit-settings';

export class Collection extends Sub{

}

export class User extends Sub{

}

export class Term extends Sub{

}

export class Item extends Sub{

}

export interface UnsplashSettings{
    collectionsOn?: boolean;
    usersOn?: boolean;
    termsOn?: boolean;
    collections: Collection[];
    users: User[];
    terms: Term[];
    resolutionOn?: boolean;
    width?: number;
    height?: number;


    
    
    
}