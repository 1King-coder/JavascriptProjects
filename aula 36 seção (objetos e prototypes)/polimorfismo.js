function Account( name, agency, account, balance) {
    this.name = name;
    this.agency = agency;
    this.account = account;
    this.balance = balance;
};

Account.prototype.yourAccount = function() {
    console.log(`Name: ${this.name} \n` +
                `Agency: ${this.agency} \n` + 
                `Account: ${this.account} \n` + 
                `Your balance: $${this.balance.toFixed(2)} \n`);
};

Account.prototype.withdraw = function(value) {
    if (this.balance <= value) {
        console.log(`Not enough balance: ${this.balance.toFixed(2)}`);
        return;
    };

    console.log(`${this.name} cashed out $${value.toFixed(2)}`);

    this.balance -= value;

    this.yourAccount();
};

Account.prototype.deposit = function(value) {
    if (value < 0) {
        console.log('The deposited value can not be negative.');
        return;
    }

    console.log(`${this.name} added $${value.toFixed(2)}`);

    this.balance += value;

    this.yourAccount();
}

function CA (name, agency, account, balance, limit) {
    Account.call(this, name, agency, account, balance);
    this.limit = limit;
};
CA.prototype = Object.create(Account.prototype);
CA.prototype.constructor = CA;

CA.prototype.withdraw = function(value) {
    if (this.balance + this.limit < value) {
        console.log(`Not enough balance: ${this.balance.toFixed(2)}`);
        return;
    };

    console.log(`${this.name} cashed out $${value.toFixed(2)}`);

    this.balance -= value;

    this.yourAccount();
};

function SA(name, agency, account, balance) {
    Account.call(this, name, agency, account, balance);
};
SA.prototype = Object.create(Account.prototype);
SA.prototype.constructor = SA;


const ca = new CA('Vitor', 1010, 1101, 1000, 150);

const sa = new SA('Jobson', 1011, 1110, 1001);


console.log('CA:')
ca.yourAccount()

console.log('SA:')
sa.yourAccount()



ca.deposit(10)
ca.withdraw(1110);

sa.deposit(20);
sa.withdraw(1022);

sa.yourAccount()

ca.yourAccount()



