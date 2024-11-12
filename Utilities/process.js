import { UserDatabase } from "../Database/UserDatabase.js";
import { displayDB } from "./ScreenPlay.js";

export function userFIlter(_id){
    for(const user of UserDatabase){
        if(user.id === _id){
            displayDB(user);
            return {statusCode: 200, error: false, message: "User Found", data: user}
        }
    }
    return {statusCode: 409, error: true, message: "User does not exists!", data: null}
}