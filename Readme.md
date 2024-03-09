# Quizzy

A full-stack web application where users can create quizzes, publish them, and share the link with others. Users can take quizzes under a given time, and the results will be posted to the admin user who created the quiz for report generation.

## Project Setup

To set up the project, you will need to have Node.js and TypeScript installed. Once you have the prerequisites installed, you can clone the repository and run the following commands:

```
npm install
npm run dev
```

This will start the development server. <br/>
You can then open your browser and navigate to http://localhost:[PORT] to view the application.

## Project Structure

The project is structured as follows:

```
src/
├── app/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── services/
├── index.ts
├── tsconfig.json
└── package.json
```

The src/app/ directory contains the application code. The _**src/index.ts**_ file is the entry point for the application.

The _tsconfig.json_ file contains the TypeScript configuration settings. The package.json file contains the project dependencies and scripts.

## Commands

The following commands are available:

```
npm start:            Starts the development server.
npm run dev:          Starts the development server with Nodemon.
npm run prepare:      Installs Husky.
npm run commit:       Commits changes with Commitizen.
npm run build:        Transpiles TypeScript to JavaScript.
npm run delete:       Deletes the dist/ directory.
```

To use the application, users can create an account and then start creating quizzes. Once a quiz is created, users can publish it and share the link with others. Users can then take the quiz under a given time, and the results will be posted to the admin user who created the quiz for report generation.

## Conclusion

Quizzy is a full-stack web application that allows users to create, publish, and take quizzes. The application is easy to use and provides users with a variety of features, such as reporting and analytics.
