import { Generation } from './generation';
import { Type } from './type';

export class Move {

    public id_move:number;
    public name_move:string;
    public accuracy:number;
    public generation_move:Generation;
    public power:number;
    public pp:number;
    public type_move:Type;

    constructor() {}
}
