import { displayUI } from "./ScreenPlay.js";

export default function transactionProcess(_user){
    displayUI();
    console.log(`Wallate Holder: ${_user.firstName} ${_user.lastName}`);
    console.log("--------------------------");
    console.log(`Available Balance: ${_user.balance}`);
    console.log(`Total Transaction: ${_user.transactions.length}`);
    let transact = _user.transactions;
    if(transact){
        for(const record of transact){
            console.log("--------------------------");
            console.log(`Transaction Type: ${record.type.toUpperCase()}`);
            console.log(`Amount: ${record.amount}`);
            console.log(`Date: ${record.date}`);
            console.log("--------------------------");
        }
    }else{
        console.log("No transaction history found!")
    }
}

//{ type: "deposit", amount: 100, date: "2024-01-02T09:00:00Z" }