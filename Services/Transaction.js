import PromptSync from "prompt-sync";
import { displayUI, transactinUI } from "../Utilities/ScreenPlay.js";
import { userFIlter } from "../Utilities/process.js";
import administartionTask from "../UserType/admin.js";
import userTask from "../UserType/user.js";
import depositeOps from "../Utilities/depositeOps.js";
import withdrawOps from "../Utilities/withdrawOps.js";

const prompt = PromptSync({sigint:true});

export default function Transaction(user){
    let role = true;
    let id;
    let ops;
    do{
        displayUI();
        if(user){
            role = false;
            transactinUI(user);
        }else{
            id = Number(prompt("Enter an User ID: "));
            ops = userFIlter(id)
            transactinUI(ops.data);
        }
        
        const choice = Number(prompt("Enter a menu: "))

        switch (choice) {
            case 1:
                role ? depositeOps(ops.data, true) : depositeOps(user, false);
                // depositeOps();
                break;
            case 2:
                role ? withdrawOps(ops.data) : withdrawOps(user);
                // withdrawOps();
                break;
            case 3:
                role ? checkBalanceOps(ops.data) : checkBalanceOps(user);
                // checkBalanceOps();
                break;
            case 4:
                role ? administartionTask() : userTask(user);
                break;
            default:
                break;
        }

        prompt("Please enter any key to continue...");

    }while(true)
}