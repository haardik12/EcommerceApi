# EcommerceApi
ecommerce api coding ninjas backend skilltest three

## Installation 
To install EcommerceApi, please follow these steps:

swtich to the mater branch

Clone this repository using the following command:
```
$ git clone https://github.com/haardik12/EcommerceApi.git
```
Install the required dependencies using the following command:
```
$ npm install 
```
Start the application using the following command:
```
$ npm start 
```
Open POSTMAN on this port, and follow the command in the features section:
```
$ http://localhost:8000 
```

## Steps to manipulate and make changes with API
* To create an item -> POST:  http://localhost:8000/items/create
* To view all items -> GET:  http://localhost:8000/items
* To update a items quantity -> POST:  http://localhost:8000/items/id/quantify?quantity=value
   ``` (id represents the id of the item, value is the desired quantity)```
* To delete an item -> DELETE:  http://localhost:8000//items/:id

