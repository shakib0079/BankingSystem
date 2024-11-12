import PromptSync from "prompt-sync";
import { mainMenu } from "../Utilities/ScreenPlay.js";
import CreateUserAccount from "../Services/CreateUserAccount.js";
import DeleteUserAccount from "../Services/DeleteUserAccount.js";
import ShowDatabase from "../Services/ShowDatabase.js";
import ShowUserInformation from "../Services/ShowUserInformation.js";
import UserInfoUpdate from "../Services/UserInfoUpdate.js";

const prompt = PromptSync({sigint:true});

do{
    
    mainMenu();
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
        default:
            break;
    }


    prompt("Please enter any key to continue...");

}while(true);