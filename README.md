# BitOpsJS
## JavaScript class to perform basic bit-based math and bit-wise operations

** Test of All Repo Push **

### Files:
- src/BitOperations.js - ES6 Class containing bit logic and arithmetic operations
- index.html - Main web page that provides UI/UX to BitOperations functions
- test/BitLogic.test.js - Jest Tests run against BitOperations to exercise Logic Function
- test/BitOperations.test.js - Jest Tests run against BitOperations to exercise Arithmetic Function

### Folders:
- src - javascript source files
- test - Jest Test files
- node_modules - container for node packages, like Jest
- doc - JSDoc Folders

### BitOperations Class

Class Constructor:
- BitOperations(undef) - Creates BitOperations object. *undef* is optional param used to define custom **undefined** value. Default is *"undef"* if no value was supplied

Class will include basic *bit-math* functions:
- ADD 2 bits 
- ADD 2 bit strings (2's complete)

Class will include basic *bit-wise* functions:
- and() - Performs bit-wise AND on 2 bit strings. Returns result or **undefined** if any inputs are not bit strings
- or() - Performs bit-wise OR on 2 bit strings. Returns result or **undefined** if any inputs are not bit strings
- not() - Inverts supplied bit string

Class will also include helper operation:
- signExtend() - Sign extends bitString with supplied *pad* to supplied *length*
- isBitString() - Test that supplied string ai a bit pattern
- addBits() - Takes in *2 bits* and a *carry in*, outputs *sum* and *carry out*
- addBitStrings() - Takes in *2 bit strings*, outputs *sum* and *carry out*. Handles *sign extension* as needed for correct 2's complement function
- getUndef() - gets the **undefined** representation that was passed into the constructor. This needed for unit testing, but may also be helpful in user code

## Testing
### Unit testing with Jest
Created BitOperations.test.js and BitLogic.test.js to exercise the BitOperations.js class

## UI
Converted to [Vue Framwork](https://vuejs.org/) 2.0. This simplified the HTML and JS considerable since no JQuery code is needed

Using [Bootstrap](https://getbootstrap.com/) for style and responsiveness

## Dev Notes
run **npm install** to get all node dev and runtime packages. See *package.json* for details

run **npm run test** to execute Jest Tests in 'watch" mode

run **npm run doc** to rebuild JSDoc

## Dev Log
20181221 - Finished converting to Vue framework. Starting on converting results to SVG elements. Added and tested convert() to also produce ASCII results for decimals between 32 and 125. Not sure how useful this really is.

With conversion to Vue, "WebBitOps.js" is no longer needed. all that getElementByID is gone!!!

I should be able to able to condense updateBA1() and updateBA2() into a single function. Likewise with updateBL1() & updateBL2()

20181212 - Working on conversion to Vue. Implemented Bit Logic UI/JS in Vue. Still need to do the Bit Arithmetic. 

Updated BitOperations.js constructor to take "undef" param. The purpose is to allow user (and test code) to define a desired "undefined" conversion or result. Updated test files to set and use new "undef" param