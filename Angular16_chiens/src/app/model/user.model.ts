import { Role } from "./role.model";


export class User{
    user_id!:number;
    username!:string ;
    password!: string ;
    email!: string ;
    code!:string;
    roles!:Role[];
    }