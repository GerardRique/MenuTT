import { UUID } from 'angular2-uuid';


export class MenuItem{
    private id: string;

    constructor(private title: string, private description: string, private menuId: string, private price: number){
        this.id = UUID.UUID();
    }

}