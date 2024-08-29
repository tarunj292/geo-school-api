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
   git clone https://github.com/tarunj292
   /school-management-api.git
   cd school-management-api
   ```
2. **Install Dependencies**

  ```bash
  npm install
  ```
3. **Set Up Environment Variables**
Create a .env file in the root directory and add the following variables:
  ```
  MYSQLHOST=localhost
  MYSQLUSER=root
  MYSQLPASSWORD=yourpassword
  MYSQLDATABASE=yourdatabasename
  MYSQLPORT=3306
  ```

4. **Running the Application** 

  #1. ***Start the Server***
  ```bash
  npm start
  ```
The server will be running on http://localhost:3000.

  #2. ***Run with Nodemon (for Development)***
  ```bash
  npm run dev
  ```
