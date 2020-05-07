[![CircleCI](https://circleci.com/gh/w3bdesign/todo-hooks.svg?style=svg)](https://circleci.com/gh/w3bdesign/todo-hooks)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_todo-hooks&metric=alert_status)](https://sonarcloud.io/dashboard?id=w3bdesign_todo-hooks)
[![Netlify Status](https://api.netlify.com/api/v1/badges/664a6adc-81e2-41cc-83e2-f0223f48ba70/deploy-status)](https://app.netlify.com/sites/react-todo-hooks/deploys)

# React TODO with Hooks

The initial release of this project only used useState for state.

I have now done a major refactor in order to use useReducer and useContext.

I have considered utilizing useMemo or useCallback, but I do not think the performance benefit is worth it at this point.

## Current features:

- Ant Design version 4 with the following components: Table, Row, Col, Popconfirm, Icon, Typography, Popup notification
- React Hooks (useState, useReducer and useContext)
- Add, delete and complete TODOs
- Ant Design DatePicker for date selection
- Uuid for unique React key identifier
- Pagination (multiple pages) for table
- Polyfills for IE11 support (only in production)
- Responsive layout for mobile devices
- DevOps integration with CircleCI unit testing
- SonarGate cloud code quality testing

## TODO

- Implement Firebase
