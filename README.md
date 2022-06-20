# Vending Machine

- Express (^4.18.1)
- sequelize (^6.21.0)
- sequelize-cli (^6.4.1)
- Twig (^1.15.4)
- Jest (^28.1.1)
- Supertest (^6.2.3)

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.15.1

    $ npm --version
    8.11.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

## Install

    $ https://github.com/rajakkamesh/vending_machine.git
    $ cd vending_machine
    $ npm install

## Configure app

Configure database settings in config/config.json file and update following values:

- database;
- username;
- password;
- host;

## Running the project
Create database using following command:

    $ npx sequelize-cli db:create

Run database migrations to create tables in the database using following command:;

    $ npx sequelize-cli db:migrate

Now we’ll run seed files to add our products items to the database:

    $ npx sequelize-cli db:seed:all

Now to run application use following command:

    $ npm start

## Run Tests
Test cases were created using supertest and jest, to run the tests invoke following command

    $ npm test

To reset database

    $ npm run db:reset
## Available APIS

  - POST  "/products"
  - GET  "/products"
  - GET  "/products/:id"
  - PUT  "/products/:id"
  - DELETE  "/products/:id"