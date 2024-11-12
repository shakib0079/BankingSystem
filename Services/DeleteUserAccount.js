import PromptSync from "prompt-sync";
import userDeleteOperation from "../Utilities/userDeleteOperation.js";
import { displayUI } from "../Utilities/ScreenPlay.js";

const prompt = PromptSync({sigint:true});

export default function DeleteUserAccount(){
    displayUI();

    const userID = Number(prompt('Enter ID that you want to delete:  '));

    const operationResult = userDeleteOperation(userID);

    console.log(operationResult.message);
}