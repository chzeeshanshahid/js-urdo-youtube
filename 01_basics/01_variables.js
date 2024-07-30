const accountId = 112244
let accountEmail = "Zeeshan@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountId = 3 // not allowed

accountEmail = "Zulkarnain@gmail.com"
accountPassword = "54321"
accountCity = "Lahore"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
