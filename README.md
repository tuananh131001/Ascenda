# Ascenda Loyalty Test

# Pre-requisites
- Git
- Postman
- PC/Mac/Laptop
- Node.js
- NPM
# Deployment
- Link: https://ascenda-internship-exercise.herokuapp.com
# Installation

## Windows
- Clone the repository
- "cd" into the repository
- Use 'Git Bash' (dont use powershell/cmd) to run the following commands
- Run `npm i` to install the dependencies
- Run `npm start` to start the server
- Use Postman to test the API
## Mac
- Clone the repository
- "cd" into the repository
- Run `npm i` to install the dependencies
- Run `npm start` to start the server
- Use Postman to test the API
# API
## Get offers nearby
GET localhost:3000/api/offer 
or
GET https://ascenda-internship-exercise.herokuapp.com/api/offer

Body:
```
{
    "api": "urlHere",
    "checkInDate": "dateHere"
}
```
example:
```
{
    "api": "https://61c3deadf1af4a0017d990e7.mockapi.io/offers/near_by?lat=1.313492&lon=103.860359&rad=20",
    "checkInDate": "2019-12-25"
}
```

## Unit Testing
- Run `npm test` to run the unit tests
### Unit Testing Result

 PASS  __test__/controllers/closestMerchant.test.js            
 PASS  __test__/controllers/filterDate.test.js      
 PASS  __test__/controllers/category.test.js    
 PASS  __test__/controllers/closestDifferentCate.test.js    
 PASS  __test__/controllers/offer.test.js              
Test Suites: 5 passed, 5 total              
Tests:       8 passed, 8 total        
Snapshots:   0 total        
Time:        3.129 s        
Ran all test suites.        
### Coverage Result
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |   96.19 |     92.3 |     100 |   96.19 |                   
 __test__/controllers |     100 |      100 |     100 |     100 |                   
  mockReponseCase.js  |     100 |      100 |     100 |     100 |                   
 controllers          |   93.57 |     92.3 |     100 |   93.57 |                   
  offerController.js  |   93.57 |     92.3 |     100 |   93.57 | 11-15,31-32       
 models               |     100 |      100 |     100 |     100 |                   
  Offer.js            |     100 |      100 |     100 |     100 |                   
 validations          |     100 |      100 |     100 |     100 | 
  offer.validation.js |     100 |      100 |     100 |     100 | 
----------------------|---------|----------|---------|---------|-------------------

Test Suites: 5 passed, 5 total      
Tests:       8 passed, 8 total  
Snapshots:   0 total    
Time:        3.329 s    
Ran all test suites.    

> express-validator is thoroughly tested , no need unit test for it 

# Author
- Name: Nguyen Tuan Anh