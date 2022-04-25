/***
 * 
 * --------------------------------------------
 *  server
 * --------------------------------------------
 * 1.mkdir project_Name
 * 2.npm init
 * 3.npm i express cors mongodb dotenv
 * 4.Create a .env file in the root(package.json) of your server project
 * 5.const express = require('express');
 * 6.const cors = require('cors');
 * 7.require('dotenv').config()
 * 8.const port = process.env.PORT || 5000
 * 9.const app = express();
 * 10.middlewire app.use(cors()) and app.use(express.json);
 * 11.creat api in root to check in the project working perfectly or not
 * 12.for working the project add start and start-dev to package.json
 * 
 * --------------------------------------------
 *  Database(For store data persistently)
 * --------------------------------------------
 * 1.sign in to mongodb atlas
 * 2.cluster can be created or use same cluster but new database
 * 3.create database menually or in mongo db
 * 4.paste data to database
 * 5.goto node mongodb crud website ---> usage example
 * 6.goto mongodb ---> database ---> cluster ---> connect --->copy code---> Paste in server index.js
 * 7.create new user --->copy pass and user name ---> paste to .env file and replace index.js pass and user name as ${process.env.NAme} and ${process.env.pass}
 * 8.Delete .client portion which copied from mon godb
 * 
 *  --------------------------------------------
 *  Data Load
 * --------------------------------------------
 * 1.go to --->https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/
 * 2.create async run function --> which contain try finally--> and call run function
 * 3.create ap api ---> follow upper documentation.
 ***/