import { UserDatabase } from "../Database/UserDatabase.js";
import administartionTask from "../UserType/admin.js";
import userTask from "../UserType/user.js";
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

export default function loginValidation(_username, _password){
    for(const user of UserDatabase){
        if(user.userName === _username && user.password === _password){
            if(user.isAdmin){
                administartionTask();
                // return {statusCode: 200, error: false, message: "Validation Successful!", data: user}
            }else{
                userTask(user);
                // return {statusCode: 200, error: false, message: "Validation Successful!", data: user}
            }
            
        }
    }
    return {statusCode: 409, error: true, message: "User does not exists!", data: null}
}