# PasswordManager
This is a simple personal password manager tool developed using TypeScript and Angular. It allows users to securely store and manage their passwords for different applications.


## Features
The password manager tool comes with the following features:

Add Password: Users can add a new encrypted password to their list of stored passwords by providing details such as category, application, username, and the encrypted password.

View Passwords: Users can view a list of all their stored passwords, categorized by the type of application.

Get Single Password: Users can select a single password from their list of stored passwords to view its details.

Edit Password: Users can edit the details of a stored password, including the password itself. The password is decrypted for editing purposes and re-encrypted once the changes are saved.

Delete Password: Users can delete a stored password from their list of passwords.


## Setup

To set up the password manager tool, follow these steps:

Clone the repository to your local machine.

Install the dependencies using the following command:

`npm install`


Start the development server using the following command:

`ng serve`

Navigate to http://localhost:4200/ in your web browser to access the password manager tool.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.



## API
Start the JSON server using the following command:

`npm install -g json-server`

`json-server --watch db.json`

## Password Storage Format

Passwords are stored in the following format:

```json
{
  "passwords": [
    {
      "category": "Home",
      "app": "Whatsapp",
      "userName": "test2@test.com",
      "encryptedPassword": "SWRvbnRLbm93",
      "id": 2
    },
    {
      "category": "Home",
      "app": "Facebook",
      "userName": "Test3@test.com",
      "encryptedPassword": "bm90Zm91bmQ=",
      "id": 3
    },
    {
      "category": "Home",
      "app": "Linkedin",
      "userName": "test4@test.com",
      "encryptedPassword": "TGlzdGVudG9tZWFnYWlu",
      "id": 5
    }
  ]
}
```
Passwords are encrypted using Base64 encoding.