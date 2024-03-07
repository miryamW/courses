import { Type } from "./type";

export interface Course{
    id:number,
    courseName:string,
    type: Type,
    numHours: number,
    dateOfStart: Date,
    teacher:string,
    softwares:string[]
}
