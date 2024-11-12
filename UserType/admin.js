import PromptSync from "prompt-sync";
import { adminMenu } from "../Utilities/ScreenPlay.js";
import CreateUserAccount from "../Services/CreateUserAccount.js";
import DeleteUserAccount from "../Services/DeleteUserAccount.js";
import ShowDatabase from "../Services/ShowDatabase.js";
import ShowUserInformation from "../Services/ShowUserInformation.js";
import UserInfoUpdate from "../Services/UserInfoUpdate.js";
import TransactionHistory from "../Services/TransactionHistory.js";
import signInSignOutPage from "../app.js";

const prompt = PromptSync({sigint:true});

export default function administartionTask(){
    do{
    
        adminMenu();
        const choice  = Number(prompt("Select a menu: "));
    
        switch (choice) {
            case 1:
                CreateUserAccount();
                break;
            case 2:
                DeleteUserAccount();
                break;
            case 3:
                ShowDatabase();
                break;
            case 4:
                ShowUserInformation();
                break;
            case 5:
                UserInfoUpdate();
                break;
            case 6:
                TransactionHistory();
                break;
            case 7:
                signInSignOutPage();
                break;
            default:
                break;
        }
    
    
        prompt("Please enter any key to continue...");
    
    }while(true);

}
