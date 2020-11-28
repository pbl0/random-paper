export interface RedditSettings{
    subs: Sub[];
    sorting: string;
    limit: number;
}

export class Sub{
    name: string;
    on: boolean;

    constructor(name: string){
        this.name = name;
        this.on = true;
    }
}