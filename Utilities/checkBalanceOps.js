import PromptSync from "prompt-sync";
import { displayDB, displayUI, transactinUI } from "./ScreenPlay.js";
import administartionTask from "../UserType/admin.js";

const prompt = PromptSync({sigint:true});

export default function checkBalanceOps(user, isAdmin){
    displayUI();
    const transactions = user.transactions;
    const ops = balanceCalculation(transactions);
    user.balance = ops[0] - ops[1];
    displayDB(user);
    const keyPress = prompt("Please enter any key to continue...");
    if(isAdmin && keyPress === ''){
        administartionTask();
    }else if(!isAdmin && keyPress === ''){
        displayUI();
        transactinUI(user);
    }
}

function balanceCalculation(transactions){
    let totalDeposite = 0;
    let totalWithdran = 0;
    for(const transaction of transactions){
        if(transaction.type === 'deposit'){
            totalDeposite = totalDeposite + transaction.amount;
        }else if(transaction.type === 'withdrawal'){
            totalWithdran = totalWithdran + transaction.amount;
        }
        
    }

    return [totalDeposite, totalWithdran];
}