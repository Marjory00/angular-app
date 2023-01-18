export class FeatureName {
    name: string;
    title: string;
    link: string;
    

    constructor() {
        this.name = '';
        this.title = '';
        this.link = '';
        

    }
}

export class Name {
    name: string

    constructor() {
        this.name = '';
    }
}

export class Feature {

    frontend: Array<FeatureName>;
    backend: Array<Name>;

    constructor() {
        this.frontend = [];
        this.backend = [];
    }
}