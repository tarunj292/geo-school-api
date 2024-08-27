# GeoSchool api
The objective of this project is to develop a set of Node.js APIs using the Express.js framework and MySQL to manage school data. This system will provide functionalities to add new schools to a database and retrieve a list of schools sorted by proximity to a user-specified location.

## Overview

The School Management API provides functionalities to manage school data using Node.js, Express.js, and MySQL. It allows users to add new schools to a database and retrieve a list of schools sorted by proximity to a user-specified location.

## Features

- **Add School API**: Add new school records with name, address, latitude, and longitude.
- **List Schools API**: Retrieve a list of schools sorted by proximity to a given location.

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- MySQL (version 5.7 or higher)
- Postman (for testing APIs)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/<yourusername>/school-management-api.git
   cd school-management-api
   ```
2. **Install Dependencies**

  ```bash
  npm install
  ```
3. **Set Up Environment Variables**
Create a .env file in the root directory and add the following variables:
  ```
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=yourpassword
  MYSQL_DB=yourdatabasename
  DB_PORT=3306
  ```
4. **Set Up the Database**

Create a MySQL database named school_database.
Use the provided SQL script to set up the schools table.

5. **Running the Application** 

  #1. ***Start the Server***
  ```bash
  npm start
  ```
The server will be running on http://localhost:3000.

  #2. ***Run with Nodemon (for Development)***
  ```bash
  npm run dev
  ```
<!--API Endpoints
Add School API
Endpoint: /addSchool

Method: POST

Payload:

json
Copy code
{
  "name": "School Name",
  "address": "School Address",
  "latitude": 12.3456,
  "longitude": 65.4321
}
Response:

201 Created on successful addition.
400 Bad Request for validation errors.
List Schools API
Endpoint: /listSchools

Method: GET

Parameters:

latitude (User’s latitude)
longitude (User’s longitude)
Response:

200 OK with a list of schools sorted by proximity.
400 Bad Request if parameters are missing.
Postman Collection
A Postman collection is available for testing the APIs. Download the Postman collection.

Deployment
The API can be deployed on any suitable hosting service such as Heroku, Vercel, or AWS. Detailed deployment instructions can be found in the DEPLOYMENT.md file.

Contributing
Feel free to submit issues or pull requests. For more information on contributing, please refer to CONTRIBUTING.md.-->
