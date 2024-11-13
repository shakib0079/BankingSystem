export function adminMenu(){
    console.clear();
    console.log(":: || Banking System || ::");
    console.log("--------------------------");
    console.log("ADMIN CONSOLE");
    console.log("--------------------------");
    console.log("1. Create Account");
    console.log("2. Delete Account");
    console.log("3. Show Database");
    console.log("4. User Information");
    console.log("5. User Information Update");
    console.log("6. User Transaction History");
    console.log("7. Transaction");
    console.log("8. Log Out");
}

export function userMenu(user){
    console.clear();
    console.log(":: || Banking System || ::");
    console.log("--------------------------");
    console.log(`Account: ${user.firstName} ${user.lastName}`);
    console.log(`User ID: ${user.id}`);
    console.log("--------------------------");
    console.log("1. My Information");
    console.log("2. Update Information");
    console.log("3. Transaction");
    console.log("4. Log Out");

}

export function transactinUI(user){
    console.log("--------------------------");
    console.log(`Account: ${user.firstName} ${user.lastName}`);
    console.log(`User ID: ${user.id}`);
    console.log("--------------------------");
    console.log("1. Deposite");
    console.log("2. Withdraw");
    console.log("3. Check Balance");
    console.log("4. Main Menu");
}


export function displayUI(){
    console.clear();
    console.log(":: || Banking System || ::");
    console.log("--------------------------");
    console.log("--------------------------");
    console.log();
}

export function displayDB(_user){
    console.log("--------------------------")
    console.log(`ID: ${_user.id}`);
    console.log(`Name: ${_user.firstName} ${_user.lastName}`);
    console.log(`Username: ${_user.userName}`);
    console.log(`Email: ${_user.email}`);
    console.log(`Age: ${_user.age}`);
    console.log(`Balance: ${_user.balance}`);
    console.log(`Role: ${_user.isAdmin ? 'Admin' : 'User'}`);
    console.log("--------------------------")
}



