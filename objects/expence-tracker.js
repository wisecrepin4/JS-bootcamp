let myaccount = {
  name: "Crepin",
  income: 10000,
  expence: 200
}

let addIncome = function ( account ,amount){
  account.income = account.income + amount;
}
let addExpence = function (account ,amount ){
  account.expence = account.expence + amount;
}
let getAccountSummary = function (account){
  console.log (`Account for ${account.name} has an Income of ${account.income} and expences of $${account.expence} per month`
)}
let resetAccount = function ( account){
  account.income = 0;
  account.expence = 0;
}
addIncome( myaccount,2000);
addExpence (myaccount, 300);
addExpence( myaccount, 100);
getAccountSummary( myaccount);
resetAccount( myaccount);
getAccountSummary( myaccount);