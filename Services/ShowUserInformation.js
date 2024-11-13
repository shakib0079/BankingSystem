import PromptSync from "prompt-sync";
import { displayDB, displayUI } from "../Utilities/ScreenPlay.js";
import { userFIlter } from "../Utilities/process.js";
const prompt = PromptSync({sigint:true});

export default function ShowUserInformation(){
    displayUI();
    const id = Number(prompt("Enter an User ID: "));
    const operation = userFIlter(id);
    if(operation.data){
        displayDB(operation.data);
    }
    console.log(operation.message);
}