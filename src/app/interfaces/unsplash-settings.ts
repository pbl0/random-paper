import { Sub } from './reddit-settings';

export class Collection extends Sub{

}

export class User extends Sub{

}

export class Term extends Sub{

}

export interface UnsplashSettings{
    collections: Collection[];
    users: User[];
    terms: Term[];
    resolutionOn?: boolean;
    width?: number;
    height?: number;


    
    
    
}