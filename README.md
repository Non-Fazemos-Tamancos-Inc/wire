
# Project Milestone 1

The most common use of mockups in software development is to create user interfaces that show the end-user what the software will look like without having to build the software or the underlying functionality. UI mockups can range from very simple hand-drawn screen layouts, through realistic bitmaps, to semi-functional user interfaces developed in a software development tool.

## Members:
* Adalton de Sena Almeida Filho - 12542435
* Daniel Henrique Lelis de Almeida - 12543822
* Rafael Zimmer - 12542612

Foremost plan and layout for the final project frontend, backend and database

1.  Functional and Non-Functional Requirements:
   
| Functionality | Description |
|--|--|
| User Types | The system must have 2 types of users: Clients and Administrators |
| Administrators | Responsible for managing users and products objects. The application has a default administrator username and password. |
| Customers |Customers are clients who access the system to buy/trade NFTs.|
| User Attributes | Includes, at least: name, id, address, phone, email. |
| Client Attributes | Incrementing on the default user attrbiutes, must also have: a wallet record relative to the user, document number |
| Product Attributes |Include, at least: name, id, image, description, price, quantity (in stock), quantity sold. Individual NFTs also must have: codified token, position on its origin blockchain.|
| Selling/Buying Products | Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a digital wallet number (any valid number is accepted by the system). The quantity of products sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers. |
| Trading Products: |  |
| Store Management: |  Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity. |
| Your functionality:  | Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down. |
| Non-functional requirements | Provide accessibility requirements and provide good usability. Be responsive, meaning that it should complete assigned tasks within a reasonable time. |
    
2.  Project Description and Implementation: Describe how your project implements the functionality in the requirements. Diagrams can help a lot here.

Do not forget to include in the Project Description:

-   The functionalities you are going to implement.
    
-   A navigation diagram for your application linked to the screen mockups. This link can be just the name of the mockup (i.e. Mockup1, Mockup2, etc) or an HTML link.
    
-   The information you are going to save in the server (no need to decide how that information will be saved).
    
3.  Comments About the Code: Any comment you may want to add to help understand your code. This is good programming practice.
    
4.  Test Plan: Text describing the tests that will be performed. If an automatic test tool/framework is used [Unittest library for Python](https://docs.python.org/3/library/unittest.html)
    
5.  Test Results: Text describing the test results. If an automatic test tool/framework is used, its output can be used.
    
6.  Build Procedures: A step-by-step guide to run your code. You should start telling how to install whatever software you need, then how to download/build your program, and finally how to set up the environment to run it. Imagine that someone installing will just follow these commands (nothing more).
    
7.  Problems: List any major problems you had.
    
8.  Comments: Any comments you wish to add.
