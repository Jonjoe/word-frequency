## Contents
```
1.0 - Project Overview
	1.1 - Terms
	1.2 - Objectives
	1.3 - Outcome
	1.4 - Example
2.0 - Project Setup
	2.1 - Install
	2.2 - DataSets
	2.3 - Testing
3.0 - Modules
	3.1 - boot
	3.2 - functions
	3.3 - models
	3.4 - store
	3.5 - streams
	3.6 - writer
```
	
## 1.0 - Project Overview
### 1.1 - Terms
```
Query = Single set of words that are the requirment for a record to be processed.
```
```
Record = Set of words to be processed if they contain the query.
```
### 1.2 - Objective
For each word that is not in the query, how many times does the word appear in all records that the entire query is present in?

### 1.3 - Outcome
Output a dictionary of words to counts, omitting words with counts of zero. Given a list of records and a list of queries, determine the output for each query with respect to the entire list of records.

### 1.4 - Example
`records.txt`

```
red,yellow,green,black
red,green,blue,black
yellow,green,blue
yellow,blue,black
```
`queries.txt`
```
blue,yellow
black,green
```
`expected output`
```
{"black": 1, "green": 1}
{"blue": 1, "red": 2, "yellow": 1}
```

## 2.0 Setup
### 2.1 Install
This is a standard nodejs 7.x application using npm to hande dependencies. Make sure you have an up to date version of node and npm installed. Once you have this installed you can run `$ npm install` from the project root to have all dependancies set up.

### 2.2 DataSets
The datasets are too big to track via git. You will need to download them here: **[Google Drive Link to Original DataSet](https://drive.google.com/file/d/0B8ElIpBMAINRY3c0SnEzT3Npd0k/view)**. Once they are downloaded and unarchived you will have recieved two files:
- queries.txt
- records.txt

Please move these files into `./data`. The app will do the rest.

### 2.3 Testing
The application hosts a suite of tests and linters on the core parts of the application and a single end to end test to ensure output is to specification. You can run these tests from the terminal via `$ npm run test`.

### 2.4 Running the application
Once you have performed all of the above you will be able to start the application. `$ node .` from project root is what you need here. You should see a progressive output as each query is processed similar to this:
```
1 of 15 completed.
2 of 15 completed.
3 of 15 completed.
4 of 15 completed.
5 of 15 completed.
```
Once complete you will be given a path to the output.txt where you will find your results stored.

## 3.0 - Modules
The application is broken down into smaller modules seperated by concern. This makes it easier to test and easier to read. Below is a description of each one.

### 3.1 - boot
This module is concerned with process order. Streams are ASync so boot needs to make sure the data is flowing in the right direction.

### 3.2 - functions
This is a collection of pure functions that are used in the application. 

### 3.3 - models
This is a collection of object constructors that are used to ensure that any specific object is constructed by a specific process. This ensures better continuity and easier maintainence. 

### 3.4 - store
This describes and constructs a global level store and its methods that the app can tap into.

### 3.5 - streams
The data is too big to be read in synchronously. This module constructs streams that process the test files into arrays and dumps them into the store.

### 3.6 - writer
The writer will read the processed data living in the store and format/write them onto a txt ascii file.

### 3.7 - process
The priocess module is resposible for all the logic of the dictionary and its counts. 

## 4.0 Notes
- On hindsight I would have liked to have used typescript for this. Its strong typing, use of es6, interfaces and testing make it ideal for this kind of application.

- I would have liked the store to have been inside its own instance instead of sitting in global. I generally hate using global but I didnt have enough time to impliment. 

- Reactive programming (RXJS) would have been great here due to use of streams. I would have liked to have processed the data during the initial stream into global.store. This would speed things up drastically. Instead the files are streamed into arrays and then looped through. I didnt have enough time to impliment.

- RAMDA is a functional programming library for javascript. Its implimented heavily throughout the application is its generally alot facter than native alternatives. 
