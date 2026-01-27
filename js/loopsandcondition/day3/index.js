// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance = 1000;

let atmpt = 0;

// let withdrawal = +prompt("enter the amount");

// balance -= withdrawal;

// if (withdrawal > balance) {
//   console.log("insuficient balance");
// }

// atmpt++;

while (atmpt < 3) {
  let withdrawal = +prompt("enter the amount");
  if (withdrawal > balance) {
    console.log("insuficient balance");
    break;
  }
  balance -= withdrawal;
  atmpt++;
}

console.log(balance);
