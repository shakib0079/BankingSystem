import PromptSync from "prompt-sync";
import { displayUI } from "./ScreenPlay.js";
import administartionTask from "../UserType/admin.js";
const prompt = PromptSync({sigint:true});

export default function withdrawOps(user){
    displayUI();
    const amount = Number(prompt("Amount: "))
    if(amount < user.balance && amount > 0){
        withdrawFunc(user,amount)
    }else if(amount > user.balance){
        console.log("You do not have sufficient balance")
    }else{
        console.log("Enter a valid amount");
    }
   
}

function withdrawFunc(user, amount){
    const transactions = user.transactions;
    const withdrawal = {
        type: 'withdrawal',
        amount,
        date: new Date()
    }
    transactions.push(withdrawal);
}