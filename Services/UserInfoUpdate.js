import PromptSync from "prompt-sync";
import { displayDB, displayUI } from "../Utilities/ScreenPlay.js";
import { userFIlter } from "../Utilities/process.js";
import userInfoUpdateOperation from "../Utilities/userInfoUpdateOperation.js";

const prompt = PromptSync({sigint:true});

export default function UserInfoUpdate(){
    displayUI();
    const id = Number(prompt("Enter an User ID: "));
    const operation = userFIlter(id);
    const updateOperation = userInfoUpdateOperation(operation.data);
    displayUI();
    console.log(updateOperation.message);
    console.log("--------------------------")
    displayDB(updateOperation.data);
}