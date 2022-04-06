// ./src/blockchain.js

// * Contains the class definition for a blockchain.


//*Imports

const Block =require("./block"); // Our class definition for a block

class Blockchain{
    constructor(){
        //chain array constains all blockms in our copy of the blockchain
        this.chain = [new Block(Array(65).join("0"))];// Create genesis block
    }

    //retruns the last block in the chain
    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }

    getChainLength() {
        return this.chain.length;
    }

    //adding a new block to the chain
    addBlock(){

        // Mining a new block with previous block's hash
        let newBlock = new Block(this.getLastBlock().hash, global.transactions);

        // adding new blpck to the chain, and make it immutable
        this.chain.push(Object.freeze(newBlock));

    }

    
 // Validates the chain

  isChainValid(blockchain = this) {
        // We iterate over the chain, skipping the genesis block (i=1)
      for(let i=1; i<blockchain.chain.length; i++) {

        const currentBlock = blockchain.chain[i];
        const prevBlock = blockchain.chain[i - 1];
  

       //Validate the current block's hash from the previous

       // Check the hash, which was mined || Check that the current block's prevHash matches
       if( currentBlock.hash !== currentBlock.getHash()||prevBlock.hash !== currentBlock.prevHash){
          return false;
        }
        // Check the hash validity
        let checkString = Array(global.difficulty+1).join("0");
        if (!currentBlock.hash.startsWith(checkString)) {
            return false;
        }
      }
     return true;
   }

  // Update the chain with a new blockchain
  replaceChain(newChain){
    if (newChain.length<=this.chain.length) 
        return;

    if (!this.isChainValid(newChain)) 
        return;
    
    // The new chain is valid, and longer, so qwe replace ours
    this.chain = newChain;
  }

  prettify(){

    let chainStr="";

    for(let i=0;i<this.chain.length; i++){
        chainStr += this.chain[i].prettify();
        chainStr += "<br><hr>";
    }

    return chainStr;
  }

}

module.exports = Blockchain;