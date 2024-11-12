import PromptSync from "prompt-sync";
import { displayUI } from "./Utilities/ScreenPlay.js";
import loginValidation from "./Utilities/process.js";
const prompt = PromptSync({sigint:true});

export default function signInSignOutPage(){

    do{
        displayUI();
        console.log("---------------------------------------");
        console.log("Please provide login information below: ")
        console.log("---------------------------------------");
        const username = prompt("Enter your username: ")
        const password = prompt.hide("Enter your password: ")
        const Validation = loginValidation(username, password);
        displayUI();
        console.log("---------------------------------------");
        console.log(Validation.message);
        console.log("---------------------------------------");
        console.log();
        prompt("Please enter any key to continue...");
    }while(true);

} 

signInSignOutPage();
