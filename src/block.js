// ./src/block.js

// * Contains the class definition for a single block.

//* Imports

const crypto =require("crypto"); // used for encryption algorithms

// Define a SHA256 hash function from our crypto library

function SHA256(message){
    return crypto
        .createHash("sha256") // set the hasing algorithm to SHA25
        .update(message) 
        .digest("hex"); // return hash as hex
}

class Block {

    constructor(prevHash="", transactions=[]){
        this.timestamp = Date.now(); // Set the timestamp to now
        this.transactions = transactions; // Transaction list
        this.hash = this.getHash(); // Current block's hash
        this.prevHash = prevHash; // Previous block's hash
        this.nonce = 0; // Some random value for mining purposes

        // Mine the block
        this.mine();
    }

    //returns the hash of the current block
    getHash() {
        //Combine all transactions into strings
        let txStr="";

         for (let i = 0; i < this.transactions.length; i++) {
            txStr += JSON.stringify(this.transactions[i]);
        }

        return SHA256(
            this.prevHash + // the previous hash,
                this.timestamp + // the timestamp of the block,     
                txStr + // and all transactions,
                this.nonce // and a random nonce
        );
    }

    // Mine a new block (generate a hash that works)

    mine() {
         //  The length of this string is set through difficulty (default: 1)
         let checkString = Array(global.difficulty + 1).join("0");
        
        let tries=0;

        while (!this.hash.startsWith(checkString)){
             this.nonce++;
             this.hash=this.getHash();
             tries++;
        }
        //check how many tries we actually took
        console.log(`Block mined with ${tries} attempts. Hash: ${this.hash}`);
    }


    prettify() {
        let blockStr = `<div><b>Block</b> #${this.hash}</div>`;
        blockStr += `<div><b>Timestamp:</b> ${this.timestamp}</div>`;
        blockStr += `<div><b>Previous Hash:</b> ${this.prevHash}</div>`;
        blockStr += "<div><b>Transactions:</b></div><div>";
    
        // Iterate through all transactions
        for (let i = 0; i < this.transactions.length; i++) {
            blockStr += "    " + this.transactions[i].prettify();
        }
    
        blockStr += "</div>";
        return blockStr;
    }
    
}
module.exports = Block;