import PromptSync from "prompt-sync";
import { displayUI } from "./Utilities/ScreenPlay.js";
import loginValidation from "./Utilities/process.js";
const prompt = PromptSync({sigint:true});

export default function signInSignOutPage(){

    do{
        displayUI();
        const username = prompt("Enter your username: ")
        const password = prompt("Enter your password: ")
        const Validation = loginValidation(username, password);
        console.log(Validation);
        prompt("Please enter any key to continue...");
    }while(true);

} 

signInSignOutPage();
