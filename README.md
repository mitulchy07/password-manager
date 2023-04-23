# PasswordManager
This is a simple personal password manager tool developed using TypeScript and Angular. It allows users to securely store and manage their passwords for different applications.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.


## Features
The password manager tool comes with the following features:

Add Password: Users can add a new encrypted password to their list of stored passwords by providing details such as category, application, username, and the encrypted password.

View Passwords: Users can view a list of all their stored passwords, categorized by the type of application.

Get Single Password: Users can select a single password from their list of stored passwords to view its details.

Edit Password: Users can edit the details of a stored password, including the password itself. The password is decrypted for editing purposes and re-encrypted once the changes are saved.

Delete Password: Users can delete a stored password from their list of passwords.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Password Storage Format

Passwords are stored in the following format:

[
  { 
    id: 1, 
    category: 'work', 
    app: 'outlook', 
    userName: 'testuser@mytest.com', 
    encryptedPassword: 'TXlQYXNzd29yZEAxMjM=' 
  },
  { 
    id: 2, 
    category: 'school', 
    app: 'messenger', 
    userName: 'testuser@mytest.com', 
    encryptedPassword: 'TmV3UGFzc3dvcmRAMTIz' 
  }
]
Passwords are encrypted using Base64 encoding.

## Setup

To set up the password manager tool, follow these steps:

Clone the repository to your local machine.

Install the dependencies using the following command:

npm install


Start the development server using the following command:

ng serve

Navigate to http://localhost:4200/ in your web browser to access the password manager tool.


## API
Start the development server using the following command:

json-server --watch db.json

