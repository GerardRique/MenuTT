import { UUID } from 'angular2-uuid';


export class Restaurant{
    private id: string;

    constructor(private name: string, private address: string, private latitude: string, private longitude: string){
        this.id = UUID.UUID();
    }
    
}