function findIndex(list, cb) {
    for(var i = 0; i < list.length; i++ ) {
        if (cb(list[i])) {
            return i;
        }
    }
    return -1;
}
function isValidOperation(op) {
    return op && op.description && parseFloat(op.amount) > 0 && typeof OpType[op.type] !== 'undefined';
}
function getWallet() {
    const wallet = localStorage.getItem('wallet');
    if (!wallet) {
        return {
            balance: 0,
            operantions: []
        }
    }
    return JSON.parse(wallet);
}

module.exports = {
    getWallet: getWallet,
    isValidOperation: isValidOperation,
    findIndex: findIndex
}
