import { UserDatabase } from "../Database/UserDatabase.js";

export default function userDeleteOperation(_id){
    for(let i = 0; i<UserDatabase.length; i++){
        if(UserDatabase[i].id === _id){
            const deletedUser = UserDatabase.splice(i, 1);
            return {statusCode: 200, error: false, message: "User deleted successfully!", data: deletedUser}
        }
    }

    return {statusCode: 409, error: true, message: "User does not exists!", data: null}
}