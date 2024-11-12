export function mainMenu(){
    console.clear();
    console.log(":: || Banking System || ::");
    console.log();
    console.log("1. Create Account");
    console.log("2. Delete Account");
    console.log("3. Show Database");
    console.log("4. User Information");
    console.log("5. User Information Update");
    console.log("6. User Transaction History");
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
    console.log(`Age: ${_user.email}`);
    console.log(`Balance: ${_user.balance}`);
    console.log(`Role: ${_user.isAdmin ? 'Admin' : 'User'}`);
    console.log("--------------------------")
}
