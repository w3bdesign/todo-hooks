[![CircleCI](https://circleci.com/gh/w3bdesign/todo-hooks.svg?style=svg)](https://circleci.com/gh/w3bdesign/todo-hooks)
[![Netlify Status](https://api.netlify.com/api/v1/badges/664a6adc-81e2-41cc-83e2-f0223f48ba70/deploy-status)](https://app.netlify.com/sites/react-todo-hooks/deploys)

# React TODO with Hooks

The initial release of this project only used useState for state. 

Version 2 will include useContext and useReducer as well as improved readibility and better separation of functions (improved coding standards).

## Currently working on:

- Adding Ant Design DatePicker for date selection 
- Replacing default useState with also useContext and useReducer

## Current features:

- Ant Design version 4 with the following components: Table, Row, Col, Popconfirm, Icon, Typography, Popup notification
- React Hooks (useState and custom React hooks)
- Add, delete and complete TODOs
- Uuid for unique React key identifier
- Pagination (multiple pages) for table
- Polyfills for IE11 support
- Responsive layout for mobile devices
- DevOps integration with CircleCI unit testing

## TODO

- Adding DatePicker to select date for TODO
- Firebase and Firestore (or LocalStorage?) for authentication and storage of TODOs
- Implement more components from Ant design?
- Add more tests
