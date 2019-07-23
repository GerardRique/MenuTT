import { UUID } from 'angular2-uuid';


export class Menu{
    private id: string;
    private menuItems: Array<Object>;

    constructor(private title: string, private description: string, private restaruantId: string){
        this.id = UUID.UUID();
        this.menuItems = Array<Object>();
    }

}