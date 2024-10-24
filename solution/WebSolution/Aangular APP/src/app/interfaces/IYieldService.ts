
import {Yield} from '../objects/yield';

export interface IYieldService{
    getAllYields():Yield[];
    getYield(id:number):Yield;
}
