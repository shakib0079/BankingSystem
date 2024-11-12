import PromptSync from "prompt-sync";
import userAddOperation from "../Utilities/userAddOperation.js";
import { displayUI }  from "../Utilities/ScreenPlay.js";

const prompt = PromptSync({sigint:true});

export default function CreateUserAccount(){
    displayUI();
   
    const firstName = prompt("First Name: ");
    const lastName = prompt("Last Name: ");
    const userName = prompt("Username: ");
    const age = prompt("Your age: ");
    const email = prompt("Your Email: ");
    const password = prompt.hide("Password: ");

    const operationResult = userAddOperation(firstName,lastName,userName,age,email,password);
    if(operationResult.data){
        displayUI();
        console.log(`Your account creation successful. Your ID: ${operationResult.data.id}`);
    }else{
        displayUI();
        console.log("Account already exists!");
    }
}


//Dependennt on userAddOperation page