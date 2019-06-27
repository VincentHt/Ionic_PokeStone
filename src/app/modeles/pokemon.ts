import { Type } from './type';
import { Ability } from './ability';
import { Item } from './item';
import { Move } from './move';
import { Generation } from './generation';
import { Stats } from './stats';

export class Pokemon {

    public name:string;
    public num:number;
    public types:Type[];
    public abilities:Ability[];
    public items:Item[];
    public moves:Move[];
    public generation:Generation;
    public stats:Stats;
    public sprite_pokemon:string;

    constructor() {
        this.types = new Array<Type>();
        this.abilities = new Array<Ability>();
        this.items = new Array<Item>();
        this.moves = new Array<Move>(4);
    }

}
