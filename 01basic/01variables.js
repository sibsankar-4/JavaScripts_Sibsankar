const accountId =177654    // Constant variable can not changed after define

let accountEmail = "abc@gmail.com"
var accountPassword ="sgsggsgsgsggs12"
accountCity = "Kolkata"
let accountState

// Check for constant variable
console.log(accountId)
// accountId = 17171777171717
// console.log(accountId)

// check for let keyword

accountEmail = "dggdgg@gmail.com"
accountPassword = "dhhdhdh@33333"
accountCity = "Delhi"

console.log(accountEmail)
console.log(accountPassword);
console.log(accountCity);

/*
    Prefer not to use var
    because of issue in block scope and functional scope    

*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
