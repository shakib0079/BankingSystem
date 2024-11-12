import { UserDatabase } from "../Database/UserDatabase.js";

export default function userAddOperation(firstName,lastName,userName,age,email,password){
    const user = {
        id: Math.round(Math.random() * 4987),
        firstName,
        lastName,
        userName,
        age,
        email,
        password,
        balance: 0,
        createdAt: new Date(),
        transactions: [],
        isAdmin: false,
    }

    const validation = isUserExists(user);
    if(validation.error){
        validation.data = null;
        return validation; 
    }

    UserDatabase.push(validation.data);
    return validation;
}

function isUserExists(_user){
    for(const user of UserDatabase){
        if(_user.userName === user.userName){
            return {statusCode: 409, error: true, message: "User already exists!", data: _user}
        }
    }
    return {statusCode: 200, error: false, message: "User created successfully!", data: _user}
}