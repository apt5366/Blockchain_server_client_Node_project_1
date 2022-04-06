// ./routes/listtransactions.js
// *Lists all transactions in the system, not currently on blocks.

// * Imports

const Transaction= require("../src/transaction");

function listtransactions(app){
 // list all transacitons

 app.get("/listtransactions", function (request, response) {
    
    let txStr="";

    for (let i=0;i<global.transactions.length; i++) {
        txStr += global.transactions[i].prettify();
    }

    // send the repsonse for creating a new transaction

    response.status(200).send(txStr);
 });
}

module.exports = listtransactions;