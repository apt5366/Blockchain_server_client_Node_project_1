// ./routes/chain.js
// The server prints out the entire blockchain

function chain(app){
    //print out the entire blockchain

    app.get("/chain",function(request,response){
        //formulating a response message
        let chainStr= global.blockchain.prettify();

        // sending the response for printing out the blockchain
        response.status(200).send(chainStr);

    });
}

module.exports = chain;