import PromptSync from "prompt-sync";
import { displayUI } from "./ScreenPlay.js";
import administartionTask from "../UserType/admin.js";
const prompt = PromptSync({sigint:true});

export default function depositeOps(_user, isAdmin){
    displayUI();
    const amount = Number(prompt("Amount: "))
    if(amount <= 0){
        console.log("Enter a valid amount!")
    }else{
        if(isAdmin){
            depositFunc(_user, amount)
            administartionTask();
        }
        depositFunc(_user, amount)
    }
   
}

function depositFunc(user, amount){
    const transactions = user.transactions;
    const deposit = {
        type: 'deposite',
        amount,
        date: new Date()
    }
    transactions.push(deposit);
}