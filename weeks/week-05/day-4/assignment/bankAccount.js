
const bankAccount = {
    owner: {
        name: "Ahad",
        accountType: "Savings"
    },

    balance: 10000,

    transactions: [],

    // Adds money to the account.
    deposit(amount) {
        this.balance += amount;
        this.transactions.push({
            type: "Deposit",
            amount: amount,
            balance: this.balance
        });

        return this.balance;
    },

    // will remove money if exists

     withdraw(amount) {
        if (amount > this.balance) {
            return "Withdrawal rejected: insufficient balance";
        }

        this.balance -= amount;
        this.transactions.push({
            type: "Withdrawal",
            amount: amount,
            balance: this.balance
        });

        return this.balance;
    },

   // return a copy of transactions history 
    
   getStatement() {
        return [...this.transactions];
    }
};

// Dot notation
console.log(bankAccount.balance);

// Bracket notation
console.log(bankAccount["owner"]);

// Bracket notation is required when the property name
// is stored inside a variable or contains special characters.
const property = "balance";
console.log(bankAccount[property]);


// Object destructuring
const { owner, balance } = bankAccount;
console.log(owner.name, balance);


// Object.keys
console.log(Object.keys(bankAccount));

// Object.values
console.log(Object.values(bankAccount));

// Object.entries
console.log(Object.entries(bankAccount));


// Spread copies/updates an object without changing the original.
const updatedOwner = {
    ...bankAccount.owner,
    accountType: "Current"
};

console.log(updatedOwner);


// Testing methods
console.log(bankAccount.deposit(2000));
console.log(bankAccount.withdraw(1500));
console.log(bankAccount.withdraw(50000));

console.log(bankAccount.getStatement());


// `this` refers to the bankAccount object here.
console.log(bankAccount.balance);