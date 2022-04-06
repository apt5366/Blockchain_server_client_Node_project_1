// ./routes/validate.js
// The server validates the blockchain

function validate(app){
    // validate the server's instance of a blockchain

    app.get("/validate", function(request, response){
        //check if the blockchain is valid
        
        let isValid = global.blockchain.isChainValid();

        // formulate a response message
        let responseStr = "";

        if(isValid){
            responseStr= "The Blockchain is Valid!";
        }else {
            responseStr= "The Blockchain is invalid";
        }

        // sending the response for validatjing the blockchain
        response.status(200).send(responseStr);
    });
}

module.exports = validate;