const account = {
  name : 'Wise Crepin',
  incomes : [],
  expences : [],
  addIncome : function (income,value){
  this.incomes.push({
    description : income,
    amount : value
  });
  },
  addExpense : function (exp,value){
     this.expences.push({description : exp,
      amount: value
     });
  },
  getAccountSummary : function (){
    let incomesum =0;
    let expencesum =0; 
       this.expences.forEach((expence,index)=>{
        expencesum =expencesum + expence.amount;
})
   this.incomes.forEach((income)=>{
    incomesum = incomesum + income.amount;

   })
   let accountBalance = incomesum - expencesum;
    return `${this.name} has $${expencesum} in expences and $${incomesum} in income so the account balance is $${accountBalance}`;
  }
}

account.addExpense('rent',950);
account.addExpense('coffee',2);
account.addIncome('rent',950);
account.addIncome('coffee',2);
console.log(account.getAccountSummary());
