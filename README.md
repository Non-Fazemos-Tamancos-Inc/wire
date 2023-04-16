
# Project Milestone 1

## Members:
* Adalton de Sena Almeida Filho - 12542435
* Daniel Henrique Lelis de Almeida - 12543822
* Rafael Zimmer - 12542612

## Foremost plan and layout for the final project frontend, backend and database
The most common use of mockups in software development is to create user interfaces that show the end-user what the software will look like without having to build the software or the underlying functionality. UI mockups can range from very simple hand-drawn screen layouts, through realistic bitmaps, to semi-functional user interfaces developed in a software development tool.

###  Functional and Non-Functional Requirements:
   
| Functionality | Description |
|--|--|
| User Types | The system must have 2 types of users: Clients and Administrators |
| Administrators | Responsible for managing users and products objects. The application has a default administrator username and password. |
| Customers |Customers are clients who access the system to buy/trade NFTs.|
| User Attributes | Includes, at least: name, id, address, phone, email. |
| Client Attributes | Incrementing on the default user attrbiutes, must also have: a wallet record relative to the user, document number |
| Product Attributes |Include, at least: name, id, image, description, price, current owner, total times traded. Individual NFTs also must have: codified token, position on its origin blockchain.|
| Selling/Buying Products | NFTs are to be selected, and are included in a cart. The purchase is enacted by using a digital wallet number (any valid number is accepted by the system). The transaction details are saved, including previous owner, new owner, total price and new position on the Blockchain. Carts are emptied only on payment or manually by customers. To sell a product, the owner only has to inform his wallet code and desired NFT identifier, as well as confirm the desire to offer the product on the marketplace. |
| Trading Products: | Trades can be made directly by two customers, with no extra cost included. When using the platform, two users can start a trade agreement, inserting a list of offered NFTs, and when both users confirm their offer, the NFTs ownership is then exchanged between both at no cost. |
| Store Management: |  Administrators can create/update/read/delete (crud) users that appear to perform malicious operations, as well as remove any NFTs that are deemed invalid within the blockchain. |
| Registering Trades and Purchases:  | The platform will offer the functionality of performing a complete operation, that is, not only transfering currencies, but also altering the (mockup) blockchain to reflect the changes of ownership. The final blockchain status can then be visualized within the platform by accessing the blockchain tab. |
| Non-functional requirements | Provide accessibility requirements and provide good usability. Be responsive, meaning that it should complete assigned tasks within a reasonable time. |
    
### Project Description and Implementation: 
The platform will follow a SPA layout (Single Page Application), allowing a user to navigate between his Profile tab, the Store Tab, as well as his Digital Wallet tab. The SPA will be connected in the future to a Backend Application, hosted on a server running a Node.js container. The Node.js application will eventually connect to and manage a NoSQL database, specifically MongoDB, in which the user's information, as well as the store's records (NFTs, transactions, user wallets, available blockchains, and all respective attributes) will be stored. The mockup platform wire will be developed using a simple HTML + CSS project, and eventually will be migrated to a React.js project for the SPA view.

For the first Demo, the website will feature a top-level header for easy navigation between separate views. All users will have a Profile tab, which will be initially a simple login page. The store tab will feature available NFTs to be bought, as well as allow the user to view the different blockchains graphs hosting the different NFTs. The Digital Wallet tab will allow the user to register a payment method (credit card or other), as well as  sell any owned NFTs and view his or hers current balance. Through the Profile tab, the user may message other users to start a trade agreement between the two parties.
The admin tabs will have special options to remove NFTs from the store, as well as manage customer trades and customer profiles, but not affect the blockchain directly, which once changed will keep all changes.
    
### Comments About the Code: 
Any comment you may want to add to help understand your code. This is good programming practice.
    
### Test Plan: 
The tests will be performed using an automatic framework, specifically the [Unittest library for Python](https://docs.python.org/3/library/unittest.html). All tests can be found within the `tests/` directory under the relative 
    
### Test Results: Text describing the test results. If an automatic test tool/framework is used, its output can be used.
    
### Build Procedures: 
A step-by-step guide to run your code. You should start telling how to install whatever software you need, then how to download/build your program, and finally how to set up the environment to run it. Imagine that someone installing will just follow these commands (nothing more).
    
### Problems: List any major problems you had.
    
###  Comments: Any comments you wish to add.
