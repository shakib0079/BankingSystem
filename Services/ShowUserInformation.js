import PromptSync from "prompt-sync";
import { displayUI } from "../Utilities/ScreenPlay.js";
import { userFIlter } from "../Utilities/process.js";
const prompt = PromptSync({sigint:true});

export default function ShowUserInformation(){
    displayUI();
    const id = Number(prompt("Enter an User ID: "));
    const operation = userFIlter(id);
    console.log(operation.message);
}