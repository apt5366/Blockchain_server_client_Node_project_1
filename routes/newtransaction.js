// ./routes/newtransaction.js

// Creates a new mock transactiom ad adds it to the system

// * Imports

const Transaction = require("../src/transaction");

function newtransaction(app){
    //create a new transaction
    app.get("/newtransaction", function(request,response){

        // create a new transaction object
        let tx= new Transaction();
        //add the transaction to the gloabl transaction array
        global.transactions.push(tx);

        //send response for creating a new transaction
         
        //http status code 200: OK
        // respponse message
        response.status(200).send(tx.prettify());
    });
}

module.exports = newtransaction;