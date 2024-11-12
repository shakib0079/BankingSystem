import PromptSync from "prompt-sync";
import { displayUI } from "./ScreenPlay.js";
const prompt = PromptSync({sigint:true});

export default function userInfoUpdateOperation(_user){
    displayUI();
    console.log(`1. First Name: ${_user.firstName}`);
    console.log(`2. Last Name: ${_user.lastName}`);
    console.log(`3. Username: ${_user.userName}`);
    console.log(`4. Email: ${_user.email}`);
    console.log(`5. Password: ${_user.password}`);
    console.log(`6. Age: ${_user.age}`);

    const choice = Number(prompt(">>>>>>"));

    switch (choice) {
        case 1:
            const updateFirstName = prompt(">>");
            _user.firstName = updateFirstName;
            break;
        
        case 2:
            const updateLasttName = prompt(">>");
            _user.lastName = updateLasttName;
            break;

        case 3:
            const updateUsertName = prompt(">>");
            _user.userName = updateUsertName;
            break;
        case 4:
            const updateEmail = prompt(">>");
            _user.email = updateEmail;
            break;
        case 5:
            const updatePassword = prompt.hide(">>");
            _user.password = updatePassword;
            break;
        case 5:
            const updateAge = prompt.hide(">>");
            _user.age = updateAge;
            break;
    
        default:
            break;
    }

    return {statusCode: 200, error: false, message: "User information updated successfully!", data: _user}
}