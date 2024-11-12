import { UserDatabase } from "../Database/UserDatabase.js";
import { displayDB, displayUI } from "../Utilities/ScreenPlay.js";


export default function ShowDatabase(){
    displayUI();
    for(const user of UserDatabase){
        displayDB(user);
    }
}