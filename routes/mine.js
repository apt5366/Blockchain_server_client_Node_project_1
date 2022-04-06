// ./routes/mine.js
// The server mines a new block, and adds it to its personal chain.

function mine(app){
    app.get("/mine",(request,response)=>{
        // Adding the block to our chain, which calls mine
        global.blockchain.addBlock();

        //clear the transactions
        global.transactions = [];

        // sending a success response
        let msg = `Block added: ${global.blockchain.getLastBlock().prettify()}`;
        response.status(200).send(msg);

    });
}

module.exports = mine;
