# Parcel tracking service - Development

## Description

Parcel tracking service is a web application designed on Node.js and Express.js setup.

## Architecture

### Problem
The main challenge is unreliable data structure we receive from delivery suppliers. 
We can have hundreds of delivery suppliers and each of them interacts with the service in its own way.
Amount of delivery suppliers can drastically grow.

### Solution
#### Abstract factory pattern
Abstract factory pattern
As a base pattern for the application I chose Abstract factory pattern.

- Simplifies suppliers services creation.
- Allows client to work with data in one common format for each data-provider, not knowing the implementation details and concrete identities.
- Decouples realization and high level modules. So high level modules do not depend on low level modules; both depend on abstractions.


## API Documentation

All the api documentation (Swagger) is available by `/api-docs` url.

## Technical disclaimers
- UPS service was created only in purpose to show how the application can be scaled
- For all the emails the service always returns the same orders. In real world app the service would send client data to a supplier, so supplier would return data for a specific user
- We pass a user email to orders endpoint. In a real app the service would know the client data from token/session info.

## Database
### MongoDB
Considering that suppliers data is not structured and not strictly formatted MongoDB is a good option.
MongoDB is a document-oriented NoSQL database that works with unstructured documents. 
It has high scalability and read performance. 

## How to run

1. Clone the repository: `git clone https://github.com/DenisovAndrey/parcel-tracker-service`
2. Install dependencies:
    1. Switch to Node 18
    2. Run `npm install`
3. Fill out the url address of frontend app if needed to env variable `ALLOWED_ORIGINS`
4. Start the server: `npm run start:dev`
5. Access the URL Shortener interface by visiting `http://localhost:3001/api-docs` in your web browser. (or setup port
   in `process.env.PORT`)

## Available Scripts

In the project directory, you can run:

### `npm run start:dev`

Runs the project in the development mode.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run start`

Runs app that was build.

### `npm run test`

Launches the test runner via Jest and supertest.

### `npm run lint`

Launches ES linter.

