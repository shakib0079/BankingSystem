import { displayDB, displayUI } from "../Utilities/ScreenPlay.js";
import userInfoUpdateOperation from "../Utilities/userInfoUpdateOperation.js";

export default function UpdateOwnInformation(user){
    displayUI();
    const updateOperation = userInfoUpdateOperation(user);
    displayUI();
    console.log(updateOperation.message);
    console.log("--------------------------")
    displayDB(updateOperation.data);
}