# cs297_Blockchain_server_client_Node_project_1
Mock-up of a Blockchain Server-Client node using Javascript
Mock-up of a Blockchain Server-Client node using Javascript.

The endpoints generated are the same endpoints that are called by other popular Blockchains, so it's a great way to isolate and understand how a specific node works. We have created a mock blockchain (mockchain) using an expressJS application. Blocks can be mined, transactions can be generated, and they'll be printed to the user. To this end, a singular node is pivoted towards the user's view.

It means that the Mockchain will be viewable in the browser, easily. You'll be able to mine blocks of your own design, generate faux transactions, and view how the chain is structured individually.

We can track the difficulty that it takes to mine with our variable, which has a default parameter of 1. In order to make it non-trivial, we set the default amount of bits that need zeroed to 2 (see: the Array has an initial sizing of 1+1=2). Bitcoin actually uses a difficulty structure pretty much similar to this, but the difficulty actually changes dynamically based on the amount of time it took to mine several thousand blocks beforehand (specifically, 2016 blocks beforehand).

Every time we fail at getting a proper hash, we can increment our nonce, thus wildly changing the result. In effect, we are generating hashes randomly, and with blatant abandon!
