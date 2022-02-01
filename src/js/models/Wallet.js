function getWallet() {
    var wallet = localStorage.getItem('wallet');
    if (!wallet) {
        return {
            balance: 0,
            operantions: []
        }
    }
    return JSON.parse(wallet);
}

function Wallet() {
    var balance = 0;
    var operations = [];
    function init() {
        var Wallet = getWallet();
        balance = wallet.balance;
        operantions = wallet.operations; 
    }
    this.addOperation = function() {

    }
    this.removeOperation = function() {
    
    }
    this.findOperation = function() {
    
    }
    this.getBalance= function() {
        return balance;
    }
    this.getOperations = function() {
        return operations;
    }
    init();
}