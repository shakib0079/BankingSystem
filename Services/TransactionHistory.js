import PromptSync from "prompt-sync";
import { displayUI } from "../Utilities/ScreenPlay.js";
import { userFIlter } from "../Utilities/process.js";
import transactionProcess from "../Utilities/transactionProcess.js";
const prompt = PromptSync({sigint:true});

export default function TransactionHistory(){
    displayUI();
    const id = Number(prompt("Enter an User ID: "));
    const operation = userFIlter(id);
    transactionProcess(operation.data);
}